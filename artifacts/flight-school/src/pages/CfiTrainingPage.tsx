import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { GraduationCap, Phone, Info, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function CfiTrainingPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>CFI Training Van Nuys Airport KVNY | Become a Flight Instructor Los Angeles | Accelerated Flight School</title>
        <meta name="description" content="Become a Certified Flight Instructor (CFI) at Van Nuys Airport (KVNY), Los Angeles. $3,000–$6,000 after Commercial. CFII add-on available. Teach students, build hours, earn money flying. Call 310-490-0402." />
        <meta name="keywords" content="CFI training van nuys, certified flight instructor Los Angeles, become flight instructor Southern California, CFI course KVNY, CFII training Los Angeles, flight instructor certificate van nuys, flight instructor training affordable California" />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <GraduationCap className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certified Flight Instructor Training</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Become an instructor, teach the next generation of pilots, earn money flying, and build professional flight hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Share the Sky</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  A <AviationTerm term="CFI" /> certificate authorizes you to teach flight students. It is one of the most challenging and rewarding certificates a pilot can earn. You will transition from performing maneuvers to explaining, demonstrating, and analyzing them from the right seat.
                </p>
                <h3 className="text-xl font-bold text-primary mb-4">Why become a CFI?</h3>
                <ul className="space-y-3 text-slate-700 list-disc pl-5">
                  <li>Earn money while flying</li>
                  <li>Build the flight hours required for airline eligibility</li>
                  <li>Master aviation theory and aircraft control</li>
                  <li>Train the next generation of aviators</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-500 uppercase tracking-wider mb-4">Estimated Cost</h3>
                <p className="text-4xl font-bold text-secondary mb-2">$3,000 – $6,000</p>
                <p className="text-sm text-slate-600 mb-6">After completing Commercial Pilot certificate. Varies heavily on your knowledge of aviation fundamentals.</p>
                
                <div className="h-px bg-slate-200 w-full mb-6" />

                <h3 className="text-lg font-bold text-primary mb-2">CFII Add-on</h3>
                <p className="text-2xl font-bold text-slate-800 mb-1">~$2,000 – $4,000</p>
                <p className="text-xs text-slate-500 mb-6">Become a <AviationTerm term="CFII" /> to teach instrument students.</p>

                <div className="h-px bg-slate-200 w-full mb-6" />

                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Checkride Fees</h3>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700"><AviationTerm term="CFI" /> <AviationTerm term="Checkride" /></span>
                    <span className="font-bold text-secondary">~$2,000–$3,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700"><AviationTerm term="CFII" /> <AviationTerm term="Checkride" /></span>
                    <span className="font-bold text-secondary">~$800</span>
                  </div>
                </div>
                <div className="mt-3 flex gap-2 text-xs text-slate-500 text-left">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>CFI checkride fees reflect the additional complexity of evaluating teaching ability, not just flying skill. Paid directly to the <AviationTerm term="DPE" />.</span>
                </div>
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
              The CFI checkride requires a specialized DPE who evaluates both your flying and your teaching ability — these examiners book up fast. We proactively line up your CFI examiner as you approach training completion so you are not stuck waiting after months of preparation. <strong>We will ensure you get a CFI DPE fast.</strong>
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
              CFI examiners in Southern California are rare and in high demand. Many candidates wait months after finishing their training before they can even schedule a checkride. Our DPE network keeps that gap short — you test while your knowledge is fresh and your teaching demonstrations are sharp.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Ready to teach?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:310-490-0402">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                  <Phone className="w-5 h-5" />
                  Call or Text 310-490-0402
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}