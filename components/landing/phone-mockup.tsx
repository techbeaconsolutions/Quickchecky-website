'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

interface PhoneMockupProps {
  screenshotUrl?: string;
}

export function PhoneMockup({ 
  screenshotUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Of9y8emygl5CHwBH7GbyenipKMl0zk.png' 
}: PhoneMockupProps) {
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
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
        border: '8px solid #2a2a4a',
        boxShadow: `
          0 50px 100px rgba(0, 0, 0, 0.5),
          0 0 60px rgba(167, 139, 250, 0.3),
          inset 0 0 20px rgba(0, 0, 0, 0.3)
        `,
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Notch */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 100,
          height: 28,
          borderRadius: '20px',
          background: '#0a0a0f',
          zIndex: 10,
        }}
      />

      {/* Screen Content - Real Screenshot */}
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
        <Box
          component="img"
          src={screenshotUrl}
          alt="Quick Commerce Compare App"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
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
