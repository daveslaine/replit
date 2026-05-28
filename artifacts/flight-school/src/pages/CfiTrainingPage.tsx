import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { GraduationCap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function CfiTrainingPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>CFI Training Van Nuys | Certified Flight Instructor | Accelerated Flight School</title>
        <meta name="description" content="Become a Certified Flight Instructor at Van Nuys Airport. Teach students, earn money flying, build hours. Estimated $3,000–$6,000 after Commercial. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <GraduationCap className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certified Flight Instructor Training</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Become an instructor, teach the next generation of pilots, earn money flying, and build professional flight hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Share the Sky</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  A <AviationTerm term="CFI" /> certificate authorizes you to teach flight students. It is one of the most challenging and rewarding certificates a pilot can earn. You will transition from performing maneuvers to explaining, demonstrating, and analyzing them from the right seat.
                </p>
                <h3 className="text-xl font-bold text-primary mb-4">Why become a CFI?</h3>
                <ul className="space-y-3 text-slate-700 list-disc pl-5">
                  <li>Earn money while flying</li>
                  <li>Build the flight hours required for airline eligibility</li>
                  <li>Master aviation theory and aircraft control</li>
                  <li>Train the next generation of aviators</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-500 uppercase tracking-wider mb-4">Estimated Cost</h3>
                <p className="text-4xl font-bold text-secondary mb-2">$3,000 – $6,000</p>
                <p className="text-sm text-slate-600 mb-6">After completing Commercial Pilot certificate. Varies heavily on your knowledge of aviation fundamentals.</p>
                
                <div className="h-px bg-slate-200 w-full mb-6" />
                
                <h3 className="text-lg font-bold text-primary mb-2">CFII Add-on</h3>
                <p className="text-2xl font-bold text-slate-800 mb-1">~$2,000 – $4,000</p>
                <p className="text-xs text-slate-500">Become a <AviationTerm term="CFII" /> to teach instrument students.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Ready to teach?</h2>
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