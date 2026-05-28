import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone, DollarSign, CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function InstructorsPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Flight Instructors Van Nuys | CFI CFII | Accelerated Flight School</title>
        <meta name="description" content="Meet our CFI and CFII instructors at Van Nuys Airport. Reza S. and David T. offer structured, ACS-focused flight training. Rates from $35/hr. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Instructors</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Professional educators dedicated to structured, ACS-focused flight training. As we own our airplane and it's our flight school, we have the ability to charge less than any competing flight school while providing higher quality instruction — because we have a genuine passion for aviation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Reza S. Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/instructor-reza.png"
                  alt="Reza S. - Owner & Instructor"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">Reza S.</h2>
                    <p className="text-secondary font-medium">Owner &amp; Instructor</p>
                    <a href="tel:3104900402" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm mt-1">
                      <Phone className="w-3.5 h-3.5" />
                      (310) 490-0402
                    </a>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-center">
                    <p className="text-xl font-bold text-slate-800">$45<span className="text-sm font-normal text-slate-500">/hr</span></p>
                    <p className="text-[10px] text-slate-500">$35/hr w/ block</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Commercial Multi-Engine</span>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded"><AviationTerm term="CFI" /></span>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded"><AviationTerm term="CFII" /></span>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Teaching Philosophy</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "I believe in building a foundation of flawless fundamentals. My goal is to produce pilots who don't just pass checkrides, but possess the situational awareness and aeronautical decision-making skills to manage any scenario safely. Structure and transparency from day one eliminate frustration and build confident aviators."
                  </p>
                </div>
              </div>
            </div>

            {/* David T. Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/instructor-david.png"
                  alt="David T. - Flight Instructor Instrument"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">David T.</h2>
                    <p className="text-secondary font-medium">Flight Instructor Instrument</p>
                    <a href="tel:8184691414" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm mt-1">
                      <Phone className="w-3.5 h-3.5" />
                      818-469-1414
                    </a>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-center">
                    <p className="text-xl font-bold text-slate-800">$35<span className="text-sm font-normal text-slate-500">/hr</span></p>
                    <p className="text-[10px] text-slate-500">$30/hr w/ block</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Commercial Pilot</span>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded"><AviationTerm term="CFI" /></span>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded"><AviationTerm term="CFII" /></span>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Teaching Philosophy</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "I believe in putting the student first. I will not be there to waste your time and take your money, or throw you under the bus. I am transparent and upfront, and my goal is to serve you and ensure you pass, and know what is going on and what it is you are doing. You will feel certain when training with me, and my satisfaction comes from seeing you pass."
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Why We Charge Less */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <Heart className="w-4 h-4 text-red-400" />
                Why We Charge Less and Deliver More
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Lower Price. Higher Quality. That's Not a Contradiction.
              </h2>
            </div>

            <div className="space-y-5 text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              <p>
                At Accelerated Flight School, we charge a fair and honest price because we have a genuine passion for teaching people to fly. We are not here to extract the maximum possible dollar from your training budget — we are here because we love aviation and we want you to pass, return, and progress.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="font-bold text-white mb-3">The truth about high prices at other flight schools:</p>
                <p className="mb-3">
                  Almost all other flight schools charge significantly higher rates — and they use those higher prices to create the illusion of quality. Students see a $60/hr instructor rate and assume that rate means the instruction is better. In reality, most of the time, the opposite is true.
                </p>
                <p>
                  A higher instructor rate often means nothing more than a school charging as much as the market allows. It does not reflect instructor experience, pass rates, student outcomes, or genuine care for your progress. The higher the price, the more likely the school simply relies on the perceived prestige of the cost rather than the actual quality of instruction.
                </p>
              </div>

              <p>
                We charge a fair price because we want you to succeed, return for your next rating, and send your friends and family to us. Our business model depends on students who pass and come back — not students who overpay and eventually give up.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <DollarSign className="w-5 h-5 text-green-400" />, title: "Fair Pricing", desc: "Honest, transparent rates. No hidden fees. No inflated costs." },
                { icon: <CheckCircle2 className="w-5 h-5 text-green-400" />, title: "High Quality", desc: "Passion-driven instruction. We care about your checkride outcome." },
                { icon: <Heart className="w-5 h-5 text-red-400" />, title: "Student-First", desc: "We want you to pass, return, and progress. That's our entire model." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="mb-2">{item.icon}</div>
                  <p className="font-bold text-white mb-1 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-slate-50 border border-slate-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Start Flying With Us</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our instructors are ready to guide you from your very first flight to your advanced ratings.
            </p>
            <div className="flex justify-center">
              <a href="tel:818-469-1414">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                  <Phone className="w-5 h-5" />
                  Call or Text 818-469-1414
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
