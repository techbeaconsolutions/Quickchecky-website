'use client';

import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

interface GlassCardProps extends Omit<BoxProps, 'component'> {
  children: ReactNode;
  hover3D?: boolean;
  glowColor?: string;
}

const MotionBox = motion.create(Box);

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, hover3D = false, glowColor, sx, ...props }, ref) => {
    return (
      <MotionBox
        ref={ref}
        whileHover={hover3D ? { 
          rotateX: 5, 
          rotateY: 5, 
          scale: 1.02,
          transition: { duration: 0.3 }
        } : undefined}
        sx={{
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(30, 30, 46, 0.6)'
              : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: (theme) =>
            `1px solid ${
              theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(255, 255, 255, 0.3)'
            }`,
          boxShadow: (theme) =>
            theme.palette.mode === 'dark'
              ? `0 8px 32px rgba(0, 0, 0, 0.3)${glowColor ? `, 0 0 40px ${glowColor}` : ''}`
              : `0 8px 32px rgba(0, 0, 0, 0.1)${glowColor ? `, 0 0 40px ${glowColor}` : ''}`,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          ...sx,
        }}
        {...props}
      >
        {children}
      </MotionBox>
    );
  }
);

GlassCard.displayName = 'GlassCard';
