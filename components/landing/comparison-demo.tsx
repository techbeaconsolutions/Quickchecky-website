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
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
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
      </Container>
    </Box>
  );
}
