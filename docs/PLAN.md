# Plan de acción — portfolio pau.h

Migración del prototipo HTML a un proyecto Astro componetizado, multiidioma y desplegado en GitHub Pages.

---

## Decisiones cerradas

| Punto | Decisión |
|---|---|
| Framework | **Astro** (static output, TypeScript strict) |
| Nombre completo | **Pau Humbert Maravi Busquets** |
| Fuentes | **Autoalojadas** vía `@fontsource` (se elimina el `@import` de Google Fonts) |
| Tema | **Dark only.** El tema claro queda reservado a facturas/presupuestos/print |
| JavaScript | Solo el router de idioma en `/`. El resto del sitio, cero JS |
| Repositorio | `paumb85.github.io` → publica en la raíz, **sin `base` path** |
| Rutas i18n | `/en/` y `/es/` indexables; `/` es router + `x-default` |
| Cambio de idioma | Enlace discreto en el footer, estilo terminal (`// ver en español`) |

### Por qué el repo se llama `paumb85.github.io`

GitHub Pages decide la URL según el nombre del repo:

- `paumb85.github.io` → `https://paumb85.github.io/` — sin prefijo, sin configuración extra.
- `portfolio` → `https://paumb85.github.io/portfolio/` — obliga a `base: '/portfolio'` y a que **todos** los enlaces y rutas de assets lo respeten. Es el origen habitual del bug "en local bien, desplegado sin estilos".

Con la primera opción, si algún día compras un dominio propio solo añades un `CNAME` y no cambia ninguna ruta.

---

## Fase 1 · Scaffold y repositorio

```bash
npm create astro@latest -- --template minimal --typescript strict
```

Estructura objetivo:

```
src/
  styles/            # design system, copiado sin reescribir
    styles.css
    tokens/{colors,typography,spacing}.css
    components.css
  components/        # un .astro por bloque
  layouts/
    BaseLayout.astro # <head>, SEO, hreflang, JSON-LD
  i18n/
    ui.ts            # diccionario de strings de interfaz
    utils.ts         # helpers de ruta y locale
  content/
    projects/{en,es}/
    experience/{en,es}/
  pages/
    index.astro      # router x-default
    en/index.astro
    es/index.astro
    404.astro
public/
  assets/            # logos, favicons, og-image
```

Repo nuevo `paumb85.github.io`, rama `main`. **El `git init` va en el proyecto nuevo, no en este bundle** — `design_handoff_pauh_portfolio/` es material de origen.

---

## Fase 2 · Integrar el design system

El CSS entra **sin reescribir**: un único `import '../styles/styles.css'` en `BaseLayout.astro`. Nada de Tailwind — el sistema ya está resuelto con custom properties y añadir Tailwind duplicaría la fuente de verdad.

Dos trabajos concretos:

**2.1 · Sacar los estilos inline del prototipo.** `Portfolio.dc.html` lleva todo el layout en atributos `style=""`. Cada uno pasa a un `<style>` con scope dentro de su componente `.astro`, siempre leyendo tokens:

```css
/* ✗ */  padding: 110px 64px 90px;
/* ✓ */  padding: 110px var(--space-8) 90px;
```

**2.2 · Sustituir el `@import` de Google Fonts** en `tokens/typography.css` por `@fontsource-variable/jetbrains-mono` e `@fontsource/instrument-sans`. Un `@import` dentro de CSS es render-blocking encadenado: el navegador descarga el CSS y solo entonces descubre que necesita las fuentes. Autoalojarlas mejora el LCP y elimina la dependencia de Google (RGPD). Se añade `preload` para el peso de JetBrains Mono usado en el `h1`.

### Regla verificable al cerrar la fase

Cero literales de color, tamaño o tipografía en los componentes. Única excepción legítima: `#14110c` como texto sobre oro en `.btn-primary` y `.tag-solid`, que debe seguir siendo oscuro en cualquier tema.

---

## Fase 3 · Contenido e i18n

### Configuración

```js
// astro.config.mjs
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  routing: { prefixDefaultLocale: true }   // /en/ y /es/ explícitos
}
```

### El router de `/`

`src/pages/index.astro` no es una redirección en blanco. Renderiza una página mínima, con marca, que:

1. Ejecuta un script inline que lee `navigator.language` y navega a `/en/` o `/es/`.
2. **Sin JavaScript, sigue siendo usable**: muestra dos enlaces claros a ambas versiones. Esto importa para crawlers y para usuarios con JS bloqueado.
3. Declara `hreflang="x-default"`. Este es exactamente el caso de uso que Google documenta para `x-default`: una página de selección de idioma.

Guarda la elección en `localStorage` para no re-detectar en cada visita.

### El contenido no se duplica en el markup

Hoy vive en el `renderVals()` del `<script data-dc-script>` de `Portfolio.dc.html` (4 trabajos, 4 grupos de skills). Pasa a **Content Collections con esquema Zod**, un fichero por idioma. Así `ExperienceRow` existe una vez y recibe datos; traducir es añadir un fichero, no clonar una página.

### Qué NO se traduce

Decisión de marca, coherente con la voz terminal del sistema:

| Elemento | Traducir |
|---|---|
| Tags técnicos (`nestjs`, `kafka`, `solidity`) | No |
| Kickers de sección (`// selected work`) | Sí |
| Nombres de empresa y cargos | No |
| Prefijo `$` de botones | No (es sintaxis) |
| Métricas (`400+/mo`) | Solo el caption, no la cifra |

---

## Fase 4 · Componentes

Descomposición ya pactada en `README.md`: `Nav`, `Hero`, `SectionHeader`, `ProjectCard`, `ExperienceRow`, `SkillGroup`, `Button`, `Cursor`, `Footer`.

La skill `vercel-composition-patterns` es de React y aquí no hay React, pero sus reglas traducen 1:1 a los *slots* de Astro:

| Regla | Aplicación en Astro |
|---|---|
| `architecture-avoid-boolean-props` | Nada de `<ProjectCard featured large withMetrics />`. Las variantes se componen |
| `patterns-explicit-variants` | `Button` recibe `variant="primary" \| "ghost"` (unión de strings, no booleanos). Encaja con que `components.css` ya expone `.btn-primary` / `.btn-ghost` |
| `architecture-compound-components` | `ProjectCard` con slots con nombre: `<slot name="metrics" />`, `<slot name="tags" />`. La tarjeta 01 lleva métricas y la 02/03 no — eso es composición, no una prop `hasMetrics` |
| `patterns-children-over-render-props` | Slots por defecto siempre; ningún `renderX` |
| `state-*` | No aplica: sitio estático sin estado cliente |

Detalles de marca encapsulados en el componente, no repetidos en cada página:

- El `$` de los botones lo inyecta `Button` con `<span class="prompt">`.
- El `// ` de los labels de formulario ya lo pone `.field label::before` en `components.css`.
- `Cursor` se usa **una sola vez por vista** (regla del design system).

---

## Fase 5 · SEO

Prioridad alta según el encargo. Desglose por bloques:

### 5.1 · Metadatos por página

- `<title>` y `<meta name="description">` únicos por página **y por idioma**. Nada de plantillas genéricas.
- `<link rel="canonical">` autorreferencial en cada URL.
- `<html lang="en">` / `<html lang="es">` correcto.

### 5.2 · hreflang recíproco

En las tres páginas, apuntándose mutuamente:

```html
<link rel="alternate" hreflang="en" href="https://paumb85.github.io/en/">
<link rel="alternate" hreflang="es" href="https://paumb85.github.io/es/">
<link rel="alternate" hreflang="x-default" href="https://paumb85.github.io/">
```

La reciprocidad es obligatoria: si `/en/` declara `/es/` pero `/es/` no declara `/en/`, Google ignora el conjunto.

### 5.3 · Datos estructurados (JSON-LD)

Schema `Person` — el que más rinde para marca personal:

```json
{
  "@type": "Person",
  "name": "Pau Humbert Maravi Busquets",
  "jobTitle": "Full-stack developer",
  "knowsAbout": ["AI", "Blockchain", "NestJS", "Solidity"],
  "address": { "@type": "PostalAddress", "addressRegion": "Mallorca", "addressCountry": "ES" },
  "sameAs": [
    "https://www.linkedin.com/in/paumaravi/",
    "https://github.com/PauMB85"
  ]
}
```

### 5.4 · Open Graph y Twitter Card

`og:title`, `og:description`, `og:url`, `og:type=website`, `og:locale` + `og:locale:alternate`, `twitter:card=summary_large_image`.

**Falta un asset:** `assets/` tiene `logo-dark.png` a 1200×400, pero Open Graph pide **1200×630**. Hay que generar una imagen OG nueva con la marca sobre `--bg-1`. Lo marco como tarea pendiente, no como algo resuelto.

### 5.5 · Rastreo

- `@astrojs/sitemap` con soporte i18n → genera `sitemap.xml` con los `hreflang` incluidos.
- `robots.txt` apuntando al sitemap.
- Página `404.astro` con la marca.

### 5.6 · Core Web Vitals

El sitio parte con ventaja (cero JS = INP y TBT excelentes). Puntos a cuidar:

- Fuentes autoalojadas con `preload` + `font-display: swap` y `size-adjust` para evitar CLS en el swap.
- Los PNG de `assets/` pasan por `astro:assets` → WebP con `width`/`height` explícitos.
- Verificación con Lighthouse **antes** de dar por cerrado el deploy.

### 5.7 · Semántica

Un solo `<h1>` por página, jerarquía de encabezados sin saltos, `<section>` con `aria-labelledby` apuntando a su header, texto de enlace descriptivo.

---

## Fase 6 · Accesibilidad

Pasada con la skill `web-design-guidelines`, con foco en lo que este diseño concreto arriesga:

- **Contraste de `--text-muted` (`#b3a98f`) sobre `--bg-2` (`#1c1812`)** — hay que medirlo. El párrafo lead y todos los `.card-body` usan ese color; es el punto más probable de fallo AA.
- El parpadeo opcional del cursor debe respetar `prefers-reduced-motion`.
- El `focus-visible` de 2px oro ya existe en `components.css`; comprobar que también alcanza a `.nav-links a`.
- El enlace de idioma del footer, con texto explícito, nunca una bandera.

---

## Fase 7 · Deploy

- `output: 'static'`, `site: 'https://paumb85.github.io'`, **sin `base`**.
- GitHub Actions con la action oficial `withastro/action`, disparo en push a `main`.
- Pages configurado en modo "GitHub Actions" (no "Deploy from branch").
- **Verificación real en producción** antes de dar nada por bueno: cargar la URL, comprobar estilos, fuentes, `/es/`, y pasar Lighthouse.

---

## Dependencias entre fases

```
Fase 1 (scaffold)
   ├─→ Fase 2 (CSS + fuentes)
   └─→ Fase 3 (contenido + i18n)
           └─→ Fase 4 (componentes)   ← necesita los datos ya modelados
                   ├─→ Fase 5 (SEO)
                   └─→ Fase 6 (a11y)
                           └─→ Fase 7 (deploy)
```

---

## Tareas pendientes de material

Cosas que **no** están resueltas en el bundle actual y harán falta:

1. **Imagen Open Graph 1200×630** — no existe; hay que crearla.
2. **Traducción al castellano de toda la copy** — el prototipo está solo en inglés.
3. **Logo en SVG** — `readme_design_system.md` lo marca como pendiente; los PNG sirven para el deploy inicial.
4. **Corregir el nombre en `README.md`**, que dice "Pau Maraví Busquets" en lugar de "Pau Humbert Maravi Busquets".
