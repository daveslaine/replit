import React from "react";
import { Helmet } from "react-helmet-async";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import {
  Award,
  CalendarClock,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Info,
  MapPin,
  Phone,
  PlaneTakeoff,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

const SITE_URL = "https://acceleratedflightschool.net";
const PAGE_URL = `${SITE_URL}/private-pilot-van-nuys`;

const privatePilotFaqs = [
  {
    question: "How much does a Private Pilot License cost at Van Nuys Airport?",
    answer:
      "Our estimated Private Pilot training cost is approximately $9,900–$14,500 in training expenses. The final amount depends on total flight time, training frequency, individual proficiency, study habits, weather, and scheduling. FAA examiner fees, the written test, medical examination, headset, ForeFlight, and renter's insurance are separate.",
  },
  {
    question: "What is your Private Pilot checkride pass rate?",
    answer:
      "Our Private Pilot students have achieved a 95% FAA checkride pass rate. We use structured FAA ACS-based preparation, mock oral reviews, maneuver evaluations, and final checkride-preparation flights before issuing an instructor recommendation.",
  },
  {
    question: "Are your flight instructors experienced?",
    answer:
      "Our pilots and instructors bring decades of combined aviation experience. Students receive practical instruction focused on aircraft control, risk management, airport operations, air traffic control communication, navigation, emergency procedures, and FAA checkride standards.",
  },
  {
    question:
      "Is Accelerated Flight School a top-rated Van Nuys flight school?",
    answer:
      "Accelerated Flight School is positioned as one of the best and top-rated choices for personalized Private Pilot training at Van Nuys Airport. We focus on transparent pricing, direct access to instructors, structured training, consistent scheduling, checkride preparation, and a 95% pass rate.",
  },
  {
    question: "Do I need to pay the entire program cost upfront?",
    answer:
      "No. There is no large upfront payment. Students pay as they fly. This allows you to maintain control over your training schedule and expenses without prepaying the entire estimated program cost.",
  },
  {
    question: "How often should I take flight lessons?",
    answer:
      "Flying two or three times per week usually produces better retention and faster progress. Students who fly infrequently may spend more lesson time reviewing previously learned skills.",
  },
  {
    question: "Can I complete accelerated Private Pilot training?",
    answer:
      "Yes. Accelerated training may be available for students who can fly consistently, complete ground study between lessons, maintain flexible scheduling, and meet each proficiency standard without unnecessary gaps.",
  },
  {
    question: "Can I begin flight training before taking the FAA written test?",
    answer:
      "Yes. You may begin flight training before completing the FAA knowledge test. However, completing the written test early can reduce distractions later and allows more attention to be placed on solo, cross-country, and checkride preparation.",
  },
  {
    question: "When will I be allowed to fly solo?",
    answer:
      "Solo timing depends on proficiency rather than a fixed number of lessons. Before solo, you must demonstrate safe aircraft control, takeoffs, landings, go-arounds, traffic-pattern operations, emergency procedures, radio communication, and sound judgment. You must also complete the required pre-solo knowledge test and hold the required FAA student pilot and medical credentials.",
  },
  {
    question: "What happens during the first flight lesson?",
    answer:
      "Your first lesson normally includes an introduction to the aircraft, preflight inspection, cockpit controls, engine start, taxi procedures, basic radio communication, takeoff, straight-and-level flight, turns, climbs, descents, approach, landing, and a postflight review.",
  },
  {
    question: "Why train at a busy airport like Van Nuys?",
    answer:
      "Training at Van Nuys provides practical experience with air traffic control, complex taxi routes, controlled-airport procedures, radio communication, traffic awareness, wake turbulence, and Los Angeles airspace. These skills help prepare students for real-world flying beyond quiet training airports.",
  },
  {
    question: "How do I schedule a Private Pilot consultation or first lesson?",
    answer:
      "Call or text Accelerated Flight School at 424-493-2761. We will discuss your goals, schedule, previous experience, medical certificate, expected cost, instructor availability, aircraft availability, and the next available training date.",
  },
];

const privatePilotServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Private Pilot Training at Van Nuys Airport",
  alternateName: [
    "Private Pilot License Training Los Angeles",
    "Private Pilot Certificate Training Van Nuys",
    "PPL Flight Training Los Angeles",
  ],
  description:
    "FAA ACS-structured Private Pilot training at Van Nuys Airport for Los Angeles and San Fernando Valley students, including flight instruction, solo preparation, cross-country training, written-test preparation, and FAA checkride preparation.",
  serviceType: "Private Pilot Airplane Training",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: PAGE_URL,
  areaServed: [
    "Van Nuys",
    "Los Angeles",
    "San Fernando Valley",
    "Encino",
    "Sherman Oaks",
    "Calabasas",
    "Woodland Hills",
    "Studio City",
    "Burbank",
    "Beverly Hills",
    "West Los Angeles",
  ],
  serviceLocation: {
    "@type": "Airport",
    name: "Van Nuys Airport",
    iataCode: "VNY",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16425 Hart St",
      addressLocality: "Van Nuys",
      addressRegion: "CA",
      postalCode: "91406",
      addressCountry: "US",
    },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "7500",
      maxPrice: "12500",
      priceCurrency: "USD",
    },
    description:
      "Estimated Private Pilot training cost of approximately $9,900 to $14,500, with no large upfront payment and students paying as they fly.",
    seller: { "@id": `${SITE_URL}/#organization` },
  },
};

const privatePilotCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${PAGE_URL}#course`,
  name: "Private Pilot Airplane Course",
  description:
    "Structured Private Pilot flight training covering FAA Private Pilot Airplane ACS knowledge, risk management, flight proficiency, solo operations, cross-country flying, and checkride preparation.",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: PAGE_URL,
  educationalCredentialAwarded: "FAA Private Pilot Certificate - Airplane",
  teaches: [
    "Aircraft control",
    "Takeoffs and landings",
    "Airport operations",
    "Air traffic control communication",
    "Navigation and cross-country planning",
    "Weather decision-making",
    "Emergency procedures",
    "Solo flight preparation",
    "FAA knowledge-test preparation",
    "FAA practical-test preparation",
  ],
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "In person",
    location: {
      "@type": "Airport",
      name: "Van Nuys Airport",
      iataCode: "VNY",
      address: {
        "@type": "PostalAddress",
        streetAddress: "16425 Hart St",
        addressLocality: "Van Nuys",
        addressRegion: "CA",
        postalCode: "91406",
        addressCountry: "US",
      },
    },
  },
};

const privatePilotBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Private Pilot Training Van Nuys",
      item: PAGE_URL,
    },
  ],
};

const privatePilotFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: privatePilotFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function PrivatePilotPage() {
  return (
    <div className="w-full min-w-0 overflow-x-clip bg-slate-50">
      <Seo
        title={"Private Pilot Training Van Nuys | Accelerated Flight School"}
        description={
          "Private Pilot training at Van Nuys Airport (KVNY). FAA ACS-structured. ~$9,900–$14,500, below the SoCal average. No upfront payment. Call 424-493-2761."
        }
        canonical={PAGE_URL}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(privatePilotServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(privatePilotCourseSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(privatePilotBreadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(privatePilotFaqSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <img
          src="/images/cessna-skyhawk.webp"
          alt="Cessna 172 Skyhawk in flight near Van Nuys Airport"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          width="1600"
          height="900"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />

        <div className="container relative mx-auto w-full min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4 text-center md:text-left">
              Top-Rated Flight Training at Van Nuys Airport
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
              Private Pilot Training at Van Nuys Airport
            </h1>

            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-4xl text-center md:text-left mb-4">
              Earn your Private Pilot Certificate with one of the best
              flight-training programs in Van Nuys. Learn to fly from
              experienced pilots, follow a structured FAA training syllabus, and
              prepare for your written test, solo flights, cross-country
              training, and FAA checkride.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 mb-8">
              <p className="text-sm font-bold text-green-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                95% FAA checkride pass rate
              </p>

              <p className="text-sm font-bold text-green-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                No upfront payment
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="tel:424-493-2761"
                className="block w-full min-w-0 sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-auto min-h-14 w-full min-w-0 whitespace-normal break-words px-4 py-3 text-center text-base font-bold leading-snug sm:w-auto sm:px-6 sm:text-lg gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call 424-493-2761
                </Button>
              </a>

              <a
                href="sms:4244932761"
                className="block w-full min-w-0 sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-auto min-h-14 w-full min-w-0 whitespace-normal break-words px-4 py-3 text-center text-base font-bold leading-snug text-white border-white/40 hover:bg-white/10 sm:w-auto sm:px-6 sm:text-lg"
                >
                  Text Us About Training
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-sm">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-3xl font-bold text-primary mb-1">95%</p>
              <p className="text-sm font-semibold text-slate-700">
                FAA Checkride Pass Rate
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-sm">
              <Clock3 className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-xl font-bold text-primary mb-1">Decades</p>
              <p className="text-sm font-semibold text-slate-700">
                Of Combined Pilot Experience
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-sm">
              <Star className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-xl font-bold text-primary mb-1">Top-Rated</p>
              <p className="text-sm font-semibold text-slate-700">
                Van Nuys Flight School
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-sm">
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-xl font-bold text-primary mb-1">KVNY</p>
              <p className="text-sm font-semibold text-slate-700">
                Van Nuys Airport Training
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-bold">
            <a
              href="#private-pilot-cost"
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-primary transition hover:border-secondary hover:text-secondary"
            >
              Cost
            </a>
            <a
              href="#why-choose-us"
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-primary transition hover:border-secondary hover:text-secondary"
            >
              Why Choose Us
            </a>
            <a
              href="#private-pilot-training"
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-primary transition hover:border-secondary hover:text-secondary"
            >
              Training
            </a>
            <a
              href="#faa-requirements"
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-primary transition hover:border-secondary hover:text-secondary"
            >
              FAA Requirements
            </a>
            <a
              href="#private-pilot-checkride"
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-primary transition hover:border-secondary hover:text-secondary"
            >
              Checkride
            </a>
            <a
              href="#private-pilot-faq"
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-primary transition hover:border-secondary hover:text-secondary"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
          <div className="grid min-w-0 grid-cols-1 gap-8 lg:gap-10">
            <div className="order-2 min-w-0 space-y-8">
              {/* Why Choose Us */}
              <div
                id="why-choose-us"
                className="scroll-mt-28 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
                  One of the Best Private Pilot Schools in Van Nuys
                </h2>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Accelerated Flight School is a top-rated flight school at Van
                  Nuys Airport focused on safe, efficient, and affordable pilot
                  training. Our pilots and instructors bring decades of combined
                  aviation experience to every lesson. That experience allows us
                  to identify problems quickly, explain difficult concepts
                  clearly, and prepare students for the real decisions pilots
                  must make in Southern California airspace.
                </p>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Our Private Pilot students have achieved a{" "}
                  <strong>95% FAA checkride pass rate</strong>. Training follows
                  the FAA Airman Certification Standards, so every flight,
                  ground lesson, stage of solo preparation, and checkride review
                  is connected to the skills and knowledge the FAA actually
                  evaluates.
                </p>

                <p className="text-slate-700 leading-relaxed mb-4">
                  We believe the best flight school is not simply the school
                  with the largest fleet or the most expensive program. The best
                  flight school gives students consistent access to aircraft,
                  experienced instructors, direct communication, transparent
                  pricing, efficient scheduling, and a clear path from the first
                  flight lesson to the Private Pilot checkride.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  Students searching for Private Pilot lessons in Los Angeles,
                  affordable flight training in Van Nuys, an accelerated Private
                  Pilot program, or a flight instructor near Van Nuys Airport
                  can call or text us directly. We will explain the process,
                  expected schedule, aircraft availability, FAA requirements,
                  and realistic training cost before you commit.
                </p>
              </div>

              {/* Training Coverage */}
              <div
                id="private-pilot-training"
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 flex min-w-0 items-start gap-3 break-words text-3xl font-black text-primary md:text-4xl">
                  <PlaneTakeoff className="w-8 h-8 text-secondary shrink-0" />
                  What Private Pilot Training Covers
                </h2>

                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  The Private Pilot Certificate is your gateway to aviation. It
                  allows you to operate single-engine airplanes for personal
                  travel, recreation, family trips, business transportation, and
                  carrying passengers when conducted within FAA Private Pilot
                  privileges and limitations.
                </p>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Our structured Private Pilot syllabus guides you through every
                  major stage of flight training at Van Nuys Airport. You will
                  learn aircraft control, airport operations, navigation,
                  weather analysis, aeronautical decision-making, emergency
                  procedures, radio communication, and the knowledge required to
                  pass the FAA <AviationTerm term="Checkride" /> with
                  confidence.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Basic aircraft control",
                    "Preflight inspections",
                    "Cockpit and flight deck management",
                    "Engine starting and taxi procedures",
                    "Van Nuys Airport ground operations",
                    "Air traffic control communication",
                    "Normal takeoffs and landings",
                    "Crosswind takeoffs and landings",
                    "Short-field takeoffs and landings",
                    "Soft-field takeoffs and landings",
                    "Traffic pattern procedures",
                    "Slow flight",
                    "Power-off stalls",
                    "Power-on stalls",
                    "Steep turns",
                    "Ground reference maneuvers",
                    "Emergency procedures",
                    "Simulated engine failures",
                    "Go-around procedures",
                    "Navigation and flight planning",
                    "GPS, VOR, and pilotage navigation",
                    "Weather briefings and flight decisions",
                    "Night flight training",
                    "Solo flight preparation",
                    "Supervised solo flight",
                    "Solo cross-country flights",
                    "FAA written test preparation",
                    "FAA oral exam preparation",
                    "FAA checkride flight preparation",
                    "Aeronautical decision-making",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Training Advantages */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Why Learn to Fly at Van Nuys Airport?
                </h2>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Van Nuys Airport is one of the most active general aviation
                  airports in the United States. Learning to fly at KVNY gives
                  Private Pilot students practical experience communicating with
                  air traffic control, following taxi instructions, operating
                  around business jets and other aircraft, reading airport
                  diagrams, maintaining situational awareness, and making safe
                  decisions in busy airspace.
                </p>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Students also train throughout the Los Angeles Basin and visit
                  airports across Southern California. Depending on the lesson
                  and training stage, flights may include operations near
                  Camarillo, Oxnard, Santa Paula, Santa Monica, Burbank,
                  Whiteman, Long Beach, Riverside, San Bernardino, Bakersfield,
                  and other airports suitable for Private Pilot instruction and
                  cross-country experience.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  Training in the Van Nuys and Los Angeles environment can
                  produce confident pilots who are comfortable with controlled
                  airports, complex airspace, radio communication, changing
                  weather, terrain considerations, and real-world traffic. Your
                  instructor will introduce these challenges progressively so
                  that each new skill is added at the correct stage of training.
                </p>
              </div>

              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                  src="/images/warrior-exterior.png"
                  alt="Piper PA-28-161 Warrior II on a sunny ramp at Van Nuys Airport"
                  className="h-72 w-full object-cover md:h-[430px]"
                  width="1600"
                  height="900"
                  loading="lazy"
                />
              </figure>

              {/* Medical Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />

                <div className="min-w-0">
                  <h3 className="break-words font-bold text-blue-800 mb-1">
                    FAA Medical Certificate Required Before Solo
                  </h3>

                  <p className="text-sm text-blue-700 leading-relaxed">
                    Before you fly <AviationTerm term="Solo time" /> — without
                    an instructor onboard — the FAA requires you to hold a valid
                    medical certificate from an FAA Aviation Medical Examiner.
                    We recommend scheduling your medical early in training.
                    Medical exam fees are typically $100–$200.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="min-w-0 overflow-hidden bg-secondary text-white rounded-xl p-5 sm:p-6 md:p-8">
                <div className="flex min-w-0 flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                  <div className="min-w-0">
                    <h2 className="break-words text-2xl font-bold mb-2">
                      Ready to Start Private Pilot Training?
                    </h2>

                    <p className="text-white/90 leading-relaxed">
                      Call or text us to discuss aircraft availability, flight
                      instructor scheduling, expected training costs, and the
                      fastest realistic path to your Private Pilot Certificate.
                    </p>
                  </div>

                  <a
                    href="tel:424-493-2761"
                    className="block w-full min-w-0 xl:w-auto"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-auto min-h-14 w-full min-w-0 whitespace-normal break-words bg-white px-4 py-3 text-center font-bold leading-snug text-primary border-white hover:bg-slate-100 xl:w-auto xl:px-7 gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call 424-493-2761
                    </Button>
                  </a>
                </div>
              </div>

              {/* PPL Requirements */}
              <div
                id="faa-requirements"
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-6 flex min-w-0 items-start gap-3 break-words text-3xl font-black text-primary md:text-4xl">
                  <GraduationCap className="w-7 h-7 text-secondary shrink-0" />
                  FAA Private Pilot License Requirements — Part 61
                </h2>

                {/* Basic Eligibility */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    Basic Eligibility
                  </h3>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Age",
                        detail:
                          "Minimum age 16 to fly solo and minimum age 17 to receive the Private Pilot Certificate.",
                      },
                      {
                        label: "Language",
                        detail:
                          "You must be able to read, write, speak, and understand English.",
                      },
                      {
                        label: "Student Pilot Certificate",
                        detail:
                          "You must hold an FAA Student Pilot Certificate before flying solo.",
                      },
                      {
                        label: "Medical Certificate",
                        detail:
                          "You must hold at least a current FAA Third-Class Medical Certificate before solo flight.",
                      },
                    ].map((req) => (
                      <div key={req.label} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />

                        <p className="text-slate-700 text-sm">
                          <strong>{req.label}:</strong> {req.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flight Time Breakdown */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Private Pilot Flight-Time Breakdown
                  </h3>

                  <p className="text-sm text-slate-500 mb-4">
                    The FAA requires a minimum of 40 total flight hours under
                    Part 61.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                        20 Hours Dual Instruction With a CFI
                      </h4>

                      <div className="space-y-2 pl-2">
                        {[
                          "3 hours of cross-country flight training.",
                          "3 hours of night flight training, including one cross-country flight over 100 nautical miles total distance.",
                          "10 night takeoffs and 10 night landings to a full stop.",
                          "3 hours of instrument flight training by reference to instruments.",
                          "3 hours of practical-test preparation within 2 calendar months of the checkride.",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                            <p className="text-sm text-slate-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                        10 Hours Solo Flight
                      </h4>

                      <div className="space-y-2 pl-2">
                        {[
                          "5 hours of solo cross-country flight time.",
                          "One solo cross-country flight of at least 150 nautical miles total distance.",
                          "Landings at three points during the required long solo cross-country flight.",
                          "One flight segment involving a straight-line distance greater than 50 nautical miles.",
                          "3 takeoffs and 3 landings to a full stop at an airport with an operating control tower.",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                            <p className="text-sm text-slate-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testing Requirements */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    Testing Requirements
                  </h3>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Knowledge Test",
                        detail:
                          "Pass the 60-question FAA Private Pilot Airplane knowledge test with a score of 70% or higher.",
                      },
                      {
                        label: "Practical Test",
                        detail:
                          "Pass a two-part FAA checkride consisting of an oral examination and flight test with an FAA Designated Pilot Examiner.",
                      },
                    ].map((req) => (
                      <div key={req.label} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />

                        <p className="text-slate-700 text-sm">
                          <strong>{req.label}:</strong> {req.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Flight Time Expectations */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-primary mb-4">
                  How Long Does Private Pilot Training Take?
                </h2>

                <p className="text-slate-700 mb-4">
                  Although the FAA minimum is 40 flight hours, many students
                  require approximately 65–75 hours before reaching checkride
                  proficiency. Total time depends on training frequency, study
                  habits, weather, aircraft availability, instructor
                  availability, prior experience, and individual learning speed.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  <li>
                    <strong>Training frequency:</strong> Flying two or three
                    times per week usually produces faster progress and better
                    skill retention.
                  </li>

                  <li>
                    <strong>Home study:</strong> Reading and studying before
                    each lesson reduces the amount of paid ground instruction
                    needed.
                  </li>

                  <li>
                    <strong>Preparation:</strong> Arriving on time with weather,
                    performance calculations, and lesson material prepared
                    allows more time for flying.
                  </li>

                  <li>
                    <strong>Consistency:</strong> Long gaps between lessons
                    often require additional review flights before training can
                    move forward.
                  </li>

                  <li>
                    <strong>Proficiency:</strong> FAA minimum hours do not
                    replace the requirement to demonstrate safe, consistent
                    performance.
                  </li>
                </ul>

                <p className="text-sm text-slate-500">
                  During training, you will build both{" "}
                  <AviationTerm term="Dual instruction" /> time with your
                  instructor and <AviationTerm term="Solo time" /> flying the
                  aircraft by yourself. You will also complete{" "}
                  <AviationTerm term="Cross-country" /> flights to other
                  airports as your skills and confidence increase.
                </p>
              </div>

              {/* Accelerated Training */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Accelerated Private Pilot Training in Los Angeles
                </h2>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Accelerated Private Pilot training is designed for students
                  who can fly consistently and complete ground-study assignments
                  between lessons. The objective is not to rush individual
                  maneuvers. The objective is to reduce unnecessary gaps,
                  maintain skill retention, and move efficiently from one
                  training stage to the next.
                </p>

                <p className="text-slate-700 leading-relaxed mb-4">
                  A student flying several times per week normally retains more
                  knowledge and aircraft-control skill than a student flying
                  once every few weeks. Better retention can reduce repeated
                  lessons, lower total training time, and decrease the overall
                  cost of earning a Private Pilot Certificate.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  We can build a personalized schedule around your availability,
                  whether you want an intensive accelerated program or a
                  consistent part-time Private Pilot schedule. Call us before
                  enrolling so we can discuss your timeline, work schedule,
                  previous flight experience, medical certificate, and training
                  goals.
                </p>
              </div>

              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                  src="/images/cessna-skyhawk.webp"
                  alt="Cessna 172 Skyhawk in flight for Private Pilot lessons at Van Nuys Airport"
                  className="h-72 w-full object-cover md:h-[430px]"
                  width="1600"
                  height="900"
                  loading="lazy"
                />
              </figure>

              {/* Flight Proficiency Requirements */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <h2 className="text-xl font-bold text-primary mb-2">
                  FAA Private Pilot Flight Proficiency Requirements
                </h2>

                <p className="text-sm text-slate-500 mb-6">
                  To pass your Private Pilot checkride, you must demonstrate
                  proficiency in the required areas of operation contained in
                  the FAA Private Pilot Airman Certification Standards. Your
                  flight instructor will train, review, and evaluate each area
                  before recommending you for the practical test.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      num: "I",
                      title: "Preflight Preparation",
                      detail:
                        "Obtaining and analyzing a weather briefing, checking NOTAMs and TFRs, calculating weight and balance, computing takeoff and landing performance, planning fuel requirements, evaluating risk, and confirming aircraft airworthiness.",
                    },
                    {
                      num: "II",
                      title: "Preflight Procedures",
                      detail:
                        "Completing the aircraft walkaround inspection, checking fuel quantity and quality, verifying oil level, inspecting control surfaces, examining tires and brakes, testing lights, evaluating the pitot-static system, organizing the cockpit, starting the engine, taxiing, and completing the engine run-up.",
                    },
                    {
                      num: "III",
                      title: "Airport Operations",
                      detail:
                        "Ground operations at controlled and uncontrolled airports, taxi techniques, airport diagrams, runway-incursion avoidance, radio communication with air traffic control, CTAF procedures, traffic-pattern operations, wake-turbulence avoidance, and light-gun signal recognition.",
                    },
                    {
                      num: "IV",
                      title: "Takeoffs, Landings, and Go-Arounds",
                      detail:
                        "Normal and crosswind takeoffs and landings, short-field techniques, soft-field techniques, stabilized approaches, rejected takeoffs, go-around procedures, runway selection, wind correction, and proper traffic-pattern planning.",
                    },
                    {
                      num: "V",
                      title: "Performance Maneuvers",
                      detail:
                        "Steep turns develop precise aircraft control, coordination, division of attention, altitude control, airspeed control, and spatial awareness while operating at an increased bank angle and load factor.",
                    },
                    {
                      num: "VI",
                      title: "Ground Reference Maneuvers",
                      detail:
                        "Rectangular courses, S-turns across a road, and turns around a point teach you to maintain a precise ground track while continuously correcting for wind direction, wind velocity, groundspeed, and drift.",
                    },
                    {
                      num: "VII",
                      title: "Navigation",
                      detail:
                        "Pilotage, dead reckoning, GPS navigation, VOR navigation, sectional-chart interpretation, cross-country flight planning, fuel planning, position awareness, lost procedures, and diversion to an alternate airport.",
                    },
                    {
                      num: "VIII",
                      title: "Slow Flight and Stalls",
                      detail:
                        "Slow flight, power-off stalls, and power-on stalls teach you to recognize changes in aircraft handling near critical angles of attack and recover promptly while maintaining coordinated flight.",
                    },
                    {
                      num: "IX",
                      title: "Emergency Operations",
                      detail:
                        "Simulated engine failures, forced-landing planning, electrical-system malfunctions, smoke and fire procedures, emergency communication, emergency checklists, partial-power situations, and aeronautical decision-making.",
                    },
                    {
                      num: "X",
                      title: "Postflight Procedures",
                      detail:
                        "Engine shutdown, aircraft securing, control locks, chocks, tie-downs, postflight inspection, logbook documentation, and reporting maintenance discrepancies.",
                    },
                  ].map((area) => (
                    <div
                      key={area.num}
                      className="border-l-4 border-secondary pl-4"
                    >
                      <h3 className="font-bold text-primary mb-1 text-sm">
                        <span className="text-secondary font-black mr-2">
                          Area {area.num}.
                        </span>
                        {area.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                        {area.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkride Preparation */}
              <div
                id="private-pilot-checkride"
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
                  Private Pilot Checkride Preparation
                </h2>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Our 95% checkride pass rate reflects structured preparation,
                  consistent standards, and direct instructor feedback. Students
                  are not sent to a checkride simply because they have reached
                  the FAA minimum number of hours. They are recommended when
                  they can consistently meet the applicable FAA standards and
                  demonstrate sound pilot judgment.
                </p>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Checkride preparation includes review of aircraft systems,
                  weather, airspace, regulations, performance calculations,
                  weight and balance, cross-country planning, maintenance
                  documents, aeronautical decision-making, risk management, and
                  every required flight maneuver.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  Before the practical test, your instructor will identify weak
                  areas, conduct mock oral reviews, evaluate checkride
                  maneuvers, review common examiner questions, and help you
                  prepare the aircraft documents and cross-country assignment
                  required for the test.
                </p>
              </div>

              {/* Checkride Scheduling Advantage */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
                <h2 className="min-w-0 break-words text-xl font-bold text-primary mb-3 flex items-start gap-3">
                  <CalendarClock className="w-6 h-6 text-secondary shrink-0" />
                  Checkride Scheduling Advantage
                </h2>

                <p className="text-slate-700 leading-relaxed mb-4">
                  At Accelerated Flight School, we begin coordinating{" "}
                  <AviationTerm term="Checkride" /> scheduling once a student
                  demonstrates solid progress. The objective is to have a
                  practical-test plan in place before training is complete
                  rather than beginning the search for a{" "}
                  <AviationTerm term="DPE" /> only after the student becomes
                  checkride-ready.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-primary/20 rounded-lg p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                      Accelerated Flight School
                    </p>

                    <p className="text-3xl font-bold text-primary">1–3 weeks</p>

                    <p className="text-xs text-slate-500 mt-1">
                      Target from training completion to checkride
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                      Some Southern California Schools
                    </p>

                    <p className="text-3xl font-bold text-slate-400">
                      2–5 months
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Possible wait for an examiner opening
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Examiner availability in Southern California can be limited.
                  Long delays allow skills and knowledge to degrade, which may
                  create a need for additional refresher flights. Early
                  coordination helps students test while their training remains
                  current and their checkride preparation is still sharp.
                </p>
              </div>

              {/* What Serious Students Need */}
              <div className="min-w-0 overflow-hidden bg-white border border-slate-200 rounded-xl p-5 sm:p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                  Choosing the Right Flight School
                </p>

                <h2 className="break-words text-2xl font-bold text-primary mb-4">
                  What a Serious Student Pilot Actually Needs
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Most prospective pilots are not merely comparing hourly
                  prices. They are trying to determine whether a school will
                  help them finish, protect their time and money, teach them
                  safely, and treat their goal as something important. A strong
                  flight school should remove uncertainty before asking a
                  student to commit.
                </p>

                <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "A clear path from lesson one to checkride",
                      text: "Students want to know what happens next, what proficiency is required, and how each lesson moves them toward solo, cross-country flight, and the FAA practical test.",
                    },
                    {
                      title: "Reliable access to an aircraft and instructor",
                      text: "Progress collapses when lessons are repeatedly canceled or instructors constantly change. Consistent scheduling protects skill retention and reduces expensive repetition.",
                    },
                    {
                      title: "Honest and understandable costs",
                      text: "A student needs realistic estimates, separate disclosure of examiner and equipment fees, and the ability to pay as training occurs instead of surrendering a large sum upfront.",
                    },
                    {
                      title: "An instructor who notices the individual",
                      text: "Some students learn visually, some verbally, and some through repetition. Effective instruction adapts without lowering the FAA standard or wasting flight time.",
                    },
                    {
                      title: "Safe training that still builds confidence",
                      text: "Students need instructors who explain risk, intervene early, and gradually transfer responsibility until the student can make sound decisions independently.",
                    },
                    {
                      title: "A realistic checkride strategy",
                      text: "The student should know how oral preparation, maneuver standards, endorsements, aircraft documents, and examiner scheduling fit together before the final week of training.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <h3 className="break-words font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="break-words text-sm leading-relaxed text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fears and Friction */}
              <div className="min-w-0 overflow-hidden rounded-xl border border-amber-200 bg-amber-50 p-5 sm:p-6 md:p-8">
                <h2 className="break-words text-2xl font-bold text-primary mb-4">
                  The Fears That Stop People From Beginning Flight Training
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  A future pilot may have wanted to fly for years and still
                  hesitate before making the first call. The hesitation usually
                  comes from uncertainty, not lack of desire. We address those
                  concerns directly instead of pretending they do not exist.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      fear: "“What if I spend thousands of dollars and never finish?”",
                      response:
                        "Training is organized around measurable stages, consistent scheduling, honest progress reviews, and preparation for the next milestone. Paying as you fly also prevents a large prepaid balance from trapping you at one school.",
                    },
                    {
                      fear: "“What if I am not naturally good at flying?”",
                      response:
                        "A Private Pilot is built through instruction and repetition. Early difficulty with radios, landings, navigation, or aircraft control is normal. The relevant question is whether the student can improve safely and consistently—not whether the first lesson looks perfect.",
                    },
                    {
                      fear: "“What if the airplane is unsafe or something goes wrong?”",
                      response:
                        "Safety is taught as a system: preflight inspection, maintenance awareness, checklists, weather evaluation, conservative decision-making, emergency procedures, and an instructor who intervenes before a situation becomes unstable.",
                    },
                    {
                      fear: "“What if I fail the written test or checkride?”",
                      response:
                        "The written test, oral exam, and flight test are predictable bodies of knowledge and skill. Structured preparation, mock questioning, repeated maneuver evaluation, and clear completion standards reduce uncertainty before the test.",
                    },
                  ].map((item) => (
                    <div
                      key={item.fear}
                      className="min-w-0 rounded-lg border border-amber-200 bg-white p-4 sm:p-5"
                    >
                      <h3 className="break-words font-bold text-slate-900 mb-2">
                        {item.fear}
                      </h3>
                      <p className="break-words text-sm leading-relaxed text-slate-700">
                        {item.response}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dreams and Outcomes */}
              <div className="min-w-0 overflow-hidden rounded-2xl bg-primary p-5 text-white sm:p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-widest text-green-300 mb-3">
                  Why People Become Pilots
                </p>

                <h2 className="break-words text-2xl sm:text-3xl font-bold mb-4">
                  The Private Pilot Certificate Is More Than a License
                </h2>

                <p className="text-white/85 leading-relaxed mb-6">
                  For some students, flying is a lifelong dream. For others, it
                  is the first professional step toward instrument, commercial,
                  CFI, and airline training. Some want the freedom to take a
                  spouse, friend, or family member somewhere that would be
                  inconvenient by car. Others want a difficult skill that builds
                  confidence, judgment, discipline, and genuine happiness.
                </p>

                <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                  {[
                    "Experience the first solo flight—the moment the aircraft becomes completely your responsibility.",
                    "Turn years of watching airplanes into the ability to operate one yourself.",
                    "Build the foundation required for an instrument rating and professional pilot career.",
                    "Use aviation for recreation, travel, challenge, and time with people you care about.",
                    "Develop calm decision-making and confidence through a skill that demands real competence.",
                    "Join the small group of people who can plan, launch, navigate, and safely complete a flight.",
                  ].map((item) => (
                    <div key={item} className="flex min-w-0 items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-300" />
                      <p className="min-w-0 break-words text-sm leading-relaxed text-white/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="tel:424-493-2761"
                    className="block w-full min-w-0 sm:w-auto"
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      className="h-auto min-h-14 w-full min-w-0 whitespace-normal break-words px-4 py-3 text-center text-base font-bold leading-snug sm:w-auto sm:px-6"
                    >
                      <Phone className="h-5 w-5 shrink-0" />
                      Talk With a Flight Instructor
                    </Button>
                  </a>

                  <a
                    href="sms:4244932761"
                    className="block w-full min-w-0 sm:w-auto"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-auto min-h-14 w-full min-w-0 whitespace-normal break-words border-white/30 px-4 py-3 text-center text-base font-bold leading-snug text-white hover:bg-white/10 sm:w-auto sm:px-6"
                    >
                      Text 424-493-2761
                    </Button>
                  </a>
                </div>
              </div>

              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                  src="/images/wing-view-coast.webp"
                  alt="Southern California flying view available to trained Private Pilots"
                  className="h-72 w-full object-cover md:h-[430px]"
                  width="1600"
                  height="900"
                  loading="lazy"
                />
              </figure>

              {/* Service Area SEO */}
              <div
                id="service-area"
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
                  Private Pilot Lessons Near Los Angeles and the San Fernando
                  Valley
                </h2>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Our Van Nuys flight-training location is convenient for
                  students seeking Private Pilot lessons near Encino, Sherman
                  Oaks, Tarzana, Reseda, Northridge, Chatsworth, Woodland Hills,
                  West Hills, Calabasas, Hidden Hills, Studio City, Toluca Lake,
                  North Hollywood, Burbank, Glendale, Beverly Hills, Bel Air,
                  Brentwood, West Los Angeles, Malibu, Thousand Oaks, Agoura
                  Hills, and surrounding communities.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  Whether you are searching for a flight school near you,
                  affordable flight lessons in Los Angeles, accelerated pilot
                  training at Van Nuys Airport, a Private Pilot instructor in
                  the San Fernando Valley, or the best place to earn a Private
                  Pilot License in Southern California, call or text us to
                  discuss your training plan.
                </p>
              </div>

              {/* FAQ */}
              <div id="private-pilot-faq" className="scroll-mt-28">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Private Pilot Training Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      question:
                        "How much does a Private Pilot License cost at Van Nuys Airport?",
                      answer:
                        "Our estimated Private Pilot training cost is approximately $9,900–$14,500 in training expenses. The final amount depends on total flight time, training frequency, individual proficiency, study habits, weather, and scheduling. FAA examiner fees, the written test, medical examination, headset, ForeFlight, and renter's insurance are separate.",
                    },
                    {
                      question:
                        "What is your Private Pilot checkride pass rate?",
                      answer:
                        "Our Private Pilot students have achieved a 95% FAA checkride pass rate. We use structured FAA ACS-based preparation, mock oral reviews, maneuver evaluations, and final checkride-preparation flights before issuing an instructor recommendation.",
                    },
                    {
                      question: "Are your flight instructors experienced?",
                      answer:
                        "Our pilots and instructors bring decades of combined aviation experience. Students receive practical instruction focused on aircraft control, risk management, airport operations, air traffic control communication, navigation, emergency procedures, and FAA checkride standards.",
                    },
                    {
                      question:
                        "Is Accelerated Flight School a top-rated Van Nuys flight school?",
                      answer:
                        "Accelerated Flight School is positioned as one of the best and top-rated choices for personalized Private Pilot training at Van Nuys Airport. We focus on transparent pricing, direct access to instructors, structured training, consistent scheduling, checkride preparation, and a 95% pass rate.",
                    },
                    {
                      question:
                        "Do I need to pay the entire program cost upfront?",
                      answer:
                        "No. There is no large upfront payment. Students pay as they fly. This allows you to maintain control over your training schedule and expenses without prepaying the entire estimated program cost.",
                    },
                    {
                      question: "How often should I take flight lessons?",
                      answer:
                        "Flying two or three times per week usually produces better retention and faster progress. Students who fly infrequently may spend more lesson time reviewing previously learned skills.",
                    },
                    {
                      question:
                        "Can I complete accelerated Private Pilot training?",
                      answer:
                        "Yes. Accelerated training may be available for students who can fly consistently, complete ground study between lessons, maintain flexible scheduling, and meet each proficiency standard without unnecessary gaps.",
                    },
                    {
                      question:
                        "Can I begin flight training before taking the FAA written test?",
                      answer:
                        "Yes. You may begin flight training before completing the FAA knowledge test. However, completing the written test early can reduce distractions later and allows more attention to be placed on solo, cross-country, and checkride preparation.",
                    },
                    {
                      question: "When will I be allowed to fly solo?",
                      answer:
                        "Solo timing depends on proficiency rather than a fixed number of lessons. Before solo, you must demonstrate safe aircraft control, takeoffs, landings, go-arounds, traffic-pattern operations, emergency procedures, radio communication, and sound judgment. You must also complete the required pre-solo knowledge test and hold the required FAA student pilot and medical credentials.",
                    },
                    {
                      question: "What happens during the first flight lesson?",
                      answer:
                        "Your first lesson normally includes an introduction to the aircraft, preflight inspection, cockpit controls, engine start, taxi procedures, basic radio communication, takeoff, straight-and-level flight, turns, climbs, descents, approach, landing, and a postflight review.",
                    },
                    {
                      question: "Why train at a busy airport like Van Nuys?",
                      answer:
                        "Training at Van Nuys provides practical experience with air traffic control, complex taxi routes, controlled-airport procedures, radio communication, traffic awareness, wake turbulence, and Los Angeles airspace. These skills help prepare students for real-world flying beyond quiet training airports.",
                    },
                    {
                      question:
                        "How do I schedule a Private Pilot consultation or first lesson?",
                      answer:
                        "Call or text Accelerated Flight School at 424-493-2761. We will discuss your goals, schedule, previous experience, medical certificate, expected cost, instructor availability, aircraft availability, and the next available training date.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 rounded-xl p-5 md:p-6"
                    >
                      <h3 className="font-bold text-primary text-lg mb-2">
                        {faq.question}
                      </h3>

                      <p className="text-slate-700 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Conversion Section */}
              <div className="min-w-0 overflow-hidden bg-slate-900 text-white rounded-2xl p-5 sm:p-7 md:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                  Start Your Pilot Training
                </p>

                <h2 className="break-words text-2xl sm:text-3xl font-bold mb-4">
                  Speak Directly With a Van Nuys Flight Instructor
                </h2>

                <p className="text-slate-300 leading-relaxed mb-6">
                  You do not need to understand every FAA requirement before
                  calling. Tell us whether you are starting with zero flight
                  time, returning after a break, transferring from another
                  flight school, or trying to complete an unfinished Private
                  Pilot Certificate. We will explain the next step and build a
                  realistic training plan.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Ask about current aircraft availability",
                    "Discuss accelerated training options",
                    "Receive a realistic cost estimate",
                    "Review your previous flight hours",
                    "Ask about FAA medical requirements",
                    "Plan your written test preparation",
                    "Discuss instructor scheduling",
                    "Schedule your first flight lesson",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="tel:424-493-2761"
                    className="block w-full min-w-0 sm:w-auto"
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      className="h-auto min-h-14 w-full min-w-0 whitespace-normal break-words px-4 py-3 text-center text-base font-bold leading-snug sm:w-auto sm:px-6 sm:text-lg gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call 424-493-2761
                    </Button>
                  </a>

                  <a
                    href="sms:4244932761"
                    className="block w-full min-w-0 sm:w-auto"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-auto min-h-14 w-full min-w-0 whitespace-normal break-words px-4 py-3 text-center text-base font-bold leading-snug text-white border-white/30 hover:bg-white/10 sm:w-auto sm:px-6 sm:text-lg"
                    >
                      Text About Private Pilot Training
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div
              id="private-pilot-cost"
              className="order-1 min-w-0 space-y-6 scroll-mt-28"
            >
              <div className="min-w-0 overflow-hidden rounded-2xl bg-primary p-5 text-white shadow-xl sm:p-7 md:p-9">
                <div className="grid grid-cols-2 gap-2 mb-5"></div>

                <h2 className="text-xl font-bold mb-4 border-b border-white/20 pb-4">
                  Estimated Private Pilot Cost
                </h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-primary-foreground/80 uppercase tracking-wider font-bold mb-1">
                      Accelerated Estimate
                    </p>

                    <p className="break-words text-2xl sm:text-3xl font-bold text-white">
                      ~$9,900{" "}
                      <span className="text-base sm:text-lg font-normal opacity-80">
                        – $14,500
                      </span>
                    </p>

                    <p className="text-xs text-white/60 mt-1">
                      Estimated training costs only
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-primary-foreground/80 uppercase tracking-wider font-bold mb-1">
                      SoCal Average
                    </p>

                    <p className="text-xl font-bold text-white/70 line-through">
                      $15,000 – $25,000+
                    </p>
                  </div>

                  <div className="pt-3 bg-green-500/20 rounded-lg px-3 py-2">
                    <p className="text-xs font-bold text-green-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      No upfront payment — pay per flight
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/20 space-y-2 text-sm">
                    <p className="font-bold text-white/80 uppercase tracking-wider text-xs mb-2">
                      Additional Required Costs
                    </p>

                    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <span className="text-white/70">
                        <AviationTerm term="DPE" />{" "}
                        <AviationTerm term="Checkride" /> fee
                      </span>

                      <span className="whitespace-nowrap text-right font-bold">
                        ~$800–$1,000
                      </span>
                    </div>

                    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <span className="text-white/70">Written test fee</span>
                      <span className="whitespace-nowrap text-right font-bold">
                        ~$175
                      </span>
                    </div>

                    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <span className="text-white/70">Headset</span>
                      <span className="whitespace-nowrap text-right font-bold">
                        ~$100
                      </span>
                    </div>

                    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <span className="text-white/70">ForeFlight Basic</span>
                      <span className="whitespace-nowrap text-right font-bold">
                        $130/yr
                      </span>
                    </div>

                    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <span className="text-white/70">FAA Medical exam</span>
                      <span className="whitespace-nowrap text-right font-bold">
                        ~$100–$200
                      </span>
                    </div>

                    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <div className="min-w-0 flex items-start gap-1 text-white/70">
                        <Shield className="w-3.5 h-3.5 shrink-0" />
                        <span>Renter's Insurance</span>
                      </div>

                      <span className="whitespace-nowrap text-right font-bold">
                        ~$300/yr
                      </span>
                    </div>

                    <p className="text-xs text-white/50 italic">
                      Renter's insurance is required only for solo rental
                      without an instructor present.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20 mb-5">
                  <div className="flex gap-2 text-xs text-white/60">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />

                    <span>
                      An iPad with cellular and GPS is required for ForeFlight.
                      Official FAA textbooks are available free from the FAA.
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a href="tel:424-493-2761" className="block w-full">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="h-auto min-h-11 w-full min-w-0 whitespace-normal break-words px-3 py-2 text-center font-bold leading-snug gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call 424-493-2761
                    </Button>
                  </a>

                  <a href="sms:4244932761" className="block w-full">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-auto min-h-11 w-full min-w-0 whitespace-normal break-words px-3 py-2 text-center font-bold leading-snug border-white/30 hover:bg-white/10 text-white"
                    >
                      Text Us
                    </Button>
                  </a>

                  <Link
                    href="/van-nuys-accelerated-flight-school-pricing"
                    className="block w-full"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-auto min-h-11 w-full min-w-0 whitespace-normal break-words px-3 py-2 text-center font-bold leading-snug border-white/30 hover:bg-white/10 text-white"
                    >
                      View Full Pricing
                    </Button>
                  </Link>
                </div>

                <div className="mt-5 pt-5 border-t border-white/20">
                  <p className="text-center text-xs text-white/60 leading-relaxed">
                    Top-rated Private Pilot training at Van Nuys Airport with
                    experienced instructors and a 95% FAA checkride pass rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/instrument-rating-van-nuys"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:border-secondary hover:shadow-md"
            >
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                Next Rating
              </p>
              <p className="text-xl font-black text-primary">
                Instrument Rating
              </p>
            </Link>
            <Link
              href="/commercial-pilot-training-van-nuys"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:border-secondary hover:shadow-md"
            >
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                Career Training
              </p>
              <p className="text-xl font-black text-primary">
                Commercial Pilot
              </p>
            </Link>
            <Link
              href="/contact"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:border-secondary hover:shadow-md"
            >
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                Start Here
              </p>
              <p className="text-xl font-black text-primary">
                Request a Training Plan
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
