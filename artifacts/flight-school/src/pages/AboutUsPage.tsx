import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Target, BookOpen, FileText, Plane, Shield, Phone, MapPin, Clock, Star, Users, DollarSign, CalendarClock, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function AboutUsPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>About Accelerated Flight School | Van Nuys Airport KVNY | Experienced CFI Instructors Since 2000s</title>
        <meta name="description" content="Accelerated Flight School at Van Nuys Airport (KVNY). Experienced flight instructors flying since the early 2000s. Structured FAA ACS training. Affordable, transparent pricing. No upfront payment. Call 818-469-1414." />
        <meta name="keywords" content="about accelerated flight school van nuys, flight instructor van nuys, experienced CFI KVNY, van nuys airport flight school, affordable flight training Los Angeles, accelerated flight academy" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">Van Nuys Airport (KVNY) · San Fernando Valley, CA</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Accelerated Flight School</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Professional flight instructors with decades of real-world experience — teaching at one of the nation's busiest general aviation airports.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Who We Are</p>
              <h2 className="text-3xl font-bold text-primary mb-6">Experienced Pilots. Dedicated Instructors.</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Accelerated Flight School is operated by professional flight instructors who have been active pilots since the early 2000s — bringing more than two decades of flight experience to every lesson. Our instructors have accumulated thousands of flight hours across a wide range of aircraft, conditions, and airspace types.
                </p>
                <p>
                  We are not a factory school with rotating instructors assigned by availability. When you train with us, you train consistently with instructors who have a direct stake in your success and who have personally navigated every rating, every checkride, and every real-world flying challenge you will face.
                </p>
                <p>
                  Accelerated Flight School is affiliated with <strong>Accelerated Flight Academy</strong>.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Star className="w-5 h-5 text-secondary shrink-0" />, title: "Flying Since the Early 2000s", detail: "Over two decades of active pilot experience across diverse aircraft, conditions, and airspace." },
                { icon: <Users className="w-5 h-5 text-secondary shrink-0" />, title: "Small School, Real Attention", detail: "You work with the same instructors from your first lesson through your checkride — no handoffs, no strangers." },
                { icon: <GraduationCap className="w-5 h-5 text-secondary shrink-0" />, title: "FAA Part 61 Certified", detail: "All training follows FAA Part 61 regulations with full Airman Certification Standards (ACS) integration." },
                { icon: <Shield className="w-5 h-5 text-secondary shrink-0" />, title: "Student Success is Our Responsibility", detail: "We don't pass students who aren't ready, and we don't fail students who deserved better instruction." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <p className="font-bold text-primary text-sm mb-0.5">{item.title}</p>
                    <p className="text-slate-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Van Nuys Airport */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Your Training Environment</p>
            <h2 className="text-3xl font-bold text-primary">Why Train at Van Nuys Airport (KVNY)?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "One of the Nation's Busiest GA Airports",
                detail: "Van Nuys Airport handles more general aviation operations than almost any other airport in the US. Training here means real ATC communication, real traffic awareness, and real workload — not practice in an empty pattern at a quiet rural airport."
              },
              {
                title: "Direct Access to Class B Airspace",
                detail: "KVNY sits just outside the LAX Class B veil. Our students regularly fly through and around Los Angeles Class B airspace, developing confidence and skill that pilots training at quieter airports simply don't acquire."
              },
              {
                title: "Diverse Training Terrain",
                detail: "From KVNY you can reach beaches, mountains, high desert, and multiple towered airports within 30 minutes. Cross-country training here is genuinely diverse — ocean, mountain passes, desert strips, and major metro airports all within reach."
              },
              {
                title: "Year-Round Flying Weather",
                detail: "Southern California's climate means minimal weather cancellations for VFR training, while proximity to the Pacific marine layer provides natural opportunities for IFR training without needing to travel to poor-weather regions."
              },
              {
                title: "Multiple Nearby Class D and Class C Airports",
                detail: "Burbank BUR (Class C), Camarillo CMA, Whiteman WHP, Santa Monica SMO, Long Beach LGB — all within easy navigation range. You will regularly visit controlled airports that most students never see until their checkride."
              },
              {
                title: "Central San Fernando Valley Location",
                detail: "Located at 7900 Balboa Blvd H7, Van Nuys CA 91406 — easily accessible from throughout the greater Los Angeles area. Minutes from the 405, 101, and 118 freeways."
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">How We Teach</h2>
          </div>

          <div className="space-y-8">
            {/* Purpose-Driven Maneuvers */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
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
                  Before you ever leave the ground, we show you the Airman Certification Standards (<AviationTerm term="ACS" />). The ACS is the FAA's official testing guide and grading standard for pilot checkrides. A Designated Pilot Examiner (<AviationTerm term="DPE" />) uses those standards to test you during your oral exam and flight test.
                </p>
                <p>Instead of simply saying, "Today we are doing steep turns," we explain:</p>
                <ul className="space-y-2 pl-2">
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
                  Every lesson has a purpose. You will know what you are doing, why you are doing it, how it will be tested, and how it moves you closer to passing your <AviationTerm term="Checkride" />.
                </p>
              </div>
            </div>

            {/* Scenario-Based Training */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <Plane className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Scenario-Based, Confidence-Building Instruction</h3>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We use scenario-based training so students learn efficiently and build confidence faster. Most training at other schools limits students to a narrow set of routes between school-approved waypoints. This is inadequate for real-world piloting.
                </p>
                <p>
                  Piloting is all about smooth, confident flying even in new situations and under pressure. When flying with our instructors, you will learn instinctively how to:
                </p>
                <ul className="space-y-2 pl-2">
                  {[
                    "Divert to an airport you've never been to — selecting a field, navigating, descending, and entering the pattern without hesitation.",
                    "Fly a difficult instrument approach at an unfamiliar airport, even one you're diverting to unexpectedly.",
                    "Navigate through Los Angeles Class B airspace confidently and obtain clearance from ATC on your first attempt.",
                    "Handle ATC workload in busy Southern California airspace without becoming overwhelmed.",
                    "Make real-world go/no-go weather decisions — not just textbook ones.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Written Test Prep */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Written Examination Prep</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We help you pass the FAA written exams the first time — and with a high score. Any question you miss on the written becomes a topic you must explain perfectly during the oral portion of your <AviationTerm term="Checkride" />. A high written score makes your oral exam significantly easier. We point you to exactly the right study resources so you know what to focus on, and what high scores actually look like.
              </p>
            </div>

            {/* Study Outside Lessons */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Honest Study Expectations</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Flight training requires studying outside of your lessons. We are transparent about this from day one. Pilots who study the FAA materials before arriving at the airport make faster progress, spend less money, and pass checkrides more confidently. We tell you exactly what to study, when, and why — so no lesson is wasted reviewing ground concepts you could have covered at home.
              </p>
            </div>

            {/* Responsibility Block */}
            <div className="bg-primary text-white rounded-2xl shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-3 shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mt-1">The Responsibility is on Us</h3>
              </div>
              <div className="space-y-4 text-primary-foreground/85 leading-relaxed">
                <p>
                  At Accelerated Flight School, we believe the responsibility to prepare you properly falls on us. You are paying for instruction, structure, guidance, and a real path to passing. Our job is to provide high-quality training at a fair, low, and honest price, while making sure you always understand where you stand and what is required to succeed.
                </p>
                <p>
                  At many flight schools, especially for younger students or students who are new to aviation, it is easy to get trapped in a system where they keep spending money without getting clear answers. A student may be assigned an instructor who is unorganized, unmotivated, or more focused on protecting their own job than helping the student succeed. The student may fail stage checks or even a checkride, then be told it was entirely their fault, even when the training was poorly structured, poorly explained, or not properly managed.
                </p>
                <p>
                  This happens more often than people realize. Students can spend thousands of dollars with an instructor who does not clearly explain the standards, does not give a real plan for improvement, and does not take ownership of the student's progress. Then, when the student struggles, the blame gets shifted onto the student instead of anyone asking whether the instruction, communication, or training plan failed them.
                </p>
                <p className="font-medium text-white/95">We do not believe in that kind of flight training.</p>
                <p>
                  At Accelerated Flight School, we treat your success as our responsibility. We care whether you understand the material. We care whether you are progressing. We care whether you are being prepared correctly for the FAA checkride. We care whether you are happy, confident, satisfied, and willing to return for more training.
                </p>
                <p className="font-semibold text-white">
                  We treat students the way paying customers deserve to be treated: with respect, honesty, clear instruction, fair pricing, and a serious commitment to helping them pass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Our Fleet</p>
              <h2 className="text-3xl font-bold text-primary mb-6">Well-Maintained Training Aircraft at Van Nuys Airport</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  We fly out of Van Nuys Airport (KVNY) in a well-maintained training aircraft equipped with modern avionics and ForeFlight-compatible GPS navigation. Every flight hour you log counts directly toward your FAA certificates and ratings.
                </p>
                <p>
                  Our aircraft is flown wet — fuel is included in the hourly rate, so the price you see is the price you pay.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "Wet Rental Rate", value: "$160/hr" },
                    { label: "10-Hour Block", value: "$150/hr" },
                    { label: "Fuel", value: "Included (wet)" },
                    { label: "Airport", value: "KVNY" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg border border-slate-200 p-3">
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-0.5">{item.label}</p>
                      <p className="text-lg font-bold text-secondary">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Link href="/van-nuys-accelerated-flight-school-aircraft">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-secondary transition-colors cursor-pointer">
                  <Plane className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold text-primary mb-2">View Our Aircraft</h3>
                  <p className="text-sm text-slate-600">Full specs, avionics details, and rental requirements for our training aircraft.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Pricing Philosophy</p>
            <h2 className="text-3xl font-bold text-primary">Transparent. Affordable. No Surprises.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: <DollarSign className="w-6 h-6 text-secondary" />,
                title: "No Upfront Payment",
                detail: "You pay per flight hour only. No deposits, no training packages forced upfront, no large advance payments. Start training with a single discovery flight if you want.",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-secondary" />,
                title: "No Loan Financing",
                detail: "We do not partner with pilot loan programs. Flight school loans often cost $250,000–$300,000 by payoff. We believe you deserve to train at honest prices without predatory debt.",
              },
              {
                icon: <CalendarClock className="w-6 h-6 text-secondary" />,
                title: "Checkride Scheduling Advantage",
                detail: "We proactively schedule your DPE checkride while you train — so you test within 1–3 weeks of completion, not 2–5 months after. This saves real money.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-6">
            <h3 className="font-bold text-primary mb-3">What Our Pricing Looks Like vs. The SoCal Average</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                { program: "Private Pilot", ours: "~$7,500–$12,500", socal: "$15,000–$25,000+" },
                { program: "Instrument Rating", ours: "~$8,500–$15,000", socal: "$16,000–$23,000" },
                { program: "Commercial Pilot (from zero)", ours: "~$40,000–$55,000", socal: "$70,000–$110,000" },
                { program: "CFI Training", ours: "~$3,000–$6,000", socal: "$5,000–$11,000" },
              ].map((row) => (
                <div key={row.program} className="flex justify-between items-center bg-white rounded-lg border border-slate-200 px-4 py-3">
                  <span className="font-medium text-primary">{row.program}</span>
                  <div className="text-right">
                    <p className="font-bold text-secondary text-base">{row.ours}</p>
                    <p className="text-red-500 line-through text-xs">{row.socal}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">All estimates include flight training costs only. <Link href="/van-nuys-accelerated-flight-school-pricing" className="text-secondary hover:underline">See full pricing breakdown →</Link></p>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                Hours & Availability
              </h3>
              <div className="space-y-3 text-slate-700">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday – Sunday</span>
                  <span className="font-bold text-primary">6:00 AM – 11:00 PM</span>
                </div>
                <p className="text-sm text-slate-500">We schedule flights 7 days a week to fit working students' and professionals' schedules. Early morning, evening, and weekend slots are available.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                Location
              </h3>
              <div className="space-y-2 text-slate-700">
                <p className="font-bold">7900 Balboa Blvd H7</p>
                <p>Van Nuys, CA 91406</p>
                <p className="text-sm text-slate-500">Van Nuys Airport (VNY / KVNY)</p>
                <p className="text-sm text-slate-500 pt-2">Accessible from the 405, 101, and 118 freeways. Serving the greater Los Angeles area including the San Fernando Valley, Conejo Valley, Simi Valley, Santa Clarita, Glendale, Burbank, and the Westside.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Training?</h2>
          <p className="text-slate-500 mb-8">Call or text us. We'll explain exactly where to begin — no pressure, no commitments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:818-469-1414">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                <Phone className="w-5 h-5" />
                Call 818-469-1414
              </Button>
            </a>
            <a href="sms:818-469-1414">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                Text Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
