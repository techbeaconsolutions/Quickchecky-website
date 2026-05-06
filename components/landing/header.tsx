'use client';

import { AppBar, Toolbar, Box, Button, IconButton, Typography } from '@mui/material';
import { LightMode, DarkMode, ShoppingCart } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useThemeMode } from '@/components/theme-provider';

const MotionBox = motion.create(Box);

export function Header() {
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(10, 10, 15, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: (theme) =>
          `1px solid ${
            theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.05)'
          }`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShoppingCart sx={{ color: 'white', fontSize: 22 }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            QuickCompare
          </Typography>
        </MotionBox>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            onClick={toggleMode}
            sx={{
              color: 'text.secondary',
              '&:hover': {
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)',
              },
            }}
          >
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
              },
            }}
          >
            Download App
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
