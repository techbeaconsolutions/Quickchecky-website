'use client';

import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { Apple, Android, TrendingUp, Speed, Savings } from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PhoneMockup } from './phone-mockup';
import { ParallaxContainer } from './mouse-follower';
import { useThemeContext } from '../theme-provider';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionChip = motion.create(Chip);

// Text animation variants
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

// Floating badges
const badges = [
  { icon: <TrendingUp />, text: 'Real-time Prices', color: '#A78BFA' },
  { icon: <Speed />, text: '10 Min Delivery', color: '#22D3EE' },
  { icon: <Savings />, text: 'Save 30%+ Daily', color: '#34D399' },
];

export function HeroSection() {
  const { isDark } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const title = 'Compare Grocery Prices';

  return (
    <Box
      ref={containerRef}
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, md: 8 },
        pb: { xs: 8, md: 0 },
        position: 'relative',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <motion.div style={{ y, opacity, scale }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 6, md: 8 },
            }}
          >
            {/* Left Content */}
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, position: 'relative' }}>


              {/* <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: 3,
                    mb: 2,
                    display: 'inline-block',
                    background: isDark 
                      ? 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)'
                      : 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    padding: '4px 12px',
                    border: `1px solid ${isDark ? 'rgba(167, 139, 250, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
                    borderRadius: 2,
                  }}
                >
                  SMART GROCERY SHOPPING
                </Typography>
              </MotionBox> */}

              {/* Animated title */}
              <Box sx={{ mb: 3, overflow: 'hidden' }}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: 'text.primary',
                    display: 'flex',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  {title.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </Typography>
                <MotionTypography
                  variant="h1"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  sx={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 50%, #34D399 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%',
                    animation: 'gradient 5s ease infinite',
                    '@keyframes gradient': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
                    },
                  }}
                >
                  Instantly
                </MotionTypography>
              </Box>

              <MotionTypography
                variant="h6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  mb: 4,
                  maxWidth: 500,
                  mx: { xs: 'auto', md: 0 },
                  lineHeight: 1.8,
                }}
              >
                Find the cheapest prices across Blinkit, Zepto & Instamart in seconds.
                Save money on every grocery order with real-time price comparison.
              </MotionTypography>

              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                  {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Apple />}
                      sx={{
                        background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        borderRadius: 3,
                        boxShadow: '0 4px 30px rgba(167, 139, 250, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                          boxShadow: '0 8px 40px rgba(167, 139, 250, 0.5)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      App Store
                    </Button>
                  </motion.div> */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Android />}
                      href="https://play.google.com/store/apps/details?id=com.pratikostwal.quickcommercecompare"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: isDark
                          ? 'rgba(167, 139, 250, 0.5)'
                          : 'rgba(139, 92, 246, 0.5)',
                        borderWidth: 2,
                        color: 'primary.main',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        borderRadius: 3,
                        backdropFilter: 'blur(10px)',
                        background: isDark
                          ? 'rgba(167, 139, 250, 0.05)'
                          : 'rgba(139, 92, 246, 0.05)',
                        '&:hover': {
                          borderColor: 'primary.main',
                          background: isDark
                            ? 'rgba(167, 139, 250, 0.15)'
                            : 'rgba(139, 92, 246, 0.1)',
                          borderWidth: 2,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Play Store
                    </Button>
                  </motion.div>
                </Stack>
              </MotionBox>

              {/* Stats with animated counters */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                sx={{
                  mt: 5,
                  display: 'flex',
                  gap: 5,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {[
                  { value: '5K+', label: 'Active Users' },
                  { value: '20k+', label: 'Saved Monthly', prefix: '₹' },
                  { value: '4.8', label: 'App Rating' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, ease: 'easeOut' }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 2,
                        borderRadius: 2,
                        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {stat.prefix}{stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </MotionBox>
            </Box>



            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: .5,
                mt: { xs: 4, md: 58 },
                textAlign: 'center',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 2 }}>
                SCROLL
              </Typography>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5,  }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 40,
                    borderRadius: 12,
                    border: `2px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 1,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5,  }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 8,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                      }}
                    />
                  </motion.div>
                </Box>
              </motion.div>
            </Box>


            {/* Right Content - Phone Mockup with Parallax */}
            <MotionBox
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Glow behind phone */}
              <Box
                sx={{
                  position: 'absolute',
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                }}
              />
              <ParallaxContainer intensity={0.02}>
                <PhoneMockup />
              </ParallaxContainer>
            </MotionBox>
          </Box>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
      </MotionBox>
    </Box >
  );
}
