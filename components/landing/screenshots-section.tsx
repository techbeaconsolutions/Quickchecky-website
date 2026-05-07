'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion.create(Box);

const screenshots = [
  {
    title: 'Home Screen',
    description: 'Search & compare prices',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2010.19.14%20AM-2falLn1dbhznKy4hGwbDcHVm3banUW.jpeg',
  },
  {
    title: 'Set Location',
    description: 'Auto-detect or enter pincode',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gBqWuU1xinPcniVbdbQUpePjPqVVcY.png',
  },
  {
    title: 'Product Details',
    description: 'Best deals at a glance',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2UCV47bPpRyiYsYCA5cYrUgzS1hUBD.png',
  },
  {
    title: 'Profile',
    description: 'Dark & light mode',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-V9F5djmFgUsDyIjFbKnIUGGbIrsfUL.png',
  },
];

interface PhoneFrameProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

function PhoneFrame({ title, description, imageUrl, index }: PhoneFrameProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -20, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
      }}
    >
      {/* Phone Frame */}
      <Box
        sx={{
          width: { xs: 180, sm: 200, md: 220 },
          height: { xs: 360, sm: 400, md: 440 },
          borderRadius: '32px',
          background: 'linear-gradient(145deg, #2a2a4a 0%, #1a1a2e 100%)',
          border: '6px solid #3a3a5a',
          boxShadow: `
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(167, 139, 250, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
          position: 'relative',
          overflow: 'hidden',
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
            width: 60,
            height: 18,
            borderRadius: '10px',
            background: '#0a0a0f',
            zIndex: 10,
          }}
        />

        {/* Screen Content - Real Screenshot */}
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
            src={imageUrl}
            alt={title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
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
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 100%)',
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
            width: '120%',
            height: '120%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
            filter: 'blur(30px)',
            zIndex: -1,
            pointerEvents: 'none',
          }}
        />
      </Box>

      {/* Label */}
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 600, 
            color: 'text.primary',
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
          }}
        >
          {description}
        </Typography>
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

        {/* Screenshots Grid */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 3, md: 5 },
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
            perspective: '1000px',
          }}
        >
          {screenshots.map((screen, idx) => (
            <PhoneFrame
              key={idx}
              title={screen.title}
              description={screen.description}
              imageUrl={screen.imageUrl}
              index={idx}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
