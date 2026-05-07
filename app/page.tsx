'use client';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { VideoDemo } from '@/components/landing/video-demo';
import { ComparisonDemo } from '@/components/landing/comparison-demo';
import { HowItWorks } from '@/components/landing/how-it-works';
import { FeaturesSection } from '@/components/landing/features-section';
import { ScreenshotsSection } from '@/components/landing/screenshots-section';
import { TrustSection } from '@/components/landing/trust-section';
import { CTASection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';
import { AnimatedBackground } from '@/components/landing/animated-background';
import { MouseFollower } from '@/components/landing/mouse-follower';

// Dynamic import for 3D scene to avoid SSR issues
const ThreeDBackground = dynamic(
  () => import('@/components/landing/3d-scene').then((mod) => mod.ThreeDBackground),
  { ssr: false }
);

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Animated gradient background */}
      <AnimatedBackground />
      
      {/* 3D floating elements */}
      <ThreeDBackground />
      
      {/* Mouse follower effect */}
      <MouseFollower />
      
      {/* Main content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Header />
        <HeroSection />
        <VideoDemo />
        <ComparisonDemo />
        <HowItWorks />
        <FeaturesSection />
        <ScreenshotsSection />
        <TrustSection />
        <CTASection />
        <Footer />
      </Box>
    </Box>
  );
}
