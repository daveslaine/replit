import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CheapestPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Cheapest Flight School Van Nuys CA | Accelerated Flight School</title>
        <meta name="description" content="The cheapest flight school in Van Nuys CA with professional FAA-focused training. Private Pilot ~$7,500–$12,500. Aircraft $160/hr wet. Call 818-469-1414." />
      </Helmet>

      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Cheapest Flight School in Van Nuys CA Without Cheap Training</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Affordable does not mean unstructured. Total cost savings come from efficiency, structured lessons, and proactive scheduling — not just low hourly rates.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">The Math Makes Sense</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-sm font-bold text-red-800 uppercase tracking-wide mb-1">Average SoCal Flight School</p>
                  <p className="text-3xl font-bold text-red-900">$15,000 – $25,000+</p>
                  <p className="text-sm text-red-700 mt-2">Often caused by inefficient lessons, high hourly rates, and checkride delays.</p>
                </div>
                
                <div className="p-6 bg-green-50 rounded-xl border border-green-100 relative shadow-sm">
                  <div className="absolute -top-3 -right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Our Estimate</div>
                  <p className="text-sm font-bold text-green-800 uppercase tracking-wide mb-1">Accelerated Flight School</p>
                  <p className="text-3xl font-bold text-green-900">~$7,500 – $12,500</p>
                  <p className="text-sm text-green-700 mt-2">Achieved through structured progression, low combined rates ($180/hr), and early scheduling.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">How we keep costs low:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span><strong>No wasted flights.</strong> Every lesson has a clear objective tied to the FAA standards.</span>
                  </li>
                  <li className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span><strong>Proactive scheduling.</strong> We book checkrides early so you don't waste hours staying proficient while waiting.</span>
                  </li>
                  <li className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span><strong>Competitive rates.</strong> Aircraft at $160/hr wet, and standard dual instruction starting at $180/hr combined.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Ready to save money on your training?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:818-469-1414">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                  <Phone className="w-5 h-5" />
                  Call or Text 818-469-1414
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-primary text-primary hover:bg-primary/5">
                  View Full Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}