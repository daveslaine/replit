import React from "react";
import { Link } from "wouter";
import { Plane, Phone, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      {/* Top CTA bar */}
      <div className="border-b border-primary-foreground/10 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-lg text-white mb-1">Completely new to aviation?</p>
            <p className="text-primary-foreground/70 text-sm">
              Call or text us and we'll explain where to start. No pressure, no commitments.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:818-469-1414">
              <Button variant="secondary" className="gap-2 font-bold w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Call 818-469-1414
              </Button>
            </a>
            <a href="sms:818-469-1414">
              <Button
                variant="outline"
                className="gap-2 font-bold w-full sm:w-auto bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <MessageSquare className="h-4 w-4" />
                Text Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-white/10 text-white rounded-md w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                  AF
                </div>
                <span className="font-bold text-base text-white leading-tight">
                  Accelerated Flight School
                </span>
              </Link>
              <p className="text-primary-foreground/70 text-sm">Structured. Transparent. Affordable.</p>
              <div className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Van Nuys Airport (KVNY)<br />Van Nuys, California</span>
              </div>
            </div>

            {/* Training Programs */}
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Training Programs</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/discovery-flight" className="text-primary-foreground/70 hover:text-white transition-colors text-sm font-medium">
                    Discovery Flight — $190
                  </Link>
                </li>
                {[
                  { href: "/private-pilot-van-nuys", label: "Private Pilot" },
                  { href: "/instrument-rating-van-nuys", label: "Instrument Rating" },
                  { href: "/commercial-pilot-training", label: "Commercial Pilot" },
                  { href: "/cfi-training", label: "CFI Training" },
                  { href: "/airline-pilot-path", label: "Airline Pilot Path" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2.5">
                {[
                  { href: "/pricing", label: "Pricing" },
                  { href: "/our-aircraft", label: "Our Aircraft" },
                  { href: "/instructors", label: "Instructors" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/cheapest-flight-school-van-nuys-ca", label: "Cheapest Flight School Van Nuys" },
                  { href: "/low-cost-flight-school-van-nuys-ca", label: "Low-Cost Flight Training" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Contact</h3>
              <div className="space-y-3">
                <a href="tel:818-469-1414" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-sm">
                  <Phone className="h-4 w-4 shrink-0" />
                  818-469-1414
                </a>
                <a href="sms:818-469-1414" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-sm">
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  Text Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-xs">
            <p>&copy; {new Date().getFullYear()} Accelerated Flight School. All rights reserved. Van Nuys Airport (KVNY), Van Nuys, California.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
