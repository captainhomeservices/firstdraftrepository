import React from 'react';

const SITE_NAME = 'Captain Home Services';
const DEFAULT_IMAGE = 'https://austinlakemanagement.com/captain%20logo%20green%20%20copy%20copy.png';
const DEFAULT_CANONICAL = 'https://austinlakemanagement.com/';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://austinlakemanagement.com/#localbusiness",
  "name": SITE_NAME,
  "alternateName": "Austin Lake Management",
  "url": "https://austinlakemanagement.com",
  "logo": DEFAULT_IMAGE,
  "image": DEFAULT_IMAGE,
  "description": "Professional Lake Austin hydrilla removal and aquatic weed management. TPWD permitted, chemical-free, root-based extraction with biomass export for Highland Lakes residential properties.",
  "telephone": "(737) 300-9033",
  "email": "captainhomeservices@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.2672,
    "longitude": -97.7431
  },
  "areaServed": [
    { "@type": "City", "name": "Austin", "sameAs": "https://www.wikidata.org/wiki/Q16559" },
    { "@type": "Place", "name": "Lake Austin" },
    { "@type": "Place", "name": "Lake Travis" },
    { "@type": "Place", "name": "Lake LBJ" },
    { "@type": "Place", "name": "Inks Lake" },
    { "@type": "Place", "name": "Lake Marble Falls" },
    { "@type": "Place", "name": "Lake Buchanan" },
    { "@type": "Place", "name": "Highland Lakes" },
    { "@type": "City", "name": "Lakeway" },
    { "@type": "City", "name": "Bee Cave" },
    { "@type": "City", "name": "Spicewood" },
    { "@type": "City", "name": "Marble Falls" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Aquatic Weed Removal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lake Austin Hydrilla Removal",
          "description": "Root-based manual hydrilla extraction with full biomass export. TPWD and LCRA permitted."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Benthic Barrier Installation",
          "description": "Lake bottom barrier installation for long-term aquatic weed prevention."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "TPWD Permit Assistance",
          "description": "Complete permitting support for TPWD and LCRA aquatic vegetation removal compliance."
        }
      }
    ]
  },
  "sameAs": [
    "https://austinlakemanagement.com"
  ]
};

const SEOHead: React.FC<SEOHeadProps> = ({
  title = `Austin Lake Weed Removal | Hydrilla Control | ${SITE_NAME}`,
  description = "Professional Austin lake weed removal and hydrilla control services. Manual aquatic vegetation removal for Lake Austin, Lake Travis, and Highland Lakes. TPWD permitted, chemical-free solutions.",
  keywords = "Austin lake weed removal, Lake Austin hydrilla removal, aquatic vegetation removal Austin, TPWD permits, LCRA compliance, manual lake weed removal, chemical-free lake cleaning",
  canonicalUrl = DEFAULT_CANONICAL,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  structuredData
}) => {
  React.useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        if (property) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:type', ogType, true);
    setMeta('og:locale', 'en_US', true);

    setMeta('twitter:card', 'summary_large_image', true);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', description, true);
    setMeta('twitter:image', ogImage, true);
    setMeta('twitter:site', '@captainhomeservices', true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const injectSchema = (id: string, data: object) => {
      let script = document.querySelector(`script[type="application/ld+json"]#${id}`);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    injectSchema('schema-localbusiness', localBusinessSchema);

    if (structuredData) {
      injectSchema('schema-page', structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, structuredData]);

  return null;
};

export default SEOHead;
