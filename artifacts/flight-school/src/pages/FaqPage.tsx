import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ChevronUp, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

type Faq = { q: string; a: React.ReactNode; plain: string };

const faqs: Faq[] = [
  {
    q: "How long does it take to get my Private Pilot Certificate?",
    plain:
      "At a steady pace of 2 to 3 flights per week, most students go from start to checkride in about 2 to 3 months. Each lesson averages about 2 hours.",
    a: (
      <>
        At a steady pace of <strong>2 to 3 flights per week</strong> (each averaging about 2 hours), most students go
        from their first lesson to the checkride in about <strong>2 to 3 months</strong>. Your exact timeline depends on
        how consistently you fly, how much you study at home, and how quickly you reach proficiency.
      </>
    ),
  },
  {
    q: "How long does the Instrument Rating take?",
    plain:
      "With 2 to 3 flights per week, the Instrument Rating typically takes about 2 to 3 months.",
    a: (
      <>
        Flying <strong>2 to 3 times per week</strong>, the Instrument Rating typically takes about{" "}
        <strong>2 to 3 months</strong>. As with all of our training, consistency and home study are the biggest factors
        in finishing efficiently.
      </>
    ),
  },
  {
    q: "How long does Commercial Pilot training take?",
    plain:
      "Commercial training can take anywhere from 1 to 4 months depending on how many flight hours you already have.",
    a: (
      <>
        Commercial training can take anywhere from <strong>1 to 4 months</strong>, depending largely on how many flight
        hours you already have toward the FAA aeronautical experience requirements. If you still need to build hours,
        that will extend the timeline; if you already meet the experience requirements, it can move quickly.
      </>
    ),
  },
  {
    q: "What do I need to start flying?",
    plain:
      "To begin training you really just need to show up and want to learn. There is no certificate or medical required for your very first lessons.",
    a: (
      <>
        To <strong>begin</strong> training, you really just need the desire to learn and the ability to show up
        consistently. You do <strong>not</strong> need any certificate, medical, or prior experience to start taking
        lessons. The main requirements come later, before your first solo. To eventually earn a certificate you must be
        able to read, speak, write, and understand English, and be at least 17 years old by your Private Pilot checkride
        (you can start much younger).
      </>
    ),
  },
  {
    q: "What do I need to have on me in the plane?",
    plain:
      "Once you are flying solo you must carry a government photo ID, your student pilot certificate, and your medical certificate, along with the required endorsements in your logbook.",
    a: (
      <>
        When you fly <strong>solo</strong> you must have on you: a <strong>government-issued photo ID</strong>, your{" "}
        <strong>student pilot certificate</strong>, and your <strong>medical certificate</strong>. Your{" "}
        <strong>logbook</strong> with the proper instructor endorsements must also be available. While training with an
        instructor on board, the instructor carries the legal responsibility, but it is good practice to always have
        your ID and certificates with you.
      </>
    ),
  },
  {
    q: "What do I need to solo?",
    plain:
      "Before your first solo you need a student pilot certificate, an FAA medical certificate, and the required instructor endorsements, plus demonstrated proficiency in the required maneuvers.",
    a: (
      <>
        Before your first solo you must have: a <strong>student pilot certificate</strong>, an{" "}
        <strong>FAA medical certificate</strong> (at least third class), and the specific{" "}
        <strong>instructor endorsements</strong> in your logbook for solo flight. You also must have demonstrated to your
        instructor that you can safely perform the required maneuvers and handle the aircraft on your own — including
        normal and crosswind takeoffs and landings, and emergency procedures.
      </>
    ),
  },
  {
    q: "When can I solo?",
    plain:
      "You can solo once you are at least 16 years old, hold a student pilot and medical certificate, and your instructor has confirmed you are safe and proficient enough to fly alone.",
    a: (
      <>
        You can solo once you are at least <strong>16 years old</strong>, hold a student pilot certificate and a medical
        certificate, and your instructor has endorsed you after confirming you can safely operate the aircraft on your
        own. There is no fixed number of hours — it happens when you are <strong>ready and proficient</strong>.
      </>
    ),
  },
  {
    q: "How long until I can solo after starting?",
    plain:
      "Many students reach their first solo within a few weeks when flying 2 to 3 times per week, but it depends entirely on your progress and proficiency.",
    a: (
      <>
        Many students reach their first solo within a <strong>few weeks</strong> when flying 2 to 3 times per week and
        studying at home. There is no required minimum number of hours to solo — it happens when you have shown your
        instructor you can safely handle the aircraft. Consistency is the single biggest factor in getting there faster.
      </>
    ),
  },
  {
    q: "I have some experience — can I continue my training if I trained at another school?",
    plain:
      "Yes. If you show proficiency, we will set you up for the checkride as soon as you demonstrate you are capable of passing, which means you'll need less training.",
    a: (
      <>
        <strong>Yes.</strong> If you show proficiency, we will set you up for the checkride as soon as you demonstrate
        you are capable of passing — which means you will need <strong>less training</strong> with us. We do not
        artificially pad hours. We meet you where you are, fill any gaps, and move you toward your checkride as
        efficiently as your skills allow.
      </>
    ),
  },
  {
    q: "I just need to be endorsed for solo / solo cross-country / checkride — can you sign me off?",
    plain:
      "Yes. If you show proficiency and can pass a mock checkride or fully demonstrate the skills for whatever endorsement you need, you will get the endorsement.",
    a: (
      <>
        <strong>Yes.</strong> If you show proficiency and can pass a mock checkride — or fully demonstrate the skills for
        whatever specific endorsement you are seeking (solo, solo cross-country, or checkride) — you will get the
        endorsement. We will not sign you off until you are genuinely ready, because the endorsement means we are
        confident you can perform safely and pass.
      </>
    ),
  },
  {
    q: "I want a career in aviation — will I get the proper training and education I need to get there?",
    plain:
      "Yes. Beyond the flying, our focus is on how an aviation career actually works, along with Single-Pilot Resource Management, Crew Resource Management, and professionalism.",
    a: (
      <>
        <strong>Yes.</strong> Not only will you get the flight training you need, but our focus will also be on{" "}
        <strong>how a career in aviation actually works</strong> — including{" "}
        <strong>Single-Pilot Resource Management (SRM)</strong>, <strong>Crew Resource Management (CRM)</strong>, and{" "}
        <strong>professionalism</strong>. We prepare you not just to pass checkrides, but to operate the way airlines and
        employers expect a professional pilot to operate.
      </>
    ),
  },
  {
    q: "Do I need a medical certificate?",
    plain:
      "You need an FAA medical certificate before you solo, not before your first lessons. We recommend getting it early so nothing slows you down.",
    a: (
      <>
        You do not need a medical certificate for your very first lessons, but you{" "}
        <strong>do need an FAA medical certificate before you solo</strong>. We recommend getting your medical early in
        training (a third-class medical is the minimum for Private Pilot) so that nothing slows down your progress when
        you are ready to fly on your own. We can point you to a local Aviation Medical Examiner.
      </>
    ),
  },
  {
    q: "What happens at a Discovery Flight?",
    plain:
      "A Discovery Flight is an introductory lesson where you actually fly the aircraft with an instructor. It's the best way to experience training before committing. Ours is $190.",
    a: (
      <>
        A <strong>Discovery Flight</strong> is an introductory lesson where you sit in the pilot seat and{" "}
        <strong>actually fly the aircraft</strong> with an instructor guiding you. You will handle the controls, see what
        a real lesson feels like, and get your questions answered. It is the best, no-pressure way to experience flight
        training before committing to a full program. Ours is <strong>$190</strong>.
      </>
    ),
  },
  {
    q: "Do I need to study outside of my lessons?",
    plain:
      "Yes. Students who study the FAA materials at home progress faster, spend less money, and pass checkrides more confidently. We tell you exactly what to study and why.",
    a: (
      <>
        <strong>Yes.</strong> Flight training is not just showing up and flying. Students who study the FAA materials at
        home make faster progress, spend less money, and pass their written, oral, and flight tests more confidently. We
        are upfront about this from day one and tell you exactly what to study, when, and why — so no lesson is wasted
        reviewing material you could have learned at home.
      </>
    ),
  },
  {
    q: "How much does training cost?",
    plain:
      "We're a pay-as-you-fly school with no large upfront payments. Aircraft rental is $160/hr wet, and a Discovery Flight is $190. See our pricing page for full details.",
    a: (
      <>
        We are a <strong>pay-as-you-fly</strong> school — no large prepaid blocks or training loans required. Aircraft
        rental in our Piper Warrior II is <strong>$160/hr wet</strong> (fuel included), and a Discovery Flight is{" "}
        <strong>$190</strong>. You pay per lesson, keeping your investment proportional to your progress. See our pricing
        page for full details, and call us anytime with questions.
      </>
    ),
  },
];

function FaqItem({
  faq,
  open,
  onToggle,
  id,
}: {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button
        id={buttonId}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left hover:bg-slate-50 transition-colors"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="font-bold text-primary">{faq.q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
        )}
      </button>
      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100"
        >
          <div className="pt-4">{faq.a}</div>
        </div>
      )}
    </div>
  );
}

export function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.plain },
    })),
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Flight Training FAQ | How Long, Costs, Soloing | Accelerated Flight School Van Nuys</title>
        <meta
          name="description"
          content="Answers to common flight training questions: how long Private Pilot, Instrument, and Commercial take, what you need to solo, transferring from another school, medical requirements, and costs. Van Nuys Airport (KVNY). Call 323-332-0585."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">
            Your Questions, Answered
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Everything you want to know about timelines, soloing, transferring from another school, and getting started.
            Still have a question? Call or text us anytime.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                id={`faq-${i}`}
                faq={faq}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/15 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Still have questions?</h2>
            <p className="text-slate-600 mb-6">
              We are happy to answer anything, even if you are completely new to aviation and do not know where to start.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="tel:323-332-0585">
                <Button className="w-full sm:w-auto gap-2 font-bold">
                  <Phone className="w-4 h-4" />
                  Call 323-332-0585
                </Button>
              </a>
              <a href="sms:323-332-0585">
                <Button variant="outline" className="w-full sm:w-auto gap-2 font-bold border-primary text-primary hover:bg-primary/5">
                  <MessageSquare className="w-4 h-4" />
                  Text Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
