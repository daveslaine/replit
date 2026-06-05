import React, { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Plane, Menu, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const trainingLinks = [
  { href: "/private-pilot-van-nuys", label: "Private Pilot" },
  { href: "/instrument-rating-van-nuys", label: "Instrument Rating" },
  { href: "/commercial-pilot-training-van-nuys", label: "Commercial Pilot" },
  { href: "/commercial-pilot-multi-engine-add-on-van-nuys-flight-training", label: "Multi-Engine Add-On" },
  { href: "/cfi-training-van-nuys", label: "CFI / CFII Training" },
  { href: "/airline-pilot-path-van-nuys", label: "Airline Pilot Path" },
];

const topNavLinks = [
  { href: "/van-nuys-accelerated-flight-school-pricing", label: "Pricing" },
  { href: "/van-nuys-accelerated-flight-school-deals-coupons", label: "Deals" },
  { href: "/van-nuys-accelerated-flight-school-aircraft", label: "Aircraft" },
  { href: "/van-nuys-accelerated-flight-school-instructors", label: "Instructors" },
  { href: "/faq", label: "FAQ" },
  { href: "/van-nuys-accelerated-flight-school-contact", label: "Contact" },
];

const mobileAllLinks = [
  { href: "/", label: "Home" },
  { href: "/discovery-flight-van-nuys", label: "Discovery Flight" },
  ...trainingLinks,
  { href: "/van-nuys-accelerated-flight-school-pricing", label: "Pricing" },
  { href: "/van-nuys-accelerated-flight-school-deals-coupons", label: "Deals & Coupons" },
  { href: "/van-nuys-accelerated-flight-school-aircraft", label: "Aircraft" },
  { href: "/van-nuys-accelerated-flight-school-instructors", label: "Instructors" },
  { href: "/faq", label: "FAQ" },
  { href: "/van-nuys-accelerated-flight-school-contact", label: "Contact" },
];

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const transparent = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-white border-b border-slate-200 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" data-testid="link-home">
          <img
            src={transparent ? "/images/logo.png" : "/images/afs-logo-new.png"}
            alt="Accelerated Flight School"
            style={{
              height: "48px",
              width: "auto",
              filter: transparent ? "brightness(0) invert(1)" : "none",
              transition: "filter 0.3s",
            }}
          />
          <span
            className={`font-bold text-sm leading-tight text-white transition-opacity duration-300 ${
              transparent ? "hidden sm:block" : "hidden"
            }`}
          >
            Accelerated<br />Flight School
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 flex-1 justify-center">
          {/* Training Programs dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`flex items-center gap-1 text-xs font-medium transition-colors duration-300 ${
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-slate-600 hover:text-primary"
              }`}
              onClick={() => setDropdownOpen((v) => !v)}
              data-testid="button-training-programs-dropdown"
            >
              Training Programs
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl border border-slate-200 shadow-lg py-2 z-50">
                {trainingLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary font-medium"
                    onClick={() => setDropdownOpen(false)}
                    data-testid={`link-dropdown-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Discovery Flight — always blue pill */}
          <Link href="/discovery-flight-van-nuys" data-testid="link-discovery-flight-nav">
            <span className="inline-flex items-center gap-1.5 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-secondary/90 transition-colors">
              <Plane className="w-3 h-3" />
              Discovery Flight
            </span>
          </Link>

          {topNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium transition-colors duration-300 ${
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-slate-600 hover:text-primary"
              }`}
              data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: phone button */}
        <div className="flex items-center gap-2 shrink-0">
          <a href="tel:323-332-0585" className="hidden md:inline-flex" data-testid="link-call-header">
            <Button
              variant="default"
              size="sm"
              className={`gap-1.5 font-bold text-xs px-3 h-8 transition-all duration-300 ${
                transparent
                  ? "bg-primary/80 hover:bg-primary border-white/20 text-white"
                  : ""
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              323-332-0585
            </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden h-8 w-8 transition-colors duration-300 ${
                  transparent ? "text-white hover:bg-white/10" : ""
                }`}
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center">
                  <img src="/images/afs-logo-new.png" alt="Accelerated Flight School" style={{ height: "44px", width: "auto" }} />
                </Link>
                <Link href="/discovery-flight-van-nuys" className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-4 py-2 rounded-full text-sm w-fit">
                  <Plane className="w-4 h-4" />
                  Discovery Flight — $190
                </Link>
                <nav className="flex flex-col gap-1">
                  {mobileAllLinks.filter(l => l.href !== "/discovery-flight-van-nuys").map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base font-medium text-foreground hover:text-primary px-2 py-2 rounded-lg hover:bg-slate-50"
                        data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                  <a href="tel:323-332-0585" className="w-full">
                    <Button className="w-full gap-2 font-bold">
                      <Phone className="h-4 w-4" />
                      Call 323-332-0585
                    </Button>
                  </a>
                  <a href="sms:323-332-0585" className="w-full">
                    <Button variant="outline" className="w-full gap-2 font-bold">
                      <MessageSquare className="h-4 w-4" />
                      Text 323-332-0585
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
