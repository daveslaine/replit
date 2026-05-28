import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Briefcase, AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function CommercialPilotPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Commercial Pilot Training | Accelerated Flight School Van Nuys</title>
        <meta name="description" content="Commercial Pilot certificate training at Van Nuys Airport. Not just the airline path — legal paying flight operations. From ~$40K-$55K total from zero. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Briefcase className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Pilot Training</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            The pilot certificate that allows you to be paid for certain legal flying operations. Elevate your precision to professional standards.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Fly for Hire</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Earning your Commercial Pilot certificate means you can legally be compensated for flying. The training focuses on mastery of the aircraft, advanced maneuvers, and professional decision-making.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-800 mb-1">Important Distinction</h4>
                    <p className="text-sm text-yellow-700">
                      Becoming a Commercial Pilot is a major step, but it is <strong>NOT</strong> the same as becoming an airline pilot by itself. Airlines require an <AviationTerm term="ATP" /> certificate and specific flight hour minimums.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">Legal Commercial Paths Include:</h3>
              <ul className="space-y-3 text-slate-700 list-disc pl-5">
                <li>Flight instruction (after earning <AviationTerm term="CFI" />)</li>
                <li>Ferry flights and aircraft delivery</li>
                <li>Aerial photography and surveying</li>
                <li>Banner towing (with appropriate authorization)</li>
                <li>Pipeline and powerline patrol</li>
                <li>Other specific Part 119/135 legal commercial operations</li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Pathway Cost Estimates</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Starting from Zero Hours</p>
                    <p className="text-3xl font-bold text-secondary mb-2">~$40,000 – $55,000</p>
                    <p className="text-sm text-slate-600">Total estimated pathway cost depending on consistency and progression speed. Includes Private, Instrument, and Commercial training time building.</p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Already have Private/IFR?</p>
                    <p className="text-xl font-bold text-slate-800 mb-2">Call for custom estimate</p>
                    <p className="text-sm text-slate-600">We will evaluate your current logbook and build a custom syllabus to bridge the gap to 250 hours efficiently.</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a href="tel:818-469-1414">
                    <Button className="w-full font-bold text-base h-12">
                      Call to Discuss Your Path
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}