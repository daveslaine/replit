import React from "react";
import { Link } from "wouter";
import {
  Building2,
  CheckCircle2,
  ExternalLink,
  Globe2,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const officialDetails = [
  {
    label: "Official website",
    value: "acceleratedflightschool.net",
    icon: Globe2,
  },
  {
    label: "Official phone",
    value: "424-493-2761",
    icon: Phone,
  },
  {
    label: "Google listing name",
    value: "Accelerated Flight School",
    icon: Building2,
  },
  {
    label: "Current contact address",
    value: "16425 Hart St, Van Nuys, CA 91406",
    icon: MapPin,
  },
];

export function OfficialIdentityPage() {
  return (
    <div className="w-full">
      <Seo
        title="Official Accelerated Flight School Identity | Van Nuys"
        description="Verify the official Accelerated Flight School in Van Nuys: acceleratedflightschool.net, 424-493-2761, our established Google listing, addresses, and non-affiliation notice."
      />

      <section className="relative overflow-hidden bg-primary pb-16 pt-28 text-white md:pb-20 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-ramp-dusk.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Official Business Identity Notice
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Verify the Official Accelerated Flight School
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            This notice helps students distinguish our established Van Nuys
            flight school from unaffiliated websites, listings, and businesses
            using a confusingly similar name.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-14 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-5 sm:grid-cols-2">
            {officialDetails.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {label}
                  </p>
                  <p className="font-semibold text-slate-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-4xl space-y-12 px-4">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
              Google Maps and Business Profile
            </p>
            <h2 className="mb-5 text-3xl font-bold text-primary">
              Two Different Listing Names Do Not Represent Two Locations of Our
              School
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-700">
              <p>
                Our established Google Maps and Google Business Profile listing
                appears as <strong>“Accelerated Flight School.”</strong> Our
                listing predates the later, unaffiliated listing named{" "}
                <strong>“Accelerated Flight School Van Nuys.”</strong>
              </p>
              <p>
                “Accelerated Flight School Van Nuys” is not operated by,
                affiliated with, authorized by, or endorsed by Accelerated
                Flight School or <strong>acceleratedflightschool.net</strong>.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7 md:p-9">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              The D3 Address Is Not Our School
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-700">
              <p>
                Accelerated Flight School does not operate at{" "}
                <strong>
                  7900 Balboa Blvd D3, Van Nuys, CA 91406
                </strong>
                .
              </p>
              <p>
                At that address, the visible signage, aircraft branding, and
                paperwork identify <strong>Essence Flight School</strong>, not
                an independently operated Accelerated Flight School location.
                Anyone directed to D3 and presented with Essence branding,
                aircraft, agreements, payment arrangements, or training
                paperwork is not receiving services from Accelerated Flight
                School or acceleratedflightschool.net.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
              Website and Content Distinction
            </p>
            <h2 className="mb-5 text-3xl font-bold text-primary">
              The `.com` Website Is Not Our Website
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-700">
              <p>
                The website <strong>acceleratedflightschool dot com</strong> is not
                owned, operated, authorized, or endorsed by Accelerated Flight
                School. It does not represent a second physical location of our
                school.
              </p>
              <p>
                We have documented that the unaffiliated website uses a
                confusingly similar business name and contains substantially
                similar flight-training, FAQ, and Areas We Serve content. Those
                similarities do not establish any ownership, authorization, or
                affiliation with us.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-7 md:p-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-800">
              Why This Notice Is Necessary
            </p>
            <h2 className="mb-5 text-3xl font-bold text-primary">
              Preventing Customer Confusion and Reputational Harm
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-700">
              <p>
                Our established Google listing uses the business name{" "}
                <strong>“Accelerated Flight School.”</strong> The later,
                unaffiliated listing uses that same name with{" "}
                <strong>“Van Nuys”</strong> added. We did not authorize that
                use, and we object to any representation that the two listings
                identify related locations or businesses.
              </p>
              <p>
                There is no Accelerated Flight School signage, logo, aircraft
                branding, contract, or training paperwork identifying a
                separate Accelerated Flight School operation at D3. The visible
                business identity at that location is Essence Flight School.
              </p>
              <p>
                This distinction matters because customers may otherwise
                attribute Essence Flight School&apos;s reputation, reviews,
                incidents, business practices, contracts, financing
                arrangements, aircraft, or personnel to us. Accelerated Flight
                School should not bear reputational harm arising from an
                unrelated operation simply because that operation or a
                referring website uses a confusingly similar name.
              </p>
              <p>
                We publish this notice so students can make an informed choice
                and understand exactly which business they are contacting
                before providing personal information, signing paperwork,
                arranging financing, making payment, or beginning flight
                training.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-7 text-white md:p-10">
            <h2 className="mb-5 text-2xl font-bold">
              No Affiliation With Essence or Encore
            </h2>
            <p className="mb-6 leading-relaxed text-slate-300">
              Accelerated Flight School and acceleratedflightschool.net are not
              affiliated with any of the following:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "acceleratedflightschool dot com",
                "“Accelerated Flight School Van Nuys”",
                "Essence Flight School",
                "Encore Flight Academy",
                "The operation at 7900 Balboa Blvd D3",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-200">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 leading-relaxed text-slate-300">
              Their aircraft, personnel, services, contracts, financing
              arrangements, customer reviews, incidents, and business history
              must not be attributed to Accelerated Flight School. We publish
              this notice to prevent customer confusion and the reputational
              harm caused when unrelated businesses are mistakenly associated
              with us.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-3xl font-bold text-primary">
              Current and Former Addresses
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-green-800">
                  Current contact address
                </p>
                <p className="font-semibold text-slate-900">
                  16425 Hart St
                  <br />
                  Van Nuys, CA 91406
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-600">
                  Former address
                </p>
                <p className="font-semibold text-slate-900">
                  7910 Balboa Blvd H7
                  <br />
                  Van Nuys, CA 91406
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  This former address may remain visible on established
                  third-party listings.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9">
            <h2 className="mb-5 text-2xl font-bold text-primary">
              Verify That You Are Contacting Us
            </h2>
            <ul className="mb-7 space-y-3 text-slate-700">
              {[
                "The website ends in .net",
                "The phone number is 424-493-2761",
                "The Google listing is named “Accelerated Flight School”",
                "You are not being directed to 7900 Balboa Blvd D3",
                "You are not presented with Essence branding, aircraft, contracts, or paperwork",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-700"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:424-493-2761">
                <Button size="lg" className="w-full gap-2 sm:w-auto">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call 424-493-2761
                </Button>
              </a>
              <Link href="/van-nuys-accelerated-flight-school-contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 sm:w-auto"
                >
                  Contact the Official School
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}