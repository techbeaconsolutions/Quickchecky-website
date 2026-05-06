'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, CompareArrows, Savings } from '@mui/icons-material';
import { GlassCard } from './glass-card';

const MotionBox = motion.create(Box);

const steps = [
  {
    icon: Search,
    title: 'Search Product',
    description: 'Type the name of any grocery item you want to buy',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
  },
  {
    icon: CompareArrows,
    title: 'Compare Prices',
    description: 'See real-time prices across Blinkit, Zepto & Instamart',
    gradient: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
  },
  {
    icon: Savings,
    title: 'Save Money',
    description: 'Choose the cheapest option and save on every order',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
  },
];

export function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 8 }}
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
            SIMPLE PROCESS
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
            How It{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Works
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}
          >
            Three simple steps to start saving on your grocery bills
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            position: 'relative',
          }}
        >
          {/* Connection Line */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '80px',
              left: '20%',
              right: '20%',
              height: 2,
              background: (theme) =>
                `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              opacity: 0.3,
            }}
          />

          {steps.map((step, idx) => (
            <MotionBox
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <GlassCard
                hover3D
                glowColor={idx === 0 ? 'rgba(167, 139, 250, 0.2)' : idx === 1 ? 'rgba(34, 211, 238, 0.2)' : 'rgba(52, 211, 153, 0.2)'}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <MotionBox
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '24px',
                    background: step.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    boxShadow: `0 10px 40px ${
                      idx === 0
                        ? 'rgba(167, 139, 250, 0.4)'
                        : idx === 1
                        ? 'rgba(34, 211, 238, 0.4)'
                        : 'rgba(52, 211, 153, 0.4)'
                    }`,
                  }}
                >
                  <step.icon sx={{ fontSize: 36, color: 'white' }} />
                </MotionBox>

                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 1,
                    display: 'block',
                  }}
                >
                  STEP {idx + 1}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
                >
                  {step.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {step.description}
                </Typography>
              </GlassCard>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
