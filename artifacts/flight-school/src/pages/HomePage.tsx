import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  X,
  Plane,
  CloudRain,
  Briefcase,
  GraduationCap,
  Building2,
  AlertCircle,
  BookOpen,
  CalendarClock,
  PlaneTakeoff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";
import { StudentPromise } from "@/components/StudentPromise";

const pilotGoals = [
  {
    goal: "I want to fly for fun, be able to say I am a pilot, purchase and fly my own plane, and carry friends or family with me as a pilot.",
    programs: [
      {
        icon: Plane,
        title: "Private Pilot",
        href: "/private-pilot-van-nuys",
        desc: "Your foundational pilot certificate to fly single-engine aircraft for personal travel, recreation, and carrying passengers.",
      },
      {
        icon: CloudRain,
        title: "Instrument Rating Addon",
        href: "/instrument-rating-van-nuys",
        desc: "An add-on rating that lets you fly using only aircraft instruments in challenging weather — low visibility, fog, low cloud ceilings, and precipitation. It sharpens and hones your skills as a pilot, and ensures you are never stuck unable to fly to a destination or return home due to weather.",
      },
    ],
  },
  {
    goal: "I want to fly as a career.",
    programs: [
      {
        icon: Briefcase,
        title: "Commercial Pilot",
        href: "/commercial-pilot-training",
        desc: "The pilot certificate that allows you to be paid for certain legal flying operations.",
      },
      {
        icon: GraduationCap,
        title: "Certified Flight Instructor (CFI)",
        href: "/cfi-training",
        desc: "Become an instructor, teach students, earn money flying, and build professional flight hours.",
      },
    ],
  },
  {
    goal: "I want to fly as a career in the airlines.",
    programs: [
      {
        icon: Building2,
        title: "Airline Transport Pilot",
        href: "/airline-pilot-path",
        desc: "A structured path from zero experience toward the certificates and flight time needed for airline eligibility — from Private Pilot all the way to the ATP certificate.",
      },
    ],
  },
];

const industryProblems = [
  "Training feels random with no clear structure",
  "Costs are unclear and often higher than expected",
  "Instructors don't explain why maneuvers matter",
  "FAA checkride expectations are introduced too late",
  "Checkride scheduling happens after training ends",
  "Students don't know what to study at home",
];

const acceleratedFix = [
  "Transparent pricing with realistic cost estimates upfront",
  "FAA ACS preparation from day one",
  "Purpose behind every maneuver explained clearly",
  "Proactive checkride planning as students progress",
  "Strong student-instructor communication throughout training",
  "Direct guidance toward free FAA study materials",
];

export function HomePage() {
  const [rateTab, setRateTab] = useState<"standard" | "block">("standard");

  return (
    <div className="w-full">
      <Helmet>
        <title>Accelerated Flight School | Van Nuys Airport | Affordable Flight Training</title>
        <meta
          name="description"
          content="Learn to fly at Van Nuys Airport with structured, transparent, and affordable flight training. Private Pilot from ~$7,500. Call or text 818-469-1414."
        />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[92vh] flex flex-col bg-primary text-white overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Aircraft at Van Nuys Airport with San Gabriel Mountains"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient — stronger on left so text is readable, fades right so plane shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/70 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/20" />
        </div>

        {/* Main hero content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="container mx-auto px-4 max-w-5xl pt-24 md:pt-28 pb-6">
            {/* Airport badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block shrink-0" />
              Van Nuys Airport (KVNY)
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-xl"
              data-testid="text-hero-heading"
            >
              Structured and Affordable Flight Training at Van Nuys
            </h1>
            <p
              className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-lg"
              data-testid="text-hero-subheading"
            >
              Learn to fly with one of the most transparent and affordable flight schools in
              California. We explain the entire training process from day one so students
              understand exactly what they are training for, how the FAA checkride works,
              what realistic costs look like, and how to progress efficiently.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
              <Link href="/contact" data-testid="link-hero-start">
                <Button size="lg" className="font-bold text-base h-12 px-7 bg-secondary hover:bg-secondary/90 text-white gap-2">
                  Start Flight Training
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/discovery-flight" data-testid="link-hero-discovery">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-bold text-base h-12 px-7 border-white/40 hover:bg-white/10 text-white gap-2"
                >
                  <PlaneTakeoff className="w-4 h-4" />
                  Discovery Flight — $190
                </Button>
              </Link>
            </div>

            {/* Phone */}
            <a
              href="tel:818-469-1414"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              data-testid="link-hero-phone"
            >
              <Phone className="w-3.5 h-3.5" />
              818-469-1414
            </a>
          </div>
        </div>

        {/* Stat bar — pinned to bottom of hero */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 max-w-5xl pb-8">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-lg">
              {[
                { label: "AIRCRAFT RATE", value: "$160/hr wet" },
                { label: "INSTRUCTOR FROM", value: "$35/hr" },
                { label: "COMBINED DUAL", value: "$195/hr" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-xl px-4 py-3 flex-1"
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-0.5">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What Kind of Pilot? ────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Training Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Kind of Pilot Do You Want to Become?</h2>
          </div>

          <div className="space-y-10">
            {pilotGoals.map((group, gi) => (
              <div key={gi} className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                {/* Goal header */}
                <div className="bg-primary/5 border-b border-slate-200 px-6 py-4 flex items-start gap-3">
                  <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {gi + 1}
                  </span>
                  <p className="font-semibold text-primary text-base leading-snug">{group.goal}</p>
                </div>
                {/* Program cards */}
                <div className={`grid gap-px bg-slate-100 ${group.programs.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {group.programs.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={p.title}
                        className="bg-white px-7 py-6 flex flex-col gap-3"
                        data-testid={`card-program-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      >
                        <Icon className="w-6 h-6 text-secondary mb-0.5" />
                        <h3 className="text-base font-bold text-primary">{p.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed flex-1">{p.desc}</p>
                        <Link
                          href={p.href}
                          className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:underline mt-1"
                          data-testid={`link-program-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        >
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Different ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Accelerated Flight School Is Different
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Many students across the aviation industry become frustrated because training
              can feel random, costs can be unclear, instructors may not explain why maneuvers
              matter, and checkride planning may happen too late.
            </p>
          </div>

          {/* Problems vs Fix */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-base font-bold text-slate-500 uppercase tracking-wider mb-6">
                Common Industry Problems
              </h3>
              <ul className="space-y-4">
                {industryProblems.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-base font-bold text-secondary uppercase tracking-wider mb-6">
                The Accelerated Fix
              </h3>
              <ul className="space-y-4">
                {acceleratedFix.map((fix, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{fix}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cost Comparison callout */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 mb-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Southern California market average
              </p>
              <p className="text-2xl font-bold text-white/60 line-through">$15,000 – $25,000+</p>
              <p className="text-xs text-slate-400 mt-1">Private Pilot or Instrument Rating at many area schools</p>
            </div>
            <div className="h-px md:h-16 md:w-px bg-slate-700" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                Accelerated Flight School estimate
              </p>
              <p className="text-3xl font-bold text-white">~$7,500 – $12,500</p>
              <p className="text-xs text-slate-400 mt-1">
                Private Pilot, depending on consistency, weather, study habits, and proficiency
              </p>
            </div>
            <Link href="/pricing" className="shrink-0">
              <Button variant="outline" className="border-slate-600 text-white hover:bg-white/10 font-bold">
                See Full Pricing
              </Button>
            </Link>
          </div>

          {/* Purpose-Driven Maneuvers */}
          <div className="mb-14">
            <div className="flex items-start gap-4 mb-5">
              <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                <Plane className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Purpose-Driven Maneuvers</h3>
                <p className="text-slate-600 leading-relaxed">
                  Instead of simply telling a student, "today we are doing{" "}
                  <AviationTerm term="Steep turns" />," we explain <strong>why</strong> the
                  maneuver matters, how it improves aircraft control, how it is graded on the
                  FAA <AviationTerm term="ACS" />, and how it directly connects to{" "}
                  <AviationTerm term="Checkride" /> expectations. Every lesson has a purpose
                  that you will understand before you ever leave the ground.
                </p>
              </div>
            </div>
          </div>

          {/* Study Expectations */}
          <div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 rounded-xl p-3 shrink-0">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Study Expectations</h3>
                <p className="text-slate-600 leading-relaxed">
                  Students must study outside of flight lessons to progress efficiently. We are
                  upfront about this from day one. Flight training is not just showing up and
                  flying. Students must study at home, understand the FAA materials, and prepare
                  for the written test, oral exam, and flight portion. We help point you toward
                  FAA books and free online resources so you know exactly what to study and why
                  it matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Checkride Scheduling Advantage ───────────────────── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md order-2 md:order-1">
              <img
                src="/images/piper-cherokee.png"
                alt="Piper Cherokee cockpit panel and instruments at Van Nuys Airport"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                Planning Ahead
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">
                The Checkride Scheduling Advantage
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 mb-1">The Hidden Cost</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Many schools wait until all training is complete before booking a{" "}
                      <AviationTerm term="DPE" /> checkride slot. In Southern California, this
                      can create a 1–3 month delay after training ends.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 mb-1">That Delay Costs Money</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Pilot skills rust quickly without regular flying. A long wait forces extra
                      refresher flights, frustration, and added cost before the{" "}
                      <AviationTerm term="Checkride" />.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarClock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 mb-1">Our Approach</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Accelerated Flight School coordinates checkride planning early once students
                      demonstrate solid progress. The goal is to take the practical test shortly
                      after training completion — not months later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing Snapshot ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-3xl font-bold text-primary mb-3">Pricing Snapshot</h2>
            <p className="text-slate-500 mb-6">
              Toggle between standard and block rates to see your savings.
            </p>
            {/* Toggle */}
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
              <button
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  rateTab === "standard"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
                onClick={() => setRateTab("standard")}
                data-testid="button-rate-standard"
              >
                Standard Rate
              </button>
              <button
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  rateTab === "block"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
                onClick={() => setRateTab("block")}
                data-testid="button-rate-block"
              >
                10-Hr Block
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Aircraft */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                Aircraft Rental
              </p>
              <p className="text-4xl font-bold text-secondary mb-1">
                ${rateTab === "standard" ? "160" : "150"}
                <span className="text-lg text-slate-400 font-normal">/hr</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                <AviationTerm term="Wet rental" /> — fuel included
              </p>
              {rateTab === "block" && (
                <p className="text-xs text-green-600 font-bold mt-2">Save $10/hr vs standard</p>
              )}
            </div>

            {/* Combined — featured */}
            <div className="bg-primary rounded-2xl p-8 text-center text-white shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Combined Dual Rate
              </div>
              <p className="text-sm font-bold text-primary-foreground/60 uppercase tracking-wider mb-4 mt-2">
                Aircraft + Instructor
              </p>
              <p className="text-5xl font-bold text-white mb-1">
                ${rateTab === "standard" ? "195" : "180"}
                <span className="text-xl font-normal opacity-70">/hr</span>
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Aircraft + Instructor Included
              </p>
              {rateTab === "block" && (
                <p className="text-xs text-green-300 font-bold mt-2">Save $15/hr vs standard</p>
              )}
            </div>

            {/* Instructor */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                Instructor
              </p>
              <p className="text-4xl font-bold text-secondary mb-1">
                ${rateTab === "standard" ? "35" : "30"}
                <span className="text-lg text-slate-400 font-normal">/hr</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                David T. — {rateTab === "standard" ? "standard rate" : "10-hr block"}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xl font-bold text-slate-700">$45<span className="text-sm text-slate-400 font-normal">/hr</span></p>
                <p className="text-xs text-slate-500">Reza S. (Owner)</p>
              </div>
              {rateTab === "block" && (
                <p className="text-xs text-green-600 font-bold mt-2">Save $5/hr vs standard</p>
              )}
            </div>
          </div>

          <p className="text-xs text-center text-slate-400 mb-2">
            <AviationTerm term="Wet rental" /> means fuel is included in the aircraft rate.{" "}
            <AviationTerm term="Dual instruction" /> means flying with an instructor onboard.
          </p>

          <div className="text-center mt-6">
            <Link href="/pricing" data-testid="link-pricing-snapshot-more">
              <Button variant="outline" className="font-bold border-primary text-primary hover:bg-primary/5">
                View Full Pricing &amp; Program Estimates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Student Promise ───────────────────────────────────── */}
      <div className="container mx-auto px-4">
        <StudentPromise />
      </div>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Have Questions? We'll Explain Everything.</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Even if you are completely new to aviation and do not know where to start, call or
            text us. We will answer your questions and help you understand the right training
            path.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:818-469-1414">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                <Phone className="w-5 h-5" />
                Call 818-469-1414
              </Button>
            </a>
            <a href="sms:818-469-1414">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-primary-foreground/30 hover:bg-primary-foreground/10 text-white gap-2"
              >
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
