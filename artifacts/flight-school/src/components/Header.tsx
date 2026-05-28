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
  { href: "/commercial-pilot-training", label: "Commercial Pilot" },
  { href: "/cfi-training", label: "CFI / CFII Training" },
  { href: "/airline-pilot-path", label: "Airline Pilot Path" },
];

const topNavLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/our-aircraft", label: "Aircraft" },
  { href: "/instructors", label: "Instructors" },
  { href: "/contact", label: "Contact" },
];

const mobileAllLinks = [
  { href: "/", label: "Home" },
  { href: "/discovery-flight", label: "Discovery Flight" },
  ...trainingLinks,
  ...topNavLinks,
];

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="link-home">
          <div className="bg-primary text-white rounded-md w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
            AF
          </div>
          <span className="font-bold text-base text-primary hidden sm:inline-block leading-tight">
            Accelerated Flight School
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {/* Training Programs dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setDropdownOpen((v) => !v)}
              data-testid="button-training-programs-dropdown"
            >
              Training Programs
              <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
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

          {/* Discovery Flight — highlighted pill */}
          <Link href="/discovery-flight" data-testid="link-discovery-flight-nav">
            <span className="inline-flex items-center gap-1.5 bg-secondary text-white text-sm font-bold px-3.5 py-1.5 rounded-full hover:bg-secondary/90 transition-colors">
              <Plane className="w-3.5 h-3.5" />
              Discovery Flight
            </span>
          </Link>

          {topNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:818-469-1414" className="hidden md:inline-flex" data-testid="link-call-header">
            <Button variant="default" size="sm" className="gap-2 font-bold">
              <Phone className="h-4 w-4" />
              818-469-1414
            </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2">
                  <div className="bg-primary text-white rounded-md w-8 h-8 flex items-center justify-center font-bold text-sm">
                    AF
                  </div>
                  <span className="font-bold text-base text-primary">Accelerated Flight School</span>
                </Link>
                {/* Discovery Flight highlighted in mobile too */}
                <Link href="/discovery-flight" className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-4 py-2 rounded-full text-sm w-fit">
                  <Plane className="w-4 h-4" />
                  Discovery Flight — $190
                </Link>
                <nav className="flex flex-col gap-1">
                  {mobileAllLinks.filter(l => l.href !== "/discovery-flight").map((link) => (
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
                  <a href="tel:818-469-1414" className="w-full">
                    <Button className="w-full gap-2 font-bold">
                      <Phone className="h-4 w-4" />
                      Call 818-469-1414
                    </Button>
                  </a>
                  <a href="sms:818-469-1414" className="w-full">
                    <Button variant="outline" className="w-full gap-2 font-bold">
                      <MessageSquare className="h-4 w-4" />
                      Text 818-469-1414
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
