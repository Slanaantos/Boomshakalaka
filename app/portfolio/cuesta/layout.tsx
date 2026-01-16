import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generoso Locações - Redesign by SLAN Design",
  description: "Redesign demonstrativo da Generoso Locações - Can-Am Spyder: viaje com o conforto de um carro e a adrenalina de uma moto. Locação de veículos exclusivos.",
  openGraph: {
    title: "Generoso Locações - Redesign by SLAN Design",
    description: "Landing page moderna e otimizada para conversão, focada em experiências inesquecíveis",
    images: ["/images/portfolio/generoso/hero.jpg"],
  },
};

export default function GenerosoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
