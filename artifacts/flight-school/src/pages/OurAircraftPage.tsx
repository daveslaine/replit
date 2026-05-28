import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CheckCircle2, Phone, Clock, BookOpen, FileText, Target, Shield, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function OurAircraftPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Our Aircraft | 1985 Piper Cherokee Warrior II | Accelerated Flight School</title>
        <meta name="description" content="Train in a 1985 Piper PA28 Cherokee Warrior II. IFR equipped, Garmin GNS 430, ADS-B, leather seats. $160/hr wet rental. Van Nuys Airport. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Aircraft</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Train in a well-maintained, stable, and <AviationTerm term="IFR" /> equipped platform perfect for both primary and advanced training.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
            {/* Photo gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              <div className="col-span-2 md:col-span-2">
                <img
                  src="/images/aircraft-exterior.png"
                  alt="N9172Y Piper Cherokee Warrior II in flight"
                  className="w-full h-56 md:h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 hidden md:block">
                <img
                  src="/images/aircraft-cockpit.jpg"
                  alt="Piper Cherokee cockpit and instrument panel"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 md:col-span-3">
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
                  <h2 className="text-3xl font-bold text-primary mb-2">1985 Piper PA28 Cherokee Warrior II</h2>
                  <p className="text-lg text-slate-600 max-w-2xl">
                    A stable, efficient, beginner-friendly training aircraft with comfortable leather seats and modern navigation equipment.
                  </p>
                </div>
                
                <div className="mt-6 md:mt-0 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center md:text-right shrink-0">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Standard Rate</p>
                  <p className="text-3xl font-bold text-secondary mb-1">$160<span className="text-sm font-normal text-slate-500">/hr</span></p>
                  <p className="text-xs text-slate-500"><AviationTerm term="Wet rental" /> (fuel included)</p>
                  <p className="text-xs font-bold text-primary mt-2 pt-2 border-t border-slate-200">$150/hr with 10-hr block</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">Aircraft Features</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong>IFR Equipped</strong>
                    <p className="text-sm text-slate-500">Has instruments used for instrument flight training.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong>Garmin GNS 430</strong>
                    <p className="text-sm text-slate-500">Panel-mounted GPS and navigation system.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong>ADS-B Out</strong>
                    <p className="text-sm text-slate-500">Broadcasts aircraft position to ATC and other aircraft.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong>ADS-B In via ForeFlight</strong>
                    <p className="text-sm text-slate-500">Traffic and weather awareness on an iPad.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong>Stable Training Platform</strong>
                    <p className="text-sm text-slate-500">Beginner-friendly handling characteristics.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong>Comfort & Quality</strong>
                    <p className="text-sm text-slate-500">Leather seats and rigorous maintenance standards.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-primary mb-1">Ready to fly?</h4>
                  <p className="text-sm text-slate-600">Contact us to schedule an introductory flight in this aircraft.</p>
                </div>
                <a href="tel:818-469-1414" className="w-full sm:w-auto">
                  <Button className="w-full font-bold gap-2">
                    <Phone className="w-4 h-4" />
                    Call 818-469-1414
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
                <h2 className="text-2xl font-bold text-primary">More Aircraft Coming Soon</h2>
                <p className="text-slate-500 text-sm">On demand, additional aircraft will be made available</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Upon demand, we will have additional aircraft available for training. We are committed to always offering the most affordable rates in the Van Nuys area — no matter which aircraft you fly.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "Piper PA-28 Cherokee", desc: "Additional Cherokees available on demand — the same stable, reliable platform you already know." },
                { name: "Cessna 172 Skyhawk", desc: "The world's most popular training aircraft. Widely used for primary and instrument training." },
                { name: "Multi-Engine Aircraft", desc: "Multi-engine training for Commercial, MEI, and airline-track students. Available upon demand." },
              ].map((a) => (
                <div key={a.name} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="w-4 h-4 text-secondary shrink-0" />
                    <p className="font-bold text-primary text-sm">{a.name}</p>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-secondary/10 border border-secondary/20 rounded-xl px-5 py-4">
              <p className="text-secondary font-bold text-sm">
                We will always have the cheapest aircraft rental rates at Van Nuys Airport — guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Teach at Accelerated Flight School</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Training that makes sense from day one — every maneuver explained, every lesson connected to your checkride standard.
            </p>
          </div>

          <div className="space-y-8">
            {/* Purpose-Driven Maneuvers */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Purpose-Driven Maneuvers</h3>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Most flight training feels confusing at first because students are often told what maneuver they are doing without being told why it matters. A student may hear, "Today we are doing steep turns," but not understand how that maneuver connects to the Private Pilot Certificate, the FAA checkride, or the skills required to become a safe pilot.
                </p>
                <p className="font-semibold text-primary">At Accelerated Flight School, we teach differently.</p>
                <p>
                  Before you ever leave the ground, we show you the <AviationTerm term="ACS" /> — the Airman Certification Standards. The ACS is the FAA's official testing guide and grading standard for pilot checkrides. A <AviationTerm term="DPE" /> uses those standards to test you during your oral exam and flight test. That means from the beginning of training, you will understand exactly what is expected of you.
                </p>
                <p>
                  Instead of simply saying, "Today we are doing steep turns," we explain: why steep turns matter, how they improve aircraft control, how they are graded under the FAA ACS, how they connect to checkride expectations, and how they make you a safer and more proficient pilot.
                </p>
                <p>
                  Every lesson has a purpose. You will know what you are doing, why you are doing it, how it will be tested, and how it moves you closer to passing your <AviationTerm term="Checkride" />. This structured approach helps students avoid confusion, train with confidence, and reduce wasted money on lessons that feel random or disconnected.
                </p>
              </div>
            </div>

            {/* Study Expectations */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Study Expectations</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Students must study outside of flight lessons to progress efficiently. We are upfront about this from day one. Flight training is not just showing up and flying. Students must study at home, understand the FAA materials, and prepare for the written test, oral exam, and flight portion. We help point you toward FAA books and free online resources so you know exactly what to study and why it matters.
              </p>
            </div>

            {/* Written Examination */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Written Examination</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We help you with the written tests and direct you to study preps so that you pass the first time and pass with a high score. We are transparent and tell you upfront to pass with a high score — because any test question you miss on the written, you will need to demonstrate you understand it perfectly in the oral portion of your <AviationTerm term="Checkride" />. With our help, you will know ahead of time how to score high, so your checkride goes much easier.
              </p>
            </div>

            {/* Confidence Building */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <Plane className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Confidence-Building Instruction</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are the only school that provides scenario-based training so that you as the student learn efficiently and build confidence fast. Most training in other schools involves teaching you to fly only within a narrow, school-approved route — but this is inadequate. Piloting is about smooth and confident flying even in new situations or under pressure.
              </p>
              <p className="text-slate-600 leading-relaxed">
                When flying with our instructors, you will learn instinctively and intuitively how to fly to an airport you have never been to, how to divert, how to descend and enter its pattern, how to fly a challenging instrument approach in a new airport, and how to fly through <AviationTerm term="Class Bravo" /> airspace confidently and obtain the clearance to do so.
              </p>
            </div>

            {/* Responsibility */}
            <div className="bg-primary text-white rounded-2xl shadow-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white/10 rounded-xl p-3 shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mt-1">Responsibility Is on Us</h3>
              </div>
              <div className="space-y-4 text-primary-foreground/85 leading-relaxed">
                <p>
                  At Accelerated Flight School, the ultimate responsibility to ensure you pass falls on us. We do this by providing high quality instruction at a fair, low, and honest price.
                </p>
                <p>
                  In other flight schools, students — especially younger ones or those not yet familiar with how the industry works — can spend significant time and money with a poor instructor, fail multiple stage checks or checkrides, and then be told it was their fault. These instructors only care about keeping their own job. The system at many schools is designed to give you no recourse and to make you believe that if the instructor failed you, the fault is yours.
                </p>
                <p className="font-semibold text-white">
                  At our school, we only care about ensuring you are happy, satisfied, pass, and return for more training. We treat our students exactly how they deserve to be treated — as paying customers who have trusted us with their aviation goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}