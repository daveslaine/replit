import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CheckCircle2, PlaneTakeoff, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function PrivatePilotPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Private Pilot Training Van Nuys | Accelerated Flight School</title>
        <meta name="description" content="Get your Private Pilot license at Van Nuys Airport. Structured FAA ACS training. Estimated $7,500–$12,500. Half the cost of most SoCal schools. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">Private Pilot Training at Van Nuys</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl text-center md:text-left">
            Your foundational pilot certificate to fly single-engine aircraft for personal travel, recreation, and carrying passengers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <PlaneTakeoff className="w-8 h-8 text-secondary" />
                  What the Training Covers
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  The Private Pilot certificate is your gateway to aviation. Our structured syllabus guides you through every step required to pass the FAA <AviationTerm term="Checkride" /> with confidence.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Basic aircraft control",
                    "Takeoffs and landings",
                    "Emergency procedures",
                    "Navigation",
                    "Radio communication",
                    "Solo flight",
                    "Cross-country flights",
                    "Written test prep",
                    "Oral exam prep",
                    "FAA checkride prep"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 flex gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-800 mb-1">FAA Medical Certificate Required Before Solo</h4>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Before you fly <AviationTerm term="Solo time" /> — without an instructor onboard — the FAA requires you to hold a valid medical certificate from an FAA Aviation Medical Examiner. We recommend scheduling your medical early in training. Exam fees are typically $100–$200.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Flight Time Expectations</h3>
                <p className="text-slate-700 mb-4">
                  While the FAA minimum is 40 hours, the national average is closer to 65-75 hours. How long it takes depends heavily on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  <li><strong>Consistency:</strong> Flying 2-3 times per week builds muscle memory faster.</li>
                  <li><strong>Study habits:</strong> Doing the reading before you arrive saves expensive ground instruction time.</li>
                  <li><strong>Proficiency:</strong> Everyone learns at different speeds, and safety is the ultimate metric.</li>
                </ul>
                <p className="text-sm text-slate-500">
                  During your training, you will build both <AviationTerm term="Dual instruction" /> time with your instructor and <AviationTerm term="Solo time" /> flying the aircraft by yourself, including exciting <AviationTerm term="Cross-country" /> flights to other airports.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-4">Estimated Costs</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-primary-foreground/80 uppercase tracking-wider font-bold mb-1">Accelerated Estimate</p>
                    <p className="text-3xl font-bold text-white">~$7,500 <span className="text-lg font-normal opacity-80">- $12,500</span></p>
                    <p className="text-xs text-white/60 mt-1">Training costs only</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-primary-foreground/80 uppercase tracking-wider font-bold mb-1">SoCal Average</p>
                    <p className="text-xl font-bold text-white/70">$15,000 - $25,000+</p>
                  </div>
                  <div className="pt-4 border-t border-white/20 space-y-2 text-sm">
                    <p className="font-bold text-white/80 uppercase tracking-wider text-xs mb-2">Additional Required Costs</p>
                    <div className="flex justify-between">
                      <span className="text-white/70"><AviationTerm term="DPE" /> <AviationTerm term="Checkride" /> fee</span>
                      <span className="font-bold">~$800–$1,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Written test fee</span>
                      <span className="font-bold">~$175</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Headset (one-time)</span>
                      <span className="font-bold">~$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">ForeFlight (Basic)</span>
                      <span className="font-bold">$130/yr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">FAA Medical exam</span>
                      <span className="font-bold">~$100–$200</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20 mb-4">
                  <div className="flex gap-2 text-xs text-white/60">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>iPad with cellular &amp; GPS required for ForeFlight. FAA textbooks are free to download at faa.gov.</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href="tel:818-469-1414" className="block w-full">
                    <Button size="lg" variant="secondary" className="w-full font-bold">
                      Call to Discuss
                    </Button>
                  </a>
                  <Link href="/pricing" className="block w-full">
                    <Button size="lg" variant="outline" className="w-full font-bold border-white/30 hover:bg-white/10 text-white">
                      View Full Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}