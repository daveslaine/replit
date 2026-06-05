export interface AirTourFAQ {
  q: string;
  a: string;
}

export interface AirTourPhoto {
  src: string;
  alt: string;
}

export interface AirTourPageConfig {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheadline: string;
  intro: string[];
  scenery: string[];
  photos: AirTourPhoto[];
  pricingNote?: string;
  ctaNote?: string;
  faqs: AirTourFAQ[];
}

export const airTourPages: AirTourPageConfig[] = [
  {
    slug: "los-angeles-sightseeing-air-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Los Angeles Sightseeing Air Tour Discovery Flight | Accelerated Flight School KVNY",
    metaDescription:
      "Looking for a Los Angeles sightseeing air tour? Book a real discovery flight lesson from Van Nuys Airport. Fly with a CFI, take the controls, and see iconic LA scenery. $190 for 1 person, $270 for 2.",
    h1: "Los Angeles Sightseeing Air Tour Alternative: Discovery Flight from Van Nuys Airport",
    subheadline:
      "A real discovery flight lesson with a Certified Flight Instructor from Van Nuys Airport (KVNY). Sit up front, learn the controls, and you may fly the airplane yourself.",
    intro: [
      "Many people search for a Los Angeles sightseeing air tour when they want an unforgettable view of the city from the air. Accelerated Flight School offers something better: a real discovery flight lesson with a Certified Flight Instructor (CFI) at Van Nuys Airport.",
      "You sit up front in the cockpit, learn the basic flight controls, and — with your instructor's guidance — you may fly the airplane yourself. It is an interactive, hands-on introduction to real flying that just happens to come with incredible scenery.",
      "And it is pure fun. From the moment you add power and climb out over the city, it's thrilling, exciting, and genuinely joyful — you get to fly the airplane yourself, feel it respond to your hands, and with your instructor you can even experience the light, floating sensation of a gentle zero-G maneuver. It's the kind of rush people grin about for days.",
    ],
    scenery: [
      "Hollywood Sign",
      "Downtown LA skyline",
      "Griffith Observatory",
      "Santa Monica Pier",
      "SoFi Stadium",
    ],
    photos: [
      { src: "/images/downtown-la-night-aerial.png", alt: "Los Angeles skyline from the air at night" },
    ],
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
      "Los Angeles Helicopter Sightseeing Air Tour Discovery Flight | Accelerated Flight School KVNY",
    metaDescription:
      "Searching for a Los Angeles helicopter sightseeing air tour? Try a real airplane discovery flight from Van Nuys Airport where you may take the controls with a CFI. $190 for 1, $270 for 2.",
    h1: "Los Angeles Helicopter Sightseeing Air Tour Alternative: Fly the Plane Yourself",
    subheadline:
      "Dreaming of seeing Los Angeles from the sky? Take it further — fly the airplane yourself on a hands-on discovery flight from Van Nuys Airport, with a Certified Flight Instructor right beside you.",
    intro: [
      "If you're dreaming about seeing Los Angeles from above, here's an even better way to do it: a discovery flight where you don't just ride along — you actually take the controls and fly. With a Certified Flight Instructor beside you in our 1985 Piper PA-28 Cherokee Warrior II (N9172Y), you'll experience real flying from the front seat at Van Nuys Airport (KVNY).",
      "It's hands-on from the start. You'll sit up front, learn the basic controls, and fly with your instructor's guidance — interactive, educational, and a genuine first step toward becoming a pilot if you catch the bug.",
      "And it's an absolute blast. Lifting off is thrilling and joyful, the views over Southern California are unreal, and with your instructor you can even feel the light, floating sensation of a gentle zero-G maneuver. It's an experience people talk about for years.",
    ],
    scenery: [
      "Hollywood Sign",
      "Downtown LA skyline",
      "Griffith Observatory",
      "Universal Studios",
      "The Getty Center",
    ],
    photos: [
      { src: "/images/downtown-la-night-aerial.png", alt: "Los Angeles skyline from the air at night" },
    ],
    faqs: [
      {
        q: "Can I fly the airplane myself?",
        a: "Yes — with your instructor's guidance, you may take the controls when safe and appropriate. That hands-on experience is the whole point of a discovery flight.",
      },
      {
        q: "Is a discovery flight better than just riding along?",
        a: "For anyone who wants to actually experience flying from the front seat, a discovery flight is far more interactive and memorable than a passive ride.",
      },
      {
        q: "Do I need any experience?",
        a: "No experience is required. It's a perfect first flight.",
      },
      {
        q: "Can I bring another person?",
        a: "Yes. The two-person option is $270 total, subject to aircraft limitations.",
      },
    ],
  },
  {
    slug: "los-angeles-sightseeing-flight-tour-discovery-flight-van-nuys-kvny",
    metaTitle:
      "Los Angeles Sightseeing Flight Tour Discovery Flight | Accelerated Flight School KVNY",
    metaDescription:
      "Book a Los Angeles sightseeing discovery flight lesson from Van Nuys Airport. Take the controls with a CFI and enjoy scenic LA views. $190 for 1 person, $270 for 2.",
    h1: "Los Angeles Sightseeing Flight Tour Experience: Discovery Flight Lesson",
    subheadline:
      "An introductory flight lesson with scenic LA views from Van Nuys Airport. You're not just a passenger — you get a pre-flight briefing, fly with a CFI, and may take the controls.",
    intro: [
      "A Los Angeles sightseeing flight tour with Accelerated Flight School is really an introductory flight lesson — and that's what makes it special. You start with a pre-flight briefing, fly with a Certified Flight Instructor, may take the controls, and experience real airplane flying from the front seat.",
      "It's the difference between watching and doing. You'll feel the airplane respond to your inputs, understand what's happening on each part of the flight, and come away with a genuine taste of what it's like to be a pilot — all while taking in the scenery of Southern California.",
      "Best of all, it's a thrill. Climbing out over Los Angeles is exciting and joyful, and with your instructor you can even feel the light, floating sensation of a gentle zero-G maneuver. It's fun, unforgettable, and very different from sitting in the back of a tour.",
    ],
    scenery: [
      "Hollywood Sign",
      "Downtown LA skyline",
      "Dodger Stadium",
      "Griffith Observatory",
      "Santa Monica Pier",
    ],
    photos: [
      { src: "/images/downtown-la-night-aerial.png", alt: "Los Angeles skyline lit up from the air" },
    ],
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
    metaTitle: "Santa Monica Sightseeing Air Tour Discovery Flight | Accelerated Flight School KVNY",
    metaDescription:
      "Looking for a Santa Monica sightseeing air tour? Fly a discovery flight lesson from Van Nuys Airport with possible Santa Monica and coastal views. $190 for 1, $270 for 2.",
    h1: "Santa Monica Sightseeing Air Tour Alternative: Discovery Flight from Van Nuys",
    subheadline:
      "Looking for a Santa Monica sightseeing air tour or coastal flying experience? Fly a discovery flight lesson from nearby Van Nuys Airport and take the controls with a CFI.",
    intro: [
      "If you're looking for a Santa Monica sightseeing air tour or a coastal flying experience, Accelerated Flight School offers a discovery flight lesson from nearby Van Nuys Airport (KVNY) where you may take the controls with a Certified Flight Instructor.",
      "You sit up front, learn the basics, and fly the airplane with your instructor beside you. The coastline and the Santa Monica Mountains are right in our backyard, so when the route allows, your flight can include beautiful coastal and mountain scenery on the way out and back.",
      "And it's genuinely exciting. Flying toward the coast is thrilling and joyful, and with your instructor you can even feel the light, floating sensation of a gentle zero-G maneuver. It's a fun, hands-on adventure you'll remember.",
    ],
    scenery: [
      "Santa Monica Pier",
      "Santa Monica Bay",
      "Venice Beach",
      "Pacific Palisades",
      "Malibu coastline",
    ],
    photos: [
      { src: "/images/malibu-coast-aerial.png", alt: "Southern California coastline from the air" },
    ],
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
      {
        q: "Is this a sightseeing tour or a real flight lesson?",
        a: "It's a discovery flight lesson, not a charter sightseeing tour. You fly with a Certified Flight Instructor and may take the controls.",
      },
    ],
  },
  {
    slug: "malibu-sightseeing-air-tour-discovery-flight-van-nuys-kvny",
    metaTitle: "Malibu Sightseeing Air Tour Discovery Flight | Accelerated Flight School KVNY",
    metaDescription:
      "Experience the Malibu coastline on a discovery flight lesson from Van Nuys Airport. Fly with a CFI and take the controls. $190 for 1 person, $270 for 2.",
    h1: "Malibu Sightseeing Air Tour Alternative: Coastline Discovery Flight Lesson",
    subheadline:
      "Experience the Malibu coastline from the front seat on a discovery flight lesson from Van Nuys Airport — fly with a CFI and take the controls yourself.",
    intro: [
      "Few views in Southern California rival the Malibu coastline from the air — the Pacific, the beaches, and the mountains meeting the sea. Many people search for a Malibu sightseeing air tour to experience exactly that. Accelerated Flight School offers a discovery flight lesson that may include scenic Malibu coastline views while also giving you the chance to handle the controls yourself.",
      "When the route allows, you can fly over or near the Malibu coastline and experience the Pacific from the front seat. With your instructor's guidance, you take the controls — making this a hands-on, unforgettable first flight.",
      "And it's pure joy. Cruising the coastline is thrilling and exciting, and with your instructor you can even feel the light, floating sensation of a gentle zero-G maneuver over the ocean. It's the kind of experience people remember for years — and it makes a memorable gift for anyone curious about flying.",
    ],
    scenery: [
      "Point Dume",
      "Zuma Beach",
      "Malibu Pier",
      "Santa Monica Mountains",
      "Pacific Coast Highway",
    ],
    photos: [
      { src: "/images/malibu-coast-aerial.png", alt: "Malibu coastline from the air" },
    ],
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
    metaTitle: "Hollywood Sign Sightseeing Air Tour Discovery Flight | Accelerated Flight School KVNY",
    metaDescription:
      "Looking for a Hollywood Sign sightseeing air tour? Book a discovery flight lesson from Van Nuys Airport with possible Hollywood Sign and LA landmark views. $190 for 1, $270 for 2.",
    h1: "Hollywood Sign Sightseeing Air Tour Alternative: Discovery Flight with LA Landmark Views",
    subheadline:
      "Prefer to fly the plane instead of just riding along? Book a discovery flight lesson from Van Nuys Airport with possible Hollywood Sign and LA landmark views.",
    intro: [
      "If you're searching for a Hollywood Sign sightseeing air tour, you may love a real discovery flight lesson even more — one where you take the controls instead of only sitting as a passenger. Accelerated Flight School offers exactly that from Van Nuys Airport (KVNY).",
      "You'll sit up front with a Certified Flight Instructor, learn the basics, and fly the airplane with guidance. When the route allows, the flight may include views of some of LA's most recognizable landmarks.",
      "And it's a total thrill. Banking over the hills is exciting and joyful, and with your instructor you can even feel the light, floating sensation of a gentle zero-G maneuver. A clear day from KVNY makes for an unforgettable flight.",
    ],
    scenery: [
      "Hollywood Sign",
      "Griffith Observatory",
      "Hollywood Boulevard",
      "Universal Studios",
      "Downtown LA skyline",
    ],
    photos: [
      { src: "/images/hollywood-sign-aerial.png", alt: "The Hollywood Sign from the air" },
    ],
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
    metaTitle: "Long Beach Sightseeing Air Tour Discovery Flight | Accelerated Flight School KVNY",
    metaDescription:
      "Searching for a Long Beach sightseeing air tour? Try a hands-on discovery flight lesson from Van Nuys Airport with scenic LA and coastal views when available. $190 for 1, $270 for 2.",
    h1: "Long Beach Sightseeing Air Tour Alternative: Hands-On Discovery Flight",
    subheadline:
      "Based at Van Nuys Airport, we offer hands-on discovery flight lessons with scenic LA and coastal views — and you get to fly the airplane yourself.",
    intro: [
      "If you're searching for a Long Beach sightseeing air tour, here's a hands-on alternative: Accelerated Flight School offers discovery flight lessons from Van Nuys Airport (KVNY) where you actually take the controls and fly.",
      "You'll sit up front, fly with a Certified Flight Instructor, and take the controls with guidance. Depending on the route, your flight may include broad Los Angeles basin and coastal scenery — and at its heart it's a real flying lesson, which makes it far more rewarding than a passive ride.",
      "And it's a blast. Lifting off and climbing out is thrilling and joyful, and with your instructor you can even feel the light, floating sensation of a gentle zero-G maneuver. It's fun, exciting, and unforgettable.",
    ],
    scenery: [
      "Downtown LA skyline",
      "Hollywood Sign",
      "San Fernando Valley",
      "Santa Monica Mountains",
      "Pacific coastline",
    ],
    photos: [
      { src: "/images/downtown-la-night-aerial.png", alt: "Los Angeles basin from the air" },
    ],
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
    metaTitle: "Catalina Island Sightseeing Air Tour Discovery Flight | Accelerated Flight School KVNY",
    metaDescription:
      "Looking for a Catalina Island sightseeing air tour? Start with a discovery flight lesson from Van Nuys Airport and experience real flying with a CFI. $190 for 1, $270 for 2.",
    h1: "Catalina Island Sightseeing Air Tour Alternative: Discovery Flight from Van Nuys",
    subheadline:
      "The standard $190 discovery flight is an introductory lesson from Van Nuys Airport where you fly the plane. Extended scenic routes like Catalina can be arranged separately — just ask.",
    intro: [
      "People searching for Catalina Island sightseeing air tours usually want ocean views, island scenery, and a memorable aviation experience. Accelerated Flight School offers an introductory discovery flight lesson from Van Nuys Airport (KVNY) where you may take the controls and experience real flying.",
      "To be upfront: the standard $190 discovery flight is an introductory lesson based at Van Nuys and does not include Catalina Island. Catalina-style routes or extended coastal and cross-country flights can be discussed separately, depending on aircraft and instructor availability, weather, fuel planning, and pricing — so call or text us and we'll talk through what's realistic.",
      "Either way, the flying itself is a thrill. Climbing out over Southern California is exciting and joyful, you get to fly the airplane yourself, and with your instructor you can even feel the light, floating sensation of a gentle zero-G maneuver. For most first-timers, the standard discovery flight from KVNY is the perfect, hands-on introduction to flying.",
    ],
    scenery: [
      "Downtown LA skyline",
      "Hollywood Sign",
      "Santa Monica Mountains",
      "San Fernando Valley",
      "Pacific coastline",
    ],
    photos: [
      { src: "/images/catalina-aerial.png", alt: "Catalina Island from the air" },
    ],
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
