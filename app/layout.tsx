import { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({ subsets: ["latin"], weight: "400" });

import "./globals.css";

export const metadata: Metadata = {
  title: "Trader",
  description: "Trader compra e venda de ações.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  );
}
