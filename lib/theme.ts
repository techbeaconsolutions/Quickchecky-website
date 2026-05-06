'use client';

import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    glass: {
      background: string;
      border: string;
    };
    gradient: {
      primary: string;
      secondary: string;
      accent: string;
    };
  }
  interface PaletteOptions {
    glass?: {
      background: string;
      border: string;
    };
    gradient?: {
      primary: string;
      secondary: string;
      accent: string;
    };
  }
}

const baseTheme = {
  typography: {
    fontFamily: '"Inter", "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none' as const,
          fontWeight: 600,
          padding: '12px 24px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#7C3AED',
      light: '#A78BFA',
      dark: '#5B21B6',
    },
    secondary: {
      main: '#06B6D4',
      light: '#22D3EE',
      dark: '#0891B2',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    glass: {
      background: alpha('#FFFFFF', 0.7),
      border: alpha('#FFFFFF', 0.3),
    },
    gradient: {
      primary: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
      secondary: 'linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)',
      accent: 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)',
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#A78BFA',
      light: '#C4B5FD',
      dark: '#7C3AED',
    },
    secondary: {
      main: '#22D3EE',
      light: '#67E8F9',
      dark: '#06B6D4',
    },
    background: {
      default: '#0A0A0F',
      paper: '#111118',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    glass: {
      background: alpha('#1E1E2E', 0.6),
      border: alpha('#FFFFFF', 0.1),
    },
    gradient: {
      primary: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
      secondary: 'linear-gradient(135deg, #F472B6 0%, #A78BFA 100%)',
      accent: 'linear-gradient(135deg, #22D3EE 0%, #34D399 100%)',
    },
  },
});
