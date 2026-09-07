import type { Dict } from "./es";

/**
 * English, for Barcelona's large resident-foreigner market.
 *
 * Not a literal translation of the Spanish. This reader is usually renting,
 * often unsure whether the landlord or they pay for the repair, and has less
 * feel for what a fair Spanish call-out charge looks like — so the copy is
 * plainer about money and about who to ask.
 */
const en: Dict = {
  locale: "en",
  htmlLang: "en-GB",
  localeName: "English",
  dir: "ltr",

  nav: {
    home: "Home",
    services: "Services",
    aircon: "Air conditioning",
    areas: "Areas",
    contact: "Contact",
    call: "Call",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
  },

  slugs: {
    services: "services",
    aircon: "air-conditioning",
    areas: "areas",
    contact: "contact",
    legal: "legal-notice",
    privacy: "privacy",
  },

  hero: {
    eyebrow: "Repairs in Barcelona",
    title: "What's broken?",
    lead:
      "We repair home appliances and air conditioning at your address in Barcelona. Tell us what it's doing and we'll tell you today whether it's worth fixing and what it costs.",
    pickSymptom: "Pick the symptom",
    orCall: "or just call",
    availableNow: "Open now",
    closedNow: "Closed now",
    opensAt: "Opens at",
    todayUntil: "Today until",
    whatsapp: "Message on WhatsApp",
  },

  symptoms: [
    { id: "no-enfria", label: "Not cooling", note: "Fridge, freezer or A/C" },
    { id: "pierde-agua", label: "Leaking water", note: "Washer, dishwasher or water heater" },
    { id: "no-calienta", label: "Not heating", note: "Oven, dryer or hot water" },
    { id: "no-gira", label: "Won't spin", note: "Washing machine or dryer" },
    { id: "no-desagua", label: "Won't drain", note: "Washing machine or dishwasher" },
    { id: "no-enciende", label: "Won't turn on", note: "Any appliance" },
    { id: "hace-ruido", label: "Very loud", note: "Bearings, pump or fan" },
    { id: "huele-quemado", label: "Burning smell", note: "Unplug it and call us" },
  ],

  urgent: {
    title: "If you smell burning, or there's water on the floor",
    body:
      "Unplug the appliance and shut off the stopcock first. Then call us — those two faults don't wait until tomorrow.",
    cta: "Call now",
  },

  services: {
    eyebrow: "What we fix",
    title: "From the things that heat to the things that cool",
    lead:
      "One trade at both ends: elements, thermostats and probes on one side; compressors, refrigerant and cooling circuits on the other.",
    hotLabel: "Heat",
    coldLabel: "Cold",
    axisNote: "Ordered by working temperature",
    common: "Common faults",
    cta: "See faults and prices",
  },

  catalogue: [
    {
      id: "hornos",
      pole: "hot",
      name: "Ovens and hobs",
      blurb: "Blown elements, thermostats out of calibration, doors that won't seal and induction hobs that can't find the pan.",
      faults: ["No heat", "Runs too hot", "Door won't close", "Induction won't detect"],
    },
    {
      id: "secadoras",
      pole: "hot",
      name: "Tumble dryers",
      blurb: "Heat pumps, elements and humidity sensors. The fault is nearly always the condenser or a blocked filter.",
      faults: ["Tumbles but no heat", "Takes twice as long", "Stops mid-cycle", "Puddles water"],
    },
    {
      id: "termos",
      pole: "hot",
      name: "Water heaters",
      blurb: "Electric tanks and gas heaters: element, magnesium anode, thermostat and overheat cut-outs.",
      faults: ["No hot water", "Trips the breaker", "Drips underneath", "Water comes out scalding"],
    },
    {
      id: "lavadoras",
      pole: "mid",
      name: "Washing machines",
      blurb: "The bulk of our work. Drum bearings, drain pumps, inlet valves and control boards.",
      faults: ["Won't spin", "Won't drain", "Leaking", "Sounds like a jet taking off"],
    },
    {
      id: "lavavajillas",
      pole: "mid",
      name: "Dishwashers",
      blurb: "Pumps, spray arms and flow heaters. In Barcelona's hard water it's usually limescale, not a serious fault.",
      faults: ["Won't dry", "Leaves residue", "Won't fill", "Drain error"],
    },
    {
      id: "frigorificos",
      pole: "cold",
      name: "Fridges and freezers",
      blurb: "Compressors, thermostats, defrost heaters and refrigerant leaks in the cooling circuit.",
      faults: ["Not cooling", "Over-icing", "Motor never stops", "Water pooling in the drawer"],
    },
    {
      id: "aire",
      pole: "cold",
      name: "Air conditioning",
      blurb: "Split, multi-split and ducted. Regassing, coil cleaning, leak detection and installation.",
      faults: ["Not cooling", "Dripping indoors", "Smells bad", "Outdoor unit is noisy"],
    },
  ],

  trust: {
    eyebrow: "No surprises",
    title: "The price, before any work starts",
    lead:
      "The quote is agreed at your address, with the appliance open and the number said out loud. If you don't like it, nothing else gets touched.",
    points: [
      {
        title: "{fee} € call-out, waived if we repair",
        body: "You only pay the call-out if you decide not to go ahead. Approve the repair and it isn't charged on top.",
      },
      {
        title: "Fixed quote before anything is opened up",
        body: "Labour and parts quoted and agreed before we start. No growing the bill halfway through.",
      },
      {
        title: "{warranty} months' guarantee",
        body: "In writing, covering labour and the part we fitted. If the same fault comes back, so do we, at no charge.",
      },
      {
        title: "Always a proper invoice",
        body: "A real factura with tax number and itemised lines. You need it for the guarantee, and your landlord will want it.",
      },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "Four steps, that's it",
    steps: [
      { title: "You call", body: "Describe the symptom and the brand. A lot of faults are identifiable over the phone." },
      { title: "We give you a window", body: "A day and a two-hour window. We ring when we set off." },
      { title: "Diagnosis and price", body: "We open the appliance, find the fault and give you a fixed price." },
      { title: "Repair and invoice", body: "With the part on the van, usually on the same visit." },
    ],
  },

  areas: {
    eyebrow: "Where we go",
    title: "Barcelona and the metropolitan area",
    lead: "We cover the whole city and the towns next to it. If your street isn't on the list, ask anyway.",
    notListed: "Don't see your area? Call and we'll confirm.",
  },

  faq: {
    eyebrow: "Common questions",
    title: "What people ask us on the phone",
    items: [
      {
        q: "How soon can you come?",
        a: "Usually within {hours} working hours. Cooling faults in summer and water leaks go to the front of the queue.",
      },
      {
        q: "Do you work on my brand?",
        a: "Yes. We repair all the usual domestic brands: Balay, Bosch, Siemens, Fagor, Zanussi, AEG, Whirlpool, Beko, LG, Samsung, Mitsubishi, Daikin and the rest. We aren't an official service centre for any of them, which means we aren't obliged to charge their rates.",
      },
      {
        q: "Is it worth repairing, or should I replace it?",
        a: "We'll tell you straight, against our own interest when that's the honest answer. On an appliance over twelve years old with a failed compressor or motor, it rarely adds up. We'd rather lose the job than have you spend badly.",
      },
      {
        q: "Does air conditioning need regassing every year?",
        a: "No. A sealed circuit doesn't consume refrigerant. If yours loses charge every summer it has a leak, and topping it up without finding that leak means paying again next season.",
      },
      {
        q: "Who pays — me or my landlord?",
        a: "In a Spanish rental, ordinary wear and tear on appliances that came with the flat is normally the landlord's, and damage from misuse is the tenant's. Send them the invoice and the diagnosis; we write both clearly enough to settle it.",
      },
      {
        q: "Can I pay by card?",
        a: "Yes — card, Bizum or cash, always with an invoice.",
      },
    ],
  },

  aircon: {
    eyebrow: "Speciality",
    title: "Air conditioning, without the regassing racket",
    lead:
      "Every August half of Barcelona rings about the same thing, and a lot of unnecessary regassing gets sold in among those calls. A split that used to cool well and has stopped almost never needs gas — it needs someone to find out where the gas went.",
    doTitle: "What we do",
    do: [
      "Split, multi-split and ducted system repair",
      "Leak detection with a detector, not guesswork",
      "R32 and R410A charging, after the leak is sealed",
      "Coil cleaning and indoor unit disinfection",
      "Condensate pump and drain replacement",
      "Installation and commissioning of new units",
    ],
    seasonTitle: "Before the heat arrives",
    seasonBody:
      "A service in May costs a fraction of a repair in August, and in August there's a waiting list. If it was already cooling weakly last year, don't wait.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us what it's doing",
    lead: "Calling is fastest. If you'd rather write, the form opens WhatsApp with the message already drafted.",
    phoneLabel: "Landline",
    mobileLabel: "Mobile and WhatsApp",
    emailLabel: "Email",
    hoursLabel: "Hours",
    areaLabel: "Coverage",
    form: {
      title: "Send via WhatsApp",
      name: "Your name",
      namePlaceholder: "First and last name",
      appliance: "Appliance",
      appliancePlaceholder: "Washing machine, fridge, A/C…",
      brand: "Brand and model",
      brandPlaceholder: "If it's to hand",
      area: "Area or neighbourhood",
      areaPlaceholder: "Gràcia, Sant Martí…",
      problem: "What's wrong",
      problemPlaceholder: "In your own words. Noises and error codes help a lot.",
      submit: "Open WhatsApp with this message",
      required: "Fill in the appliance and the fault to continue.",
      note: "Nothing is sent from this page: it opens WhatsApp and you decide whether to send.",
    },
    weekdays: "Monday to Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
  },

  footer: {
    blurb: "Callout appliance and air conditioning repair across Barcelona and the metropolitan area.",
    services: "Services",
    company: "Company",
    legalNote: "Independent repair service. We are not an authorised service centre for any manufacturer; brand names belong to their owners.",
    rights: "All rights reserved.",
    legal: "Legal notice",
    privacy: "Privacy",
  },

  legal: {
    noticeTitle: "Legal notice",
    privacyTitle: "Privacy policy",
    lastUpdated: "Last updated",
    draftWarning:
      "Draft pending review. The company identification details are missing and this text has not been checked by a lawyer.",
  },

  meta: {
    homeTitle: "Appliance and air conditioning repair in Barcelona",
    homeDescription:
      "Callout repairs in Barcelona: washing machines, fridges, ovens, dishwashers and air conditioning. Fixed quotes, {warranty} months' guarantee, proper invoice. Call {phone}.",
    servicesTitle: "Appliance repair services",
    servicesDescription:
      "We repair washing machines, dryers, dishwashers, ovens, hobs, fridges, water heaters and air conditioning at your address in Barcelona.",
    airconTitle: "Air conditioning repair and installation in Barcelona",
    airconDescription:
      "Split, multi-split and ducted: leak detection, R32 and R410A charging, cleaning and commissioning. Callout service across Barcelona.",
    areasTitle: "Areas of Barcelona we cover",
    areasDescription: "Callout repair service across every district of Barcelona and the metropolitan area.",
    contactTitle: "Contact and quotes",
    contactDescription: "Call {phone} or message on WhatsApp. We'll tell you today whether your appliance is worth fixing.",
  },
};

export default en;
