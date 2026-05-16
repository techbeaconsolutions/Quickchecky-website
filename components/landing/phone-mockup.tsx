'use client';

import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeMode } from '@/components/theme-provider';

const MotionBox = motion.create(Box);

// Theme-specific screenshots
const screenshots = {
  light: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.10%20AM-dmCBwfoYw2GgqBEWSQgjruGN2ae3YJ.jpeg',
  dark: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.13%20AM%20%282%29-rEVbrUKjDEgOAbzoW2mVcJkOyMKOrR.jpeg',
};

export function PhoneMockup() {
  const { mode } = useThemeMode();
  const screenshotUrl = screenshots[mode];

  return (
    <MotionBox
      animate={{
        rotateY: [0, 5, 0, -5, 0],
        rotateX: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      sx={{
        width: { xs: 280, md: 320 },
        height: { xs: 560, md: 640 },
        borderRadius: '40px',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f0f0f5 100%)',
        border: (theme) =>
          theme.palette.mode === 'dark'
            ? '8px solid #2a2a4a'
            : '8px solid #e0e0e8',
        boxShadow: (theme) =>
          theme.palette.mode === 'dark'
            ? `
          0 50px 100px rgba(0, 0, 0, 0.5),
          0 0 60px rgba(167, 139, 250, 0.3),
          inset 0 0 20px rgba(0, 0, 0, 0.3)
        `
            : `
          0 50px 100px rgba(0, 0, 0, 0.15),
          0 0 60px rgba(34, 211, 238, 0.2),
          inset 0 0 20px rgba(255, 255, 255, 0.5)
        `,
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Notch */}
      {/* Small Camera Dot */}
<Box
  sx={{
    position: 'absolute',
    top: 14,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 12,
    height: 12,
    borderRadius: '50%',
    background: '#1a1a1a',
    zIndex: 10,
  }}
/>

      {/* Screen Content - Real Screenshot with Crossfade */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          right: 8,
          bottom: 8,
          borderRadius: '32px',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={mode}
            component="img"
            src={screenshotUrl}
            alt="Quick Commerce Compare App"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </AnimatePresence>
      </Box>

      {/* Screen Glare Effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '40px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </MotionBox>
  );
}
