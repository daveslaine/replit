import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CheckCircle2, Phone } from "lucide-react";
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              <div className="col-span-2 md:col-span-2 row-span-2">
                <img
                  src="/images/piper-cherokee.png"
                  alt="1985 Piper PA28 Cherokee Warrior II at Van Nuys Airport"
                  className="w-full h-64 md:h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/images/aircraft-exterior.png"
                  alt="N9172Y Piper Cherokee Warrior II in flight"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/images/aircraft-cockpit.jpg"
                  alt="Piper Cherokee cockpit and instrument panel"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="/images/aircraft-ramp.jpg"
                  alt="Piper Cherokee on the ramp at Van Nuys Airport"
                  className="w-full h-44 object-cover"
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
        </div>
      </section>
    </div>
  );
}