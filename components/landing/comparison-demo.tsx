'use client';

import { Box, Container, Typography, Chip } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GlassCard } from './glass-card';
import { TrendingDown, LocalOffer } from '@mui/icons-material';

const MotionBox = motion.create(Box);

interface PriceBarProps {
  app: string;
  price: number;
  maxPrice: number;
  color: string;
  delay: number;
  isCheapest?: boolean;
}

function PriceBar({ app, price, maxPrice, color, delay, isCheapest }: PriceBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const percentage = (price / maxPrice) * 100;

  return (
    <Box ref={ref} sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {app}
          </Typography>
          {isCheapest && (
            <Chip
              icon={<LocalOffer sx={{ fontSize: 14 }} />}
              label="Best Price"
              size="small"
              sx={{
                background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                color: 'white',
                fontSize: '0.7rem',
                height: 24,
                '& .MuiChip-icon': { color: 'white' },
              }}
            />
          )}
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 700,
            color: isCheapest ? '#34D399' : 'text.primary',
          }}
        >
          ₹{price}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 12,
          borderRadius: 2,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        }}
      >
        <MotionBox
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          sx={{
            height: '100%',
            borderRadius: 2,
            background: isCheapest
              ? 'linear-gradient(90deg, #34D399 0%, #10B981 100%)'
              : color,
          }}
        />
      </Box>
    </Box>
  );
}

// Floating phone with product detail screenshot
function FloatingProductPhone() {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 50, rotateY: -20 }}
      whileInView={{ opacity: 1, x: 0, rotateY: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      animate={{
        y: [0, -15, 0],
      }}
      whileHover={{ scale: 1.05, rotateY: 0 }}
      sx={{
        width: { xs: 180, md: 220 },
        height: { xs: 360, md: 440 },
        borderRadius: '32px',
        background: 'linear-gradient(145deg, #2a2a4a 0%, #1a1a2e 100%)',
        border: '6px solid #3a3a5a',
        boxShadow: `
          0 40px 80px rgba(0, 0, 0, 0.5),
          0 0 50px rgba(167, 139, 250, 0.25),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        flexShrink: 0,
        display: { xs: 'none', md: 'block' },
        transition: 'transform 0.3s ease',
      }}
    >
      {/* Notch */}
      <Box
        sx={{
          position: 'absolute',
          top: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 60,
          height: 18,
          borderRadius: '10px',
          background: '#0a0a0f',
          zIndex: 10,
        }}
      />

      {/* Screen Content - Product Detail Screenshot */}
      <Box
        sx={{
          position: 'absolute',
          top: 6,
          left: 6,
          right: 6,
          bottom: 6,
          borderRadius: '26px',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2UCV47bPpRyiYsYCA5cYrUgzS1hUBD.png"
          alt="Product Details"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
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
          borderRadius: '32px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%)',
          pointerEvents: 'none',
        }}
      />

      {/* Glow Behind Phone */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150%',
          height: '150%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </MotionBox>
  );
}

export function ComparisonDemo() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const products = [
    {
      name: 'Amul Butter 500g',
      prices: [
        { app: 'Blinkit', price: 275, color: 'linear-gradient(90deg, #FFD93D 0%, #FF6B6B 100%)' },
        { app: 'Zepto', price: 258, color: 'linear-gradient(90deg, #A78BFA 0%, #7C3AED 100%)' },
        { app: 'Instamart', price: 269, color: 'linear-gradient(90deg, #FF6B9D 0%, #C44569 100%)' },
      ],
    },
    {
      name: 'Tata Salt 1kg',
      prices: [
        { app: 'Blinkit', price: 28, color: 'linear-gradient(90deg, #FFD93D 0%, #FF6B6B 100%)' },
        { app: 'Zepto', price: 32, color: 'linear-gradient(90deg, #A78BFA 0%, #7C3AED 100%)' },
        { app: 'Instamart', price: 25, color: 'linear-gradient(90deg, #FF6B9D 0%, #C44569 100%)' },
      ],
    },
  ];

  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
      }}
    >
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
            LIVE COMPARISON
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
            See the{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Price Difference
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
          >
            Watch how prices vary across different apps for the same products. 
            Make informed decisions and save on every purchase.
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          {/* Price Comparison Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
              flex: 1,
              maxWidth: { lg: '700px' },
            }}
          >
            {products.map((product, productIdx) => {
              const minPrice = Math.min(...product.prices.map((p) => p.price));
              const maxPrice = Math.max(...product.prices.map((p) => p.price));
              const savings = maxPrice - minPrice;

              return (
                <MotionBox
                  key={productIdx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: productIdx * 0.2 }}
                >
                  <GlassCard hover3D sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 4,
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {product.name}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          background: 'rgba(52, 211, 153, 0.15)',
                        }}
                      >
                        <TrendingDown sx={{ fontSize: 16, color: '#34D399' }} />
                        <Typography
                          variant="body2"
                          sx={{ color: '#34D399', fontWeight: 600 }}
                        >
                          Save ₹{savings}
                        </Typography>
                      </Box>
                    </Box>

                    {product.prices.map((priceData, idx) => (
                      <PriceBar
                        key={idx}
                        app={priceData.app}
                        price={priceData.price}
                        maxPrice={maxPrice}
                        color={priceData.color}
                        delay={0.3 + idx * 0.15}
                        isCheapest={priceData.price === minPrice}
                      />
                    ))}
                  </GlassCard>
                </MotionBox>
              );
            })}
          </Box>

          {/* Floating Product Phone */}
          <FloatingProductPhone />
        </Box>
      </Container>
    </Box>
  );
}
