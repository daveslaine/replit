import React from "react";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import {
  Phone,
  CheckCircle2,
  TrendingDown,
  Star,
  DollarSign,
  CalendarClock,
  Target,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const budgetStages = [
  {
    name: "Start with one lesson",
    amount: "Discovery Flight: $199.99",
    details:
      "Use a single introductory lesson to meet the school, see the aircraft, and understand the training process before planning a certificate budget.",
  },
  {
    name: "Build a recurring lesson budget",
    amount: "Dual instruction: from $185/hr",
    details:
      "Choose a lesson frequency you can sustain. Consistent training can reduce skill loss between flights, while pay-as-you-fly scheduling keeps spending tied to completed lessons.",
  },
  {
    name: "Track aircraft and instructor time",
    amount: "Aircraft: from $155/hr wet",
    details:
      "Fuel is included in the published wet aircraft rate. Instructor time is $35 per hour, and the combined advertised dual rate starts at $185 per hour.",
  },
  {
    name: "Reserve for outside requirements",
    amount: "Outside costs vary",
    details:
      "FAA knowledge tests, medical certification, pilot equipment, and independent DPE fees should be planned separately from aircraft and instructor charges.",
  },
];

const rates = [
  {
    label: "Aircraft Rental",
    value: "From $155/hr",
    sub: "Wet — fuel included",
    highlight: false,
  },
  {
    label: "Fleet Range",
    value: "$155–$175/hr",
    sub: "Multiple aircraft, different price points",
    highlight: true,
  },
  {
    label: "Instructor Dual",
    value: "$35/hr",
    sub: "Fair, flat instructor rate",
    highlight: false,
  },
  {
    label: "Combined Dual Rate",
    value: "From $185/hr",
    sub: "Aircraft + instructor total",
    highlight: true,
  },
];

const qualityPoints = [
  {
    icon: <Target className="w-5 h-5 text-secondary shrink-0" />,
    title: "ACS-based from day one",
    detail:
      "Every maneuver is taught in the context of the FAA Airman Certification Standards. Students always know what they're training for, how they'll be tested, and what passing looks like.",
  },
  {
    icon: <Star className="w-5 h-5 text-secondary shrink-0" />,
    title: "Instructors who have been flying since the early 2000s",
    detail:
      "More than two decades of flight experience across diverse aircraft, airspace, and conditions. You're not being trained by someone building hours to leave for the airlines — you're being trained by someone who chose instructing as a profession.",
  },
  {
    icon: <CalendarClock className="w-5 h-5 text-secondary shrink-0" />,
    title: "Checkride scheduled early",
    detail:
      "We coordinate examiner planning early and target a checkride within 1–2 weeks after training completion and readiness when DPE schedules, weather, and eligibility permit. This target is not a guarantee, but planning ahead can limit avoidable proficiency flying.",
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-secondary shrink-0" />,
    title: "Scenario-based training builds real confidence",
    detail:
      "You'll practice diversions to unfamiliar airports, Class B airspace navigation, instrument approaches at new fields, and real-world ATC communication — not just a scripted pattern at one home airport.",
  },
  {
    icon: <Shield className="w-5 h-5 text-secondary shrink-0" />,
    title: "We take responsibility for your progress",
    detail:
      "If you're struggling, we diagnose the problem and fix it — not blame you and keep charging. Your checkride pass is our responsibility, not yours alone.",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-secondary shrink-0" />,
    title: "No upfront payment, no financing",
    detail:
      "Pay per flight only. No large deposits, no training package bundles, no pilot loan partnerships. You control your pace and your spending. Total cost reflects real hours — not inflated bundles.",
  },
];

export function LowCostPage() {
  return (
    <div className="w-full">
      <Seo
        title={"Low-Cost Flight Training Van Nuys | Accelerated Flight School"}
        description={
          "Plan low-cost flight training in Van Nuys with transparent wet aircraft and instructor rates, staged budgeting, and pay-as-you-fly scheduling."
        }
      />

      {/* Hero */}
      <section className="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-cockpit-dusk.jpg"
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
            alt=""
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">
            Van Nuys Airport (KVNY)
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Low-Cost Flight Training at Van Nuys Airport
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Low cost through structure and efficiency — not shortcuts.
            Transparent hourly rates, ACS-based lessons, and proactive checkride
            scheduling that saves you real money.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:424-493-2761">
              <Button
                size="lg"
                className="h-12 px-7 font-bold bg-white text-primary hover:bg-white/90 gap-2"
              >
                <Phone className="w-4 h-4" /> Call 424-493-2761
              </Button>
            </a>
            <Link href="/van-nuys-accelerated-flight-school-pricing">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 font-bold bg-transparent border-white/30 text-white hover:bg-white/10"
              >
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
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
              Hourly Rates
            </p>
            <h2 className="text-3xl font-bold text-primary">
              Our Rates at a Glance
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              All aircraft rentals are wet — fuel is always included in the
              listed rate.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {rates.map((r) => (
              <div
                key={r.label}
                className={`rounded-xl border p-5 text-center ${r.highlight ? "bg-white border-secondary shadow-sm ring-1 ring-secondary/20" : "bg-white border-slate-200"}`}
              >
                {r.highlight && (
                  <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                    Best Value
                  </span>
                )}
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">
                  {r.label}
                </p>
                <p className="text-2xl font-bold text-primary mb-0.5">
                  {r.value}
                </p>
                <p className="text-xs text-slate-500">{r.sub}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-center text-sm">
            {[
              {
                label: "No enrollment fee",
                icon: <CheckCircle2 className="w-4 h-4 text-secondary" />,
              },
              {
                label: "No hidden materials fees",
                icon: <CheckCircle2 className="w-4 h-4 text-secondary" />,
              },
              {
                label: "No upfront payment required",
                icon: <CheckCircle2 className="w-4 h-4 text-secondary" />,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center gap-2 text-slate-600"
              >
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Low-cost planning */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
              Affordable Flight Training
            </p>
            <h2 className="text-3xl font-bold text-primary">
              Planning a Sustainable Low-Cost Flight Training Budget
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              A sustainable budget considers lesson frequency, combined
              aircraft-and-instructor cost, preparation between flights, and the
              amount a student can comfortably pay over time. Accelerated Flight
              School combines transparent wet aircraft rates, a $35-per-hour
              instructor rate, and pay-as-you-fly scheduling without a large
              upfront package.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/cheap-flight-school-los-angeles-accelerated-flight-school-van-nuys-kvny">
                <span className="inline-flex rounded-full border border-primary/25 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors">
                  Cheap Flight School Los Angeles Checklist
                </span>
              </Link>
              <Link href="/van-nuys-accelerated-flight-school-pricing">
                <span className="inline-flex rounded-full border border-primary/25 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors">
                  Current Aircraft and Instructor Rates
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3 mb-10">
            {[
              {
                title: "Compare the combined rate",
                text: "An advertised aircraft price may exclude the instructor, fuel, membership dues, or surcharges. Compare the complete dual-training rate when building a sustainable budget.",
              },
              {
                title: "Compare realistic total hours",
                text: "A low hourly rate does not protect a budget when disorganized lessons add avoidable repetition. Consistent, ACS-based instruction gives each lesson a defined purpose.",
              },
              {
                title: "Keep control of your money",
                text: "Paying one flight at a time avoids large deposits and long financing commitments. You can track your progress and spending throughout training.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 md:p-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              What Makes a Low-Cost Training Plan Sustainable?
            </h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                Your real training cost includes the aircraft, instructor, fuel,
                required flight time, ground preparation, repeated lessons, and
                any proficiency flying needed before a checkride.
              </p>
              <p>
                A useful comparison asks how much you are likely to spend from
                your first lesson through checkride readiness. Our rates and
                program estimates are published so prospective students can
                compare those costs before committing.
              </p>
              <p>
                Low-cost flight training should mean efficient, transparent
                planning at a fair price. It should never mean cutting safety,
                skipping preparation, or promising that every student will
                finish at the FAA minimum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget stages */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
              Pay-As-You-Fly Planning
            </p>
            <h2 className="text-3xl font-bold text-primary">
              Build a Flight Training Budget in Stages
            </h2>
            <p className="text-slate-500 mt-2 text-sm max-w-2xl mx-auto">
              Separate recurring lesson costs from outside certification
              expenses so one advertised number does not hide the full plan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {budgetStages.map((stage) => (
              <article
                key={stage.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="font-bold text-primary mb-1">{stage.name}</h3>
                <p className="font-semibold text-green-800 mb-2">
                  {stage.amount}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {stage.details}
                </p>
              </article>
            ))}
          </div>
          <p className="text-center text-slate-600 text-xs mt-4">
            Certificate and rating totals vary with prior experience,
            proficiency, weather, aircraft choice, and training frequency.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-5">
            A Low-Cost Plan Starts With the Full Cost
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              “Affordable” and “low-cost” are useful search terms, but a
              student-first comparison goes beyond the advertised aircraft rate.
              Ask whether the rate is wet, what instructor time costs, how ACS
              knowledge and practical-test preparation are handled, and how many
              hours may be realistic for your experience and schedule.
              Accelerated Flight School helps prospective pilots compare the
              combined training picture before they begin.
            </p>
            <p>
              This flight school builds efficiency through clear lesson goals,
              preparation between flights and honest progress reviews—not by
              promising FAA-minimum completion. We coordinate examiner planning
              early and target checkrides within 1–2 weeks after training
              completion and readiness when DPE schedules, weather, and
              eligibility permit. Availability remains outside our control, so
              the target is never a guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Quality section */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
              Low Cost, High Quality
            </p>
            <h2 className="text-3xl font-bold text-primary">
              How We Keep Costs Low Without Lowering Standards
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              At most schools, the price is high because overhead is high — not
              because instruction is better. We operate lean, charge fairly, and
              invest our effort in your training outcome, not marketing. Here's
              exactly how that benefits you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {qualityPoints.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-slate-200 p-5 flex gap-4"
              >
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <p className="font-bold text-primary mb-1">{item.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The real cost truth */}
      <section className="py-14 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-5">
            The Most Expensive Training Is Training That Drags On
          </h2>
          <p className="text-primary-foreground/85 leading-relaxed mb-4">
            If you fly 80 hours instead of 55 for your Private Pilot because
            lessons were disorganized, or you waited 4 months for a checkride
            slot and had to fly 15 proficiency hours to stay sharp — that is not
            poor training. That is expensive training with a low hourly sticker
            price.
          </p>
          <p className="text-primary-foreground/85 leading-relaxed mb-4">
            Low-cost flight training means finishing with fewer total hours
            spent, fewer dollars wasted, and a checkride you walk into prepared
            and confident. That is what we deliver.
          </p>
          <p className="font-bold text-white text-lg mt-6">
            Pay as you fly. No deposits. No loans. No wasted hours.
          </p>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
            Payment Methods
          </p>
          <p className="text-slate-600 text-sm mb-4">
            We accept Cash, Zelle, Apple Pay, CashApp, and PayPal. Payment is
            per flight — no large sums required upfront.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Cash", "Zelle", "Apple Pay", "CashApp", "PayPal"].map((m) => (
              <div
                key={m}
                className="bg-white border border-slate-200 rounded-xl px-5 py-2.5 font-semibold text-primary text-sm shadow-sm"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Start with one flight. No commitment.
          </h2>
          <p className="text-slate-500 mb-7">
            Call or text us to get a personalized cost estimate for your
            training goals. We'll be honest about timelines, costs, and what it
            realistically takes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:424-493-2761">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2"
              >
                <Phone className="w-5 h-5" /> Call or Text 424-493-2761
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-primary text-primary hover:bg-primary/5"
              >
                Book a Discovery Flight — $199.99
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
