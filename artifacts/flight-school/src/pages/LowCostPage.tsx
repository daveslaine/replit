import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LowCostPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Low Cost Flight School Van Nuys CA | Accelerated Flight School</title>
        <meta name="description" content="Low cost flight training at Van Nuys Airport. Combined dual rate from $180/hr. Structured lessons, FAA ACS prep, proactive checkride planning. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Low-Cost Flight Training at Van Nuys Airport</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Get your pilot certificate efficiently. Low cost through structure, not shortcuts. We provide a clear roadmap and eliminate wasted flights.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-700 mb-12">
            <p>
              At Accelerated Flight School, we believe that low-cost flight training shouldn't mean compromising on quality or safety. By utilizing highly structured lesson plans and proactive scheduling, we minimize the total time required to reach FAA proficiency standards.
            </p>
            <p>
              Many students overpay for flight training because they are allowed to wander through the syllabus without clear goals. Every lesson with us is tied directly to the Airman Certification Standards (ACS).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-2">Aircraft Rental</h3>
              <p className="text-3xl font-bold text-secondary mb-1">$160<span className="text-sm font-normal text-slate-500">/hr wet</span></p>
              <p className="text-sm text-slate-600">Fuel included</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-secondary" />
              <h3 className="text-lg font-bold text-primary mb-2">Combined Dual</h3>
              <p className="text-3xl font-bold text-secondary mb-1">$180<span className="text-sm font-normal text-slate-500">/hr</span></p>
              <p className="text-sm text-slate-600">With 10-hr block</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-2">Private Pilot Est.</h3>
              <p className="text-3xl font-bold text-secondary mb-1">$7.5k<span className="text-sm font-normal text-slate-500">- $12.5k</span></p>
              <p className="text-sm text-slate-600">Total typical cost</p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
            <h2 className="text-2xl font-bold text-primary mb-4">Start Your Aviation Journey Today</h2>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your goals. We'll give you honest answers about costs, timelines, and exactly what it takes to earn your wings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:818-469-1414">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                  <Phone className="w-5 h-5" />
                  Call or Text 818-469-1414
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}