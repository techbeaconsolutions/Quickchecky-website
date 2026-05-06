'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingDown, Check } from '@mui/icons-material';

const MotionBox = motion.create(Box);

interface ProductItemProps {
  name: string;
  prices: { app: string; price: number; savings?: number }[];
}

const ProductItem = ({ name, prices }: ProductItemProps) => (
  <Box
    sx={{
      p: 1.5,
      borderRadius: 2,
      background: 'rgba(255, 255, 255, 0.05)',
      mb: 1,
    }}
  >
    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#F8FAFC' }}>
      {name}
    </Typography>
    {prices.map((item, idx) => (
      <Box
        key={idx}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 0.5,
        }}
      >
        <Typography variant="caption" sx={{ color: '#94A3B8' }}>
          {item.app}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              color: item.savings ? '#34D399' : '#F8FAFC',
            }}
          >
            ₹{item.price}
          </Typography>
          {item.savings && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                px: 0.75,
                py: 0.25,
                borderRadius: 1,
                background: 'rgba(52, 211, 153, 0.2)',
              }}
            >
              <TrendingDown sx={{ fontSize: 10, color: '#34D399' }} />
              <Typography variant="caption" sx={{ color: '#34D399', fontWeight: 600, fontSize: 10 }}>
                ₹{item.savings} cheaper
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    ))}
  </Box>
);

export function PhoneMockup() {
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

      {/* Screen Content */}
      <Box
        sx={{
          position: 'absolute',
          top: 44,
          left: 8,
          right: 8,
          bottom: 8,
          borderRadius: '28px',
          background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
          p: 2,
          overflow: 'hidden',
        }}
      >
        {/* App Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShoppingCart sx={{ color: 'white', fontSize: 20 }} />
          </Box>
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#F8FAFC' }}>
            Quick Compare
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            p: 1.5,
            mb: 2,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography variant="caption" sx={{ color: '#64748B' }}>
            Search for milk, bread, eggs...
          </Typography>
        </Box>

        {/* Product Comparisons */}
        <Typography variant="caption" sx={{ color: '#94A3B8', mb: 1, display: 'block' }}>
          Popular comparisons
        </Typography>

        <ProductItem
          name="Amul Milk 1L"
          prices={[
            { app: 'Blinkit', price: 68 },
            { app: 'Zepto', price: 62, savings: 6 },
            { app: 'Instamart', price: 65 },
          ]}
        />

        <ProductItem
          name="Eggs (12 pcs)"
          prices={[
            { app: 'Blinkit', price: 85 },
            { app: 'Zepto', price: 89 },
            { app: 'Instamart', price: 78, savings: 7 },
          ]}
        />

        {/* Best Deal Badge */}
        <MotionBox
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          sx={{
            mt: 2,
            p: 1.5,
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(34, 211, 238, 0.2) 100%)',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Check sx={{ color: '#34D399', fontSize: 18 }} />
          <Typography variant="caption" sx={{ color: '#F8FAFC', fontWeight: 500 }}>
            You saved ₹127 this month!
          </Typography>
        </MotionBox>
      </Box>
    </MotionBox>
  );
}
