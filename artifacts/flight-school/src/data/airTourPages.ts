export interface AirTourFAQ {
  q: string;
  a: string;
}

export interface AirTourPageConfig {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheadline: string;
  intro: string[];
  sceneryIntro: string;
  scenery: string[];
  clarify: string;
  pricingNote?: string;
  ctaNote?: string;
  faqs: AirTourFAQ[];
}

export const airTourPages: AirTourPageConfig[] = [
  {
    slug: "los-angeles-sightseeing-air-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Los Angeles Sightseeing Air Tour | Accelerated Flight School KVNY",
    metaDescription:
      "Looking for a Los Angeles sightseeing air tour? Book a real discovery flight lesson from Van Nuys Airport. Fly with a CFI, take the controls, and see iconic LA scenery. $190 for 1 person, $270 for 2.",
    h1: "Los Angeles Sightseeing Air Tour Alternative: Discovery Flight from Van Nuys Airport",
    subheadline:
      "A real discovery flight lesson with a Certified Flight Instructor from Van Nuys Airport (KVNY) — not a passive sightseeing charter. Sit up front, learn the controls, and you may fly the airplane yourself.",
    intro: [
      "Many people search for a Los Angeles sightseeing air tour when they want an unforgettable view of the city from the air. Accelerated Flight School offers something better: a real discovery flight lesson with a Certified Flight Instructor (CFI) at Van Nuys Airport.",
      "This is not a passive sightseeing charter. You sit up front in the cockpit, learn the basic flight controls, and — with your instructor's guidance — you may fly the airplane yourself. It is an interactive, hands-on introduction to real flying that just happens to come with incredible scenery.",
      "Routing and scenery always depend on weather, air traffic control (ATC), airspace, and safety on the day of your flight, but a typical flight from KVNY can offer sweeping views across the greater Los Angeles area.",
    ],
    sceneryIntro: "Depending on route and conditions, your flight may include views of:",
    scenery: [
      "San Fernando Valley",
      "Downtown LA",
      "Hollywood Sign area",
      "Malibu coastline",
      "Santa Monica Mountains",
      "Greater Los Angeles",
    ],
    clarify:
      "This is a discovery flight lesson, not a charter sightseeing air tour. You fly with a Certified Flight Instructor and may take the controls.",
    faqs: [
      {
        q: "Is this a Los Angeles sightseeing air tour?",
        a: "It is a discovery flight lesson, not a charter air tour. You fly with a Certified Flight Instructor and may take the controls.",
      },
      {
        q: "Can I see Los Angeles landmarks?",
        a: "Scenic views may include LA landmarks depending on weather, ATC, routing, and safety.",
      },
      {
        q: "Can two people go?",
        a: "Yes. The two-person option is $270 total, subject to weight and balance and aircraft limitations.",
      },
      {
        q: "Do I need flying experience?",
        a: "No experience is required.",
      },
    ],
  },
  {
    slug: "los-angeles-helicopter-sightseeing-air-tour-alternative-discovery-flight-van-nuys-kvny",
    metaTitle:
      "Los Angeles Helicopter Sightseeing Air Tour Alternative | Accelerated Flight School KVNY",
    metaDescription:
      "Searching for a Los Angeles helicopter sightseeing air tour? Try a real airplane discovery flight from Van Nuys Airport where you may take the controls with a CFI. $190 for 1, $270 for 2.",
    h1: "Los Angeles Helicopter Sightseeing Air Tour Alternative: Fly the Plane Yourself",
    subheadline:
      "We don't offer helicopter tours — we offer something more hands-on: a real airplane discovery flight in a Piper PA-28 Warrior II from Van Nuys Airport, where you may take the controls with a CFI.",
    intro: [
      "If you're searching for a Los Angeles helicopter sightseeing air tour, here's an honest heads-up: we do not offer helicopter tours. What we do offer is a fixed-wing airplane discovery flight lesson in our 1985 Piper PA-28 Cherokee Warrior II (N9172Y) from Van Nuys Airport (KVNY).",
      "Here's the difference that matters. A helicopter sightseeing tour is usually a passenger ride — you sit in back and look out the window. A discovery flight is a real introductory flying lesson where you sit up front and, with your instructor's guidance, may take the controls yourself. It is more interactive, more educational, and can be the first step toward actually becoming a pilot.",
      "Scenery always depends on weather, ATC, airspace, and safety, but a flight from KVNY can showcase a remarkable stretch of Southern California.",
    ],
    sceneryIntro: "Depending on conditions, your flight may include views of:",
    scenery: [
      "San Fernando Valley",
      "Malibu coastline",
      "Santa Monica Mountains",
      "Downtown LA",
      "Hollywood Sign area",
      "Iconic LA views",
    ],
    clarify:
      "We do not offer helicopter tours. This is a fixed-wing airplane discovery flight lesson from Van Nuys Airport — and you may fly the plane yourself.",
    faqs: [
      {
        q: "Do you offer helicopter tours?",
        a: "No. We offer airplane discovery flights from Van Nuys Airport.",
      },
      {
        q: "Is this better than a helicopter sightseeing tour?",
        a: "For someone who wants to actually experience flying from the front seat, a discovery flight can be more hands-on and memorable.",
      },
      {
        q: "Can I fly the airplane?",
        a: "Yes, with instructor guidance when safe and appropriate.",
      },
      {
        q: "Can I bring another person?",
        a: "Yes. The two-person option is $270 total, subject to aircraft limitations.",
      },
    ],
  },
  {
    slug: "los-angeles-sightseeing-flight-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Los Angeles Sightseeing Flight Tour | Accelerated Flight School KVNY",
    metaDescription:
      "Book a Los Angeles sightseeing discovery flight lesson from Van Nuys Airport. Take the controls with a CFI and enjoy scenic LA views. $190 for 1 person, $270 for 2.",
    h1: "Los Angeles Sightseeing Flight Tour Experience: Discovery Flight Lesson",
    subheadline:
      "An introductory flight lesson with scenic LA views from Van Nuys Airport. You're not just a passenger — you get a pre-flight briefing, fly with a CFI, and may take the controls.",
    intro: [
      "A Los Angeles sightseeing flight tour with Accelerated Flight School is really an introductory flight lesson — and that's what makes it special. Guests are not just passengers along for the ride. You start with a pre-flight briefing, fly with a Certified Flight Instructor, may take the controls, and experience real airplane flying from the front seat.",
      "It's the difference between watching and doing. You'll feel the airplane respond to your inputs, understand what's happening on each part of the flight, and come away with a genuine taste of what it's like to be a pilot — all while taking in the scenery of Southern California.",
      "Every route depends on weather, ATC, airspace, and safety on the day, but flights from KVNY can include a wide variety of Los Angeles scenery.",
    ],
    sceneryIntro: "Depending on routing and conditions, your flight may include views of:",
    scenery: [
      "San Fernando Valley",
      "Malibu coastline",
      "Santa Monica Mountains",
      "Hollywood Sign area",
      "Downtown LA",
      "Van Nuys area",
      "Iconic Los Angeles scenery",
    ],
    clarify: "This is a discovery flight lesson with scenic views — not a charter sightseeing tour.",
    faqs: [
      {
        q: "What is included?",
        a: "A pre-flight briefing, the aircraft, your instructor, the flight experience, and time for post-flight questions.",
      },
      {
        q: "Is this a lesson or a sightseeing tour?",
        a: "It is a discovery flight lesson with scenic views, not a charter sightseeing tour.",
      },
      {
        q: "Can the flight count toward pilot training?",
        a: "Yes — flight time may count toward your Private Pilot training and logbook if applicable.",
      },
      {
        q: "Is it beginner friendly?",
        a: "Yes. No experience is required.",
      },
    ],
  },
  {
    slug: "santa-monica-sightseeing-air-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Santa Monica Sightseeing Air Tour | Accelerated Flight School KVNY",
    metaDescription:
      "Looking for a Santa Monica sightseeing air tour? Fly a discovery flight lesson from Van Nuys Airport with possible Santa Monica and coastal views. $190 for 1, $270 for 2.",
    h1: "Santa Monica Sightseeing Air Tour Alternative: Discovery Flight from Van Nuys",
    subheadline:
      "Looking for a Santa Monica sightseeing air tour or coastal flying experience? Fly a discovery flight lesson from nearby Van Nuys Airport and take the controls with a CFI.",
    intro: [
      "If you're looking for a Santa Monica sightseeing air tour or a coastal flying experience, Accelerated Flight School offers a discovery flight lesson from nearby Van Nuys Airport (KVNY) where you may take the controls with a Certified Flight Instructor.",
      "Flights are based at Van Nuys, not Santa Monica Airport — but the coastline and the Santa Monica Mountains are right in our backyard. When weather, ATC, routing, and safety allow, your flight can include beautiful coastal and mountain scenery on the way out and back.",
      "Unlike a passive charter ride, this is a hands-on introductory lesson. You sit up front, learn the basics, and fly the airplane with your instructor beside you.",
    ],
    sceneryIntro: "Possible scenic views — depending on weather, ATC, routing, and safety — include:",
    scenery: [
      "Santa Monica Mountains",
      "Santa Monica area",
      "Malibu coastline",
      "Pacific coastline",
      "San Fernando Valley",
      "West LA",
    ],
    clarify:
      "This is a discovery flight lesson, not a charter sightseeing air tour. Flights are based at Van Nuys Airport (KVNY).",
    faqs: [
      {
        q: "Do you depart from Santa Monica Airport?",
        a: "No. Flights are based at Van Nuys Airport (KVNY).",
      },
      {
        q: "Can we see Santa Monica?",
        a: "Possible views depend on weather, routing, ATC, and safety.",
      },
      {
        q: "Can I fly the plane?",
        a: "Yes, with CFI guidance when appropriate.",
      },
      {
        q: "How much is it?",
        a: "$190 for 1 person or $270 total for 2 people.",
      },
    ],
  },
  {
    slug: "malibu-sightseeing-air-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Malibu Sightseeing Air Tour | Accelerated Flight School KVNY",
    metaDescription:
      "Experience the Malibu coastline on a discovery flight lesson from Van Nuys Airport. Fly with a CFI and take the controls. $190 for 1 person, $270 for 2.",
    h1: "Malibu Sightseeing Air Tour Alternative: Coastline Discovery Flight Lesson",
    subheadline:
      "Experience the Malibu coastline from the front seat on a discovery flight lesson from Van Nuys Airport — fly with a CFI and take the controls yourself.",
    intro: [
      "Few views in Southern California rival the Malibu coastline from the air — the Pacific, the beaches, and the mountains meeting the sea. Many people search for a Malibu sightseeing air tour to experience exactly that. Accelerated Flight School offers a discovery flight lesson that may include scenic Malibu coastline views while also giving you the chance to handle the controls yourself.",
      "When weather, routing, ATC, and safety allow, you can fly over or near the Malibu coastline and experience the Pacific coastline from the front seat. With your instructor's guidance, you take the controls — making this a fun, exciting, scenic, and genuinely educational first flight.",
      "It's the kind of experience people remember for years, and it makes a memorable gift for anyone curious about flying.",
    ],
    sceneryIntro: "When conditions allow, your flight may include:",
    scenery: [
      "Malibu coastline",
      "Pacific coastline",
      "Santa Monica Mountains",
      "Point Dume area",
      "Beaches and bluffs",
      "San Fernando Valley",
    ],
    clarify:
      "This is an introductory flight lesson, not a charter sightseeing air tour. Coastline views depend on weather, ATC, routing, and safety.",
    faqs: [
      {
        q: "Will we fly over Malibu?",
        a: "Malibu coastline views may be included when weather, ATC, routing, and safety allow.",
      },
      {
        q: "Is this a sightseeing tour?",
        a: "No, it is a discovery flight lesson with scenic routing when possible.",
      },
      {
        q: "Do I get to fly?",
        a: "Yes — guests may take the controls with instructor guidance.",
      },
      {
        q: "Is this good as a gift?",
        a: "Yes. It's a strong gift experience for someone curious about flying.",
      },
    ],
  },
  {
    slug: "hollywood-sign-sightseeing-air-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Hollywood Sign Sightseeing Air Tour | Accelerated Flight School KVNY",
    metaDescription:
      "Looking for a Hollywood Sign sightseeing air tour? Book a discovery flight lesson from Van Nuys Airport with possible Hollywood Sign and LA landmark views. $190 for 1, $270 for 2.",
    h1: "Hollywood Sign Sightseeing Air Tour Alternative: Discovery Flight with LA Landmark Views",
    subheadline:
      "Prefer to fly the plane instead of just riding along? Book a discovery flight lesson from Van Nuys Airport with possible Hollywood Sign and LA landmark views.",
    intro: [
      "If you're searching for a Hollywood Sign sightseeing air tour, you may prefer a real discovery flight lesson — one where you take the controls instead of only sitting as a passenger. Accelerated Flight School offers exactly that from Van Nuys Airport (KVNY).",
      "You'll sit up front with a Certified Flight Instructor, learn the basics, and fly the airplane with guidance. When routing, weather, ATC, airspace, and safety allow, the flight may include views of some of LA's most recognizable landmarks.",
      "Landmark views are never guaranteed — Los Angeles airspace is busy and complex — but a clear day from KVNY can offer some unforgettable sights.",
    ],
    sceneryIntro: "Possible views — depending on conditions — include:",
    scenery: [
      "Hollywood Sign area",
      "Downtown LA skyline",
      "Griffith Park area",
      "San Fernando Valley",
      "Santa Monica Mountains",
      "Malibu coastline",
    ],
    clarify:
      "This is a discovery flight lesson, not a charter sightseeing tour. Landmark views depend on weather, ATC, routing, airspace, and safety.",
    faqs: [
      {
        q: "Can we see the Hollywood Sign?",
        a: "Possible views of the Hollywood Sign area depend on routing, weather, ATC, airspace, and safety.",
      },
      {
        q: "Is this a Hollywood Sign sightseeing tour?",
        a: "It is a discovery flight lesson, not a charter sightseeing tour.",
      },
      {
        q: "Can I take photos?",
        a: "Yes, when it's safe and doesn't interfere with the flight.",
      },
      {
        q: "Can I fly the airplane?",
        a: "Yes, with instructor guidance when appropriate.",
      },
    ],
  },
  {
    slug: "long-beach-sightseeing-air-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Long Beach Sightseeing Air Tour | Accelerated Flight School KVNY",
    metaDescription:
      "Searching for a Long Beach sightseeing air tour? Try a hands-on discovery flight lesson from Van Nuys Airport with scenic LA and coastal views when available. $190 for 1, $270 for 2.",
    h1: "Long Beach Sightseeing Air Tour Alternative: Hands-On Discovery Flight",
    subheadline:
      "Based at Van Nuys Airport, we offer hands-on discovery flight lessons — not charter sightseeing tours — with scenic LA and coastal views when conditions allow.",
    intro: [
      "If you're searching for a Long Beach sightseeing air tour, here's the honest picture: Accelerated Flight School operates from Van Nuys Airport (KVNY) and offers discovery flight lessons, not charter sightseeing air tours.",
      "Depending on route, weather, ATC, and safety, your flight may include broader Los Angeles basin and coastal scenery. We don't guarantee a Long Beach overflight, because routing always depends on conditions and air traffic on the day — but a discovery flight from KVNY is a real, hands-on introduction to flying.",
      "You'll sit up front, fly with a Certified Flight Instructor, and take the controls with guidance. The flight can be scenic, but at its heart it's instructional — and that's what makes it more rewarding than a passive ride.",
    ],
    sceneryIntro: "Depending on conditions, your flight may include:",
    scenery: [
      "Los Angeles basin",
      "Coastal scenery",
      "San Fernando Valley",
      "Santa Monica Mountains",
      "Downtown LA area",
    ],
    clarify:
      "This is a discovery flight lesson based at Van Nuys Airport (KVNY), not a charter sightseeing tour. We do not guarantee Long Beach overflight.",
    faqs: [
      {
        q: "Do you depart from Long Beach?",
        a: "No. Flights are based at Van Nuys Airport.",
      },
      {
        q: "Can we fly toward coastal areas?",
        a: "Scenic coastal routing may be possible depending on conditions, ATC, and safety.",
      },
      {
        q: "Is this a sightseeing tour?",
        a: "It is a discovery flight lesson, not a charter sightseeing tour.",
      },
      {
        q: "Can two people fly?",
        a: "Yes. The two-person option is $270 total, subject to aircraft limitations.",
      },
    ],
  },
  {
    slug: "catalina-island-sightseeing-air-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Catalina Island Sightseeing Air Tour | Accelerated Flight School KVNY",
    metaDescription:
      "Looking for a Catalina Island sightseeing air tour? Start with a discovery flight lesson from Van Nuys Airport and experience real flying with a CFI. $190 for 1, $270 for 2.",
    h1: "Catalina Island Sightseeing Air Tour Alternative: Discovery Flight from Van Nuys",
    subheadline:
      "The standard $190 discovery flight is an introductory lesson from Van Nuys Airport. Extended scenic routes like Catalina can be discussed separately — just ask us.",
    intro: [
      "People searching for Catalina Island sightseeing air tours usually want ocean views, island scenery, and a memorable aviation experience. Accelerated Flight School offers an introductory discovery flight lesson from Van Nuys Airport (KVNY) where you may take the controls and experience real flying.",
      "We want to be upfront: the standard $190 discovery flight is an introductory lesson based at Van Nuys and does not include Catalina Island. Catalina-style routes or extended coastal and cross-country flights may be discussed separately, depending on aircraft availability, instructor availability, weather, fuel planning, and pricing.",
      "If an extended scenic route is what you have in mind, call or text us and we'll talk through what's realistic. For most first-timers, the standard discovery flight from KVNY is the perfect, hands-on introduction to flying — with scenic LA and coastal views depending on conditions.",
    ],
    sceneryIntro: "The standard discovery flight from KVNY may include — depending on conditions:",
    scenery: [
      "Scenic LA views",
      "Coastal scenery",
      "San Fernando Valley",
      "Santa Monica Mountains",
      "Pacific coastline",
    ],
    clarify:
      "Catalina Island is not included in the standard $190 discovery flight. Extended routes require separate planning for time, weather, fuel, and pricing.",
    pricingNote:
      "The standard discovery flight is from Van Nuys and may include scenic LA/coastal views depending on conditions. Extended routes such as Catalina require separate planning, time, weather, fuel, and pricing.",
    ctaNote: "Call or text to ask about discovery flights and extended scenic training routes.",
    faqs: [
      {
        q: "Is Catalina Island included in the $190 discovery flight?",
        a: "No. The standard $190 discovery flight is an introductory lesson from Van Nuys. Extended routes such as Catalina require separate planning, time, weather, fuel, and pricing.",
      },
      {
        q: "Is this a Catalina sightseeing air tour?",
        a: "No, it is a discovery flight lesson. Extended scenic training routes may be discussed separately.",
      },
      {
        q: "Can I fly the airplane?",
        a: "Yes, with instructor guidance when appropriate.",
      },
      {
        q: "Can two people come?",
        a: "Yes. The two-person discovery flight option is $270 total, subject to aircraft limitations.",
      },
    ],
  },
];

const airTourPagesBySlug = new Map(airTourPages.map((p) => [p.slug, p]));

export function getAirTourPage(slug: string): AirTourPageConfig | undefined {
  return airTourPagesBySlug.get(slug);
}
