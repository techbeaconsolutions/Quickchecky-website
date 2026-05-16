'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import {
  GavelRounded,
  WarningAmberRounded,
  ShoppingCartRounded,
  SecurityRounded,
  LinkRounded,
  ArrowUpwardRounded,
  AndroidRounded,
} from '@mui/icons-material';

const sections = [
  {
    id: 'acceptance',
    icon: <GavelRounded />,
    title: 'Acceptance of Terms',
    content: (
      <>
        <Typography component="p" sx={{ mb: 2 }}>
          By using Quickchecky, you agree to these Terms and Conditions. If
          you do not agree, please stop using our website or app.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          These terms explain how our price comparison platform works and what
          we expect from you while using our services.
        </Typography>
      </>
    ),
  },
  {
    id: 'user-responsibilities',
    icon: <SecurityRounded />,
    title: 'User Responsibilities',
    content: (
      <>
        <Typography component="p" sx={{ mb: 2 }}>
          Use Quickchecky responsibly and respect the platforms we compare.
        </Typography>

        <Box
          component="ul"
          sx={{
            pl: 4,
            m: 0,
            color: '#475569',
            fontSize: '1rem',
            lineHeight: 1.8,
            listStyleType: 'disc',
          }}
        >
          <Box component="li" sx={{ mb: 1 }}>
            Do not scrape, reverse engineer, or overload our systems.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Keep your information accurate and comply with applicable laws.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Confirm prices and availability directly with the retailer before
            you buy.
          </Box>
        </Box>
      </>
    ),
  },
  {
    id: 'refund-policy',
    icon: <ShoppingCartRounded />,
    title: 'Refund Policy',
    highlight: true,
    content: (
      <>
        <Typography component="p" sx={{ mb: 2 }}>
          Quickchecky is a comparison service, not a seller. We do not process
          orders, payments, or refunds directly.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          If you need a refund or return, contact the retailer or delivery
          partner where you placed your order.
        </Typography>

        <Box
          component="ul"
          sx={{
            pl: 4,
            m: 0,
            color: '#475569',
            fontSize: '1rem',
            lineHeight: 1.8,
            listStyleType: 'disc',
          }}
        >
          <Box component="li" sx={{ mb: 1 }}>
            We provide information to help you shop smarter.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Final pricing, stock, and refund decisions are made by the third-party
            service.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Always verify order details before checkout.
          </Box>
        </Box>
      </>
    ),
  },
  {
    id: 'privacy',
    icon: <SecurityRounded />,
    title: 'Privacy & Data Use',
    content: (
      <>
        <Typography component="p" sx={{ mb: 2 }}>
          We collect minimal data needed to display price comparisons and make
          the experience better.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          We do not share your personal information with third parties unless
          required by law or needed to deliver the service you requested.
        </Typography>
      </>
    ),
  },
  {
    id: 'third-party-services',
    icon: <LinkRounded />,
    title: 'Third-Party Services',
    highlight: true,
    content: (
      <>
        <Typography component="p" sx={{ mb: 2 }}>
          Quickchecky shows information from Blinkit, Zepto, Instamart, and
          other retailers. We do not control their prices, stock, or delivery.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          The final purchase agreement is between you and the third-party
          platform.
        </Typography>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    icon: <WarningAmberRounded />,
    title: 'Limitation of Liability',
    highlight: true,
    content: (
      <>
        <Typography component="p" sx={{ mb: 2 }}>
          Quickchecky is not responsible for pricing errors, delivery delays,
          availability issues, or problems caused by third-party retailers.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          We provide comparative information to help you make better decisions,
          but use it at your own discretion.
        </Typography>
      </>
    ),
  },
];

export function TermsContent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f8fafc',
      }}
    >
      {/* HERO */}
      <Box
        sx={{
          background:
            'linear-gradient(180deg, rgba(239,246,255,1) 0%, rgba(248,250,252,1) 100%)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <Container maxWidth="lg">
          {/* NAVBAR */}
          <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 2,
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: '#2563eb',
                mb: 2,
              }}
            >
              Quickchecky
            </Typography>
            </Link>

            <Button
              href="https://play.google.com/store/apps/details?id=com.pratikostwal.quickcommercecompare"
              target="_blank"
              variant="contained"
              startIcon={<AndroidRounded />}
              sx={{
                borderRadius: '14px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 700,
              }}
            >
              Download App
            </Button>
          </Stack>

          {/* HERO CONTENT */}
          <Box
            sx={{
              py: { xs: 8, md: 10 },
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#7c3aed',
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
              }}
            >
              LEGAL
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#0f172a',
                mb: 2,
              }}
            >
              Terms and Conditions
            </Typography>

            <Typography
              sx={{
                color: '#64748b',
                fontSize: '0.95rem',
                fontWeight: 700,
                mb: 4,
              }}
            >
              Last Updated: May 16, 2026
            </Typography>

            <Typography
              sx={{
                maxWidth: 760,
                mx: 'auto',
                color: '#475569',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              Please read these terms carefully before using Quickchecky. These
              terms explain how our price comparison platform works and what you
              should expect while using our services.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CONTENT */}
      <Container
        maxWidth="md"
        sx={{
          mt: -6,
          pb: 10,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: '28px',
            p: { xs: 3, md: 5 },
            border: '1px solid rgba(0,0,0,0.06)',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255,255,255,0.95)',
          }}
        >
          {/* EFFECTIVE DATE */}
          <Typography
            sx={{
              color: '#64748b',
              mb: 5,
              fontSize: '0.95rem',
            }}
          >
            Effective Date: May 16, 2026 <br />
            Last Updated: May 16, 2026
          </Typography>

          {/* TABLE OF CONTENTS */}
          <Box
            sx={{
              mb: 6,
              p: 4,
              borderRadius: '20px',
              bgcolor: '#f8fafc',
              border: '1px solid rgba(15,23,42,0.08)',
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                color: '#0f172a',
                mb: 2,
                fontSize: '1.05rem',
              }}
            >
              Table of Contents
            </Typography>

            <Stack spacing={1}>
              {sections.map((section, index) => (
                <Box
                  key={section.id}
                  component="a"
                  href={`#${section.id}`}
                  sx={{
                    display: 'block',
                    color: '#2563eb',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {index + 1}. {section.title}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* SECTIONS */}
          <Stack spacing={5}>
            {sections.map((section, index) => (
              <Box key={section.id} id={section.id}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mb: 2, alignItems: 'center' }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: section.highlight
                        ? 'rgba(37,99,235,0.08)'
                        : 'rgba(37,99,235,0.08)',
                      color: section.highlight ? '#1d4ed8' : '#2563eb',
                    }}
                  >
                    {section.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: '#0f172a',
                      fontSize: '1.4rem',
                    }}
                  >
                    {index + 1}. {section.title}
                  </Typography>
                </Stack>

                {section.highlight && (
                  <Box
                    sx={{
                      mb: 3,
                      p: 3,
                      borderRadius: '18px',
                      bgcolor: 'rgba(241,245,249,1)',
                      borderLeft: '4px solid',
                      borderColor: '#2563eb',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#0f172a',
                        fontWeight: 700,
                        mb: 1,
                        lineHeight: 1.8,
                      }}
                    >
                      Important:
                    </Typography>
                    <Typography
                      sx={{
                        color: '#475569',
                        lineHeight: 1.8,
                        fontSize: '1rem',
                      }}
                    >
                      This section highlights a key legal point. Review it before
                      using Quickchecky and always verify the final details with
                      the retailer or service provider.
                    </Typography>
                  </Box>
                )}

                <Box
                  sx={{
                    color: '#475569',
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  {section.content}
                </Box>

                <Divider
                  sx={{
                    mt: 5,
                    borderColor: 'rgba(0,0,0,0.06)',
                  }}
                />
              </Box>
            ))}

            {/* CONTACT */}
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: '1.4rem',
                }}
              >
                Contact Information
              </Typography>

              <Box
                sx={{
                  p: 3,
                  borderRadius: '18px',
                  bgcolor: 'rgba(248,250,252,1)',
                  borderLeft: '4px solid',
                  borderColor: '#2563eb',
                }}
              >
                <Typography
                  sx={{
                    color: '#475569',
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  If you have questions regarding these Terms, contact us at:
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: 700,
                    color: '#2563eb',
                    fontSize: '1rem',
                  }}
                >
                  support@quickchecky.com
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Paper>
      </Container>

      {/* FOOTER */}
      <Box
        sx={{
          borderTop: '1px solid rgba(0,0,0,0.06)',
          py: 6,
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={5}
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: '#2563eb',
                  mb: 2,
                }}
              >
                Quickchecky
              </Typography>

              <Typography
                sx={{
                  maxWidth: 320,
                  color: '#64748b',
                  lineHeight: 1.8,
                }}
              >
                Compare grocery prices across Blinkit, Zepto & Instamart.
                Save money with real-time price comparison.
              </Typography>
            </Box>

            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 700 }}>Support</Typography>

              <Box
                component="a"
                href="/contact"
                sx={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Contact
              </Box>

              <Box
                component="a"
                href="/about"
                sx={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                About
              </Box>
            </Stack>
          </Stack>

          <Divider sx={{ my: 4 }} />

          <Typography
            sx={{
              textAlign: 'center',
              color: '#94a3b8',
            }}
          >
            © 2026 Quickchecky. All rights reserved.
          </Typography>
        </Container>
      </Box>

      {/* BACK TO TOP */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 54,
          height: 54,
          bgcolor: '#2563eb',
          color: 'white',
          '&:hover': {
            bgcolor: '#1d4ed8',
          },
        }}
      >
        <ArrowUpwardRounded />
      </IconButton>
    </Box>
  );
}
