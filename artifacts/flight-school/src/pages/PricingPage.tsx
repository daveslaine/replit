import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, Info, Tablet, Headphones, BookOpen, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";
import { StudentPromise } from "@/components/StudentPromise";

export function PricingPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Flight Training Pricing | Transparent Costs | Accelerated Flight School Van Nuys</title>
        <meta name="description" content="Transparent flight training pricing at Van Nuys Airport. Aircraft $160/hr wet. Combined dual from $180/hr. Private Pilot ~$7,500–$12,500. Call 818-469-1414." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Flight Training Pricing</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            We believe students should understand real training costs before they begin. Costs depend on consistency, study habits, weather, scheduling, and proficiency — but we provide realistic estimates upfront.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Rates */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Hourly Rates</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Aircraft Rental</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-600">Standard (<AviationTerm term="Wet rental" />)</span>
                    <span className="font-bold text-secondary">$160/hr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">10-Hour Block</span>
                    <span className="font-bold text-secondary">$150/hr</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Instructors</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-600">Reza S.</span>
                    <span className="font-bold text-secondary">$45/hr</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-600">David T. (Standard)</span>
                    <span className="font-bold text-secondary">$35/hr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">David T. (10-Hour Block)</span>
                    <span className="font-bold text-secondary">$30/hr</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-primary mb-2">Combined Dual Rates</h3>
                  <p className="text-xs text-slate-500 mb-3">Aircraft + Instructor flying together</p>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-slate-800">Standard Combined</span>
                    <span className="font-bold text-primary text-xl">$195/hr</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-slate-800">10-Hour Package Combined</span>
                    <span className="font-bold text-primary text-xl">$180/hr</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-slate-600">30-Hour Package</span>
                    <span className="text-sm font-bold text-slate-800">~$28/hr Inst. + ~$145/hr Acft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimates */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Program Estimates</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/private-pilot-van-nuys" className="font-bold text-lg text-secondary hover:underline">Private Pilot</Link>
                    <span className="font-bold text-xl text-primary">~$7,500–$12,500</span>
                  </div>
                  <p className="text-sm text-red-600 font-medium">SoCal Average: $15,000–$25,000+</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/instrument-rating-van-nuys" className="font-bold text-lg text-secondary hover:underline">Instrument Rating</Link>
                    <span className="font-bold text-slate-800">$180–$195/hr</span>
                  </div>
                  <p className="text-sm text-slate-600">Contact us for a detailed total estimate based on your current experience.</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/commercial-pilot-training" className="font-bold text-lg text-secondary hover:underline">Commercial Pilot</Link>
                    <span className="font-bold text-slate-800">~$40,000–$55,000</span>
                  </div>
                  <p className="text-sm text-slate-600">From zero hours. If you already have ratings, call for a custom bridge estimate.</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/cfi-training" className="font-bold text-lg text-secondary hover:underline">CFI Training</Link>
                    <span className="font-bold text-slate-800">~$3,000–$6,000</span>
                  </div>
                  <p className="text-sm text-slate-600">After completing Commercial Pilot.</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-lg text-slate-800">CFII Training</span>
                    <span className="font-bold text-slate-800">~$2,000–$4,000</span>
                  </div>
                  <p className="text-sm text-slate-600">After completing CFI.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkride Fees Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">FAA Checkride Fees</h2>
            <p className="text-slate-600 mb-6 text-sm">
              Every pilot certificate and rating requires a practical test administered by a <AviationTerm term="DPE" /> — a Designated Pilot Examiner. These fees are paid directly to the examiner and are separate from your training costs. They apply at every flight school with no exceptions.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 pr-4 font-bold text-slate-700">Certificate / Rating</th>
                    <th className="text-right py-3 font-bold text-slate-700">Estimated DPE Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 text-slate-700"><AviationTerm term="Private Pilot" /> Checkride</td>
                    <td className="py-3 text-right font-bold text-secondary">~$800 – $1,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700"><AviationTerm term="Instrument Rating" /> Checkride</td>
                    <td className="py-3 text-right font-bold text-secondary">~$800 – $1,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700"><AviationTerm term="Commercial Pilot" /> Checkride</td>
                    <td className="py-3 text-right font-bold text-secondary">~$800 – $1,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700"><AviationTerm term="CFI" /> Checkride</td>
                    <td className="py-3 text-right font-bold text-secondary">~$2,000 – $3,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700"><AviationTerm term="CFII" /> Checkride</td>
                    <td className="py-3 text-right font-bold text-secondary">~$800</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              DPE fees vary by examiner and may change. These figures reflect current Southern California market rates and are for planning purposes. Written (knowledge) test fees are separate — typically around $175 per attempt.
            </p>
          </div>

          {/* Student Equipment & Required Costs */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Required Student Equipment &amp; Fees</h2>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              The items below are required for every student at every flight school — there are no exceptions in aviation. We list them here so you have a complete and honest picture of what flight training costs before you begin.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Headset */}
              <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <Headphones className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Aviation Headset</h3>
                  <p className="text-2xl font-bold text-secondary mb-1">~$100 <span className="text-sm font-normal text-slate-500">one-time</span></p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A basic aviation headset is required before you can fly. Entry-level headsets in the $100 range are completely acceptable for student training. A good headset will last many years.
                  </p>
                </div>
              </div>

              {/* iPad + ForeFlight */}
              <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <Tablet className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">iPad or iPad Mini (with Cellular &amp; GPS)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Every student needs an iPad or iPad mini with built-in cellular and GPS — not Wi-Fi only. This is required to run ForeFlight, the industry-standard aviation navigation app. In busy airspace like the Los Angeles Basin, ForeFlight is a necessity, not optional.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-700">ForeFlight Basic (Student / VFR pilots)</span>
                      <span className="font-bold text-secondary text-sm">$130/yr</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-700">ForeFlight Essential (<AviationTerm term="Instrument Rating" /> and above)</span>
                      <span className="font-bold text-secondary text-sm">$260/yr</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Once you begin Instrument Rating training, you will need to upgrade to the Essential plan, which includes IFR en route charts, georeferenced approach plates, and other IFR-specific features.
                  </p>
                </div>
              </div>

              {/* FAA Medical */}
              <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <Stethoscope className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">FAA Medical Certificate</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before a student pilot can fly solo — meaning fly the aircraft without an instructor onboard — they must obtain a valid FAA medical certificate from an FAA Aviation Medical Examiner (AME). This is a federal requirement that applies at every flight school. Medical exam fees vary by examiner and class of medical but are typically in the range of $100–$200. We recommend completing your medical early in training.
                  </p>
                </div>
              </div>

              {/* FAA Books */}
              <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <BookOpen className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">FAA Textbooks &amp; Charts</h3>
                  <p className="text-sm font-bold text-green-700 mb-2">Free to download digitally</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    All official FAA training materials are available free online. You can also purchase printed copies if you prefer a physical book. Key materials include:
                  </p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Pilot's Handbook of Aeronautical Knowledge (PHAK)</li>
                    <li>• Airplane Flying Handbook (AFH)</li>
                    <li>• Instrument Flying Handbook (IFH)</li>
                    <li>• Instrument Procedures Handbook (IPH)</li>
                    <li>• FAR/AIM (Federal Aviation Regulations / Aeronautical Information Manual)</li>
                    <li>• VFR Sectional Charts and IFR En Route Charts</li>
                  </ul>
                  <p className="text-xs text-slate-500 mt-3">
                    All of the above are available free at <strong>faa.gov</strong> and through the FAA's digital library. We will point you to exactly where to find them.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Written test + misc */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Additional Costs to Be Aware Of</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Other costs include: written knowledge test fees (~$175 per attempt), renter's insurance if required, and the <AviationTerm term="DPE" /> <AviationTerm term="Checkride" /> fees listed above. We explain all of these at the start of training so students are never surprised. These costs are standard across all flight schools.
              </p>
            </div>
          </div>

        </div>
      </section>

      <div className="container mx-auto px-4">
        <StudentPromise />
      </div>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-6">Let's calculate your exact path.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:818-469-1414">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
              <Phone className="w-5 h-5" />
              Call or Text 818-469-1414
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}