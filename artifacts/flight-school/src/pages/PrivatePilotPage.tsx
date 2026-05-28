import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CheckCircle2, PlaneTakeoff, ShieldCheck } from "lucide-react";
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
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-primary-foreground/80 uppercase tracking-wider font-bold mb-1">SoCal Average</p>
                    <p className="text-xl font-bold text-white/70">$15,000 - $25,000+</p>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-white/20">
                  <a href="tel:818-469-1414" className="block w-full">
                    <Button size="lg" variant="secondary" className="w-full font-bold">
                      Call to Discuss
                    </Button>
                  </a>
                  <Link href="/pricing" className="block w-full">
                    <Button size="lg" variant="outline" className="w-full font-bold border-white/30 hover:bg-white/10 text-white">
                      View Pricing Details
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