import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Target, BookOpen, FileText, Plane, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function AboutUsPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>About Us | Van Nuys Accelerated Flight School | Our Teaching Philosophy</title>
        <meta
          name="description"
          content="Learn how Accelerated Flight School teaches at Van Nuys Airport. Purpose-driven maneuvers, ACS-connected lessons, scenario training, and a student-first approach. Call 818-469-1414."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">Van Nuys Airport (KVNY)</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Accelerated Flight School</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Training that makes sense from day one — every maneuver explained, every lesson connected to your checkride standard.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">How We Teach at Accelerated Flight School</h2>
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
                  Before you ever leave the ground, we show you the Airman Certification Standards, called the <AviationTerm term="ACS" />. The ACS is the FAA's official testing guide and grading standard for pilot checkrides. A Designated Pilot Examiner, called a <AviationTerm term="DPE" />, uses those standards to test you during your oral exam and flight test.
                </p>
                <p>
                  That means from the beginning of training, you will understand exactly what is expected of you. Whether you are training for Private Pilot, Instrument Rating, Commercial Pilot, CFI, or CFII, every lesson is connected to the standard you must eventually meet.
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
                <p>
                  This structured approach helps students avoid confusion, train with confidence, and reduce wasted money on lessons that feel random or disconnected.
                </p>
              </div>
            </div>

            {/* Study Expectations */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
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
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Written Examination</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We help you with the written tests and direct you to study preps so that you pass the first time and pass with a high score. We are transparent and tell you upfront to pass with a high score (which is easy to do with our help) because any test question you miss on the written, you will need to demonstrate you understand it perfectly in the oral portion of your <AviationTerm term="Checkride" /> (flight test). Thus you will know ahead of time how to score high with our help, so your checkride goes much easier.
              </p>
            </div>

            {/* Confidence Building */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                  <Plane className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">Confidence Building Instruction</h3>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We are the only school that provide scenario based training so that you as the student learn efficiently, and also, learn to build confidence fast. Most training in other schools involves teaching you how to fly in your home airport, or to only understand how to go from the school approved point A to point B, but this is inadequate. Piloting is all about smooth and confident flying even in new situations or during pressure.
                </p>
                <p>
                  When flying with our instructors, you will be able to learn instinctively and intuitively how to fly to an airport you have never been to out of the blue, such as by diverting, how to descend and enter its pattern, or how to fly a difficult instrument approach in an airport you have not been to or are diverting to, or how to fly through <AviationTerm term="Class Bravo" /> airspace confidently and how to obtain the clearance to do so.
                </p>
              </div>
            </div>

            {/* Responsibility */}
            <div className="bg-primary text-white rounded-2xl shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-3 shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mt-1">Responsibility is on Us</h3>
              </div>
              <div className="space-y-4 text-primary-foreground/85 leading-relaxed">
                <p>
                  At Accelerated Flight School, the ultimate responsibility to ensure you pass, falls on us. We do this by providing high quality instruction, and also at a fair, low, and honest price.
                </p>
                <p>
                  In other flight schools, students especially young ones or students who are not aware of how flight schools work, and the goals of most instructors, will spend time and money, with a terrible instructor, and fail multiple stage checks, or even checkrides, yet be told it was their fault, as these instructors only care about keeping their own job, while not caring at all about your piloting aspirations. Thousands of students have found themselves with an inadequate uncaring instructor who didn't care to help them pass, found any minor and most of the time illegitimate reason to complain to the flight school owner about the student, so that when the student inevitably fails due to inadequate care and instruction, the student is blamed and told its their fault, while the inadequate instructor keeps their job, and the owner has no obligation to make things right by refunding you or providing a better instructor. In other words the system is designed to give you no recourse and make you believe if the instructor failed you, that it is your fault.
                </p>
                <p className="font-semibold text-white">
                  At our school we only care about ensuring you are happy, satisfied, pass, and return for more training. We treat our students exactly how they deserve to be treated as paying customers.
                </p>
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
