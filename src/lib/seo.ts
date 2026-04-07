import { Metadata } from "next";
import { SITE } from "./config";

const baseUrl = "https://clydeandco-removals.co.uk";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE.name} | Furniture Removals in South Lanarkshire`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.tagline} Professional furniture removal services across South Lanarkshire including Hamilton, East Kilbride, and surrounding areas. Fully insured, fixed quotes, same-day service available.`,
  keywords: [
    "furniture removals",
    "house removals",
    "South Lanarkshire",
    "Hamilton removals",
    "East Kilbride removals",
    "man and van",
    "office removals",
    "Scotland",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName: SITE.name,
    title: `${SITE.name} | Furniture Removals in South Lanarkshire`,
    description: SITE.tagline,
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
    images: ["/og-default.jpg"],
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
};

export function generateServiceMetadata(
  slug: string,
  title: string
): Metadata {
  const description = getServiceDescription(slug);
  return {
    title: `${title} in South Lanarkshire`,
    description,
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: `${baseUrl}/services/${slug}`,
    },
  };
}

export function generateAreaMetadata(
  area: string,
  slug: string
): Metadata {
  const description = `Professional furniture removal services in ${area}, South Lanarkshire. Fully insured local removal company offering house moves, office relocations, and single item delivery. Call for a free quote.`;
  return {
    title: `Furniture Removals in ${area}`,
    description,
    openGraph: {
      title: `Removals in ${area} | ${SITE.name}`,
      description,
      url: `${baseUrl}/areas/${slug}`,
    },
  };
}

function getServiceDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    "house-removals":
      "Professional house removal services across South Lanarkshire. We handle everything from studio flats to large family homes with care and precision. Fully insured with fixed quotes.",
    "flat-removals":
      "Expert flat removal services in South Lanarkshire. Navigating stairs, narrow corridors, and tight spaces is our speciality. Same-day service available.",
    "single-item":
      "Need just one item moved? Our single item delivery service is perfect for furniture, appliances, or fragile antiques. Affordable and reliable.",
    "office-removals":
      "Minimise downtime with our professional office removal service. We work around your schedule to ensure a smooth transition for your business.",
    "packing-service":
      "Full packing service using quality materials to protect your belongings. Let us handle the stress of packing so you can focus on your move.",
    "furniture-disposal":
      "Responsible furniture disposal and recycling service. We'll collect unwanted items and ensure they're disposed of ethically and sustainably.",
    "man-and-van":
      "Flexible man and van service for smaller moves and deliveries across South Lanarkshire. Competitive hourly rates with no hidden fees.",
  };
  return descriptions[slug] ?? `Professional ${slug.replace(/-/g, " ")} services in South Lanarkshire.`;
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.tagline,
    url: baseUrl,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: SITE.priceRange,
    image: `${baseUrl}/og-default.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SITE.areas.map((area) => ({
      "@type": "Place",
      name: `${area}, South Lanarkshire`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "21:00",
    },
    sameAs: [SITE.social.facebook, SITE.social.instagram].filter(Boolean),
  };
}

export function generateServiceSchema(slug: string, title: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: getServiceDescription(slug),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#business`,
      name: SITE.name,
    },
    areaServed: SITE.areas.map((area) => ({
      "@type": "Place",
      name: `${area}, South Lanarkshire`,
    })),
    url: `${baseUrl}/services/${slug}`,
  };
}

export function generateAreaBusinessSchema(area: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: `Professional furniture removal services in ${area}, South Lanarkshire.`,
    url: `${baseUrl}/areas/${area.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: SITE.phone,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: area,
      addressRegion: "South Lanarkshire",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "Place",
      name: `${area}, South Lanarkshire`,
    },
  };
}
