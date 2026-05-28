import React from "react";
import { Link } from "wouter";
import { Plane, Phone, MessageSquare, MapPin } from "lucide-react";
import { SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-primary-foreground" />
              <span className="font-bold text-xl">Accelerated FS</span>
            </Link>
            <p className="text-primary-foreground/80 font-medium">Structured. Transparent. Affordable.</p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" data-testid="link-instagram">
                <SiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" data-testid="link-tiktok">
                <SiTiktok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" data-testid="link-facebook">
                <SiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <p>Van Nuys Airport (KVNY)<br />Van Nuys, California</p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <a href="tel:818-469-1414">
                  <Button variant="secondary" size="sm" className="w-full sm:w-auto gap-2 justify-start">
                    <Phone className="h-4 w-4" />
                    Call 818-469-1414
                  </Button>
                </a>
                <a href="sms:818-469-1414">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2 justify-start bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <MessageSquare className="h-4 w-4" />
                    Text 818-469-1414
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/private-pilot-van-nuys" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Private Pilot</Link></li>
              <li><Link href="/instrument-rating-van-nuys" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Instrument Rating</Link></li>
              <li><Link href="/commercial-pilot-training" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Commercial Pilot</Link></li>
              <li><Link href="/cfi-training" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">CFI Training</Link></li>
              <li><Link href="/airline-pilot-path" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Airline Path</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Get Started</h3>
            <p className="text-primary-foreground/80">Completely new to aviation? Call or text us and we'll explain where to start.</p>
            <Link href="/contact" className="inline-block mt-2">
              <Button variant="secondary">Contact Us Today</Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Accelerated Flight School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}