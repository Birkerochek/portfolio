import { MainLayout } from '@app/layouts';
import { Metadata } from 'next';
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solovev.tech'
  ),
  title: 'Solovev Portfolio',
  description: 'Портфолио Соловьева Романа',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://solovev.tech/',
    siteName: 'Соловьев Роман',
    title: 'Соловьев Роман - Frontend разработчик',
    description:
      'Портфолио frontend-разработчика. React, Next.js, TypeScript. Современные, производительные и масштабируемые веб-приложения с фокусом на UX и качество кода.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Соловьев Роман - Frontend разработчик',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Соловьев Роман - Frontend разработчик',
    description:
      'Frontend-разработчик. React, Next.js, TypeScript. Производительные и аккуратные веб-приложения.',
    images: ['/og-image.jpg'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
