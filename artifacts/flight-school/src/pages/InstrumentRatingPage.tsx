import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CloudRain, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function InstrumentRatingPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Instrument Rating Training Van Nuys | Accelerated Flight School</title>
        <meta name="description" content="Add an Instrument Rating at Van Nuys Airport. Learn IFR flying, ATC communication, and instrument approaches. $195/hr combined dual. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <CloudRain className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Instrument Rating Training at Van Nuys</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Learn to fly with more flexibility by using aircraft instruments and air traffic control guidance during lower visibility weather.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Master the System</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The Instrument Rating is widely considered the most valuable rating a pilot can add. It teaches you to fly entirely by reference to instruments, communicating with Air Traffic Control under <AviationTerm term="IFR" />, and flying safely when you can't see the horizon.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Training Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Developing a strong instrument scan",
                    "Advanced ATC communication",
                    "Holding procedures",
                    "Precision and non-precision instrument approaches",
                    "IFR cross-country planning and execution",
                    "Missed approaches",
                    "System failure emergency procedures",
                    "Rigorous checkride prep based on the ACS"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-primary mb-4">Benefits of the Rating</h3>
                <ul className="space-y-3 text-slate-700">
                  <li><strong>Flexibility:</strong> Fly through marine layers and overcast skies.</li>
                  <li><strong>Safety:</strong> Better weather decision-making and spatial awareness.</li>
                  <li><strong>Discipline:</strong> Develops stronger cockpit management and precise aircraft control.</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Standard Combined Rate</p>
                  <p className="text-3xl font-bold text-secondary">$195<span className="text-lg font-normal text-slate-500">/hr</span></p>
                  <p className="text-xs text-slate-500 mt-1">or $180/hr with 10-hour package</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 mb-6">Ready to start your IFR training or need a detailed estimate?</p>
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