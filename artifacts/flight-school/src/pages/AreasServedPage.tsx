import React from "react";
import { Helmet } from "react-helmet-async";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { Phone, MessageSquare, Plane, MapPin, ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingPages, type LandingPageConfig } from "@/data/landingPages";

const SITE_URL = "https://acceleratedflightschool.net";

const sortedLandingPages = [...landingPages].sort((a, b) => a.h1.localeCompare(b.h1));

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/flight-school-locations-los-angeles#itemlist`,
  name: "Flight Training Areas Served — Accelerated Flight School",
  description: "All flight training service area pages for Accelerated Flight School, serving student pilots across Los Angeles and Ventura counties from Van Nuys Airport.",
  url: `${SITE_URL}/flight-school-locations-los-angeles`,
  numberOfItems: sortedLandingPages.length,
  itemListElement: sortedLandingPages.map((page, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: page.h1,
    url: `${SITE_URL}/${page.slug}`,
  })),
};


type Group = {
  key: string;
  title: string;
  blurb: string;
  pages: LandingPageConfig[];
};

function categorize(slug: string): string {
  if (slug.startsWith("flight-school-near-")) return "areas";
  if (
    slug.includes("discovery-flight") ||
    slug.includes("learn-to-fly") ||
    slug.includes("how-to-become") ||
    slug.includes("how-to-get-instrument") ||
    slug.includes("what-do-you-need")
  )
    return "start";
  if (
    slug.includes("cost") ||
    slug.includes("cheap") ||
    slug.includes("low-cost") ||
    slug.includes("affordable") ||
    slug.includes("without-loans") ||
    slug.includes("pay-as-you-fly") ||
    slug.includes("best-flight-school")
  )
    return "cost";
  if (slug.includes("piper") || slug.includes("cherokee") || slug.includes("warrior")) return "aircraft";
  if (
    slug.includes("instrument") ||
    slug.includes("cfii") ||
    slug.includes("cfi") ||
    slug.includes("commercial") ||
    slug.includes("private-pilot") ||
    slug.includes("flight-instructor") ||
    slug.includes("time-building") ||
    slug.includes("flight-review") ||
    slug.includes("proficiency")
  )
    return "programs";
  return "more";
}

const GROUP_META: { key: string; title: string; blurb: string }[] = [
  {
    key: "areas",
    title: "Flight Schools Near You",
    blurb:
      "Students drive to Van Nuys Airport from across Los Angeles and Ventura counties. Find the page for your neighborhood.",
  },
  {
    key: "programs",
    title: "Certificates, Ratings & Endorsements",
    blurb:
      "Private, instrument, commercial, CFI/CFII, plus flight reviews and proficiency checks — all based at KVNY.",
  },
  {
    key: "cost",
    title: "Cost & Value",
    blurb: "Honest pricing breakdowns and what it really costs to train in the Los Angeles area.",
  },
  {
    key: "start",
    title: "Getting Started",
    blurb: "Brand new to flying? Start here with discovery flights and step-by-step guides.",
  },
  {
    key: "aircraft",
    title: "Our Aircraft & Training",
    blurb: "Train in our Piper PA-28 Cherokee Warrior II (N9172Y) — a stable, predictable trainer.",
  },
  {
    key: "more",
    title: "More Flight Training Topics",
    blurb: "Additional resources for pilots training in Los Angeles.",
  },
];

function labelFor(page: LandingPageConfig, groupKey: string): string {
  if (groupKey === "areas") return page.h1.replace(/^Flight School Near\s+/i, "");
  return page.h1;
}

export function AreasServedPage() {
  const groups: Group[] = GROUP_META.map((meta) => ({
    ...meta,
    pages: landingPages
      .filter((p) => categorize(p.slug) === meta.key)
      .sort((a, b) => a.h1.localeCompare(b.h1)),
  })).filter((g) => g.pages.length > 0);

  const totalPages = landingPages.length;

  return (
    <div className="w-full">
      <Seo
        title={"Flight Training Areas Served | Accelerated Flight School"}
        description={"Serving student pilots across LA and Ventura counties from Van Nuys Airport (KVNY). Browse flight training by neighborhood and certificate. Call 323-332-0585."}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-white/20">
            <MapPin className="w-3.5 h-3.5" />
            Van Nuys Airport (KVNY) — San Fernando Valley, CA
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Flight Training Across Los Angeles
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            One school, one airport, one well-maintained airplane — serving student pilots from every
            corner of the LA basin and the Conejo and San Fernando valleys. Find the page built for
            your area or your goal below.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:3233320585">
              <Button size="lg" variant="secondary" className="font-bold gap-2 h-12 px-6">
                <Phone className="w-4 h-4" /> Call or Text 323-332-0585
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button size="lg" className="font-bold gap-2 h-12 px-6 bg-white text-primary hover:bg-slate-100">
                <Plane className="w-4 h-4" /> Discovery Flight — $190
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-18 bg-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <p className="text-slate-700 leading-relaxed text-base md:text-lg">
            Accelerated Flight School operates from a single home base — Van Nuys Airport (KVNY), one
            of the busiest general aviation airports in the United States. Because KVNY sits in the
            middle of the San Fernando Valley with fast freeway access in every direction, students
            commute to us from Calabasas and Malibu on the west, Pasadena and Glendale on the east,
            Santa Clarita and Simi Valley to the north, and the coastal cities and South Bay to the
            south.
          </p>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg">
            Whether you are searching for a flight school in your specific neighborhood, comparing the
            cost of a private pilot certificate, or figuring out where to begin, the directory below
            links every page on this site — {totalPages} in total — so you can go straight to the
            information that matters to you. Prefer to just talk it through? Call or text{" "}
            <strong>323-332-0585</strong> and we will point you in the right direction.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <Link
              href="/los-angeles-air-tours-sightseeing-flights"
              className="flex items-center gap-3 text-primary font-semibold hover:underline"
            >
              <Camera className="w-5 h-5 shrink-0" />
              Looking for a Los Angeles sightseeing flight instead? See our air tour alternatives
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Directory groups */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {groups.map((group) => (
            <div key={group.key}>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">{group.title}</h2>
              <p className="text-slate-500 mb-6 max-w-2xl">{group.blurb}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.pages.map((page) => (
                  <Link key={page.slug} href={`/${page.slug}`}>
                    <div className="group flex items-center justify-between gap-2 bg-white rounded-xl px-4 py-3 border border-slate-200 hover:border-primary hover:shadow-sm transition-all cursor-pointer h-full">
                      <span className="font-semibold text-slate-800 text-sm leading-snug">
                        {labelFor(page, group.key)}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary shrink-0 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Train Where the Pros Train</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            No matter which part of Los Angeles you are coming from, your training happens at Van Nuys
            Airport with structured, ACS-based instruction. Call or text <strong>323-332-0585</strong>{" "}
            to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:3233320585">
              <Button size="lg" variant="secondary" className="font-bold gap-2 h-12 px-7">
                <Phone className="w-4 h-4" /> Call 323-332-0585
              </Button>
            </a>
            <a href="sms:3233320585">
              <Button size="lg" variant="outline" className="font-bold gap-2 h-12 px-7 border-white text-white hover:bg-white/10">
                <MessageSquare className="w-4 h-4" /> Text 323-332-0585
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button size="lg" className="font-bold gap-2 h-12 px-7 bg-white text-primary hover:bg-slate-100">
                <Plane className="w-4 h-4" /> Book a Discovery Flight — $190
              </Button>
            </Link>
          </div>
          <p className="text-white/60 text-xs mt-6">
            Accelerated Flight School · 7910 Balboa Blvd H7 · Van Nuys Airport (KVNY) · Van Nuys, CA
            91406
          </p>
        </div>
      </section>
    </div>
  );
}
