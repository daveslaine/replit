import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "wouter";
import { Phone, MessageSquare, CheckCircle2, Plane, MapPin, DollarSign, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLandingPage } from "@/data/landingPages";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-4 h-4 shrink-0 text-primary" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

const corePrograms = [
  { href: "/private-pilot-van-nuys", label: "Private Pilot" },
  { href: "/instrument-rating-van-nuys", label: "Instrument Rating" },
  { href: "/commercial-pilot-training-van-nuys", label: "Commercial Pilot" },
  { href: "/cfi-training-van-nuys", label: "CFI / CFII Training" },
  { href: "/van-nuys-accelerated-flight-school-pricing", label: "Pricing" },
  { href: "/van-nuys-accelerated-flight-school-aircraft", label: "Our Aircraft" },
  { href: "/discovery-flight-van-nuys", label: "Discovery Flight" },
  { href: "/van-nuys-accelerated-flight-school-contact", label: "Contact" },
];

export function LandingPage() {
  const [location] = useLocation();
  const slug = location.replace(/^\/landing-page-/, "");
  const page = getLandingPage(slug);

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-24">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h1>
          <p className="text-slate-500 mb-6">This landing page does not exist.</p>
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
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
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
            <a href="tel:8184691414">
              <Button size="lg" variant="secondary" className="font-bold gap-2 h-12 px-6">
                <Phone className="w-4 h-4" /> Call or Text 818-469-1414
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

      {/* Local Intro */}
      <section className="py-14 md:py-18 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-5">
            {page.localIntro.map((para, i) => (
              <p key={i} className="text-slate-700 leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
          {page.nearbyAreas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider w-full mb-1">Also serving students from:</span>
              {page.nearbyAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">
                  <MapPin className="w-3 h-3 text-primary" />{area}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Van Nuys / KVNY */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">
            Why Train at Van Nuys Airport (KVNY)?
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Van Nuys Airport is one of the busiest general aviation airports in the United States — and one of the best environments to earn a pilot certificate.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Plane className="w-5 h-5 text-primary" />, title: "Active Controlled Airport", body: "KVNY has a live tower, ILS approaches, and year-round high-traffic conditions. You learn real-world radio communication from lesson one." },
              { icon: <MapPin className="w-5 h-5 text-primary" />, title: "Real Los Angeles Airspace", body: "Training here means working with Burbank Class C, LA Class B, and diverse terminal area procedures — preparation for flying anywhere in the country." },
              { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, title: "Consistent Training Weather", body: "The San Fernando Valley's inland location provides consistent VFR training conditions, particularly compared to coastal marine-layer airports." },
              { icon: <DollarSign className="w-5 h-5 text-primary" />, title: "Cross-Country Route Variety", body: "From KVNY you can fly cross-country to Santa Barbara, Camarillo, Bakersfield, Big Bear, Brackett, Long Beach, and beyond — building real navigation skills." },
              { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, title: "General Aviation Focused", body: "No commercial airline traffic competing for runway time. KVNY is a dedicated GA airport built around pilots like you." },
              { icon: <Plane className="w-5 h-5 text-primary" />, title: "Checkride Access", body: "FAA Designated Pilot Examiners (DPEs) are available in the Van Nuys area for all certificates and ratings." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-slate-200">
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

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
            Transparent Pricing
          </h2>
          <p className="text-slate-500 mb-8">
            No fuel surcharges. No hidden fees. No large upfront training loans required. Pay as you fly.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Aircraft Rental", rate: "$160/hr", note: "Wet — fuel included" },
              { label: "Flight Instructor", rate: "$35/hr", note: "CFI / CFII instruction" },
              { label: "Dual Combined", rate: "$195/hr", note: "Aircraft + instructor" },
              { label: "Discovery Flight", rate: "$190", note: "1.5 hours in the air" },
            ].map((item) => (
              <div key={item.label} className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-2xl font-black text-slate-800 mb-1">{item.rate}</div>
                <div className="text-xs text-slate-500">{item.note}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/van-nuys-accelerated-flight-school-pricing">
              <Button variant="outline" className="gap-2 font-semibold border-primary text-primary hover:bg-primary/5">
                <DollarSign className="w-4 h-4" /> View Full Pricing
              </Button>
            </Link>
            <a href="tel:8184691414">
              <Button className="gap-2 font-semibold">
                <Phone className="w-4 h-4" /> Call 818-469-1414
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
            Training Programs at Accelerated Flight School
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            From your first discovery flight through your commercial certificate and flight instructor rating — all based at Van Nuys Airport.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corePrograms.map((prog) => (
              <Link key={prog.href} href={prog.href}>
                <div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-primary hover:shadow-sm transition-all text-center cursor-pointer group">
                  <Plane className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-800 text-sm">{prog.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
            How We Approach Your Training
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Accelerated Flight School is built around a straightforward principle: efficient, structured training that respects your time, your money, and your goals.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "ACS-Based from Day One", body: "Every lesson objective maps directly to the FAA's Airman Certification Standards — the exact document your checkride examiner will use. No filler flights." },
              { title: "Checkride-Focused Preparation", body: "You are never wondering when you will be ready. Your instructor tracks your progress against checkride standards and gives you a clear picture at every stage." },
              { title: "Instructor Accountability", body: "Your instructor debriefs every flight with specific observations. What you did well, what needs work, and exactly what your next lesson will address." },
              { title: "Pay-As-You-Fly", body: "No large training loans required. No large prepaid blocks. You schedule and pay per lesson, keeping your investment proportional to your progress at all times." },
              { title: "Student-First Instruction", body: "No runaround, no scripted upsell sequences, no inflated hours. David Tom, CFII, teaches because he believes in the mission of aviation training done right." },
              { title: "No Pressure on Pace", body: "Train twice a week or twice a month — your schedule, your pace. The instruction quality does not change based on how fast you progress through the program." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-slate-50">
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
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Start Flying?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Call or text David Tom, CFII, directly at <strong>818-469-1414</strong> — or book a Discovery Flight at Van Nuys Airport for $190 and experience flight training before committing to a full program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8184691414">
              <Button size="lg" variant="secondary" className="font-bold gap-2 h-12 px-7">
                <Phone className="w-4 h-4" /> Call 818-469-1414
              </Button>
            </a>
            <a href="sms:8184691414">
              <Button size="lg" variant="outline" className="font-bold gap-2 h-12 px-7 border-white text-white hover:bg-white/10">
                <MessageSquare className="w-4 h-4" /> Text 818-469-1414
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button size="lg" className="font-bold gap-2 h-12 px-7 bg-white text-primary hover:bg-slate-100">
                <Plane className="w-4 h-4" /> Book a Discovery Flight — $190
              </Button>
            </Link>
          </div>
          <p className="text-white/60 text-xs mt-6">
            Accelerated Flight School · 7900 Balboa Blvd H7 · Van Nuys Airport (KVNY) · Van Nuys, CA 91406
          </p>
        </div>
      </section>
    </div>
  );
}
