import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";
import { StudentPromise } from "@/components/StudentPromise";

export function PricingPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Flight Training Pricing | Transparent Costs | Accelerated Flight School Van Nuys</title>
        <meta name="description" content="Transparent flight training pricing at Van Nuys Airport. Aircraft $160/hr wet. Combined dual from $180/hr. Private Pilot ~$7,500–$12,500. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Flight Training Pricing</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            We believe students should understand real training costs before they begin. Costs depend on consistency, study habits, weather, scheduling, and proficiency — but we provide realistic estimates upfront.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Rates */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Hourly Rates</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Aircraft Rental</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-600">Standard (<AviationTerm term="Wet rental" />)</span>
                    <span className="font-bold text-secondary">$160/hr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">10-Hour Block</span>
                    <span className="font-bold text-secondary">$150/hr</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Instructors</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-600">Reza S.</span>
                    <span className="font-bold text-secondary">$45/hr</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-600">David T. (Standard)</span>
                    <span className="font-bold text-secondary">$35/hr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">David T. (10-Hour Block)</span>
                    <span className="font-bold text-secondary">$30/hr</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-primary mb-2">Combined Dual Rates</h3>
                  <p className="text-xs text-slate-500 mb-3">Aircraft + Instructor flying together</p>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-slate-800">Standard Combined</span>
                    <span className="font-bold text-primary text-xl">$195/hr</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-slate-800">10-Hour Package Combined</span>
                    <span className="font-bold text-primary text-xl">$180/hr</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-slate-600">30-Hour Package</span>
                    <span className="text-sm font-bold text-slate-800">~$28/hr Inst. + ~$145/hr Acft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimates */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Program Estimates</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/private-pilot-van-nuys" className="font-bold text-lg text-secondary hover:underline">Private Pilot</Link>
                    <span className="font-bold text-xl text-primary">~$7,500–$12,500</span>
                  </div>
                  <p className="text-sm text-red-600 font-medium">SoCal Average: $15,000–$25,000+</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/instrument-rating-van-nuys" className="font-bold text-lg text-secondary hover:underline">Instrument Rating</Link>
                    <span className="font-bold text-slate-800">$180–$195/hr</span>
                  </div>
                  <p className="text-sm text-slate-600">Contact us for a detailed total estimate based on your current experience.</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/commercial-pilot-training" className="font-bold text-lg text-secondary hover:underline">Commercial Pilot</Link>
                    <span className="font-bold text-slate-800">~$40,000–$55,000</span>
                  </div>
                  <p className="text-sm text-slate-600">From zero hours. If you already have ratings, call for a custom bridge estimate.</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/cfi-training" className="font-bold text-lg text-secondary hover:underline">CFI Training</Link>
                    <span className="font-bold text-slate-800">~$3,000–$6,000</span>
                  </div>
                  <p className="text-sm text-slate-600">After completing Commercial Pilot.</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-lg text-slate-800">CFII Training</span>
                    <span className="font-bold text-slate-800">~$2,000–$4,000</span>
                  </div>
                  <p className="text-sm text-slate-600">After completing CFI.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Other Costs to Consider</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Additional costs in flight training may include: written test fees, FAA medical exam, headset, books or supplies, renter's insurance (if required), and <AviationTerm term="DPE" /> <AviationTerm term="Checkride" /> fees. We explain all of these upfront so students are never surprised.
              </p>
            </div>
          </div>

        </div>
      </section>

      <div className="container mx-auto px-4">
        <StudentPromise />
      </div>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-6">Let's calculate your exact path.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:818-469-1414">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
              <Phone className="w-5 h-5" />
              Call or Text 818-469-1414
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}