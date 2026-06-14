import React from "react";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { Briefcase, AlertTriangle, Phone, Info, CalendarClock, CheckCircle2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function CommercialPilotPage() {
  return (
    <div className="w-full">
      <Seo
        title={"Commercial Pilot Training Van Nuys | Accelerated Flight School"}
        description={"Earn your Commercial Pilot certificate at Van Nuys Airport. ~$40,000–$55,000 from zero hours, below the SoCal average. No upfront payment. Call 323-332-0585."}
      />

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

                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Additional Per-Certificate Costs</p>
                    <div className="space-y-1 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span><AviationTerm term="DPE" /> <AviationTerm term="Checkride" /> fee (each)</span>
                        <span className="font-bold text-slate-800">~$800–$1,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Written test fee (each)</span>
                        <span className="font-bold text-slate-800">~$175</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2 text-xs text-slate-500">
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Checkride fees are paid directly to the examiner and apply at every flight school.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a href="tel:323-332-0585">
                    <Button className="w-full font-bold text-base h-12">
                      Call to Discuss Your Path
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* CPL Requirements */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-secondary shrink-0" />
              FAA Commercial Pilot Certificate Requirements (Part 61)
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-primary mb-4">Basic Eligibility</h3>
              <div className="space-y-3">
                {[
                  { label: "Age", detail: "Minimum 18 years old." },
                  { label: "Language", detail: "Must read, write, speak, and understand English." },
                  { label: "Certificates", detail: "Must already hold a Private Pilot License (PPL)." },
                  { label: "Medical", detail: "Must hold at least a current FAA Second-Class Medical Certificate to exercise commercial pilot privileges." },
                ].map((req) => (
                  <div key={req.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm"><strong>{req.label}:</strong> {req.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-primary mb-1">Flight Time Breakdown</h3>
              <p className="text-sm text-slate-500 mb-4">250 hours total minimum required by the FAA</p>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">100 Hours Pilot-in-Command (PIC) Time</h4>
                  <div className="pl-2 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                      <p className="text-sm text-slate-700">At least 50 of these 100 hours must be in airplanes.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">50 Hours Cross-Country Time</h4>
                  <div className="pl-2 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                      <p className="text-sm text-slate-700">At least 10 hours must be in airplanes.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">20 Hours Dual Instruction (with a CFI)</h4>
                  <div className="pl-2 space-y-2">
                    {[
                      "10 hours of instrument training (using a view-limiting device).",
                      "10 hours of complex, technically advanced (TAA), or multi-engine airplane training.",
                      "1 day cross-country over 100 NM total distance.",
                      "1 night cross-country over 100 NM total distance.",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                        <p className="text-sm text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">10 Hours Solo Flight (or PIC with Instructor Onboard)</h4>
                  <div className="pl-2 space-y-2">
                    {[
                      "1 cross-country flight of at least 300 NM total distance, with landings at three points, and one leg at least 250 NM straight-line distance.",
                      "5 hours of night flight in visual conditions with 10 takeoffs and landings at an airport with an operating control tower.",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                        <p className="text-sm text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Testing Requirements</h3>
              <div className="space-y-3">
                {[
                  { label: "Knowledge Test", detail: "Pass the 100-question FAA Commercial Pilot written exam." },
                  { label: "Practical Test (Checkride)", detail: "Pass an oral exam and flight test with an FAA examiner, demonstrating commercial-level flight maneuvers such as eights-on-pylons, steep spirals, and power-off 180° landings." },
                ].map((req) => (
                  <div key={req.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm"><strong>{req.label}:</strong> {req.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Checkride Scheduling Advantage */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 mb-12">
            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-3">
              <CalendarClock className="w-6 h-6 text-secondary shrink-0" />
              Checkride Scheduling Advantage
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              As you approach the 250-hour mark and training completion, we proactively coordinate your Commercial Pilot checkride with a DPE from our network — so your practical test is scheduled before your training ends, not after. <strong>We will ensure you get a Commercial Pilot DPE fast.</strong>
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-primary/20 rounded-lg p-4 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Accelerated Flight School</p>
                <p className="text-3xl font-bold text-primary">1–3 weeks</p>
                <p className="text-xs text-slate-500 mt-1">from training completion to checkride</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">SoCal Average (other schools)</p>
                <p className="text-3xl font-bold text-slate-400">2–5 months</p>
                <p className="text-xs text-slate-500 mt-1">waiting for an available examiner slot</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Commercial pilot skills require consistent flying to maintain. A long gap between training and your checkride means extra flights and extra cost. Our DPE relationships minimize that gap — you test while your flying is sharp.
            </p>
          </div>

          <div className="text-center">
            <a href="tel:323-332-0585">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                <Phone className="w-5 h-5" />
                Call or Text 323-332-0585
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}