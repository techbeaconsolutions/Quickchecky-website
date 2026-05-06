'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Apple, Android, ArrowForward } from '@mui/icons-material';

const MotionBox = motion.create(Box);

export function CTASection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, transparent 0%, rgba(167, 139, 250, 0.1) 50%, rgba(34, 211, 238, 0.1) 100%)'
              : 'linear-gradient(180deg, transparent 0%, rgba(167, 139, 250, 0.05) 50%, rgba(34, 211, 238, 0.05) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Orbs */}
      <MotionBox
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <MotionBox
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <MotionBox
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            sx={{
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(30, 30, 46, 0.6)'
                  : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              borderRadius: '32px',
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.3)'
                }`,
              boxShadow: '0 20px 80px rgba(167, 139, 250, 0.2)',
              p: { xs: 4, md: 8 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: 'text.primary',
              }}
            >
              Start{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Saving Today
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                mb: 4,
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Download Quick Commerce Compare and never overpay for groceries again. 
              Join 50,000+ smart shoppers across India.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Apple />}
                endIcon={<ArrowForward />}
                sx={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 15px 50px rgba(167, 139, 250, 0.5)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Download for iOS
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={<Android />}
                endIcon={<ArrowForward />}
                sx={{
                  background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 15px 50px rgba(52, 211, 153, 0.5)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Download for Android
              </Button>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mt: 3,
              }}
            >
              Free to download. No hidden fees.
            </Typography>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
