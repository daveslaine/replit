import React from "react";
import { Seo } from "@/components/Seo";
import { MapPin, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DirectionsPage() {
  return (
    <div className="w-full">
      <Seo
        title={"Directions to Accelerated Flight School | Van Nuys KVNY"}
        description={"Directions to Accelerated Flight School at 7910 Balboa Blvd H7, Van Nuys Airport (KVNY). Gate access code provided on arrival. Call 323-332-0585."}
      />

      <section className="bg-primary text-white pt-28 md:pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">
            Van Nuys Airport (KVNY)
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            How to Find Our Office
          </h1>
          <p className="text-lg text-primary-foreground/85">
            7910 Balboa Blvd H7, Van Nuys, CA 91406
          </p>
        </div>
      </section>

      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-3 bg-amber-100 border border-amber-300 rounded-xl p-5">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 mb-1">
                Gate Access Code Required
              </p>
              <p className="text-amber-800 text-sm leading-relaxed">
                The entrance gate requires a code to open.{" "}
                <strong>Call or text us when you arrive</strong> and we will
                give you the code immediately.
              </p>
              <a
                href="tel:323-332-0585"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-amber-900 underline underline-offset-2"
              >
                <Phone className="w-4 h-4" /> 323-332-0585
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Photo */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10">
            <img
              src="/images/directions-entrance.png"
              alt="Entrance view at 7910 Balboa Blvd Van Nuys Airport — red gate on left near Foxtrot Hangars, flight school building on right"
              className="w-full object-cover"
            />
            <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 text-xs text-slate-500 leading-relaxed">
              View from Balboa Blvd.{" "}
              <strong className="text-slate-700">Left circle:</strong> Foxtrot
              Hangars (Building F area) — the red arrow marks the gate entrance
              you will use.{" "}
              <strong className="text-slate-700">Right circle:</strong> The
              hangar building on the right side houses multiple flight schools.
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10">
            <iframe
              title="Accelerated Flight School location at Van Nuys Airport"
              src="https://www.google.com/maps?q=7910+Balboa+Blvd+H7,+Van+Nuys,+CA+91406&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Step-by-step directions */}
          <h2 className="text-2xl font-bold text-primary mb-6">
            Step-by-Step Directions
          </h2>

          <ol className="space-y-5">
            {[
              {
                step: "1",
                title: "Arrive at 7910 Balboa Blvd, Van Nuys, CA 91406",
                detail:
                  "Pull up to the address. You will see the airport complex. On the right side, there is a large hangar building that houses multiple flight schools — you can see it in the photo above with the red circle on the right.",
              },
              {
                step: "2",
                title: "Call or text us for the gate code",
                detail:
                  "Before you enter, call or text 323-332-0585. We will give you the access code for the red gate immediately.",
              },
              {
                step: "3",
                title:
                  "Enter the red gate (marked with the red arrow in the photo)",
                detail:
                  "Use the code we provide to open the red gate on the left side as shown in the photo above. This gate is near the Foxtrot Hangars area (Building F), visible in the left circle. Enter the property.",
              },
              {
                step: "4",
                title: "Walk straight, then turn left at the first left",
                detail:
                  "After entering the gate, walk straight ahead. Take the first available left turn.",
              },
              {
                step: "5",
                title: "Keep walking until you see the H hangar building",
                detail:
                  "Continue walking until you see the hangar building marked H. This is a large structure that houses multiple individual hangars. You are looking for hangar H7.",
              },
              {
                step: "6",
                title:
                  "Walk to the other side of the H hangar building, then turn left",
                detail:
                  "Go around to the other side of the H building, then turn left.",
              },
              {
                step: "7",
                title:
                  "Follow signs for Accelerated Flight School / Accelerated Flight Academy",
                detail:
                  "Look for our signage. You have arrived at Accelerated Flight School — Hangar H7.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-secondary text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div className="pt-1">
                  <p className="font-bold text-primary mb-0.5">{item.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 bg-primary/5 border border-primary/15 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-primary mb-1">Full Address</p>
                <p className="text-slate-700 text-sm">
                  7910 Balboa Blvd H7
                  <br />
                  Van Nuys, CA 91406
                  <br />
                  Van Nuys Airport (VNY / KVNY)
                </p>
                <a
                  href="https://maps.google.com/?q=7910+Balboa+Blvd+H7+Van+Nuys+CA+91406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/5 gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm mb-3">
              Still not sure? We're happy to talk you through it.
            </p>
            <a href="tel:323-332-0585">
              <Button className="gap-2 font-bold">
                <Phone className="w-4 h-4" />
                Call 323-332-0585
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
