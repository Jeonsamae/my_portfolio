'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="absolute top-6 right-6 text-2xl p-2 rounded-full bg-white dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
