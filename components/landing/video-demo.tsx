'use client';

import { Box, Container, Typography, IconButton } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { PlayArrow, Pause, VolumeUp, VolumeOff } from '@mui/icons-material';
import { useThemeMode } from '@/components/theme-provider';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const MotionBox = motion.create(Box);

export function VideoDemo() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);


  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(videoRef.current.paused === false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const { mode } = useThemeMode();

  const videoSrc =
    mode === 'dark'
      ? '/dark-video.mp4'
      : '/light-video.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

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
      {/* Background Glows */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
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
            SEE IT IN ACTION
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
            Watch the{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              App Demo
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}
          >
            Experience how easy it is to compare prices and save money on groceries
          </Typography>
        </MotionBox>

        {/* Video Container */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            perspective: '1000px',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Phone Frame with Video */}
          <Box
            sx={{
              width: {
                xs: '78vw',
                sm: '58vw',
                md: '32vw',
                lg: '24vw',
              },

              maxWidth: '390px',

              aspectRatio: '9 / 19.5',

              maxHeight: '92vh',

              mx: 'auto',
              borderRadius: '40px',
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)'
                  : 'linear-gradient(145deg, #ffffff 0%, #f0f0f5 100%)',
              border: (theme) =>
                theme.palette.mode === 'dark'
                  ? '8px solid #2a2a4a'
                  : '8px solid #e0e0e8',
              boxShadow: (theme) =>
                theme.palette.mode === 'dark'
                  ? `
                0 60px 120px rgba(0, 0, 0, 0.6),
                0 0 80px rgba(167, 139, 250, 0.3),
                inset 0 0 30px rgba(0, 0, 0, 0.3)
              `
                  : `
                0 60px 120px rgba(0, 0, 0, 0.15),
                0 0 80px rgba(34, 211, 238, 0.2),
                inset 0 0 30px rgba(255, 255, 255, 0.5)
              `,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Notch */}
            <Box
              sx={{
    position: 'absolute',
    top: 14,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 12,
    height: 12,
    borderRadius: '50%',
    background: '#1a1a1a',
    zIndex: 10,
  }}
            />

            {/* Video Content */}
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                right: 8,
                bottom: 8,
                borderRadius: '32px',
                overflow: 'hidden',
              }}
            >
              <video
                key={videoSrc}
                ref={videoRef}
                muted={isMuted}
                playsInline
                preload="metadata"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>

              {/* Video Controls Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  p: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <IconButton
                  onClick={togglePlay}
                  sx={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                    color: 'white',
                    width: 56,
                    height: 56,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isPlaying ? <Pause sx={{ fontSize: 28 }} /> : <PlayArrow sx={{ fontSize: 28 }} />}
                </IconButton>

              </Box>
            </Box>

            {/* Screen Glare Effect */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '40px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            />
          </Box>

          {/* Glow Behind Phone */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: 350, md: 450 },
              height: { xs: 650, md: 800 },
              borderRadius: '50%',
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'radial-gradient(ellipse, rgba(167, 139, 250, 0.25) 0%, transparent 70%)'
                  : 'radial-gradient(ellipse, rgba(34, 211, 238, 0.2) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: -1,
              pointerEvents: 'none',
            }}
          />
        </MotionBox>
      </Container>
    </Box>
  );
}
