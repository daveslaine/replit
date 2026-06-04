import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, Info, Tablet, Headphones, BookOpen, Stethoscope, Shield, CheckCircle2, ExternalLink, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AviationTerm } from "@/components/AviationTerm";
import { StudentPromise } from "@/components/StudentPromise";

export function PricingPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Flight Training Pricing | Van Nuys Airport KVNY | Transparent Costs | Accelerated Flight School</title>
        <meta name="description" content="Transparent flight training pricing at Van Nuys Airport. Aircraft $160/hr wet. Combined dual from $180/hr. Private Pilot ~$7,500–$12,500. Call 310-490-0402." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Flight Training Pricing</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-6">
            We believe students should understand real training costs before they begin. Costs depend on consistency, study habits, weather, scheduling, and proficiency — but we provide realistic estimates upfront.
          </p>
          <p className="text-sm font-bold text-green-400 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            No upfront payment — pay only when you fly
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
                    <span className="text-sm text-slate-600">30-Hour Package Combined</span>
                    <span className="text-sm font-bold text-slate-800">$173/hr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimates */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-primary mb-2 border-b border-slate-100 pb-4">Program Estimates</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800 font-medium">No Upfront Payment — Pay only when you fly. Combined dual rates from $180–$195/hr.</p>
              </div>
              
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
                    <span className="font-bold text-xl text-primary">~$8,500–$15,000</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">The lower estimate is possible with rigorous use of a safety pilot. Contact us for a detailed total estimate based on your current experience.</p>
                  <p className="text-sm text-red-600 font-medium">SoCal Average: $16,000–$23,000</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/commercial-pilot-training-van-nuys" className="font-bold text-lg text-secondary hover:underline">Commercial Pilot</Link>
                    <span className="font-bold text-slate-800">~$40,000–$55,000</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">From zero hours. If you already have ratings, call for a custom bridge estimate.</p>
                  <p className="text-sm text-red-600 font-medium">SoCal Average: $70,000–$110,000</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-lg text-slate-800">Commercial Pilot (hours included)</span>
                    <span className="font-bold text-slate-800">Call or text</span>
                  </div>
                  <p className="text-sm text-slate-600">For exact price. Requires 250 hrs total aircraft time and 100 hrs XC PIC time.</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/commercial-pilot-multi-engine-add-on-van-nuys-flight-training" className="font-bold text-lg text-secondary hover:underline">Commercial Multi-Engine Add-On</Link>
                    <span className="font-bold text-slate-800">$3,000–$4,000</span>
                  </div>
                  <p className="text-sm text-red-600 font-medium">SoCal Average: $5,000–$8,000</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <Link href="/cfi-training-van-nuys" className="font-bold text-lg text-secondary hover:underline">CFI Training</Link>
                    <span className="font-bold text-slate-800">~$3,000–$6,000</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">After completing Commercial Pilot.</p>
                  <p className="text-sm text-red-600 font-medium">SoCal Average: $5,000–$11,000</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-lg text-slate-800">CFII Training</span>
                    <span className="font-bold text-slate-800">~$2,000–$4,000</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">After completing CFI.</p>
                  <p className="text-sm text-red-600 font-medium">SoCal Average: $3,000–$6,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkride Fees Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">FAA Checkride Fees</h2>
            <p className="text-slate-600 mb-3 text-sm">
              Every pilot certificate and rating requires a practical test administered by a <AviationTerm term="DPE" /> — a Designated Pilot Examiner. These fees are paid directly to the examiner and are separate from your training costs. They apply at every flight school with no exceptions.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6 text-sm text-green-800 leading-relaxed">
              <strong>No upfront payment for checkrides.</strong> You pay these fees directly to the examiner only when you take that specific checkride. For example, if you are pursuing your Private Pilot Certificate, you will pay the DPE $800–$1,000 at that time only — not before, and not for future ratings. You never pay all checkride fees at once. Each fee is due only for the certificate or rating you are actively testing for.
            </div>
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
                    A basic aviation headset is required before you can fly. Entry-level headsets in the $100 range are completely acceptable for student training. Buy it once and you're set — your headset works throughout all ratings and training stages, and will last many years.
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
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">
                    Before a student pilot can fly solo — meaning fly the aircraft without an instructor onboard — they must obtain a valid FAA medical certificate from an FAA Aviation Medical Examiner (AME). This is a federal requirement that applies at every flight school. Medical exam fees vary by examiner and class of medical but are typically in the range of $100–$200. We recommend completing your medical early in training.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Duration:</strong> Your medical certificate lasts <strong>5 years</strong> from the date issued if you were under age 40 at the time of the exam, or <strong>2 years</strong> if you were age 40 or older.
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
                  <ul className="text-sm text-slate-700 space-y-1.5">
                    <li className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-secondary shrink-0" />
                      <a href="https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        Pilot's Handbook of Aeronautical Knowledge (PHAK)
                      </a>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-secondary shrink-0" />
                      <a href="https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        Airplane Flying Handbook (AFH)
                      </a>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-secondary shrink-0" />
                      <a href="https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        Instrument Flying Handbook (IFH)
                      </a>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-secondary shrink-0" />
                      <a href="https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook/FAA-H-8083-16B.pdf" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        Instrument Procedures Handbook (IPH)
                      </a>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-secondary shrink-0" />
                      <a href="https://www.ecfr.gov/current/title-14/chapter-I" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        FAR — Federal Aviation Regulations (Title 14)
                      </a>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-secondary shrink-0" />
                      <a href="https://www.faa.gov/Air_traffic/publications/media/AIM-Basic-w-Chg1-and-Chg2-dtd-3-21-24.pdf" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        AIM — Aeronautical Information Manual
                      </a>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-secondary shrink-0" />
                      <a href="https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/vfr/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        VFR Sectional Charts
                      </a>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-secondary shrink-0" />
                      <a href="https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/ifr/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        IFR Low En Route Charts
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-500 mt-3">
                    All of the above are available free at <strong>faa.gov</strong>. We will point you to exactly where to find each one.
                  </p>
                </div>
              </div>

              {/* Rental Insurance */}
              <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 md:col-span-2">
                <Shield className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="font-bold text-slate-800 mb-1">Renter's Insurance</h3>
                  <p className="text-2xl font-bold text-secondary mb-1">~$300/yr <span className="text-sm font-normal text-slate-500">one-time annual fee</span></p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Renter's insurance is required only when you rent the aircraft for solo flight or any flight without an instructor present. <strong>It is not required while flying with an instructor onboard.</strong> Once you begin solo flying, you must maintain active coverage.
                  </p>
                  <h4 className="text-sm font-bold text-slate-700 mb-2">Required Minimum Coverage:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg border border-slate-200 p-3">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Bodily Injury &amp; Property Damage Liability</p>
                      <ul className="text-sm text-slate-700 space-y-0.5">
                        <li>• $25,000 per person</li>
                        <li>• $250,000 property damage</li>
                        <li>• $250,000 per accident</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg border border-slate-200 p-3">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Aircraft Damage Liability</p>
                      <ul className="text-sm text-slate-700 space-y-0.5">
                        <li>• $25,000 each non-owned aircraft</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Written test + misc */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4 mb-8">
            <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Additional Costs to Be Aware Of</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Other costs include: written knowledge test fees (~$175 per attempt), renter's insurance if required, and the <AviationTerm term="DPE" /> <AviationTerm term="Checkride" /> fees listed above. We explain all of these at the start of training so students are never surprised. These costs are standard across all flight schools.
              </p>
            </div>
          </div>

          {/* Loan Warning */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10">
            <div className="flex gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Why We Don't Offer Flight Training Loans — And Why You Should Be Skeptical of Schools That Do</h2>
                <p className="text-sm text-slate-400">Flight school financing, pilot loan programs, zero-down flight training offers — how they really work.</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              Some flight schools — typically large Part 141 academies, and some Part 61 schools that heavily advertise zero-to-airline-pilot programs — offer financing programs or partnerships with pilot loan providers. On the surface, this sounds convenient. In practice, the economics are stacked heavily against you as a student.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="font-bold text-yellow-400 mb-3 text-sm uppercase tracking-wider">The True Cost With a Loan</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold shrink-0">•</span>
                    <span>Going from <strong className="text-white">zero hours to Commercial Pilot + CFI</strong> at a loan-affiliated school typically costs <strong className="text-yellow-300">$110,000 or more</strong> — paid by the loan provider, not you, upfront.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold shrink-0">•</span>
                    <span>Repayment begins the moment you start working as a new instructor — earning entry-level instructor pay while carrying a six-figure debt load.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold shrink-0">•</span>
                    <span>By the time the loan is fully paid off, total repayment with interest often reaches <strong className="text-yellow-300">$250,000–$300,000</strong>.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="font-bold text-yellow-400 mb-3 text-sm uppercase tracking-wider">Why Large Loan Schools Have a Bad Reputation</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold shrink-0">•</span>
                    <span>The loan disbursement typically happens far before you finish their promised 7–8 month program. Once the school has been paid by the lender, their financial incentive to keep you enrolled is significantly reduced.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold shrink-0">•</span>
                    <span>Students who struggle — for any reason — are frequently dismissed on pretextual grounds. The school keeps the disbursed loan money. You are left with partial training and the full debt.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold shrink-0">•</span>
                    <span>The school charges more because the lender is paying — not you. Higher prices mean higher loan balances and higher total repayment for the student.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-5">
              <h3 className="font-bold text-white mb-2">Our Position</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We do not offer loan financing, and we are not affiliated with any pilot loan program. We charge the same rate regardless of how you pay — and you pay only when you fly. A student paying $195/hr for 60 hours of dual training pays $11,700. The same 60 hours at a loan-affiliated school can cost $25,000–$40,000, financed at high interest rates, with repayment beginning on day one of your new instructor career. We think you deserve better than that.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Payment Methods</p>
          <h2 className="text-xl font-bold text-primary mb-6">We Accept</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Cash", "Zelle", "Apple Pay", "CashApp", "PayPal"].map((method) => (
              <div
                key={method}
                className="bg-white border border-slate-200 rounded-xl px-5 py-3 font-semibold text-primary text-sm shadow-sm"
              >
                {method}
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">Payment is collected per flight — no large upfront sums required.</p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <StudentPromise />
      </div>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-6">Let's calculate your exact path.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:310-490-0402">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold gap-2">
              <Phone className="w-5 h-5" />
              Call or Text 310-490-0402
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
