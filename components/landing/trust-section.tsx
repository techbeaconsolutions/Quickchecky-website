'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GlassCard } from './glass-card';
import { Verified, Groups, ShoppingBag, TrendingUp } from '@mui/icons-material';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const stats = [
  {
    icon: Groups,
    value: '50,000+',
    label: 'Active Users',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
  },
  {
    icon: ShoppingBag,
    value: '2M+',
    label: 'Products Compared',
    gradient: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
  },
  {
    icon: TrendingUp,
    value: '₹2Cr+',
    label: 'Saved Monthly',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
  },
  {
    icon: Verified,
    value: '99.9%',
    label: 'Accuracy Rate',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
  },
];

export function TrustSection() {
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
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, transparent 0%, rgba(167, 139, 250, 0.05) 50%, transparent 100%)'
              : 'linear-gradient(180deg, transparent 0%, rgba(167, 139, 250, 0.03) 50%, transparent 100%)',
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
            TRUSTED BY THOUSANDS
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
            Smart Shopping for{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              India
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
          >
            Join thousands of smart shoppers who are already saving money on their 
            daily groceries with Quick Commerce Compare
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {stats.map((stat, idx) => (
            <MotionBox
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                hover3D
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <MotionBox
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '16px',
                    background: stat.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    boxShadow: `0 10px 30px ${
                      idx === 0
                        ? 'rgba(167, 139, 250, 0.3)'
                        : idx === 1
                        ? 'rgba(34, 211, 238, 0.3)'
                        : idx === 2
                        ? 'rgba(52, 211, 153, 0.3)'
                        : 'rgba(244, 114, 182, 0.3)'
                    }`,
                  }}
                >
                  <stat.icon sx={{ fontSize: 28, color: 'white' }} />
                </MotionBox>

                <MotionTypography
                  variant="h4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    background: stat.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </MotionTypography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
              </GlassCard>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
