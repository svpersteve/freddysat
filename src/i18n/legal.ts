import type { Locale } from "../config/business";

/**
 * Aviso legal (LSSI-CE art. 10) and privacy policy (GDPR / LOPDGDD).
 *
 * These describe what this site genuinely does, which is very little: no
 * cookies, no analytics, no server-side form handler, and self-hosted fonts, so
 * there is no third-party request on page load to declare. If any of that
 * changes — an analytics tag, a pixel, a hosted form — this text stops being
 * true on the same day and must be updated with it.
 *
 * Still a draft: it cannot be published until the identification block in
 * `business.ts` (legal name, NIF, registered address) is filled in, and it has
 * not been reviewed by a lawyer.
 */

export interface LegalSection { h: string; p: string[] }
export interface LegalDoc { intro: string; sections: LegalSection[] }

export const LEGAL: Record<Locale, { notice: LegalDoc; privacy: LegalDoc }> = {
  es: {
    notice: {
      intro:
        "Condiciones de uso de este sitio web y datos identificativos de su titular, conforme al artículo 10 de la Ley 34/2002 de servicios de la sociedad de la información y de comercio electrónico.",
      sections: [
        {
          h: "Titular del sitio",
          p: [
            "Denominación: {legalName}. NIF: {taxId}. Domicilio: {address}. Correo electrónico: {email}. Teléfono: {phone}.",
            "Este sitio se publica con fines informativos sobre los servicios de reparación y mantenimiento que presta su titular.",
          ],
        },
        {
          h: "Condiciones de uso",
          p: [
            "El acceso a este sitio es libre y gratuito. Al utilizarlo, usted se compromete a hacerlo conforme a la ley y a no emplearlo de forma que pueda dañarlo o impedir su uso normal por parte de terceros.",
            "Los precios, plazos y coberturas que aquí se indican son orientativos y no constituyen una oferta contractual. El presupuesto vinculante es el que se entrega en el domicilio del cliente, una vez diagnosticada la avería, y ha de ser aceptado antes de iniciar la reparación.",
          ],
        },
        {
          h: "Servicio técnico independiente",
          p: [
            "El titular presta un servicio de asistencia técnica independiente y no es servicio oficial ni representante autorizado de ninguna marca. Las marcas y modelos citados se mencionan únicamente para identificar los aparatos sobre los que se interviene, y pertenecen a sus respectivos titulares.",
            "Una reparación realizada por un servicio no oficial puede afectar a la garantía comercial del fabricante mientras esta siga vigente. Si su aparato está aún en garantía, consúltenos antes: se lo diremos.",
          ],
        },
        {
          h: "Propiedad intelectual",
          p: [
            "Los textos, el diseño y el código de este sitio pertenecen a su titular, salvo los elementos de terceros expresamente identificados. Queda prohibida su reproducción con fines comerciales sin autorización previa.",
          ],
        },
        {
          h: "Responsabilidad",
          p: [
            "El titular procura que la información publicada sea exacta y esté actualizada, pero no puede garantizar que esté libre de errores. No responde de los daños derivados del uso de este sitio ni de la indisponibilidad temporal del servicio por causas técnicas.",
          ],
        },
        {
          h: "Legislación aplicable",
          p: [
            "Esta relación se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del consumidor.",
          ],
        },
      ],
    },
    privacy: {
      intro:
        "Cómo se tratan sus datos personales, conforme al Reglamento (UE) 2016/679 y a la Ley Orgánica 3/2018 de protección de datos personales y garantía de los derechos digitales.",
      sections: [
        {
          h: "Responsable del tratamiento",
          p: ["{legalName}, NIF {taxId}, con domicilio en {address}. Correo de contacto: {email}."],
        },
        {
          h: "Este sitio no recoge datos por sí mismo",
          p: [
            "La web no instala cookies, no incorpora herramientas de analítica ni de publicidad, y no carga tipografías, mapas ni vídeos desde servidores de terceros. Puede navegarla entera sin que se registre nada sobre usted más allá de lo descrito en el apartado siguiente.",
            "El formulario de contacto no envía nada a ningún servidor: compone un mensaje en su propio navegador y abre WhatsApp con él para que sea usted quien decida enviarlo. Si no pulsa enviar en WhatsApp, esa información no sale de su dispositivo.",
          ],
        },
        {
          h: "Datos que sí se tratan",
          p: [
            "Alojamiento: el proveedor de hosting (Cloudflare, Inc.) registra de forma automática la dirección IP y datos técnicos de la conexión para poder servir las páginas y protegerlas frente a ataques. La base jurídica es el interés legítimo en mantener el servicio disponible y seguro.",
            "Contacto: si nos llama, nos escribe por WhatsApp o nos manda un correo, tratamos los datos que usted nos facilite (nombre, teléfono, dirección del servicio y descripción de la avería) para atender su solicitud y, si contrata la reparación, para ejecutarla y facturarla. La base jurídica es la ejecución del contrato o las medidas precontractuales que usted solicita.",
            "Facturación: los datos fiscales de las facturas emitidas se conservan durante los plazos que exigen la normativa mercantil y tributaria.",
          ],
        },
        {
          h: "Conservación y destinatarios",
          p: [
            "Los datos se conservan mientras dure la relación y, después, durante los plazos legales de prescripción. No se ceden a terceros salvo obligación legal, ni se toman decisiones automatizadas ni se elabora ningún perfil.",
            "Si nos escribe por WhatsApp, su mensaje se transmite además a través de esa plataforma, cuyas propias condiciones de privacidad se aplican a la conversación. Si prefiere no usarla, llámenos o escríbanos a {email}.",
          ],
        },
        {
          h: "Sus derechos",
          p: [
            "Puede solicitar el acceso a sus datos, su rectificación o supresión, la limitación u oposición al tratamiento y su portabilidad, escribiendo a {email} e indicando qué derecho ejercita.",
            "Si considera que el tratamiento no se ajusta a la normativa, puede reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
          ],
        },
      ],
    },
  },

  ca: {
    notice: {
      intro:
        "Condicions d'ús d'aquest lloc web i dades identificatives del seu titular, d'acord amb l'article 10 de la Llei 34/2002 de serveis de la societat de la informació i de comerç electrònic.",
      sections: [
        {
          h: "Titular del lloc",
          p: [
            "Denominació: {legalName}. NIF: {taxId}. Domicili: {address}. Correu electrònic: {email}. Telèfon: {phone}.",
            "Aquest lloc es publica amb finalitats informatives sobre els serveis de reparació i manteniment que presta el seu titular.",
          ],
        },
        {
          h: "Condicions d'ús",
          p: [
            "L'accés a aquest lloc és lliure i gratuït. En utilitzar-lo, vostè es compromet a fer-ho d'acord amb la llei i a no emprar-lo de manera que el pugui danyar o impedir-ne l'ús normal a tercers.",
            "Els preus, terminis i cobertures que s'hi indiquen són orientatius i no constitueixen una oferta contractual. El pressupost vinculant és el que es lliura al domicili del client, un cop diagnosticada l'avaria, i s'ha d'acceptar abans d'iniciar la reparació.",
          ],
        },
        {
          h: "Servei tècnic independent",
          p: [
            "El titular presta un servei d'assistència tècnica independent i no és servei oficial ni representant autoritzat de cap marca. Les marques i models esmentats es citen únicament per identificar els aparells sobre els quals s'intervé, i pertanyen als seus titulars respectius.",
            "Una reparació feta per un servei no oficial pot afectar la garantia comercial del fabricant mentre aquesta segueixi vigent. Si el seu aparell encara és en garantia, consulti'ns abans: l'hi direm.",
          ],
        },
        {
          h: "Propietat intel·lectual",
          p: [
            "Els textos, el disseny i el codi d'aquest lloc pertanyen al seu titular, llevat dels elements de tercers expressament identificats. Queda prohibida la seva reproducció amb finalitats comercials sense autorització prèvia.",
          ],
        },
        {
          h: "Responsabilitat",
          p: [
            "El titular procura que la informació publicada sigui exacta i estigui actualitzada, però no pot garantir que sigui lliure d'errors. No respon dels danys derivats de l'ús d'aquest lloc ni de la indisponibilitat temporal del servei per causes tècniques.",
          ],
        },
        {
          h: "Legislació aplicable",
          p: [
            "Aquesta relació es regeix per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals del domicili del consumidor.",
          ],
        },
      ],
    },
    privacy: {
      intro:
        "Com es tracten les seves dades personals, d'acord amb el Reglament (UE) 2016/679 i la Llei Orgànica 3/2018 de protecció de dades personals i garantia dels drets digitals.",
      sections: [
        {
          h: "Responsable del tractament",
          p: ["{legalName}, NIF {taxId}, amb domicili a {address}. Correu de contacte: {email}."],
        },
        {
          h: "Aquest lloc no recull dades per si mateix",
          p: [
            "El web no instal·la galetes, no incorpora eines d'analítica ni de publicitat, i no carrega tipografies, mapes ni vídeos des de servidors de tercers. Pot navegar-hi sencer sense que es registri res sobre vostè més enllà del que es descriu a l'apartat següent.",
            "El formulari de contacte no envia res a cap servidor: compon un missatge al seu propi navegador i obre WhatsApp amb aquest missatge perquè sigui vostè qui decideixi enviar-lo. Si no prem enviar a WhatsApp, aquesta informació no surt del seu dispositiu.",
          ],
        },
        {
          h: "Dades que sí que es tracten",
          p: [
            "Allotjament: el proveïdor d'allotjament (Cloudflare, Inc.) registra de manera automàtica l'adreça IP i dades tècniques de la connexió per poder servir les pàgines i protegir-les davant d'atacs. La base jurídica és l'interès legítim a mantenir el servei disponible i segur.",
            "Contacte: si ens truca, ens escriu per WhatsApp o ens envia un correu, tractem les dades que vostè ens faciliti (nom, telèfon, adreça del servei i descripció de l'avaria) per atendre la seva sol·licitud i, si contracta la reparació, per executar-la i facturar-la. La base jurídica és l'execució del contracte o les mesures precontractuals que vostè sol·licita.",
            "Facturació: les dades fiscals de les factures emeses es conserven durant els terminis que exigeixen la normativa mercantil i tributària.",
          ],
        },
        {
          h: "Conservació i destinataris",
          p: [
            "Les dades es conserven mentre duri la relació i, després, durant els terminis legals de prescripció. No se cedeixen a tercers llevat d'obligació legal, ni es prenen decisions automatitzades ni s'elabora cap perfil.",
            "Si ens escriu per WhatsApp, el seu missatge es transmet a més a través d'aquesta plataforma, les condicions de privacitat de la qual s'apliquen a la conversa. Si prefereix no fer-la servir, truqui'ns o escrigui'ns a {email}.",
          ],
        },
        {
          h: "Els seus drets",
          p: [
            "Pot sol·licitar l'accés a les seves dades, la rectificació o supressió, la limitació o oposició al tractament i la portabilitat, escrivint a {email} i indicant quin dret exerceix.",
            "Si considera que el tractament no s'ajusta a la normativa, pot reclamar davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).",
          ],
        },
      ],
    },
  },

  en: {
    notice: {
      intro:
        "Terms of use for this website and the identification details of its owner, as required by article 10 of Spanish Law 34/2002 on information society services and electronic commerce.",
      sections: [
        {
          h: "Site owner",
          p: [
            "Name: {legalName}. Tax number: {taxId}. Address: {address}. Email: {email}. Phone: {phone}.",
            "This site is published for information about the repair and maintenance services the owner provides.",
          ],
        },
        {
          h: "Terms of use",
          p: [
            "Access to this site is free and open. In using it you agree to do so lawfully, and not in a way that could damage it or prevent others from using it normally.",
            "Prices, timescales and coverage shown here are indicative and are not a contractual offer. The binding quote is the one given at your address once the fault has been diagnosed, and it must be accepted before any repair begins.",
          ],
        },
        {
          h: "Independent repair service",
          p: [
            "The owner provides an independent repair service and is not an official service centre or authorised representative of any manufacturer. Brand and model names appear only to identify the appliances worked on, and belong to their respective owners.",
            "A repair carried out by a non-official service can affect a manufacturer's commercial guarantee while that guarantee is still running. If your appliance is still under guarantee, ask us first and we will tell you.",
          ],
        },
        {
          h: "Intellectual property",
          p: [
            "The text, design and code of this site belong to its owner, except for third-party elements expressly identified as such. Reproduction for commercial purposes without prior permission is not allowed.",
          ],
        },
        {
          h: "Liability",
          p: [
            "The owner works to keep the published information accurate and current but cannot guarantee it is free of errors, and is not liable for damage arising from use of this site or for temporary unavailability caused by technical issues.",
          ],
        },
        {
          h: "Governing law",
          p: [
            "This relationship is governed by Spanish law. For any dispute, the parties submit to the courts of the consumer's place of residence.",
          ],
        },
      ],
    },
    privacy: {
      intro:
        "How your personal data is handled, under Regulation (EU) 2016/679 and Spanish Organic Law 3/2018 on data protection and the guarantee of digital rights.",
      sections: [
        {
          h: "Data controller",
          p: ["{legalName}, tax number {taxId}, registered at {address}. Contact email: {email}."],
        },
        {
          h: "This site collects nothing on its own",
          p: [
            "The site sets no cookies, carries no analytics or advertising tools, and loads no fonts, maps or video from third-party servers. You can read all of it without anything being recorded about you beyond what the next section describes.",
            "The contact form sends nothing to any server: it composes a message in your own browser and opens WhatsApp with it, so that you decide whether to send it. If you don't press send in WhatsApp, that information never leaves your device.",
          ],
        },
        {
          h: "Data that is processed",
          p: [
            "Hosting: the hosting provider (Cloudflare, Inc.) automatically logs your IP address and technical connection data in order to serve the pages and protect them from attack. The legal basis is the legitimate interest in keeping the service available and secure.",
            "Contact: if you call, message us on WhatsApp or email us, we process the details you give us (name, phone number, service address and description of the fault) to deal with your request and, if you go ahead with the repair, to carry it out and invoice it. The legal basis is performance of the contract or the pre-contractual steps you asked for.",
            "Invoicing: tax data on issued invoices is retained for the periods required by Spanish commercial and tax law.",
          ],
        },
        {
          h: "Retention and recipients",
          p: [
            "Data is kept for the duration of the relationship and afterwards for the statutory limitation periods. It is not shared with third parties except where the law requires, and there is no automated decision-making or profiling.",
            "If you message us on WhatsApp, your message also travels through that platform, whose own privacy terms apply to the conversation. If you would rather not use it, call us or write to {email}.",
          ],
        },
        {
          h: "Your rights",
          p: [
            "You can request access to your data, its correction or deletion, restriction of or objection to processing, and portability, by writing to {email} and saying which right you are exercising.",
            "If you believe the processing does not comply with the rules, you can complain to the Spanish Data Protection Agency (www.aepd.es).",
          ],
        },
      ],
    },
  },
};

/**
 * Fixed, not `new Date()`.
 *
 * A build-time date would advance on every unrelated deploy and quietly claim
 * the policy was reviewed when nothing about it changed. Move this by hand,
 * when the text actually changes.
 */
export const LEGAL_UPDATED = "2026-09-07";
