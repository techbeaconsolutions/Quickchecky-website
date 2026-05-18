'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Bolt,
  Schedule,
  Phonelink,
  TrendingUp,
  Notifications,
  Security,
} from '@mui/icons-material';
import { useThemeContext } from '../theme-provider';

const MotionBox = motion.create(Box);

const features = [
  {
    icon: Bolt,
    title: 'Lightning Fast',
    description: 'Get instant price comparisons in secondes',
    gradient: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
    shadowColor: 'rgba(255, 217, 61, 0.3)',
  },
  {
    icon: Schedule,
    title: 'Real-time Prices',
    description: 'Prices updated every 5 minutes for accuracy',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
    shadowColor: 'rgba(167, 139, 250, 0.3)',
  },
  {
    icon: Phonelink,
    title: 'Multi-App Compare',
    description: 'Compare across Blinkit, Zepto & Instamart',
    gradient: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
    shadowColor: 'rgba(34, 211, 238, 0.3)',
  },
];

// 3D Tilt Card Component
function Feature3DCard({ feature, index, isInView }: { 
  feature: typeof features[0]; 
  index: number;
  isInView: boolean;
}) {
  const { isDark } = useThemeContext();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 60, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
      >
        <Box
          sx={{
            p: 4,
            height: '100%',
            minHeight: 220,
            borderRadius: 4,
            cursor: 'pointer',
            position: 'relative',
            background: isDark 
              ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
            boxShadow: isHovered 
              ? `0 25px 50px -12px ${feature.shadowColor}, 0 0 0 1px ${feature.shadowColor}`
              : isDark 
                ? '0 4px 20px rgba(0,0,0,0.3)'
                : '0 4px 20px rgba(0,0,0,0.08)',
            transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: feature.gradient,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            },
          }}
        >
          {/* Shine effect */}
          <motion.div
            animate={isHovered ? { x: ['-100%', '200%'] } : {}}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              transform: 'skewX(-20deg)',
              pointerEvents: 'none',
            }}
          />
          
          {/* Icon with floating animation */}
          <motion.div
            animate={isHovered ? { 
              y: [-2, 2, -2],
              rotate: [0, 5, -5, 0],
            } : {}}
            transition={{ ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '20px',
                background: feature.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                boxShadow: `0 8px 32px ${feature.shadowColor}`,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)',
                },
              }}
            >
              <feature.icon sx={{ fontSize: 32, color: 'white', position: 'relative', zIndex: 1 }} />
            </Box>
          </motion.div>

          <Box sx={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
            <Typography
              variant="h6"
              sx={{ 
                fontWeight: 700, 
                mb: 1, 
                color: 'text.primary',
                transition: 'color 0.3s ease',
              }}
            >
              {feature.title}
            </Typography>

            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.7,
                opacity: 0.9,
              }}
            >
              {feature.description}
            </Typography>
          </Box>

          {/* Corner accent */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -20,
              right: -20,
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: feature.gradient,
              opacity: isHovered ? 0.15 : 0.05,
              transition: 'opacity 0.3s ease',
            }}
          />
        </Box>
      </motion.div>
    </MotionBox>
  );
}

export function FeaturesSection() {
  const { isDark } = useThemeContext();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 10 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          >
            <Box
              sx={{
                display: 'inline-block',
                px: 3,
                py: 1,
                borderRadius: 3,
                background: isDark 
                  ? 'rgba(167, 139, 250, 0.1)'
                  : 'rgba(139, 92, 246, 0.1)',
                border: `1px solid ${isDark ? 'rgba(167, 139, 250, 0.3)' : 'rgba(139, 92, 246, 0.2)'}`,
                mb: 3,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  letterSpacing: 3,
                }}
              >
                FEATURES
              </Typography>
            </Box>
          </motion.div>
          
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2, 
              color: 'text.primary',
              fontWeight: 800,
            }}
          >
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
            sx={{ 
              color: 'text.secondary', 
              maxWidth: 500, 
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            Powerful features designed to help you save money on groceries
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {features.map((feature, idx) => (
            <Feature3DCard 
              key={idx} 
              feature={feature} 
              index={idx}
              isInView={isInView}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
