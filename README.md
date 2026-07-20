# pau.h — portfolio

Portfolio personal de **Pau Humbert Maravi Busquets** — desarrollador full-stack freelance (AI + blockchain), Mallorca.

Astro estático, bilingüe (en/es), desplegado en GitHub Pages.

## Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Build de producción a `./dist/` |
| `npm run preview` | Previsualiza el build antes de desplegar |

## Decisiones estructurales

- **Repo `paumb85.github.io`** → publica en la raíz del dominio, sin `base` path. Cambiar el nombre del repo obligaría a configurar `base` y a revisar todos los enlaces.
- **Dark only.** El tema claro (`[data-theme="light"]`) existe en los tokens pero está reservado a facturas, presupuestos y print. No hay toggle.
- **Cero JavaScript** salvo el router de idioma de `/`.
- **`/en/` y `/es/` con prefijo, `/` como router.** `redirectToDefaultLocale: false` en `astro.config.mjs` es lo que permite que `/` sea nuestra página `x-default` con detección de idioma en vez de un redirect automático de Astro.
- **Fuentes autoalojadas** con `@fontsource-variable`. La familia se llama `JetBrains Mono Variable` (con sufijo), no `JetBrains Mono`.
- **Sin Tailwind.** El design system ya está resuelto con custom properties; añadir Tailwind duplicaría la fuente de verdad.

## Design system

Los estilos de `src/styles/` vienen del bundle de handoff y son la fuente de verdad. Regla: **cero literales** de color, tamaño o tipografía en los componentes — todo sale de los tokens. Única excepción legítima, `#14110c` como texto sobre oro en `.btn-primary` y `.tag-solid`.

## Documentación

- [docs/PLAN.md](docs/PLAN.md) — plan de migración por fases
- [docs/design-system.md](docs/design-system.md) — guía de marca
- [docs/handoff.md](docs/handoff.md) — handoff original de diseño
