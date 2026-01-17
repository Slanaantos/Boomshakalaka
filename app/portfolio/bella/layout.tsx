import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bella Tavola - Restaurante Italiano | Portfolio SLAN Design",
  description: "Website elegante para restaurante italiano premium. Menu gourmet, carta de vinhos, galeria do ambiente e sistema de reservas. Cucina Italiana Autentica. By SLAN Design.",
  openGraph: {
    title: "Bella Tavola - Restaurante Italiano | Portfolio SLAN Design",
    description: "Website elegante para restaurante italiano autêntico com menu gourmet e ambiente sofisticado",
    images: ["/og-bella.jpg"],
  },
};

export default function BellaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
