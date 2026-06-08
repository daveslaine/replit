import React from "react";
import { Link } from "wouter";
import { CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

export function ContactThankYouPage() {
  return (
    <div className="w-full">
      <Seo
        title="Message Sent | Accelerated Flight School"
        description="Thank you for contacting Accelerated Flight School at Van Nuys Airport. We will follow up soon about your flight training goals."
        canonical="https://acceleratedflightschool.net/contact-thank-you"
        robots="noindex, follow"
      />

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-secondary">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Message Sent
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            We received your flight training inquiry and will follow up soon.
            If you want the fastest answer, call or text us now.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <a href="tel:323-332-0585">
              <Button className="h-14 w-full gap-2 text-base" variant="secondary">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
            <a href="sms:323-332-0585">
              <Button className="h-14 w-full gap-2 text-base" variant="outline">
                <MessageSquare className="h-5 w-5" />
                Text Us
              </Button>
            </a>
            <Link href="/van-nuys-accelerated-flight-school-pricing">
              <Button className="h-14 w-full text-base" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-2xl font-bold text-primary">
              What happens next
            </h2>
            <div className="grid gap-4 text-slate-700 md:grid-cols-3">
              <div>
                <p className="font-bold text-slate-900">1. Goal check</p>
                <p>We look at your training goal, schedule, and experience.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">2. Cost clarity</p>
                <p>We explain realistic pay-as-you-fly training costs.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">3. Next flight</p>
                <p>We help you choose a first lesson or discovery flight.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
