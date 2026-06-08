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
const SESSION_ATTRIBUTION_KEY = "afs_session_attribution";
const SESSION_LANDING_PAGE_KEY = "afs_landing_page";

const TRAINING_PROGRAM_PATTERNS: Array<[RegExp, string]> = [
  [/private-pilot|ppl/, "private_pilot"],
  [/instrument|ifr|cfii/, "instrument_rating"],
  [/commercial-pilot|commercial/, "commercial_pilot"],
  [/cfi|flight-instructor/, "cfi_cfii"],
  [/airline-pilot|airline-path/, "airline_pathway"],
  [/discovery-flight|sightseeing|air-tour/, "discovery_flight"],
  [/aircraft|piper|warrior/, "aircraft_rental"],
  [/pricing|cost|cheap|affordable|low-cost|pay-as-you-fly|deals|coupons/, "pricing"],
];

const LOCAL_AREA_PATTERNS: Array<[RegExp, string]> = [
  [/van-nuys|kvny/, "van_nuys"],
  [/sherman-oaks/, "sherman_oaks"],
  [/encino/, "encino"],
  [/burbank/, "burbank"],
  [/calabasas/, "calabasas"],
  [/glendale/, "glendale"],
  [/north-hollywood/, "north_hollywood"],
  [/los-angeles/, "los_angeles"],
  [/santa-monica/, "santa_monica"],
  [/malibu/, "malibu"],
  [/pasadena/, "pasadena"],
  [/woodland-hills/, "woodland_hills"],
  [/tarzana/, "tarzana"],
  [/studio-city/, "studio_city"],
  [/santa-clarita/, "santa_clarita"],
  [/simi-valley/, "simi_valley"],
  [/camarillo/, "camarillo"],
  [/long-beach/, "long_beach"],
];

function canTrack() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

function getSessionAttribution(): GtagParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const attribution: GtagParams = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "gbraid",
    "wbraid",
  ]) {
    const value = params.get(key);
    if (value) attribution[key] = value;
  }

  try {
    if (Object.keys(attribution).length > 0) {
      sessionStorage.setItem(
        SESSION_ATTRIBUTION_KEY,
        JSON.stringify(attribution),
      );
      return attribution;
    }

    const stored = sessionStorage.getItem(SESSION_ATTRIBUTION_KEY);
    return stored ? (JSON.parse(stored) as GtagParams) : {};
  } catch {
    return attribution;
  }
}

function getSessionLandingPage() {
  if (typeof window === "undefined") return undefined;

  const current = window.location.pathname + window.location.search;
  try {
    const stored = sessionStorage.getItem(SESSION_LANDING_PAGE_KEY);
    if (stored) return stored;
    sessionStorage.setItem(SESSION_LANDING_PAGE_KEY, current);
    return current;
  } catch {
    return current;
  }
}

function firstMatch(path: string, patterns: Array<[RegExp, string]>) {
  return patterns.find(([pattern]) => pattern.test(path))?.[1];
}

function getPageIntent(path: string) {
  const normalized = path.toLowerCase();
  const trainingProgram = firstMatch(normalized, TRAINING_PROGRAM_PATTERNS);
  const localArea = firstMatch(normalized, LOCAL_AREA_PATTERNS) ?? "van_nuys";

  let pageIntent = "general";
  if (/contact|thank-you/.test(normalized)) pageIntent = "lead_capture";
  else if (/pricing|cost|cheap|affordable|low-cost|deals|coupons/.test(normalized)) {
    pageIntent = "price_comparison";
  } else if (/near|locations|burbank|encino|sherman|calabasas|glendale|hollywood|los-angeles/.test(normalized)) {
    pageIntent = "local_search";
  } else if (trainingProgram) {
    pageIntent = "training_program";
  }

  return {
    page_intent: pageIntent,
    training_program: trainingProgram,
    local_area: localArea,
  };
}

function withCommonParams(pathOrParams?: string | GtagParams, params: GtagParams = {}) {
  const path =
    typeof pathOrParams === "string"
      ? pathOrParams
      : typeof window !== "undefined"
        ? window.location.pathname
        : "/";
  const extraParams =
    typeof pathOrParams === "object" && pathOrParams !== null
      ? pathOrParams
      : params;

  return {
    ...getPageIntent(path),
    ...getSessionAttribution(),
    landing_page: getSessionLandingPage(),
    current_page: path,
    ...extraParams,
  };
}

export function trackPageView(path: string) {
  if (!canTrack()) return;
  window.gtag!("config", GA_MEASUREMENT_ID, {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    ...withCommonParams(path),
  });
}

export function trackEvent(name: string, params: GtagParams = {}) {
  if (!canTrack()) return;
  window.gtag!("event", name, withCommonParams(params));
}

export function trackLeadFormSubmit(trainingGoal?: string, leadPath?: string) {
  trackEvent("generate_lead", {
    event_category: "lead",
    event_label: trainingGoal,
    lead_type: "contact_form",
    training_goal: trainingGoal,
    lead_path: leadPath,
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
    lead_type: `${kind}_click`,
  });
}

export function trackOutboundClick(href: string) {
  trackEvent("outbound_click", {
    event_category: "outbound",
    event_label: href,
    link_url: href,
  });
}

export function trackInternalLinkClick(href: string, linkText?: string) {
  const url = new URL(href, window.location.href);
  trackEvent("internal_link_click", {
    event_category: "navigation",
    event_label: linkText,
    link_url: url.pathname,
    destination_page_intent: getPageIntent(url.pathname).page_intent,
    destination_training_program: getPageIntent(url.pathname).training_program,
  });
}

export function trackLeadQuality(
  stage:
    | "qualified_lead"
    | "booked_discovery_flight"
    | "showed_up"
    | "enrolled"
    | "paid_deposit"
    | "student_started_training",
  params: GtagParams = {},
) {
  trackEvent(stage, {
    event_category: "lead_quality",
    lead_stage: stage,
    ...params,
  });
}
