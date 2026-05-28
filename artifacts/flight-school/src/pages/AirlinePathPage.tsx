import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Plane, ArrowDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function AirlinePathPage() {
  const steps = [
    { title: "Private Pilot", desc: "Learn the fundamentals of flight and earn your first certificate." },
    { title: "Instrument Rating", desc: "Learn to fly in the clouds strictly by reference to instruments." },
    { title: "Commercial Pilot", desc: "Build time to 250 hours and learn professional-level precision to fly for hire." },
    { title: "CFI & CFII", desc: "Become a flight instructor to teach others and get paid while building your hours." },
    { title: "Build Flight Time", desc: "Work as an instructor or in other commercial operations until you reach 1,500 hours." },
    { title: "ATP Eligibility", desc: "Meet the requirements for the Airline Transport Pilot certificate." },
    { title: "Airline First Officer", desc: "Apply and interview at regional airlines to start your career." }
  ];

  return (
    <div className="w-full">
      <Helmet>
        <title>Airline Pilot Path | Zero to Airline | Accelerated Flight School Van Nuys</title>
        <meta name="description" content="Your structured path from zero experience toward airline eligibility. Private Pilot → Instrument → Commercial → CFI → ATP. Start at Van Nuys. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Plane className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Zero to Airline Path</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            A structured, transparent roadmap from zero experience toward the certificates and flight time usually needed for airline eligibility.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Your Aviation Roadmap</h2>
            <p className="text-lg text-slate-700 text-center max-w-2xl mx-auto">
              We help students understand the entire pathway early on, so every lesson and <AviationTerm term="Checkride" /> makes sense in the context of the bigger picture.
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative mb-16">
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-ml-0.5" />
            
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center mb-8 md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[16px] md:left-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-sm md:-ml-3 z-10" />
                
                <div className="ml-16 md:ml-0 md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
                  <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-r border-slate-200 rotate-45 ${index % 2 === 0 ? '-left-2 -rotate-135' : '-right-2'}`} />
                  <div className={`md:hidden absolute top-6 -left-2 w-4 h-4 bg-white border-b border-l border-slate-200 rotate-45`} />
                  
                  <div className="text-xs font-bold text-slate-400 mb-1 tracking-wider uppercase">Step {index + 1}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">A Note on Airline Hiring</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Reaching 1,500 hours and becoming eligible for an <AviationTerm term="ATP" /> certificate is the major milestone. However, airline hiring also depends on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Total flight time and specific types of experience</li>
              <li>A solid training record with minimal checkride failures</li>
              <li>First-class medical certification</li>
              <li>Current market conditions and specific employer requirements</li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Let's plan your career trajectory.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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