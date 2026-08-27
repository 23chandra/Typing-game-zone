// Authentic Monkeytype Themes and Color Palettes
// Matches the exact color tokens used on monkeytype.com

export interface MonkeytypeTheme {
  id: string;
  name: string;
  category: 'dark' | 'light' | 'colorful';
  bg: string;
  main: string;
  caret: string;
  sub: string;
  subAlt: string;
  text: string;
  error: string;
  errorExtra: string;
}

export const MONKEYTYPE_THEMES: MonkeytypeTheme[] = [
  {
    id: 'serika_dark',
    name: 'Serika Dark',
    category: 'dark',
    bg: '#323437',
    main: '#e2b714',
    caret: '#e2b714',
    sub: '#646669',
    subAlt: '#2c2e31',
    text: '#d1d0c5',
    error: '#ca4754',
    errorExtra: '#7e2a33'
  },
  {
    id: 'carbon',
    name: 'Carbon',
    category: 'dark',
    bg: '#313131',
    main: '#f66e0d',
    caret: '#f66e0d',
    sub: '#616161',
    subAlt: '#262626',
    text: '#f5e6c8',
    error: '#e45c5c',
    errorExtra: '#b23a3a'
  },
  {
    id: 'matrix',
    name: 'Matrix',
    category: 'dark',
    bg: '#000000',
    main: '#15ff00',
    caret: '#15ff00',
    sub: '#006600',
    subAlt: '#041d04',
    text: '#d1ffd1',
    error: '#da3333',
    errorExtra: '#791717'
  },
  {
    id: 'dracula',
    name: 'Dracula',
    category: 'dark',
    bg: '#282a36',
    main: '#bd93f9',
    caret: '#bd93f9',
    sub: '#6272a4',
    subAlt: '#21222c',
    text: '#f8f8f2',
    error: '#ff5555',
    errorExtra: '#8b0000'
  },
  {
    id: 'nord',
    name: 'Nord',
    category: 'dark',
    bg: '#2e3440',
    main: '#88c0d0',
    caret: '#88c0d0',
    sub: '#4c566a',
    subAlt: '#242933',
    text: '#d8dee9',
    error: '#bf616a',
    errorExtra: '#88383e'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    category: 'colorful',
    bg: '#181425',
    main: '#ffee00',
    caret: '#ffee00',
    sub: '#5a3978',
    subAlt: '#231738',
    text: '#00ffff',
    error: '#ff0055',
    errorExtra: '#990033'
  },
  {
    id: 'olivia',
    name: 'Olivia',
    category: 'dark',
    bg: '#1c1b1d',
    main: '#deaf9d',
    caret: '#deaf9d',
    sub: '#4b4447',
    subAlt: '#262427',
    text: '#f2efed',
    error: '#e05561',
    errorExtra: '#8b2630'
  },
  {
    id: 'gruvbox_dark',
    name: 'Gruvbox Dark',
    category: 'dark',
    bg: '#282828',
    main: '#d79921',
    caret: '#d79921',
    sub: '#928374',
    subAlt: '#1d2021',
    text: '#ebdbb2',
    error: '#fb4934',
    errorExtra: '#cc241d'
  },
  {
    id: '8008',
    name: '8008',
    category: 'dark',
    bg: '#333a45',
    main: '#f44c7f',
    caret: '#f44c7f',
    sub: '#939eae',
    subAlt: '#272d37',
    text: '#e9ecf0',
    error: '#da3333',
    errorExtra: '#791717'
  },
  {
    id: 'bento',
    name: 'Bento',
    category: 'dark',
    bg: '#2d394d',
    main: '#ff7a90',
    caret: '#ff7a90',
    sub: '#4a5b78',
    subAlt: '#242f40',
    text: '#fffaf8',
    error: '#ee2a4a',
    errorExtra: '#9b182d'
  },
  {
    id: 'botanical',
    name: 'Botanical',
    category: 'dark',
    bg: '#1e2a22',
    main: '#88b395',
    caret: '#88b395',
    sub: '#495e54',
    subAlt: '#141d17',
    text: '#e1ece6',
    error: '#e26d5c',
    errorExtra: '#8a3b30'
  },
  {
    id: 'moonlight',
    name: 'Moonlight',
    category: 'dark',
    bg: '#191f28',
    main: '#c69f68',
    caret: '#c69f68',
    sub: '#4b5975',
    subAlt: '#11161d',
    text: '#cccccd',
    error: '#ff757f',
    errorExtra: '#a8363f'
  },
  {
    id: 'taro',
    name: 'Taro',
    category: 'dark',
    bg: '#130f1a',
    main: '#b382d9',
    caret: '#b382d9',
    sub: '#493d59',
    subAlt: '#1d1726',
    text: '#ffe7ff',
    error: '#f35588',
    errorExtra: '#8c1f44'
  },
  {
    id: 'miami_nights',
    name: 'Miami Nights',
    category: 'colorful',
    bg: '#18181a',
    main: '#e4609b',
    caret: '#e4609b',
    sub: '#47bac0',
    subAlt: '#242429',
    text: '#fff1f6',
    error: '#ff5555',
    errorExtra: '#a82b2b'
  },
  {
    id: 'shadow',
    name: 'Shadow',
    category: 'dark',
    bg: '#000000',
    main: '#eeeeee',
    caret: '#eeeeee',
    sub: '#444444',
    subAlt: '#111111',
    text: '#dddddd',
    error: '#ff4444',
    errorExtra: '#882222'
  },
  {
    id: 'milkshake',
    name: 'Milkshake',
    category: 'light',
    bg: '#f0f2f5',
    main: '#212b43',
    caret: '#212b43',
    sub: '#8f9db6',
    subAlt: '#ffffff',
    text: '#212b43',
    error: '#ff5252',
    errorExtra: '#9b1c1c'
  },
  {
    id: 'retro_90s',
    name: '90s Chalk',
    category: 'dark',
    bg: '#2b2d42',
    main: '#ffb703',
    caret: '#ffb703',
    sub: '#8d99ae',
    subAlt: '#1f2030',
    text: '#edf2f4',
    error: '#ef233c',
    errorExtra: '#d90429'
  }
];

export function getThemeById(id: string): MonkeytypeTheme {
  return MONKEYTYPE_THEMES.find(t => t.id === id) || MONKEYTYPE_THEMES[0];
}

export function applyThemeToElement(el: HTMLElement, theme: MonkeytypeTheme) {
  el.style.setProperty('--mt-bg', theme.bg);
  el.style.setProperty('--mt-main', theme.main);
  el.style.setProperty('--mt-caret', theme.caret);
  el.style.setProperty('--mt-sub', theme.sub);
  el.style.setProperty('--mt-sub-alt', theme.subAlt);
  el.style.setProperty('--mt-text', theme.text);
  el.style.setProperty('--mt-error', theme.error);
  el.style.setProperty('--mt-error-extra', theme.errorExtra);
}

/**
 * Applies the given Monkeytype theme globally across the ENTIRE website.
 * Sets all CSS variables on document.documentElement, updates html classes,
 * meta theme-color, persists to localStorage, and broadcasts an event.
 */
export function applyThemeGlobal(theme: MonkeytypeTheme) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const isLight = theme.category === 'light';

  root.setAttribute('data-theme', theme.id);
  if (isLight) {
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
  }

  // 1. Set Monkeytype-specific CSS variables
  root.style.setProperty('--mt-bg', theme.bg);
  root.style.setProperty('--mt-main', theme.main);
  root.style.setProperty('--mt-caret', theme.caret);
  root.style.setProperty('--mt-sub', theme.sub);
  root.style.setProperty('--mt-sub-alt', theme.subAlt);
  root.style.setProperty('--mt-text', theme.text);
  root.style.setProperty('--mt-error', theme.error);
  root.style.setProperty('--mt-error-extra', theme.errorExtra);

  // 2. Set Site-wide Design System Tokens
  if (isLight) {
    root.style.setProperty('--site-bg', theme.bg);
    root.style.setProperty('--site-canvas', '#ffffff');
    root.style.setProperty('--site-canvas-soft', theme.bg);
    root.style.setProperty('--site-canvas-soft-2', '#e2e8f0');
    root.style.setProperty('--site-ink', theme.text);
    root.style.setProperty('--site-primary', theme.main);
    root.style.setProperty('--site-on-primary', '#ffffff');
    root.style.setProperty('--site-body', '#475569');
    root.style.setProperty('--site-mute', theme.sub);
    root.style.setProperty('--site-hairline', 'rgba(0, 0, 0, 0.08)');
    root.style.setProperty('--site-hairline-strong', theme.sub);
    root.style.setProperty('--site-link', theme.main);
    root.style.setProperty('--site-link-deep', theme.main);
    root.style.setProperty('--site-link-bg-soft', '#e2e8f0');
    root.style.setProperty('--site-success', '#10b981');
    root.style.setProperty('--site-error', theme.error);
    root.style.setProperty('--site-error-soft', 'rgba(239, 68, 68, 0.15)');
    root.style.setProperty('--site-error-deep', theme.errorExtra);
    root.style.setProperty('--site-warning', '#f59e0b');
    root.style.setProperty('--site-warning-soft', 'rgba(245, 158, 11, 0.15)');
    root.style.setProperty('--site-warning-deep', '#d97706');
  } else {
    root.style.setProperty('--site-bg', theme.bg);
    root.style.setProperty('--site-canvas', theme.subAlt);
    root.style.setProperty('--site-canvas-soft', theme.bg);
    root.style.setProperty('--site-canvas-soft-2', theme.subAlt);
    root.style.setProperty('--site-ink', theme.text);
    root.style.setProperty('--site-primary', theme.main);
    root.style.setProperty('--site-on-primary', theme.bg);
    root.style.setProperty('--site-body', theme.text);
    root.style.setProperty('--site-mute', theme.sub);
    root.style.setProperty('--site-hairline', 'rgba(255, 255, 255, 0.08)');
    root.style.setProperty('--site-hairline-strong', theme.sub);
    root.style.setProperty('--site-link', theme.main);
    root.style.setProperty('--site-link-deep', theme.main);
    root.style.setProperty('--site-link-bg-soft', theme.subAlt);
    root.style.setProperty('--site-success', theme.main);
    root.style.setProperty('--site-error', theme.error);
    root.style.setProperty('--site-error-soft', 'rgba(202, 71, 84, 0.2)');
    root.style.setProperty('--site-error-deep', theme.errorExtra);
    root.style.setProperty('--site-warning', theme.main);
    root.style.setProperty('--site-warning-soft', 'rgba(226, 183, 20, 0.2)');
    root.style.setProperty('--site-warning-deep', theme.main);
  }

  // 3. Update browser mobile address bar theme color
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme.bg);
  }

  // 4. Persist to localStorage
  try {
    localStorage.setItem('monkeytype_theme', theme.id);
  } catch {}

  // 5. Broadcast custom event
  window.dispatchEvent(new CustomEvent('monkeytype:theme-change', { detail: theme }));
}

/**
 * Initializes global theming on client mount.
 */
export function initGlobalTheme() {
  if (typeof window === 'undefined') return;
  const savedId = localStorage.getItem('monkeytype_theme') || 'serika_dark';
  const theme = getThemeById(savedId);
  applyThemeGlobal(theme);
}
