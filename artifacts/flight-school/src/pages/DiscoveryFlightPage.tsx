import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, CheckCircle2, Clock, MapPin, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function DiscoveryFlightPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Discovery Flight Van Nuys | Try Flying for $190 | Accelerated Flight School</title>
        <meta
          name="description"
          content="Take your first flight at Van Nuys Airport for $190. No experience needed. Fly with a CFI over the San Fernando Valley. Call or text 818-469-1414 to book."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/piper-cherokee.png"
            alt="Piper Cherokee at Van Nuys Airport for discovery flight"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Van Nuys Airport (KVNY)
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your First Flight Starts Here
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed mb-4 max-w-2xl">
            A Discovery Flight is a one-hour introductory experience with a <AviationTerm term="CFI" /> — a
            Certified Flight Instructor. No experience required. You will actually fly the aircraft
            over the San Fernando Valley and get a real feel for what flight training involves.
          </p>
          <p className="text-3xl font-bold text-white mb-8">$190</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:818-469-1414" data-testid="link-discovery-call">
              <Button size="lg" variant="secondary" className="font-bold text-base h-12 px-8 gap-2">
                <Phone className="w-4 h-4" />
                Book by Phone
              </Button>
            </a>
            <a href="sms:818-469-1414" data-testid="link-discovery-text">
              <Button
                size="lg"
                variant="outline"
                className="font-bold text-base h-12 px-8 border-white/30 hover:bg-white/10 text-white gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Book by Text
              </Button>
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-4">
            Call or text 818-469-1414 — we will schedule your flight and answer any questions.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">What's Included in a Discovery Flight</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A Discovery Flight is specifically designed for people who have never flown before or want
              to experience aviation before committing to a full training program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
              <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Pre-Flight Briefing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your instructor will walk you through basic aircraft systems, safety procedures, and
                what to expect during the flight. No prior knowledge required.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-6 text-center text-white">
              <Star className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">You Actually Fly</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                You will take the controls of the Piper Cherokee over the San Fernando Valley with your
                instructor guiding you. This is real flying — not a simulator.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
              <CheckCircle2 className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Post-Flight Debrief</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                After landing, your instructor will answer questions about the training path, what
                certificates mean, estimated costs, and how to get started.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-primary mb-4">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "No aviation experience or knowledge required",
                "Approximately 1 hour total including ground briefing and flight",
                "You will fly the Piper Cherokee PA-28 Warrior II",
                "Flight over the San Fernando Valley and Van Nuys area",
                "Your instructor handles all radio communication",
                "Ideal for people of all ages curious about aviation",
                "A great gift for someone interested in flying",
                "The flight applies toward your Private Pilot log if you decide to continue",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft + Location */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">The Aircraft</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your Discovery Flight takes place in our 1985 Piper PA-28 Cherokee Warrior II — a
                stable, well-maintained, beginner-friendly training aircraft. It has comfortable leather
                seats, a modern Garmin GNS 430 GPS navigation system, and is fully IFR equipped.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "1985 Piper PA-28 Cherokee Warrior II",
                  "Leather seats, well-maintained",
                  "Garmin GNS 430 GPS navigation",
                  "Stable and forgiving to fly",
                  "ADS-B equipped",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-primary text-sm">Van Nuys Airport (KVNY)</p>
                  <p className="text-xs text-slate-500">Van Nuys, California</p>
                  <p className="text-xs text-slate-500 mt-1">
                    One of the busiest general aviation airports in the world — great exposure
                    to real-world aviation traffic and radio communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/piper-cherokee.png"
                alt="1985 Piper PA-28 Cherokee Warrior II at Van Nuys Airport"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What happens if I want to continue */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">Thinking About Continuing?</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Many students begin their training after a Discovery Flight. Here is what the path forward
            looks like from here.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0">
            {[
              { step: "Discovery Flight", note: "$190 — today", highlight: true },
              { step: "Private Pilot", note: "~$7,500–$12,500 est." },
              { step: "Instrument Rating", note: "Add-on rating" },
              { step: "Commercial Pilot", note: "Get paid to fly" },
            ].map((item, i, arr) => (
              <React.Fragment key={i}>
                <div
                  className={`rounded-xl px-6 py-4 text-center min-w-[140px] ${
                    item.highlight
                      ? "bg-secondary text-white shadow-lg"
                      : "bg-slate-50 border border-slate-200"
                  }`}
                >
                  <p className={`font-bold text-sm ${item.highlight ? "text-white" : "text-primary"}`}>
                    {item.step}
                  </p>
                  <p className={`text-xs mt-1 ${item.highlight ? "text-white/80" : "text-slate-500"}`}>
                    {item.note}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-slate-300 font-bold text-lg px-1 hidden md:block">→</div>
                )}
                {i < arr.length - 1 && (
                  <div className="text-slate-300 font-bold text-lg py-1 md:hidden">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Your Discovery Flight hours count toward your <AviationTerm term="Private Pilot" /> logbook.
          </p>
        </div>
      </section>

      {/* Pricing clarity */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-3">Discovery Flight — $190</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            The $190 includes the aircraft and instructor for your introductory flight. There are no
            hidden fees. If you decide to continue into formal training, your instructor will give you
            a full breakdown of training costs before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:818-469-1414">
              <Button size="lg" className="font-bold h-14 px-8 text-lg gap-2">
                <Phone className="w-5 h-5" />
                Call 818-469-1414 to Book
              </Button>
            </a>
            <a href="sms:818-469-1414">
              <Button size="lg" variant="outline" className="font-bold h-14 px-8 text-lg gap-2 border-primary text-primary hover:bg-primary/5">
                <MessageSquare className="w-5 h-5" />
                Text to Book
              </Button>
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Subject to aircraft and instructor availability. Weather dependent.
          </p>
        </div>
      </section>
    </div>
  );
}
