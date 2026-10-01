import { useEffect, useMemo, useState } from 'react'

const root = () => document.documentElement

function getSavedTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme)
  } catch {}
}

function getCurrentTheme() {
  return root().dataset.theme === 'dark' ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getCurrentTheme)
  const reduceMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = (event) => {
      if (getSavedTheme()) return
      const next = event.matches ? 'dark' : 'light'
      root().dataset.theme = next
      setTheme(next)
    }

    systemDark.addEventListener('change', onSystemChange)
    return () => systemDark.removeEventListener('change', onSystemChange)
  }, [])

  const toggleTheme = (button) => {
    const next = getCurrentTheme() === 'dark' ? 'light' : 'dark'
    const apply = () => {
      root().dataset.theme = next
      saveTheme(next)
      setTheme(next)
    }

    if (!document.startViewTransition || reduceMotion || document.hidden || !button) {
      apply()
      return
    }

    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    document.startViewTransition(apply).ready.then(() => {
      root().animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        {
          duration: 700,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    }).catch(() => {})
  }

  return { theme, toggleTheme, reduceMotion }
}
