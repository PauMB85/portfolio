// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // El repo se llama `portfolio`, así que GitHub Pages publica en un subdirectorio:
  // https://paumb85.github.io/portfolio/
  // Consecuencia: NINGÚN enlace ni ruta de asset puede escribirse a pelo con "/".
  // Usa siempre los helpers de src/i18n/utils.ts (o import.meta.env.BASE_URL),
  // que ya incluyen el base. Es la causa nº1 de "en local bien, desplegado roto".
  site: 'https://paumb85.github.io',
  base: '/portfolio',
  output: 'static',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      // Ambos idiomas con prefijo => /en/ y /es/ tienen URL propia indexable.
      prefixDefaultLocale: true,
      // Clave: en false, `/` lo sirve nuestro src/pages/index.astro, que hará de
      // router x-default con detección de idioma. En true, Astro lo redirigiría
      // automáticamente a /en/ y perderíamos esa página.
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // Genera las alternancias hreflang dentro del propio sitemap.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
});
