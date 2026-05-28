import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function InstructorsPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Flight Instructors Van Nuys | CFI CFII | Accelerated Flight School</title>
        <meta name="description" content="Meet our CFI and CFII instructors at Van Nuys Airport. Reza S. and David T. offer structured, ACS-focused flight training. Rates from $35/hr. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Instructors</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Professional educators dedicated to structured, ACS-focused flight training. Safety, proficiency, and efficiency are our top priorities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Reza S. Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/instructor-reza.png" 
                  alt="Reza S. - Flight Instructor" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">Reza S.</h2>
                    <p className="text-secondary font-medium">Owner & Senior Instructor</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-center">
                    <p className="text-xl font-bold text-slate-800">$45<span className="text-sm font-normal text-slate-500">/hr</span></p>
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
                  alt="David T. - Flight Instructor" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">David T.</h2>
                    <p className="text-secondary font-medium">Flight Instructor</p>
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
                    "Aviation is a continuous learning process. I focus on creating a supportive, calm environment where students feel comfortable asking questions. Every maneuver has a purpose, and I make sure my students understand the 'why' behind the controls, connecting everything back to safety and standard operating procedures."
                  </p>
                </div>
              </div>
            </div>

          </div>

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