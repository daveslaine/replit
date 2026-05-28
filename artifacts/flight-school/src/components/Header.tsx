import React from "react";
import { Link } from "wouter";
import { Plane, Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/private-pilot-van-nuys", label: "Private Pilot" },
  { href: "/instrument-rating-van-nuys", label: "Instrument Rating" },
  { href: "/commercial-pilot-training", label: "Commercial" },
  { href: "/cfi-training", label: "CFI Training" },
  { href: "/airline-pilot-path", label: "Airline Path" },
  { href: "/our-aircraft", label: "Our Aircraft" },
  { href: "/instructors", label: "Instructors" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home">
          <Plane className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-primary hidden sm:inline-block">Accelerated Flight School</span>
          <span className="font-bold text-lg text-primary sm:hidden">Accelerated FS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
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

        <div className="flex items-center gap-4">
          <a href="tel:818-469-1414" className="hidden md:inline-flex" data-testid="link-call-header">
            <Button variant="default" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Call or Text 818-469-1414
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2">
                  <Plane className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg text-primary">Accelerated FS</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary"
                        data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 mt-4">
                  <a href="tel:818-469-1414" className="w-full">
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Call 818-469-1414
                    </Button>
                  </a>
                  <a href="sms:818-469-1414" className="w-full">
                    <Button variant="outline" className="w-full gap-2">
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