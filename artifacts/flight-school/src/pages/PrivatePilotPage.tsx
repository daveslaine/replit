import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CheckCircle2, PlaneTakeoff, Info, Shield, CalendarClock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function PrivatePilotPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Private Pilot License Training Van Nuys Airport | Affordable Flight School Los Angeles | Accelerated Flight School</title>
        <meta name="description" content="Earn your Private Pilot License at Van Nuys Airport (KVNY), Los Angeles. FAA ACS-structured training. Estimated $7,500–$12,500 — half the SoCal average. No upfront payment. Call 818-469-1414." />
        <meta name="keywords" content="private pilot license van nuys, private pilot training Los Angeles, learn to fly Van Nuys, flight school KVNY, affordable private pilot California, private pilot certificate Southern California, PPL training Los Angeles, flight lessons Van Nuys Airport" />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">Private Pilot Training at Van Nuys</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl text-center md:text-left mb-4">
            Your foundational pilot certificate to fly single-engine aircraft for personal travel, recreation, and carrying passengers.
          </p>
          <p className="text-sm font-bold text-green-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            No upfront payment — pay as you fly per hour
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

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-800 mb-1">FAA Medical Certificate Required Before Solo</h4>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Before you fly <AviationTerm term="Solo time" /> — without an instructor onboard — the FAA requires you to hold a valid medical certificate from an FAA Aviation Medical Examiner. We recommend scheduling your medical early in training. Exam fees are typically $100–$200.
                  </p>
                </div>
              </div>

              {/* PPL Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <GraduationCap className="w-7 h-7 text-secondary" />
                  FAA Private Pilot License Requirements (Part 61)
                </h2>

                {/* Basic Eligibility */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Basic Eligibility</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Age", detail: "Minimum 16 to fly solo; minimum 17 to receive the license." },
                      { label: "Language", detail: "Must read, write, speak, and understand English." },
                      { label: "Student Pilot Certificate", detail: "Must hold an FAA Student Pilot Certificate before flying solo." },
                      { label: "Medical Certificate", detail: "Must hold at least a current FAA Third-Class Medical Certificate." },
                    ].map((req) => (
                      <div key={req.label} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <p className="text-slate-700 text-sm"><strong>{req.label}:</strong> {req.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flight Time Breakdown */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-primary mb-1">Flight Time Breakdown</h3>
                  <p className="text-sm text-slate-500 mb-4">40 hours total minimum required by the FAA</p>

                  <div className="space-y-5">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">20 Hours Dual Instruction (with a CFI)</h4>
                      <div className="space-y-2 pl-2">
                        {[
                          "3 hours of cross-country flight training.",
                          "3 hours of night flight training, including 1 cross-country over 100 NM total distance and 10 takeoffs/landings to a full stop.",
                          "3 hours of instrument flight training (flying solely by reference to instruments).",
                          "3 hours of test preparation within 2 calendar months of the checkride.",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                            <p className="text-sm text-slate-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">10 Hours Solo Flight</h4>
                      <div className="space-y-2 pl-2">
                        {[
                          "5 hours of solo cross-country time.",
                          "1 solo cross-country flight of at least 150 NM total distance, landing at three points, with one segment longer than 50 NM.",
                          "3 takeoffs and landings to a full stop at an airport with an operating control tower.",
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
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Testing Requirements</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Knowledge Test", detail: "Pass the 60-question FAA written exam with a score of 70% or higher." },
                      { label: "Practical Test (Checkride)", detail: "Pass a two-part checkride — oral exam and flight test — with an FAA Designated Pilot Examiner (DPE)." },
                    ].map((req) => (
                      <div key={req.label} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <p className="text-slate-700 text-sm"><strong>{req.label}:</strong> {req.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Flight Time Expectations */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Flight Time Expectations</h3>
                <p className="text-slate-700 mb-4">
                  While the FAA minimum is 40 hours, the national average is closer to 65–75 hours. How long it takes depends heavily on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  <li><strong>Consistency:</strong> Flying 2–3 times per week builds muscle memory faster.</li>
                  <li><strong>Study habits:</strong> Doing the reading before you arrive saves expensive ground instruction time.</li>
                  <li><strong>Proficiency:</strong> Everyone learns at different speeds, and safety is the ultimate metric.</li>
                </ul>
                <p className="text-sm text-slate-500">
                  During your training, you will build both <AviationTerm term="Dual instruction" /> time with your instructor and <AviationTerm term="Solo time" /> flying the aircraft by yourself, including exciting <AviationTerm term="Cross-country" /> flights to other airports.
                </p>
              </div>

              {/* Flight Proficiency Requirements */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <h3 className="text-xl font-bold text-primary mb-2">FAA Flight Proficiency Requirements</h3>
                <p className="text-sm text-slate-500 mb-6">
                  To pass your Private Pilot checkride, you must demonstrate competency in all 10 required areas of operation listed in the FAA's Airman Certification Standards (ACS). Here is what each area involves and what you will practice extensively before your checkride.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      num: "I",
                      title: "Preflight Preparation",
                      detail: "Obtaining and analyzing a weather briefing, checking NOTAMs and TFRs, calculating weight and balance, computing takeoff and landing performance, and confirming aircraft airworthiness via the maintenance logbooks.",
                    },
                    {
                      num: "II",
                      title: "Preflight Procedures",
                      detail: "The physical walkaround inspection of the aircraft — checking fuel quantity and quality, oil level, control surface freedom of movement, tires, lights, pitot-static system, and all visible structural components. Also covers cockpit setup, avionics checks, and engine run-up procedures.",
                    },
                    {
                      num: "III",
                      title: "Airport and Seaplane Base Operations",
                      detail: "Ground operations at controlled and uncontrolled airports: taxiing techniques, taxi diagrams, runway incursion avoidance, radio communications with tower, CTAF procedures at non-towered airports, and light gun signal recognition.",
                    },
                    {
                      num: "IV",
                      title: "Takeoffs, Landings, and Go-Arounds",
                      detail: "Normal and crosswind takeoffs and landings, short-field and soft-field techniques, go-around procedures when an approach must be abandoned, and rejected takeoff procedures. Each technique trains you to safely handle a different runway surface or condition.",
                    },
                    {
                      num: "V",
                      title: "Performance Maneuvers",
                      detail: "Steep Turns: The primary performance maneuver for the Private Pilot. You enter a coordinated 45° banked turn and maintain altitude within ±100 ft, airspeed within ±10 knots, and roll out on the entry heading within ±10°. At 45° of bank the load factor increases to 1.41 G, requiring increased back pressure throughout. Steep turns develop precise aircraft control, coordination, and spatial awareness under elevated G-loading.",
                    },
                    {
                      num: "VI",
                      title: "Ground Reference Maneuvers",
                      detail: "These low-altitude maneuvers train you to track a precise path over the ground while compensating for wind drift — a fundamental skill for all traffic patterns and cross-country flying. Three maneuvers are tested:\n\n• Rectangular Course: Flying a rectangular ground track around a field at a constant altitude (600–1,000 ft AGL). You must continuously correct your bank angle and crab angle to maintain uniform distance from each side despite wind. Simulates the traffic pattern.\n\n• S-Turns Across a Road: Flying a series of alternating semicircles on each side of a linear ground reference (road or fence line). Each half-circle requires you to progressively vary bank angle — steeper on the downwind side where groundspeed is higher, shallower on the upwind side — to maintain equal-radius turns.\n\n• Turns Around a Point: Maintaining a constant-radius circle around a fixed ground reference. Bank must be steepest directly downwind (fastest groundspeed) and shallowest directly upwind (slowest groundspeed), with smooth continuous adjustment throughout.",
                    },
                    {
                      num: "VII",
                      title: "Navigation",
                      detail: "Pilotage (navigating by visual ground reference to sectional chart), dead reckoning (using heading, airspeed, and time to compute position), VOR radio navigation, and GPS navigation. Cross-country planning, fuel planning, and diversion to an alternate airport if weather or other factors require it.",
                    },
                    {
                      num: "VIII",
                      title: "Slow Flight and Stalls",
                      detail: "Three distinct skills are tested:\n\n• Slow Flight (Minimum Controllable Airspeed): You slow the aircraft to 5–10 knots above stall speed — inside the \"region of reversed command\" where adding back pressure increases drag more than it increases lift. You must maintain altitude and heading while demonstrating that the aircraft still responds to control inputs, albeit sluggishly. This teaches stall recognition before the stall occurs.\n\n• Power-Off Stalls (Approach-to-Landing Stall): Configured for landing (gear down if applicable, flaps extended, power at idle), you pitch up until the stall warning sounds and the aircraft stalls. Recovery: simultaneously lower the nose below the horizon and add full power. This simulates a dangerously nose-high final approach.\n\n• Power-On Stalls (Departure Stall): Full power applied, aircraft pitched up aggressively to simulate a departure or go-around stall scenario. Recovery requires simultaneously lowering the nose while maintaining full power. The strong propeller slipstream creates significant left-turning tendencies — right rudder is critical. This is a more aggressive stall with faster onset than the power-off version.",
                    },
                    {
                      num: "IX",
                      title: "Emergency Operations",
                      detail: "Simulated engine failure and forced landing to a field (your instructor will chop the throttle and you must set up for the best available landing area). Also covers partial power failures, electrical system malfunctions, smoke and fire in flight, emergency communications, and use of emergency checklists. The examiner will also test your judgment on system failures during the oral exam.",
                    },
                    {
                      num: "X",
                      title: "Postflight Procedures",
                      detail: "Engine shutdown checklist, aircraft securing (tie-downs, chocks, control locks), completing the flight logbook entry, noting and reporting any aircraft discrepancies or maintenance items observed during the flight.",
                    },
                  ].map((area) => (
                    <div key={area.num} className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold text-primary mb-1 text-sm">
                        <span className="text-secondary font-black mr-2">Area {area.num}.</span>
                        {area.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{area.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkride Scheduling Advantage */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-3">
                  <CalendarClock className="w-6 h-6 text-secondary shrink-0" />
                  Checkride Scheduling Advantage
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  At Accelerated Flight School, we coordinate <AviationTerm term="Checkride" /> scheduling early — once you show solid progress in training. This means your practical test with a <AviationTerm term="DPE" /> is already booked by the time you finish training, not after.
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
                  Examiner availability in Southern California is limited and demand is high. Schools that wait until training is complete to begin scheduling often leave students waiting months. During that wait, skills degrade and extra refresher flights add cost. Our proactive DPE relationships ensure you test while you're still sharp — saving you both time and money. <strong>We will ensure you get a Private Pilot DPE fast.</strong>
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-4">Estimated Costs</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-primary-foreground/80 uppercase tracking-wider font-bold mb-1">Accelerated Estimate</p>
                    <p className="text-3xl font-bold text-white">~$7,500 <span className="text-lg font-normal opacity-80">– $12,500</span></p>
                    <p className="text-xs text-white/60 mt-1">Training costs only</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-primary-foreground/80 uppercase tracking-wider font-bold mb-1">SoCal Average</p>
                    <p className="text-xl font-bold text-white/70 line-through">$15,000 – $25,000+</p>
                  </div>
                  <div className="pt-3 bg-green-500/20 rounded-lg px-3 py-2">
                    <p className="text-xs font-bold text-green-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      No upfront payment — pay per flight hour only
                    </p>
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
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex items-center gap-1 text-white/70">
                        <Shield className="w-3.5 h-3.5 shrink-0" />
                        <span>Renter's Insurance</span>
                      </div>
                      <span className="font-bold shrink-0">~$300/yr</span>
                    </div>
                    <p className="text-xs text-white/50 italic">
                      Note: Renter's insurance required only for solo rental without instructor present.
                    </p>
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
