import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL("https://quickchecky.com"),
  title: "QuickChecky",
  description:
    "Compare grocery prices across Blinkit, Zepto, Instamart and more.",
  keywords: [
    "Blinkit",
    "Zepto",
    "Instamart",
    "Quick commerce",
    "Price comparison",
    "Grocery comparison India",
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}