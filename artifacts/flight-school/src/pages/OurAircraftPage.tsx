import React, { useState } from "react";
import { Seo } from "@/components/Seo";
import {
  CheckCircle2,
  Phone,
  BookOpen,
  FileText,
  Target,
  Shield,
  Plane,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

const fleet = [
  {
    id: 1,
    name: "Cessna 172S Skyhawk",
    year: "2001",
    imgs: [
      "/images/fleet/n523er-1.jpg",
      "/images/fleet/n523er-2.jpg",
      "/images/fleet/n523er-3.jpg",
    ],
    equipment: [
      "Dual Garmin 430 GPS",
      "NAV/COM",
      "Moving Maps",
      "GMA340",
      "Garmin GTX327 Transponder",
    ],
    cash: 175,
    credit: 182,
  },
  {
    id: 2,
    name: "Cessna 172S Skyhawk",
    year: "2004",
    imgs: [
      "/images/fleet/n21705-1.jpg",
      "/images/fleet/n21705-2.jpg",
      "/images/fleet/n21705-3.jpg",
      "/images/fleet/n21705-4.jpg",
    ],
    equipment: [
      "KLN94 Color GPS",
      "Dual KX155 NAV/COM",
      "KMA26 Audio Panel",
      "KAP140 Autopilot",
      "Leather Seats",
    ],
    cash: 175,
    credit: 182,
  },
  {
    id: 3,
    name: "Piper PA-28-161 Warrior II",
    year: "1978",
    imgs: ["/images/fleet/n6393c-1.jpg", "/images/fleet/n6393c-2.jpg"],
    equipment: [
      "Dual NAV/COM",
      "Garmin SL-30",
      "ADS-B",
      "Garmin GTX335 Transponder",
      "Garmin Audio Panel",
    ],
    cash: 175,
    credit: 182,
  },
  {
    id: 4,
    name: "Cessna 172P Skyhawk",
    year: "1984",
    imgs: [
      "/images/fleet/n96575-1.jpg",
      "/images/fleet/n96575-2.jpg",
      "/images/fleet/n96575-3.jpg",
    ],
    equipment: [
      "Dual Garmin 430 GPS",
      "NAV/COM",
      "Moving Maps",
      "Garmin GTX330 Transponder",
    ],
    cash: 170,
    credit: 177,
  },
  {
    id: 5,
    name: "Cessna 172N Skyhawk",
    year: "1980",
    imgs: ["/images/fleet/n5298j-1.jpg", "/images/fleet/n5298j-2.jpg"],
    equipment: ["Dual NAV/COM", "GPS", "DME", "Transponder", "Intercom"],
    cash: 155,
    credit: 160,
  },
];

function FleetGallery({
  imgs,
  name,
  year,
}: {
  imgs: string[];
  name: string;
  year?: string;
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="shrink-0 border-b border-slate-100">
      <div className="h-48 relative">
        <img
          src={imgs[active]}
          alt={`${name}${year ? ` (${year})` : ""} — photo ${active + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {year && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
            {year}
          </div>
        )}
      </div>
      {imgs.length > 1 && (
        <div className="flex gap-1.5 p-2 bg-slate-50">
          {imgs.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`View photo ${i + 1} of ${name}`}
              className={`h-12 flex-1 rounded-md overflow-hidden border-2 transition-colors ${
                i === active
                  ? "border-secondary"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const specsData = [
  {
    id: "172s",
    name: "Cessna 172S Skyhawk",
    vSpeeds: [
      { label: "Vso", value: "40 kts", name: "Stall Speed (Landing Config)" },
      { label: "Vs1", value: "48 kts", name: "Stall Speed (Clean Config)" },
      { label: "Vr", value: "55 kts", name: "Rotation Speed" },
      { label: "Vx", value: "62 kts", name: "Best Angle of Climb" },
      { label: "Vy", value: "74 kts", name: "Best Rate of Climb" },
      {
        label: "Vfe",
        value: "85 / 110 kts",
        name: "Max Flap Extended (Full / 10°)",
      },
      { label: "Va", value: "90–105 kts", name: "Maneuvering Speed" },
      { label: "Vno", value: "129 kts", name: "Max Structural Cruise" },
      { label: "Vne", value: "163 kts", name: "Never-Exceed Speed" },
    ],
    perf: [
      { label: "Cruise Speed", value: "~124 KTAS" },
      { label: "Useful Load", value: "~878 lb" },
      { label: "Range", value: "~640 nm" },
    ],
  },
  {
    id: "172p",
    name: "Cessna 172P Skyhawk",
    vSpeeds: [
      { label: "Vso", value: "33 kts", name: "Stall Speed (Landing Config)" },
      { label: "Vs1", value: "44 kts", name: "Stall Speed (Clean Config)" },
      { label: "Vr", value: "55 kts", name: "Rotation Speed" },
      { label: "Vx", value: "60 kts", name: "Best Angle of Climb" },
      { label: "Vy", value: "76 kts", name: "Best Rate of Climb" },
      {
        label: "Vfe",
        value: "85 / 110 kts",
        name: "Max Flap Extended (Full / 10°)",
      },
      { label: "Va", value: "82–99 kts", name: "Maneuvering Speed" },
      { label: "Vno", value: "127 kts", name: "Max Structural Cruise" },
      { label: "Vne", value: "158 kts", name: "Never-Exceed Speed" },
    ],
    perf: [
      { label: "Cruise Speed", value: "~120 KTAS" },
      { label: "Useful Load", value: "~890 lb" },
      { label: "Range", value: "~440 nm" },
    ],
  },
  {
    id: "172n",
    name: "Cessna 172N Skyhawk",
    vSpeeds: [
      { label: "Vso", value: "41 kts", name: "Stall Speed (Landing Config)" },
      { label: "Vs1", value: "47 kts", name: "Stall Speed (Clean Config)" },
      { label: "Vr", value: "55 kts", name: "Rotation Speed" },
      { label: "Vx", value: "59 kts", name: "Best Angle of Climb" },
      { label: "Vy", value: "73 kts", name: "Best Rate of Climb" },
      { label: "Vfe", value: "85 kts", name: "Max Flap Extended Speed" },
      { label: "Va", value: "80–97 kts", name: "Maneuvering Speed" },
      { label: "Vno", value: "128 kts", name: "Max Structural Cruise" },
      { label: "Vne", value: "160 kts", name: "Never-Exceed Speed" },
    ],
    perf: [
      { label: "Cruise Speed", value: "~122 KTAS" },
      { label: "Useful Load", value: "~895 lb" },
      { label: "Range", value: "~440 nm" },
    ],
  },
  {
    id: "warrior",
    name: "Piper PA-28-161 Warrior II",
    vSpeeds: [
      { label: "Vso", value: "44 kts", name: "Stall Speed (Landing Config)" },
      { label: "Vs1", value: "50 kts", name: "Stall Speed (Clean Config)" },
      { label: "Vr", value: "60 kts", name: "Rotation Speed" },
      { label: "Vx", value: "63 kts", name: "Best Angle of Climb" },
      { label: "Vy", value: "79 kts", name: "Best Rate of Climb" },
      { label: "Vfe", value: "103 kts", name: "Max Flap Extended Speed" },
      { label: "Va", value: "88–111 kts", name: "Maneuvering Speed" },
      { label: "Vno", value: "126 kts", name: "Max Structural Cruise" },
      { label: "Vne", value: "160 kts", name: "Never-Exceed Speed" },
    ],
    perf: [
      { label: "Cruise Speed", value: "~108 KTAS" },
      { label: "Useful Load", value: "~850 lb" },
      { label: "Range", value: "~465 nm" },
    ],
  },
];

export function OurAircraftPage() {
  const [activeSpecTab, setActiveSpecTab] = useState(specsData[0].id);
  const activeData = specsData.find((d) => d.id === activeSpecTab)!;

  return (
    <div className="w-full">
      <Seo
        title={
          "Training Fleet | Van Nuys Airport KVNY | Accelerated Flight School"
        }
        description={
          "Train in a fleet of Cessna 172 Skyhawks and a Piper Warrior II. Rates starting at $155/hr wet. Call 424-493-2761."
        }
      />

      <section className="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-ramp-dusk.jpg"
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
            alt=""
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Training Fleet
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Train in our well-maintained fleet of Cessna and Piper aircraft,
            equipped for both primary and advanced <AviationTerm term="IFR" />{" "}
            training.
          </p>
        </div>
      </section>

      {/* Fleet Cards */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((aircraft) => (
              <div
                key={aircraft.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover-elevate transition-transform"
              >
                <FleetGallery
                  imgs={aircraft.imgs}
                  name={aircraft.name}
                  year={aircraft.year}
                />

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Plane className="w-5 h-5 text-secondary shrink-0" />
                    {aircraft.name}
                  </h3>

                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">
                      Avionics & Equipment
                    </p>
                    <ul className="space-y-2 mb-6">
                      {aircraft.equipment.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 border-t border-slate-100 p-6 flex flex-col gap-3">
                  <div className="flex items-end justify-between">
                    <p className="text-sm font-bold text-slate-500">
                      Cash / Check
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      ${aircraft.cash}
                      <span className="text-sm font-normal text-slate-500">
                        /hr
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-sm font-bold text-slate-500">
                      Credit Card
                    </p>
                    <p className="text-lg font-bold text-slate-600">
                      ${aircraft.credit}
                      <span className="text-sm font-normal text-slate-600">
                        /hr
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">
                Ready to fly?
              </h4>
              <p className="text-slate-600">
                Contact us to schedule an introductory flight in one of our
                aircraft. Rates start at $155/hr wet, plus our $35/hr instructor
                rate.
              </p>
            </div>
            <a href="tel:424-493-2761" className="w-full md:w-auto shrink-0">
              <Button size="lg" className="w-full font-bold gap-2">
                <Phone className="w-5 h-5" />
                Call 424-493-2761
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Specifications & V-Speeds */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Performance & Specifications
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Reference standardized airspeed and performance figures for our
              fleet.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-slate-100 bg-slate-50/50 p-2 gap-2 hide-scrollbar">
              {specsData.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveSpecTab(d.id)}
                  className={`px-5 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-colors flex-1 ${
                    activeSpecTab === d.id
                      ? "bg-white text-primary shadow-sm border border-slate-200"
                      : "text-slate-500 hover:text-primary hover:bg-slate-100 border border-transparent"
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-10">
              <div className="grid lg:grid-cols-5 gap-10">
                {/* V-Speeds */}
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    V-Speeds — {activeData.name}
                  </h3>
                  <div className="border border-slate-100 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-4 px-5 py-3 bg-slate-50 border-b border-slate-100 text-xs font-bold uppercase tracking-widest text-slate-600">
                      <span className="w-16 shrink-0">Code</span>
                      <span className="w-24 shrink-0">Value</span>
                      <span className="flex-1">Name</span>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {activeData.vSpeeds.map((v) => (
                        <div
                          key={v.label}
                          className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50/50 transition-colors"
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    Performance Figures
                  </h3>
                  <div className="grid gap-4">
                    {activeData.perf.map((p) => (
                      <div
                        key={p.label}
                        className="bg-slate-50 rounded-xl border border-slate-100 p-5"
                      >
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-1">
                          {p.label}
                        </p>
                        <p className="text-lg font-bold text-primary">
                          {p.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <p className="font-bold text-amber-800 text-sm mb-2">
                      Important Notice
                    </p>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      These figures are standard POH references for the aircraft
                      type. Always refer to the specific POH carried in the
                      individual aircraft for operational decisions, exact
                      weight and balance data, and updated performance metrics.
                    </p>
                  </div>
                </div>
              </div>
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
                  We provide scenario based training so that you as the student
                  learn efficiently, and also, learn to build confidence fast.
                  Most training in other schools involves teaching you how to
                  fly in your home airport, or to only understand how to go from
                  the school approved point A to point B, but this is
                  inadequate. Piloting is all about smooth and confident flying
                  even in new situations or during pressure.
                </p>
                <p>
                  When flying with our instructors, you will learn instinctively
                  and intuitively how to fly to an airport you have never been
                  to out of the blue, such as by diverting, how to descend and
                  enter its pattern, or how to fly a difficult instrument
                  approach in an airport you have not been to or are diverting
                  to, or how to fly through <AviationTerm term="Class Bravo" />{" "}
                  airspace confidently and how to obtain the clearance to do so.
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
