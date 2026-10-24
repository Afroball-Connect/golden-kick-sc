'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  function toggleTheme() {
    const current: Theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    const next: Theme = current === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem('golden-kick-theme', next);
    } catch {
      // The theme still works for this visit when storage is unavailable.
    }
    setTheme(next);
  }

  const target = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      className={`theme-toggle${className ? ` ${className}` : ''}`}
      type="button"
      aria-label={`Switch to ${target} mode`}
      aria-pressed={theme === 'light'}
      title={`Switch to ${target} mode`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path d="M20.2 15.1A8.6 8.6 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
