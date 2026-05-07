'use client';

import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { useThemeContext } from '../theme-provider';

export function AnimatedBackground() {
  const { isDark } = useThemeContext();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        background: isDark 
          ? 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        transition: 'background 0.5s ease',
      }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <motion.div
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, 40, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '40%',
          right: '5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, -30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: 450,
          height: 450,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(244, 114, 182, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Grid overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }}
      />

      {/* Noise texture overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: isDark ? 0.03 : 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </Box>
  );
}
