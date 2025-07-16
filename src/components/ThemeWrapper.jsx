import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeWrapper({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [mounted, setMounted] = useState(false);

  // Ensure the correct theme is applied to <html> early
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Delay mounting just enough to avoid flicker
  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 50); // tweak if needed
    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setMounted(false); // force fade out before new theme applies
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  if (!mounted) return null; // hold render until theme + mount is ready

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen"
      >
        {children({ theme, toggleTheme })}
      </motion.div>
    </AnimatePresence>
  );
}
