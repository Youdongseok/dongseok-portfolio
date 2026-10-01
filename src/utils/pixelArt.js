const FPS = 24
const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'

const hex = (value) => {
  let h = value.trim().replace('#', '')
  if (h.length === 3) h = [...h].map((char) => char + char).join('')
  const n = Number.parseInt(h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

const mix = (a, b, t) => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
]

const rgba = (color, alpha = 1) => `rgba(${color[0] | 0},${color[1] | 0},${color[2] | 0},${alpha})`

const hash = (x, y) => {
  let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263)
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

function readPalette() {
  const root = document.documentElement
  const styles = getComputedStyle(root)
  const get = (token) => hex(styles.getPropertyValue(token))
  return {
    indigo: get('--indigo'),
    mauve: get('--mauve'),
    orange: get('--orange'),
    bg: get('--art-bg'),
  }
}

function makeGradient(palette, t) {
  const clamped = Math.min(1, Math.max(0, t))
  return clamped < 0.5
    ? mix(palette.indigo, palette.mauve, clamped * 2)
    : mix(palette.mauve, palette.orange, (clamped - 0.5) * 2)
}

const renderers = {
  columns(ctx, w, h, t, pal) {
    const grad = (v) => makeGradient(pal, v)
    const s = 3
    const cols = Math.ceil(w / s)
    const rows = Math.ceil(h / s)
    ctx.fillStyle = rgba(pal.bg)
    ctx.fillRect(0, 0, w, h)
    const tick = Math.floor(t * 10)

    for (let c = 0; c < cols; c += 1) {
      if (c % 4 === 3) continue
      const g = Math.floor(c / 4)
      let hf = 0.42 + 0.22 * Math.sin(t * 1.1 + g * 0.7) + 0.14 * Math.sin(t * 0.6 + g * 1.9)
      hf = Math.min(0.92, Math.max(0.14, hf))
      const top = rows * (1 - hf)

      for (let r = 0; r < rows; r += 1) {
        if (r >= top) {
          const alpha = 0.85 + 0.15 * hash(c, r + tick)
          ctx.fillStyle = rgba(grad((r - top) / (rows - top + 0.001)), alpha)
          ctx.fillRect(c * s, r * s, s - 0.6, s - 0.6)
        } else {
          const distance = top - r
          const probability = Math.exp(-distance / 3.2) * 0.9
          if (hash(c * 7, r + tick) < probability) {
            ctx.fillStyle = rgba(grad(0), 0.2 + 0.6 * probability)
            ctx.fillRect(c * s, r * s, s - 0.6, s - 0.6)
          }
        }
      }
    }
  },

  ticker(ctx, w, h, t, pal) {
    const grad = (v) => makeGradient(pal, v)
    ctx.fillStyle = rgba(pal.bg)
    ctx.fillRect(0, 0, w, h)
    const fs = 7
    ctx.font = `600 ${fs}px ${MONO}`
    ctx.textBaseline = 'top'
    const cw = ctx.measureText('M').width + 0.4
    const cols = Math.ceil(w / cw) + 1
    const rows = Math.floor(h / fs)
    const speed = 5
    const pos = t * speed
    const off = Math.floor(pos)
    const frac = pos - off
    const val = (i) => 0.5 + 0.22 * Math.sin(i * 0.33) + 0.12 * Math.sin(i * 0.87 + 1.3) + (hash(i, 3) - 0.5) * 0.16
    const ramp = '@#*+=-:. '

    for (let c = 0; c < cols; c += 1) {
      const value = val(c + off) * (1 - frac) + val(c + off + 1) * frac
      const line = Math.round((1 - value) * (rows - 1))
      const x = (c - frac) * cw

      for (let r = 0; r < rows; r += 1) {
        const y = r * fs + (h - rows * fs) / 2
        if (r < line) {
          if (r % 2 === 0 && (c + off) % 3 === 0) {
            ctx.fillStyle = rgba(grad(0), 0.18)
            ctx.fillText('.', x, y)
          }
          continue
        }
        const depth = r - line
        const char = depth === 0 ? '@' : ramp[Math.min(ramp.length - 1, depth)]
        ctx.fillStyle = rgba(grad(r / rows), depth === 0 ? 1 : Math.max(0.25, 0.9 - depth * 0.12))
        ctx.fillText(char, x, y)
      }
    }
  },

  globe(ctx, w, h, t, pal) {
    const grad = (v) => makeGradient(pal, v)
    ctx.fillStyle = rgba(pal.bg)
    ctx.fillRect(0, 0, w, h)
    const fs = 6.5
    ctx.font = `600 ${fs}px ${MONO}`
    ctx.textBaseline = 'top'
    const cw = ctx.measureText('M').width + 0.3
    const cols = Math.floor(w / cw)
    const rows = Math.floor(h / fs)
    const ox = (w - cols * cw) / 2
    const oy = (h - rows * fs) / 2
    const ramp = ' .:-=+*#%@'
    const a = t * 0.55
    const ca = Math.cos(a)
    const sa = Math.sin(a)
    const b = 0.38
    const cb = Math.cos(b)
    const sb = Math.sin(b)
    const R = 0.8
    const tick = Math.floor(t * 6)

    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        const nx = (((c + 0.5) / cols) * 2 - 1) / R
        const ny = (((r + 0.5) / rows) * 2 - 1) / R
        const d = nx * nx + ny * ny
        const x = ox + c * cw
        const y = oy + r * fs

        if (d > 1) {
          if (hash(c + tick, r * 3) > 0.965) {
            ctx.fillStyle = rgba(grad(r / rows), 0.45)
            ctx.fillText('.', x, y)
          }
          continue
        }

        const nz = Math.sqrt(1 - d)
        const x1 = nx * ca + nz * sa
        const z1 = -nx * sa + nz * ca
        const y2 = ny * cb - z1 * sb
        const z2 = ny * sb + z1 * cb
        const lon = Math.atan2(x1, z2)
        const lat = Math.asin(Math.max(-1, Math.min(1, y2)))
        const fractional = (v) => v - Math.floor(v)
        const grid = Math.abs(fractional(lon / (Math.PI / 6)) - 0.5) > 0.4 || Math.abs(fractional(lat / (Math.PI / 7)) - 0.5) > 0.38
        const light = Math.max(0, -0.45 * nx - 0.4 * ny + 0.8 * nz)
        const value = Math.min(0.999, 0.1 + 0.4 * light + (grid ? 0.5 : 0))
        const char = ramp[Math.floor(value * ramp.length)]
        if (char === ' ') continue
        ctx.fillStyle = rgba(grad((ny * R + 1) / 2), grid ? 0.95 : 0.3 + 0.5 * light)
        ctx.fillText(char, x, y)
      }
    }
  },

  mosaic(ctx, w, h, t, pal) {
    const grad = (v) => makeGradient(pal, v)
    ctx.fillStyle = rgba(pal.bg)
    ctx.fillRect(0, 0, w, h)
    const s = 3
    const cols = Math.ceil(w / s)
    const rows = Math.ceil(h / s)
    const tick = Math.floor(t * 8)

    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        let n = 0.5 + 0.35 * Math.sin(c * 0.55 + t * 1.6) * Math.cos(r * 0.7 - t * 1.1) + (hash(c, r + tick) - 0.5) * 0.35
        n = Math.round(Math.min(1, Math.max(0, n)) * 4) / 4
        if (n <= 0.25 && hash(c * 5, r + tick) > 0.4) continue
        ctx.fillStyle = rgba(grad(0.15 + (r / rows) * 0.85), 0.35 + n * 0.65)
        ctx.fillRect(c * s, r * s, s - 0.5, s - 0.5)
      }
    }
  },
}

export function createPixelArtController(element, type) {
  const render = renderers[type]
  if (!render) return () => {}

  const canvas = document.createElement('canvas')
  canvas.className = 'absolute inset-0 block h-full w-full'
  canvas.setAttribute('aria-hidden', 'true')
  element.prepend(canvas)

  const ctx = canvas.getContext('2d')
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  let palette = readPalette()
  let width = 0
  let height = 0
  let visible = true
  let time = 0
  let frame = 0
  let last = 0
  const startedAt = performance.now()

  const draw = () => {
    if (width && height) render(ctx, width, height, time, palette)
  }

  const fit = () => {
    width = element.clientWidth
    height = element.clientHeight
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    draw()
  }

  const resizeObserver = new ResizeObserver(fit)
  resizeObserver.observe(element)

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
  })
  intersectionObserver.observe(element)

  const mutationObserver = new MutationObserver(() => {
    palette = readPalette()
    draw()
  })
  mutationObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  fit()

  if (reduce) {
    time = 2
    draw()
  } else {
    const loop = (now) => {
      frame = requestAnimationFrame(loop)
      if (now - last < 1000 / FPS) return
      last = now
      if (visible) {
        time = (now - startedAt) / 1000
        draw()
      }
    }
    frame = requestAnimationFrame(loop)
  }

  return () => {
    cancelAnimationFrame(frame)
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
    mutationObserver.disconnect()
    canvas.remove()
  }
}
