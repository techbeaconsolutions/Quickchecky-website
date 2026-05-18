import { TermsContent } from '@/components/legal/terms-content';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'QuickChecky - Compare Blinkit, Zepto & Instamart Prices',
  description:
    'Compare grocery prices across Blinkit, Zepto, Swiggy Instamart and more in real-time.',
  keywords: [
    'Blinkit',
    'Zepto',
    'Instamart',
    'Quick commerce',
    'Price comparison',
    'Grocery comparison India',
  ],
};

export default function TermsPage() {
  return <TermsContent />;
}
