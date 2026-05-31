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
  telephone: "+1-818-469-1414",
  image: `${SITE_URL}/images/aircraft-exterior.png`,
  logo: `${SITE_URL}/images/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7900 Balboa Blvd H7",
    addressLocality: "Van Nuys",
    addressRegion: "CA",
    postalCode: "91406",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.2007,
    longitude: -118.4894,
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
  sameAs: [] as string[],
};

export function SeoSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
}
