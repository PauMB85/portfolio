// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Repo `paumb85.github.io` => publica en la raíz. Sin `base`, las rutas son limpias
  // y añadir un dominio propio más adelante no obliga a tocar ningún enlace.
  site: 'https://paumb85.github.io',
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
