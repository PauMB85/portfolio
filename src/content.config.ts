import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Astro 7 deprecó el re-export de `z` desde astro:content: se importa de zod.
import { z } from 'zod';

/**
 * Un texto que existe en los dos idiomas.
 *
 * Se modela así, y no con un fichero por idioma, para que los datos que NO se
 * traducen (tags técnicos, cifras de las métricas, nombres de empresa) tengan
 * una sola fuente de verdad y no puedan divergir. Además Zod exige ambos
 * idiomas, así que una traducción olvidada rompe el build en vez de colarse
 * en producción.
 */
const localized = z.object({
  en: z.string(),
  es: z.string(),
});

export type Localized = z.infer<typeof localized>;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    order: z.number().int().positive(),
    /** Texto del kicker sin el "// NN · ", que lo compone el componente. */
    kicker: localized,
    title: localized,
    body: localized,
    metrics: z
      .array(
        z.object({
          /** La cifra no se traduce: "400+/mo" es igual en los dos idiomas. */
          value: z.string(),
          caption: localized,
        }),
      )
      .optional(),
    /** Tags técnicos: nunca se traducen. */
    tags: z.array(z.string()),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    order: z.number().int().positive(),
    /** Traducible: "nov 2022 — present" / "nov 2022 — actualidad". */
    period: localized,
    /** El cargo real de cada etapa: se lee la progresión frontend → team leader. */
    role: localized,
    /** Nombre propio: no se traduce. */
    company: z.string(),
    /** Qué resolviste. Una frase, en acento: es lo que se escanea. */
    impact: localized,
    /** El cómo: stack, contexto y alcance. En muted, debajo. */
    detail: localized,
  }),
});

const achievements = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/achievements' }),
  schema: z.object({
    order: z.number().int().positive(),
    /** "winner" / "ganador". */
    kicker: localized,
    /** Nombre propio del evento: no se traduce. */
    title: z.string(),
    body: localized,
  }),
});

export const collections = { projects, experience, achievements };
