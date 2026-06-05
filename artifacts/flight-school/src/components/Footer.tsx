import React from "react";
import { Link } from "wouter";
import { Phone, MessageSquare, MapPin, Clock, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { SiYelp } from "react-icons/si";
import { Button } from "@/components/ui/button";

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full bg-white hover:bg-white/90 shadow-sm flex items-center justify-center transition-colors"
  >
    {children}
  </a>
);

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
            <a href="tel:323-332-0585">
              <Button variant="secondary" className="gap-2 font-bold w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Call 323-332-0585
              </Button>
            </a>
            <a href="sms:323-332-0585">
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
              <Link href="/" className="flex items-center gap-3">
                <img src="/images/logo.png" alt="Accelerated Flight School" style={{ height: "44px", width: "auto", filter: "brightness(0) invert(1)" }} />
                <span className="font-bold text-sm text-white whitespace-nowrap">Accelerated Flight School</span>
              </Link>
              <p className="text-primary-foreground/70 text-sm">Structured. Transparent. Affordable.</p>
              <div className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>7900 Balboa Blvd H7<br />Van Nuys, CA 91406</span>
              </div>
              {/* Social Links */}
              <div className="pt-1">
                <p className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-2 font-bold">Find Us Online</p>
                <div className="flex gap-2">
                  <SocialLink href="https://maps.app.goo.gl/xZWYCzZRoLzFBQ617" label="Google Business Profile">
                    <FcGoogle className="w-5 h-5" />
                  </SocialLink>
                  <SocialLink href="https://yelp.com/biz/accelerated-flight-school-van-nuys-2" label="Yelp">
                    <SiYelp className="w-5 h-5" style={{ color: "#d32323" }} />
                  </SocialLink>
                </div>
              </div>
            </div>

            {/* Training Programs */}
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Training Programs</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/discovery-flight-van-nuys" className="text-primary-foreground/70 hover:text-white transition-colors text-sm font-medium">
                    Discovery Flight — $190
                  </Link>
                </li>
                {[
                  { href: "/private-pilot-van-nuys", label: "Private Pilot" },
                  { href: "/instrument-rating-van-nuys", label: "Instrument Rating" },
                  { href: "/commercial-pilot-training-van-nuys", label: "Commercial Pilot" },
                  { href: "/commercial-pilot-multi-engine-add-on-van-nuys-flight-training", label: "Multi-Engine Add-On" },
                  { href: "/cfi-training-van-nuys", label: "CFI Training" },
                  { href: "/airline-pilot-path-van-nuys", label: "Airline Pilot Path" },
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
                  { href: "/flight-school-locations-los-angeles", label: "Areas We Serve" },
                  { href: "/los-angeles-air-tours-sightseeing-flights", label: "LA Air Tours & Sightseeing" },
                  { href: "/van-nuys-accelerated-flight-school-pricing", label: "Van Nuys Flight School Pricing" },
                  { href: "/van-nuys-accelerated-flight-school-deals-coupons", label: "Deals & Coupons" },
                  { href: "/van-nuys-accelerated-flight-school-aircraft", label: "Our Aircraft" },
                  { href: "/van-nuys-accelerated-flight-school-instructors", label: "Flight Instructors" },
                  { href: "/van-nuys-accelerated-flight-school-about", label: "About Us" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/van-nuys-accelerated-flight-school-contact", label: "Contact Us" },
                  { href: "/cheapest-flight-school-van-nuys-ca", label: "Cheapest Flight School Van Nuys" },
                  { href: "/low-cost-flight-school-van-nuys-ca", label: "Low-Cost Flight Training Van Nuys" },
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
                <a href="tel:323-332-0585" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-sm">
                  <Phone className="h-4 w-4 shrink-0" />
                  323-332-0585
                </a>
                <a href="sms:323-332-0585" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-sm">
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  Text Us
                </a>
                <a href="mailto:fly@acceleratedflightschool.net" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-sm break-all">
                  <Mail className="h-4 w-4 shrink-0" />
                  fly@acceleratedflightschool.net
                </a>
                <div className="flex items-start gap-2 text-primary-foreground/60 text-sm pt-1">
                  <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>Mon – Sun&nbsp;&nbsp;6:00 AM – 11:00 PM</span>
                </div>
                <div className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    7900 Balboa Blvd H7<br />
                    Van Nuys, CA 91406<br />
                    <span className="text-primary-foreground/40">(Van Nuys Airport – VNY)</span><br />
                    <Link href="/van-nuys-accelerated-flight-school-directions" className="text-primary-foreground/60 hover:text-white underline underline-offset-2 transition-colors text-xs mt-1 inline-block">
                      Click here for help finding our office
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-xs space-y-1">
            <p>&copy; {new Date().getFullYear()} Accelerated Flight School. All rights reserved. Van Nuys Airport (KVNY), Van Nuys, California.</p>
            <p>Affiliated with <span className="text-primary-foreground/60 font-medium">Accelerated Flight Academy</span>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
