import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "SLAN Design | Sites Que Vendem | Transforme Visitantes em Clientes",
  description: "Sites ultra-rápidos que vendem 24h por dia. Automatize seu negócio e cresça sem limites. Mais de 50 empresas confiam na SLAN para sua presença digital.",
  keywords: [
    "criação de sites",
    "sites profissionais",
    "desenvolvimento web",
    "site que vende",
    "automação de processos",
    "sites rápidos",
    "design moderno",
    "loja virtual",
    "landing page",
    "site responsivo",
    "seo otimizado"
  ],
  authors: [{ name: "SLAN Design" }],
  creator: "SLAN Design",
  publisher: "SLAN Design",
  metadataBase: new URL("https://slandesign.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SLAN Design | Transforme Visitantes em Clientes Fiéis",
    description: "Sites ultra-rápidos que vendem 24h por dia. Clientes vendem 3x mais depois do redesign. Automatize processos e cresça sem limites.",
    url: "https://slandesign.com",
    siteName: "SLAN Design",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLAN Design - Sites Que Vendem e Automação Inteligente",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLAN Design | Sites Que Vendem",
    description: "Sites ultra-rápidos que vendem 24h por dia. Mais de 50 empresas confiam na SLAN.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
