import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quick Commerce Compare - Compare Grocery Prices Instantly',
  description: 'Find the cheapest prices across Blinkit, Zepto & Instamart in seconds. Save money on every grocery order with real-time price comparison.',
  keywords: ['grocery', 'price comparison', 'blinkit', 'zepto', 'instamart', 'save money', 'india'],
  authors: [{ name: 'QuickCompare' }],
  openGraph: {
    title: 'Quick Commerce Compare - Compare Grocery Prices Instantly',
    description: 'Find the cheapest prices across Blinkit, Zepto & Instamart in seconds.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0F' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
