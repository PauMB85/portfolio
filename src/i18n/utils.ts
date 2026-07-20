/**
 * Helpers de ruta. El sitio se publica bajo un subdirectorio
 * (https://paumb85.github.io/portfolio/), así que NINGUNA ruta puede escribirse
 * a pelo con "/". Todo enlace y todo asset pasa por aquí.
 */

// Astro ya inyecta el base configurado, con la barra final garantizada.
const BASE = import.meta.env.BASE_URL;

/**
 * Prefija el base a una ruta de asset o página.
 *
 *   withBase('/assets/icon.svg')  ->  '/portfolio/assets/icon.svg'
 *
 * Para enlaces entre idiomas usa `getRelativeLocaleUrl` de `astro:i18n`,
 * que ya aplica el base por su cuenta — no lo pases por aquí o se duplicará.
 */
export function withBase(path: string): string {
  return `${BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
