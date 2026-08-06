import React from "react";
import { Helmet } from "react-helmet-async";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Clock,
  CloudRain,
  Compass,
  DollarSign,
  ExternalLink,
  FileText,
  Gauge,
  GraduationCap,
  Headphones,
  Info,
  MapPin,
  Navigation,
  Phone,
  Plane,
  PlaneTakeoff,
  Radio,
  Route,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://acceleratedflightschool.net";
const PAGE_URL = `${SITE_URL}/instrument-rating-van-nuys`;

const faqs = [
  {
    question: "What does an Instrument Rating allow me to do?",
    answer:
      "An Instrument Rating allows a properly current and qualified pilot to operate under Instrument Flight Rules, including in instrument meteorological conditions, when the aircraft is properly equipped and the flight complies with the applicable FAA rules, clearances, procedures, and operating limitations.",
  },
  {
    question: "Do I need an Instrument Rating to become a professional pilot?",
    answer:
      "For most airplane career paths, yes. The rating removes major commercial-pilot limitations, is required for an airplane flight instructor certificate, and is part of the eligibility path toward an Airline Transport Pilot certificate.",
  },
  {
    question:
      "How many hours are required for an Instrument Rating under Part 61?",
    answer:
      "The standard Part 61 airplane requirements include 50 hours of cross-country pilot-in-command time, including 10 hours in airplanes, plus 40 hours of actual or simulated instrument time. At least 15 instrument hours must be received from an authorized instrument instructor, with additional specific training requirements.",
  },
  {
    question:
      "Can I begin instrument training before I have 50 cross-country hours?",
    answer:
      "Yes. You do not need to wait until all 50 cross-country PIC hours are complete before beginning instrument instruction. A training plan can combine instrument proficiency development with efficient cross-country time building.",
  },
  {
    question: "What is the 250-nautical-mile IFR cross-country requirement?",
    answer:
      "The required instrument cross-country is flown in an airplane with an authorized instructor under IFR on a filed flight plan. It must cover at least 250 nautical miles along airways or ATC-directed routing, include an instrument approach at each airport, and use three different kinds of approaches with navigation systems.",
  },
  {
    question:
      "Can a simulator or aviation training device reduce aircraft time?",
    answer:
      "Potentially. Credit depends on the exact device, its FAA authorization, the training provided, and the applicable limits in 14 CFR 61.65. We evaluate the device and training plan before promising any credit.",
  },
  {
    question: "What is a safety pilot?",
    answer:
      "A safety pilot occupies the other control seat while a rated pilot practices simulated instrument flight using a view-limiting device. The safety pilot must meet the certificate, qualification, visibility, control-seat, and medical requirements that apply to the role being performed.",
  },
  {
    question: "Does an Instrument Rating let me fly in every kind of weather?",
    answer:
      "No. An Instrument Rating expands legal capability and training, but it does not make every weather condition acceptable. Aircraft capability, icing, thunderstorms, turbulence, winds, ceilings, visibility, terrain, fuel, alternates, personal minimums, and pilot proficiency still control the decision.",
  },
  {
    question: "How do I stay instrument current after the checkride?",
    answer:
      "To act as PIC under IFR or in weather below VFR minimums, a pilot generally must have completed and logged six instrument approaches, holding procedures and tasks, and intercepting and tracking courses within the preceding six calendar months, or regain proficiency through the applicable FAA process.",
  },
  {
    question: "Where is your Instrument Rating training located?",
    answer:
      "Training is based at Van Nuys Airport in Los Angeles, serving pilots from the San Fernando Valley and surrounding communities including Sherman Oaks, Encino, Studio City, Burbank, Glendale, Calabasas, Woodland Hills, Northridge, Santa Clarita, Beverly Hills, and greater Los Angeles.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Instrument Rating Training at Van Nuys Airport",
  alternateName: [
    "IFR Training Van Nuys",
    "Instrument Flight Training Los Angeles",
    "Instrument Rating Course Los Angeles",
  ],
  description:
    "FAA ACS-structured Instrument Rating training at Van Nuys Airport for Los Angeles and San Fernando Valley pilots. Includes IFR procedures, approaches, cross-country planning, ATC communication, weather, safety-pilot strategy, and checkride preparation.",
  serviceType: "Instrument Rating Airplane Training",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: PAGE_URL,
  areaServed: [
    "Van Nuys",
    "Los Angeles",
    "San Fernando Valley",
    "Sherman Oaks",
    "Encino",
    "Studio City",
    "Burbank",
    "Glendale",
    "Calabasas",
    "Woodland Hills",
    "Northridge",
    "Santa Clarita",
    "Beverly Hills",
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
      minPrice: "8500",
      maxPrice: "15000",
      priceCurrency: "USD",
    },
    description:
      "Estimated Instrument Rating training cost of approximately $8,500 to $15,000 depending on starting experience, proficiency, training frequency, aircraft time, ground instruction, and legal use of approved training devices or safety-pilot practice.",
    seller: { "@id": `${SITE_URL}/#organization` },
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${PAGE_URL}#course`,
  name: "Instrument Rating Airplane Course",
  description:
    "Structured instrument flight training covering FAA Instrument Rating Airplane ACS knowledge, risk management, and flight proficiency areas.",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: PAGE_URL,
  educationalCredentialAwarded: "FAA Instrument Rating - Airplane",
  teaches: [
    "IFR flight planning",
    "Instrument scan and aircraft control",
    "ATC clearances and communication",
    "Holding procedures",
    "IFR navigation",
    "Precision and nonprecision approaches",
    "Missed approaches",
    "Partial-panel and emergency procedures",
    "Instrument checkride preparation",
  ],
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "In person",
    location: {
      "@type": "Place",
      name: "Van Nuys Airport",
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

const breadcrumbSchema = {
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
      name: "Instrument Rating Training Van Nuys",
      item: PAGE_URL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const careerBenefits = [
  {
    title: "Professional pilot pathway",
    text: "The rating is a practical gateway to commercial flying, flight instructing, advanced certificates, turbine training, and airline preparation.",
    icon: Briefcase,
  },
  {
    title: "More usable travel days",
    text: "An instrument-qualified pilot can operate under IFR when ceilings, visibility, or cloud layers make a VFR trip impractical, provided the pilot, aircraft, and conditions are suitable.",
    icon: CloudRain,
  },
  {
    title: "Stronger aircraft control",
    text: "Instrument training develops precise attitude, altitude, heading, airspeed, power, trim, navigation, and workload-management habits.",
    icon: Gauge,
  },
  {
    title: "Better weather judgment",
    text: "You learn to analyze reports, forecasts, icing risk, thunderstorms, winds, alternates, fuel, escape options, and changing conditions as one operating system.",
    icon: Shield,
  },
  {
    title: "Advanced ATC competence",
    text: "You practice clearances, readbacks, route changes, vectors, altitude assignments, holds, approach clearances, missed approaches, and lost-communications planning.",
    icon: Headphones,
  },
  {
    title: "Foundation for safer proficiency",
    text: "The rating gives you the framework to keep improving through recurrent practice, instrument currency, proficiency checks, and scenario-based IFR flying.",
    icon: Target,
  },
];

const acsAreas = [
  {
    number: "I",
    title: "Preflight Preparation",
    detail:
      "Pilot qualifications, weather information, cross-country planning, fuel, alternates, performance, route selection, departure and arrival planning, and risk assessment.",
  },
  {
    number: "II",
    title: "Preflight Procedures",
    detail:
      "IFR-related aircraft systems, flight instruments, navigation equipment, database status, pitot-static and vacuum/electrical considerations, and the instrument flight-deck check.",
  },
  {
    number: "III",
    title: "ATC Clearances and Procedures",
    detail:
      "Copying and reading back clearances, complying with restrictions, requesting clarification, managing reroutes, and entering, maintaining, and exiting holding patterns.",
  },
  {
    number: "IV",
    title: "Flight by Reference to Instruments",
    detail:
      "Instrument scan, straight-and-level flight, climbs, descents, turns, airspeed changes, trim, workload management, and recovery from unusual attitudes.",
  },
  {
    number: "V",
    title: "Navigation Systems",
    detail:
      "Intercepting and tracking courses, GPS/RNAV use, conventional navigation, DME arcs when applicable, departures, en route operations, arrivals, automation, and database awareness.",
  },
  {
    number: "VI",
    title: "Instrument Approach Procedures",
    detail:
      "Nonprecision approaches, precision approaches, missed approaches, circling approaches, landing from an approach, stabilized approach criteria, minimums, and required visual references.",
  },
  {
    number: "VII",
    title: "Emergency Operations",
    detail:
      "Lost communications, equipment failures, partial-panel operations, approach with loss of primary flight indications, abnormal automation behavior, and sound diversion decisions.",
  },
  {
    number: "VIII",
    title: "Postflight Procedures",
    detail:
      "Postflight instrument and equipment checks, discrepancy documentation, logbook accuracy, and identifying maintenance items that affect future IFR legality or reliability.",
  },
];

const trainingTopics = [
  "Instrument scan, attitude instrument flying, trim, and power control",
  "Straight-and-level flight, climbs, descents, standard-rate turns, and timed turns",
  "Unusual-attitude recognition and recovery by reference to instruments",
  "IFR clearances, CRAFT organization, readbacks, amendments, and reroutes",
  "Departure procedures, obstacle departure procedures, SIDs, and climb planning",
  "Victor airways, T-routes, direct routing, MEAs, MOCAs, OROCAs, and GPS navigation",
  "Holding entries, wind correction, timing, EFC awareness, and workload control",
  "Arrival procedures, STARs when applicable, approach briefings, and descent planning",
  "ILS and localizer procedures",
  "RNAV/GPS approaches including applicable lateral and vertical guidance",
  "VOR and other nonprecision approach procedures when available and appropriate",
  "Missed approaches, published holds, diversion, and re-briefing",
  "Circling approaches and landing from an instrument approach",
  "Weather products, trends, icing, convective weather, turbulence, winds, and ceilings",
  "Alternate requirements, fuel planning, personal minimums, and escape planning",
  "Autopilot and automation management when installed",
  "Partial-panel flight, system failures, lost communications, and abnormal indications",
  "Single-pilot resource management, checklist use, and task prioritization",
  "FAA knowledge-test preparation, oral-exam preparation, and mock checkrides",
];

const localAreas = [
  "Van Nuys",
  "Sherman Oaks",
  "Encino",
  "Studio City",
  "Tarzana",
  "Reseda",
  "Woodland Hills",
  "Northridge",
  "Chatsworth",
  "Burbank",
  "Glendale",
  "Calabasas",
  "Westlake Village",
  "Santa Clarita",
  "Beverly Hills",
  "Greater Los Angeles",
];

export function InstrumentRatingPage() {
  return (
    <div className="w-full bg-slate-50">
      <Seo
        title="Instrument Rating Training Van Nuys & Los Angeles | IFR Flight School"
        description="Instrument Rating training at Van Nuys Airport for Los Angeles pilots. Learn IFR procedures, approaches, weather, ATC, cross-country planning and checkride skills. Pay as you fly."
        canonical={PAGE_URL}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

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

        <div className="container relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                Van Nuys Airport · Los Angeles, California
              </div>

              <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Instrument Rating Training in Van Nuys and Los Angeles
              </h1>

              <p className="mb-5 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
                Learn to plan, fly, and manage complete IFR flights using
                aircraft instruments, navigation systems, weather analysis, and
                Air Traffic Control procedures.
              </p>

              <p className="mb-8 max-w-3xl text-base leading-relaxed text-white/75">
                Structured airplane instrument training for private pilots who
                want greater travel capability, stronger weather judgment, and a
                direct path toward Commercial Pilot, CFI, CFII, ATP, corporate,
                charter, and airline goals.
              </p>

              <div className="mb-8 grid max-w-3xl gap-3 sm:grid-cols-2">
                {[
                  "FAA ACS-structured training",
                  "Pay as you fly — no large upfront payment",
                  "IFR cross-country and approach training",
                  "Safety-pilot and time-building strategy",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm font-semibold text-white/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="tel:424-493-2761">
                  <Button
                    size="lg"
                    className="h-14 w-full gap-2 px-7 text-base font-bold sm:w-auto"
                  >
                    <Phone className="h-5 w-5" />
                    Call or Text 424-493-2761
                  </Button>
                </a>
                <Link href="/van-nuys-accelerated-flight-school-contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 w-full border-white/40 bg-white/10 px-7 text-base font-bold text-white hover:bg-white hover:text-primary sm:w-auto"
                  >
                    Request an Instrument Plan
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-secondary">
                Instrument Rating Estimate
              </p>
              <p className="mb-2 text-4xl font-black text-white">
                ~$8,500–$15,000
              </p>
              <div className="mb-5 rounded-xl border border-red-300/30 bg-white/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">
                  Southern California Average
                </p>
                <p className="mt-1 text-2xl font-black text-red-300 line-through">
                  $15,000–$25,000
                </p>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-white/70">
                Estimate varies with your existing cross-country and instrument
                time, proficiency, flight frequency, ground instruction,
                aircraft time, checkride preparation, and legal use of approved
                devices or safety-pilot practice.
              </p>

              {/* PROMINENT CHECKRIDE EXAMINER AVAILABILITY COMPARISON */}
              <div className="mb-6 rounded-xl border border-green-300/40 bg-green-950/25 p-4">
                <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.16em] text-green-300">
                  Checkride Examiner Availability
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-green-300/30 bg-white/10 p-3 text-center">
                    <p className="text-[10px] font-black uppercase tracking-wider text-green-300">
                      Accelerated Flight School
                    </p>
                    <p className="mt-1 text-2xl font-black text-white">
                      1–3 weeks
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 p-3 text-center">
                    <p className="text-[10px] font-black uppercase tracking-wider text-white/60">
                      Typical SoCal Wait Elsewhere
                    </p>
                    <p className="mt-1 text-2xl font-black text-white/80">
                      2–5 months
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-center text-xs leading-relaxed text-white/70">
                  We coordinate Instrument Rating examiner availability early so
                  qualified applicants can typically take the checkride within
                  1–3 weeks after training completion instead of waiting 2–5
                  months elsewhere in Southern California.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/20 pt-5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/70">Aircraft wet rate</span>
                  <strong>From $145/hr</strong>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/70">CFII instruction</span>
                  <strong>$35/hr</strong>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/70">Combined dual rate</span>
                  <strong>From $180/hr</strong>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/70">Fleet range</span>
                  <strong>$145–$175/hr</strong>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-green-400/30 bg-green-400/10 p-4">
                <p className="flex items-start gap-2 text-sm font-bold text-green-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Pay for training as it is completed rather than prepaying the
                  entire rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "40 hours",
                label: "Actual or simulated instrument time",
              },
              {
                value: "15 hours",
                label: "Minimum with an instrument instructor",
              },
              {
                value: "50 hours",
                label: "Cross-country PIC under standard Part 61 path",
              },
              { value: "250 NM", label: "Required IFR training cross-country" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center"
              >
                <p className="text-2xl font-black text-primary">{fact.value}</p>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-600">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Why pilots add the rating
            </p>
            <h2 className="mx-auto mb-4 max-w-4xl text-3xl font-black text-primary md:text-4xl">
              What an Instrument Rating Changes
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              A Private Pilot certificate teaches you to operate visually. An
              Instrument Rating adds the ability to fly a complete
              procedure-based system: weather analysis, IFR planning, clearance
              management, precise aircraft control, navigation, approaches,
              missed approaches, and contingency decisions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerBenefits.map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
                Career progression
              </p>
              <h2 className="mb-5 text-3xl font-black text-primary md:text-4xl">
                Why the Instrument Rating Is Necessary for Most Professional
                Pilot Paths
              </h2>

              <div className="space-y-5 text-slate-700">
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <h3 className="font-bold text-primary">
                      Commercial Pilot privileges
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      A commercial airplane pilot without the appropriate
                      instrument rating receives a limitation prohibiting
                      passenger carriage for hire on cross-country flights
                      beyond 50 nautical miles or at night. The rating removes
                      that major limitation when the FAA requirements are
                      satisfied.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <h3 className="font-bold text-primary">
                      Airplane CFI eligibility
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      An applicant for an airplane flight instructor certificate
                      must hold the appropriate commercial or ATP certificate
                      and the instrument rating or instrument privileges
                      required for the instructor rating sought.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <h3 className="font-bold text-primary">
                      CFII and instrument instruction
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      To teach instrument students for an Instrument Rating, the
                      instructor must hold the appropriate instrument instructor
                      qualification. Your own Instrument Rating is the
                      foundation for that advanced instructor path.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <h3 className="font-bold text-primary">
                      ATP and airline pathway
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      The standard ATP eligibility path includes a commercial
                      pilot certificate with an instrument rating. Professional
                      operators also evaluate IFR knowledge, instrument
                      proficiency, procedures, judgment, and crew coordination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/commercial-pilot-training-van-nuys">
                  <Button variant="outline" className="gap-2 font-bold">
                    Commercial Pilot Training <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/cfi-training-van-nuys">
                  <Button variant="outline" className="gap-2 font-bold">
                    CFI and CFII Training <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/airline-pilot-path-van-nuys">
                  <Button variant="outline" className="gap-2 font-bold">
                    Airline Pilot Path <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src="/images/warrior-exterior.png"
                alt="Piper PA-28-161 Warrior II on a sunny ramp during instrument flight training in Los Angeles"
                className="h-80 w-full object-cover"
                width="1000"
                height="700"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-primary">
                  Typical certificate progression
                </h3>
                <div className="space-y-3">
                  {[
                    "Private Pilot Certificate",
                    "Instrument Rating",
                    "Commercial Pilot Certificate",
                    "CFI and CFII",
                    "Multi-Engine and advanced experience",
                    "ATP eligibility and professional operations",
                  ].map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-slate-700">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <AlertTriangle className="mb-4 h-10 w-10 text-amber-600" />
                <h2 className="mb-3 text-3xl font-black text-amber-950">
                  What the Rating Does Not Mean
                </h2>
                <p className="leading-relaxed text-amber-900/80">
                  An Instrument Rating is not permission to launch into every
                  cloud, storm, icing forecast, low ceiling, strong wind, or
                  marginal system. It gives you legal privileges and a decision
                  framework; it does not eliminate aircraft limitations, weather
                  physics, or proficiency limits.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "The airplane must be equipped and legal for the operation.",
                  "The pilot must be current, proficient, medically qualified, and prepared.",
                  "Thunderstorms, icing, turbulence, terrain, and winds may still make the flight unacceptable.",
                  "Published minimums are regulatory floors, not automatic personal operating targets.",
                  "Fuel, alternates, escape routes, and changing forecasts remain central decisions.",
                  "A safe no-go, delay, diversion, or missed approach is a successful IFR decision.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-amber-200 bg-white/70 p-4"
                  >
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm font-medium leading-relaxed text-amber-950/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
                Local IFR training environment
              </p>
              <h2 className="mb-5 text-3xl font-black md:text-4xl">
                Instrument Training at Van Nuys Airport
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-white/80">
                Van Nuys places instrument students inside the Los Angeles
                airspace system from the beginning. Training emphasizes concise
                radio work, clearance organization, rapid task prioritization,
                route changes, controlled-airspace awareness, and disciplined
                cockpit setup.
              </p>
              <p className="mb-6 leading-relaxed text-white/70">
                Southern California also creates useful scenario variety:
                coastal marine layers, mountain and basin terrain, busy arrival
                corridors, changing winds, warm-weather performance
                considerations, and a wide network of airports with different
                instrument procedures. Specific airports and approaches are
                selected according to weather, NOTAMs, aircraft status, traffic,
                and training objectives.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Busy ATC communication environment",
                  "Complex airspace and route planning",
                  "Coastal and inland weather differences",
                  "Multiple nearby practice-airport options",
                  "Real IFR clearance and flight-plan workflow",
                  "Scenario-based go/no-go and diversion decisions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm font-semibold text-white/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl">
              <img
                src="/images/wing-view-coast.webp"
                alt="Southern California coastal weather viewed from an airplane"
                className="h-80 w-full object-cover"
                width="1000"
                height="700"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Train for complete IFR missions
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  The objective is not merely to perform approaches. It is to
                  manage the entire flight from weather briefing and aircraft
                  legality through clearance, departure, en route changes,
                  arrival, approach, missed approach, landing, and postflight
                  review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              FAA Part 61 requirements
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              Instrument Rating Airplane Eligibility and Aeronautical Experience
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              The items below summarize the standard airplane path. Your exact
              credit depends on your logbook, certificates, previous training,
              device use, and whether you are pursuing a combined
              certificate-and-rating path.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-primary">
                <GraduationCap className="h-7 w-7 text-secondary" />
                Basic eligibility
              </h3>
              <div className="space-y-4">
                {[
                  "Hold at least a current Private Pilot certificate, or be concurrently applying for a Private Pilot certificate, with the appropriate airplane rating.",
                  "Read, speak, write, and understand English, subject to FAA provisions for medical limitations.",
                  "Complete and log the required ground training or an acceptable home-study course.",
                  "Receive the required instructor endorsements for the knowledge test and practical test.",
                  "Pass the FAA Instrument Rating Airplane knowledge test and practical test.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-primary">
                <Clock className="h-7 w-7 text-secondary" />
                Standard airplane experience
              </h3>
              <div className="space-y-4">
                {[
                  "50 hours of cross-country time as pilot in command, including at least 10 hours in an airplane.",
                  "40 hours of actual or simulated instrument time in the required areas of operation.",
                  "At least 15 hours of instrument time from an authorized instructor who holds an instrument-airplane rating.",
                  "At least 3 hours of instrument flight training in an appropriate airplane within 2 calendar months before the practical test.",
                  "One required IFR cross-country training flight meeting the 250-nautical-mile and approach requirements.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <div className="flex gap-4">
              <Info className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
              <div>
                <h3 className="mb-2 font-bold text-blue-950">
                  You may start before reaching 50 cross-country PIC hours
                </h3>
                <p className="text-sm leading-relaxed text-blue-900/80">
                  The 50-hour total is an eligibility requirement for the
                  standard path, not a reason to postpone all instrument
                  instruction. Starting earlier can let you build scan,
                  procedures, weather knowledge, and IFR planning while
                  designing qualifying cross-country flights that also advance
                  your instrument goals.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="mb-4 text-2xl font-bold text-primary">
              The required 250 NM IFR cross-country
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Filed and flown under IFR",
                  text: "The flight is conducted with an authorized instructor under Instrument Flight Rules with a flight plan filed with ATC.",
                  icon: FileText,
                },
                {
                  title: "At least 250 nautical miles",
                  text: "The route follows airways or routing directed by an Air Traffic Control facility and meets the required total distance.",
                  icon: Route,
                },
                {
                  title: "Three kinds of approaches",
                  text: "The flight includes an instrument approach at each airport and three different kinds of approaches using navigation systems.",
                  icon: Navigation,
                },
              ].map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <Icon className="mb-3 h-6 w-6 text-secondary" />
                  <h4 className="mb-2 font-bold text-primary">{title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Checkride-aligned curriculum
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              FAA Instrument Rating Airplane ACS Areas of Operation
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              Training is organized around the same knowledge, risk-management,
              and flight-proficiency structure used on the FAA practical test.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {acsAreas.map((area) => (
              <div
                key={area.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-black text-white">
                    {area.number}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-primary">
                      {area.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {area.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row">
            <div>
              <h3 className="font-bold text-primary">
                Official FAA references
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Use the current regulation and ACS as the controlling references
                for eligibility and practical-test standards.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-B/section-61.65"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="gap-2 font-bold">
                  14 CFR 61.65 <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.faa.gov/training_testing/testing/acs/instrument_rating_airplane_acs_8.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="gap-2 font-bold">
                  FAA Instrument ACS <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
                What you will learn
              </p>
              <h2 className="mb-5 text-3xl font-black text-primary md:text-4xl">
                Complete Instrument Flight Training Topics
              </h2>
              <p className="mb-6 leading-relaxed text-slate-700">
                Instrument training is more than wearing foggles and flying an
                ILS. The course integrates aircraft control, procedures,
                regulations, navigation, weather, ATC, systems, automation,
                judgment, and checkride standards into repeatable cockpit
                workflows.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src="/images/cessna-skyhawk.webp"
                  alt="Cessna 172 Skyhawk in flight during IFR training at Van Nuys"
                  className="h-72 w-full object-cover"
                  width="900"
                  height="650"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    Replace this image later with a high-resolution photo
                    showing the exact instrument panel, GPS, radios, and
                    instructor-student cockpit setup used for the course.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {trainingTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-sm font-medium leading-relaxed text-slate-700">
                    {topic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Approaches and procedures
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              Instrument Approaches You Learn to Brief, Fly, and Manage
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "ILS and Localizer",
                text: "Course guidance, glideslope management when available, intercepts, descent planning, decision altitude, missed approach, and localizer-only considerations.",
                icon: Radio,
              },
              {
                title: "RNAV / GPS",
                text: "Loading and activating procedures, waypoint sequencing, approach modes, integrity and annunciations, lateral guidance, vertical guidance when authorized, and missed-approach sequencing.",
                icon: Navigation,
              },
              {
                title: "Nonprecision Approaches",
                text: "Minimum descent altitude, step-down fixes, descent planning, stabilized techniques, timing when applicable, and disciplined missed-approach decisions.",
                icon: Compass,
              },
              {
                title: "Circling and Missed Approaches",
                text: "Protected-area awareness, aircraft category, visual maneuvering, maintaining airport contact, transition to landing, power and configuration changes, and published missed procedures.",
                icon: Plane,
              },
            ].map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm leading-relaxed text-slate-700">
              <strong className="text-primary">
                Procedure availability changes.
              </strong>{" "}
              Specific approach types depend on current charts, NOTAMs,
              navigation equipment, aircraft capability, database status,
              airport conditions, weather, and examiner requirements. Training
              is built around current, legal procedures rather than a fixed
              promise that a particular approach will always be available.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-black text-primary">
                <Users className="h-7 w-7 text-secondary" />
                Safety Pilot Strategy
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700">
                When a rated pilot practices simulated instrument flight in an
                airplane using a view-limiting device, the other control seat
                must be occupied by a qualified safety pilot who maintains the
                required visual lookout. This can reduce instructor expense
                during selected practice flights after your CFII determines that
                the session is appropriate.
              </p>
              <div className="space-y-3">
                {[
                  "The safety pilot must hold at least the appropriate Private Pilot certificate and category/class ratings.",
                  "The safety pilot must have adequate forward and side visibility, or a competent observer must supplement the lookout.",
                  "The airplane must have the required functioning controls for simulated instrument flight.",
                  "PIC responsibility, logging, medical qualification, BasicMed applicability, and expense sharing must be decided correctly before the flight.",
                  "Only the time actually flown solely by reference to instruments may be logged as instrument time.",
                  "For instrument-experience logging, record the approach location and type and the safety pilot's name when required.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm leading-relaxed text-amber-900">
                  <strong>BasicMed detail:</strong> a safety pilot relying on
                  BasicMed must also be acting as PIC; BasicMed does not cover a
                  person who is only serving as a required safety pilot without
                  acting as PIC.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-black text-primary">
                <Gauge className="h-7 w-7 text-secondary" />
                Simulator and Training-Device Credit
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700">
                Approved devices can be valuable for procedures, scan, holds,
                approaches, failures, and repetition without burning aircraft
                fuel. But the amount of credit is not determined by the word
                “simulator” alone.
              </p>
              <div className="space-y-3">
                {[
                  "A BATD may provide up to 10 hours of credit when the FAA authorization and training conditions are satisfied.",
                  "An AATD may provide up to 20 hours of credit when the FAA authorization and training conditions are satisfied.",
                  "A full flight simulator or flight training device may have different limits, including higher credit in certain approved Part 142 training.",
                  "Except for the specific Part 142 provision, total combined device credit toward the 40-hour requirement is generally capped at 20 hours.",
                  "An authorized instructor must provide or supervise the creditable training and make the required record entries.",
                  "The device's current FAA Letter of Authorization controls what tasks and hours may be credited.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm leading-relaxed text-blue-900">
                  We verify the device authorization before quoting credit. This
                  avoids the common mistake of advertising 20 or 30 simulator
                  hours without identifying the exact legal basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Accelerated structure
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              A Practical Instrument Rating Training Sequence
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              The sequence is adjusted to your logbook, knowledge-test status,
              proficiency, aircraft availability, weather, and training
              frequency. Accelerated progress comes from continuity and
              preparation, not skipping required proficiency.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Logbook and readiness audit",
                text: "Review cross-country PIC time, prior simulated or actual instrument time, endorsements, medical qualification, flight review, knowledge-test plan, aircraft familiarity, and device credit.",
              },
              {
                step: "2",
                title: "Instrument fundamentals",
                text: "Build scan, trim, power control, attitude instrument flying, climbs, descents, turns, airspeed changes, unusual attitudes, and cockpit organization.",
              },
              {
                step: "3",
                title: "Clearances, navigation, and holds",
                text: "Integrate IFR charts, route structure, GPS and conventional navigation, clearances, readbacks, reroutes, holds, departures, arrivals, and workload management.",
              },
              {
                step: "4",
                title: "Approach systems",
                text: "Develop repeatable briefings and stabilized procedures for precision, nonprecision, RNAV, localizer, missed, circling, and landing tasks as available.",
              },
              {
                step: "5",
                title: "Cross-country and scenario training",
                text: "Fly complete IFR missions with weather decisions, alternates, fuel, system failures, route changes, diversions, missed approaches, and the required long IFR cross-country.",
              },
              {
                step: "6",
                title: "ACS checkride preparation",
                text: "Complete oral review, knowledge-test deficiency review, aircraft documents and systems, mock checkrides, final 3-hour requirement, endorsements, and DPE coordination.",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-lg font-black text-white">
                  {phase.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  {phase.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {phase.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
                Cost control
              </p>
              <h2 className="mb-5 text-3xl font-black text-primary md:text-4xl">
                How to Reduce Instrument Rating Cost Without Reducing Training
                Quality
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Fly frequently",
                    text: "Long gaps create relearning. Instrument scan, procedures, radio flow, and approach setup are perishable skills, so consistency usually lowers total repetition.",
                  },
                  {
                    title: "Arrive prepared",
                    text: "Complete chair flying, approach briefings, route study, weather analysis, checklist review, and avionics practice before the Hobbs meter starts.",
                  },
                  {
                    title: "Finish the knowledge test early",
                    text: "A completed written exam lets flight lessons focus on application rather than introducing every regulation and chart concept from zero.",
                  },
                  {
                    title: "Build cross-country time intelligently",
                    text: "Plan qualifying PIC cross-country flights that also strengthen weather, navigation, cockpit management, and instrument-procedure familiarity.",
                  },
                  {
                    title: "Use legal safety-pilot practice selectively",
                    text: "After receiving sufficient instruction, selected simulated-instrument practice can reinforce scan and procedures without paying a CFII for every repetition.",
                  },
                  {
                    title: "Use approved devices for repetition",
                    text: "When legally creditable and instructionally useful, devices can compress holds, approaches, failures, and avionics practice into focused sessions.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <DollarSign className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
                    <div>
                      <h3 className="font-bold text-primary">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-slate-200 bg-primary p-7 text-white shadow-lg md:p-8">
                <h2 className="mb-5 text-2xl font-black">Costs to plan for</h2>
                <div className="space-y-4 text-sm">
                  {[
                    ["Estimated training range", "~$8,500–$15,000"],
                    ["Southern California average", "$15,000–$25,000"],
                    ["Aircraft wet rate", "From $145/hr"],
                    ["CFII instruction", "$35/hr"],
                    ["Combined dual rate", "From $180/hr"],
                    ["Fleet range", "$145–$175/hr"],
                    ["DPE fee", "Confirm current examiner quote"],
                    [
                      "FAA knowledge test",
                      "Confirm current testing-center fee",
                    ],
                    ["Charts / EFB / subscriptions", "Depends on chosen tools"],
                    ["Headset and supplies", "Depends on existing equipment"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 border-b border-white/15 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-white/70">{label}</span>
                      <strong className="text-right text-white">{value}</strong>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-relaxed text-white/60">
                  Rates and third-party fees can change. Confirm current pricing
                  before scheduling. The training estimate is not a fixed-price
                  guarantee because proficiency and starting aeronautical
                  experience vary.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <BookOpen className="h-6 w-6 text-secondary" />
                  Recommended preparation before accelerated training
                </h3>
                <div className="space-y-3">
                  {[
                    "Bring a complete and legible pilot logbook for an eligibility audit.",
                    "Complete or actively study for the Instrument Rating Airplane knowledge test.",
                    "Review the aircraft POH, avionics guides, checklists, and required inspections.",
                    "Set up current charts and an electronic flight bag before intensive training begins.",
                    "Practice copying clearances and briefing approaches on the ground.",
                    "Schedule enough consecutive availability to preserve continuity.",
                    "Resolve medical, aircraft checkout, insurance, or renter qualification issues early.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <p className="text-sm leading-relaxed text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-black text-primary">
                <PlaneTakeoff className="h-7 w-7 text-secondary" />
                After You Earn the Rating
              </h2>
              <p className="mb-5 leading-relaxed text-slate-700">
                Passing the checkride gives you the rating. Remaining legal and
                capable requires continuing instrument experience and judgment.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Maintain instrument recency",
                    text: "Within the preceding six calendar months, complete and log the required six approaches, holding procedures and tasks, and intercepting and tracking courses in an aircraft or qualifying device combination.",
                  },
                  {
                    title: "Regain proficiency when needed",
                    text: "If the recency window is missed, use the applicable FAA grace period and, when required, complete an Instrument Proficiency Check with an authorized person before acting as PIC under IFR.",
                  },
                  {
                    title: "Set personal minimums",
                    text: "Build limits for ceiling, visibility, crosswind, turbulence, convective activity, icing risk, night operations, alternates, fuel, and unfamiliar airports based on actual proficiency and aircraft capability.",
                  },
                  {
                    title: "Keep learning",
                    text: "Use recurrent instruction, scenario flights, device sessions, approach practice, weather review, avionics updates, and periodic partial-panel work to prevent procedural decay.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-l-4 border-secondary pl-4"
                  >
                    <h3 className="font-bold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-black text-primary">
                <CalendarClock className="h-7 w-7 text-secondary" />
                Checkride Coordination
              </h2>
              <p className="mb-5 leading-relaxed text-slate-700">
                We begin practical-test planning before the final lesson rather
                than waiting until every training item is complete. That
                includes reviewing eligibility, identifying remaining
                aeronautical experience, tracking the knowledge test and
                endorsements, organizing aircraft documents, and contacting
                available examiners as readiness becomes predictable.
              </p>
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-secondary/30 bg-white p-5 text-center shadow-sm">
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.16em] text-secondary">
                    Accelerated Flight School
                  </p>
                  <p className="text-3xl font-black text-primary">1–3 weeks</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Typical checkride availability after training completion
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                    Typical Southern California Wait
                  </p>
                  <p className="text-3xl font-black text-slate-500">
                    2–5 months
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Common wait elsewhere for an available examiner
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Early logbook and IACRA review",
                  "Knowledge-test deficiency review",
                  "Aircraft maintenance and document check",
                  "Final 3-hour training-window planning",
                  "Mock oral and mock flight",
                  "Examiner outreach based on actual readiness",
                  "Backup planning for weather, maintenance, or schedule changes",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-xl border border-secondary/20 bg-white p-4 text-sm font-semibold leading-relaxed text-slate-700">
                We coordinate examiner scheduling early so qualified Instrument
                Rating applicants can typically complete the checkride within
                1–3 weeks after training, compared with a typical 2–5 month wait
                elsewhere in Southern California.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
                Local service area
              </p>
              <h2 className="mb-5 text-3xl font-black text-primary md:text-4xl">
                Instrument Flight Training Near Los Angeles Communities
              </h2>
              <p className="mb-6 leading-relaxed text-slate-700">
                Training is based at Van Nuys Airport, making the program
                accessible to pilots throughout the San Fernando Valley, west
                Los Angeles, the Conejo Valley, Burbank, Glendale, and nearby
                communities.
              </p>
              <Link href="/flight-school-locations-los-angeles">
                <Button variant="outline" className="gap-2 font-bold">
                  View All Areas Served <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {localAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-secondary" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Instrument Rating FAQ
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              Common Questions About IFR Training
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-primary">
                  <span>{faq.question}</span>
                  <span className="text-2xl font-light text-secondary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <CloudRain className="mx-auto mb-5 h-12 w-12 text-secondary" />
          <h2 className="mb-4 text-3xl font-black md:text-4xl">
            Start Your Instrument Rating at Van Nuys Airport
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/75">
            Send us your total time, cross-country PIC time, instrument time,
            knowledge-test status, recent flight experience, and weekly
            availability. We will build a training estimate around your actual
            starting point.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:424-493-2761">
              <Button
                size="lg"
                className="h-14 w-full gap-2 px-8 text-lg font-bold sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call or Text 424-493-2761
              </Button>
            </a>
            <Link href="/van-nuys-accelerated-flight-school-contact">
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-full border-white/40 bg-white/10 px-8 text-lg font-bold text-white hover:bg-white hover:text-primary sm:w-auto"
              >
                Request a Training Plan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
