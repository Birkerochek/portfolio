import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import '@shared/styles/globals.scss';
import '@shared/styles/reset.scss';
const geistSans = Geist({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-family',
  display: 'swap',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-family-mono',
  display: 'swap',
  subsets: ['latin'],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.svg"
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
