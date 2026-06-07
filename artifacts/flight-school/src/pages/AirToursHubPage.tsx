import React from "react";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { Phone, MessageSquare, Plane, MapPin, ArrowRight, Camera, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { airTourPages } from "@/data/airTourPages";


function tourLabel(h1: string): string {
  return h1.split(":")[0].trim();
}

export function AirToursHubPage() {
  const tours = [...airTourPages].sort((a, b) => a.h1.localeCompare(b.h1));

  return (
    <div className="w-full">
      <Seo
        title={"Los Angeles Air Tours & Sightseeing Flights | KVNY"}
        description={"Take the controls on a real LA sightseeing flight from Van Nuys Airport (KVNY). Discovery flights start at $190 for one person. Call 323-332-0585."}
      />

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[url('/images/downtown-la-night-aerial.png')] bg-cover bg-center opacity-25" />
        <div className="relative container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-white/20">
            <Camera className="w-3.5 h-3.5" />
            Sightseeing flights from Van Nuys Airport (KVNY)
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Los Angeles Air Tours & Sightseeing Flights
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Skip the passive ride in the back of a charter. On our discovery flight you sit up front,
            take the controls with a Certified Flight Instructor, and see Southern California from the
            best seat in the airplane — for $190 (1 person) or $270 (2 people).
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:3233320585">
              <Button size="lg" variant="secondary" className="font-bold gap-2 h-12 px-6">
                <Phone className="w-4 h-4" /> Call or Text 323-332-0585
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button size="lg" className="font-bold gap-2 h-12 px-6 bg-white text-primary hover:bg-slate-100">
                <Plane className="w-4 h-4" /> Book Discovery Flight
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-18 bg-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <p className="text-slate-700 leading-relaxed text-base md:text-lg">
            Most "air tours" over Los Angeles put you in the back of a helicopter or a small plane as a
            passenger while someone else flies. Our discovery flight is different: it is a real
            introductory flight lesson where <strong>you</strong> are in the left seat with your hands
            on the controls, guided by a CFI in our Piper PA-28 Cherokee Warrior II (N9172Y). The
            scenery is the same world-famous Los Angeles coastline and skyline — but the experience is
            yours to fly.
          </p>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg">
            Pick the route or landmark that excites you most. Each guide below covers what you might
            see, how the flight works, and what to expect. Exact routing always depends on weather, air
            traffic control, and safety on the day — but every flight departs from Van Nuys Airport and
            includes the aircraft and your instructor.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {[
              "You fly the plane, not just ride along",
              "Always with a Certified Flight Instructor",
              "May count toward Private Pilot training",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm font-medium leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour directory */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
            Choose Your Sightseeing Flight
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Every flight is a hands-on discovery lesson from Van Nuys Airport. Tap a route to see the
            details.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {tours.map((tour) => (
              <Link key={tour.slug} href={`/${tour.slug}`}>
                <div className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-primary hover:shadow-sm transition-all cursor-pointer h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <h3 className="font-bold text-slate-800 text-base leading-snug">
                      {tourLabel(tour.h1)}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{tour.subheadline}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-primary font-semibold text-sm">
                    See this flight
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Take the Controls?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Call or text <strong>323-332-0585</strong> to book your discovery flight at Van Nuys
            Airport — $190 for 1 person, $270 for 2.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:3233320585">
              <Button size="lg" variant="secondary" className="font-bold gap-2 h-12 px-7">
                <Phone className="w-4 h-4" /> Call 323-332-0585
              </Button>
            </a>
            <a href="sms:3233320585">
              <Button size="lg" variant="outline" className="font-bold gap-2 h-12 px-7 border-white text-white hover:bg-white/10">
                <MessageSquare className="w-4 h-4" /> Text 323-332-0585
              </Button>
            </a>
            <Link href="/discovery-flight-van-nuys">
              <Button size="lg" className="font-bold gap-2 h-12 px-7 bg-white text-primary hover:bg-slate-100">
                <Plane className="w-4 h-4" /> Book a Discovery Flight
              </Button>
            </Link>
          </div>
          <p className="text-white/60 text-xs mt-6">
            Accelerated Flight School · 7910 Balboa Blvd H7 · Van Nuys Airport (KVNY) · Van Nuys, CA
            91406
          </p>
        </div>
      </section>
    </div>
  );
}
