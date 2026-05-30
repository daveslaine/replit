import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, CheckCircle2, TrendingDown, Star, DollarSign, CalendarClock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    name: "Private Pilot Certificate",
    ours: "~$7,500 – $12,500",
    socal: "$15,000 – $25,000+",
    savings: "Up to $12,500+ savings",
    minHours: 40,
    typicalHours: "55–65",
    note: "FAA minimum 40 hrs. Most students need 55–65 hrs at SoCal schools with unstructured training.",
  },
  {
    name: "Instrument Rating",
    ours: "~$8,500 – $15,000",
    socal: "$16,000 – $23,000",
    savings: "Up to $8,000+ savings",
    minHours: 50,
    typicalHours: "50–70",
    note: "FAA minimum 50 hrs cross-country PIC. Structured IFR lesson planning reduces total hours significantly.",
  },
  {
    name: "Commercial Pilot (from Private)",
    ours: "~$18,000 – $28,000",
    socal: "$30,000 – $50,000",
    savings: "Up to $22,000+ savings",
    minHours: 250,
    typicalHours: "250–300",
    note: "Requires 250 total hours. Safety pilot strategy for building solo hours keeps costs down.",
  },
  {
    name: "CFI / CFII",
    ours: "~$3,000 – $6,000",
    socal: "$5,000 – $11,000",
    savings: "Up to $5,000+ savings",
    minHours: null,
    typicalHours: "20–40",
    note: "CFI training costs depend on your current proficiency. CFII adds instrument instructor privileges.",
  },
  {
    name: "Zero to Commercial + CFI",
    ours: "~$40,000 – $55,000",
    socal: "$70,000 – $110,000+",
    savings: "Up to $55,000+ savings",
    minHours: null,
    typicalHours: "250–300 total",
    note: "Full career pathway: Private + Instrument + Commercial + CFI. Our full pathway vs. SoCal average.",
  },
];

const rates = [
  { label: "Aircraft Rental", value: "$160/hr", sub: "Wet (fuel included)", highlight: false },
  { label: "10-Hour Block Rental", value: "$150/hr", sub: "Wet (fuel included)", highlight: true },
  { label: "Instructor (Solo)", value: "$20/hr", sub: "Student flying solo", highlight: false },
  { label: "Instructor (Dual)", value: "$35/hr", sub: "Flying with instructor", highlight: false },
  { label: "Combined Dual Rate", value: "~$180–$195/hr", sub: "Aircraft + instructor", highlight: true },
  { label: "Discovery Flight", value: "$190 flat", sub: "1.5 hrs total, full intro", highlight: false },
];

const whyCheaper = [
  {
    icon: <Target className="w-5 h-5 text-secondary shrink-0" />,
    title: "Every lesson has a clear objective",
    detail: "We teach directly to the FAA Airman Certification Standards (ACS) from day one. No filler lessons, no confusion about what you're working toward. Fewer hours wasted = less money spent."
  },
  {
    icon: <CalendarClock className="w-5 h-5 text-secondary shrink-0" />,
    title: "Checkride scheduled while you train",
    detail: "Most schools let you finish training and then search for a DPE — waiting 2–5 months. We schedule your checkride early, so you test within 1–3 weeks of completion. That prevents dozens of proficiency hours from piling up."
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-secondary shrink-0" />,
    title: "Low hourly rates with no hidden fees",
    detail: "Aircraft at $160/hr wet, combined dual from $180/hr. No enrollment fee, no curriculum fee, no 'materials package.' Pay for what you fly — nothing else."
  },
  {
    icon: <Star className="w-5 h-5 text-secondary shrink-0" />,
    title: "Passion-driven instruction, not revenue-driven",
    detail: "At larger schools, higher prices signal prestige — not quality. Our instructors charge a fair rate because we want students to return and refer others. A student who passes their checkride efficiently is our best advertisement."
  },
  {
    icon: <DollarSign className="w-5 h-5 text-secondary shrink-0" />,
    title: "No upfront payment",
    detail: "You pay per hour, per flight. No deposits. No training bundles. No forced financing. The total you spend is a direct reflection of how efficiently you train — and we're invested in keeping that number low."
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />,
    title: "High written test scores = easier oral exams",
    detail: "We help you score high on the FAA written exam. Every question you miss becomes a topic you must explain perfectly at your oral exam. A 90+ written score makes your checkride dramatically shorter and smoother."
  },
];

export function CheapestPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Cheapest Flight School Van Nuys Airport KVNY | Real Pricing | Accelerated Flight School</title>
        <meta name="description" content="The cheapest flight school in Van Nuys CA — with real pricing. Private Pilot ~$7,500–$12,500. Zero to Commercial + CFI ~$40,000–$55,000. Aircraft $160/hr wet. Structured, ACS-based. Call 818-469-1414." />
        <meta name="keywords" content="cheapest flight school van nuys, cheap flight training Los Angeles, affordable pilot training KVNY, flight school pricing Van Nuys CA" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">Van Nuys Airport (KVNY)</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cheapest Flight School in Van Nuys CA — Without Cheap Training</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Affordable does not mean unstructured. Our low prices come from efficiency, honest rates, and proactive scheduling — not from cutting corners on instruction quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:818-469-1414">
              <Button size="lg" className="h-12 px-7 font-bold bg-white text-primary hover:bg-white/90 gap-2">
                <Phone className="w-4 h-4" /> Call 818-469-1414
              </Button>
            </a>
            <Link href="/van-nuys-accelerated-flight-school-pricing">
              <Button size="lg" variant="outline" className="h-12 px-7 font-bold bg-transparent border-white/30 text-white hover:bg-white/10">
                Full Pricing Page
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Our Rates</p>
            <h2 className="text-3xl font-bold text-primary">What You Actually Pay Per Hour</h2>
            <p className="text-slate-500 mt-2 text-sm">All aircraft rentals are <strong>wet</strong> — fuel is always included. No surprises.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {rates.map((r) => (
              <div
                key={r.label}
                className={`rounded-xl border p-5 text-center ${r.highlight ? "bg-white border-secondary shadow-sm ring-1 ring-secondary/20" : "bg-white border-slate-200"}`}
              >
                {r.highlight && (
                  <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-2 py-0.5 rounded-full mb-2">Best Value</span>
                )}
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">{r.label}</p>
                <p className="text-2xl font-bold text-primary mb-0.5">{r.value}</p>
                <p className="text-xs text-slate-500">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Pricing Comparison */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Program Costs</p>
            <h2 className="text-3xl font-bold text-primary">All Programs — Our Estimate vs. SoCal Average</h2>
            <p className="text-slate-500 mt-2 text-sm max-w-2xl mx-auto">These are realistic total cost estimates including all flight hours, instructor time, and aircraft rental. DPE checkride fees are separate ($700–$1,200 per test, paid directly to the examiner).</p>
          </div>
          <div className="space-y-4">
            {programs.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="p-5 md:border-r border-slate-200">
                    <p className="font-bold text-primary mb-1">{p.name}</p>
                    {p.minHours && <p className="text-xs text-slate-500">FAA minimum: {p.minHours} hrs · Typical: {p.typicalHours} hrs</p>}
                    {!p.minHours && <p className="text-xs text-slate-500">Typical: {p.typicalHours}</p>}
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{p.note}</p>
                  </div>
                  <div className="p-5 bg-green-50 border-r border-slate-200 flex flex-col justify-center">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Accelerated Flight School</p>
                    <p className="text-2xl font-bold text-green-800">{p.ours}</p>
                    <p className="text-xs font-medium text-green-600 mt-1">{p.savings}</p>
                  </div>
                  <div className="p-5 bg-red-50 flex flex-col justify-center">
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">SoCal Average</p>
                    <p className="text-2xl font-bold text-red-800 line-through decoration-red-400">{p.socal}</p>
                    <p className="text-xs text-red-500 mt-1">Often more with inefficiency & delays</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-4">Estimates vary based on individual proficiency, weather, and scheduling frequency. Call us for a personalized breakdown.</p>
        </div>
      </section>

      {/* Why We're Cheaper */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">The Real Reason</p>
            <h2 className="text-3xl font-bold text-primary">Why We Cost Less — and Teach Better</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Most people assume that a higher price means higher quality in flight training. The opposite is often true. Large academies charge more because they carry high overhead — not because their instructors are better. We charge less because we're efficient, honest, and we genuinely care about your outcome.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {whyCheaper.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-5 flex gap-4">
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <p className="font-bold text-primary mb-1">{item.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Price ≠ High Quality */}
      <section className="py-14 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-5">Higher Price Does Not Mean Higher Quality</h2>
          <p className="text-primary-foreground/85 leading-relaxed mb-5">
            At many flight schools, the rate is high because the school has large overhead — admin staff, fleet maintenance departments, marketing budgets, fancy lobbies. None of that makes you a better pilot. In fact, at larger schools, the instructor assigned to you is often the least experienced one available, compensated just enough to keep them from leaving.
          </p>
          <p className="text-primary-foreground/85 leading-relaxed mb-5">
            We charge a fair price and provide high quality because we want students to pass, return, and refer others. Our reputation is built entirely on results — not advertising. When you succeed, we succeed.
          </p>
          <p className="font-bold text-white text-lg">
            The cheapest flight training is the training you finish fastest — with the fewest wasted hours.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">Ready to start for less?</h2>
          <p className="text-slate-500 mb-7">Call or text us — we'll give you a realistic cost estimate for your specific goals, schedule, and starting point.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:818-469-1414">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                <Phone className="w-5 h-5" /> Call or Text 818-469-1414
              </Button>
            </a>
            <Link href="/van-nuys-accelerated-flight-school-pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-primary text-primary hover:bg-primary/5">
                Full Pricing Breakdown
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
