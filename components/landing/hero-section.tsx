'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Apple, Android } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { PhoneMockup } from './phone-mockup';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, md: 8 },
        pb: { xs: 8, md: 0 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient Orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: 'block',
                }}
              >
                SMART GROCERY SHOPPING
              </Typography>
            </MotionBox>

            <MotionTypography
              variant="h1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              sx={{
                mb: 3,
                color: 'text.primary',
              }}
            >
              Compare Grocery Prices{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Instantly
              </Box>
            </MotionTypography>

            <MotionTypography
              variant="h6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                mb: 4,
                maxWidth: 500,
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.7,
              }}
            >
              Find the cheapest prices across Blinkit, Zepto & Instamart in seconds. 
              Save money on every grocery order with real-time price comparison.
            </MotionTypography>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Apple />}
                  sx={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 40px rgba(167, 139, 250, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  App Store
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Android />}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      borderColor: 'primary.light',
                      background: 'rgba(167, 139, 250, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Play Store
                </Button>
              </Stack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              sx={{
                mt: 4,
                display: 'flex',
                gap: 4,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  50K+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Active Users
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  ₹2Cr+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Saved Monthly
                </Typography>
              </Box>
            </MotionBox>
          </Box>

          {/* Right Content - Phone Mockup */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <PhoneMockup />
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
