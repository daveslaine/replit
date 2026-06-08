import React, { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  trackContactClick,
  trackInternalLinkClick,
  trackOutboundClick,
  trackPageView,
} from "@/lib/analytics";

function classifyContactHref(href: string) {
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("sms:")) return "sms";
  if (href.startsWith("mailto:")) return "email";
  return null;
}

function isExternalUrl(href: string) {
  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

function isTrackableInternalUrl(href: string) {
  try {
    const url = new URL(href, window.location.href);
    return (
      url.origin === window.location.origin &&
      url.pathname !== window.location.pathname &&
      !url.pathname.startsWith("/admin")
    );
  } catch {
    return false;
  }
}

export function AnalyticsTracker() {
  const [location] = useLocation();
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    trackPageView(location);
  }, [location]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;

      const contactKind = classifyContactHref(href);
      if (contactKind) {
        trackContactClick(contactKind, href);
        return;
      }

      if (isExternalUrl(href)) {
        trackOutboundClick(href);
        return;
      }

      if (isTrackableInternalUrl(href)) {
        trackInternalLinkClick(href, link.textContent?.trim().slice(0, 80));
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
