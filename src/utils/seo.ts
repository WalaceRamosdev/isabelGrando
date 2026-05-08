export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const defaultSEO: SEOProps = {
  title: "Isabel Grando - Psicóloga | Terapia Online e Presencial em Água Doce",
  description: "Psicóloga especializada em TCC e Psicopatologia. Te acompanho enquanto você se escuta, se entende e se transforma. Agende sua consulta.",
  image: "/og-image.jpg", // Placeholder
  url: "https://isabelgrando.com.br",
  type: "website",
};

export function generateSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Isabel Grando - Psicóloga",
    "image": defaultSEO.url + defaultSEO.image,
    "@id": defaultSEO.url,
    "url": defaultSEO.url,
    "telephone": "+5549991069172",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Água Doce",
      "addressRegion": "SC",
      "addressCountry": "BR"
    },
    "medicalSpecialty": "Psychiatric", // Closest schema for psychology
    "description": defaultSEO.description,
    "priceRange": "$$"
  });
}

export function generateFAQSchema(faqs: { question: string, answer: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });
}
