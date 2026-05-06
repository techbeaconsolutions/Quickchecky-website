'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, Search, Receipt, TrendingDown } from '@mui/icons-material';

const MotionBox = motion.create(Box);

const screens = [
  {
    title: 'Search',
    icon: Search,
    gradient: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
    content: 'search',
  },
  {
    title: 'Compare',
    icon: ShoppingCart,
    gradient: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
    content: 'compare',
  },
  {
    title: 'Save',
    icon: TrendingDown,
    gradient: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
    content: 'save',
  },
  {
    title: 'History',
    icon: Receipt,
    gradient: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
    content: 'history',
  },
];

interface PhoneFrameProps {
  title: string;
  icon: typeof Search;
  content: string;
  index: number;
}

function PhoneFrame({ title, icon: Icon, content, index }: PhoneFrameProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -20, scale: 1.02 }}
      sx={{
        width: { xs: 200, md: 240 },
        height: { xs: 400, md: 480 },
        borderRadius: '32px',
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
        border: '6px solid #2a2a4a',
        boxShadow: `
          0 30px 60px rgba(0, 0, 0, 0.4),
          0 0 40px rgba(167, 139, 250, 0.15)
        `,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
      }}
    >
      {/* Notch */}
      <Box
        sx={{
          position: 'absolute',
          top: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 70,
          height: 20,
          borderRadius: '12px',
          background: '#0a0a0f',
          zIndex: 10,
        }}
      />

      {/* Screen Content */}
      <Box
        sx={{
          position: 'absolute',
          top: 32,
          left: 6,
          right: 6,
          bottom: 6,
          borderRadius: '24px',
          background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: 1.5,
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ fontSize: 14, color: 'white' }} />
          </Box>
          <Typography variant="caption" sx={{ fontWeight: 600, color: '#F8FAFC' }}>
            {title}
          </Typography>
        </Box>

        {/* Content based on screen type */}
        {content === 'search' && (
          <>
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 1.5,
                p: 1.5,
                mb: 2,
              }}
            >
              <Typography variant="caption" sx={{ color: '#64748B' }}>
                Search products...
              </Typography>
            </Box>
            {['Milk', 'Bread', 'Eggs', 'Butter'].map((item, i) => (
              <Box
                key={i}
                sx={{
                  p: 1,
                  borderRadius: 1,
                  background: 'rgba(255, 255, 255, 0.03)',
                  mb: 0.5,
                }}
              >
                <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </>
        )}

        {content === 'compare' && (
          <>
            <Typography variant="caption" sx={{ color: '#94A3B8', mb: 1 }}>
              Amul Milk 1L
            </Typography>
            {[
              { app: 'Blinkit', price: '₹68' },
              { app: 'Zepto', price: '₹62', best: true },
              { app: 'Instamart', price: '₹65' },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: 1,
                  borderRadius: 1,
                  background: item.best
                    ? 'rgba(52, 211, 153, 0.1)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: item.best ? '1px solid rgba(52, 211, 153, 0.3)' : 'none',
                  mb: 0.5,
                }}
              >
                <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                  {item.app}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: item.best ? '#34D399' : '#F8FAFC', fontWeight: 600 }}
                >
                  {item.price}
                </Typography>
              </Box>
            ))}
          </>
        )}

        {content === 'save' && (
          <Box sx={{ textAlign: 'center', pt: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              ₹847
            </Typography>
            <Typography variant="caption" sx={{ color: '#94A3B8' }}>
              Saved this month
            </Typography>
            <Box
              sx={{
                mt: 3,
                height: 60,
                display: 'flex',
                alignItems: 'flex-end',
                gap: 0.5,
                justifyContent: 'center',
              }}
            >
              {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 16,
                    height: h,
                    borderRadius: 1,
                    background:
                      i === 5
                        ? 'linear-gradient(180deg, #34D399 0%, #10B981 100%)'
                        : 'rgba(167, 139, 250, 0.3)',
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {content === 'history' && (
          <>
            <Typography variant="caption" sx={{ color: '#94A3B8', mb: 1 }}>
              Recent Orders
            </Typography>
            {[
              { date: 'Today', saved: '₹45' },
              { date: 'Yesterday', saved: '₹32' },
              { date: '2 days ago', saved: '₹67' },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: 1.5,
                  borderRadius: 1,
                  background: 'rgba(255, 255, 255, 0.03)',
                  mb: 0.5,
                }}
              >
                <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                  {item.date}
                </Typography>
                <Typography variant="caption" sx={{ color: '#34D399', fontWeight: 600 }}>
                  {item.saved} saved
                </Typography>
              </Box>
            ))}
          </>
        )}
      </Box>
    </MotionBox>
  );
}

export function ScreenshotsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: 600,
          background: 'radial-gradient(ellipse, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
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
            APP PREVIEW
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
            Beautiful{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experience
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}
          >
            A sleek, intuitive interface designed for effortless price comparison
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 },
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            perspective: '1000px',
          }}
        >
          {screens.map((screen, idx) => (
            <PhoneFrame
              key={idx}
              title={screen.title}
              icon={screen.icon}
              content={screen.content}
              index={idx}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
