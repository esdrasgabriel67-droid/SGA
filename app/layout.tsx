import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGA — PMMG",
  description: "Sistema de Gestão — Polícia Militar de Minas Gerais"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

