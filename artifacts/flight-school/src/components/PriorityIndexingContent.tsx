import { CheckCircle2, MapPin, Plane } from "lucide-react";
import { Link } from "wouter";

type ContentCard = {
  title: string;
  body: string;
};

type ContentLink = {
  href: string;
  label: string;
};

type ContentSection = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  cards: ContentCard[];
  links: ContentLink[];
};

const priorityContent: Record<string, ContentSection[]> = {
  "flight-school-near-hollywood-accelerated-flight-school-van-nuys-kvny": [
    {
      eyebrow: "Hollywood-area aviation",
      heading:
        "Why Hollywood Student Pilots Train at Van Nuys Airport (KVNY)",
      paragraphs: [
        "Hollywood itself does not have a public general aviation training airport. Accelerated Flight School operates from Van Nuys Airport (KVNY), a tower-controlled general aviation airport in the San Fernando Valley. Students coming from Hollywood, West Hollywood, Los Feliz, Silver Lake, Universal City, and Studio City can plan around the 101 and 170 corridors without relying on a promised drive time; Los Angeles traffic always varies.",
        "That airport environment gives a new student practical aviation experience from the beginning. Lessons can include preflight inspection, checklist use, taxi procedures, tower communication, traffic-pattern awareness, aircraft control, navigation, and postflight review. The goal is not simply to log hours—it is to understand why each flight lesson supports the next FAA certificate or rating milestone.",
      ],
      cards: [
        {
          title: "Towered-airport communication",
          body: "Students learn to listen, organize a radio call, read back instructions, and maintain situational awareness while operating at an active airport.",
        },
        {
          title: "Los Angeles airspace awareness",
          body: "Training near Burbank Class C and beneath the wider Los Angeles Class B environment makes airspace planning and clear communication part of normal instruction.",
        },
        {
          title: "Aircraft and preflight knowledge",
          body: "A lesson begins with the aircraft, weather, fuel, weight and balance, and checklist discipline—not only with the time after takeoff.",
        },
        {
          title: "ACS-based progress",
          body: "Accelerated Flight School connects maneuvers, knowledge, risk management, and checkride preparation to the applicable FAA Airman Certification Standards.",
        },
      ],
      links: [
        {
          href: "/discovery-flight-van-nuys",
          label: "Start with a Discovery Flight",
        },
        {
          href: "/private-pilot-van-nuys",
          label: "Explore Private Pilot training",
        },
        {
          href: "/flight-school-locations-los-angeles",
          label: "View all Los Angeles areas served",
        },
      ],
    },
    {
      eyebrow: "Student-first support",
      heading:
        "A Flight School Plan for Entertainment, Production, and Flexible Work Schedules",
      paragraphs: [
        "Hollywood-area students may work irregular production days, nights, weekends, or project-based schedules. Our flight school can help build a realistic lesson cadence rather than forcing every student into the same calendar. Consistency is encouraged because skills remain sharper between flights, but the plan should still respect work, family, weather, aircraft availability, and budget.",
        "Instructors brief the objective before a lesson and debrief specific strengths and weaknesses afterward. As a student approaches checkride readiness, the school coordinates examiner planning early and targets a practical test within 1–2 weeks after training completion when independent DPE schedules, weather, and eligibility permit. That timing is a planning target—not a guarantee—and Accelerated Flight School does not control examiner calendars or outcomes.",
      ],
      cards: [],
      links: [
        {
          href: "/van-nuys-accelerated-flight-school-pricing",
          label: "Review transparent flight-training rates",
        },
        {
          href: "/van-nuys-accelerated-flight-school-contact",
          label: "Discuss your schedule with the school",
        },
      ],
    },
  ],
  "cheap-flight-school-los-angeles-accelerated-flight-school-van-nuys-kvny":
    [
      {
        eyebrow: "Compare the whole lesson",
        heading:
          "How to Compare Cheap Flight Schools in Los Angeles Without Comparing the Wrong Numbers",
        paragraphs: [
          "A cheap advertised aircraft rate does not automatically produce cheap flight training. A useful comparison asks whether fuel is included, whether instructor and ground time are separate, whether membership or booking fees apply, which aircraft the quoted rate covers, and how the school measures progress toward FAA Airman Certification Standards. Accelerated Flight School publishes aircraft rental starting at $155 per hour wet and instructor time at $35 per hour, producing a combined dual rate from $185 per hour.",
          "The word “wet” matters because fuel is included in the aircraft rate. A dry rate can look lower before fuel is added. The number of hours matters even more: an organized syllabus, regular lessons, preparation between flights, and an honest instructor debrief can reduce avoidable repetition. Affordable training comes from useful hours—not from skipping weather decisions, maintenance standards, aeronautical knowledge, or checkride preparation.",
        ],
        cards: [
          {
            title: "Wet or dry aircraft rate?",
            body: "Confirm whether fuel is included before comparing hourly prices. Accelerated Flight School’s published aircraft rates are wet.",
          },
          {
            title: "Aircraft plus instructor",
            body: "Compare the combined dual rate, not an aircraft-only number. Our published dual training starts at $185 per hour.",
          },
          {
            title: "Fees and prepayments",
            body: "Ask about enrollment, membership, fuel, booking, and curriculum charges. Our flight school uses pay-as-you-fly planning without a large prepaid package.",
          },
          {
            title: "Total hours to proficiency",
            body: "FAA minimum hours are eligibility minimums, not a completion promise. Each student needs enough instruction and practice to demonstrate safe, consistent ACS performance.",
          },
        ],
        links: [
          {
            href: "/van-nuys-accelerated-flight-school-pricing",
            label: "See current aircraft and instructor rates",
          },
          {
            href: "/cheapest-flight-school-van-nuys-ca",
            label: "Read the Van Nuys total-cost comparison",
          },
          {
            href: "/low-cost-flight-school-van-nuys-ca",
            label: "Review the low-cost training guide",
          },
        ],
      },
      {
        eyebrow: "Quality still comes first",
        heading:
          "Low-Cost Flight Training Still Requires Aircraft, Instructor, and School Accountability",
        paragraphs: [
          "Accelerated Flight School can keep pricing accessible while still giving each lesson a defined objective. The instructor is responsible for explaining the plan, protecting safety margins, identifying what improved, and stating what needs more work. The school supports that process with transparent pricing, program guidance, aircraft scheduling, and a direct path for students to ask questions.",
          "Checkride preparation includes aeronautical knowledge, aircraft systems, risk management, maneuvers, navigation, communication, and mock practical-test work—not a rushed recommendation. Examiner coordination starts early, with a target of testing within 1–2 weeks after training completion and readiness when independent DPE schedules, weather, and eligibility permit. The target is not guaranteed, and the school cannot control examiner availability or the result of a checkride.",
        ],
        cards: [],
        links: [
          {
            href: "/private-pilot-van-nuys",
            label: "See the Private Pilot program",
          },
          {
            href: "/instrument-rating-van-nuys",
            label: "See Instrument Rating training",
          },
          {
            href: "/commercial-pilot-training-van-nuys",
            label: "See Commercial Pilot training",
          },
        ],
      },
    ],
  "cheapest-flight-school-van-nuys-ca": [
    {
      eyebrow: "Van Nuys cost facts",
      heading:
        "What “Cheapest Flight School” Should Mean at Van Nuys Airport",
      paragraphs: [
        "The lowest visible hourly number is only one part of a flight-training budget. Students should compare the aircraft rate, whether fuel is included, instructor and ground time, realistic training frequency, FAA knowledge-test preparation, practical-test fees, and the hours needed to become proficient. Accelerated Flight School publishes a wet aircraft rate starting at $155 per hour, an instructor rate of $35 per hour, and combined dual instruction from $185 per hour.",
        "A private pilot applicant must meet FAA aeronautical-experience and proficiency requirements before being recommended for a checkride. Minimum eligibility hours are not a promise that every student will finish at that number. Our flight school builds a student-first estimate around prior experience, lesson frequency, preparation, aircraft choice, weather, and demonstrated progress so the total is more useful than a headline claim.",
      ],
      cards: [
        {
          title: "Fuel-inclusive aircraft pricing",
          body: "A wet rate includes fuel, making the aircraft number easier to compare with another school’s published rate.",
        },
        {
          title: "Instructor and ground preparation",
          body: "Briefing, debriefing, systems knowledge, weather, regulations, and risk management are part of becoming checkride-ready.",
        },
        {
          title: "Training frequency",
          body: "A sustainable, consistent schedule can reduce skill loss between lessons and avoid paying to relearn material.",
        },
        {
          title: "Independent examiner costs",
          body: "DPE fees are paid separately to the examiner. Availability, fees, scheduling, and checkride outcomes are not controlled by the flight school.",
        },
      ],
      links: [
        {
          href: "/van-nuys-accelerated-flight-school-pricing",
          label: "Open the full pricing page",
        },
        {
          href: "/cheap-flight-school-los-angeles-accelerated-flight-school-van-nuys-kvny",
          label: "Use the Los Angeles cheap-flight-school checklist",
        },
        {
          href: "/affordable-flight-training-los-angeles-accelerated-flight-school-van-nuys-kvny",
          label: "Explore affordable aircraft choices",
        },
      ],
    },
    {
      eyebrow: "Before enrolling",
      heading:
        "Questions to Ask Any Affordable or Low-Cost Flight School",
      paragraphs: [
        "Ask which aircraft is available at the advertised rate, how often that aircraft flies, how maintenance interruptions are handled, whether you will have a consistent instructor, and how progress is documented. Ask for the combined aircraft-and-instructor price and for separate estimates of knowledge-test, medical, equipment, and DPE expenses. A reputable estimate explains assumptions instead of hiding them.",
        "Accelerated Flight School uses direct, pay-as-you-fly training rather than a large upfront package. Students receive lesson objectives, ACS-focused preparation, progress feedback, and early examiner coordination. The school targets a checkride within 1–2 weeks after training completion and readiness when independent DPE schedules, weather, and eligibility allow; this is not a guarantee, and no school can promise an examiner’s calendar or a checkride outcome.",
      ],
      cards: [],
      links: [
        {
          href: "/discovery-flight-van-nuys",
          label: "Try one Discovery Flight first",
        },
        {
          href: "/van-nuys-accelerated-flight-school-aircraft",
          label: "Review the training aircraft",
        },
        {
          href: "/van-nuys-accelerated-flight-school-contact",
          label: "Request a personalized estimate",
        },
      ],
    },
  ],
};

export function PriorityIndexingContent({ slug }: { slug: string }) {
  const sections = priorityContent[slug];

  if (!sections) return null;

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.heading}
          className={`py-14 border-t border-slate-200 ${
            index % 2 === 0 ? "bg-slate-50" : "bg-white"
          }`}
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                {section.eyebrow}
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-5">
                {section.heading}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {section.cards.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {section.cards.map((card) => (
                  <article
                    key={card.title}
                    className="bg-white rounded-xl border border-slate-200 p-5"
                  >
                    <div className="flex items-start gap-3">
                      {slug.includes("hollywood") ? (
                        <Plane className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {card.body}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <nav
              aria-label={`Related links for ${section.heading}`}
              className="flex flex-wrap gap-3 mt-8"
            >
              {section.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>
      ))}
    </>
  );
}