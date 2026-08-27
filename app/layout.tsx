import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dragiovannabenavides.vercel.app'),
  title: {
    default: 'Dra. Giovanna Benavides | Face Design em São Paulo',
    template: '%s | Dra. Giovanna Benavides',
  },
  description: 'Face design com foco em naturalidade. Conheça o Método Signature Face™ da Dra. Giovanna Benavides, em São Paulo.',
  keywords: ['Giovanna Benavides', 'harmonização orofacial', 'face design', 'Signature Face', 'São Paulo'],
  authors: [{ name: 'Dra. Giovanna Benavides' }],
  creator: 'Dra. Giovanna Benavides',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    locale: 'pt_BR',
    title: 'Dra. Giovanna Benavides | Seu rosto. Sua assinatura.',
    description: 'Face design com foco em naturalidade. Conheça o Método Signature Face™ em São Paulo.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Dra. Giovanna Benavides — Seu rosto. Sua assinatura.', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Giovanna Benavides | Seu rosto. Sua assinatura.',
    description: 'Face design com foco em naturalidade. Conheça o Método Signature Face™ em São Paulo.',
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#f2efe9',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
