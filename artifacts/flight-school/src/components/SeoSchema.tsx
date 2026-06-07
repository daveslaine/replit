import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://acceleratedflightschool.net";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Accelerated Flight School",
  description:
    "Affordable, structured flight training at Van Nuys Airport (KVNY) for Private Pilot, Instrument Rating, Commercial Pilot, CFI, and the airline pathway. Pay-as-you-fly, no large upfront payments.",
  url: SITE_URL,
  telephone: "+1-323-332-0585",
  image: `${SITE_URL}/images/aircraft-exterior.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7910 Balboa Blvd H7",
    addressLocality: "Van Nuys",
    addressRegion: "CA",
    postalCode: "91406",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.21740332119742,
    longitude: -118.50046956543292,
  },
  areaServed: [
    "Van Nuys",
    "Sherman Oaks",
    "Encino",
    "Calabasas",
    "Burbank",
    "Glendale",
    "Los Angeles",
    "San Fernando Valley",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "06:00",
    closes: "23:00",
  },
  sameAs: [
    "https://maps.app.goo.gl/xZWYCzZRoLzFBQ617",
    "https://www.yelp.com/biz/accelerated-flight-school-van-nuys-2",
  ] as string[],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Accelerated Flight School",
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/**
 * Global, route-independent structured data (Organization / LocalBusiness + WebSite).
 * Per-route head tags (title, description, canonical, Open Graph, Twitter) live
 * in the <Seo> component rendered by each page.
 */
export function SeoSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  );
}
