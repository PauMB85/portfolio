# pau.h design system

Personal brand system for **Pau Humbert Maravi Busquets** — freelance software developer (AI + blockchain), Spain. The brand reads as a terminal: the wordmark \`~/pau.h\` turns the surname into a C header file, closed by a glowing gold cursor.

## Content fundamentals
- Copy in **English**, lowercase for labels/nav/buttons (terminal voice); sentence case for body copy.
- Labels use code affordances: \`// comment\` prefixes for kickers and form labels, \`$\` prefix inside buttons.
- First person, direct, no buzzwords, no emoji. Short sentences.

## Visual foundations
- **Dark by default** (warm black \`--bg-1 #14110c\`); a \`[data-theme="light"]\` scope re-maps semantic tokens for invoices/quotes/print.
- **Gold ramp 100–900** (\`--gold-*\`, Clio Williams gold). Bright golds (200–300) on dark; deep golds (600–900) on light. Never pair bright gold text on light grounds.
- **Type**: JetBrains Mono (\`--font-brand\`) for logo/headings/labels/code; Instrument Sans (\`--font-body\`) for paragraphs. Google Fonts via @import.
- **Radius 0 everywhere**; 1px lines (\`--line\`), 2px gold-deep rules to open sections.
- **Glow** (\`--glow\`) only on dark, reserved for the cursor motif and primary-button hover.
- Layout flush left; section kickers over a 2px rule; generous 64/96/120px section padding.
- Hover: lighter gold + glow (primary), 8% gold tint (ghost). Press: one step darker, glow off. Focus: 2px gold outline.

## Iconography
- No icon font. The brand mark set lives in \`assets/\` (PNG). If UI icons are ever needed, use Lucide (CDN) at 1.5px stroke — flag before adopting.

## Index
- \`styles.css\` — entry point (@imports only). Link this one file.
- \`tokens/\` — colors, typography, spacing.
- \`components.css\` — class layer: .btn, .input/.field, .card, .tag, .table, .nav, .cursor.
- \`guidelines/\` — specimen cards (Design System tab).
- \`assets/\` — logo-dark/light.png, icon-512/128.png.
- \`ui_kits/web/index.html\` — landing page reference for the personal site.

## Caveats
- The logo is typographic (rendered PNGs); a vector SVG version is a pending nice-to-have.
- Invoice/quote template not yet built — use the light theme tokens when creating it.
