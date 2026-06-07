import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

const SITE_URL = "https://acceleratedflightschool.net";
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

type SeoProps = {
  title: string;
  description: string;
  /** Optional override for the canonical/og:url path; defaults to the current route. */
  canonical?: string;
  /** Robots directive; defaults to indexable. Pass "noindex, follow" for 404/utility pages. */
  robots?: string;
  children?: React.ReactNode;
};

/**
 * Per-route SEO head tags. Emits title, meta description, robots, canonical,
 * and route-specific Open Graph + Twitter tags so social/search previews match
 * the actual page instead of falling back to homepage values.
 */
export function Seo({
  title,
  description,
  canonical,
  robots = "index, follow",
  children,
}: SeoProps) {
  const [rawLocation] = useLocation();
  const normalized =
    rawLocation && rawLocation !== "/" ? rawLocation.replace(/\/+$/, "") : "/";
  const path = ALIAS_CANONICAL[normalized] ?? normalized;
  const canonicalUrl =
    canonical ?? (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Accelerated Flight School" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {children}
    </Helmet>
  );
}
