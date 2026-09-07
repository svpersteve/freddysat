/**
 * Castellano — the master copy deck. `en.ts` is typed against this object, so a
 * key added here but missed there is a compile error rather than a blank on a
 * live page.
 *
 * Register: usted. The people who own a fifteen-year-old washing machine and
 * call a SAT about it skew older than the tú/vosotros marketing default, and
 * usted is what a tradesperson in Barcelona uses on the phone with them.
 *
 * Voice: first person singular. Freddy is one man who drives to the job
 * himself, and that is the entire commercial argument against the dispatch
 * aggregators he competes with — "we" gives it away for nothing. The only
 * plural on the site is the certified colleague in `boundary`.
 */

/**
 * The refrigerant boundary, stated once and reused.
 *
 * Freddy holds no fluorinated-gas certificate, so a sealed cooling circuit is
 * not his to open — by law, not by preference. Naming the limit out loud reads
 * as competence and keeps the site on the right side of RD 115/2017; softening
 * it into vagueness would lose both. Held in a const because it appears on the
 * services page and in the FAQ, and the two must never drift apart.
 */
const boundary = {
  title: "¿Y si la avería está en el circuito de gas?",
  body:
    "Se lo digo, y no le cobro por descubrirlo. El circuito sellado de una nevera sólo puede abrirlo un técnico con certificado de gases fluorados, y yo trabajo con uno. Prefiero pasarle el contacto que hacerle un apaño que no aguanta.",
} as const;

const es = {
  locale: "es",
  htmlLang: "es-ES",
  localeName: "Castellano",
  dir: "ltr",

  nav: {
    home: "Inicio",
    services: "Servicios",
    areas: "Zonas",
    contact: "Contacto",
    call: "Llamar",
    menu: "Menú",
    close: "Cerrar",
    skip: "Saltar al contenido",
  },

  // Localised URL slugs. Search engines in this market rank the Spanish terms,
  // not translated-English ones, so the paths differ per locale.
  slugs: {
    services: "servicios",
    areas: "zonas",
    contact: "contacto",
    legal: "aviso-legal",
    privacy: "privacidad",
  },

  hero: {
    label: "SAT en Barcelona",
    // The headline is the customer's own question, not a slogan about me.
    title: "¿Qué se le ha estropeado?",
    lead:
      "Reparo electrodomésticos a domicilio en Barcelona. Dígame qué falla y le digo hoy mismo si tiene arreglo y cuánto cuesta.",
    pickSymptom: "Elija el síntoma",
    orCall: "o llame directamente",
    availableNow: "Abierto ahora",
    everyDayHours: "Todos los días, de {open} a {close}",
    closedNow: "Cerrado ahora",
    opensAt: "Abro a las",
    todayUntil: "Hoy hasta las",
    whatsapp: "Escribir por WhatsApp",
  },

  // What people actually say when they ring. Ordered by how often it is the
  // first thing out of their mouth.
  symptoms: [
    { id: "no-enfria", label: "No enfría", note: "Nevera o congelador" },
    { id: "pierde-agua", label: "Pierde agua", note: "Lavadora, lavavajillas o termo" },
    { id: "no-calienta", label: "No calienta", note: "Horno, secadora o agua caliente" },
    { id: "no-gira", label: "No gira ni centrifuga", note: "Lavadora o secadora" },
    { id: "no-desagua", label: "No desagua", note: "Lavadora o lavavajillas" },
    { id: "no-enciende", label: "No enciende", note: "Cualquier aparato" },
    { id: "hace-ruido", label: "Hace mucho ruido", note: "Rodamientos, bomba o ventilador" },
    { id: "huele-quemado", label: "Huele a quemado", note: "Desenchúfelo y llámeme" },
  ],

  urgent: {
    title: "Si huele a quemado o hay agua en el suelo",
    body:
      "Desenchufe el aparato y cierre la llave de paso antes de nada. Después llámeme: estas dos averías no esperan a mañana.",
    cta: "Llamar ahora",
  },

  services: {
    label: "Qué reparo",
    title: "De lo que calienta a lo que enfría",
    lead:
      "Un mismo oficio en los dos extremos: resistencias, termostatos y sondas por un lado; ventiladores, desescarches y placas de control por el otro.",
    hotLabel: "Calor",
    coldLabel: "Frío",
    axisNote: "Ordenado por temperatura de trabajo",
    common: "Averías habituales",
    cta: "Ver averías y precios",
  },

  boundary,

  // Sorted hot to cold. The order is the design: it is what the axis renders.
  catalogue: [
    {
      id: "hornos",
      pole: "hot",
      name: "Hornos y vitrocerámicas",
      blurb: "Resistencias fundidas, termostatos descalibrados, puertas que no cierran y placas que no reconocen la sartén.",
      faults: ["No calienta", "Calienta de más", "El cristal no cierra", "La placa de inducción no detecta"],
    },
    {
      id: "secadoras",
      pole: "hot",
      name: "Secadoras",
      blurb: "Bombas de calor, resistencias y sondas de humedad. La avería casi siempre está en el condensador o en el filtro.",
      faults: ["Seca pero no calienta", "Tarda el doble", "Se para a mitad", "Deposita agua"],
    },
    {
      id: "termos",
      pole: "hot",
      // Eléctricos únicamente: un calentador de gas es trabajo de instalador
      // de gas autorizado, y ese carnet tampoco lo tengo.
      name: "Termos eléctricos",
      blurb: "Termos eléctricos de acumulación: resistencia, ánodo de magnesio, termostato y sobrecalentamiento.",
      faults: ["Sin agua caliente", "Salta el diferencial", "Gotea por abajo", "El agua sale hirviendo"],
    },
    {
      id: "lavadoras",
      pole: "mid",
      name: "Lavadoras",
      blurb: "Lo que más reparo. Rodamientos, bombas de desagüe, electroválvulas y módulos de potencia.",
      faults: ["No centrifuga", "No desagua", "Pierde agua", "Hace un ruido de avión"],
    },
    {
      id: "lavavajillas",
      pole: "mid",
      name: "Lavavajillas",
      blurb: "Bombas, aspersores y resistencias de flujo. Casi siempre es cal, no una avería grave.",
      faults: ["No seca", "Deja restos", "No coge agua", "Error de desagüe"],
    },
    {
      id: "frigorificos",
      pole: "cold",
      // Todo lo de fuera del circuito sellado. Lo de dentro, no: ver `boundary`.
      name: "Neveras y congeladores",
      blurb: "Termostatos, ventiladores, resistencias de desescarche, placas de control, burletes de puerta y desagües atascados.",
      faults: ["No enfría", "Hace demasiado hielo", "Se acumula agua en el cajón", "La puerta no cierra bien"],
    },
  ],

  trust: {
    label: "Sin sorpresas",
    title: "Lo que cuesta, antes de empezar",
    lead:
      "El presupuesto se cierra en su casa, con el aparato abierto y el precio dicho en voz alta. Si no le convence, no se hace y no se toca nada más.",
    points: [
      {
        title: "Desplazamiento {fee} €, gratis si repara",
        body: "Se cobra el desplazamiento solo si decide no arreglarlo. Si sigue adelante con la reparación, no se cobra aparte.",
      },
      {
        title: "Presupuesto cerrado antes de tocar nada",
        body: "Mano de obra y piezas dichas y aceptadas antes de empezar. Sin ampliaciones a mitad del trabajo.",
      },
      {
        title: "{warranty} meses de garantía",
        body: "Por escrito, sobre la mano de obra y la pieza sustituida. Si vuelve a fallar lo mismo, vuelvo sin coste.",
      },
      {
        title: "Factura con IVA siempre",
        body: "Factura real, con NIF y desglose. Necesaria para la garantía y para deducirla si es un local.",
      },
    ],
  },

  process: {
    label: "Cómo funciona",
    title: "Cuatro pasos y ya está",
    // A genuine sequence, so it is numbered. Nothing else on the site is.
    steps: [
      { title: "Me llama", body: "Cuénteme el síntoma y la marca. Muchas averías se identifican por teléfono." },
      { title: "Le doy una franja", body: "Le digo qué día y en qué franja de dos horas paso. Le aviso al salir." },
      { title: "Diagnóstico y precio", body: "Abro el aparato, veo la avería y le digo el precio cerrado." },
      { title: "Se repara y se factura", body: "Con la pieza en la furgoneta, casi siempre en la misma visita." },
    ],
  },

  areas: {
    label: "Dónde voy",
    title: "Seis zonas, y las conozco",
    // Seis zonas y no dieciséis: es lo que dice la ficha de Google, y es lo que
    // permite llegar el mismo día. Prometer toda el área metropolitana es el
    // patrón de las centralitas contra las que compite este sitio.
    lead:
      "Trabajo en estas seis zonas. Concentrarme en ellas es lo que me permite llegar el mismo día en la mayoría de avisos. Si su calle no está en la lista, pregunte igualmente.",
    notListed: "¿No ve su zona? Llámeme y se lo confirmo.",
  },

  faq: {
    label: "Dudas frecuentes",
    title: "Lo que me preguntan por teléfono",
    items: [
      {
        q: "¿Cuánto tardan en venir?",
        a: "Normalmente atiendo en menos de {hours} horas laborables. Las averías de frío en verano y las fugas de agua las pongo por delante del resto.",
      },
      {
        q: "¿Trabaja con mi marca?",
        a: "Sí. Reparo todas las marcas domésticas habituales: Balay, Bosch, Siemens, Fagor, Zanussi, AEG, Whirlpool, Beko, LG, Samsung y demás. No soy servicio oficial de ninguna, lo que significa que no estoy obligado a cobrar su tarifa.",
      },
      {
        q: "¿Merece la pena repararlo o compro uno nuevo?",
        a: "Se lo digo claro y en contra de mi interés si hace falta. Con un aparato de más de doce años y una avería grave, casi nunca sale a cuenta. Prefiero perder la reparación a hacerle gastar mal el dinero.",
      },
      { q: boundary.title, a: boundary.body },
      {
        q: "¿Puedo pagar con tarjeta?",
        a: "Sí, con tarjeta, Bizum o efectivo, y siempre con factura.",
      },
      {
        q: "¿Trabaja fines de semana?",
        a: "Sí. Atiendo los siete días de la semana, de {open} a {close}, festivos incluidos. Una nevera no elige el sábado para estropearse.",
      },
    ],
  },

  contact: {
    label: "Contacto",
    title: "Cuénteme qué falla",
    lead: "Lo más rápido es llamar. Si prefiere escribir, el formulario abre WhatsApp con el mensaje ya redactado.",
    intro:
      "Soy Freddy. Voy yo a cada aviso, no mando a nadie. Si habla conmigo por teléfono, soy la misma persona que va a abrir su lavadora.",
    mobileLabel: "Móvil y WhatsApp",
    emailLabel: "Correo",
    hoursLabel: "Horario",
    areaLabel: "Zona de trabajo",
    form: {
      title: "Enviar por WhatsApp",
      name: "Su nombre",
      namePlaceholder: "Nombre y apellido",
      appliance: "Aparato",
      appliancePlaceholder: "Lavadora, nevera, horno…",
      brand: "Marca y modelo",
      brandPlaceholder: "Si lo tiene a mano",
      area: "Zona o barrio",
      areaPlaceholder: "Sant Martí, Nou Barris…",
      problem: "Qué le pasa",
      problemPlaceholder: "Descríbalo con sus palabras. Los ruidos y los códigos de error ayudan mucho.",
      submit: "Abrir WhatsApp con el mensaje",
      required: "Rellene el aparato y la avería para continuar.",
      note: "No se envía nada desde esta página: se abre WhatsApp y usted decide si lo manda.",
    },
    everyDay: "Todos los días",
    closed: "Cerrado",
  },

  footer: {
    blurb: "Reparación de electrodomésticos a domicilio en Barcelona: lavadoras, neveras, hornos, secadoras y lavavajillas.",
    services: "Servicios",
    company: "La empresa",
    legalNote: "Servicio técnico independiente. No soy servicio oficial de ninguna marca; las marcas citadas pertenecen a sus titulares.",
    rights: "Todos los derechos reservados.",
    googleProfile: "Ver en Google Maps",
    legal: "Aviso legal",
    privacy: "Privacidad",
  },

  legal: {
    noticeTitle: "Aviso legal",
    privacyTitle: "Política de privacidad",
    lastUpdated: "Última actualización",
    draftWarning:
      "Documento pendiente de revisión. Faltan los datos identificativos del titular y el texto no ha pasado por asesoría jurídica.",
  },

  meta: {
    homeTitle: "Reparación de electrodomésticos en Barcelona",
    homeDescription:
      "SAT a domicilio en Barcelona: lavadoras, neveras, hornos, secadoras y lavavajillas. Presupuesto cerrado, {warranty} meses de garantía y factura. Llame al {phone}.",
    servicesTitle: "Servicios de reparación de electrodomésticos",
    servicesDescription:
      "Reparo lavadoras, secadoras, lavavajillas, hornos, vitrocerámicas, neveras y termos eléctricos a domicilio en Barcelona.",
    areasTitle: "Zonas de Barcelona donde trabajo",
    areasDescription:
      "Reparación de electrodomésticos a domicilio en Nou Barris, Sant Martí, Sants-Montjuïc, Ciutat Vella, L'Hospitalet de Llobregat y Santa Coloma de Gramenet.",
    contactTitle: "Contacto y presupuesto",
    contactDescription: "Llame al {phone} o escríbame por WhatsApp. Le digo hoy mismo si su aparato tiene arreglo.",
  },
} as const;

export default es;

/**
 * Widens the literal types `as const` produces, so `en.ts` is checked for
 * *shape* -- every key present, arrays of the right element type -- without
 * being forced to repeat the Spanish strings verbatim.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : { -readonly [K in keyof T]: Widen<T[K]> };

export type Dict = Widen<typeof es>;
