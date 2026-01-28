import { MainLayout } from "@app/layouts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Solovev Portfolio',
  description: 'Портфолио Соловьева Романа',
 
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
