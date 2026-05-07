'use client';

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

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0A0A0F 0%, #111118 100%)'
            : 'linear-gradient(180deg, #FAFAFA 0%, #F1F5F9 100%)',
        overflowX: 'hidden',
      }}
    >
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
  );
}
