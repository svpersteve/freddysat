import type { Dict } from "./es";

/**
 * Català. Register: vostè, matching the Castellano deck.
 *
 * Typed as `Dict`, so this file will not compile if a key is missing or an
 * array changes shape — the failure mode a translation file has to rule out.
 */
const ca: Dict = {
  locale: "ca",
  htmlLang: "ca-ES",
  localeName: "Català",
  dir: "ltr",

  nav: {
    home: "Inici",
    services: "Serveis",
    aircon: "Aire condicionat",
    areas: "Zones",
    contact: "Contacte",
    call: "Trucar",
    menu: "Menú",
    close: "Tancar",
    skip: "Salta al contingut",
  },

  slugs: {
    services: "serveis",
    aircon: "aire-condicionat",
    areas: "zones",
    contact: "contacte",
    legal: "avis-legal",
    privacy: "privacitat",
  },

  hero: {
    label: "SAT a Barcelona",
    title: "Què se li ha espatllat?",
    lead:
      "Reparem electrodomèstics i aire condicionat a domicili a Barcelona. Digui'ns què falla i li diem avui mateix si té arranjament i quant costa.",
    pickSymptom: "Triï el símptoma",
    orCall: "o truqui directament",
    availableNow: "Obert ara",
    everyDayHours: "Tots els dies, de {open} a {close}",
    closedNow: "Tancat ara",
    opensAt: "Obrim a les",
    todayUntil: "Avui fins a les",
    whatsapp: "Escriure per WhatsApp",
  },

  symptoms: [
    { id: "no-enfria", label: "No refreda", note: "Nevera, congelador o aire" },
    { id: "pierde-agua", label: "Perd aigua", note: "Rentadora, rentavaixelles o termo" },
    { id: "no-calienta", label: "No escalfa", note: "Forn, assecadora o aigua calenta" },
    { id: "no-gira", label: "No gira ni centrifuga", note: "Rentadora o assecadora" },
    { id: "no-desagua", label: "No desguassa", note: "Rentadora o rentavaixelles" },
    { id: "no-enciende", label: "No s'encén", note: "Qualsevol aparell" },
    { id: "hace-ruido", label: "Fa molt de soroll", note: "Rodaments, bomba o ventilador" },
    { id: "huele-quemado", label: "Fa olor de cremat", note: "Desendolli'l i truqui'ns" },
  ],

  urgent: {
    title: "Si fa olor de cremat o hi ha aigua a terra",
    body:
      "Desendolli l'aparell i tanqui la clau de pas abans de res. Després truqui'ns: aquestes dues avaries no esperen a demà.",
    cta: "Trucar ara",
  },

  services: {
    label: "Què reparem",
    title: "Del que escalfa al que refreda",
    lead:
      "Un mateix ofici als dos extrems: resistències, termòstats i sondes d'una banda; compressors, gas i circuits de fred de l'altra.",
    hotLabel: "Calor",
    coldLabel: "Fred",
    axisNote: "Ordenat per temperatura de treball",
    common: "Avaries habituals",
    cta: "Veure avaries i preus",
  },

  catalogue: [
    {
      id: "hornos",
      pole: "hot",
      name: "Forns i vitroceràmiques",
      blurb: "Resistències foses, termòstats descalibrats, portes que no tanquen i plaques que no reconeixen la paella.",
      faults: ["No escalfa", "Escalfa massa", "El vidre no tanca", "La placa d'inducció no detecta"],
    },
    {
      id: "secadoras",
      pole: "hot",
      name: "Assecadores",
      blurb: "Bombes de calor, resistències i sondes d'humitat. L'avaria gairebé sempre és al condensador o al filtre.",
      faults: ["Asseca però no escalfa", "Triga el doble", "S'atura a mitges", "Diposita aigua"],
    },
    {
      id: "termos",
      pole: "hot",
      name: "Termos i escalfadors",
      blurb: "Termos elèctrics i escalfadors de gas: resistència, ànode de magnesi, termòstat i sobreescalfament.",
      faults: ["Sense aigua calenta", "Salta el diferencial", "Degota per sota", "L'aigua surt bullent"],
    },
    {
      id: "lavadoras",
      pole: "mid",
      name: "Rentadores",
      blurb: "El que més reparem. Rodaments, bombes de desguàs, electrovàlvules i mòduls de potència.",
      faults: ["No centrifuga", "No desguassa", "Perd aigua", "Fa un soroll d'avió"],
    },
    {
      id: "lavavajillas",
      pole: "mid",
      name: "Rentavaixelles",
      blurb: "Bombes, aspersors i resistències de flux. Gairebé sempre és calç, no una avaria greu.",
      faults: ["No asseca", "Deixa restes", "No agafa aigua", "Error de desguàs"],
    },
    {
      id: "frigorificos",
      pole: "cold",
      name: "Frigorífics i congeladors",
      blurb: "Compressors, termòstats, resistències de desglaç i fuites de gas al circuit de fred.",
      faults: ["No refreda", "Fa massa gel", "El motor no s'atura", "Bassal al calaix"],
    },
    {
      id: "aire",
      pole: "cold",
      name: "Aire condicionat",
      blurb: "Split, conductes i multisplit. Càrrega de gas, neteja de bateries, fuites i instal·lació.",
      faults: ["No refreda", "Degota dins de casa", "Fa mala olor", "Fa soroll la unitat exterior"],
    },
  ],

  trust: {
    label: "Sense sorpreses",
    title: "El que costa, abans de començar",
    lead:
      "El pressupost es tanca a casa seva, amb l'aparell obert i el preu dit en veu alta. Si no el convenç, no es fa i no es toca res més.",
    points: [
      {
        title: "Desplaçament {fee} €, gratis si es repara",
        body: "Es cobra el desplaçament només si decideix no arreglar-lo. Si donem llum verda a la reparació, no es cobra a part.",
      },
      {
        title: "Pressupost tancat abans de tocar res",
        body: "Mà d'obra i peces dites i acceptades abans de començar. Sense ampliacions a mitja feina.",
      },
      {
        title: "{warranty} mesos de garantia",
        body: "Per escrit, sobre la mà d'obra i la peça substituïda. Si torna a fallar el mateix, hi tornem sense cost.",
      },
      {
        title: "Factura amb IVA sempre",
        body: "Factura real, amb NIF i desglossament. Necessària per a la garantia i per deduir-la si és un local.",
      },
    ],
  },

  process: {
    label: "Com funciona",
    title: "Quatre passos i ja està",
    steps: [
      { title: "Ens truca", body: "Expliqui el símptoma i la marca. Moltes avaries s'identifiquen per telèfon." },
      { title: "Li donem una franja", body: "Li diem quin dia i en quina franja de dues hores hi passem. Avisem en sortir." },
      { title: "Diagnòstic i preu", body: "Obrim l'aparell, veiem l'avaria i li diem el preu tancat." },
      { title: "Es repara i es factura", body: "Amb la peça a la furgoneta, gairebé sempre en la mateixa visita." },
    ],
  },

  areas: {
    label: "On anem",
    title: "Barcelona i àrea metropolitana",
    lead: "Treballem a tota la ciutat i als municipis del costat. Si el seu carrer no és a la llista, pregunti igualment.",
    notListed: "No hi veu la seva zona? Truqui'ns i l'hi confirmem.",
  },

  faq: {
    label: "Dubtes freqüents",
    title: "El que ens pregunten per telèfon",
    items: [
      {
        q: "Quant triguen a venir?",
        a: "Normalment atenem en menys de {hours} hores laborables. Les avaries de fred a l'estiu i les fuites d'aigua les posem per davant de la resta.",
      },
      {
        q: "Treballen amb la meva marca?",
        a: "Sí. Reparem totes les marques domèstiques habituals: Balay, Bosch, Siemens, Fagor, Zanussi, AEG, Whirlpool, Beko, LG, Samsung, Mitsubishi, Daikin i altres. No som servei oficial de cap, cosa que vol dir que no estem obligats a cobrar la seva tarifa.",
      },
      {
        q: "Val la pena reparar-lo o en compro un de nou?",
        a: "L'hi diem clar i en contra del nostre interès si cal. Amb un aparell de més de dotze anys i una avaria de compressor o de motor, gairebé mai surt a compte. Preferim perdre la reparació que fer-li gastar malament els diners.",
      },
      {
        q: "L'aire condicionat necessita gas cada any?",
        a: "No. Un circuit ben tancat no consumeix gas. Si el seu equip perd càrrega cada estiu és que té una fuita, i recarregar-lo sense buscar-la és llençar els diners cada temporada.",
      },
      {
        q: "Puc pagar amb targeta?",
        a: "Sí, amb targeta, Bizum o efectiu, i sempre amb factura.",
      },
      {
        q: "Treballen els caps de setmana?",
        a: "Sí. Atenem els set dies de la setmana, de {open} a {close}, festius inclosos. Una nevera no tria el dissabte per espatllar-se.",
      },
    ],
  },

  aircon: {
    label: "Especialitat",
    title: "Aire condicionat, sense l'estafa del gas",
    lead:
      "A l'agost mig Barcelona truca pel mateix, i enmig d'aquestes trucades s'hi cola molta recàrrega de gas innecessària. Un split que refredava bé i ha deixat de fer-ho gairebé mai necessita gas: necessita que algú busqui per què l'ha perdut.",
    doTitle: "Què fem",
    do: [
      "Reparació de split, multisplit i conductes",
      "Cerca de fuites amb detector, no a ull",
      "Càrrega de gas R32 i R410A després de segellar la fuita",
      "Neteja de bateries i desinfecció de la unitat interior",
      "Substitució de bombes de condensats i desguassos",
      "Instal·lació i posada en marxa d'equips nous",
    ],
    seasonTitle: "Abans que apreti la calor",
    seasonBody:
      "La revisió de maig costa una fracció de la reparació d'agost, i a l'agost hi ha llista d'espera. Si l'any passat ja refredava fluix, no esperi.",
  },

  contact: {
    label: "Contacte",
    title: "Expliqui'ns què falla",
    lead: "El més ràpid és trucar. Si prefereix escriure, el formulari obre WhatsApp amb el missatge ja redactat.",
    phoneLabel: "Telèfon",
    mobileLabel: "Mòbil i WhatsApp",
    emailLabel: "Correu",
    hoursLabel: "Horari",
    areaLabel: "Zona de treball",
    form: {
      title: "Enviar per WhatsApp",
      name: "El seu nom",
      namePlaceholder: "Nom i cognom",
      appliance: "Aparell",
      appliancePlaceholder: "Rentadora, nevera, aire…",
      brand: "Marca i model",
      brandPlaceholder: "Si el té a mà",
      area: "Zona o barri",
      areaPlaceholder: "Gràcia, Sant Martí…",
      problem: "Què li passa",
      problemPlaceholder: "Descrigui-ho amb les seves paraules. Els sorolls i els codis d'error ajuden molt.",
      submit: "Obrir WhatsApp amb el missatge",
      required: "Ompli l'aparell i l'avaria per continuar.",
      note: "No s'envia res des d'aquesta pàgina: s'obre WhatsApp i vostè decideix si l'envia.",
    },
    everyDay: "Tots els dies",
    closed: "Tancat",
  },

  footer: {
    blurb: "Servei d'assistència tècnica a domicili per a electrodomèstics i climatització a Barcelona i àrea metropolitana.",
    services: "Serveis",
    company: "L'empresa",
    legalNote: "Servei tècnic independent. No som servei oficial de cap marca; les marques citades pertanyen als seus titulars.",
    rights: "Tots els drets reservats.",
    googleProfile: "Veure a Google Maps",
    legal: "Avís legal",
    privacy: "Privacitat",
  },

  legal: {
    noticeTitle: "Avís legal",
    privacyTitle: "Política de privacitat",
    lastUpdated: "Darrera actualització",
    draftWarning:
      "Document pendent de revisió. Falten les dades identificatives de l'empresa i el text no ha passat per assessoria jurídica.",
  },

  meta: {
    homeTitle: "Reparació d'electrodomèstics i aire condicionat a Barcelona",
    homeDescription:
      "SAT a domicili a Barcelona: rentadores, neveres, forns, rentavaixelles i aire condicionat. Pressupost tancat, {warranty} mesos de garantia i factura. Truqui al {phone}.",
    servicesTitle: "Serveis de reparació d'electrodomèstics",
    servicesDescription:
      "Reparem rentadores, assecadores, rentavaixelles, forns, vitroceràmiques, frigorífics, termos i aire condicionat a domicili a Barcelona.",
    airconTitle: "Reparació i instal·lació d'aire condicionat a Barcelona",
    airconDescription:
      "Split, multisplit i conductes: cerca de fuites, càrrega de gas R32 i R410A, neteja i posada en marxa. Servei a domicili a Barcelona.",
    areasTitle: "Zones de Barcelona on treballem",
    areasDescription: "Servei tècnic a domicili a tots els districtes de Barcelona i a l'àrea metropolitana.",
    contactTitle: "Contacte i pressupost",
    contactDescription: "Truqui al {phone} o escrigui per WhatsApp. Li diem avui mateix si el seu aparell té arranjament.",
  },
};

export default ca;
