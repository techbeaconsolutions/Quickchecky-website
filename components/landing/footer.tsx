'use client';

import { Box, Container, Typography, IconButton, Stack, Link as MuiLink } from '@mui/material';
import { ShoppingCart, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Download', href: '#download' },
      { label: 'Updates', href: '#trust' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: 'mailto:techbeacon.solutions@gmail.com' },
      { label: 'Contact', href: 'mailto:techbeacon.solutions@gmail.com' },
      { label: 'Privacy & Terms', href: '/terms-and-conditions' },
    ],
    qrCode: '/qr-code.png',
  },
];

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/quickchecky', Icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com/quickchecky', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/quickchecky', Icon: LinkedIn },
  { label: 'GitHub', href: 'https://github.com/quickchecky', Icon: GitHub },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        borderTop: (theme) =>
          `1px solid ${theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.05)'
          }`,
      }}
    >
      <Container maxWidth="lg">
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: '1.8fr 1fr 1fr 0.9fr',
    },
    gap: {
      xs: 5,
      md: 8,
    },
    alignItems: 'start',
    mb: 6,
  }}
>
  {/* BRAND */}
  <Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.2,
        mb: 2,
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{
          width: 32,
          height: 32,
          objectFit: 'contain',
        }}
      />

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Quickchecky
      </Typography>
    </Box>

    <Typography
      variant="body1"
      sx={{
        color: 'text.secondary',
        lineHeight: 1.8,
        maxWidth: 360,
        fontSize: '1rem',
      }}
    >
      Compare grocery prices across Blinkit,
      Zepto & Instamart. Save money on every
      order with real-time price comparison.
    </Typography>
  </Box>

  {/* PRODUCT */}
  <Box>
    <Typography
      variant="h6"
      sx={{
        mb: 2,
        fontWeight: 700,
      }}
    >
      Product
    </Typography>

    <Stack spacing={1.5}>
      {footerLinks[0].links.map((link, i) => (
        <MuiLink
          key={i}
          href={link.href}
          underline="none"
          sx={{
            color: 'text.secondary',
            fontSize: '1rem',
            transition: '0.2s',
            width: 'fit-content',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {link.label}
        </MuiLink>
      ))}
    </Stack>
  </Box>

  {/* SUPPORT */}
  <Box>
    <Typography
      variant="h6"
      sx={{
        mb: 2,
        fontWeight: 700,
      }}
    >
      Support
    </Typography>

    <Stack spacing={1.5}>
      {footerLinks[1].links.map((link, i) => (
        <MuiLink
          key={i}
          href={link.href}
          underline="none"
          sx={{
            color: 'text.secondary',
            fontSize: '1rem',
            transition: '0.2s',
            width: 'fit-content',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {link.label}
        </MuiLink>
      ))}
    </Stack>
  </Box>

  {/* QR */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <Box
      sx={{
        p: 1,
        borderRadius: '18px',
        bgcolor: '#fff',
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
      }}
    >
      <img
        src="/qr-code.png"
        alt="QR Code"
        style={{
          width: 110,
          height: 110,
          display: 'block',
        }}
      />
    </Box>

    <Typography
      variant="body1"
      sx={{
        mt: 2,
        fontWeight: 700,
        fontSize: '1rem',
      }}
    >
      Download App
    </Typography>

    <Typography
      variant="body2"
      sx={{
        mt: 0.5,
        color: 'text.secondary',
        fontSize: '0.9rem',
        maxWidth: 160,
      }}
    >
      Scan QR to install
    </Typography>
  </Box>
</Box>

        {/* Bottom */}
        <Box
          sx={{
            pt: 4,
            borderTop: (theme) =>
              `1px solid ${theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.05)'
                : 'rgba(0, 0, 0, 0.05)'
              }`,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {currentYear} Quickchecky. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
