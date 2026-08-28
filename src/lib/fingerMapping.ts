// Standard Touch Typing Keyboard Quadrant & Finger Mapping Engine
// 10-Finger Touch Typing Standard (ANSI QWERTY 15.0u System) + International Layouts

export type FingerId = 'lp' | 'lr' | 'lm' | 'li' | 'ri' | 'rm' | 'rr' | 'rp' | 'thumb';
export type QuadrantId = 'pinky' | 'ring' | 'middle' | 'index' | 'thumb';
export type HandId = 'left' | 'right' | 'both';

export interface FingerQuadrantInfo {
  finger: FingerId;
  hand: 'Left Hand' | 'Right Hand' | 'Both Hands';
  handId: HandId;
  fingerName: string;
  quadrant: QuadrantId;
  quadrantName: string;
  color: string;
  bgTint: string;
  borderTint: string;
  baseKey: string;
  shiftKey?: string;
  isAnchor?: boolean;
}

// Unified Quadrant Design System Colors (Dynamically synchronizes with active website theme)
export const QUADRANT_COLORS = {
  pinky: {
    primary: 'color-mix(in srgb, var(--mt-main, #e2b714) 35%, var(--mt-text, #d1d0c5) 65%)',
    tint: 'color-mix(in srgb, var(--mt-main, #e2b714) 14%, transparent)',
    border: 'color-mix(in srgb, var(--mt-main, #e2b714) 40%, transparent)',
    name: 'Pinky Quadrant'
  },
  ring: {
    primary: 'color-mix(in srgb, var(--mt-main, #e2b714) 45%, var(--mt-sub, #646669))',
    tint: 'color-mix(in srgb, var(--mt-main, #e2b714) 14%, transparent)',
    border: 'color-mix(in srgb, var(--mt-main, #e2b714) 40%, transparent)',
    name: 'Ring Quadrant'
  },
  middle: {
    primary: 'color-mix(in srgb, var(--mt-main, #e2b714) 75%, var(--mt-text, #d1d0c5))',
    tint: 'color-mix(in srgb, var(--mt-main, #e2b714) 18%, transparent)',
    border: 'color-mix(in srgb, var(--mt-main, #e2b714) 45%, transparent)',
    name: 'Middle Quadrant'
  },
  index: {
    primary: 'var(--mt-main, #e2b714)',
    tint: 'color-mix(in srgb, var(--mt-main, #e2b714) 22%, transparent)',
    border: 'color-mix(in srgb, var(--mt-main, #e2b714) 55%, transparent)',
    name: 'Index Quadrant'
  },
  thumb: {
    primary: 'var(--mt-caret, var(--mt-main, #e2b714))',
    tint: 'color-mix(in srgb, var(--mt-main, #e2b714) 14%, transparent)',
    border: 'color-mix(in srgb, var(--mt-main, #e2b714) 40%, transparent)',
    name: 'Thumb Zone'
  }
} as const;

export interface PhysicalKeyDef {
  k: string;       // base key identifier
  display: string; // letter on keycap
  s?: string;      // shifted symbol
  w: number;       // key width in standard 1.0u units (Each row sums to exactly 15.0u)
  finger: FingerId;
  hand: HandId;
  isAnchor?: boolean;
}

// Complete Standard 5-Row ANSI QWERTY Matrix (Every single row sums to EXACTLY 15.0u)
export const PHYSICAL_KEYBOARD_LAYOUT: PhysicalKeyDef[][] = [
  // Row 1: Number Row (13*1.0u + 2.0u = 15.0u)
  [
    { k: '`', display: '`', s: '~', w: 1.0, finger: 'lp', hand: 'left' },
    { k: '1', display: '1', s: '!', w: 1.0, finger: 'lp', hand: 'left' },
    { k: '2', display: '2', s: '@', w: 1.0, finger: 'lr', hand: 'left' },
    { k: '3', display: '3', s: '#', w: 1.0, finger: 'lm', hand: 'left' },
    { k: '4', display: '4', s: '$', w: 1.0, finger: 'li', hand: 'left' },
    { k: '5', display: '5', s: '%', w: 1.0, finger: 'li', hand: 'left' },
    { k: '6', display: '6', s: '^', w: 1.0, finger: 'ri', hand: 'right' },
    { k: '7', display: '7', s: '&', w: 1.0, finger: 'ri', hand: 'right' },
    { k: '8', display: '8', s: '*', w: 1.0, finger: 'rm', hand: 'right' },
    { k: '9', display: '9', s: '(', w: 1.0, finger: 'rr', hand: 'right' },
    { k: '0', display: '0', s: ')', w: 1.0, finger: 'rp', hand: 'right' },
    { k: '-', display: '-', s: '_', w: 1.0, finger: 'rp', hand: 'right' },
    { k: '=', display: '=', s: '+', w: 1.0, finger: 'rp', hand: 'right' },
    { k: 'backspace', display: 'Backspace', w: 2.0, finger: 'rp', hand: 'right' }
  ],
  // Row 2: Top / Upper Row (1.5u + 12*1.0u + 1.5u = 15.0u)
  [
    { k: 'tab', display: 'Tab', w: 1.5, finger: 'lp', hand: 'left' },
    { k: 'q', display: 'Q', w: 1.0, finger: 'lp', hand: 'left' },
    { k: 'w', display: 'W', w: 1.0, finger: 'lr', hand: 'left' },
    { k: 'e', display: 'E', w: 1.0, finger: 'lm', hand: 'left' },
    { k: 'r', display: 'R', w: 1.0, finger: 'li', hand: 'left' },
    { k: 't', display: 'T', w: 1.0, finger: 'li', hand: 'left' },
    { k: 'y', display: 'Y', w: 1.0, finger: 'ri', hand: 'right' },
    { k: 'u', display: 'U', w: 1.0, finger: 'ri', hand: 'right' },
    { k: 'i', display: 'I', w: 1.0, finger: 'rm', hand: 'right' },
    { k: 'o', display: 'O', w: 1.0, finger: 'rr', hand: 'right' },
    { k: 'p', display: 'P', w: 1.0, finger: 'rp', hand: 'right' },
    { k: '[', display: '[', s: '{', w: 1.0, finger: 'rp', hand: 'right' },
    { k: ']', display: ']', s: '}', w: 1.0, finger: 'rp', hand: 'right' },
    { k: '\\', display: '\\', s: '|', w: 1.5, finger: 'rp', hand: 'right' }
  ],
  // Row 3: Home Row (1.75u + 11*1.0u + 2.25u = 15.0u)
  [
    { k: 'caps', display: 'Caps Lock', w: 1.75, finger: 'lp', hand: 'left' },
    { k: 'a', display: 'A', w: 1.0, finger: 'lp', hand: 'left' },
    { k: 's', display: 'S', w: 1.0, finger: 'lr', hand: 'left' },
    { k: 'd', display: 'D', w: 1.0, finger: 'lm', hand: 'left' },
    { k: 'f', display: 'F', w: 1.0, finger: 'li', hand: 'left', isAnchor: true },
    { k: 'g', display: 'G', w: 1.0, finger: 'li', hand: 'left' },
    { k: 'h', display: 'H', w: 1.0, finger: 'ri', hand: 'right' },
    { k: 'j', display: 'J', w: 1.0, finger: 'ri', hand: 'right', isAnchor: true },
    { k: 'k', display: 'K', w: 1.0, finger: 'rm', hand: 'right' },
    { k: 'l', display: 'L', w: 1.0, finger: 'rr', hand: 'right' },
    { k: ';', display: ';', s: ':', w: 1.0, finger: 'rp', hand: 'right' },
    { k: "'", display: "'", s: '"', w: 1.0, finger: 'rp', hand: 'right' },
    { k: 'enter', display: 'Enter', w: 2.25, finger: 'rp', hand: 'right' }
  ],
  // Row 4: Bottom Row (2.25u + 10*1.0u + 2.75u = 15.0u)
  [
    { k: 'shift_l', display: 'Shift', w: 2.25, finger: 'lp', hand: 'left' },
    { k: 'z', display: 'Z', w: 1.0, finger: 'lp', hand: 'left' },
    { k: 'x', display: 'X', w: 1.0, finger: 'lr', hand: 'left' },
    { k: 'c', display: 'C', w: 1.0, finger: 'lm', hand: 'left' },
    { k: 'v', display: 'V', w: 1.0, finger: 'li', hand: 'left' },
    { k: 'b', display: 'B', w: 1.0, finger: 'li', hand: 'left' },
    { k: 'n', display: 'N', w: 1.0, finger: 'ri', hand: 'right' },
    { k: 'm', display: 'M', w: 1.0, finger: 'ri', hand: 'right' },
    { k: ',', display: ',', s: '<', w: 1.0, finger: 'rm', hand: 'right' },
    { k: '.', display: '.', s: '>', w: 1.0, finger: 'rr', hand: 'right' },
    { k: '/', display: '/', s: '?', w: 1.0, finger: 'rp', hand: 'right' },
    { k: 'shift_r', display: 'Shift', w: 2.75, finger: 'rp', hand: 'right' }
  ],
  // Row 5: Spacebar & Modifiers (1.25*3 + 6.25 + 1.25*3 = 15.0u)
  [
    { k: 'ctrl_l', display: 'Ctrl', w: 1.25, finger: 'lp', hand: 'left' },
    { k: 'win_l', display: 'Win', w: 1.25, finger: 'lp', hand: 'left' },
    { k: 'alt_l', display: 'Alt', w: 1.25, finger: 'thumb', hand: 'left' },
    { k: ' ', display: 'SPACEBAR', w: 6.25, finger: 'thumb', hand: 'both' },
    { k: 'alt_r', display: 'Alt', w: 1.25, finger: 'thumb', hand: 'right' },
    { k: 'fn_r', display: 'Fn', w: 1.25, finger: 'rp', hand: 'right' },
    { k: 'ctrl_r', display: 'Ctrl', w: 1.25, finger: 'rp', hand: 'right' }
  ]
];

// Base Character Mapping Table
export const CHAR_MAP: Record<string, { finger: FingerId; hand: HandId; baseKey: string; shiftKey?: string; isAnchor?: boolean }> = {
  // --- LEFT PINKY (LP) ---
  '`': { finger: 'lp', hand: 'left', baseKey: '`' },
  '~': { finger: 'lp', hand: 'left', baseKey: '`', shiftKey: '~' },
  '1': { finger: 'lp', hand: 'left', baseKey: '1' },
  '!': { finger: 'lp', hand: 'left', baseKey: '1', shiftKey: '!' },
  'q': { finger: 'lp', hand: 'left', baseKey: 'q' },
  'Q': { finger: 'lp', hand: 'left', baseKey: 'q', shiftKey: 'Q' },
  'a': { finger: 'lp', hand: 'left', baseKey: 'a' },
  'A': { finger: 'lp', hand: 'left', baseKey: 'a', shiftKey: 'A' },
  'z': { finger: 'lp', hand: 'left', baseKey: 'z' },
  'Z': { finger: 'lp', hand: 'left', baseKey: 'z', shiftKey: 'Z' },
  'tab': { finger: 'lp', hand: 'left', baseKey: 'tab' },
  'caps': { finger: 'lp', hand: 'left', baseKey: 'caps' },
  'shift_l': { finger: 'lp', hand: 'left', baseKey: 'shift_l' },
  'ctrl_l': { finger: 'lp', hand: 'left', baseKey: 'ctrl_l' },
  'win_l': { finger: 'lp', hand: 'left', baseKey: 'win_l' },

  // --- LEFT RING (LR) ---
  '2': { finger: 'lr', hand: 'left', baseKey: '2' },
  '@': { finger: 'lr', hand: 'left', baseKey: '2', shiftKey: '@' },
  'w': { finger: 'lr', hand: 'left', baseKey: 'w' },
  'W': { finger: 'lr', hand: 'left', baseKey: 'w', shiftKey: 'W' },
  's': { finger: 'lr', hand: 'left', baseKey: 's' },
  'S': { finger: 'lr', hand: 'left', baseKey: 's', shiftKey: 'S' },
  'x': { finger: 'lr', hand: 'left', baseKey: 'x' },
  'X': { finger: 'lr', hand: 'left', baseKey: 'x', shiftKey: 'X' },

  // --- LEFT MIDDLE (LM) ---
  '3': { finger: 'lm', hand: 'left', baseKey: '3' },
  '#': { finger: 'lm', hand: 'left', baseKey: '3', shiftKey: '#' },
  'e': { finger: 'lm', hand: 'left', baseKey: 'e' },
  'E': { finger: 'lm', hand: 'left', baseKey: 'e', shiftKey: 'E' },
  'd': { finger: 'lm', hand: 'left', baseKey: 'd' },
  'D': { finger: 'lm', hand: 'left', baseKey: 'd', shiftKey: 'D' },
  'c': { finger: 'lm', hand: 'left', baseKey: 'c' },
  'C': { finger: 'lm', hand: 'left', baseKey: 'c', shiftKey: 'C' },

  // --- LEFT INDEX (LI - Columns 4 & 5) ---
  '4': { finger: 'li', hand: 'left', baseKey: '4' },
  '$': { finger: 'li', hand: 'left', baseKey: '4', shiftKey: '$' },
  '5': { finger: 'li', hand: 'left', baseKey: '5' },
  '%': { finger: 'li', hand: 'left', baseKey: '5', shiftKey: '%' },
  'r': { finger: 'li', hand: 'left', baseKey: 'r' },
  'R': { finger: 'li', hand: 'left', baseKey: 'r', shiftKey: 'R' },
  't': { finger: 'li', hand: 'left', baseKey: 't' },
  'T': { finger: 'li', hand: 'left', baseKey: 't', shiftKey: 'T' },
  'f': { finger: 'li', hand: 'left', baseKey: 'f', isAnchor: true },
  'F': { finger: 'li', hand: 'left', baseKey: 'f', shiftKey: 'F', isAnchor: true },
  'g': { finger: 'li', hand: 'left', baseKey: 'g' },
  'G': { finger: 'li', hand: 'left', baseKey: 'g', shiftKey: 'G' },
  'v': { finger: 'li', hand: 'left', baseKey: 'v' },
  'V': { finger: 'li', hand: 'left', baseKey: 'v', shiftKey: 'V' },
  'b': { finger: 'li', hand: 'left', baseKey: 'b' },
  'B': { finger: 'li', hand: 'left', baseKey: 'b', shiftKey: 'B' },

  // --- RIGHT INDEX (RI - Columns 6 & 7) ---
  '6': { finger: 'ri', hand: 'right', baseKey: '6' },
  '^': { finger: 'ri', hand: 'right', baseKey: '6', shiftKey: '^' },
  '7': { finger: 'ri', hand: 'right', baseKey: '7' },
  '&': { finger: 'ri', hand: 'right', baseKey: '7', shiftKey: '&' },
  'y': { finger: 'ri', hand: 'right', baseKey: 'y' },
  'Y': { finger: 'ri', hand: 'right', baseKey: 'y', shiftKey: 'Y' },
  'u': { finger: 'ri', hand: 'right', baseKey: 'u' },
  'U': { finger: 'ri', hand: 'right', baseKey: 'u', shiftKey: 'U' },
  'h': { finger: 'ri', hand: 'right', baseKey: 'h' },
  'H': { finger: 'ri', hand: 'right', baseKey: 'h', shiftKey: 'H' },
  'j': { finger: 'ri', hand: 'right', baseKey: 'j', isAnchor: true },
  'J': { finger: 'ri', hand: 'right', baseKey: 'j', shiftKey: 'J', isAnchor: true },
  'n': { finger: 'ri', hand: 'right', baseKey: 'n' },
  'N': { finger: 'ri', hand: 'right', baseKey: 'n', shiftKey: 'N' },
  'm': { finger: 'ri', hand: 'right', baseKey: 'm' },
  'M': { finger: 'ri', hand: 'right', baseKey: 'm', shiftKey: 'M' },

  // --- RIGHT MIDDLE (RM) ---
  '8': { finger: 'rm', hand: 'right', baseKey: '8' },
  '*': { finger: 'rm', hand: 'right', baseKey: '8', shiftKey: '*' },
  'i': { finger: 'rm', hand: 'right', baseKey: 'i' },
  'I': { finger: 'rm', hand: 'right', baseKey: 'i', shiftKey: 'I' },
  'k': { finger: 'rm', hand: 'right', baseKey: 'k' },
  'K': { finger: 'rm', hand: 'right', baseKey: 'k', shiftKey: 'K' },
  ',': { finger: 'rm', hand: 'right', baseKey: ',' },
  '<': { finger: 'rm', hand: 'right', baseKey: ',', shiftKey: '<' },

  // --- RIGHT RING (RR) ---
  '9': { finger: 'rr', hand: 'right', baseKey: '9' },
  '(': { finger: 'rr', hand: 'right', baseKey: '9', shiftKey: '(' },
  'o': { finger: 'rr', hand: 'right', baseKey: 'o' },
  'O': { finger: 'rr', hand: 'right', baseKey: 'o', shiftKey: 'O' },
  'l': { finger: 'rr', hand: 'right', baseKey: 'l' },
  'L': { finger: 'rr', hand: 'right', baseKey: 'l', shiftKey: 'L' },
  '.': { finger: 'rr', hand: 'right', baseKey: '.' },
  '>': { finger: 'rr', hand: 'right', baseKey: '.', shiftKey: '>' },

  // --- RIGHT PINKY (RP) ---
  '0': { finger: 'rp', hand: 'right', baseKey: '0' },
  ')': { finger: 'rp', hand: 'right', baseKey: '0', shiftKey: ')' },
  '-': { finger: 'rp', hand: 'right', baseKey: '-' },
  '_': { finger: 'rp', hand: 'right', baseKey: '-', shiftKey: '_' },
  '=': { finger: 'rp', hand: 'right', baseKey: '=' },
  '+': { finger: 'rp', hand: 'right', baseKey: '=', shiftKey: '+' },
  'p': { finger: 'rp', hand: 'right', baseKey: 'p' },
  'P': { finger: 'rp', hand: 'right', baseKey: 'p', shiftKey: 'P' },
  '[': { finger: 'rp', hand: 'right', baseKey: '[' },
  '{': { finger: 'rp', hand: 'right', baseKey: '[', shiftKey: '{' },
  ']': { finger: 'rp', hand: 'right', baseKey: ']' },
  '}': { finger: 'rp', hand: 'right', baseKey: ']' },
  '\\': { finger: 'rp', hand: 'right', baseKey: '\\' },
  '|': { finger: 'rp', hand: 'right', baseKey: '\\', shiftKey: '|' },
  ';': { finger: 'rp', hand: 'right', baseKey: ';' },
  ':': { finger: 'rp', hand: 'right', baseKey: ';', shiftKey: ':' },
  "'": { finger: 'rp', hand: 'right', baseKey: "'" },
  '"': { finger: 'rp', hand: 'right', baseKey: "'", shiftKey: '"' },
  '/': { finger: 'rp', hand: 'right', baseKey: '/' },
  '?': { finger: 'rp', hand: 'right', baseKey: '/', shiftKey: '?' },
  'backspace': { finger: 'rp', hand: 'right', baseKey: 'backspace' },
  'enter': { finger: 'rp', hand: 'right', baseKey: 'enter' },
  '\n': { finger: 'rp', hand: 'right', baseKey: 'enter' },
  '↵': { finger: 'rp', hand: 'right', baseKey: 'enter' },
  'shift_r': { finger: 'rp', hand: 'right', baseKey: 'shift_r' },
  'ctrl_r': { finger: 'rp', hand: 'right', baseKey: 'ctrl_r' },
  'fn_r': { finger: 'rp', hand: 'right', baseKey: 'fn_r' },

  // --- THUMBS (Spacebar & Alt) ---
  ' ': { finger: 'thumb', hand: 'both', baseKey: ' ' },
  'alt_l': { finger: 'thumb', hand: 'left', baseKey: 'alt_l' },
  'alt_r': { finger: 'thumb', hand: 'right', baseKey: 'alt_r' }
};

// --------------------------------------------------------------------------
// International Language Key Label Overrides & Complete Character Dictionary
// --------------------------------------------------------------------------
export const KEY_LABEL_OVERRIDES: Record<string, Record<string, { display: string; s?: string }>> = {
  hi: {
    'q': { display: 'ौ', s: 'औ' }, 'w': { display: 'ै', s: 'ऐ' }, 'e': { display: 'ा', s: 'आ' },
    'r': { display: 'ी', s: 'ई' }, 't': { display: 'ू', s: 'ऊ' }, 'y': { display: 'ब', s: 'भ' },
    'u': { display: 'ह', s: 'ङ' }, 'i': { display: 'ग', s: 'घ' }, 'o': { display: 'द', s: 'ध' },
    'p': { display: 'ज', s: 'झ' }, '[': { display: 'ड', s: 'ढ' }, ']': { display: '़', s: 'ञ' },
    'a': { display: 'ो', s: 'ओ' }, 's': { display: 'े', s: 'ए' }, 'd': { display: '्', s: 'अ' },
    'f': { display: 'ि', s: 'इ' }, 'g': { display: 'ु', s: 'उ' }, 'h': { display: 'प', s: 'फ' },
    'j': { display: 'र', s: 'ऱ' }, 'k': { display: 'क', s: 'ख' }, 'l': { display: 'त', s: 'थ' },
    ';': { display: 'च', s: 'छ' }, "'": { display: 'ट', s: 'ठ' },
    'z': { display: 'ं', s: 'ँ' }, 'x': { display: 'म', s: 'ण' }, 'c': { display: 'न', s: 'ऩ' },
    'v': { display: 'व', s: 'ऒ' }, 'b': { display: 'ल', s: 'ळ' }, 'n': { display: 'स', s: 'ष' },
    'm': { display: 'य', s: 'श' }, ',': { display: 'श', s: 'ष' }, '.': { display: 'ष', s: '। ' },
    '/': { display: 'ध', s: '?' }, '`': { display: 'ृ', s: 'ऋ' },
    '1': { display: '१', s: '!' }, '2': { display: '२', s: '@' }, '3': { display: '३', s: '#' },
    '4': { display: '४', s: '$' }, '5': { display: '५', s: '%' }, '6': { display: '६', s: '^' },
    '7': { display: '७', s: '&' }, '8': { display: '८', s: '*' }, '9': { display: '९', s: '(' },
    '0': { display: '०', s: ')' }
  },
  ja: {
    'q': { display: 'た', s: 'Q' }, 'w': { display: 'て', s: 'W' }, 'e': { display: 'い', s: 'ぃ' },
    'r': { display: 'す', s: 'R' }, 't': { display: 'か', s: 'T' }, 'y': { display: 'ん', s: 'Y' },
    'u': { display: 'な', s: 'U' }, 'i': { display: 'に', s: 'I' }, 'o': { display: 'ら', s: 'O' },
    'p': { display: 'せ', s: 'P' },
    'a': { display: 'ち', s: 'A' }, 's': { display: 'と', s: 'S' }, 'd': { display: 'し', s: 'D' },
    'f': { display: 'は', s: 'F' }, 'g': { display: 'き', s: 'G' }, 'h': { display: 'く', s: 'H' },
    'j': { display: 'ま', s: 'J' }, 'k': { display: 'の', s: 'K' }, 'l': { display: 'り', s: 'L' },
    ';': { display: 'れ', s: ';' },
    'z': { display: 'つ', s: 'っ' }, 'x': { display: 'さ', s: 'X' }, 'c': { display: 'そ', s: 'C' },
    'v': { display: 'ひ', s: 'V' }, 'b': { display: 'こ', s: 'B' }, 'n': { display: 'み', s: 'N' },
    'm': { display: 'も', s: 'M' }, ',': { display: 'ね', s: '、' }, '.': { display: 'る', s: '。' },
    '/': { display: 'め', s: '・' }
  },
  ru: {
    'q': { display: 'й', s: 'Й' }, 'w': { display: 'ц', s: 'Ц' }, 'e': { display: 'у', s: 'У' },
    'r': { display: 'к', s: 'К' }, 't': { display: 'е', s: 'Е' }, 'y': { display: 'н', s: 'Н' },
    'u': { display: 'г', s: 'Г' }, 'i': { display: 'ш', s: 'Ш' }, 'o': { display: 'щ', s: 'Щ' },
    'p': { display: 'з', s: 'З' }, '[': { display: 'х', s: 'Х' }, ']': { display: 'ъ', s: 'Ъ' },
    'a': { display: 'ф', s: 'Ф' }, 's': { display: 'ы', s: 'Ы' }, 'd': { display: 'в', s: 'В' },
    'f': { display: 'а', s: 'А' }, 'g': { display: 'п', s: 'П' }, 'h': { display: 'р', s: 'Р' },
    'j': { display: 'о', s: 'О' }, 'k': { display: 'л', s: 'Л' }, 'l': { display: 'д', s: 'Д' },
    ';': { display: 'ж', s: 'Ж' }, "'": { display: 'э', s: 'Э' },
    'z': { display: 'я', s: 'Я' }, 'x': { display: 'ч', s: 'Ч' }, 'c': { display: 'с', s: 'С' },
    'v': { display: 'м', s: 'М' }, 'b': { display: 'и', s: 'И' }, 'n': { display: 'т', s: 'Т' },
    'm': { display: 'ь', s: 'Ь' }, ',': { display: 'б', s: 'Б' }, '.': { display: 'ю', s: 'Ю' },
    '`': { display: 'ё', s: 'Ё' }
  },
  ar: {
    'q': { display: 'ض', s: 'Q' }, 'w': { display: 'ص', s: 'W' }, 'e': { display: 'ث', s: 'E' },
    'r': { display: 'ق', s: 'R' }, 't': { display: 'ف', s: 'T' }, 'y': { display: 'غ', s: 'إ' },
    'u': { display: 'ع', s: '`' }, 'i': { display: 'ه', s: '÷' }, 'o': { display: 'خ', s: '×' },
    'p': { display: 'ح', s: '؛' }, '[': { display: 'ج', s: '<' }, ']': { display: 'د', s: '>' },
    'a': { display: 'ش', s: 'A' }, 's': { display: 'س', s: 'S' }, 'd': { display: 'ي', s: 'D' },
    'f': { display: 'ب', s: 'F' }, 'g': { display: 'ل', s: 'G' }, 'h': { display: 'ا', s: 'أ' },
    'j': { display: 'ت', s: 'ـ' }, 'k': { display: 'ن', s: '،' }, 'l': { display: 'م', s: '/' },
    ';': { display: 'ك', s: ':' }, "'": { display: 'ط', s: '"' },
    'z': { display: 'ئ', s: '~' }, 'x': { display: 'ء', s: 'X' }, 'c': { display: 'ؤ', s: 'C' },
    'v': { display: 'ر', s: 'V' }, 'b': { display: 'لا', s: 'لآ' }, 'n': { display: 'ى', s: 'آ' },
    'm': { display: 'ة', s: 'M' }, ',': { display: 'و', s: ',' }, '.': { display: 'ز', s: '.' },
    '/': { display: 'ظ', s: '?' }, '`': { display: 'ذ', s: 'ّ' }
  },
  ko: {
    'q': { display: 'ㅂ', s: 'ㅃ' }, 'w': { display: 'ㅈ', s: 'ㅉ' }, 'e': { display: 'ㄷ', s: 'ㄸ' },
    'r': { display: 'ㄱ', s: 'ㄲ' }, 't': { display: 'ㅅ', s: 'ㅆ' }, 'y': { display: 'ㅛ', s: 'Y' },
    'u': { display: 'ㅕ', s: 'U' }, 'i': { display: 'ㅑ', s: 'I' }, 'o': { display: 'ㅐ', s: 'ㅒ' },
    'p': { display: 'ㅔ', s: 'ㅖ' },
    'a': { display: 'ㅁ', s: 'A' }, 's': { display: 'ㄴ', s: 'S' }, 'd': { display: 'ㅇ', s: 'D' },
    'f': { display: 'ㄹ', s: 'F' }, 'g': { display: 'ㅎ', s: 'G' }, 'h': { display: 'ㅗ', s: 'H' },
    'j': { display: 'ㅓ', s: 'J' }, 'k': { display: 'ㅏ', s: 'K' }, 'l': { display: 'ㅣ', s: 'L' },
    'z': { display: 'ㅋ', s: 'Z' }, 'x': { display: 'ㅌ', s: 'X' }, 'c': { display: 'ㅊ', s: 'C' },
    'v': { display: 'ㅍ', s: 'V' }, 'b': { display: 'ㅠ', s: 'B' }, 'n': { display: 'ㅜ', s: 'N' },
    'm': { display: 'ㅡ', s: 'M' }
  },
  bn: {
    'q': { display: 'ৌ', s: 'ঔ' }, 'w': { display: 'ৈ', s: 'ঐ' }, 'e': { display: 'া', s: 'আ' },
    'r': { display: 'ী', s: 'ঈ' }, 't': { display: 'ূ', s: 'ঊ' }, 'y': { display: 'ব', s: 'ভ' },
    'u': { display: 'হ', s: 'ঙ' }, 'i': { display: 'গ', s: 'ঘ' }, 'o': { display: 'দ', s: 'ধ' },
    'p': { display: 'জ', s: 'ঝ' }, '[': { display: 'ড', s: 'ঢ' }, ']': { display: '়', s: 'ঞ' },
    'a': { display: 'ো', s: 'ও' }, 's': { display: 'ে', s: 'এ' }, 'd': { display: '্', s: 'অ' },
    'f': { display: 'ি', s: 'ই' }, 'g': { display: 'ু', s: 'উ' }, 'h': { display: 'প', s: 'ফ' },
    'j': { display: 'র', s: 'ড়' }, 'k': { display: 'ক', s: 'খ' }, 'l': { display: 'ত', s: 'থ' },
    ';': { display: 'চ', s: 'ছ' }, "'": { display: 'ট', s: 'ঠ' },
    'z': { display: 'ং', s: 'ঁ' }, 'x': { display: 'ম', s: 'ণ' }, 'c': { display: 'ন', s: 'য' },
    'v': { display: 'ভ', s: 'র' }, 'b': { display: 'ল', s: 'ল' }, 'n': { display: 'স', s: 'ষ' },
    'm': { display: 'য', s: 'শ' }, ',': { display: 'শ', s: 'ষ' }, '.': { display: 'ষ', s: '।' },
    '1': { display: '১', s: '!' }, '2': { display: '২', s: '@' }, '3': { display: '৩', s: '#' },
    '4': { display: '৪', s: '$' }, '5': { display: '৫', s: '%' }, '6': { display: '৬', s: '^' },
    '7': { display: '৭', s: '&' }, '8': { display: '৮', s: '*' }, '9': { display: '৯', s: '(' },
    '0': { display: '০', s: ')' }
  },
  de: {
    'y': { display: 'z', s: 'Z' }, 'z': { display: 'y', s: 'Y' },
    '[': { display: 'ü', s: 'Ü' }, ';': { display: 'ö', s: 'Ö' },
    "'": { display: 'ä', s: 'Ä' }, '-': { display: 'ß', s: '?' }
  },
  es: {
    ';': { display: 'ñ', s: 'Ñ' }, "'": { display: '´', s: '¨' }
  },
  fr: {
    'a': { display: 'q', s: 'Q' }, 'q': { display: 'a', s: 'A' },
    'z': { display: 'w', s: 'W' }, 'w': { display: 'z', s: 'Z' },
    'm': { display: ';', s: ':' }, ';': { display: 'm', s: 'M' }
  },
  tr: {
    'p': { display: 'ğ', s: 'Ğ' }, '[': { display: 'ü', s: 'Ü' },
    'l': { display: 'ş', s: 'Ş' }, ';': { display: 'i', s: 'İ' },
    'm': { display: 'ö', s: 'Ö' }, ',': { display: 'ç', s: 'Ç' }
  }
};

// Populate CHAR_MAP with all international characters from KEY_LABEL_OVERRIDES
Object.entries(KEY_LABEL_OVERRIDES).forEach(([_lang, map]) => {
  Object.entries(map).forEach(([asciiKey, def]) => {
    const baseKeyInfo = CHAR_MAP[asciiKey];
    if (baseKeyInfo) {
      if (def.display) {
        CHAR_MAP[def.display] = {
          ...baseKeyInfo,
          baseKey: asciiKey
        };
        CHAR_MAP[def.display.toLowerCase()] = {
          ...baseKeyInfo,
          baseKey: asciiKey
        };
        CHAR_MAP[def.display.toUpperCase()] = {
          ...baseKeyInfo,
          baseKey: asciiKey
        };
      }
      if (def.s) {
        CHAR_MAP[def.s] = {
          ...baseKeyInfo,
          baseKey: asciiKey,
          shiftKey: def.s
        };
        CHAR_MAP[def.s.toLowerCase()] = {
          ...baseKeyInfo,
          baseKey: asciiKey,
          shiftKey: def.s
        };
        CHAR_MAP[def.s.toUpperCase()] = {
          ...baseKeyInfo,
          baseKey: asciiKey,
          shiftKey: def.s
        };
      }
    }
  });
});

// Explicit Diacritics & Accents Mappings for Instant Lookups
const EXTRA_ACCENT_KEY_MAP: Record<string, { baseKey: string; shiftKey?: string }> = {
  // German
  'ä': { baseKey: "'" }, 'Ä': { baseKey: "'", shiftKey: 'Ä' },
  'ö': { baseKey: ';' }, 'Ö': { baseKey: ';', shiftKey: 'Ö' },
  'ü': { baseKey: '[' }, 'Ü': { baseKey: '[', shiftKey: 'Ü' },
  'ß': { baseKey: '-' },
  // Spanish
  'ñ': { baseKey: ';' }, 'Ñ': { baseKey: ';', shiftKey: 'Ñ' },
  'á': { baseKey: 'a' }, 'Á': { baseKey: 'a', shiftKey: 'Á' },
  'é': { baseKey: 'e' }, 'É': { baseKey: 'e', shiftKey: 'É' },
  'í': { baseKey: 'i' }, 'Í': { baseKey: 'i', shiftKey: 'Í' },
  'ó': { baseKey: 'o' }, 'Ó': { baseKey: 'o', shiftKey: 'Ó' },
  'ú': { baseKey: 'u' }, 'Ú': { baseKey: 'u', shiftKey: 'Ú' },
  // French
  'è': { baseKey: 'e' }, 'ê': { baseKey: 'e' }, 'ë': { baseKey: 'e' },
  'à': { baseKey: 'a' }, 'â': { baseKey: 'a' },
  'ù': { baseKey: 'u' }, 'û': { baseKey: 'u' },
  'î': { baseKey: 'i' }, 'ï': { baseKey: 'i' },
  'ô': { baseKey: 'o' },
  'ç': { baseKey: 'c' }, 'Ç': { baseKey: 'c', shiftKey: 'Ç' },
  'œ': { baseKey: 'o' },
  // Portuguese
  'ã': { baseKey: 'a' }, 'õ': { baseKey: 'o' },
  'Ã': { baseKey: 'a', shiftKey: 'Ã' }, 'Õ': { baseKey: 'o', shiftKey: 'Õ' },
  // Turkish
  'ğ': { baseKey: 'p' }, 'Ğ': { baseKey: 'p', shiftKey: 'Ğ' },
  'ı': { baseKey: 'i' }, 'İ': { baseKey: 'i', shiftKey: 'İ' },
  'ş': { baseKey: 'l' }, 'Ş': { baseKey: 'l', shiftKey: 'Ş' },
  // Vietnamese
  'đ': { baseKey: 'd' }, 'Đ': { baseKey: 'd', shiftKey: 'Đ' },
  'ă': { baseKey: 'a' }, 'ơ': { baseKey: 'o' }, 'ư': { baseKey: 'u' },
  'ả': { baseKey: 'a' }, 'ạ': { baseKey: 'a' },
  'ẻ': { baseKey: 'e' }, 'ẹ': { baseKey: 'e' },
  'ỉ': { baseKey: 'i' }, 'ị': { baseKey: 'i' },
  'ỏ': { baseKey: 'o' }, 'ọ': { baseKey: 'o' },
  'ủ': { baseKey: 'u' }, 'ụ': { baseKey: 'u' },
  'ỳ': { baseKey: 'y' }, 'ý': { baseKey: 'y' }, 'ỷ': { baseKey: 'y' }, 'ỹ': { baseKey: 'y' }, 'ỵ': { baseKey: 'y' },
  // Korean Jamo
  'ㄱ': { baseKey: 'r' }, 'ㄲ': { baseKey: 'r', shiftKey: 'ㄲ' }, 'ㄴ': { baseKey: 's' },
  'ㄷ': { baseKey: 'e' }, 'ㄸ': { baseKey: 'e', shiftKey: 'ㄸ' }, 'ㄹ': { baseKey: 'f' },
  'ㅁ': { baseKey: 'a' }, 'ㅂ': { baseKey: 'q' }, 'ㅃ': { baseKey: 'q', shiftKey: 'ㅃ' },
  'ㅅ': { baseKey: 't' }, 'ㅆ': { baseKey: 't', shiftKey: 'ㅆ' }, 'ㅇ': { baseKey: 'd' },
  'ㅈ': { baseKey: 'w' }, 'ㅉ': { baseKey: 'w', shiftKey: 'ㅉ' }, 'ㅊ': { baseKey: 'c' },
  'ㅋ': { baseKey: 'z' }, 'ㅌ': { baseKey: 'x' }, 'ㅍ': { baseKey: 'v' }, 'ㅎ': { baseKey: 'g' },
  'ㅏ': { baseKey: 'k' }, 'ㅐ': { baseKey: 'o' }, 'ㅑ': { baseKey: 'i' }, 'ㅒ': { baseKey: 'o', shiftKey: 'ㅒ' },
  'ㅓ': { baseKey: 'j' }, 'ㅔ': { baseKey: 'p' }, 'ㅕ': { baseKey: 'u' }, 'ㅖ': { baseKey: 'p', shiftKey: 'ㅖ' },
  'ㅗ': { baseKey: 'h' }, 'ㅛ': { baseKey: 'y' }, 'ㅜ': { baseKey: 'n' }, 'ㅠ': { baseKey: 'b' },
  'ㅡ': { baseKey: 'm' }, 'ㅣ': { baseKey: 'l' },
  // Japanese Dakuten & Small Kana
  'が': { baseKey: 't' }, 'ぎ': { baseKey: 'g' }, 'ぐ': { baseKey: 'h' }, 'げ': { baseKey: 'p' }, 'ご': { baseKey: 'b' },
  'ざ': { baseKey: 'x' }, 'じ': { baseKey: 'd' }, 'ず': { baseKey: 'r' }, 'ぜ': { baseKey: 'p' }, 'ぞ': { baseKey: 'c' },
  'だ': { baseKey: 'q' }, 'ぢ': { baseKey: 'a' }, 'づ': { baseKey: 'z' }, 'で': { baseKey: 'w' }, 'ど': { baseKey: 's' },
  'ば': { baseKey: 'f' }, 'び': { baseKey: 'v' }, 'ぶ': { baseKey: '2' }, 'べ': { baseKey: '^' }, 'ぼ': { baseKey: '-' },
  'ぱ': { baseKey: 'f' }, 'ぴ': { baseKey: 'v' }, 'ぷ': { baseKey: '2' }, 'ぺ': { baseKey: '^' }, 'ぽ': { baseKey: '-' },
  'っ': { baseKey: 'z', shiftKey: 'っ' }, 'ゃ': { baseKey: '7', shiftKey: 'ゃ' },
  'ゅ': { baseKey: '8', shiftKey: 'ゅ' }, 'ょ': { baseKey: '9', shiftKey: 'ょ' },
  'ぁ': { baseKey: '3', shiftKey: 'ぁ' }, 'ぃ': { baseKey: 'e', shiftKey: 'ぃ' },
  'ぅ': { baseKey: '4', shiftKey: 'ぅ' }, 'ぇ': { baseKey: '5', shiftKey: 'ぇ' }, 'ぉ': { baseKey: '6', shiftKey: 'ぉ' }
};

Object.entries(EXTRA_ACCENT_KEY_MAP).forEach(([char, def]) => {
  const baseKeyInfo = CHAR_MAP[def.baseKey];
  if (baseKeyInfo) {
    CHAR_MAP[char] = {
      ...baseKeyInfo,
      baseKey: def.baseKey,
      shiftKey: def.shiftKey
    };
  }
});

// Common Chinese Characters to Initial Pinyin Key Mapping
const CHINESE_PINYIN_INITIAL: Record<string, string> = {
  '的': 'd', '一': 'y', '是': 's', '在': 'z', '不': 'b', '了': 'l', '有': 'y', '和': 'h', '人': 'r', '这': 'z',
  '中': 'z', '大': 'd', '为': 'w', '上': 's', '个': 'g', '国': 'g', '我': 'w', '以': 'y', '要': 'y', '他': 't',
  '时': 's', '来': 'l', '用': 'y', '生': 's', '到': 'd', '作': 'z', '地': 'd', '于': 'y', '出': 'c', '就': 'j',
  '分': 'f', '对': 'd', '成': 'c', '会': 'h', '可': 'k', '主': 'z', '发': 'f', '年': 'n', '动': 'd', '同': 't',
  '能': 'n', '下': 'x', '过': 'g', '子': 'z', '说': 's', '产': 'c', '种': 'z', '面': 'm', '而': 'e', '方': 'f',
  '后': 'h', '多': 'd', '定': 'd', '行': 'x', '学': 'x', '法': 'f', '所': 's', '民': 'm', '得': 'd', '经': 'j',
  '三': 's', '之': 'z', '进': 'j', '着': 'z', '等': 'd', '部': 'b', '度': 'd', '家': 'j', '电': 'd', '力': 'l',
  '水': 's', '化': 'h', '高': 'g', '自': 'z', '二': 'e', '理': 'l', '起': 'q', '小': 'x', '物': 'w', '现': 'x',
  '量': 'l', '都': 'd', '两': 'l', '体': 't', '机': 'j', '当': 'd', '使': 's', '点': 'd', '从': 'c', '业': 'y',
  '你': 'n', '好': 'h', '世': 's', '界': 'j', '朋': 'p', '友': 'y', '快': 'k', '乐': 'l', '希': 'x', '望': 'w',
  '梦': 'm', '想': 'x', '光': 'g', '明': 'm', '成': 'c', '功': 'g', '和': 'h', '平': 'p', '天': 't', '月': 'y',
  '日': 'r', '火': 'h', '风': 'f', '爱': 'a', '书': 's', '音': 'y', '乐': 'y', '速': 's', '度': 'd'
};

const HANGUL_CHOSEONG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const HANGUL_JUNGSEONG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];

const FINGER_NAMES: Record<FingerId, string> = {
  lp: 'Left Pinky',
  lr: 'Left Ring',
  lm: 'Left Middle',
  li: 'Left Index',
  ri: 'Right Index',
  rm: 'Right Middle',
  rr: 'Right Ring',
  rp: 'Right Pinky',
  thumb: 'Thumb (Spacebar)'
};

const FINGER_QUADRANTS: Record<FingerId, QuadrantId> = {
  lp: 'pinky',
  lr: 'ring',
  lm: 'middle',
  li: 'index',
  ri: 'index',
  rm: 'middle',
  rr: 'ring',
  rp: 'pinky',
  thumb: 'thumb'
};

/**
 * Returns complete quadrant, finger, hand, and styling data for any character or key across any language
 */
export function getFingerQuadrantData(charOrKey: string): FingerQuadrantInfo {
  if (!charOrKey) {
    return {
      finger: 'li',
      hand: 'Left Hand',
      handId: 'left',
      fingerName: 'Left Index',
      quadrant: 'index',
      quadrantName: QUADRANT_COLORS.index.name,
      color: QUADRANT_COLORS.index.primary,
      bgTint: QUADRANT_COLORS.index.tint,
      borderTint: QUADRANT_COLORS.index.border,
      baseKey: 'f',
      isAnchor: true
    };
  }

  // 1. Direct CHAR_MAP lookup
  let item = CHAR_MAP[charOrKey] || CHAR_MAP[charOrKey.toLowerCase()];

  // 2. Korean Hangul Syllable decomposition
  if (!item && charOrKey.length === 1) {
    const code = charOrKey.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      const diff = code - 0xAC00;
      const choIdx = Math.floor(diff / (21 * 28));
      const jamo = HANGUL_CHOSEONG[choIdx];
      item = CHAR_MAP[jamo];
    }
  }

  // 3. Chinese Hanzi initial Pinyin lookup
  if (!item && CHINESE_PINYIN_INITIAL[charOrKey]) {
    const pinyinInitial = CHINESE_PINYIN_INITIAL[charOrKey];
    item = CHAR_MAP[pinyinInitial];
  }

  // 4. Fallback to spacebar or default anchor
  if (!item) {
    item = CHAR_MAP[' '];
  }

  const quadId = FINGER_QUADRANTS[item.finger] || 'index';
  const quadDef = QUADRANT_COLORS[quadId] || QUADRANT_COLORS.index;

  const handName: 'Left Hand' | 'Right Hand' | 'Both Hands' =
    item.hand === 'left' ? 'Left Hand' : item.hand === 'right' ? 'Right Hand' : 'Both Hands';

  return {
    finger: item.finger,
    hand: handName,
    handId: item.hand,
    fingerName: FINGER_NAMES[item.finger] || 'Index Finger',
    quadrant: quadId,
    quadrantName: quadDef.name,
    color: quadDef.primary,
    bgTint: quadDef.tint,
    borderTint: quadDef.border,
    baseKey: item.baseKey,
    shiftKey: item.shiftKey,
    isAnchor: item.isAnchor
  };
}

export function getPhysicalKeyboardLayout(langCode = 'en'): PhysicalKeyDef[][] {
  const code = (langCode || 'en').toLowerCase().trim();
  const overrides = KEY_LABEL_OVERRIDES[code] || KEY_LABEL_OVERRIDES[code.slice(0, 2)];

  if (!overrides) {
    return PHYSICAL_KEYBOARD_LAYOUT;
  }

  return PHYSICAL_KEYBOARD_LAYOUT.map(row =>
    row.map(key => {
      const ovr = overrides[key.k.toLowerCase()];
      if (ovr) {
        return {
          ...key,
          display: ovr.display,
          s: ovr.s || key.s
        };
      }
      return key;
    })
  );
}
