export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SLAN Design",
    "description": "Sites ultra-velozes, fluxos inteligentes no n8n e ecossistemas SaaS desenhados para escala. Especialistas em Web Performance, Automações e Desenvolvimento SaaS.",
    "url": "https://slandesign.com",
    "logo": "https://slandesign.com/logo.png",
    "image": "https://slandesign.com/og-image.png",
    "telephone": "+55-11-99999-9999",
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
        "name": "Desenvolvimento Web sob medida",
        "description": "Sites e aplicações web de alta performance com Next.js, otimizados para SEO e Core Web Vitals",
        "category": "Web Development"
      },
      {
        "@type": "Offer",
        "name": "Automação de Processos com n8n",
        "description": "Conectamos suas ferramentas e automatizamos 90% das suas tarefas repetitivas com fluxos inteligentes",
        "category": "Automation"
      },
      {
        "@type": "Offer",
        "name": "Consultoria de SaaS",
        "description": "Dashboards, bancos de dados e sistemas escaláveis para seu negócio digital",
        "category": "SaaS Development"
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
    "serviceType": ["Web Design", "Software Development", "Automation", "SaaS Consulting"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
