import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t p-3 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex gap-3 container mx-auto">
        <a href="tel:323-332-0585" className="flex-1" data-testid="link-mobile-call">
          <Button size="lg" className="w-full gap-2 font-bold bg-primary text-primary-foreground hover:bg-primary/90">
            <Phone className="h-5 w-5 fill-current" />
            Call Now
          </Button>
        </a>
        <a href="sms:323-332-0585" className="flex-1" data-testid="link-mobile-text">
          <Button size="lg" variant="outline" className="w-full gap-2 font-bold border-2 border-primary text-primary hover:bg-primary/5">
            <MessageSquare className="h-5 w-5" />
            Text Now
          </Button>
        </a>
      </div>
    </div>
  );
}