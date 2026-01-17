import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban Style - Streetwear Premium | Portfolio SLAN Design",
  description: "E-commerce moderno de streetwear com animações impactantes, parallax scrolling e experiência de compra fluida. Projeto demonstrativo by SLAN Design.",
  openGraph: {
    title: "Urban Style - Streetwear Premium | Portfolio SLAN Design",
    description: "Loja virtual moderna com foco em streetwear premium, animações impactantes e experiência de compra fluida",
    images: ["/og-urban.jpg"],
  },
};

export default function UrbanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
