import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "SLAN Design | Web Performance, Automações n8n & Desenvolvimento SaaS",
  description: "Sites ultra-velozes, fluxos inteligentes no n8n e ecossistemas SaaS desenhados para escala. Especialistas em Next.js, TypeScript e automação de processos.",
  keywords: [
    "web design premium",
    "desenvolvimento next.js",
    "automação n8n",
    "desenvolvimento saas",
    "web performance",
    "typescript",
    "tailwind css",
    "seo técnico",
    "core web vitals"
  ],
  authors: [{ name: "SLAN Design" }],
  creator: "SLAN Design",
  publisher: "SLAN Design",
  metadataBase: new URL("https://slandesign.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SLAN Design | Codificando o Futuro da sua Operação Digital",
    description: "Sites ultra-velozes, fluxos inteligentes no n8n e ecossistemas SaaS desenhados para escala.",
    url: "https://slandesign.com",
    siteName: "SLAN Design",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLAN Design - Web Performance & SaaS Development",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLAN Design | Web Performance & SaaS Development",
    description: "Sites ultra-velozes, fluxos inteligentes no n8n e ecossistemas SaaS desenhados para escala.",
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
