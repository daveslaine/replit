import React, { useState } from "react";
import { Seo } from "@/components/Seo";
import {
  CheckCircle2,
  Phone,
  Clock,
  BookOpen,
  FileText,
  Target,
  Shield,
  Plane,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

const vSpeeds = [
  {
    label: "Vr",
    value: "60 kts",
    name: "Rotation Speed",
    desc: "The speed at which you lift the nosewheel off the runway to begin the takeoff climb. At Vr you apply back pressure and the aircraft becomes airborne.",
  },
  {
    label: "Vx",
    value: "63 kts",
    name: "Best Angle of Climb",
    desc: "Gives you the most altitude for the least horizontal distance. Used when you need to clear an obstacle shortly after takeoff — a tree line, power lines, or a rising terrain feature directly ahead.",
  },
  {
    label: "Vy",
    value: "79 kts",
    name: "Best Rate of Climb",
    desc: "Gives you the most altitude per unit of time. This is the normal climb speed used on departure when there are no obstacle concerns — it gets you to cruise altitude fastest.",
  },
  {
    label: "Vs1",
    value: "50 kts",
    name: "Stall Speed — Flaps Up",
    desc: "The lowest speed at which the wing can sustain level flight in a clean (flaps-up) configuration. Below this speed with flaps up, the wing will stall. Critical for understanding stall entry during training maneuvers.",
  },
  {
    label: "Vso",
    value: "44 kts",
    name: "Stall Speed — Full Flaps",
    desc: "Stall speed in landing configuration (flaps fully extended). This is the absolute minimum flying speed during the approach to land. Your approach should always remain well above this speed.",
  },
  {
    label: "Vg",
    value: "73 kts",
    name: "Best Glide Speed",
    desc: "The speed that gives you the maximum glide distance if the engine fails. Immediately pitch to Vg during an engine failure — it extends the time and distance available to locate a landing spot. This is one of the most important emergency speeds you will memorize.",
  },
  {
    label: "Va",
    value: "88–111 kts",
    name: "Maneuvering Speed",
    desc: "The maximum speed at which you can apply full, abrupt control deflection without risking structural damage. In turbulence or rough air, slow to or below Va to protect the airframe. The range accounts for varying aircraft gross weights — lower weight = lower Va.",
  },
  {
    label: "Vno",
    value: "126 kts",
    name: "Maximum Structural Cruise Speed",
    desc: "The top of the green arc on the airspeed indicator. You may fly up to this speed in smooth air. Above Vno, the aircraft enters the yellow 'caution' arc — fly here only in smooth air and avoid abrupt control inputs.",
  },
  {
    label: "Vfe",
    value: "103 kts",
    name: "Maximum Flap Extended Speed",
    desc: "The fastest you may fly with flaps extended. Exceeding Vfe with flaps down risks structural damage to the flap system. When extending flaps on approach, confirm airspeed is at or below Vfe first.",
  },
  {
    label: "Vfinal",
    value: "65 kts",
    name: "Final Approach Speed",
    desc: "The target airspeed flown on final approach to landing. Provides an appropriate margin above stall while delivering a stable, controllable descent profile to the runway threshold.",
  },
  {
    label: "Vne",
    value: "160 kts",
    name: "Never-Exceed Speed",
    desc: "The red line on the airspeed indicator — the absolute structural limit of the airframe. Exceeding Vne risks permanent structural damage or inflight breakup. Never intentionally fly beyond this speed under any circumstances.",
  },
  {
    label: "Max Crosswind",
    value: "17 kts",
    name: "Maximum Demonstrated Crosswind",
    desc: "The maximum crosswind component demonstrated safe during flight testing. Operations in crosswinds above this value require particular caution. Student pilots typically practice crosswind landings well below this limit to build skill progressively.",
  },
];

const perfSpecs = [
  { label: "Max Speed", value: "123 kts (142 mph)" },
  { label: "Cruise Speed", value: "108 kts (124 mph)" },
  { label: "Stall Speed", value: "47 kts (54 mph)" },
  { label: "Range", value: "465 nm (535 sm)" },
  { label: "Service Ceiling", value: "14,300 ft" },
  { label: "Rate of Climb", value: "660 ft/min" },
  { label: "Wing Loading", value: "13.4 lb/sq ft" },
  { label: "Power/Mass", value: "14.3 lb/hp" },
];

function VSpeeds() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="divide-y divide-slate-100">
      {vSpeeds.map((v, i) => (
        <div key={v.label} className="overflow-hidden">
          <button
            className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <span className="w-16 shrink-0 font-mono font-bold text-primary text-sm">
              {v.label}
            </span>
            <span className="w-24 shrink-0 font-bold text-secondary text-sm">
              {v.value}
            </span>
            <span className="flex-1 text-slate-700 font-medium text-sm">
              {v.name}
            </span>
            {openIdx === i ? (
              <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
            )}
          </button>
          {openIdx === i && (
            <div className="px-5 pb-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
              {v.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function OurAircraftPage() {
  return (
    <div className="w-full">
      <Seo
        title={
          "Training Aircraft at Van Nuys (KVNY) | Accelerated Flight School"
        }
        description={
          "Train in a Piper PA28 Cherokee Warrior II (N9172Y) or Cessna 172. IFR equipped, Garmin GNS 430, ADS-B. Full V-speeds and POH reference. $160/hr wet. Call 323-332-0585."
        }
      />

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Aircraft</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Train in a well-maintained, stable, and <AviationTerm term="IFR" />{" "}
            equipped platform perfect for both primary and advanced training.
          </p>
        </div>
      </section>

      {/* Aircraft Card */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              <div className="col-span-2 md:col-span-2">
                <img
                  src="/images/aircraft-exterior.jpg"
                  alt="N9172Y Piper Cherokee Warrior II in flight"
                  className="w-full h-56 md:h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 hidden md:block">
                <img
                  src="/images/aircraft-cockpit.webp"
                  alt="Piper Cherokee cockpit and instrument panel"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <img
                  src="/images/aircraft-interior-n9172y.webp"
                  alt="N9172Y Piper Cherokee Warrior II interior — instrument panel and dual control yokes"
                  className="w-full h-48 md:h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 md:col-span-2">
                <img
                  src="/images/aircraft-ramp.jpg"
                  alt="Piper Cherokee on the ramp at Van Nuys Airport"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="md:flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    1985 Piper PA28 Cherokee Warrior II — N9172Y
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl">
                    A stable, efficient, beginner-friendly training aircraft
                    with comfortable leather seats and modern navigation
                    equipment.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center md:text-right shrink-0">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Standard Rate
                  </p>
                  <p className="text-3xl font-bold text-secondary mb-1">
                    $160
                    <span className="text-sm font-normal text-slate-500">
                      /hr
                    </span>
                  </p>
                  <p className="text-xs text-slate-500">
                    <AviationTerm term="Wet rental" /> (fuel included)
                  </p>
                  <p className="text-xs font-bold text-primary mt-2 pt-2 border-t border-slate-200">
                    $150/hr with 10-hr block
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">
                Aircraft Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    title: "IFR Equipped",
                    desc: "Has instruments used for instrument flight training.",
                  },
                  {
                    title: "Garmin GNS 430",
                    desc: "Panel-mounted GPS and navigation system.",
                  },
                  {
                    title: "ADS-B Out",
                    desc: "Broadcasts aircraft position to ATC and other aircraft.",
                  },
                  {
                    title: "ADS-B In via ForeFlight",
                    desc: "Traffic and weather awareness on an iPad.",
                  },
                  {
                    title: "Stable Training Platform",
                    desc: "Beginner-friendly handling characteristics.",
                  },
                  {
                    title: "Comfort & Quality",
                    desc: "Leather seats and rigorous maintenance standards.",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <strong>{f.title}</strong>
                      <p className="text-sm text-slate-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* V-Speeds — inside the N9172Y card */}
              <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
                <div className="px-6 pt-6 pb-3 border-b border-slate-100 bg-slate-50">
                  <h3 className="text-lg font-bold text-primary mb-0.5">
                    V-Speeds — N9172Y
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Standardized airspeed references for this aircraft. Tap any
                    row to see what it means and why it matters.
                  </p>
                </div>
                <div className="flex items-center gap-4 px-5 py-2 bg-slate-50 border-b border-slate-100 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span className="w-16 shrink-0">Code</span>
                  <span className="w-24 shrink-0">Value</span>
                  <span className="flex-1">Name</span>
                </div>
                <VSpeeds />
              </div>

              {/* Performance Specs — inside the N9172Y card */}
              <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
                <div className="px-6 pt-5 pb-3 border-b border-slate-100 bg-slate-50">
                  <h3 className="text-lg font-bold text-primary mb-0.5">
                    Performance Specifications
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Published performance figures for the Piper PA-28-161
                    Warrior II.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y divide-slate-100">
                  {perfSpecs.map((s) => (
                    <div key={s.label} className="px-6 py-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                        {s.label}
                      </p>
                      <p className="text-lg font-bold text-primary">
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* POH disclaimer + link — inside the N9172Y card */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800 text-sm mb-1">
                      Reference Document — Not Aircraft-Specific
                    </p>
                    <p className="text-amber-700 text-sm leading-relaxed mb-3">
                      The Pilot's Operating Handbook linked below is for a{" "}
                      <strong>similar model and year</strong> Piper PA-28-161
                      Warrior II and is provided for reference and study
                      purposes only. It is <strong>not</strong> the POH of the
                      actual aircraft N9172Y. The weight and loading data listed
                      in this POH are <strong>not</strong> the actual figures
                      for N9172Y. Always use the specific POH carried in the
                      aircraft for any operational decisions.
                    </p>
                    <a
                      href="/N9172Y-PA28-161-POH-reference.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Download POH Reference — PA-28-161 Warrior II
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-primary mb-1">Ready to fly?</h4>
                  <p className="text-sm text-slate-600">
                    Contact us to schedule an introductory flight in this
                    aircraft.
                  </p>
                </div>
                <a href="tel:323-332-0585" className="w-full sm:w-auto">
                  <Button className="w-full font-bold gap-2">
                    <Phone className="w-4 h-4" />
                    Call 323-332-0585
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  Other Aircraft Available
                </h2>
                <p className="text-slate-500 text-sm">
                  On demand, additional aircraft will be made available
                </p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Upon demand by the student, if they wish, we also have additional
              aircraft on standby. If the student would like to fly one of these
              instead, they are welcome to.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Cessna 172N Skyhawk", price: "$145/hr" },
                { name: "Cessna 172P Skyhawk", price: "$160/hr" },
                { name: "Cessna 172S Skyhawk", price: "$170/hr" },
                { name: "Piper Warrior", price: "$165/hr" },
              ].map((a) => (
                <div
                  key={a.name}
                  className="bg-slate-50 rounded-xl border border-slate-200 p-5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-secondary shrink-0" />
                    <p className="font-bold text-primary text-sm">{a.name}</p>
                  </div>
                  <p className="font-bold text-secondary text-sm shrink-0">
                    {a.price}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-secondary/10 border border-secondary/20 rounded-xl px-5 py-4">
              <p className="text-secondary font-bold text-sm">
                We will always have the cheapest aircraft rental rates at Van
                Nuys Airport — guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How We Teach at Accelerated Flight School
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Training that makes sense from day one — every maneuver explained,
              every lesson connected to your checkride standard.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">
                  Purpose-Driven Maneuvers
                </h3>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Most flight training feels confusing at first because students
                  are often told what maneuver they are doing without being told
                  why it matters. A student may hear, "Today we are doing steep
                  turns," but not understand how that maneuver connects to the
                  Private Pilot Certificate, the FAA checkride, or the skills
                  required to become a safe pilot.
                </p>
                <p className="font-semibold text-primary">
                  At Accelerated Flight School, we teach differently.
                </p>
                <p>
                  Before you ever leave the ground, we show you the Airman
                  Certification Standards, called the{" "}
                  <AviationTerm term="ACS" />. The ACS is the FAA's official
                  testing guide and grading standard for pilot checkrides. A
                  Designated Pilot Examiner, called a{" "}
                  <AviationTerm term="DPE" />, uses those standards to test you
                  during your oral exam and flight test.
                </p>
                <p>
                  That means from the beginning of training, you will understand
                  exactly what is expected of you. Whether you are training for
                  Private Pilot, Instrument Rating, Commercial Pilot, CFI, or
                  CFII, every lesson is connected to the standard you must
                  eventually meet.
                </p>
                <p>
                  Instead of simply saying, "Today we are doing steep turns," we
                  explain:
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    "Why steep turns matter.",
                    "How they improve aircraft control.",
                    "How they are graded under the FAA ACS.",
                    "How they connect to checkride expectations.",
                    "How they make you a safer and more proficient pilot.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Every lesson has a purpose. You will know what you are doing,
                  why you are doing it, how it will be tested, and how it moves
                  you closer to passing your <AviationTerm term="Checkride" />.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">
                  Study Expectations
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Students must study outside of flight lessons to progress
                efficiently. We are upfront about this from day one. Flight
                training is not just showing up and flying. Students must study
                at home, understand the FAA materials, and prepare for the
                written test, oral exam, and flight portion. We help point you
                toward FAA books and free online resources so you know exactly
                what to study and why it matters.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">
                  Written Examination
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We help you with the written tests and direct you to study preps
                so that you pass the first time and pass with a high score. We
                are transparent and tell you upfront to pass with a high score
                (which is easy to do with our help) because any test question
                you miss on the written, you will need to demonstrate you
                understand it perfectly in the oral portion of your{" "}
                <AviationTerm term="Checkride" /> (flight test). Thus you will
                know ahead of time how to score high with our help, so your
                checkride goes much easier.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <Plane className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">
                  Confidence Building Instruction
                </h3>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We are the only school that provide scenario based training so
                  that you as the student learn efficiently, and also, learn to
                  build confidence fast. Most training in other schools involves
                  teaching you how to fly in your home airport, or to only
                  understand how to go from the school approved point A to point
                  B, but this is inadequate. Piloting is all about smooth and
                  confident flying even in new situations or during pressure.
                </p>
                <p>
                  When flying with our instructors, you will be able to learn
                  instinctively and intuitively how to fly to an airport you
                  have never been to out of the blue, such as by diverting, how
                  to descend and enter its pattern, or how to fly a difficult
                  instrument approach in an airport you have not been to or are
                  diverting to, or how to fly through{" "}
                  <AviationTerm term="Class Bravo" /> airspace confidently and
                  how to obtain the clearance to do so.
                </p>
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-3 shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  Responsibility is on Us
                </h3>
              </div>
              <div className="space-y-4 text-primary-foreground/85 leading-relaxed">
                <p>
                  At Accelerated Flight School, we believe the responsibility to
                  prepare you properly falls on us. You are paying for
                  instruction, structure, guidance, and a real path to passing.
                  Our job is to provide high-quality training at a fair, low,
                  and honest price, while making sure you always understand
                  where you stand and what is required to succeed.
                </p>
                <p>
                  At many flight schools, especially for younger students or
                  students who are new to aviation, it is easy to get trapped in
                  a system where they keep spending money without getting clear
                  answers. A student may be assigned an instructor who is
                  unorganized, unmotivated, or more focused on protecting their
                  own job than helping the student succeed. The student may fail
                  stage checks or even a checkride, then be told it was entirely
                  their fault, even when the training was poorly structured,
                  poorly explained, or not properly managed.
                </p>
                <p>
                  This happens more often than people realize. Students can
                  spend thousands of dollars with an instructor who does not
                  clearly explain the standards, does not give a real plan for
                  improvement, and does not take ownership of the student's
                  progress. Then, when the student struggles, the blame gets
                  shifted onto the student instead of anyone asking whether the
                  instruction, communication, or training plan failed them.
                </p>
                <p className="font-medium text-white/95">
                  We do not believe in that kind of flight training.
                </p>
                <p>
                  At Accelerated Flight School, we treat your success as our
                  responsibility. We care whether you understand the material.
                  We care whether you are progressing. We care whether you are
                  being prepared correctly for the FAA checkride. We care
                  whether you are happy, confident, satisfied, and willing to
                  return for more training.
                </p>
                <p className="font-semibold text-white">
                  We treat students the way paying customers deserve to be
                  treated: with respect, honesty, clear instruction, fair
                  pricing, and a serious commitment to helping them pass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
