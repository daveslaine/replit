import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, CheckCircle2, TrendingDown, Star, DollarSign, CalendarClock, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    name: "Discovery Flight",
    ours: "$190 flat",
    socal: "$200 – $350+",
    details: "1.5 hours total — preflight, full flight, debrief. You fly the aircraft.",
  },
  {
    name: "Private Pilot Certificate",
    ours: "~$7,500 – $12,500",
    socal: "$15,000 – $25,000+",
    details: "FAA min 40 hrs. Typical 55–65 hrs with unstructured training at other schools.",
  },
  {
    name: "Instrument Rating",
    ours: "~$8,500 – $15,000",
    socal: "$16,000 – $23,000",
    details: "FAA min 50 hrs cross-country PIC. ACS-based IFR training reduces total hours needed.",
  },
  {
    name: "Commercial Pilot (from Private)",
    ours: "~$18,000 – $28,000",
    socal: "$30,000 – $50,000",
    details: "Requires 250 total hours. Safety pilot strategy maximizes solo PIC hours affordably.",
  },
  {
    name: "CFI / CFII",
    ours: "~$3,000 – $6,000",
    socal: "$5,000 – $11,000",
    details: "Become a flight instructor. Adds instrument instructor privileges with CFII add-on.",
  },
  {
    name: "Zero to Commercial + CFI",
    ours: "~$40,000 – $55,000",
    socal: "$70,000 – $110,000+",
    details: "Full career pathway: PPL → IR → CPL → CFI. No financing needed. Pay as you fly.",
  },
];

const rates = [
  { label: "Aircraft Rental", value: "$160/hr", sub: "Wet — fuel included", highlight: false },
  { label: "Block Rental (10 hrs)", value: "$150/hr", sub: "Wet — fuel included", highlight: true },
  { label: "Instructor Solo", value: "$20/hr", sub: "When student flies solo", highlight: false },
  { label: "Instructor Dual", value: "$35/hr", sub: "Flying with instructor", highlight: false },
  { label: "Combined Dual Rate", value: "~$180–$195/hr", sub: "Aircraft + instructor total", highlight: true },
];

const qualityPoints = [
  {
    icon: <Target className="w-5 h-5 text-secondary shrink-0" />,
    title: "ACS-based from day one",
    detail: "Every maneuver is taught in the context of the FAA Airman Certification Standards. Students always know what they're training for, how they'll be tested, and what passing looks like.",
  },
  {
    icon: <Star className="w-5 h-5 text-secondary shrink-0" />,
    title: "Instructors who have been flying since the early 2000s",
    detail: "More than two decades of flight experience across diverse aircraft, airspace, and conditions. You're not being trained by someone building hours to leave for the airlines — you're being trained by someone who chose instructing as a profession.",
  },
  {
    icon: <CalendarClock className="w-5 h-5 text-secondary shrink-0" />,
    title: "Checkride scheduled early",
    detail: "We book your DPE while you're still training so you test within 1–3 weeks of finishing — not months later. Waiting for a DPE opening means flying proficiency hours for no reason. That's money straight out of your pocket.",
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-secondary shrink-0" />,
    title: "Scenario-based training builds real confidence",
    detail: "You'll practice diversions to unfamiliar airports, Class B airspace navigation, instrument approaches at new fields, and real-world ATC communication — not just a scripted pattern at one home airport.",
  },
  {
    icon: <Shield className="w-5 h-5 text-secondary shrink-0" />,
    title: "We take responsibility for your progress",
    detail: "If you're struggling, we diagnose the problem and fix it — not blame you and keep charging. Your checkride pass is our responsibility, not yours alone.",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-secondary shrink-0" />,
    title: "No upfront payment, no financing",
    detail: "Pay per flight only. No large deposits, no training package bundles, no pilot loan partnerships. You control your pace and your spending. Total cost reflects real hours — not inflated bundles.",
  },
];

export function LowCostPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Low Cost Flight Training Van Nuys Airport KVNY | Real Pricing | Accelerated Flight School</title>
        <meta name="description" content="Low-cost flight training at Van Nuys Airport (KVNY). Aircraft $160/hr wet. Private Pilot ~$7,500–$12,500. Zero to Commercial + CFI ~$40,000–$55,000. High-quality ACS instruction. Call 310-490-0402." />
        <meta name="keywords" content="low cost flight school van nuys, affordable flight training KVNY, low cost pilot training Los Angeles, cheap flight lessons Van Nuys California" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">Van Nuys Airport (KVNY)</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Low-Cost Flight Training at Van Nuys Airport</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Low cost through structure and efficiency — not shortcuts. Transparent hourly rates, ACS-based lessons, and proactive checkride scheduling that saves you real money.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:310-490-0402">
              <Button size="lg" className="h-12 px-7 font-bold bg-white text-primary hover:bg-white/90 gap-2">
                <Phone className="w-4 h-4" /> Call 310-490-0402
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

      {/* Rates */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Hourly Rates</p>
            <h2 className="text-3xl font-bold text-primary">Our Rates at a Glance</h2>
            <p className="text-slate-500 mt-2 text-sm">All aircraft rentals are wet — fuel is always included in the listed rate.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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
          <div className="grid sm:grid-cols-3 gap-4 text-center text-sm">
            {[
              { label: "No enrollment fee", icon: <CheckCircle2 className="w-4 h-4 text-secondary" /> },
              { label: "No hidden materials fees", icon: <CheckCircle2 className="w-4 h-4 text-secondary" /> },
              { label: "No upfront payment required", icon: <CheckCircle2 className="w-4 h-4 text-secondary" /> },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2 text-slate-600">
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Comparison Table */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">All Programs</p>
            <h2 className="text-3xl font-bold text-primary">Total Cost Estimates — Us vs. SoCal Average</h2>
            <p className="text-slate-500 mt-2 text-sm max-w-2xl mx-auto">
              Includes all flight hours, aircraft rental, and instructor time. DPE checkride fees ($700–$1,200 per test) are paid directly to the examiner and not included.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4 font-bold text-slate-700">Program</th>
                  <th className="text-left py-3 px-4 font-bold text-green-700 bg-green-50 rounded-tl-lg">Our Estimate</th>
                  <th className="text-left py-3 px-4 font-bold text-red-700 bg-red-50 rounded-tr-lg">SoCal Average</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {programs.map((p, i) => (
                  <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="py-4 px-4">
                      <p className="font-semibold text-primary">{p.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{p.details}</p>
                    </td>
                    <td className="py-4 px-4 bg-green-50/40">
                      <p className="font-bold text-green-800 text-base">{p.ours}</p>
                    </td>
                    <td className="py-4 px-4 bg-red-50/40">
                      <p className="font-bold text-red-700 text-base line-through decoration-red-400">{p.socal}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-400 text-xs mt-4">Individual results vary based on proficiency, weather, and scheduling frequency.</p>
        </div>
      </section>

      {/* Quality section */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Low Cost, High Quality</p>
            <h2 className="text-3xl font-bold text-primary">How We Keep Costs Low Without Lowering Standards</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              At most schools, the price is high because overhead is high — not because instruction is better. We operate lean, charge fairly, and invest our effort in your training outcome, not marketing. Here's exactly how that benefits you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {qualityPoints.map((item) => (
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

      {/* The real cost truth */}
      <section className="py-14 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-5">The Most Expensive Training Is Training That Drags On</h2>
          <p className="text-primary-foreground/85 leading-relaxed mb-4">
            If you fly 80 hours instead of 55 for your Private Pilot because lessons were disorganized, or you waited 4 months for a checkride slot and had to fly 15 proficiency hours to stay sharp — that is not cheap training. That is expensive training with a low hourly sticker price.
          </p>
          <p className="text-primary-foreground/85 leading-relaxed mb-4">
            Low-cost flight training means finishing with fewer total hours spent, fewer dollars wasted, and a checkride you walk into prepared and confident. That is what we deliver.
          </p>
          <p className="font-bold text-white text-lg mt-6">Pay as you fly. No deposits. No loans. No wasted hours.</p>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Payment Methods</p>
          <p className="text-slate-600 text-sm mb-4">We accept Cash, Zelle, Apple Pay, CashApp, and PayPal. Payment is per flight — no large sums required upfront.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Cash", "Zelle", "Apple Pay", "CashApp", "PayPal"].map((m) => (
              <div key={m} className="bg-white border border-slate-200 rounded-xl px-5 py-2.5 font-semibold text-primary text-sm shadow-sm">{m}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">Start with one flight. No commitment.</h2>
          <p className="text-slate-500 mb-7">Call or text us to get a personalized cost estimate for your training goals. We'll be honest about timelines, costs, and what it realistically takes.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:310-490-0402">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                <Phone className="w-5 h-5" /> Call or Text 310-490-0402
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-primary text-primary hover:bg-primary/5">
                Book a Discovery Flight — $190
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
