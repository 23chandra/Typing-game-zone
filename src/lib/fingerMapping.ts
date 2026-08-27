// Standard Touch Typing Keyboard Quadrant & Finger Mapping Engine
// 10-Finger Touch Typing Standard (ANSI QWERTY)

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
  isAnchor?: boolean; // F and J
}

// Unified Quadrant Design System Colors
export const QUADRANT_COLORS = {
  pinky: {
    primary: '#f43f5e', // Rose 500
    tint: 'rgba(244, 63, 94, 0.14)',
    border: 'rgba(244, 63, 94, 0.35)',
    name: 'Pinky Quadrant'
  },
  ring: {
    primary: '#a855f7', // Purple 500
    tint: 'rgba(168, 85, 247, 0.14)',
    border: 'rgba(168, 85, 247, 0.35)',
    name: 'Ring Quadrant'
  },
  middle: {
    primary: '#3b82f6', // Blue 500
    tint: 'rgba(59, 130, 246, 0.14)',
    border: 'rgba(59, 130, 246, 0.35)',
    name: 'Middle Quadrant'
  },
  index: {
    primary: '#10b981', // Emerald 500
    tint: 'rgba(16, 185, 129, 0.14)',
    border: 'rgba(16, 185, 129, 0.35)',
    name: 'Index Quadrant'
  },
  thumb: {
    primary: '#eab308', // Amber 500
    tint: 'rgba(234, 179, 8, 0.14)',
    border: 'rgba(234, 179, 8, 0.35)',
    name: 'Thumb Zone'
  }
} as const;

export interface PhysicalKeyDef {
  k: string;       // base key identifier (e.g. '1', 'q', 'a', 'space', 'shift_l')
  display: string; // letter on keycap (e.g. 'Q', 'A', 'SPACEBAR')
  s?: string;      // shifted symbol (e.g. '!', '@', '#')
  w?: number;      // key width multiplier
  finger: FingerId;
  hand: HandId;
  isAnchor?: boolean;
}

// Complete Standard 5-Row ANSI QWERTY Matrix
export const PHYSICAL_KEYBOARD_LAYOUT: PhysicalKeyDef[][] = [
  // Row 1: Number Row
  [
    { k: '`', display: '`', s: '~', finger: 'lp', hand: 'left' },
    { k: '1', display: '1', s: '!', finger: 'lp', hand: 'left' },
    { k: '2', display: '2', s: '@', finger: 'lr', hand: 'left' },
    { k: '3', display: '3', s: '#', finger: 'lm', hand: 'left' },
    { k: '4', display: '4', s: '$', finger: 'li', hand: 'left' },
    { k: '5', display: '5', s: '%', finger: 'li', hand: 'left' },
    { k: '6', display: '6', s: '^', finger: 'ri', hand: 'right' },
    { k: '7', display: '7', s: '&', finger: 'ri', hand: 'right' },
    { k: '8', display: '8', s: '*', finger: 'rm', hand: 'right' },
    { k: '9', display: '9', s: '(', finger: 'rr', hand: 'right' },
    { k: '0', display: '0', s: ')', finger: 'rp', hand: 'right' },
    { k: '-', display: '-', s: '_', finger: 'rp', hand: 'right' },
    { k: '=', display: '=', s: '+', finger: 'rp', hand: 'right' },
    { k: 'backspace', display: 'Backspace', w: 1.5, finger: 'rp', hand: 'right' }
  ],
  // Row 2: Top / Upper Row
  [
    { k: 'tab', display: 'Tab', w: 1.3, finger: 'lp', hand: 'left' },
    { k: 'q', display: 'Q', finger: 'lp', hand: 'left' },
    { k: 'w', display: 'W', finger: 'lr', hand: 'left' },
    { k: 'e', display: 'E', finger: 'lm', hand: 'left' },
    { k: 'r', display: 'R', finger: 'li', hand: 'left' },
    { k: 't', display: 'T', finger: 'li', hand: 'left' },
    { k: 'y', display: 'Y', finger: 'ri', hand: 'right' },
    { k: 'u', display: 'U', finger: 'ri', hand: 'right' },
    { k: 'i', display: 'I', finger: 'rm', hand: 'right' },
    { k: 'o', display: 'O', finger: 'rr', hand: 'right' },
    { k: 'p', display: 'P', finger: 'rp', hand: 'right' },
    { k: '[', display: '[', s: '{', finger: 'rp', hand: 'right' },
    { k: ']', display: ']', s: '}', finger: 'rp', hand: 'right' },
    { k: '\\', display: '\\', s: '|', w: 1.1, finger: 'rp', hand: 'right' }
  ],
  // Row 3: Home Row (Anchors F and J)
  [
    { k: 'caps', display: 'Caps', w: 1.5, finger: 'lp', hand: 'left' },
    { k: 'a', display: 'A', finger: 'lp', hand: 'left' },
    { k: 's', display: 'S', finger: 'lr', hand: 'left' },
    { k: 'd', display: 'D', finger: 'lm', hand: 'left' },
    { k: 'f', display: 'F', finger: 'li', hand: 'left', isAnchor: true },
    { k: 'g', display: 'G', finger: 'li', hand: 'left' },
    { k: 'h', display: 'H', finger: 'ri', hand: 'right' },
    { k: 'j', display: 'J', finger: 'ri', hand: 'right', isAnchor: true },
    { k: 'k', display: 'K', finger: 'rm', hand: 'right' },
    { k: 'l', display: 'L', finger: 'rr', hand: 'right' },
    { k: ';', display: ';', s: ':', finger: 'rp', hand: 'right' },
    { k: "'", display: "'", s: '"', finger: 'rp', hand: 'right' },
    { k: 'enter', display: 'Enter', w: 1.6, finger: 'rp', hand: 'right' }
  ],
  // Row 4: Bottom Row
  [
    { k: 'shift_l', display: 'Shift', w: 1.8, finger: 'lp', hand: 'left' },
    { k: 'z', display: 'Z', finger: 'lp', hand: 'left' },
    { k: 'x', display: 'X', finger: 'lr', hand: 'left' },
    { k: 'c', display: 'C', finger: 'lm', hand: 'left' },
    { k: 'v', display: 'V', finger: 'li', hand: 'left' },
    { k: 'b', display: 'B', finger: 'li', hand: 'left' },
    { k: 'n', display: 'N', finger: 'ri', hand: 'right' },
    { k: 'm', display: 'M', finger: 'ri', hand: 'right' },
    { k: ',', display: ',', s: '<', finger: 'rm', hand: 'right' },
    { k: '.', display: '.', s: '>', finger: 'rr', hand: 'right' },
    { k: '/', display: '/', s: '?', finger: 'rp', hand: 'right' },
    { k: 'shift_r', display: 'Shift', w: 1.8, finger: 'rp', hand: 'right' }
  ],
  // Row 5: Spacebar & Modifiers
  [
    { k: 'ctrl_l', display: 'Ctrl', w: 1.2, finger: 'lp', hand: 'left' },
    { k: 'alt_l', display: 'Alt', w: 1.2, finger: 'thumb', hand: 'left' },
    { k: ' ', display: 'SPACEBAR', w: 6.2, finger: 'thumb', hand: 'both' },
    { k: 'alt_r', display: 'Alt', w: 1.2, finger: 'thumb', hand: 'right' },
    { k: 'ctrl_r', display: 'Ctrl', w: 1.2, finger: 'rp', hand: 'right' }
  ]
];

// Master Character Mapping Table (100% Comprehensive Touch-Typing Standards)
const CHAR_MAP: Record<string, { finger: FingerId; hand: HandId; baseKey: string; shiftKey?: string; isAnchor?: boolean }> = {
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
  '}': { finger: 'rp', hand: 'right', baseKey: ']', shiftKey: '}' },
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
  'shift_r': { finger: 'rp', hand: 'right', baseKey: 'shift_r' },
  'ctrl_r': { finger: 'rp', hand: 'right', baseKey: 'ctrl_r' },

  // --- THUMBS (Spacebar) ---
  ' ': { finger: 'thumb', hand: 'both', baseKey: ' ' },
  'alt_l': { finger: 'thumb', hand: 'left', baseKey: 'alt_l' },
  'alt_r': { finger: 'thumb', hand: 'right', baseKey: 'alt_r' }
};

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
 * Returns complete quadrant, finger, hand, and styling data for any character or key
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

  const exact = CHAR_MAP[charOrKey];
  const item = exact || CHAR_MAP[charOrKey.toLowerCase()] || CHAR_MAP[' '];
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
