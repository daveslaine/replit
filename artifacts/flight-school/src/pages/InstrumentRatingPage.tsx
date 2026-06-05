import React from "react";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { CloudRain, CheckCircle2, Phone, Info, Users, GraduationCap, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function InstrumentRatingPage() {
  return (
    <div className="w-full">
      <Seo
        title={"Instrument Rating Training Van Nuys Airport KVNY | IFR Los Angeles | Accelerated Flight School"}
        description={"Earn your Instrument Rating at Van Nuys Airport (KVNY), Los Angeles. ~$8,500–$15,000 — well below the SoCal average of $16K–$23K. Safety pilot strategy explained. No upfront payment. Call 323-332-0585."}
      />

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <CloudRain className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Instrument Rating Training at Van Nuys</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-4">
            Learn to fly with more flexibility by using aircraft instruments and air traffic control guidance during lower visibility weather.
          </p>
          <p className="text-sm font-bold text-green-400 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            No upfront payment — pay as you fly per hour
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Cost Overview */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Training Cost Estimate</h2>
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-4">
              <div>
                <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">Accelerated Flight School</p>
                <p className="text-4xl font-bold text-primary">~$8,500 – $15,000</p>
              </div>
              <div className="sm:ml-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">SoCal Average</p>
                <p className="text-2xl font-bold text-red-500 line-through">$16,000 – $23,000</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              The lower estimate (~$8,500) is possible with rigorous use of a <strong>safety pilot</strong>. Contact us for a detailed total estimate based on your current experience and hours.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <p className="text-sm text-green-800 font-medium">No upfront payment — pay only when you fly at $180–$195/hr combined.</p>
            </div>
          </div>

          {/* Safety Pilot Explanation */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-3">
              <Users className="w-7 h-7 text-secondary shrink-0" />
              What Is a Safety Pilot and How Does It Save Money?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              During instrument training, the FAA requires you to log hours of simulated instrument flight — meaning you wear a view-limiting device (like foggles) that blocks your outside view so you must fly using only your cockpit instruments.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              When practicing simulated instrument flight without a CFII onboard, the FAA requires another <strong>safety pilot</strong> to sit in the right seat and maintain visual lookout. A safety pilot must hold at least a Private Pilot certificate and a current medical, but does <em>not</em> need to be a paid instructor.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h3 className="font-bold text-amber-800 mb-2">Why this saves money</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                A CFII (instrument instructor) charges $35–$45/hr. A safety pilot — such as a fellow student, a pilot friend, or someone you coordinate with — can fly with you for free or at a very low shared-cost arrangement. This means you can log many of your required simulated instrument hours at aircraft-only cost ($160/hr wet) instead of the combined dual rate ($195/hr). With rigorous use of a safety pilot, you can reduce your total instrument rating cost significantly.
              </p>
            </div>
            <p className="text-sm text-slate-500">
              We will help you understand exactly when and how to use a safety pilot so you get the maximum cost benefit while meeting all FAA requirements.
            </p>
          </div>

          {/* IR Requirements */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-secondary shrink-0" />
              FAA Instrument Rating Requirements (Part 61)
            </h2>

            {/* Prerequisites */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-primary mb-3">Prerequisites</h3>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm">
                  You must already hold a current <AviationTerm term="Private Pilot" /> License (PPL) before beginning instrument rating training.
                </p>
              </div>
            </div>

            {/* Hour Requirements */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-primary mb-4">Flight Hours Breakdown</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">50 Hours Cross-Country PIC Time</h4>
                  <div className="pl-2 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                      <p className="text-sm text-slate-700">At least 10 of these 50 hours must be completed in an airplane.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">40 Hours Instrument Time</h4>
                  <div className="pl-2 space-y-2">
                    {[
                      "Must be actual or simulated instrument conditions.",
                      "Up to 20 hours may be credited using an approved Basic Aviation Training Device (BATD).",
                      "Up to 30 hours may be credited using an Advanced Aviation Training Device (AATD) under Part 61.",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                        <p className="text-sm text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">15 Hours Dual Instrument Instruction (with a CFII)</h4>
                  <div className="pl-2 space-y-2">
                    {[
                      "One instrument cross-country flight of at least 250 nautical miles along airways or ATC routing.",
                      "That cross-country must include an instrument approach at each airport and use three different kinds of navigation systems (e.g., ILS, VOR, GPS).",
                      "At least 3 hours of instrument training within 2 calendar months before the practical test.",
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

            {/* Testing Requirements */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Testing Requirements</h3>
              <div className="space-y-3">
                {[
                  { label: "Knowledge Test", detail: "Pass the FAA Instrument Rating written exam." },
                  { label: "Practical Test (Checkride)", detail: "Pass the oral exam and flight checkride with an FAA Designated Pilot Examiner (DPE)." },
                ].map((req) => (
                  <div key={req.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm"><strong>{req.label}:</strong> {req.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Training Includes */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-primary mb-6">What the Training Covers</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The Instrument Rating is widely considered the most valuable rating a pilot can add. It teaches you to fly entirely by reference to instruments, communicating with Air Traffic Control under <AviationTerm term="IFR" />, and flying safely when you can't see the horizon.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Training Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Developing a strong instrument scan",
                    "Advanced ATC communication",
                    "Holding procedures",
                    "Precision and non-precision instrument approaches",
                    "IFR cross-country planning and execution",
                    "Missed approaches",
                    "System failure emergency procedures",
                    "Rigorous checkride prep based on the ACS"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-primary mb-4">Benefits of the Rating</h3>
                <ul className="space-y-3 text-slate-700">
                  <li><strong>Flexibility:</strong> Fly through marine layers and overcast skies.</li>
                  <li><strong>Safety:</strong> Better weather decision-making and spatial awareness.</li>
                  <li><strong>Discipline:</strong> Develops stronger cockpit management and precise aircraft control.</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Standard Combined Rate</p>
                  <p className="text-3xl font-bold text-secondary">$195<span className="text-lg font-normal text-slate-500">/hr</span></p>
                  <p className="text-xs text-slate-500 mt-1">or $180/hr with 10-hour package</p>
                </div>
              </div>
            </div>
          </div>

          {/* Costs to Plan For */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Costs to Plan For</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1"><AviationTerm term="DPE" /> <AviationTerm term="Checkride" /> Fee</p>
                <p className="text-2xl font-bold text-secondary">~$800 – $1,000</p>
                <p className="text-xs text-slate-500 mt-1">Paid directly to the examiner. Applies at every school.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">ForeFlight Upgrade</p>
                <div className="space-y-1.5">
                  <div>
                    <p className="text-lg font-bold text-secondary">+$130/yr upgrade</p>
                    <p className="text-xs text-slate-500">If you already have the Basic ForeFlight plan ($130/yr).</p>
                  </div>
                  <div className="pt-1.5 border-t border-slate-200">
                    <p className="text-lg font-bold text-secondary">$260/yr (Essential)</p>
                    <p className="text-xs text-slate-500">If you are new to ForeFlight and purchasing the Essential plan directly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700">
                An iPad or iPad mini with built-in cellular and GPS is required to run ForeFlight during <AviationTerm term="IFR" /> training. The Basic ForeFlight plan ($130/yr) is sufficient for <AviationTerm term="Private Pilot" /> and VFR flying; the Essential plan ($260/yr) is required once you begin instrument training. If you already pay $130/yr for Basic, you only pay an additional $130/yr to upgrade to Essential.
              </p>
            </div>
          </div>

          {/* Checkride Scheduling Advantage */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-3">
              <CalendarClock className="w-6 h-6 text-secondary shrink-0" />
              Checkride Scheduling Advantage
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We coordinate your Instrument Rating checkride scheduling early — once you demonstrate consistent instrument proficiency, your IFR DPE slot is already being lined up so your practical test is ready when training is complete, not months after. <strong>We will ensure you get an Instrument Rating DPE fast.</strong>
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
              IFR examiners in Southern California are in high demand. Instrument skills degrade quickly without regular flying — a long post-training wait forces extra refresher flights and added cost. Our proactive DPE network keeps that gap as short as possible.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 mb-6">Ready to start your IFR training or need a detailed estimate?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:323-332-0585">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                  <Phone className="w-5 h-5" />
                  Call or Text 323-332-0585
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
