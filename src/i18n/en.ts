import type { Dict } from "./es";

/**
 * English, for Barcelona's large resident-foreigner market.
 *
 * Not a literal translation of the Spanish. This reader is usually renting,
 * often unsure whether the landlord or they pay for the repair, and has less
 * feel for what a fair Spanish call-out charge looks like — so the copy is
 * plainer about money and about who to ask.
 *
 * First person singular throughout, as in `es.ts`, and for the same reason.
 */

/** The refrigerant boundary. See the note on the Spanish original. */
const boundary = {
  title: "What if the fault is in the refrigerant circuit?",
  body:
    "I'll tell you, and I won't charge you for finding out. A sealed cooling circuit can only legally be opened by a technician with a fluorinated gas certificate, and I work alongside one. I'd rather hand you the right contact than bodge something that won't last.",
} as const;

const en: Dict = {
  locale: "en",
  htmlLang: "en-GB",
  localeName: "English",
  dir: "ltr",

  nav: {
    home: "Home",
    services: "Services",
    areas: "Areas",
    contact: "Contact",
    call: "Call",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
  },

  slugs: {
    services: "services",
    areas: "areas",
    contact: "contact",
    legal: "legal-notice",
    privacy: "privacy",
  },

  hero: {
    label: "Repairs in Barcelona",
    title: "What's broken?",
    lead:
      "I repair home appliances at your address in Barcelona. Tell me what it's doing and I'll tell you today whether it's worth fixing and what it costs.",
    pickSymptom: "Pick the symptom",
    orCall: "or just call",
    availableNow: "Open now",
    everyDayHours: "Every day, {open} to {close}",
    closedNow: "Closed now",
    opensAt: "Opens at",
    todayUntil: "Today until",
    whatsapp: "Message on WhatsApp",
  },

  symptoms: [
    { id: "no-enfria", label: "Not cooling", note: "Fridge or freezer" },
    { id: "pierde-agua", label: "Leaking water", note: "Washer, dishwasher or water heater" },
    { id: "no-calienta", label: "Not heating", note: "Oven, dryer or hot water" },
    { id: "no-gira", label: "Won't spin", note: "Washing machine or dryer" },
    { id: "no-desagua", label: "Won't drain", note: "Washing machine or dishwasher" },
    { id: "no-enciende", label: "Won't turn on", note: "Any appliance" },
    { id: "hace-ruido", label: "Very loud", note: "Bearings, pump or fan" },
    { id: "huele-quemado", label: "Burning smell", note: "Unplug it and call me" },
  ],

  urgent: {
    title: "If you smell burning, or there's water on the floor",
    body:
      "Unplug the appliance and shut off the stopcock first. Then call me — those two faults don't wait until tomorrow.",
    cta: "Call now",
  },

  services: {
    label: "What I fix",
    title: "From the things that heat to the things that cool",
    lead:
      "One trade at both ends: elements, thermostats and probes on one side; fans, defrost circuits and control boards on the other.",
    hotLabel: "Heat",
    coldLabel: "Cold",
    axisNote: "Ordered by working temperature",
    common: "Common faults",
    cta: "See faults and prices",
  },

  boundary,

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
      // Electric only: a gas water heater is work for a registered gas
      // installer, and that certificate is one Freddy doesn't hold either.
      name: "Electric water heaters",
      blurb: "Electric storage tanks: element, magnesium anode, thermostat and overheat cut-outs.",
      faults: ["No hot water", "Trips the breaker", "Drips underneath", "Water comes out scalding"],
    },
    {
      id: "lavadoras",
      pole: "mid",
      name: "Washing machines",
      blurb: "The bulk of my work. Drum bearings, drain pumps, inlet valves and control boards.",
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
      // Everything outside the sealed circuit. Not what's inside it: see `boundary`.
      name: "Fridges and freezers",
      blurb: "Thermostats, fans, defrost heaters, control boards, door seals and blocked drains.",
      faults: ["Not cooling", "Over-icing", "Water pooling in the drawer", "Door won't seal"],
    },
  ],

  trust: {
    label: "No surprises",
    title: "The price, before any work starts",
    lead:
      "The quote is agreed at your address, with the appliance open and the number said out loud. If you don't like it, nothing else gets touched.",
    points: [
      {
        title: "{fee} € call-out, waived if I repair",
        body: "You only pay the call-out if you decide not to go ahead. Approve the repair and it isn't charged on top.",
      },
      {
        title: "Fixed quote before anything is opened up",
        body: "Labour and parts quoted and agreed before I start. No growing the bill halfway through.",
      },
      {
        title: "{warranty} months' guarantee",
        body: "In writing, covering labour and the part I fitted. If the same fault comes back, so do I, at no charge.",
      },
      {
        title: "Always a proper invoice",
        body: "A real factura with tax number and itemised lines. You need it for the guarantee, and your landlord will want it.",
      },
    ],
  },

  process: {
    label: "How it works",
    title: "Four steps, that's it",
    steps: [
      { title: "You call", body: "Describe the symptom and the brand. A lot of faults are identifiable over the phone." },
      { title: "I give you a window", body: "A day and a two-hour window. I ring when I set off." },
      { title: "Diagnosis and price", body: "I open the appliance, find the fault and give you a fixed price." },
      { title: "Repair and invoice", body: "With the part on the van, usually on the same visit." },
    ],
  },

  areas: {
    label: "Where I go",
    title: "Six areas, and I know them",
    lead:
      "I work in these six areas. Staying inside them is what lets me get to most jobs the same day. If your street isn't on the list, ask anyway.",
    notListed: "Don't see your area? Call and I'll confirm.",
  },

  faq: {
    label: "Common questions",
    title: "What people ask me on the phone",
    items: [
      {
        q: "How soon can you come?",
        a: "Usually within {hours} working hours. Cooling faults in summer and water leaks go to the front of the queue.",
      },
      {
        q: "Do you work on my brand?",
        a: "Yes. I repair all the usual domestic brands: Balay, Bosch, Siemens, Fagor, Zanussi, AEG, Whirlpool, Beko, LG, Samsung and the rest. I'm not an official service centre for any of them, which means I'm not obliged to charge their rates.",
      },
      {
        q: "Is it worth repairing, or should I replace it?",
        a: "I'll tell you straight, against my own interest when that's the honest answer. On an appliance over twelve years old with a major failure, it rarely adds up. I'd rather lose the job than have you spend badly.",
      },
      { q: boundary.title, a: boundary.body },
      {
        q: "Who pays — me or my landlord?",
        a: "In a Spanish rental, ordinary wear and tear on appliances that came with the flat is normally the landlord's, and damage from misuse is the tenant's. Send them the invoice and the diagnosis; I write both clearly enough to settle it.",
      },
      {
        q: "Do you work weekends?",
        a: "Yes. Seven days a week, {open} to {close}, public holidays included. A fridge doesn't pick Saturday to break down.",
      },
      {
        q: "Can I pay by card?",
        a: "Yes — card, Bizum or cash, always with an invoice.",
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "Tell me what it's doing",
    lead: "Calling is fastest. If you'd rather write, the form opens WhatsApp with the message already drafted.",
    intro:
      "I'm Freddy. I go to every job myself — I don't send anyone. The person you speak to on the phone is the person who opens up your washing machine.",
    mobileLabel: "Mobile and WhatsApp",
    emailLabel: "Email",
    hoursLabel: "Hours",
    areaLabel: "Coverage",
    form: {
      title: "Send via WhatsApp",
      name: "Your name",
      namePlaceholder: "First and last name",
      appliance: "Appliance",
      appliancePlaceholder: "Washing machine, fridge, oven…",
      brand: "Brand and model",
      brandPlaceholder: "If it's to hand",
      area: "Area or neighbourhood",
      areaPlaceholder: "Sant Martí, Nou Barris…",
      problem: "What's wrong",
      problemPlaceholder: "In your own words. Noises and error codes help a lot.",
      submit: "Open WhatsApp with this message",
      required: "Fill in the appliance and the fault to continue.",
      note: "Nothing is sent from this page: it opens WhatsApp and you decide whether to send.",
    },
    everyDay: "Every day",
    closed: "Closed",
  },

  footer: {
    blurb: "Callout appliance repair across Barcelona: washing machines, fridges, ovens, dryers and dishwashers.",
    services: "Services",
    company: "Company",
    legalNote: "Independent repair service. I am not an authorised service centre for any manufacturer; brand names belong to their owners.",
    rights: "All rights reserved.",
    googleProfile: "View on Google Maps",
    legal: "Legal notice",
    privacy: "Privacy",
  },

  legal: {
    noticeTitle: "Legal notice",
    privacyTitle: "Privacy policy",
    lastUpdated: "Last updated",
    draftWarning:
      "Draft pending review. The owner's identification details are missing and this text has not been checked by a lawyer.",
  },

  meta: {
    homeTitle: "Appliance repair in Barcelona",
    homeDescription:
      "Callout repairs in Barcelona: washing machines, fridges, ovens, dryers and dishwashers. Fixed quotes, {warranty} months' guarantee, proper invoice. Call {phone}.",
    servicesTitle: "Appliance repair services",
    servicesDescription:
      "I repair washing machines, dryers, dishwashers, ovens, hobs, fridges and electric water heaters at your address in Barcelona.",
    areasTitle: "Areas of Barcelona I cover",
    areasDescription:
      "Callout appliance repair in Nou Barris, Sant Martí, Sants-Montjuïc, Ciutat Vella, L'Hospitalet de Llobregat and Santa Coloma de Gramenet.",
    contactTitle: "Contact and quotes",
    contactDescription: "Call {phone} or message me on WhatsApp. I'll tell you today whether your appliance is worth fixing.",
  },
};

export default en;
