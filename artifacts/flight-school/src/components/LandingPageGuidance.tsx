import type { LandingPageConfig } from "@/data/landingPages";

type Guidance = {
  planningTitle: string;
  planningIntro: string;
  milestones: { title: string; body: string }[];
  localTitle: string;
  localBody: string;
};

function getGuidance(page: LandingPageConfig): Guidance {
  const text = `${page.slug} ${page.h1}`.toLowerCase();
  const isCityPage = page.h1.startsWith("Flight School Near");
  const city = isCityPage
    ? page.h1.replace(/^Flight School Near\s*/i, "")
    : "";
  const localPlaces = page.nearbyAreas.slice(0, 3).join(", ");
  const location = city
    ? `${city}${localPlaces ? `, with students also joining us from ${localPlaces}` : ""}`
    : "Los Angeles";

  if (text.includes("instrument") || text.includes("cfii")) {
    return {
      planningTitle: "A Deliberate Instrument Training Plan",
      planningIntro: `Instrument students at our Van Nuys flight school need more than time under a hood. Accelerated Flight School helps pilots turn their current experience into an organized IFR plan, with each dual instruction session connected to the instrument FAA/ACS tasks.`,
      milestones: [
        { title: "Start with the logbook", body: "Review cross-country PIC time, instrument experience, knowledge-test preparation, and any currency goals before building the next sequence of lessons." },
        { title: "Practice the complete workflow", body: "Lessons can combine clearance review, avionics setup, holds, approaches, missed approaches, and a useful debrief—not isolated button pushing." },
        { title: "Build checkride readiness", body: "The instructor uses mock oral and flight scenarios to identify weak tasks before recommending the instrument rating checkride." },
      ],
      localTitle: "IFR Context at Van Nuys Airport",
      localBody: `Training from Van Nuys Airport (KVNY) puts ${location} pilots in the Los Angeles ATC environment. Real radio work, route planning, and approach briefings help make an instrument certificate/rating practical beyond the checkride.`,
    };
  }

  if (text.includes("commercial") || text.includes("time-building") || text.includes("airline-pilot") || text.includes("cfi-training")) {
    return {
      planningTitle: "Plan the Hours and Skills That Matter Next",
      planningIntro: "Career-minded flight training is strongest when the certificate, aeronautical experience, and teaching or precision skills are planned together. Our flight school helps each pilot identify the next FAA requirement before spending aircraft time.",
      milestones: [
        { title: "Audit experience first", body: "Review total time, PIC, cross-country, night, instrument, and applicable certificate/rating requirements so time-building flights have a purpose." },
        { title: "Train to a higher standard", body: "Commercial maneuvers and instructor demonstrations are practiced to the applicable FAA/ACS standard, with clear briefing, demonstration, and debrief." },
        { title: "Use aircraft time efficiently", body: "Choose an appropriate aircraft and route for the lesson or time-building objective; the wet aircraft rate and pay-as-you-fly model keep the cost visible." },
      ],
      localTitle: "A Los Angeles Training Environment With Purpose",
      localBody: `At KVNY, pilots from ${location} can develop professional habits around flight planning, airspace awareness, and accurate communication. The goal is preparation for the next certificate or rating—not simply accumulating hours.`,
    };
  }

  if (text.includes("cost") || text.includes("cheap") || text.includes("affordable") || text.includes("low-cost") || text.includes("pay-as-you-fly") || text.includes("without-loans")) {
    return {
      planningTitle: "Make an Affordable Flight Training Budget Useful",
      planningIntro: "Low cost should mean clear decisions and productive lessons, not shortcuts. Accelerated Flight School helps students plan a realistic cadence, understand the wet aircraft rate, and keep their training investment tied to actual progress.",
      milestones: [
        { title: "Price the lesson clearly", body: "Discuss the aircraft, instructor, and lesson objective before flying so dual instruction and solo costs are easy to follow." },
        { title: "Protect consistency", body: "A sustainable schedule helps skills carry forward between flights, reducing the need to repeat material and making each aircraft hour more useful." },
        { title: "Keep control of the commitment", body: "This flight school offers pay as you fly rather than a large upfront package, so students can plan around their budget without losing sight of the certificate goal." },
      ],
      localTitle: "Value Comes From Preparation, Not Pressure",
      localBody: `For ${location} students comparing flight schools, transparent pricing is only part of value. A prepared lesson, a caring instructor, and an honest debrief help make affordable, high-quality flight training more efficient at Van Nuys Airport.`,
    };
  }

  if (text.includes("discovery") || text.includes("learn-to-fly") || text.includes("how-to-become")) {
    return {
      planningTitle: "Turn a First Flight Into an Informed Decision",
      planningIntro: "A first lesson should answer useful questions about learning to fly. Accelerated Flight School helps prospective students understand the aircraft, the role of the instructor, and the practical steps toward an FAA certificate.",
      milestones: [
        { title: "Begin with a real briefing", body: "Meet the instructor, discuss the lesson, inspect the aircraft, and learn why weather, weight and balance, and airspace awareness matter." },
        { title: "Fly with a clear objective", body: "During dual instruction, a new student can experience basic aircraft control while the instructor manages safety and explains the flight." },
        { title: "Leave with a next-step plan", body: "Discuss medical timing, FAA knowledge study, a realistic schedule, and whether a private pilot certificate fits your goals—without a large upfront package." },
      ],
      localTitle: "Your First View of Los Angeles Aviation",
      localBody: `A Discovery Flight from Van Nuys Airport (KVNY) introduces ${location} students to an active general aviation setting. It is a useful starting point for people considering high-quality flight training, not a shortcut around the work required to become a pilot.`,
    };
  }

  return {
    planningTitle: isCityPage ? `A Training Rhythm That Works for ${city}` : "A Student-First Plan From First Lesson to Certificate",
    planningIntro: `Good flight training is built around the student, not a preset package. At Accelerated Flight School, instructors care about progress and use a plan that connects each ${isCityPage ? `${city}-area ` : ""}lesson to the FAA/ACS standards for your goal.`,
    milestones: [
      { title: "Set the goal and cadence", body: "Start with your availability, experience, and certificate/rating goal. A consistent schedule is encouraged, while the plan remains realistic for work, family, and budget." },
      { title: "Make every dual lesson count", body: "Preflight briefing, aircraft handling, radio work, and a focused debrief give each session a purpose. The next lesson follows the skills already demonstrated." },
      { title: "Prepare rather than rush", body: "Ground knowledge, maneuvers, and decision-making are developed together. The instructor identifies what still needs practice instead of treating a checkride as a shortcut." },
    ],
    localTitle: isCityPage ? `${city} Students Training in the KVNY Environment` : "Why KVNY Supports Practical Flight Training",
    localBody: `For ${location} students, Van Nuys Airport (KVNY) offers an active Los Angeles general aviation environment where aircraft control, tower communication, and airspace awareness can grow together. Our flight school pairs that environment with transparent, pay-as-you-fly planning and no large upfront commitment.`,
  };
}

export function LandingPageGuidance({ page }: { page: LandingPageConfig }) {
  const guidance = getGuidance(page);

  return (
    <>
      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">
            {guidance.planningTitle}
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
            {guidance.planningIntro}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {guidance.milestones.map((milestone) => (
              <article
                key={milestone.title}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <h3 className="font-bold text-slate-800 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {milestone.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">
            {guidance.localTitle}
          </h2>
          <p className="text-slate-700 leading-relaxed mb-5">
            {guidance.localBody}
          </p>
          <div className="rounded-xl bg-primary/5 border border-primary/15 p-5">
            <h3 className="font-bold text-slate-800 mb-2">
              Checkride coordination is planned early
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              As checkride readiness approaches, the school plans examiner coordination early and targets a checkride within 1–2 weeks after training is complete when examiner schedules, weather, and eligibility allow. This is a planning target, not a guarantee: independent DPE availability and checkride outcomes remain outside the school&apos;s control.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}