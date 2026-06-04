import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Reza is an incredible instructor. He doesn't just teach you to pass a test; he teaches you how to be a truly safe and competent pilot. The 1-on-1 structure saved me months of time.",
    name: "Jonathan D.",
  },
  {
    quote:
      "I flew with David, and right from the start he informed me what to expect, so when we went up I knew exactly what I'm in for, and why we are doing maneuvers or stalls. It made it so much easier than my previous flight school, in which it felt like the instructors used me for hours.",
    name: "Robert K.",
  },
  {
    quote:
      "If you are serious about flying, this is the place. No BS, no hidden fees, just straight-up professional training. Got my PPL in 6 weeks.",
    name: "Matthew R.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">What Our Students Say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Real Results From Real Students</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We measure our success by whether you pass, feel confident, and come back for more training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col"
            >
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed flex-1">{t.quote}</p>
              <p className="mt-5 pt-5 border-t border-slate-100 font-bold text-primary">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
