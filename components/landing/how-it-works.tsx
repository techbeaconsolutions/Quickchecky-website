'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { Search, CompareArrows, Savings } from '@mui/icons-material';
import { GlassCard } from './glass-card';
import { useThemeMode } from '@/components/theme-provider';

const MotionBox = motion.create(Box);

// Theme-specific step screenshots
const stepScreenshots = {
  light: [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.06%20AM-33EupBaWZGzGi7gtdAGZbdAsd8Hkeu.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.09%20AM-OQJJ6TZgFPyMr9MvYKSAPczNBOJ7hI.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.10%20AM%20%281%29-aV1hBs7IofY9MU4fKSlNIdjlUTkrdI.jpeg',
  ],
  dark: [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.12%20AM%20%282%29-uS3p005iNBhnDpcWBPaAXt8k5h5P0q.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.13%20AM%20%281%29-SDUQ9uf0kaF4BuiZYFV3ZKZBMcOwgy.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.13%20AM%20%283%29-Wzw0NuBvKTMyqABThlb2PG1S1plSuw.jpeg',
  ],
};

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

interface StepPhoneProps {
  screenshotUrl: string;
  index: number;
  themeMode: 'light' | 'dark';
}

function StepPhone({ screenshotUrl, index, themeMode }: StepPhoneProps) {
  return (
    <MotionBox
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: index * 0.5,
        ease: 'easeInOut',
      }}
      sx={{
        width: 140,
        height: 280,
        borderRadius: '24px',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(145deg, #2a2a4a 0%, #1a1a2e 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f5f5fa 100%)',
        border: (theme) =>
          theme.palette.mode === 'dark'
            ? '4px solid #3a3a5a'
            : '4px solid #e0e0e8',
        boxShadow: (theme) =>
          theme.palette.mode === 'dark'
            ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(167, 139, 250, 0.15)'
            : '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 30px rgba(34, 211, 238, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <Box
        sx={{
          position: 'absolute',
          top: 4,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 40,
          height: 12,
          borderRadius: '8px',
          background: '#0a0a0f',
          zIndex: 10,
        }}
      />

      {/* Screenshot */}
      <Box
        sx={{
          position: 'absolute',
          top: 4,
          left: 4,
          right: 4,
          bottom: 4,
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={`${themeMode}-${index}`}
            component="img"
            src={screenshotUrl}
            alt={`Step ${index + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </AnimatePresence>
      </Box>

      {/* Glare */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)',
          pointerEvents: 'none',
        }}
      />
    </MotionBox>
  );
}

export function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { mode } = useThemeMode();
  const screenshots = stepScreenshots[mode];

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
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
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
              top: '120px',
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
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Mini Phone Preview */}
                <Box sx={{ mb: 3 }}>
                  <StepPhone 
                    screenshotUrl={screenshots[idx]} 
                    index={idx} 
                    themeMode={mode} 
                  />
                </Box>

                <MotionBox
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '16px',
                    background: step.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    boxShadow: `0 8px 30px ${
                      idx === 0
                        ? 'rgba(167, 139, 250, 0.4)'
                        : idx === 1
                        ? 'rgba(34, 211, 238, 0.4)'
                        : 'rgba(52, 211, 153, 0.4)'
                    }`,
                  }}
                >
                  <step.icon sx={{ fontSize: 28, color: 'white' }} />
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
