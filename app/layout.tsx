import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import Script from 'next/script';

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
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-RL8JYMWRNQ"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-RL8JYMWRNQ');
  `}
</Script>
      </body>
    </html>
  );
}