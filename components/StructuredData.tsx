export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SLAN Design",
    "description": "Sites ultra-rápidos que vendem 24 horas por dia. Automatize processos e cresça sem limites. Mais de 50 empresas atendidas com 100% de satisfação.",
    "url": "https://slandesign.com",
    "logo": "https://slandesign.com/logo.png",
    "image": "https://slandesign.com/og-image.png",
    "telephone": "+55-11-97098-2930",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.linkedin.com/company/slandesign",
      "https://github.com/slandesign"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Sites Profissionais",
        "description": "Sites ultra-rápidos que vendem 3x mais. Design moderno, responsivo e otimizado para conversão.",
        "category": "Web Development"
      },
      {
        "@type": "Offer",
        "name": "Automação de Processos",
        "description": "Pare de fazer trabalho manual. Automatize 80% das tarefas repetitivas e foque no que importa.",
        "category": "Automation"
      },
      {
        "@type": "Offer",
        "name": "Sistemas Sob Medida",
        "description": "Dashboards, plataformas e sistemas escaláveis prontos para crescer junto com você.",
        "category": "Custom Software"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$$$",
    "serviceType": ["Criação de Sites", "Desenvolvimento Web", "Automação", "Design Digital"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
