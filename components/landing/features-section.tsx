'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Bolt,
  Schedule,
  Phonelink,
  TrendingUp,
  Notifications,
  Security,
} from '@mui/icons-material';
import { GlassCard } from './glass-card';

const MotionBox = motion.create(Box);

const features = [
  {
    icon: Bolt,
    title: 'Lightning Fast',
    description: 'Get instant price comparisons in under a second',
    gradient: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
  },
  {
    icon: Schedule,
    title: 'Real-time Prices',
    description: 'Prices updated every 5 minutes for accuracy',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
  },
  {
    icon: Phonelink,
    title: 'Multi-App Compare',
    description: 'Compare across Blinkit, Zepto & Instamart',
    gradient: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
  },
  {
    icon: TrendingUp,
    title: 'Price History',
    description: 'Track price trends over time for better deals',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
  },
  {
    icon: Notifications,
    title: 'Price Alerts',
    description: 'Get notified when prices drop on your favorites',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
  },
  {
    icon: Security,
    title: 'Secure & Private',
    description: 'Your shopping data stays private and secure',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
  },
];

export function FeaturesSection() {
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
            FEATURES
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
            Everything You{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Need
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}
          >
            Powerful features designed to help you save money on groceries
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {features.map((feature, idx) => (
            <MotionBox
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                hover3D
                sx={{
                  p: 3,
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    '& .feature-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                  },
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '16px',
                    background: feature.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <feature.icon sx={{ fontSize: 28, color: 'white' }} />
                </Box>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                >
                  {feature.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
              </GlassCard>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
