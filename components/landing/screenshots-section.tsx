'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { useThemeMode } from '@/components/theme-provider';

const MotionBox = motion.create(Box);

// Theme-specific screenshots
const screenshotsByTheme = {
  light: [
    {
      title: 'Home Screen',
      description: 'Search & compare prices',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.06%20AM-33EupBaWZGzGi7gtdAGZbdAsd8Hkeu.jpeg',
    },
    {
      title: 'Set Location',
      description: 'Auto-detect or enter pincode',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.07%20AM-BS5XMWYT4l81PVJCRdCA6RlpCc2O07.jpeg',
    },
    {
      title: 'Best Deals',
      description: 'Find the cheapest option',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.10%20AM%20%281%29-aV1hBs7IofY9MU4fKSlNIdjlUTkrdI.jpeg',
    },
    {
      title: 'Product Grid',
      description: 'Compare all products',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.12%20AM-eab3VCj6ztDExV0MPQkLxoVdTUbNfq.jpeg',
    },
  ],
  dark: [
    {
      title: 'Home Screen',
      description: 'Search & compare prices',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.12%20AM%20%282%29-uS3p005iNBhnDpcWBPaAXt8k5h5P0q.jpeg',
    },
    {
      title: 'Set Location',
      description: 'Auto-detect or enter pincode',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.13%20AM-eMJDeGAoR0jcKqEcEMnX7GHXOfqh2c.jpeg',
    },
    {
      title: 'Best Deals',
      description: 'Find the cheapest option',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.13%20AM%20%283%29-Wzw0NuBvKTMyqABThlb2PG1S1plSuw.jpeg',
    },
    {
      title: 'Product Grid',
      description: 'Compare all products',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2011.38.14%20AM-ITVkZpS2Yh6JXWpSPFNCfO5u2LlQim.jpeg',
    },
  ],
};

interface PhoneFrameProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  themeMode: 'light' | 'dark';
}

function PhoneFrame({ title, description, imageUrl, index, themeMode }: PhoneFrameProps) {
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
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, #2a2a4a 0%, #1a1a2e 100%)'
              : 'linear-gradient(145deg, #ffffff 0%, #f5f5fa 100%)',
          border: (theme) =>
            theme.palette.mode === 'dark'
              ? '6px solid #3a3a5a'
              : '6px solid #e0e0e8',
          boxShadow: (theme) =>
            theme.palette.mode === 'dark'
              ? `
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(167, 139, 250, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
              : `
            0 30px 60px rgba(0, 0, 0, 0.1),
            0 0 40px rgba(34, 211, 238, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.8)
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

        {/* Screen Content - Real Screenshot with Crossfade */}
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
          <AnimatePresence mode="wait">
            <MotionBox
              key={`${themeMode}-${index}`}
              component="img"
              src={imageUrl}
              alt={title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
          </AnimatePresence>
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
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
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
  const { mode } = useThemeMode();
  const screenshots = screenshotsByTheme[mode];

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
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(ellipse, rgba(34, 211, 238, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(ellipse, rgba(167, 139, 250, 0.08) 0%, transparent 70%)',
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
            A sleek, intuitive interface designed for effortless price comparison - available in both light and dark modes
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
              key={`${mode}-${idx}`}
              title={screen.title}
              description={screen.description}
              imageUrl={screen.imageUrl}
              index={idx}
              themeMode={mode}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
