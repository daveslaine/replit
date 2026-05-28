import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AviationTerm } from "@/components/AviationTerm";
import { StudentPromise } from "@/components/StudentPromise";

export function HomePage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Accelerated Flight School | Van Nuys Airport | Affordable Flight Training</title>
        <meta name="description" content="Learn to fly at Van Nuys Airport with structured, transparent, and affordable flight training. Private Pilot from ~$7,500. Call or text 818-469-1414." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full bg-primary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Beautiful Cessna flying over Southern California at sunset" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-start max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-heading">
            Structured and Affordable Flight Training at Van Nuys
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl" data-testid="text-hero-subheading">
            Learn to fly with one of the most transparent and affordable flight schools in California. We explain the entire training process from day one — what you're training for, how the FAA <AviationTerm term="Checkride" /> works, what realistic costs look like, and how to progress efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto" data-testid="link-hero-start">
              <Button size="lg" variant="secondary" className="w-full font-bold text-base h-12 px-8">
                Start Flight Training
              </Button>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto" data-testid="link-hero-pricing">
              <Button size="lg" variant="outline" className="w-full font-bold text-base h-12 px-8 border-primary-foreground/30 hover:bg-primary-foreground/10 text-white">
                View Pricing
              </Button>
            </Link>
            <a href="tel:818-469-1414" className="w-full sm:w-auto" data-testid="link-hero-call">
              <Button size="lg" variant="outline" className="w-full font-bold text-base h-12 px-8 border-primary-foreground/30 hover:bg-primary-foreground/10 text-white gap-2">
                <Phone className="w-4 h-4" />
                Call or Text
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Program Paths */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Kind of Pilot Do You Want to Become?</h2>
            <p className="text-lg text-slate-600">Choose your path. We provide structured training for every certificate and rating.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Private Pilot", href: "/private-pilot-van-nuys", desc: "Your foundational pilot certificate to fly single-engine aircraft for personal travel, recreation, and carrying passengers." },
              { title: "Instrument Rating", href: "/instrument-rating-van-nuys", desc: "Learn to fly with more flexibility by using aircraft instruments and air traffic control guidance during lower visibility weather." },
              { title: "Commercial Pilot", href: "/commercial-pilot-training", desc: "The pilot certificate that allows you to be paid for certain legal flying operations." },
              { title: "CFI / CFII", href: "/cfi-training", desc: "Become an instructor, teach students, earn money flying, and build professional flight hours." },
              { title: "Airline Pilot Path", href: "/airline-pilot-path", desc: "A structured path from zero experience toward the certificates and flight time usually needed for airline eligibility." }
            ].map((program) => (
              <Card key={program.title} className="hover-elevate transition-shadow border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">{program.desc}</p>
                  <Link href={program.href} className="inline-flex items-center text-secondary font-bold hover:underline" data-testid={`link-program-${program.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Accelerated Flight School Is Different</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              Many students start flight training without a clear roadmap, unaware of hidden costs, checkride delays, and unstructured lessons. We built Accelerated Flight School to fix this.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">The Accelerated Fix</h3>
                  <p className="text-slate-600">The Southern California average is $15,000–$25,000+ for Private Pilot. Our estimate is ~$7,500–$12,500. We achieve this through efficient operations, high retention, structured training, and proactive scheduling.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Purpose-Driven Maneuvers</h3>
                  <p className="text-slate-600">Instead of simply telling a student "today we are doing <AviationTerm term="Steep turns" />," we explain WHY the maneuver matters, how it improves aircraft control, how it is graded on the FAA <AviationTerm term="ACS" />, and how it connects to <AviationTerm term="Checkride" /> expectations.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Study Expectations</h3>
                  <p className="text-slate-600">Students must study outside of lessons. Flight training is not just showing up and flying. We provide direct, encouraging guidance toward FAA books and free online resources.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">The Checkride Scheduling Advantage</h3>
                  <p className="text-slate-600">A hidden cost in aviation is delayed <AviationTerm term="DPE" /> scheduling — sometimes 1–3 months in SoCal. We coordinate <AviationTerm term="Checkride" /> planning early so you don't waste money on refresher flights while waiting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Pricing Snapshot</h2>
            <p className="text-slate-600">Transparent rates. No hidden surprises. <AviationTerm term="Wet rental" /> means fuel is included. <AviationTerm term="Dual instruction" /> means flying with an instructor.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-center text-primary">Aircraft</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-secondary mb-2">$160<span className="text-lg text-slate-500 font-normal">/hr</span></p>
                <p className="text-sm text-slate-600 mb-4">Standard wet rental</p>
                <div className="h-px bg-slate-200 w-full mb-4" />
                <p className="text-xl font-bold text-slate-800">$150<span className="text-sm text-slate-500 font-normal">/hr</span></p>
                <p className="text-xs text-slate-500">10-hour block package</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 border-2 border-primary/20 shadow-md relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-center text-primary">Standard Dual</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">$195<span className="text-lg text-slate-500 font-normal">/hr</span></p>
                <p className="text-sm text-slate-600 mb-4">Aircraft + Instructor</p>
                <div className="h-px bg-slate-200 w-full mb-4" />
                <p className="text-xl font-bold text-slate-800">$180<span className="text-sm text-slate-500 font-normal">/hr</span></p>
                <p className="text-xs text-slate-500">10-hour combined block</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-center text-primary">Instructors</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-bold text-slate-800">$35<span className="text-sm text-slate-500 font-normal">/hr</span></p>
                <p className="text-sm text-slate-600 mb-4">David T. (Standard)</p>
                <div className="h-px bg-slate-200 w-full mb-4" />
                <p className="text-xl font-bold text-slate-800">$45<span className="text-sm text-slate-500 font-normal">/hr</span></p>
                <p className="text-xs text-slate-500">Reza S. (Owner/Senior)</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/pricing" data-testid="link-pricing-snapshot-more">
              <Button variant="outline" className="font-bold border-primary text-primary hover:bg-primary/5">
                View Full Pricing Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Promise */}
      <div className="container mx-auto px-4">
        <StudentPromise />
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Have Questions? We'll Explain Everything.</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Even if you are completely new to aviation and do not know where to start, call or text us. We will answer your questions and help you understand the right training path.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:818-469-1414">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                <Phone className="w-5 h-5" />
                Call 818-469-1414
              </Button>
            </a>
            <a href="sms:818-469-1414">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-primary-foreground/30 hover:bg-primary-foreground/10 text-white gap-2">
                <MessageSquare className="w-5 h-5" />
                Text 818-469-1414
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}