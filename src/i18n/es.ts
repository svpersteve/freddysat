/**
 * Castellano — the master copy deck. `ca.ts` and `en.ts` are typed against this
 * object, so a key added here but missed there is a compile error rather than a
 * blank on a live page.
 *
 * Register: usted. The people who own a fifteen-year-old washing machine and
 * call a SAT about it skew older than the tú/vosotros marketing default, and
 * usted is what a tradesperson in Barcelona uses on the phone with them.
 */
const es = {
  locale: "es",
  htmlLang: "es-ES",
  localeName: "Castellano",
  dir: "ltr",

  nav: {
    home: "Inicio",
    services: "Servicios",
    aircon: "Aire acondicionado",
    areas: "Zonas",
    contact: "Contacto",
    call: "Llamar",
    menu: "Menú",
    close: "Cerrar",
    skip: "Saltar al contenido",
  },

  // Localised URL slugs. Search engines in this market rank the Spanish and
  // Catalan terms, not translated-English ones, so the paths differ per locale.
  slugs: {
    services: "servicios",
    aircon: "aire-acondicionado",
    areas: "zonas",
    contact: "contacto",
    legal: "aviso-legal",
    privacy: "privacidad",
  },

  hero: {
    eyebrow: "SAT en Barcelona",
    // The headline is the customer's own question, not a slogan about us.
    title: "¿Qué se le ha estropeado?",
    lead:
      "Reparamos electrodomésticos y aire acondicionado a domicilio en Barcelona. Diga qué falla y le decimos hoy mismo si tiene arreglo y cuánto cuesta.",
    pickSymptom: "Elija el síntoma",
    orCall: "o llame directamente",
    availableNow: "Abierto ahora",
    closedNow: "Cerrado ahora",
    opensAt: "Abrimos a las",
    todayUntil: "Hoy hasta las",
    whatsapp: "Escribir por WhatsApp",
  },

  // What people actually say when they ring. Ordered by how often it is the
  // first thing out of their mouth.
  symptoms: [
    { id: "no-enfria", label: "No enfría", note: "Nevera, congelador o aire" },
    { id: "pierde-agua", label: "Pierde agua", note: "Lavadora, lavavajillas o termo" },
    { id: "no-calienta", label: "No calienta", note: "Horno, secadora o agua caliente" },
    { id: "no-gira", label: "No gira ni centrifuga", note: "Lavadora o secadora" },
    { id: "no-desagua", label: "No desagua", note: "Lavadora o lavavajillas" },
    { id: "no-enciende", label: "No enciende", note: "Cualquier aparato" },
    { id: "hace-ruido", label: "Hace mucho ruido", note: "Rodamientos, bomba o ventilador" },
    { id: "huele-quemado", label: "Huele a quemado", note: "Desenchúfelo y llámenos" },
  ],

  urgent: {
    title: "Si huele a quemado o hay agua en el suelo",
    body:
      "Desenchufe el aparato y cierre la llave de paso antes de nada. Después llámenos: estas dos averías no esperan a mañana.",
    cta: "Llamar ahora",
  },

  services: {
    eyebrow: "Qué reparamos",
    title: "De lo que calienta a lo que enfría",
    lead:
      "Un mismo oficio en los dos extremos: resistencias, termostatos y sondas por un lado; compresores, gas y circuitos de frío por el otro.",
    hotLabel: "Calor",
    coldLabel: "Frío",
    axisNote: "Ordenado por temperatura de trabajo",
    common: "Averías habituales",
    cta: "Ver averías y precios",
  },

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
      name: "Termos y calentadores",
      blurb: "Termos eléctricos y calentadores de gas: resistencia, ánodo de magnesio, termostato y sobrecalentamiento.",
      faults: ["Sin agua caliente", "Salta el diferencial", "Gotea por abajo", "El agua sale hirviendo"],
    },
    {
      id: "lavadoras",
      pole: "mid",
      name: "Lavadoras",
      blurb: "Lo que más reparamos. Rodamientos, bombas de desagüe, electroválvulas y módulos de potencia.",
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
      name: "Frigoríficos y congeladores",
      blurb: "Compresores, termostatos, resistencias de desescarche y fugas de gas en el circuito de frío.",
      faults: ["No enfría", "Hace hielo de más", "El motor no para", "Charco en el cajón"],
    },
    {
      id: "aire",
      pole: "cold",
      name: "Aire acondicionado",
      blurb: "Split, conductos y multisplit. Carga de gas, limpieza de baterías, fugas y instalación.",
      faults: ["No enfría", "Gotea dentro de casa", "Huele mal", "Hace ruido la unidad exterior"],
    },
  ],

  trust: {
    eyebrow: "Sin sorpresas",
    title: "Lo que cuesta, antes de empezar",
    lead:
      "El presupuesto se cierra en su casa, con el aparato abierto y el precio dicho en voz alta. Si no le convence, no se hace y no se toca nada más.",
    points: [
      {
        title: "Desplazamiento {fee} €, gratis si repara",
        body: "Se cobra el desplazamiento solo si decide no arreglarlo. Si damos luz verde a la reparación, no se cobra aparte.",
      },
      {
        title: "Presupuesto cerrado antes de tocar nada",
        body: "Mano de obra y piezas dichas y aceptadas antes de empezar. Sin ampliaciones a mitad del trabajo.",
      },
      {
        title: "{warranty} meses de garantía",
        body: "Por escrito, sobre la mano de obra y la pieza sustituida. Si vuelve a fallar lo mismo, volvemos sin coste.",
      },
      {
        title: "Factura con IVA siempre",
        body: "Factura real, con NIF y desglose. Necesaria para la garantía y para deducirla si es un local.",
      },
    ],
  },

  process: {
    eyebrow: "Cómo funciona",
    title: "Cuatro pasos y ya está",
    // A genuine sequence, so it is numbered. Nothing else on the site is.
    steps: [
      { title: "Nos llama", body: "Cuente el síntoma y la marca. Muchas averías se identifican por teléfono." },
      { title: "Le damos una franja", body: "Le decimos qué día y en qué franja de dos horas pasamos. Avisamos al salir." },
      { title: "Diagnóstico y precio", body: "Abrimos el aparato, vemos la avería y le decimos el precio cerrado." },
      { title: "Se repara y se factura", body: "Con la pieza en la furgoneta, casi siempre en la misma visita." },
    ],
  },

  areas: {
    eyebrow: "Dónde vamos",
    title: "Barcelona y área metropolitana",
    lead: "Trabajamos en toda la ciudad y en los municipios de al lado. Si su calle no está en la lista, pregunte igualmente.",
    notListed: "¿No ve su zona? Llámenos y se lo confirmamos.",
  },

  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Lo que nos preguntan por teléfono",
    items: [
      {
        q: "¿Cuánto tardan en venir?",
        a: "Normalmente atendemos en menos de {hours} horas laborables. Las averías de frío en verano y las fugas de agua las ponemos por delante del resto.",
      },
      {
        q: "¿Trabajan con mi marca?",
        a: "Sí. Reparamos todas las marcas domésticas habituales: Balay, Bosch, Siemens, Fagor, Zanussi, AEG, Whirlpool, Beko, LG, Samsung, Mitsubishi, Daikin y demás. No somos servicio oficial de ninguna, lo que significa que no estamos obligados a cobrar su tarifa.",
      },
      {
        q: "¿Merece la pena repararlo o compro uno nuevo?",
        a: "Se lo decimos claro y en contra de nuestro interés si hace falta. Con un aparato de más de doce años y una avería de compresor o de motor, casi nunca sale a cuenta. Preferimos perder la reparación a hacerle gastar mal el dinero.",
      },
      {
        q: "¿El aire acondicionado necesita gas cada año?",
        a: "No. Un circuito bien cerrado no consume gas. Si su equipo pierde carga todos los veranos es que tiene una fuga, y recargarlo sin buscarla es tirar el dinero cada temporada.",
      },
      {
        q: "¿Puedo pagar con tarjeta?",
        a: "Sí, con tarjeta, Bizum o efectivo, y siempre con factura.",
      },
      {
        q: "¿Atienden fuera de horario?",
        a: "El horario de visita es el publicado. Fuera de él puede dejar un WhatsApp y le contestamos a primera hora del siguiente día laborable.",
      },
    ],
  },

  aircon: {
    eyebrow: "Especialidad",
    title: "Aire acondicionado, sin el timo del gas",
    lead:
      "En agosto medio Barcelona llama por lo mismo, y en medio de esas llamadas se cuela mucha recarga de gas innecesaria. Un split que enfriaba bien y ha dejado de hacerlo casi nunca necesita gas: necesita que alguien busque por qué lo ha perdido.",
    doTitle: "Lo que hacemos",
    do: [
      "Reparación de split, multisplit y conductos",
      "Búsqueda de fugas con detector, no a ojo",
      "Carga de gas R32 y R410A tras sellar la fuga",
      "Limpieza de baterías y desinfección de la unidad interior",
      "Sustitución de bombas de condensados y desagües",
      "Instalación y puesta en marcha de equipos nuevos",
    ],
    seasonTitle: "Antes de que apriete el calor",
    seasonBody:
      "La revisión de mayo cuesta una fracción de la reparación de agosto, y en agosto hay lista de espera. Si el año pasado ya enfriaba flojo, no espere.",
  },

  contact: {
    eyebrow: "Contacto",
    title: "Cuéntenos qué falla",
    lead: "Lo más rápido es llamar. Si prefiere escribir, el formulario abre WhatsApp con el mensaje ya redactado.",
    phoneLabel: "Teléfono",
    mobileLabel: "Móvil y WhatsApp",
    emailLabel: "Correo",
    hoursLabel: "Horario",
    areaLabel: "Zona de trabajo",
    form: {
      title: "Enviar por WhatsApp",
      name: "Su nombre",
      namePlaceholder: "Nombre y apellido",
      appliance: "Aparato",
      appliancePlaceholder: "Lavadora, nevera, aire…",
      brand: "Marca y modelo",
      brandPlaceholder: "Si lo tiene a mano",
      area: "Zona o barrio",
      areaPlaceholder: "Gràcia, Sant Martí…",
      problem: "Qué le pasa",
      problemPlaceholder: "Descríbalo con sus palabras. Los ruidos y los códigos de error ayudan mucho.",
      submit: "Abrir WhatsApp con el mensaje",
      required: "Rellene el aparato y la avería para continuar.",
      note: "No se envía nada desde esta página: se abre WhatsApp y usted decide si lo manda.",
    },
    weekdays: "Lunes a viernes",
    saturday: "Sábado",
    sunday: "Domingo",
    closed: "Cerrado",
  },

  footer: {
    blurb: "Servicio de asistencia técnica a domicilio para electrodomésticos y climatización en Barcelona y área metropolitana.",
    services: "Servicios",
    company: "La empresa",
    legalNote: "Servicio técnico independiente. No somos servicio oficial de ninguna marca; las marcas citadas pertenecen a sus titulares.",
    rights: "Todos los derechos reservados.",
    legal: "Aviso legal",
    privacy: "Privacidad",
  },

  legal: {
    noticeTitle: "Aviso legal",
    privacyTitle: "Política de privacidad",
    lastUpdated: "Última actualización",
    draftWarning:
      "Documento pendiente de revisión. Faltan los datos identificativos de la empresa y el texto no ha pasado por asesoría jurídica.",
  },

  meta: {
    homeTitle: "Reparación de electrodomésticos y aire acondicionado en Barcelona",
    homeDescription:
      "SAT a domicilio en Barcelona: lavadoras, neveras, hornos, lavavajillas y aire acondicionado. Presupuesto cerrado, {warranty} meses de garantía y factura. Llame al {phone}.",
    servicesTitle: "Servicios de reparación de electrodomésticos",
    servicesDescription:
      "Reparamos lavadoras, secadoras, lavavajillas, hornos, vitrocerámicas, frigoríficos, termos y aire acondicionado a domicilio en Barcelona.",
    airconTitle: "Reparación e instalación de aire acondicionado en Barcelona",
    airconDescription:
      "Split, multisplit y conductos: búsqueda de fugas, carga de gas R32 y R410A, limpieza y puesta en marcha. Servicio a domicilio en Barcelona.",
    areasTitle: "Zonas de Barcelona donde trabajamos",
    areasDescription: "Servicio técnico a domicilio en todos los distritos de Barcelona y en el área metropolitana.",
    contactTitle: "Contacto y presupuesto",
    contactDescription: "Llame al {phone} o escriba por WhatsApp. Le decimos hoy mismo si su aparato tiene arreglo.",
  },
} as const;

export default es;

/**
 * Widens the literal types `as const` produces, so `ca.ts` and `en.ts` are
 * checked for *shape* -- every key present, arrays of the right element type --
 * without being forced to repeat the Spanish strings verbatim.
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
