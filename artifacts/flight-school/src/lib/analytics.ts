type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event",
      target: string,
      params?: GtagParams,
    ) => void;
  }
}

const GA_MEASUREMENT_ID = "G-MF17HGD9C9";

function canTrack() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function trackPageView(path: string) {
  if (!canTrack()) return;
  window.gtag!("config", GA_MEASUREMENT_ID, {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(name: string, params: GtagParams = {}) {
  if (!canTrack()) return;
  window.gtag!("event", name, params);
}

export function trackLeadFormSubmit(trainingGoal?: string) {
  trackEvent("generate_lead", {
    event_category: "lead",
    event_label: trainingGoal,
    lead_type: "contact_form",
  });
}

export function trackContactClick(
  kind: "phone" | "sms" | "email",
  href: string,
) {
  trackEvent(`${kind}_click`, {
    event_category: "lead",
    event_label: href,
    link_url: href,
  });
}

export function trackOutboundClick(href: string) {
  trackEvent("outbound_click", {
    event_category: "outbound",
    event_label: href,
    link_url: href,
  });
}
