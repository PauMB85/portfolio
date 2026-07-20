/** Datos de contacto y marca. Fuente única: no repetir literales en componentes. */
export const SITE = {
  name: 'Pau Humbert Maravi Busquets',
  /** Wordmark de la marca, partido para poder colorear cada tramo. */
  brand: { tilde: '~/', stem: 'pau', ext: '.h' },
  email: 'paumb85@gmail.com',
  phone: '+34 687 925 363',
  linkedin: 'https://www.linkedin.com/in/paumaravi/',
  github: 'https://github.com/PauMB85',
  location: { region: 'Mallorca', country: 'ES' },
  year: 2026,
} as const;

/**
 * Grupos de tecnologías. Los `items` NO se traducen y viven aquí una sola vez;
 * las etiquetas de cada grupo sí se traducen y están en `src/i18n/ui.ts`,
 * indexadas por este `id`.
 */
export const SKILL_GROUPS = [
  { id: 'languages', items: ['typescript', 'javascript', 'python', 'java', 'solidity'] },
  {
    id: 'backend',
    items: ['nestjs', 'fastapi', 'spring boot', 'postgresql', 'mongodb', 'elasticsearch', 'kafka', 'rabbitmq'],
  },
  { id: 'blockchain', items: ['ethers.js', 'web3.js', 'evm chains', 'erc-20'] },
  { id: 'ai', items: ['openai api', 'langchain', 'aws', 'docker', 'github actions', 'k6', 'jest'] },
] as const;

export type SkillGroupId = (typeof SKILL_GROUPS)[number]['id'];
