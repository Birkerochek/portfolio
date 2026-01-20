import { Geist } from 'next/font/google';
import '@shared/styles/globals.scss';
import { Header } from '@widgets/Header';

const geistSans = Geist({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-family',
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
      <body className={geistSans.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
