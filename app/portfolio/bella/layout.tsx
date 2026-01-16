import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lolita Criativa - Redesign by SLAN Design",
  description: "Redesign demonstrativo da Lolita Criativa - Acessórios personalizados de luxo. Seu toque de exclusividade com sofisticação e carinho.",
  openGraph: {
    title: "Lolita Criativa - Redesign by SLAN Design",
    description: "Redesign criativo e impactante, destacando acessórios personalizados com animações elegantes",
    images: ["/images/portfolio/lolita/hero.jpg"],
  },
};

export default function LolitaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
