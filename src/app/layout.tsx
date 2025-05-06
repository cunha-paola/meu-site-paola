// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
// 1. Importe as fontes Oswald e Lato de volta aqui
import { Oswald, Lato } from "next/font/google";

// 2. Configure as fontes de volta aqui
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald", // Defina a variável CSS
  display: "swap",
  weight: ["400", "700"], // Especifique os pesos
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato", // Defina a variável CSS
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paola - Design e Web Development",
  description: "Design visual e web development com intenção e propósito.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Adicione as variáveis CSS das fontes de volta nas classes do HTML
    <html lang="pt-BR" className={`${oswald.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
