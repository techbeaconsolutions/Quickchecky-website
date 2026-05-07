'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Box } from '@mui/material';
import { useThemeContext } from '../theme-provider';

export function MouseFollower() {
  const { isDark } = useThemeContext();
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main glow */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: isDark 
            ? 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      
      {/* Small dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: isDark 
            ? 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)'
            : 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
}

// Parallax container that responds to mouse movement
export function ParallaxContainer({ children, intensity = 0.02 }: { 
  children: React.ReactNode;
  intensity?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 100 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      x.set((e.clientX - centerX) * intensity);
      y.set((e.clientY - centerY) * intensity);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, intensity]);

  return (
    <motion.div style={{ x: xSpring, y: ySpring }}>
      {children}
    </motion.div>
  );
}
