import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Sheikh Riad Hasan – Senior Graphic Designer',
  description:
    'Portfolio of Sheikh Riad Hasan, a senior graphic designer with 10+ years of experience working with Google, Meta, Adobe, and Ogilvy. Specializing in brand identity, UI/UX design, and visual communication.',
  keywords: [
    'graphic designer',
    'brand identity',
    'UI/UX designer',
    'Sheikh Riad Hasan',
    'portfolio',
    'visual design',
    'motion design',
  ],
  authors: [{ name: 'Sheikh Riad Hasan' }],
  openGraph: {
    title: 'Sheikh Riad Hasan – Senior Graphic Designer',
    description: 'Senior graphic designer with 10+ years at Google, Meta, Adobe & Ogilvy.',
    type: 'website',
    images: ['/designer-portrait.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheikh Riad Hasan – Senior Graphic Designer',
    description: 'Senior graphic designer with 10+ years at Google, Meta, Adobe & Ogilvy.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
