import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "wouter";
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  Plane,
  MapPin,
  ChevronDown,
  ChevronUp,
  Camera,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAirTourPage } from "@/data/airTourPages";
import { getAirTourUnique } from "@/data/airTourUnique";


function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 shrink-0 text-primary" />
        ) : (
          <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

const highlights = [
  {
    icon: <Plane className="w-5 h-5 text-primary" />,
    title: "You Fly the Plane",
    body: "Sit up front and take the controls with your instructor's guidance — this isn't a passive ride in the back.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
    title: "Fly With a CFI",
    body: "Every flight is with a Certified Flight Instructor in our 1985 Piper PA-28 Cherokee Warrior II (N9172Y).",
  },
  {
    icon: <Camera className="w-5 h-5 text-primary" />,
    title: "Scenic & Educational",
    body: "Take in Southern California from the air while learning how an airplane actually flies.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "A Real First Step",
    body: "No experience required — and your flight time may count toward Private Pilot training if you continue.",
  },
];

export function AirTourPage() {
  const [location] = useLocation();
  const slug = location.replace(/^\//, "");
  const page = getAirTourPage(slug);
  const unique = getAirTourUnique(slug);

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-24">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h1>
          <p className="text-slate-500 mb-6">This page does not exist.</p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[url('/images/aircraft-takeoff.png')] bg-cover bg-center opacity-20" />
        <div className="relative container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-white/20">
            <MapPin className="w-3.5 h-3.5" />
            Van Nuys Airport (KVNY) — San Fernando Valley, CA
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            {page.h1}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            {page.subheadline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:3233320585">
              <Button size="lg" variant="secondary" className="font-bold gap-2 h-12 px-6">
                <Phone className="w-4 h-4" /> Call 323-332-0585
              </Button>
            </a>
            <a href="sms:3233320585">
              <Button
                size="lg"
                variant="outline"
                className="font-bold gap-2 h-12 px-6 border-white text-white hover:bg-white/10"
              >
                <MessageSquare className="w-4 h-4" /> Text 323-332-0585
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button
                size="lg"
                className="font-bold gap-2 h-12 px-6 bg-white text-primary hover:bg-slate-100"
              >
                <Plane className="w-4 h-4" /> Book Discovery Flight
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-18 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-5">
            {page.intro.map((para, i) => (
              <p key={i} className="text-slate-700 leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Unique page-specific content */}
      {unique && (
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6">{unique.heading}</h2>
            <div className="space-y-5">
              {unique.paragraphs.map((para, i) => (
                <p key={i} className="text-slate-700 leading-relaxed text-base md:text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What you might see */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-5">
                What You Will See From the Air
              </h2>
              <div className="flex flex-wrap gap-2">
                {page.scenery.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    <MapPin className="w-3 h-3 text-primary" />
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-5 leading-relaxed">
                Exact scenery and routing vary with each flight depending on conditions on the day.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={page.photos[0]?.src ?? "/images/aircraft-ramp.jpg"}
                alt={
                  page.photos[0]?.alt ??
                  "N9172Y Piper PA-28 Cherokee Warrior II at Van Nuys Airport"
                }
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why a discovery flight */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
            Why a Discovery Flight Beats a Passive Air Tour
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            A sightseeing charter puts you in the back as a passenger. A discovery flight puts you in
            the front, with your hands on the controls.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenic banner photo */}
      {page.photos[1] && (
        <section className="relative">
          <img
            src={page.photos[1].src}
            alt={page.photos[1].alt}
            className="w-full h-72 md:h-[28rem] object-cover"
          />
        </section>
      )}

      {/* Pricing */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">Discovery Flight Pricing</h2>
          <p className="text-slate-500 mb-8">Aircraft and instructor included. No hidden fees.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-primary/20 rounded-xl p-6 text-center">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                1 Person
              </div>
              <div className="text-4xl font-black text-slate-800 mb-1">$190</div>
              <div className="text-xs text-slate-500">Aircraft + instructor included</div>
            </div>
            <div className="bg-white border border-primary/20 rounded-xl p-6 text-center">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                2 People
              </div>
              <div className="text-4xl font-black text-slate-800 mb-1">$270</div>
              <div className="text-xs text-slate-500">Total — subject to aircraft limitations</div>
            </div>
          </div>
          {page.pricingNote && (
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{page.pricingNote}</p>
          )}
          <div className="flex flex-wrap gap-3">
            <a href="tel:3233320585">
              <Button className="gap-2 font-semibold">
                <Phone className="w-4 h-4" /> Call 323-332-0585
              </Button>
            </a>
            <a href="sms:3233320585">
              <Button
                variant="outline"
                className="gap-2 font-semibold border-primary text-primary hover:bg-primary/5"
              >
                <MessageSquare className="w-4 h-4" /> Text 323-332-0585
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button variant="outline" className="gap-2 font-semibold">
                <Plane className="w-4 h-4" /> Discovery Flight Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {page.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Take the Controls?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            {page.ctaNote ??
              "Call or text us directly at 323-332-0585 to book your discovery flight at Van Nuys Airport — $190 for 1 person, $270 for 2."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:3233320585">
              <Button size="lg" variant="secondary" className="font-bold gap-2 h-12 px-7">
                <Phone className="w-4 h-4" /> Call 323-332-0585
              </Button>
            </a>
            <a href="sms:3233320585">
              <Button
                size="lg"
                variant="outline"
                className="font-bold gap-2 h-12 px-7 border-white text-white hover:bg-white/10"
              >
                <MessageSquare className="w-4 h-4" /> Text 323-332-0585
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button
                size="lg"
                className="font-bold gap-2 h-12 px-7 bg-white text-primary hover:bg-slate-100"
              >
                <Plane className="w-4 h-4" /> Book a Discovery Flight
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
