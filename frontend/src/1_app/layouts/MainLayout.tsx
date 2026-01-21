import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@widgets/Header';
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
