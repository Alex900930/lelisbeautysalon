import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: "Karla Lelis Salão de Beleza",
  description: "Transformando sua beleza com cuidado e estilo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${playfair.variable} ${cormorant.variable} bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}