import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Phone, Info, GraduationCap, CalendarClock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function CommercialMultiEnginePage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Commercial Multi-Engine Add-On Training Van Nuys | Twin Engine Rating Los Angeles | Accelerated Flight School</title>
        <meta name="description" content="Add a Multi-Engine rating to your Commercial Pilot certificate at Van Nuys Airport (KVNY), Los Angeles. $3,000–$4,000 — below the SoCal average of $5,000–$8,000. No written exam required. Call 818-469-1414." />
        <meta name="keywords" content="commercial multi engine add-on van nuys, multi engine rating Los Angeles, twin engine training Southern California, ME add-on KVNY, multi engine commercial pilot California, multi engine training Van Nuys Airport, add multi engine rating Los Angeles" />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Plane className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Multi-Engine Add-On Training</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-4">
            Already have your Commercial Single-Engine certificate? Add multi-engine privileges — no FAA written exam required. Train until you're proficient, typically 10–15 hours of dual flight.
          </p>
          <p className="text-sm font-bold text-green-400 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            No upfront payment — pay as you fly per hour
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Cost Estimate */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Training Cost Estimate</h2>
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-4">
              <div>
                <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">Accelerated Flight School</p>
                <p className="text-4xl font-bold text-primary">$3,000 – $4,000</p>
              </div>
              <div className="sm:ml-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">SoCal Average</p>
                <p className="text-2xl font-bold text-red-500 line-through">$5,000 – $8,000</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Most pilots complete the multi-engine add-on in 10–15 hours of dual instruction. There is no FAA-mandated minimum flight time for the add-on (unlike the initial commercial certificate) — you train until you are proficient and your instructor endorses you for the checkride.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <p className="text-sm text-green-800 font-medium">No upfront payment — pay only for the hours you fly at our dual rate.</p>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-secondary shrink-0" />
              FAA Multi-Engine Add-On Requirements (Part 61)
            </h2>

            {/* Prerequisites */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-primary mb-3">Prerequisite</h3>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm">
                  You must already hold a <strong>Commercial Pilot Single-Engine Certificate</strong>. The multi-engine add-on simply adds multi-engine privileges to your existing commercial certificate.
                </p>
              </div>
            </div>

            {/* No Written Exam */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6 flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-green-800 mb-1">No Written Exam Required</h3>
                <p className="text-sm text-green-700 leading-relaxed">
                  Unlike the initial Commercial Pilot certificate, the multi-engine add-on does not require an FAA written knowledge test. You go straight to ground training and flight training with your instructor.
                </p>
              </div>
            </div>

            {/* Training Requirements */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-primary mb-4">Training Requirements</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Ground Training (with a MEI)</h4>
                  <div className="space-y-2 pl-2">
                    {[
                      "Multi-engine aerodynamics: increased performance, lift distribution, and handling differences vs. single-engine.",
                      "Engine-out aerodynamics: asymmetric thrust, Vmc (minimum control speed), and the critical engine concept.",
                      "Multi-engine systems: dual fuel systems, propeller controls, feathering, and engine synchronization.",
                      "Emergency procedures: engine failure at various phases of flight, single-engine approaches and go-arounds.",
                      "Multi-engine performance: climb rates, accelerate-stop distance, and single-engine service ceiling.",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                        <p className="text-sm text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Flight Training (Dual — No Minimum Hours)</h4>
                  <div className="space-y-2 pl-2">
                    {[
                      "Normal and crosswind takeoffs and landings in the multi-engine aircraft.",
                      "Vmc demonstrations: establishing and recovering from minimum controllable airspeed with one engine inoperative.",
                      "Engine-out emergency procedures: identifying the failed engine, feathering the propeller, maintaining directional control.",
                      "Single-engine instrument approaches and go-arounds.",
                      "Engine-out landings: full-stop landings with simulated single-engine configuration.",
                      "Typical duration: 10–15 hours of dual flight time until checkride-ready.",
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

            {/* Checkride */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Practical Test (Checkride)</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                The multi-engine add-on checkride is focused entirely on multi-engine operations. The examiner evaluates:
              </p>
              <div className="space-y-2 pl-2">
                {[
                  "Vmc demonstrations and recovery.",
                  "Engine-out identification, feathering, and single-engine procedures.",
                  "Single-engine approaches and go-arounds.",
                  "Normal and emergency multi-engine checklists.",
                  "Multi-engine systems and aerodynamics (oral exam).",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600"><AviationTerm term="DPE" /> <AviationTerm term="Checkride" /> Fee</span>
                  <span className="font-bold text-secondary">~$800 – $1,000</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Paid directly to the examiner. No written exam fee for add-on ratings.</p>
              </div>
            </div>
          </div>

          {/* Why Add Multi-Engine */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Why Add a Multi-Engine Rating?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-800 mb-3">Career Benefits</h3>
                <ul className="space-y-2">
                  {[
                    "Required for most charter and regional airline positions.",
                    "Significantly increases the types of aircraft you can legally fly.",
                    "Demonstrates a higher level of pilot proficiency to employers.",
                    "Opens Part 135 commercial operations flying twin-engine aircraft.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-3">PIC Time Building</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  On the airline path, reaching 1,500 hours of total flight time is the major milestone. After earning your Commercial Multi-Engine Add-On, you should aim to build at least <strong>15 hours of Pilot in Command (PIC) time in the multi-engine aircraft</strong>. This multi-engine PIC time is valuable when applying to regional airlines and charter operators.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm font-bold text-primary mb-1">15 Hours Multi-Engine PIC</p>
                  <p className="text-xs text-slate-600">Target goal for airline path students after earning the add-on rating.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkride Scheduling Advantage */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-3">
              <CalendarClock className="w-6 h-6 text-secondary shrink-0" />
              Checkride Scheduling Advantage
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Multi-engine examiners in Southern California are specialized and limited. We proactively schedule your multi-engine checkride as you approach proficiency — so your practical test is lined up before training ends, not after a long wait. <strong>We will ensure you get a Commercial Multi-Engine DPE fast.</strong>
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
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 mb-6">Ready to add multi-engine to your commercial certificate?</p>
            <a href="tel:818-469-1414">
              <Button size="lg" className="h-14 px-8 text-lg font-bold gap-2">
                <Phone className="w-5 h-5" />
                Call or Text 818-469-1414
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
