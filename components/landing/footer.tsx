'use client';

import { Box, Container, Typography, IconButton, Stack, Link as MuiLink } from '@mui/material';
import { ShoppingCart, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Product', links: ['Features', 'Pricing', 'Download', 'Updates'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
    { title: 'Support', links: ['Help Center', 'Contact', 'Privacy', 'Terms'] },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        borderTop: (theme) =>
          `1px solid ${
            theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.05)'
          }`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: '2fr 1fr 1fr 1fr' },
            gap: 4,
            mb: 6,
          }}
        >
          {/* Brand */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShoppingCart sx={{ color: 'white', fontSize: 22 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                QuickCompare
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', maxWidth: 280, lineHeight: 1.7, mb: 3 }}
            >
              Compare grocery prices across Blinkit, Zepto & Instamart. 
              Save money on every order with real-time price comparison.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[Twitter, Instagram, LinkedIn, GitHub].map((Icon, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      background: 'rgba(167, 139, 250, 0.1)',
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <Box key={idx}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link, linkIdx) => (
                  <MuiLink
                    key={linkIdx}
                    href="#"
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Bottom */}
        <Box
          sx={{
            pt: 4,
            borderTop: (theme) =>
              `1px solid ${
                theme.palette.mode === 'dark'
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
            © {currentYear} QuickCompare. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Made with ❤️ in India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
