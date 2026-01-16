import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lee F Alive - Redesign by SLAN Design",
  description: "Redesign demonstrativo da marca Lee F Alive - Streetwear básico, atemporal e sustentável. Verão 2025 - Coleção Basics.",
  openGraph: {
    title: "Lee F Alive - Redesign by SLAN Design",
    description: "Redesign demonstrativo focado em performance e experiência do usuário",
    images: ["/images/portfolio/leef/hero.jpg"],
  },
};

export default function LeefLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
