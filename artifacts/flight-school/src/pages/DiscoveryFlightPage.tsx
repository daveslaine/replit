import React from "react";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { Phone, CheckCircle2, Clock, MapPin, Star, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

const SITE_URL = "https://acceleratedflightschool.net";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/discovery-flight-van-nuys#service`,
  name: "Discovery Flight at Van Nuys Airport",
  description:
    "1.5-hour introductory discovery flight with a Certified Flight Instructor at Van Nuys Airport. Includes pre-flight briefing, hands-on flying over the San Fernando Valley and Malibu coastline, zero-g maneuvers, and a post-flight debrief.",
  serviceType: "Discovery Flight",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/discovery-flight-van-nuys`,
  image: `${SITE_URL}/images/aircraft-takeoff.jpg`,
  areaServed: "Los Angeles",
  serviceLocation: {
    "@type": "Airport",
    name: "Van Nuys Airport",
    iataCode: "VNY",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7910 Balboa Blvd",
      addressLocality: "Van Nuys",
      addressRegion: "CA",
      postalCode: "91406",
      addressCountry: "US",
    },
  },
  offers: {
    "@type": "Offer",
    price: "190",
    priceCurrency: "USD",
    description: "1.5-hour discovery flight for one person. Aircraft and CFI instructor included.",
    seller: { "@id": `${SITE_URL}/#organization` },
  },
};

const trainingSteps = [
  {
    step: "Discovery Flight",
    note: "$190 — today",
    href: null,
    highlight: true,
  },
  {
    step: "Private Pilot",
    note: "~$7,500–$12,500 est.",
    href: "/private-pilot-van-nuys",
    highlight: false,
  },
  {
    step: "Instrument Rating",
    note: "Add-on rating",
    href: "/instrument-rating-van-nuys",
    highlight: false,
  },
  {
    step: "Commercial Pilot",
    note: "Get paid to fly",
    href: "/commercial-pilot-training-van-nuys",
    highlight: false,
  },
];

export function DiscoveryFlightPage() {
  return (
    <div className="w-full">
      <Seo
        title={"Discovery Flight Van Nuys | Accelerated Flight School"}
        description={"1.5-hour discovery flight at Van Nuys Airport for $190. Fly over the San Fernando Valley and Malibu coastline, zero-g maneuvers included. Call 323-332-0585."}
      >
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Seo>

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/aircraft-takeoff.jpg"
            alt="N9172Y Piper Cherokee taking off from Van Nuys Airport"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30" />
        </div>
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Van Nuys Airport (KVNY)
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your First Flight Starts Here
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed mb-4 max-w-2xl">
            A 1.5-hour introductory flight with a <AviationTerm term="CFI" /> — 50% longer than
            most schools offer, for less money. No experience required. You will actually take
            the controls of N9172Y over the San Fernando Valley and out along the beautiful Malibu
            coastline, including fun zero-g style maneuvers.
          </p>
          <p className="text-3xl font-bold text-white mb-2">$190</p>
          <p className="text-sm text-white/60 mb-8">1.5 hours — aircraft + instructor included</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:323-332-0585" data-testid="link-discovery-call">
              <Button size="lg" variant="secondary" className="font-bold text-base h-12 px-8 gap-2">
                <Phone className="w-4 h-4" />
                Book by Phone
              </Button>
            </a>
            <a href="sms:323-332-0585" data-testid="link-discovery-text">
              <Button
                size="lg"
                variant="outline"
                className="font-bold text-base h-12 px-8 border-white/30 hover:bg-white/10 text-white gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Book by Text
              </Button>
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-4">
            Call or text 323-332-0585 — we will schedule your flight and answer any questions.
          </p>
        </div>
      </section>

      {/* 50% longer callout */}
      <section className="bg-secondary text-white py-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="bg-white/15 rounded-xl px-5 py-3 font-bold text-lg shrink-0">
              1.5 Hours
            </div>
            <p className="text-white/90 font-medium">
              Our Discovery Flight is <strong className="text-white">50% longer</strong> than what most
              flight schools offer — and at a lower price. More flight time, more experience, more value.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">What's Included</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Designed for people who have never flown before and want to experience aviation
              before committing to a full training program.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
              <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Pre-Flight Briefing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Aircraft systems, safety procedures, and what to expect. No prior knowledge required.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-6 text-center text-white">
              <Star className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">You Fly the Plane</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                You take the controls of N9172Y over the San Fernando Valley and the beautiful Malibu coastline. Real flying — not a simulator.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
              <Zap className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Zero-G Maneuvers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Experience the thrill of zero-gravity style maneuvers — a fun taste of what aircraft
                can actually do.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
              <CheckCircle2 className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Post-Flight Debrief</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Instructor answers questions on training, certificates, costs, and next steps.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-primary mb-4">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "No aviation experience or knowledge required",
                "1.5 hours total — pre-flight briefing, flight, and debrief",
                "You fly N9172Y, the 1985 Piper PA-28 Warrior II",
                "Scenic flight over the San Fernando Valley and the beautiful Malibu coastline",
                "Fun zero-g style maneuvers included",
                "50% more flight time than most other discovery flights",
                "Your instructor handles all radio communication",
                "Ideal for people of all ages curious about aviation",
                "A great gift for someone interested in flying",
                "Flight time applies toward your Private Pilot logbook",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft + Location */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">The Aircraft — N9172Y</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your Discovery Flight takes place in our 1985 Piper PA-28 Cherokee Warrior II —
                tail number N9172Y. A stable, well-maintained, beginner-friendly training aircraft
                with leather seats, a Garmin GNS 430 GPS, and full IFR equipment.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "1985 Piper PA-28 Cherokee Warrior II — N9172Y",
                  "Leather seats, well-maintained",
                  "Garmin GNS 430 GPS navigation",
                  "Stable and forgiving to fly",
                  "ADS-B equipped",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-primary text-sm">Van Nuys Airport (KVNY)</p>
                  <p className="text-xs text-slate-500">Van Nuys, California</p>
                  <p className="text-xs text-slate-500 mt-1">
                    One of the busiest general aviation airports in the world — great exposure
                    to real-world aviation traffic and radio communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/aircraft-takeoff.jpg"
                alt="N9172Y Piper Cherokee Warrior II taking off from Van Nuys Airport"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Path forward */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">Thinking About Continuing?</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Many students begin their training after a Discovery Flight. Here is what the path
            forward looks like from here.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0">
            {trainingSteps.map((item, i, arr) => (
              <React.Fragment key={i}>
                {item.href ? (
                  <Link href={item.href}>
                    <div className="rounded-xl px-6 py-4 text-center min-w-[140px] bg-slate-50 border border-slate-200 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer">
                      <p className="font-bold text-sm text-primary">{item.step}</p>
                      <p className="text-xs mt-1 text-slate-500">{item.note}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="rounded-xl px-6 py-4 text-center min-w-[140px] bg-secondary text-white shadow-lg">
                    <p className="font-bold text-sm text-white">{item.step}</p>
                    <p className="text-xs mt-1 text-white/80">{item.note}</p>
                  </div>
                )}
                {i < arr.length - 1 && (
                  <div className="text-slate-300 font-bold text-lg px-1 hidden md:block">→</div>
                )}
                {i < arr.length - 1 && (
                  <div className="text-slate-300 font-bold text-lg py-1 md:hidden">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Your Discovery Flight hours count toward your <AviationTerm term="Private Pilot" /> logbook.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/private-pilot-van-nuys">
              <Button variant="outline" size="sm" className="font-semibold border-primary text-primary hover:bg-primary/5">
                Private Pilot Training →
              </Button>
            </Link>
            <Link href="/instrument-rating-van-nuys">
              <Button variant="outline" size="sm" className="font-semibold border-primary text-primary hover:bg-primary/5">
                Instrument Rating →
              </Button>
            </Link>
            <Link href="/commercial-pilot-training-van-nuys">
              <Button variant="outline" size="sm" className="font-semibold border-primary text-primary hover:bg-primary/5">
                Commercial Pilot →
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="sm" className="font-semibold">
                View All Pricing →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-3">Discovery Flight — $190</h2>
          <p className="text-slate-600 mb-2 max-w-xl mx-auto">
            The $190 includes the aircraft and instructor for your full 1.5-hour experience.
            No hidden fees. If you decide to continue into formal training, your instructor
            will walk you through all costs before you commit to anything.
          </p>
          <p className="text-sm text-secondary font-bold mb-8">
            Most schools charge more for 1 hour. We include 1.5 hours for less.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:323-332-0585">
              <Button size="lg" className="font-bold h-14 px-8 text-lg gap-2">
                <Phone className="w-5 h-5" />
                Call 323-332-0585 to Book
              </Button>
            </a>
            <a href="sms:323-332-0585">
              <Button size="lg" variant="outline" className="font-bold h-14 px-8 text-lg gap-2 border-primary text-primary hover:bg-primary/5">
                <MessageSquare className="w-5 h-5" />
                Text to Book
              </Button>
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Subject to aircraft and instructor availability. Weather dependent.
          </p>
        </div>
      </section>
    </div>
  );
}
