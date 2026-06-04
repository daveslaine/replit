import React from "react";
import { Link } from "wouter";
import { Phone, MessageSquare, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth="3" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GoogleBusinessIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V11a1 1 0 0 0-2 0v5.93A8 8 0 0 1 4.07 13H10a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V10a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H14a1 1 0 0 0 0 2h5.93A8 8 0 0 1 13 19.93z" />
    </svg>
  );
}

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center transition-colors text-white"
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
            <a href="tel:310-490-0402">
              <Button variant="secondary" className="gap-2 font-bold w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Call 310-490-0402
              </Button>
            </a>
            <a href="sms:310-490-0402">
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
                <img src="/images/logo.png" alt="Accelerated Flight Academy" style={{ height: "56px", width: "auto", filter: "brightness(0) invert(1)" }} />
                <span className="font-bold text-base text-white leading-tight">
                  Accelerated<br />Flight Academy
                </span>
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
                  <SocialLink href="#" label="Google Business">
                    <GoogleBusinessIcon />
                  </SocialLink>
                  <SocialLink href="#" label="Yelp">
                    <YelpIcon />
                  </SocialLink>
                  <SocialLink href="#" label="Instagram">
                    <InstagramIcon />
                  </SocialLink>
                  <SocialLink href="#" label="Facebook">
                    <FacebookIcon />
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
                <a href="tel:310-490-0402" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-sm">
                  <Phone className="h-4 w-4 shrink-0" />
                  310-490-0402
                </a>
                <a href="sms:310-490-0402" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-sm">
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
            <p>&copy; {new Date().getFullYear()} Accelerated Flight Academy. All rights reserved. Van Nuys Airport (KVNY), Van Nuys, California.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
