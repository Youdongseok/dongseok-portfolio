import { animate } from 'motion';
import { useTheme } from '../hooks/useTheme.js';

export default function ThemeToggle() {
  const { theme, toggleTheme, reduceMotion } = useTheme();

  const onToggle = event => {
    if (!reduceMotion) {
      animate(
        event.currentTarget,
        { rotate: [0, 360], scale: [1, 0.8, 1] },
        { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      );
    }
    toggleTheme(event.currentTarget);
  };

  return (
    <button
      className="theme-toggle grid size-[30px] shrink-0 place-items-center rounded-full bg-[var(--soft)] text-[var(--ink)] transition-colors duration-300 hover:bg-[var(--indigo-soft)]"
      data-a
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onToggle}
    >
      {theme === 'dark' ? (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="text-[var(--orange)]"
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
        </svg>
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[var(--indigo)]"
        >
          <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" />
        </svg>
      )}
    </button>
  );
}
