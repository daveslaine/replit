import React from "react";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { Tag, CheckCircle2, Phone, Star, DollarSign, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";

export function DealsPage() {
  return (
    <div className="w-full">
      <Seo
        title={"Deals & Coupons | Van Nuys Airport KVNY | Save on Flight Training | Accelerated Flight School"}
        description={"Current deals and coupons at Accelerated Flight School in Van Nuys. Discovery flight $20 off. First 5 flights: aircraft $155/hr + instructor $30/hr. Call 323-332-0585."}
      />

      {/* Hero */}
      <section className="bg-primary text-white pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Tag className="w-4 h-4 text-yellow-300" />
            Van Nuys Airport (KVNY) · Deals &amp; Coupons
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Van Nuys Accelerated Flight School<br className="hidden md:block" /> Deals &amp; Coupons
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Affordable flight training just got better. Take advantage of our new student coupons
            and block pricing at Van Nuys Airport — and find out why our lower price actually means higher quality.
          </p>
        </div>
      </section>

      {/* Coupons */}
      <section className="py-16 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">Active Coupons</p>
            <h2 className="text-3xl font-bold text-primary">Use These On Your First Flights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Coupon 1 */}
            <div className="bg-white rounded-2xl border-2 border-dashed border-amber-400 p-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 font-bold text-sm px-4 py-1 rounded-bl-xl">
                COUPON
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 rounded-xl p-3">
                  <Tag className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg leading-tight">Discovery Flight</p>
                  <p className="text-sm text-slate-500">Van Nuys Airport — N9172Y Piper Cherokee</p>
                </div>
              </div>
              <p className="text-5xl font-bold text-amber-600 mb-1">$20 <span className="text-xl font-normal text-slate-500">off</span></p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl text-slate-400 line-through">$190</span>
                <span className="text-2xl font-bold text-secondary">$170</span>
              </div>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                Experience 1.5 hours of real flight time including zero-g maneuvers over Van Nuys.
                Mention this coupon when you call or text to book.
              </p>
              <a href="tel:323-332-0585">
                <Button className="w-full font-bold gap-2">
                  <Phone className="w-4 h-4" />
                  Call to Book — 323-332-0585
                </Button>
              </a>
            </div>

            {/* Coupon 2 */}
            <div className="bg-white rounded-2xl border-2 border-dashed border-secondary/60 p-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-secondary text-white font-bold text-sm px-4 py-1 rounded-bl-xl">
                NEW STUDENT
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg leading-tight">First 5 Flights Special</p>
                  <p className="text-sm text-slate-500">Includes any hours flown in those 5 flights</p>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between items-center bg-slate-50 rounded-lg px-4 py-3">
                  <span className="font-medium text-slate-700">Aircraft Rental (<AviationTerm term="Wet rental" />)</span>
                  <div className="text-right">
                    <span className="text-slate-400 line-through text-sm mr-2">$160/hr</span>
                    <span className="font-bold text-secondary text-lg">$155/hr</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-slate-50 rounded-lg px-4 py-3">
                  <span className="font-medium text-slate-700">Instructor Rate</span>
                  <div className="text-right">
                    <span className="text-slate-400 line-through text-sm mr-2">$35/hr</span>
                    <span className="font-bold text-secondary text-lg">$30/hr</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-primary/5 border border-primary/10 rounded-lg px-4 py-3">
                  <span className="font-bold text-primary">Combined Dual (First 5 Flights)</span>
                  <span className="font-bold text-primary text-xl">$185/hr</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs mb-5">
                Valid for the first 5 flights. "Flights" means any scheduled lesson — hourly time applies to all hours flown during those sessions.
              </p>
              <a href="tel:323-332-0585">
                <Button variant="outline" className="w-full font-bold gap-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <Phone className="w-4 h-4" />
                  Call to Book — 323-332-0585
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing reference */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Standard Rates</p>
            <h2 className="text-3xl font-bold text-primary mb-3">Our Pricing — Clear and Upfront</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              No surprises. No hidden fees. These are the rates you pay when you train at Van Nuys Accelerated Flight School.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Standard */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-primary mb-1">Standard Rates</h3>
              <p className="text-sm text-slate-500 mb-6">Pay as you go — no commitment required</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-700 font-medium">Aircraft Rental (<AviationTerm term="Wet rental" />)</span>
                  <span className="font-bold text-secondary text-xl">$160/hr</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-700 font-medium">Instructor — David T.</span>
                  <span className="font-bold text-secondary text-xl">$35/hr</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-700 font-medium">Instructor — Reza S.</span>
                  <span className="font-bold text-secondary text-xl">$45/hr</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-slate-50 rounded-lg px-4">
                  <span className="text-slate-800 font-bold">Combined Dual (Aircraft + David)</span>
                  <span className="font-bold text-primary text-xl">$195/hr</span>
                </div>
              </div>
            </div>

            {/* 10-Hr Block */}
            <div className="bg-primary/5 rounded-2xl border border-primary/20 shadow-sm p-8">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-primary">10-Hour Block Rates</h3>
                <span className="bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">SAVE MORE</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">Pre-pay 10 hours for a better rate</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-primary/10">
                  <span className="text-slate-700 font-medium">Aircraft Rental (<AviationTerm term="Wet rental" />)</span>
                  <div className="text-right">
                    <span className="text-slate-400 line-through text-sm mr-2">$160</span>
                    <span className="font-bold text-secondary text-xl">$150/hr</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary/10">
                  <span className="text-slate-700 font-medium">Instructor — David T.</span>
                  <div className="text-right">
                    <span className="text-slate-400 line-through text-sm mr-2">$35</span>
                    <span className="font-bold text-secondary text-xl">$30/hr</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary/10">
                  <span className="text-slate-700 font-medium">Instructor — Reza S.</span>
                  <div className="text-right">
                    <span className="text-slate-400 line-through text-sm mr-2">$45</span>
                    <span className="font-bold text-secondary text-xl">$35/hr</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 bg-primary/10 rounded-lg px-4">
                  <span className="text-primary font-bold">Combined Dual (Aircraft + David)</span>
                  <span className="font-bold text-primary text-xl">$180/hr</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500">
            View the full pricing breakdown including checkride fees, student equipment, and program estimates on our{" "}
            <Link href="/van-nuys-accelerated-flight-school-pricing" className="text-secondary font-bold hover:underline">
              Pricing page
            </Link>.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Heart className="w-4 h-4 text-red-400" />
              Why We Charge Less and Deliver More
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lower Price. Higher Quality. That's Not a Contradiction.
            </h2>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg max-w-3xl mx-auto">
            <p>
              At Accelerated Flight School, we charge a fair and honest price because we have a genuine passion for teaching people to fly. We are not here to extract the maximum possible dollar from your training budget — we are here because we love aviation and we want you to pass, return, and progress.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="font-bold text-white text-xl mb-3">
                The truth about high prices at other flight schools:
              </p>
              <p className="mb-4">
                Almost all other flight schools charge significantly higher rates — and they use those higher prices to create the illusion of quality. Students see a $60/hr instructor rate and assume that rate means the instruction is better. In reality, most of the time, the opposite is true.
              </p>
              <p>
                A higher instructor rate often means nothing more than a school charging as much as the market allows. It does not reflect instructor experience, pass rates, student outcomes, or genuine care for your progress. The higher the price, the more likely the school simply relies on the perceived prestige of the cost rather than the actual quality of instruction.
              </p>
            </div>

            <p>
              We charge a fair price because we want you to succeed, return for your next rating, and send your friends and family to us. Our business model depends on students who pass and come back — not students who overpay and eventually give up.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: <DollarSign className="w-6 h-6 text-green-400" />, title: "Fair Pricing", desc: "Honest, transparent rates. No hidden fees. No inflated costs." },
                { icon: <CheckCircle2 className="w-6 h-6 text-green-400" />, title: "High Quality", desc: "Passion-driven instruction. We care about your checkride outcome." },
                { icon: <Heart className="w-6 h-6 text-red-400" />, title: "Student-First", desc: "We want you to pass, return, and progress. That's our entire model." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="mb-3">{item.icon}</div>
                  <p className="font-bold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Claim Your Coupon?</h2>
          <p className="text-slate-500 mb-8">Call or text us to book your Discovery Flight or start your training at our new student rate.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:323-332-0585">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                <Phone className="w-5 h-5" />
                Call 323-332-0585
              </Button>
            </a>
            <a href="sms:323-332-0585">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
                Text Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
