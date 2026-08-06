import React from "react";
import { Helmet } from "react-helmet-async";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Clock,
  Compass,
  DollarSign,
  ExternalLink,
  FileCheck2,
  FileText,
  Gauge,
  GraduationCap,
  Info,
  MapPin,
  Navigation,
  Phone,
  Plane,
  PlaneTakeoff,
  Route,
  Shield,
  Target,
  TimerReset,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

const SITE_URL = "https://acceleratedflightschool.net";
const PAGE_URL = `${SITE_URL}/commercial-pilot-training-van-nuys`;

const faqs = [
  {
    question: "What does a Commercial Pilot certificate allow me to do?",
    answer:
      "A Commercial Pilot certificate allows you to act as pilot in command for compensation or hire when the flight, aircraft, operator, and operation comply with all applicable FAA rules. The certificate is necessary, but it does not by itself authorize every paid flight or allow a pilot to create an unrestricted charter business.",
  },
  {
    question:
      "Is a Commercial Pilot certificate the same as becoming an airline pilot?",
    answer:
      "No. It is a major professional certificate and a required step on the usual airline path, but airline first officers generally need an Airline Transport Pilot certificate or qualifying Restricted ATP privileges, appropriate experience, medical qualification, training, and employment by an authorized operator.",
  },
  {
    question:
      "How many hours are required for a Commercial Pilot certificate under Part 61?",
    answer:
      "The standard Part 61 airplane single-engine path requires at least 250 hours of flight time and specific powered-aircraft, airplane, pilot-in-command, cross-country, instrument, advanced-airplane, day, night, solo or performing-duties-of-PIC, and practical-test preparation experience under 14 CFR 61.129(a).",
  },
  {
    question: "Do all 250 hours have to be expensive dual instruction?",
    answer:
      "No. Only specified portions must be training with an authorized instructor. A large part of the pathway is normally accumulated through qualifying pilot-in-command and cross-country flying. The efficient approach is to audit the logbook first and make each remaining flight satisfy one or more legitimate experience, proficiency, or career-development objectives.",
  },
  {
    question:
      "Do I need an Instrument Rating before earning the Commercial Pilot certificate?",
    answer:
      "An Instrument Rating is not an absolute prerequisite to take every commercial airplane practical test, but without the appropriate instrument rating the commercial certificate carries a limitation prohibiting passenger carriage for hire on cross-country flights beyond 50 nautical miles or at night. The Instrument Rating is also expected for most professional airplane career paths and is required for the normal airplane CFI path.",
  },
  {
    question:
      "Can my Instrument Rating training count toward the commercial instrument-training requirement?",
    answer:
      "It can count when the training actually satisfies the specific commercial requirements and the logbook documentation demonstrates that it included the required subjects. Merely holding an Instrument Rating does not automatically prove that all 14 CFR 61.129 commercial instrument-training items were completed and logged correctly.",
  },
  {
    question:
      "What is a technically advanced airplane for Commercial Pilot training?",
    answer:
      "For this purpose, a technically advanced airplane must meet the equipment definition in 14 CFR 61.129(j), including an electronically advanced avionics system with the required primary flight display, multifunction display with moving-map navigation, and integrated two-axis autopilot. Complex, turbine-powered, TAA, or an allowed combination may satisfy the applicable 10-hour training requirement.",
  },
  {
    question:
      "Can I mix solo time and performing-the-duties-of-PIC time for the required 10-hour block?",
    answer:
      "No. FAA interpretation of 14 CFR 61.129(a)(4) requires the applicant to use one complete option: all 10 hours as solo flight time, or all 10 hours performing the duties of pilot in command with an authorized instructor on board. The two alternatives should not be mixed to reach 10 hours.",
  },
  {
    question: "What is the long Commercial Pilot cross-country requirement?",
    answer:
      "The standard single-engine requirement is one cross-country flight of at least 300 nautical miles total distance with landings at a minimum of three points, including a landing point at least 250 nautical miles straight-line distance from the original departure point. It must be completed within the selected solo or performing-duties-of-PIC option under 14 CFR 61.129(a)(4).",
  },
  {
    question: "What maneuvers are added at the commercial level?",
    answer:
      "Commercial training commonly includes chandelles, lazy eights, steep spirals, eights on pylons, accelerated stalls, emergency descents, commercial-level steep turns, short-field operations, and the power-off 180-degree accuracy approach and landing, together with stronger planning, systems, judgment, and risk-management standards.",
  },
  {
    question: "How much does the Commercial Pilot pathway cost?",
    answer:
      "Our current estimated pathway from zero hours is approximately $40,000 to $55,000, depending on training frequency, proficiency, time-building efficiency, aircraft use, prior credit, and progression through Private Pilot, Instrument Rating, and Commercial training. Pilots who already hold certificates receive a logbook-based custom estimate.",
  },
  {
    question: "How long does Commercial Pilot training take?",
    answer:
      "The calendar time depends mainly on your starting flight time, how much qualifying time remains, weekly availability, aircraft and instructor scheduling, weather, maintenance, knowledge-test readiness, and checkride timing. A pilot already near 250 hours may complete focused commercial maneuver and checkride preparation much faster than a zero-time student completing the full pathway.",
  },
  {
    question: "What jobs can a new Commercial Pilot get?",
    answer:
      "Common entry paths may include flight instruction after earning a CFI, ferry and aircraft-delivery work, aerial photography or survey, pipeline or powerline patrol, banner towing with applicable approvals, parachute or sightseeing operations under the governing rules, and entry-level operator positions that meet the employer's insurance and experience requirements.",
  },
  {
    question: "Where is your Commercial Pilot training located?",
    answer:
      "Training is based at Van Nuys Airport in Los Angeles and serves pilots from the San Fernando Valley and surrounding communities, including Sherman Oaks, Encino, Studio City, Burbank, Glendale, Calabasas, Woodland Hills, Northridge, Santa Clarita, Beverly Hills, Westlake Village, and greater Los Angeles.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Commercial Pilot Certificate Training at Van Nuys Airport",
  alternateName: [
    "Commercial Pilot Training Los Angeles",
    "Commercial Flight Training Van Nuys",
    "CPL Training Los Angeles",
    "Professional Pilot Training Van Nuys",
  ],
  description:
    "FAA ACS-structured Commercial Pilot airplane training at Van Nuys Airport. Full pathway from zero hours includes Private Pilot, Instrument Rating, efficient time building, advanced commercial maneuvers, professional standards, and checkride preparation.",
  serviceType: "Commercial Pilot Certificate Airplane Training",
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
    "Westlake Village",
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
      minPrice: "40000",
      maxPrice: "55000",
      priceCurrency: "USD",
    },
    description:
      "Full Commercial Pilot pathway cost estimate from zero hours: approximately $40,000 to $55,000. Pay as you fly with no large upfront payment required. Applicants with existing Private Pilot or Instrument qualifications receive a custom logbook-based estimate.",
    seller: { "@id": `${SITE_URL}/#organization` },
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${PAGE_URL}#course`,
  name: "Commercial Pilot Airplane Course",
  description:
    "Commercial Pilot airplane training covering FAA Commercial Pilot Airplane ACS knowledge, risk management, flight proficiency, advanced maneuvers, commercial privileges and limitations, time-building strategy, and practical-test preparation.",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: PAGE_URL,
  educationalCredentialAwarded: "FAA Commercial Pilot Certificate - Airplane",
  teaches: [
    "Commercial pilot privileges and limitations",
    "Commercial-level aircraft control and judgment",
    "Chandelles and lazy eights",
    "Steep spirals and eights on pylons",
    "Power-off 180-degree accuracy landings",
    "Commercial cross-country planning",
    "Emergency operations and systems management",
    "Commercial Pilot checkride preparation",
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
      name: "Commercial Pilot Training Van Nuys",
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

const professionalBenefits = [
  {
    title: "Legal foundation for paid flying",
    text: "The certificate supplies the pilot qualification required to act for compensation or hire in operations that are otherwise legal and properly authorized.",
    icon: DollarSign,
  },
  {
    title: "Professional precision",
    text: "Commercial training tightens altitude, airspeed, heading, energy, coordination, planning, and landing accuracy beyond private-pilot performance.",
    icon: Target,
  },
  {
    title: "Path to CFI and CFII",
    text: "A Commercial Pilot certificate with the required instrument qualification is the normal certificate foundation for airplane flight-instructor training.",
    icon: GraduationCap,
  },
  {
    title: "Preparation for advanced aircraft",
    text: "Systems, performance, automation, risk management, and professional cockpit habits prepare you for complex, TAA, multiengine, turbine, and operator training.",
    icon: Gauge,
  },
  {
    title: "Career time-building strategy",
    text: "The pathway converts required hours into purposeful cross-country, instrument, night, navigation, communication, and commercial-proficiency experience.",
    icon: TrendingUp,
  },
  {
    title: "ATP and airline progression",
    text: "The Commercial Pilot certificate is a required milestone on the usual progression toward CFI work, multiengine experience, ATP eligibility, charter, corporate, and airline flying.",
    icon: PlaneTakeoff,
  },
];

const legalCommercialPaths = [
  {
    title: "Flight instruction",
    text: "After earning the appropriate CFI or CFII certificate and ratings, many commercial pilots build experience while training private, instrument, and commercial applicants.",
    icon: GraduationCap,
  },
  {
    title: "Ferry flights and aircraft delivery",
    text: "Pilots may reposition or deliver aircraft when they meet the aircraft, insurance, owner, operating, and route requirements for the assignment.",
    icon: Route,
  },
  {
    title: "Aerial photography and surveying",
    text: "Aerial work can include photography, mapping, observation, survey, and related missions conducted under the rules applicable to the operation.",
    icon: Navigation,
  },
  {
    title: "Banner towing",
    text: "Banner towing can be a commercial pathway when the operator, pilot, aircraft, and operation meet the applicable waiver, authorization, equipment, and operating requirements.",
    icon: Plane,
  },
  {
    title: "Pipeline and powerline patrol",
    text: "Patrol work develops low-altitude planning, navigation, hazard recognition, communication, observation, and disciplined mission management.",
    icon: Compass,
  },
  {
    title: "Part 119 and Part 135 operations",
    text: "Charter, commuter, cargo, sightseeing, and other passenger-carrying work may require an authorized operator, operations specifications, drug-testing program, pilot qualifications, and additional experience.",
    icon: Briefcase,
  },
];

const acsAreas = [
  {
    number: "I",
    title: "Preflight Preparation",
    detail:
      "Pilot qualifications, airworthiness, weather, commercial cross-country planning, national airspace, performance and limitations, systems, human factors, and commercial privileges and limitations.",
  },
  {
    number: "II",
    title: "Preflight Procedures",
    detail:
      "Preflight assessment, flight-deck management, engine start, taxi, aircraft control on the ground, checklist discipline, and the before-takeoff check.",
  },
  {
    number: "III",
    title: "Airport Operations",
    detail:
      "Communications, light signals, runway lighting, traffic patterns, wake turbulence, runway-incursion avoidance, airport signs and markings, and controlled-airport professionalism.",
  },
  {
    number: "IV",
    title: "Takeoffs, Landings, and Go-Arounds",
    detail:
      "Normal, soft-field, short-field, maximum-performance, power-off 180-degree accuracy approach and landing, crosswind control, rejected landing, and go-around judgment.",
  },
  {
    number: "V",
    title: "Performance and Ground Reference Maneuvers",
    detail:
      "Commercial-level steep turns, steep spirals, chandelles, lazy eights, and eights on pylons with coordinated control, energy management, wind correction, and division of attention.",
  },
  {
    number: "VI",
    title: "Navigation",
    detail:
      "Pilotage, dead reckoning, navigation systems, radar services, diversion, lost procedures, fuel and time estimates, route risk, airspace, terrain, and operational decision-making.",
  },
  {
    number: "VII",
    title: "Slow Flight and Stalls",
    detail:
      "Maneuvering during slow flight, power-off stalls, power-on stalls, accelerated stalls, spin awareness, angle-of-attack management, recognition, recovery, and loss-of-control prevention.",
  },
  {
    number: "VIII",
    title: "High-Altitude Operations",
    detail:
      "Supplemental oxygen, hypoxia, pressurization, high-altitude physiology, decompression concepts, equipment limitations, and operational planning even when the trainer is not pressurized.",
  },
  {
    number: "IX",
    title: "Emergency Operations",
    detail:
      "Emergency descent, simulated emergency approach and landing, systems and equipment malfunctions, emergency equipment, survival gear, checklist use, and positive aircraft control.",
  },
  {
    number: "X",
    title: "Multiengine Operations When Applicable",
    detail:
      "For multiengine applicants, engine-inoperative control, VMC demonstration, single-engine instrument control, and instrument approach and landing with an inoperative engine.",
  },
  {
    number: "XI",
    title: "Postflight Procedures",
    detail:
      "After-landing flow, parking, securing, discrepancy recognition, maintenance communication, logbook accuracy, and professional completion of the flight.",
  },
];

const commercialManeuvers = [
  {
    title: "Chandelles",
    text: "A maximum-performance climbing 180-degree turn that develops coordinated control, changing bank and pitch, energy management, planning, and precise rollout near minimum controllable airspeed.",
    icon: TrendingUp,
  },
  {
    title: "Lazy Eights",
    text: "A continuously changing climbing and descending maneuver that develops smoothness, timing, coordination, outside visual reference, energy awareness, and symmetrical control through 180-degree turns.",
    icon: TimerReset,
  },
  {
    title: "Steep Spirals",
    text: "A gliding maneuver around a selected point that combines emergency-landing planning, wind correction, bank management, best-glide discipline, clearing, and division of attention.",
    icon: Compass,
  },
  {
    title: "Eights on Pylons",
    text: "The pivotal-altitude maneuver develops precise relationship among groundspeed, altitude, bank, wind, visual reference, coordination, and the apparent motion of the pylon.",
    icon: Navigation,
  },
  {
    title: "Power-Off 180° Accuracy Landing",
    text: "From the downwind position, the pilot manages glidepath, wind, configuration, turn geometry, energy, and touchdown placement without adding power after the throttle is reduced.",
    icon: Target,
  },
  {
    title: "Accelerated Stalls",
    text: "The maneuver demonstrates that an airplane can stall above its published one-G stall speed when load factor rises, reinforcing angle-of-attack awareness and prompt coordinated recovery.",
    icon: AlertTriangle,
  },
  {
    title: "Emergency Descent",
    text: "A rapid, controlled descent requires immediate priorities, aircraft-appropriate configuration, bank and airspeed control, traffic awareness, checklist use, and a plan for the emergency that caused it.",
    icon: PlaneTakeoff,
  },
  {
    title: "Commercial Steep Turns",
    text: "Commercial standards require tighter control of altitude, airspeed, bank, heading, coordination, lookout, and rollout while managing the increased load factor and performance demands.",
    icon: Gauge,
  },
];

const trainingTopics = [
  "Commercial Pilot privileges, limitations, compensation, hire, holding out, common carriage, and operator authority",
  "Commercial-level aeronautical decision-making, risk management, professionalism, and single-pilot resource management",
  "Aircraft documents, inspections, maintenance status, airworthiness, inoperative equipment, and discrepancy procedures",
  "Advanced aerodynamics, load factor, accelerated stalls, maneuvering speed, pivotal altitude, and energy management",
  "Weight and balance, takeoff and landing performance, density altitude, runway analysis, and operational margins",
  "Weather analysis for paid operations, passenger pressure, schedule pressure, alternates, escape plans, and no-go decisions",
  "Commercial cross-country planning, fuel, airspace, terrain, NOTAMs, performance, diversion, and lost procedures",
  "Complex, turbine-powered, or technically advanced airplane systems and automation as applicable",
  "Commercial steep turns, chandelles, lazy eights, steep spirals, and eights on pylons",
  "Normal, short-field, soft-field, crosswind, go-around, rejected landing, and power-off 180-degree accuracy landing",
  "Slow flight, power-on stalls, power-off stalls, accelerated stalls, spin awareness, and loss-of-control prevention",
  "Emergency descent, simulated engine failure, forced-landing planning, systems malfunctions, and emergency equipment",
  "High-altitude physiology, oxygen, pressurization knowledge, hypoxia, decompression, and aeromedical factors",
  "Professional ATC communication, airport operations, wake turbulence, runway-incursion avoidance, and cockpit discipline",
  "Commercial knowledge-test preparation, oral-exam preparation, scenario review, and mock checkrides",
  "Logbook audit, IACRA, endorsements, aircraft records, maintenance documents, and practical-test eligibility",
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

export function CommercialPilotPage() {
  return (
    <div className="w-full bg-slate-50">
      <Seo
        title="Commercial Pilot Training Van Nuys & Los Angeles | CPL Flight School"
        description="Commercial Pilot training at Van Nuys Airport. Full zero-to-commercial pathway, efficient time building, advanced maneuvers, FAA ACS checkride preparation and pay-as-you-fly pricing."
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
          src="/images/hero-airliner-gate.jpg"
          alt=""
          aria-hidden="true"
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
                Commercial Pilot Training in Van Nuys and Los Angeles
              </h1>

              <p className="mb-5 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
                The pilot certificate that allows you to be paid for certain
                legal flying operations. Elevate your precision to professional
                standards.
              </p>

              <p className="mb-8 max-w-3xl text-base leading-relaxed text-white/75">
                Complete your Private Pilot, Instrument Rating, commercial time
                building, advanced maneuvers, professional knowledge, and FAA
                Commercial Pilot checkride preparation through one structured
                pathway based at Van Nuys Airport.
              </p>

              <div className="mb-8 grid max-w-3xl gap-3 sm:grid-cols-2">
                {[
                  "FAA ACS-structured Commercial Pilot training",
                  "Pay as you fly — no large upfront payment",
                  "Zero-time and add-on pathway planning",
                  "Early checkride examiner coordination",
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
                    Request a Commercial Plan
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-secondary">
                Full Pathway from Zero Hours
              </p>
              <p className="mb-2 text-4xl font-black text-white">
                ~$40,000–$55,000
              </p>
              <p className="mb-5 text-sm leading-relaxed text-white/70">
                Total estimated pathway cost depending on consistency and
                progression speed. Includes Private Pilot, Instrument Rating,
                Commercial training, and efficient time building toward the
                standard Part 61 requirements.
              </p>

              <div className="mb-6 rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">
                  Already Have Private Pilot or Instrument?
                </p>
                <p className="mt-1 text-xl font-black text-white">
                  Custom logbook estimate
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  We evaluate your existing experience and build a syllabus to
                  bridge the remaining gap to 250 hours and commercial
                  proficiency efficiently.
                </p>
              </div>

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
                  We coordinate Commercial Pilot examiner availability early so
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
                  <span className="text-white/70">Flight instruction</span>
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
                  entire pathway.
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
                value: "250 hours",
                label: "Standard Part 61 total flight time minimum",
              },
              { value: "100 hours", label: "Pilot-in-command flight time" },
              {
                value: "50 hours",
                label: "Cross-country PIC within the 100 PIC hours",
              },
              {
                value: "20 hours",
                label: "Required commercial training under 61.129(a)(3)",
              },
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
              Professional pilot progression
            </p>
            <h2 className="mx-auto mb-4 max-w-4xl text-3xl font-black text-primary md:text-4xl">
              What a Commercial Pilot Certificate Changes
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              Private Pilot training establishes safe personal flying.
              Commercial training adds the certificate privileges, precision,
              judgment, operational knowledge, advanced maneuvers, and
              professional habits needed to begin qualifying for paid aviation
              work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {professionalBenefits.map(({ title, text, icon: Icon }) => (
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
                Fly for hire
              </p>
              <h2 className="mb-5 text-3xl font-black text-primary md:text-4xl">
                The Certificate Required to Begin Professional Airplane Flying
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-700">
                Earning your Commercial Pilot certificate means you can legally
                be compensated for flying when the operation itself is
                authorized. The training focuses on mastery of the aircraft,
                advanced maneuvers, and professional decision-making.
              </p>
              <p className="mb-6 leading-relaxed text-slate-700">
                The certificate changes your pilot privileges, but the legal
                structure of the flight still matters. The pilot must hold the
                appropriate category, class, instrument, type, medical, recency,
                and operating qualifications, and the operator may need FAA
                certification or other authority depending on what is being
                offered and how it is advertised.
              </p>

              <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle className="mt-0.5 h-7 w-7 shrink-0 text-yellow-600" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-yellow-900">
                      Important Distinction
                    </h3>
                    <p className="leading-relaxed text-yellow-800">
                      Becoming a Commercial Pilot is a major step, but it is{" "}
                      <strong>NOT</strong> the same as becoming an airline pilot
                      by itself. Airlines require an <AviationTerm term="ATP" />{" "}
                      certificate or qualifying Restricted ATP privileges,
                      specific flight-hour and training requirements, and
                      employment by an authorized operator.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/instrument-rating-van-nuys">
                  <Button variant="outline" className="gap-2 font-bold">
                    Instrument Rating <ArrowRight className="h-4 w-4" />
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
                src="/images/fleet/n6393c-2.jpg"
                alt="Piper Warrior N6393C on the ramp"
                className="h-80 w-full object-cover"
                width="1000"
                height="700"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-primary">
                  Typical professional certificate progression
                </h3>
                <div className="space-y-3">
                  {[
                    "Private Pilot Certificate",
                    "Instrument Rating",
                    "Commercial Pilot Certificate",
                    "CFI and CFII",
                    "Commercial Multi-Engine Rating",
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
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Legal commercial paths
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              Types of Flying a Commercial Pilot May Pursue
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              The certificate makes compensation possible; the operation
              determines what additional approvals, operator certificates,
              experience, aircraft, insurance, waivers, or operating rules
              apply.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {legalCommercialPaths.map(({ title, text, icon: Icon }) => (
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

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="mb-4 text-xl font-bold text-primary">
              Legal Commercial Paths Include:
            </h3>
            <ul className="grid gap-3 pl-5 text-slate-700 sm:grid-cols-2">
              <li className="list-disc">
                Flight instruction after earning <AviationTerm term="CFI" />
              </li>
              <li className="list-disc">Ferry flights and aircraft delivery</li>
              <li className="list-disc">Aerial photography and surveying</li>
              <li className="list-disc">
                Banner towing with appropriate authorization
              </li>
              <li className="list-disc">Pipeline and powerline patrol</li>
              <li className="list-disc">
                Other specific Part 119 and Part 135 legal commercial operations
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
                Los Angeles professional training environment
              </p>
              <h2 className="mb-5 text-3xl font-black md:text-4xl">
                Commercial Pilot Training at Van Nuys Airport
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-white/80">
                Van Nuys puts Commercial Pilot applicants into a busy operating
                system where disciplined radio work, traffic awareness, runway
                planning, checklist use, airspace management, passenger
                considerations, and professional cockpit organization are
                required on every flight.
              </p>
              <p className="mb-6 leading-relaxed text-white/70">
                Southern California supplies coastal, mountain, desert, basin,
                towered, non-towered, day, night, cross-country,
                high-density-altitude, marine layer, and complex-airspace
                scenarios. Training airports and routes are selected around
                current weather, NOTAMs, aircraft status, traffic, and the
                objective of the lesson.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Professional radio communication in busy airspace",
                  "Towered-airport and runway-incursion discipline",
                  "Coastal, mountain, basin, and desert planning",
                  "Cross-country, diversion, and fuel-management scenarios",
                  "Night and controlled-airport experience planning",
                  "Commercial passenger-pressure and schedule-pressure decisions",
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
                alt="Southern California cross-country environment for Commercial Pilot training"
                className="h-80 w-full object-cover"
                width="1000"
                height="700"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Train for complete commercial missions
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  The objective is not only to pass individual maneuvers. It is
                  to plan, brief, execute, monitor, adapt, and complete the
                  entire flight with commercial-level precision and judgment.
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
              Commercial Pilot Certificate Eligibility and Aeronautical
              Experience
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              The detailed items below cover the standard airplane single-engine
              path. Your exact eligibility depends on category and class,
              previous training, logbook documentation, military or school
              credit when applicable, and the certificate or rating sought.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-primary">
                <GraduationCap className="h-7 w-7 text-secondary" />
                Basic Eligibility
              </h3>
              <div className="space-y-4">
                {[
                  "Be at least 18 years old.",
                  "Read, speak, write, and understand English, subject to FAA provisions for medical limitations.",
                  "Hold at least a Private Pilot certificate issued under Part 61, or meet an applicable exception recognized by the regulation.",
                  "Complete and log the required commercial aeronautical knowledge training or acceptable home-study course.",
                  "Receive the required instructor endorsements for the knowledge test and practical test.",
                  "Pass the FAA Commercial Pilot knowledge test and practical test.",
                  "Must hold at least a current FAA Second-Class Medical Certificate to exercise commercial pilot privileges; the certificate and operation determine the exact medical requirement at the time of flight.",
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
                Core 250-Hour Structure
              </h3>
              <div className="space-y-4">
                {[
                  "At least 250 hours of flight time as a pilot for the standard airplane single-engine path.",
                  "At least 100 hours in powered aircraft, including at least 50 hours in airplanes.",
                  "At least 100 hours of pilot-in-command flight time, including at least 50 hours in airplanes.",
                  "Within the PIC total, at least 50 hours of cross-country PIC time, including at least 10 hours in airplanes.",
                  "At least 20 hours of specified commercial training with an authorized instructor.",
                  "At least 10 hours of solo flight or 10 hours performing the duties of PIC with an instructor on board, using one complete option rather than mixing the two.",
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

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="mb-5 text-2xl font-bold text-primary">
                20 Hours of Required Commercial Training
              </h3>
              <div className="space-y-4">
                {[
                  "10 hours of instrument training using a view-limiting device, including attitude instrument flight, partial-panel skills, unusual-attitude recovery, and intercepting and tracking navigation systems; at least 5 hours must be in a single-engine airplane.",
                  "10 hours in a complex airplane, turbine-powered airplane, technically advanced airplane, or an allowed combination, in an airplane appropriate to the rating sought.",
                  "One 2-hour daytime cross-country training flight in a single-engine airplane covering a straight-line distance of more than 100 nautical miles from the original departure point.",
                  "One 2-hour nighttime cross-country training flight in a single-engine airplane covering a straight-line distance of more than 100 nautical miles from the original departure point.",
                  "3 hours in a single-engine airplane with an authorized instructor preparing for the practical test within the preceding 2 calendar months from the month of the test.",
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

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="mb-5 text-2xl font-bold text-primary">
                10-Hour Solo or Performing-Duties-of-PIC Block
              </h3>
              <div className="space-y-4">
                {[
                  "Choose one complete method: 10 hours solo, or 10 hours performing the duties of PIC in a single-engine airplane with an authorized instructor on board.",
                  "Complete one cross-country flight of at least 300 nautical miles total distance with landings at a minimum of three points.",
                  "The long cross-country must include a landing point at least 250 nautical miles straight-line distance from the original departure point.",
                  "Complete 5 hours in night VFR conditions with 10 takeoffs and 10 landings, each involving a flight in the traffic pattern, at an airport with an operating control tower.",
                  "The flights must cover the applicable commercial areas of operation and be logged so the selected option and required events can be verified.",
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
                  Instrument Rating time is not automatically commercial credit
                </h3>
                <p className="text-sm leading-relaxed text-blue-900/80">
                  Instrument training may satisfy both instrument-rating and
                  commercial requirements when the actual training covers the
                  commercial items and the logbook entry documents them. Simply
                  possessing the Instrument Rating does not automatically
                  establish that the specific commercial instrument-training
                  requirement has been met.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex gap-4">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
              <div>
                <h3 className="mb-2 font-bold text-amber-950">
                  Do not mix the two 10-hour options
                </h3>
                <p className="text-sm leading-relaxed text-amber-900/80">
                  The FAA has clarified that a pilot must complete all 10 hours
                  as solo flight or all 10 hours performing the duties of PIC
                  with an authorized instructor on board. A combination such as
                  six solo hours and four performing-duties-of-PIC hours does
                  not satisfy the requirement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-primary">
              <FileText className="h-7 w-7 text-secondary" />
              Testing Requirements
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="mb-2 font-bold text-primary">Knowledge Test</h4>
                <p className="text-sm leading-relaxed text-slate-700">
                  Pass the 100-question FAA Commercial Pilot Airplane knowledge
                  exam after completing the required ground training or
                  home-study course and receiving the applicable endorsement.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="mb-2 font-bold text-primary">
                  Practical Test / Checkride
                </h4>
                <p className="text-sm leading-relaxed text-slate-700">
                  Pass the oral examination and flight test with an authorized
                  FAA examiner, demonstrating commercial-level knowledge, risk
                  management, aircraft control, landings, emergencies, and
                  maneuvers such as eights on pylons, steep spirals, and
                  power-off 180-degree accuracy landings.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row">
            <div>
              <h3 className="font-bold text-primary">
                Official FAA references
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Use the current regulation and Commercial Pilot Airplane ACS as
                the controlling references for eligibility and practical-test
                standards.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-F/section-61.129"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="gap-2 font-bold">
                  14 CFR 61.129 <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.faa.gov/training_testing/testing/acs/commercial_airplane_acs_7.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="gap-2 font-bold">
                  FAA Commercial ACS <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Shield className="mb-4 h-10 w-10 text-amber-600" />
                <h2 className="mb-3 text-3xl font-black text-amber-950">
                  A Pilot Certificate Is Not an Operating Certificate
                </h2>
                <p className="leading-relaxed text-amber-900/80">
                  A Commercial Pilot certificate qualifies the pilot. It does
                  not by itself authorize the pilot to hold out to the public,
                  sell unrestricted transportation, or conduct every passenger
                  or cargo operation under Part 91.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Compensation or hire changes which pilot privileges and medical requirements apply.",
                  "Common carriage and holding out can trigger Part 119 operator-certification requirements.",
                  "Charter and commuter operations commonly operate under Part 135 or Part 121 authority.",
                  "Nonstop sightseeing flights have their own operator, authorization, drug-testing, and Part 136 considerations.",
                  "Aerial work exceptions may still require waivers, letters of authorization, specialized rules, or operator approval.",
                  "Employer insurance and experience minimums can exceed the FAA certificate minimums substantially.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-amber-200 bg-white/70 p-4"
                  >
                    <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
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

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Checkride-aligned curriculum
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              FAA Commercial Pilot Airplane ACS Areas of Operation
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              Training is organized around the knowledge, risk management, and
              flight proficiency structure used on the FAA practical test.
              Seaplane and multiengine-only tasks are included only when
              applicable to the rating sought.
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
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Advanced flight proficiency
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              Commercial Pilot Maneuvers and What They Actually Develop
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              These maneuvers are not isolated checkride tricks. Each exposes a
              different relationship among lift, drag, load factor, wind,
              groundspeed, bank, pitch, coordination, energy, visual reference,
              and judgment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {commercialManeuvers.map(({ title, text, icon: Icon }) => (
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
                Complete Commercial Pilot Training Topics
              </h2>
              <p className="mb-6 leading-relaxed text-slate-700">
                Commercial training is not only maneuver practice. The course
                combines legal privileges, aircraft systems, performance,
                operational planning, aerodynamics, risk management, precise
                flying, professional conduct, and checkride readiness.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src="/images/fleet/n21705-3.jpg"
                  alt="Cessna 172S Skyhawk N21705 in flight"
                  className="h-72 w-full object-cover"
                  width="900"
                  height="650"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    Commercial applicants learn to use the exact aircraft POH,
                    avionics, performance data, checklists, limitations,
                    maintenance records, and cockpit flows for the airplane
                    presented on the practical test.
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
              Efficient hour building
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              Build the Required Time Without Wasting the Required Time
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              Reaching 250 hours is not the same as becoming commercially ready.
              Every remaining flight should be designed around legal experience
              credit, useful proficiency, stronger judgment, and the next
              certificate or job.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Start with a logbook audit",
                text: "Classify total, powered-aircraft, airplane, PIC, cross-country PIC, night, instrument, complex or TAA, solo or PDPIC, and practical-test preparation time before scheduling more flying.",
                icon: FileText,
              },
              {
                title: "Combine legitimate objectives",
                text: "A properly planned flight may build qualifying PIC cross-country time while improving weather decisions, navigation, radio work, night proficiency, passenger management, and commercial planning.",
                icon: Route,
              },
              {
                title: "Protect the special flights",
                text: "The day and night 100-NM training flights, long 300-NM flight, towered night operations, 10-hour solo or PDPIC option, instrument training, and advanced-airplane training must be planned and logged correctly.",
                icon: Shield,
              },
              {
                title: "Use lower-cost flying intelligently",
                text: "When legal and appropriate, shared operating expenses, safety-pilot arrangements, efficient cross-country routes, package rates, and lower-cost aircraft time can reduce the cost per useful hour.",
                icon: DollarSign,
              },
              {
                title: "Do not delay maneuver training too long",
                text: "Beginning commercial concepts before hour 250 allows the pilot to practice precision, energy management, and professional standards during normal time-building flights instead of relearning everything at the end.",
                icon: Target,
              },
              {
                title: "Keep documentation checkride-ready",
                text: "Correct remarks, instructor signatures, aircraft category and class, route details, night landings, simulated instrument entries, and selected solo or PDPIC method prevent an eligibility failure on checkride day.",
                icon: FileCheck2,
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
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-black text-primary">
                <Gauge className="h-7 w-7 text-secondary" />
                Complex, Turbine, and Technically Advanced Airplane Training
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700">
                The standard single-engine commercial path includes 10 hours of
                training in a complex airplane, turbine-powered airplane,
                technically advanced airplane, or an allowed combination. The
                aircraft must be appropriate to the land or sea rating sought.
              </p>
              <div className="space-y-3">
                {[
                  "Complex airplane training emphasizes retractable landing gear, flaps, and controllable-pitch propeller systems when the airplane meets the regulatory definition.",
                  "TAA training emphasizes integrated displays, navigation, automation, mode awareness, failure management, and the required two-axis autopilot architecture.",
                  "The 10 hours are training hours, not merely rental or passenger time in an advanced airplane.",
                  "The training should develop systems knowledge, configuration planning, checklist discipline, performance awareness, and automation management rather than only satisfy a logbook number.",
                  "A qualifying multiengine airplane may be used only when it also satisfies the applicable complex or turbine provision and the training is appropriate to the certificate plan.",
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

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-black text-primary">
                <Compass className="h-7 w-7 text-secondary" />
                The 300-NM Commercial Cross-Country
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700">
                This flight is one of the most frequently misunderstood
                Commercial Pilot requirements. It belongs inside the selected
                10-hour solo or performing-duties-of-PIC block.
              </p>
              <div className="space-y-3">
                {[
                  "The flight must total at least 300 nautical miles.",
                  "It must include landings at a minimum of three points.",
                  "At least one landing point must be at least 250 nautical miles straight-line distance from the original departure point.",
                  "The rule does not merely require one flown leg to measure 250 nautical miles; the controlling geometry is the straight-line distance from the original departure point to the qualifying landing point.",
                  "Route, fuel, weather, alternates, night exposure, terrain, airspace, aircraft status, and recovery options should be evaluated as a professional mission rather than a mileage exercise.",
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
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Accelerated structure
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              A Practical Commercial Pilot Training Sequence
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              The sequence changes according to your existing certificates,
              instrument qualification, total time, qualifying PIC and
              cross-country time, knowledge-test status, aircraft experience,
              and weekly availability.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Certificate and logbook audit",
                text: "Verify Private Pilot and Instrument status, medical qualification, flight review, total time, PIC, cross-country PIC, night, instrument, advanced-airplane training, solo or PDPIC strategy, and missing endorsements.",
              },
              {
                step: "2",
                title: "Build the remaining time intentionally",
                text: "Design qualifying cross-country, night, instrument, day and night training, advanced-airplane, and long-cross-country flights so each hour advances more than one useful objective without double-counting illegally.",
              },
              {
                step: "3",
                title: "Commercial control and landings",
                text: "Tighten steep turns, slow flight, stalls, short-field, soft-field, crosswind, go-around, emergency procedures, and power-off 180-degree energy management to commercial tolerances.",
              },
              {
                step: "4",
                title: "Advanced commercial maneuvers",
                text: "Develop chandelles, lazy eights, steep spirals, eights on pylons, accelerated stalls, emergency descents, and the visual references and aerodynamic understanding behind each task.",
              },
              {
                step: "5",
                title: "Professional scenarios and oral preparation",
                text: "Integrate privileges and limitations, operator rules, aircraft systems, performance, weather, airworthiness, cross-country planning, high-altitude operations, human factors, and risk management.",
              },
              {
                step: "6",
                title: "ACS checkride preparation",
                text: "Complete knowledge-test deficiency review, mock oral, mock flight, final 3-hour requirement, IACRA, logbook and endorsement review, aircraft document and maintenance review, and DPE coordination.",
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
                How to Reduce Commercial Pilot Cost Without Reducing Training
                Quality
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Audit before flying",
                    text: "The fastest way to waste money is to discover near the checkride that the logbook is missing a specific category, PIC, cross-country, night, advanced-airplane, or solo/PDPIC requirement.",
                  },
                  {
                    title: "Fly frequently during maneuver training",
                    text: "Commercial maneuvers require timing, sight pictures, coordination, energy judgment, and landing consistency. Long gaps usually increase relearning and total dual time.",
                  },
                  {
                    title: "Finish the knowledge test early",
                    text: "A completed written exam allows the flight phase to focus on application, oral depth, aircraft knowledge, and checkride scenarios instead of introducing every commercial rule from zero.",
                  },
                  {
                    title: "Chair-fly every maneuver",
                    text: "Know clearing turns, entry configuration, pivotal references, rollout targets, common errors, recovery, completion standards, and verbal flow before the engine starts.",
                  },
                  {
                    title: "Use the least expensive appropriate airplane",
                    text: "Most time building does not need the most expensive aircraft. Use advanced airplanes for the training that legally and instructionally requires them, and use efficient trainers for suitable hours and proficiency.",
                  },
                  {
                    title: "Schedule the checkride before skill decay",
                    text: "A long examiner delay creates extra proficiency flights. Early DPE coordination reduces the gap between final preparation and the practical test.",
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
                <h2 className="mb-5 text-2xl font-black">
                  Pathway Cost Estimates
                </h2>
                <div className="space-y-4 text-sm">
                  {[
                    ["Starting from zero hours", "~$40,000–$55,000"],
                    [
                      "Already have Private or Instrument",
                      "Call for custom estimate",
                    ],
                    ["Aircraft wet rate", "From $145/hr"],
                    ["Flight instruction", "$35/hr"],
                    ["Combined dual rate", "From $180/hr"],
                    ["Fleet range", "$145–$175/hr"],
                    ["DPE checkride fee", "~$800–$1,000 each"],
                    ["FAA knowledge test", "~$200 each"],
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
                <div className="mt-5 flex gap-2 text-xs leading-relaxed text-white/60">
                  <Info className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Checkride fees are paid directly to the examiner and apply
                    at every flight school. Rates and third-party fees can
                    change; confirm current pricing before scheduling.
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <BookOpen className="h-6 w-6 text-secondary" />
                  Recommended preparation before accelerated training
                </h3>
                <div className="space-y-3">
                  {[
                    "Bring complete pilot logbooks and all prior training records for an eligibility audit.",
                    "Complete or actively study for the Commercial Pilot Airplane knowledge test.",
                    "Review the aircraft POH, limitations, systems, performance charts, avionics guides, and checklists.",
                    "Know which 10-hour solo or performing-duties-of-PIC option your training plan will use.",
                    "Verify that prior instrument training entries document the commercial-required subjects when credit is expected.",
                    "Set up current charts and an electronic flight bag before intensive cross-country and checkride preparation.",
                    "Schedule enough consecutive availability to preserve maneuver and landing continuity.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <p className="text-sm leading-relaxed text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <a href="tel:424-493-2761" className="mt-6 block">
                  <Button className="h-12 w-full font-bold">
                    Call to Discuss Your Path
                  </Button>
                </a>
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
                <Award className="h-7 w-7 text-secondary" />
                After You Earn the Commercial Certificate
              </h2>
              <p className="mb-5 leading-relaxed text-slate-700">
                The checkride creates the certificate. Employability grows
                through additional ratings, instructor qualifications,
                experience, recency, professionalism, and the operating
                qualifications required by each job.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Earn CFI and CFII",
                    text: "Flight instruction is one of the most direct ways to begin earning as a pilot while building PIC, cross-country, instrument, teaching, judgment, and operational experience.",
                  },
                  {
                    title: "Add Commercial Multi-Engine",
                    text: "A multiengine rating develops asymmetric-thrust control, engine-out procedures, systems knowledge, performance planning, and experience relevant to many charter, corporate, and airline pathways.",
                  },
                  {
                    title: "Build quality experience",
                    text: "Employers evaluate more than total time. Instrument proficiency, recent experience, aircraft type, night, cross-country, multiengine, turbine, communication, record quality, and judgment all affect competitiveness.",
                  },
                  {
                    title: "Progress toward ATP",
                    text: "Continue toward the aeronautical experience, knowledge, ATP-CTP when applicable, medical, practical-test, and operator-training requirements for ATP or Restricted ATP privileges.",
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
                Checkride Scheduling Advantage
              </h2>
              <p className="mb-5 leading-relaxed text-slate-700">
                As you approach the 250-hour mark and training completion, we
                proactively coordinate your Commercial Pilot checkride with a{" "}
                <AviationTerm term="DPE" /> from our network, so your practical
                test is scheduled before your training ends, not after.{" "}
                <strong>
                  We will ensure you get a Commercial Pilot DPE fast.
                </strong>
              </p>

              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-secondary/30 bg-white p-5 text-center shadow-sm">
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.16em] text-secondary">
                    Accelerated Flight School
                  </p>
                  <p className="text-3xl font-black text-primary">1–3 weeks</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    From training completion to checkride
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                    SoCal Average at Other Schools
                  </p>
                  <p className="text-3xl font-black text-slate-500">
                    2–5 months
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Waiting for an available examiner slot
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Early logbook and aeronautical-experience audit",
                  "Solo versus performing-duties-of-PIC method verification",
                  "Instrument-training documentation review",
                  "Knowledge-test deficiency review",
                  "IACRA and identity-information review",
                  "Aircraft maintenance records and document check",
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
                Commercial pilot skills require consistent flying to maintain. A
                long gap between training and your{" "}
                <AviationTerm term="Checkride" /> means extra flights and extra
                cost. Our DPE relationships minimize that gap, so you test while
                your flying is sharp.
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
                Commercial Pilot Training Near Los Angeles Communities
              </h2>
              <p className="mb-6 leading-relaxed text-slate-700">
                Training is based at Van Nuys Airport, making the Commercial
                Pilot program accessible to pilots throughout the San Fernando
                Valley, west Los Angeles, the Conejo Valley, Burbank, Glendale,
                Santa Clarita, and surrounding communities.
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
              Commercial Pilot FAQ
            </p>
            <h2 className="mb-4 text-3xl font-black text-primary md:text-4xl">
              Common Questions About Commercial Flight Training
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
          <Briefcase className="mx-auto mb-5 h-12 w-12 text-secondary" />
          <h2 className="mb-4 text-3xl font-black md:text-4xl">
            Start Your Commercial Pilot Path at Van Nuys Airport
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/75">
            Send us your certificates and ratings, total time, airplane time,
            PIC time, cross-country PIC time, night time, instrument-training
            details, advanced- airplane experience, knowledge-test status, and
            weekly availability. We will build a plan around your actual logbook
            rather than a generic package.
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
