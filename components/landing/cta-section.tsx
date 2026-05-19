'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Apple, Android, ArrowForward, Star, Download, TrendingUp } from '@mui/icons-material';
import { useThemeContext } from '../theme-provider';

const MotionBox = motion.create(Box);

// Floating 3D element
function FloatingElement({ children, delay = 0, duration = 4, range = 20 }: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  range?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-range, range, -range],
        rotateZ: [-3, 3, -3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function CTASection() {
  const { isDark } = useThemeContext();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        py: { xs: 12, md: 20 },
        position: 'relative',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      {/* 3D Floating decorative elements */}
      <Box sx={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.6 }}>
        <FloatingElement delay={0} duration={5}>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(167, 139, 250, 0.4)',
              transform: 'rotate(12deg)',
            }}
          >
            <Star sx={{ color: 'white', fontSize: 28 }} />
          </Box>
        </FloatingElement>
      </Box>

      <Box sx={{ position: 'absolute', top: '20%', right: '8%', opacity: 0.6 }}>
        <FloatingElement delay={1} duration={6}>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(52, 211, 153, 0.4)',
              transform: 'rotate(-15deg)',
            }}
          >
            <Download sx={{ color: 'white', fontSize: 24 }} />
          </Box>
        </FloatingElement>
      </Box>

      <Box sx={{ position: 'absolute', bottom: '15%', left: '8%', opacity: 0.6 }}>
        <FloatingElement delay={0.5} duration={5.5}>
          <Box
            sx={{
              width: 55,
              height: 55,
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(244, 114, 182, 0.4)',
              transform: 'rotate(8deg)',
            }}
          >
            <TrendingUp sx={{ color: 'white', fontSize: 26 }} />
          </Box>
        </FloatingElement>
      </Box>

      <Box sx={{ position: 'absolute', bottom: '25%', right: '5%', opacity: 0.6 }}>
        <FloatingElement delay={1.5} duration={4.5}>
          <Box
            sx={{
              width: 45,
              height: 45,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(96, 165, 250, 0.4)',
              transform: 'rotate(-20deg)',
            }}
          >
            <Android sx={{ color: 'white', fontSize: 22 }} />
          </Box>
        </FloatingElement>
      </Box>

      {/* Animated glow rings */}
      <MotionBox
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          border: `2px solid ${isDark ? 'rgba(167, 139, 250, 0.2)' : 'rgba(139, 92, 246, 0.1)'}`,
          pointerEvents: 'none',
        }}
      />
      <MotionBox
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          border: `2px solid ${isDark ? 'rgba(34, 211, 238, 0.2)' : 'rgba(6, 182, 212, 0.1)'}`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 60, rotateX: 20 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            perspective: 1000,
          }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              sx={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(30, 30, 46, 0.8) 0%, rgba(20, 20, 35, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '40px',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)'}`,
                boxShadow: isDark
                  ? '0 40px 100px rgba(167, 139, 250, 0.2), 0 0 0 1px rgba(255,255,255,0.05) inset'
                  : '0 40px 100px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255,255,255,0.5) inset',
                p: { xs: 5, md: 10 },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.5), transparent)',
                },
              }}
            >
              {/* Inner glow */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -100,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 400,
                  height: 200,
                  background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.3) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                  pointerEvents: 'none',
                }}
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    background: isDark
                      ? 'rgba(52, 211, 153, 0.15)'
                      : 'rgba(16, 185, 129, 0.1)',
                    border: `1px solid rgba(52, 211, 153, 0.3)`,
                    mb: 4,
                  }}
                >
                  <Star sx={{ fontSize: 18, color: '#34D399' }} />
                  <Typography variant="body2" sx={{ color: '#34D399', fontWeight: 600 }}>
                    Rated 4.8 on App Store
                  </Typography>
                </Box>
              </motion.div>

              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  fontWeight: 800,
                  position: 'relative',
                }}
              >
                Start{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 50%, #34D399 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%',
                    animation: 'gradient 4s ease infinite',
                    '@keyframes gradient': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
                    },
                  }}
                >
                  Saving Today
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  mb: 5,
                  maxWidth: 500,
                  mx: 'auto',
                  lineHeight: 1.8,
                }}
              >
                Download Quick Commerce Compare and never overpay for groceries again.
                Join 500+ smart shoppers across India.
              </Typography>

              <Stack
                // direction={{ xs: 'column', sm: 'row' }}
                spacing={0}
                sx={{ justifyContent: 'center' }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="https://play.google.com/store/apps/details?id=com.pratikostwal.quickcommercecompare"
                    target="_blank"
                    startIcon={<Android />}
                    endIcon={<ArrowForward />}
                    sx={{
                      background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                      color: 'white',
                      px: 5,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      boxShadow: '0 10px 40px rgba(52, 211, 153, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                        boxShadow: '0 20px 60px rgba(52, 211, 153, 0.5)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download for Android
                  </Button>
                </motion.div>
              </Stack>

              <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                {[
                  { label: 'Free Download', icon: Download },
                  // { label: 'No Ads', icon: Star },
                  { label: 'Save 30%+', icon: TrendingUp },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <item.icon sx={{ fontSize: 18, color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.label}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </MotionBox>
      </Container>
    </Box>
  );
}
