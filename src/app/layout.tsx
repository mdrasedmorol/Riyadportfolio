import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Sheikh Riyad Hassan – Graphic Designer & Video Editor',
  description:
    'Portfolio of Sheikh Riyad Hassan, Graphic Designer & Video Editor with 5+ years of experience specializing in visual branding, poster design, brand identity, social media graphics, marketing materials and video editing.',
  keywords: [
    'Sheikh Riyad Hassan',
    'Graphic Designer',
    'Video Editor',
    'Brand Identity',
    'Social Media Design',
    'Poster Design',
    'Print Design',
    'Motion Graphics',
    'Premiere Pro',
    'Adobe Creative Cloud',
    'Khulna Bangladesh',
  ],
  authors: [{ name: 'Sheikh Riyad Hassan' }],
  openGraph: {
    title: 'Sheikh Riyad Hassan – Graphic Designer & Video Editor',
    description: 'Graphic Designer & Video Editor with 5+ years of experience turning ideas into visual impact.',
    type: 'website',
    images: ['/sheikh-riyad-portrait.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheikh Riyad Hassan – Graphic Designer & Video Editor',
    description: 'Graphic Designer & Video Editor with 5+ years of experience turning ideas into visual impact.',
    images: ['/sheikh-riyad-portrait.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
