import type { Locale, SkillGroupId } from './types';

/**
 * Cadenas de interfaz. Reglas de voz del design system que se respetan aquí:
 * minúsculas en nav, etiquetas y botones; prefijo "//" en los kickers;
 * "$" dentro de los botones; sentence case en los párrafos; sin emoji.
 *
 * El "//" y el "$" los ponen los componentes, no estas cadenas.
 */
export const UI = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Pau Humbert Maravi Busquets — full-stack developer, AI + blockchain',
      description:
        'Freelance full-stack developer specialised in AI and blockchain. Stablecoin settlement platforms, payment systems and LLM automation — architecture to production. Based in Mallorca, working worldwide.',
    },
    nav: { work: 'work', experience: 'experience', skills: 'skills', contact: 'contact' },
    hero: {
      line1: 'First, an idea.',
      line2: 'Then, the code.',
      line3: "Now, it's live",
      lead: 'Full-stack developer specialised in AI and blockchain. One person, end to end: architecture, code and deploy. Based in Mallorca, working worldwide.',
      primary: 'get in touch',
      ghost: 'view work',
    },
    sections: {
      work: 'selected work',
      experience: 'experience',
      skills: 'skills',
      achievements: 'achievements',
      contact: 'contact',
    },
    skills: {
      languages: 'languages',
      backend: 'backend + data',
      blockchain: 'blockchain',
      ai: 'ai + infra',
    } satisfies Record<SkillGroupId, string>,
    contact: {
      heading: 'Got a payments or AI problem?',
      lead: 'From smart contract design to API layer to frontend dashboards — I ship end-to-end.',
      /** La línea final se compone en el componente: ubicación · teléfono · idiomas.
       *  Partida así para poder quitar el teléfono cambiando una sola línea. */
      location: 'mallorca, spain',
      languages: 'spanish (native) · english (b2)',
    },
    /** Enlace al otro idioma, en el footer. */
    otherLocale: 'ver en español',
    skipToContent: 'skip to content',
  },

  es: {
    htmlLang: 'es',
    meta: {
      title: 'Pau Humbert Maravi Busquets — desarrollador full-stack, IA + blockchain',
      description:
        'Desarrollador full-stack freelance especializado en IA y blockchain. Plataformas de liquidación con stablecoins, sistemas de pago y automatización con LLM — de la arquitectura a producción. Desde Mallorca, trabajando para todo el mundo.',
    },
    nav: { work: 'proyectos', experience: 'experiencia', skills: 'tecnologías', contact: 'contacto' },
    hero: {
      line1: 'Primero, una idea.',
      line2: 'Después, el código.',
      line3: 'Ahora, está en producción',
      lead: 'Desarrollador full-stack especializado en IA y blockchain. Una sola persona, de principio a fin: arquitectura, código y despliegue. Desde Mallorca, trabajando para todo el mundo.',
      primary: 'hablemos',
      ghost: 'ver proyectos',
    },
    sections: {
      work: 'proyectos destacados',
      experience: 'experiencia',
      skills: 'tecnologías',
      achievements: 'logros',
      contact: 'contacto',
    },
    skills: {
      languages: 'lenguajes',
      backend: 'backend y datos',
      blockchain: 'blockchain',
      ai: 'ia e infraestructura',
    } satisfies Record<SkillGroupId, string>,
    contact: {
      heading: '¿Un problema de pagos o de IA?',
      lead: 'Del diseño del smart contract a la capa de API y los paneles de frontend — lo entrego de punta a punta.',
      location: 'mallorca, españa',
      languages: 'español (nativo) · inglés (b2)',
    },
    otherLocale: 'view in English',
    skipToContent: 'ir al contenido',
  },
} as const satisfies Record<Locale, unknown>;

export type UIStrings = (typeof UI)[Locale];

export function t(locale: Locale) {
  return UI[locale];
}
