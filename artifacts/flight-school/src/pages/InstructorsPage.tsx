import React from "react";
import { Seo } from "@/components/Seo";
import { Phone, DollarSign, CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InstructorsPage() {
  return (
    <div className="w-full">
      <Seo
        title={"Meet Our Flight Instructors | Van Nuys Airport KVNY"}
        description={"Meet our CFI and CFII instructors at Van Nuys Airport (KVNY). Structured, ACS-focused flight training from a passionate team. Call 424-493-2761."}
      />

      <section className="relative bg-primary text-white pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-ramp-dusk.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Instructors</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Professional educators dedicated to structured, ACS-focused flight training. Because we keep
            our overhead low, we have the ability to charge less than competing flight schools while
            providing higher quality instruction — because we have a genuine passion for aviation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Ratings we train */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mb-12 text-center max-w-3xl mx-auto">
            <p className="text-slate-700 leading-relaxed">
              Our instructors train students through every stage of their flying career — from{" "}
              <strong>Private Pilot License (PPL)</strong> and{" "}
              <strong>Instrument Rating</strong>, to{" "}
              <strong>Commercial Pilot License (CPL)</strong>,{" "}
              <strong>Certified Flight Instructor (CFI)</strong>, and{" "}
              <strong>Certified Flight Instructor – Instrument (CFII)</strong>.
            </p>
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
                At Accelerated Flight School, we charge a fair and honest price because we have a genuine
                passion for teaching people to fly. We are not here to extract the maximum possible dollar
                from your training budget — we are here because we love aviation and we want you to pass,
                return, and progress.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="font-bold text-white mb-3">The truth about high prices at other flight schools:</p>
                <p className="mb-3">
                  Almost all other flight schools charge significantly higher rates — and they use those higher
                  prices to create the illusion of quality. Students see a $60/hr instructor rate and assume that
                  rate means the instruction is better. In reality, most of the time, the opposite is true.
                </p>
                <p>
                  A higher instructor rate often means nothing more than a school charging as much as the market
                  allows. It does not reflect instructor experience, pass rates, student outcomes, or genuine care
                  for your progress.
                </p>
              </div>

              <p>
                We charge a fair price because we want you to succeed, return for your next rating, and send your
                friends and family to us. Our business model depends on students who pass and come back — not
                students who overpay and eventually give up.
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
              <a href="tel:424-493-2761">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                  <Phone className="w-5 h-5" />
                  Call or Text 424-493-2761
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
