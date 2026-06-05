import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

const SITE_URL = "https://acceleratedflightschool.net";

const OG_TITLE = "Accelerated Flight School | Van Nuys Airport (KVNY)";
const OG_DESCRIPTION =
  "Affordable, structured flight training at Van Nuys Airport. Private Pilot, Instrument Rating, Commercial Pilot, CFI, and Airline Pathway. No upfront payment. Call 323-332-0585.";
const OG_IMAGE = `${SITE_URL}/images/aircraft-exterior.png`;

// Client-only alias routes (not in the sitemap) → the canonical, indexed URL.
// Keeps canonical/og:url correct when a non-canonical alias is hit directly.
const ALIAS_CANONICAL: Record<string, string> = {
  "/commercial-pilot-training": "/commercial-pilot-training-van-nuys",
  "/cfi-training": "/cfi-training-van-nuys",
  "/airline-pilot-path": "/airline-pilot-path-van-nuys",
  "/discovery-flight": "/discovery-flight-van-nuys",
  "/flight-training-faq-van-nuys": "/faq",
  "/pricing": "/van-nuys-accelerated-flight-school-pricing",
  "/our-aircraft": "/van-nuys-accelerated-flight-school-aircraft",
  "/instructors": "/van-nuys-accelerated-flight-school-instructors",
  "/contact": "/van-nuys-accelerated-flight-school-contact",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Accelerated Flight School",
  description:
    "Affordable, structured flight training at Van Nuys Airport (KVNY) for Private Pilot, Instrument Rating, Commercial Pilot, CFI, and the airline pathway. Pay-as-you-fly, no large upfront payments.",
  url: SITE_URL,
  telephone: "+1-323-332-0585",
  image: `${SITE_URL}/images/aircraft-exterior.png`,
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

export function SeoSchema() {
  const [rawLocation] = useLocation();
  const normalized =
    rawLocation && rawLocation !== "/" ? rawLocation.replace(/\/+$/, "") : "/";
  const path = ALIAS_CANONICAL[normalized] ?? normalized;
  const canonicalUrl = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={OG_TITLE} />
      <meta property="og:description" content={OG_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Accelerated Flight School" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={OG_TITLE} />
      <meta name="twitter:description" content={OG_DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
}
