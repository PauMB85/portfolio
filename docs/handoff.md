# Handoff: pau.h — Personal portfolio site

## Overview
Personal portfolio + brand system for Pau Maraví Busquets (freelance full-stack developer, AI + blockchain, Mallorca). One landing page (Portfolio) built on the "pau.h" design system: terminal aesthetic, warm black grounds, gold accent ramp, JetBrains Mono brand type.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look and behavior, not production code to copy directly. The task is to **recreate them in a Next.js or Astro project as reusable components** using that framework's conventions. The CSS (`styles.css`, `tokens/`, `components.css`) IS production-ready and framework-agnostic: import it globally as-is, or map the custom properties into Tailwind config if the project uses Tailwind.

## Fidelity
**High-fidelity.** Recreate pixel-perfectly. All values live in CSS custom properties — never hard-code a color or font.

## Recommended component breakdown (Next.js/Astro)
- `<Nav />` — .nav bar; brand wordmark ~/pau.h (tilde gold-500, ".h" gold-300), links right (work / experience / skills / contact).
- `<Hero />` — kicker comment line, 3-line storytelling headline ("First, an idea." / "Then, the code." muted; "Now, it's live" in accent + blinking cursor block), lead paragraph, primary + ghost buttons.
- `<SectionHeader label="// selected work" />` — mono 12px, letter-spacing 0.14em, gold accent, above a 2px gold-800 top rule, 24px padding-top.
- `<ProjectCard />` — .card: kicker (// 01 · …), title, body, optional metrics row (3-col grid, mono bold gold value + muted caption), tag list.
- `<ExperienceRow />` — 3-col grid (200px period / 260px role+company / summary), 1px bottom rule.
- `<SkillGroup />` — mono muted label + wrap of .tag chips.
- `<Button variant="primary|ghost" />` — mono 14px 600, "$" prefix span, radius 0. Primary: gold-300 bg, #14110c text; hover gold-200 + glow, forced text color + no underline (see components.css fix). Ghost: transparent, gold border/text, hover 8% gold tint.
- `<Cursor />` — .cursor: 0.55em × 1.05em accent block with glow; one per view. Optionally animate blink (step-end, ~1.1s).
- `<Footer />` — 1px top rule, mono 12px muted, name left / © right.

## Design tokens
See `tokens/*.css` (authoritative). Highlights:
- Grounds: --bg-0 #0f0d09, --bg-1 #14110c (page), --bg-2 #1c1812 (cards), --line #2e2716.
- Gold ramp 100–900: #fff3cf, #ffe9a8, #f0c96a (accent on dark), #dcb14c, #c8992e, #b0821f (accent on light), #9a7118, #8a6414, #5f470e.
- Creams: #f6f2e8 (body text on dark), #e9e2d0. Muted text: #b3a98f.
- Light theme: [data-theme="light"] remaps semantic tokens (for invoices/quotes).
- Type: JetBrains Mono (brand/headings/labels/code), Instrument Sans (body). Google Fonts. Scale: 12/14/16/20/28/40/56, body line-height 1.6.
- Spacing: 4/8/12/16/24/32/48/64. Radius: 0 everywhere. Glow: 0 0 14px rgba(240,201,106,0.45) — dark theme only, cursor + primary hover.

## Content & tone rules
English copy; lowercase for nav/labels/buttons (terminal voice); "//" prefix on kickers and form labels; "$" prefix in buttons; sentence case body; no emoji; flush-left everything.

## Interactions & behavior
- Anchors scroll to sections (#work, #experience, #skills, #contact).
- Hover: primary button gold-200 + glow; ghost 8% tint; links accent → gold-200. Press: one step darker, glow off. Focus-visible: 2px gold outline, offset 2.
- No other animation required; optional cursor blink and section fade-ins are tasteful additions.

## State management
None required — static site. Contact = mailto link (paumb85@gmail.com). LinkedIn: https://www.linkedin.com/in/paumaravi/ · GitHub: https://github.com/PauMB85

## Assets
`assets/`: logo-dark.png, logo-light.png (1200×400), icon-512.png (ERP/avatar), icon-128.png (favicon). Typographic logo; SVG version pending.

## Files
- `Portfolio.dc.html` — the portfolio design reference (open in browser).
- `styles.css` → imports `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `components.css` — production-ready CSS.
- `ui_kits_web_index.html` — earlier generic landing reference.
- `readme_design_system.md`, `SKILL.md` — brand guide + AI skill file.
