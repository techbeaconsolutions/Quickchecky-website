'use client';

import { AppBar, Toolbar, Box, Button, IconButton, Typography, Tooltip } from '@mui/material';
import { LightMode, DarkMode, ShoppingCart } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeMode } from '@/components/theme-provider';

const MotionBox = motion.create(Box);
const MotionIconButton = motion.create(IconButton);

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
        backdropFilter: 'blur(5px)',
        borderBottom: (theme) =>
          `1px solid ${theme.palette.mode === 'dark'
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
          {/* <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          > */}
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: 22,
                height: 22,
                objectFit: 'contain',
              }}
            />
          {/* </Box> */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Quickchecky
          </Typography>
        </MotionBox>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Theme Toggle with Animation */}
          <Tooltip title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <MotionIconButton
              onClick={toggleMode}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                width: 44,
                height: 44,
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(34, 211, 238, 0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(34, 211, 238, 0.15) 100%)',
                border: (theme) =>
                  theme.palette.mode === 'dark'
                    ? '1px solid rgba(167, 139, 250, 0.3)'
                    : '1px solid rgba(34, 211, 238, 0.3)',
                '&:hover': {
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(167, 139, 250, 0.3) 0%, rgba(34, 211, 238, 0.3) 100%)'
                      : 'linear-gradient(135deg, rgba(167, 139, 250, 0.25) 0%, rgba(34, 211, 238, 0.25) 100%)',
                },
              }}
            >
              <AnimatePresence mode="wait">
                <MotionBox
                  key={mode}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {mode === 'dark' ? (
                    <LightMode
                      sx={{
                        color: '#FFD93D',
                        filter: 'drop-shadow(0 0 8px rgba(255, 217, 61, 0.5))',
                      }}
                    />
                  ) : (
                    <DarkMode
                      sx={{
                        color: '#A78BFA',
                        filter: 'drop-shadow(0 0 8px rgba(167, 139, 250, 0.5))',
                      }}
                    />
                  )}
                </MotionBox>
              </AnimatePresence>
            </MotionIconButton>
          </Tooltip>

          <Button
                                href="https://play.google.com/store/apps/details?id=com.pratikostwal.quickcommercecompare"
                      target="_blank"
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              color: 'white',
              px: 3,
              '&:hover': {
                background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(167, 139, 250, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Download App
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
