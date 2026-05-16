'use client';

import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/lib/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }
  return context;
}

export function useThemeContext() {
  const { mode, toggleMode } = useThemeMode();

  return {
    mode,
    toggleMode,
    isDark: mode === 'dark',
  };
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    if (savedMode) {
      setMode(savedMode);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setMode('light');
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const contextValue = useMemo(() => ({ mode, toggleMode }), [mode]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
