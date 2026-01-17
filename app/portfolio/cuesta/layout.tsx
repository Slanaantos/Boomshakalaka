import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuesta Adventure - Turismo Off-Road | Portfolio SLAN Design",
  description: "Landing page dinâmica para passeios de buggy, quadriciclo e moto na Cuesta de Botucatu. Galeria interativa, sistema de reservas e animações avançadas. By SLAN Design.",
  openGraph: {
    title: "Cuesta Adventure - Turismo Off-Road | Portfolio SLAN Design",
    description: "Passeios off-road emocionantes na Cuesta de Botucatu com galeria interativa e sistema de reservas",
    images: ["/og-cuesta.jpg"],
  },
};

export default function CuestaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
