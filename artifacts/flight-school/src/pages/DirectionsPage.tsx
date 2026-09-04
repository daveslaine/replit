import React from "react";
import { Seo } from "@/components/Seo";
import { MapPin, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DirectionsPage() {
  return (
    <div className="w-full">
      <Seo
        title={"Directions to Accelerated Flight School | Van Nuys KVNY"}
        description={"Directions to Accelerated Flight School at 16425 Hart St, Van Nuys Airport (KVNY). Gate access code provided on arrival. Call 424-493-2761."}
      />

      <section className="relative bg-primary text-white pt-28 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-airliner-gate.webp" className="w-full h-full object-cover object-center" aria-hidden="true" alt="" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">
            Van Nuys Airport (KVNY)
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            How to Find Our Office
          </h1>
          <p className="text-lg text-primary-foreground/85">
            16425 Hart St, Van Nuys, CA 91406
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
                href="tel:424-493-2761"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-amber-900 underline underline-offset-2"
              >
                <Phone className="w-4 h-4" /> 424-493-2761
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
              src="/images/directions-entrance.webp"
              alt="Parking lot entrance at 16425 Hart Street with the entrance circled in blue and the school hangar marked by a red arrow"
              className="w-full object-cover"
            />
            <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 text-xs text-slate-500 leading-relaxed">
              View from the parking lot of 16425 Hart Street facing north. The
              entrance to our school is located in the blue circle shown above,
              the hangar we are located in is shown with a red arrow, and the
              gate-access code box is beside the gate within the circle. Please
              call or text when you arrive for the code.
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10">
            <iframe
              title="Accelerated Flight School location at Van Nuys Airport"
              src="https://www.google.com/maps?q=16425+Hart+St,+Van+Nuys,+CA+91406&output=embed"
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
                title: "Arrive at 16425 Hart St",
                detail:
                  "Enter the parking lot. Immediately to your left, you will see the building marked 16425, as shown in the blue circle in the photo above.",
              },
              {
                step: "2",
                title: "Park and walk to the circled entrance",
                detail:
                  "Park in the lot and walk to the area circled in blue in the photo above. Call or text 424-493-2761 when you reach the gate, and we will provide the access code.",
              },
              {
                step: "3",
                title: "Enter the gate and turn left at the second hangar",
                detail:
                  "Enter the code at the box beside the gate, walk through, and turn left at the second hangar shown with the red arrow in the image above, where you will see American Aviation.",
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
                  16425 Hart St
                  <br />
                  Van Nuys, CA 91406
                  <br />
                  Van Nuys Airport (VNY / KVNY)
                </p>
                <a
                  href="https://maps.google.com/?q=16425+Hart+St+Van+Nuys+CA+91406"
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
            <a href="tel:424-493-2761">
              <Button className="gap-2 font-bold">
                <Phone className="w-4 h-4" />
                Call 424-493-2761
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
