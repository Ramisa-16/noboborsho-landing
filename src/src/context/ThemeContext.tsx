import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ThemeColors } from '../types';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeColorsMap: Record<Theme, ThemeColors> = {
  light: {
    primary: '#b22222',
    primaryDark: '#8b0000',
    primaryLight: '#dc143c',
    accent: '#fff',
    bg: '#fff',
    bgAlt: '#fdf5f5',
    text: '#1a1a1a',
    textMuted: '#555',
    border: '#ffe0e0',
    shadow: 'rgba(180,0,0,0.06)',
    shadowHover: 'rgba(180,0,0,0.12)',
  },
  dark: {
    primary: '#ff6b6b',
    primaryDark: '#cc0000',
    primaryLight: '#ff8e8e',
    accent: '#f5f5f5',
    bg: '#1a0a0a',
    bgAlt: '#2a1010',
    text: '#f5e6e6',
    textMuted: '#c9b0b0',
    border: '#4a2020',
    shadow: 'rgba(255,100,100,0.08)',
    shadowHover: 'rgba(255,100,100,0.18)',
  },
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return 'light';
  });

  const colors = ThemeColorsMap[theme];

  const setThemeSafe = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme, setTheme: setThemeSafe }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
