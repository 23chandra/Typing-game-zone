// Keyboard Layout Matrix Definitions for International Typing

export interface KeyDefinition {
  primary: string;
  shift?: string;
  finger: 'leftPinky' | 'leftRing' | 'leftMiddle' | 'leftIndex' | 'rightIndex' | 'rightMiddle' | 'rightRing' | 'rightPinky' | 'thumb';
  width?: number; // relative width (1 = 1.0u)
  isSpecial?: boolean;
}

export interface KeyboardLayoutDef {
  id: string;
  name: string;
  language: string;
  isRTL?: boolean;
  rows: KeyDefinition[][];
}

export const KEYBOARD_LAYOUTS: Record<string, KeyboardLayoutDef> = {
  qwerty: {
    id: 'qwerty',
    name: 'QWERTY (US/Global)',
    language: 'English, Spanish, etc.',
    rows: [
      [
        { primary: '`', shift: '~', finger: 'leftPinky' },
        { primary: '1', shift: '!', finger: 'leftPinky' },
        { primary: '2', shift: '@', finger: 'leftRing' },
        { primary: '3', shift: '#', finger: 'leftMiddle' },
        { primary: '4', shift: '$', finger: 'leftIndex' },
        { primary: '5', shift: '%', finger: 'leftIndex' },
        { primary: '6', shift: '^', finger: 'rightIndex' },
        { primary: '7', shift: '&', finger: 'rightIndex' },
        { primary: '8', shift: '*', finger: 'rightMiddle' },
        { primary: '9', shift: '(', finger: 'rightRing' },
        { primary: '0', shift: ')', finger: 'rightPinky' },
        { primary: '-', shift: '_', finger: 'rightPinky' },
        { primary: '=', shift: '+', finger: 'rightPinky' }
      ],
      [
        { primary: 'q', shift: 'Q', finger: 'leftPinky' },
        { primary: 'w', shift: 'W', finger: 'leftRing' },
        { primary: 'e', shift: 'E', finger: 'leftMiddle' },
        { primary: 'r', shift: 'R', finger: 'leftIndex' },
        { primary: 't', shift: 'T', finger: 'leftIndex' },
        { primary: 'y', shift: 'Y', finger: 'rightIndex' },
        { primary: 'u', shift: 'U', finger: 'rightIndex' },
        { primary: 'i', shift: 'I', finger: 'rightMiddle' },
        { primary: 'o', shift: 'O', finger: 'rightRing' },
        { primary: 'p', shift: 'P', finger: 'rightPinky' },
        { primary: '[', shift: '{', finger: 'rightPinky' },
        { primary: ']', shift: '}', finger: 'rightPinky' }
      ],
      [
        { primary: 'a', shift: 'A', finger: 'leftPinky' },
        { primary: 's', shift: 'S', finger: 'leftRing' },
        { primary: 'd', shift: 'D', finger: 'leftMiddle' },
        { primary: 'f', shift: 'F', finger: 'leftIndex' },
        { primary: 'g', shift: 'G', finger: 'leftIndex' },
        { primary: 'h', shift: 'H', finger: 'rightIndex' },
        { primary: 'j', shift: 'J', finger: 'rightIndex' },
        { primary: 'k', shift: 'K', finger: 'rightMiddle' },
        { primary: 'l', shift: 'L', finger: 'rightRing' },
        { primary: ';', shift: ':', finger: 'rightPinky' },
        { primary: "'", shift: '"', finger: 'rightPinky' }
      ],
      [
        { primary: 'z', shift: 'Z', finger: 'leftPinky' },
        { primary: 'x', shift: 'X', finger: 'leftRing' },
        { primary: 'c', shift: 'C', finger: 'leftMiddle' },
        { primary: 'v', shift: 'V', finger: 'leftIndex' },
        { primary: 'b', shift: 'B', finger: 'leftIndex' },
        { primary: 'n', shift: 'N', finger: 'rightIndex' },
        { primary: 'm', shift: 'M', finger: 'rightIndex' },
        { primary: ',', shift: '<', finger: 'rightMiddle' },
        { primary: '.', shift: '>', finger: 'rightRing' },
        { primary: '/', shift: '?', finger: 'rightPinky' }
      ]
    ]
  },

  azerty: {
    id: 'azerty',
    name: 'AZERTY (Français)',
    language: 'Français',
    rows: [
      [
        { primary: '&', shift: '1', finger: 'leftPinky' },
        { primary: 'é', shift: '2', finger: 'leftPinky' },
        { primary: '"', shift: '3', finger: 'leftRing' },
        { primary: "'", shift: '4', finger: 'leftMiddle' },
        { primary: '(', shift: '5', finger: 'leftIndex' },
        { primary: '-', shift: '6', finger: 'leftIndex' },
        { primary: 'è', shift: '7', finger: 'rightIndex' },
        { primary: '_', shift: '8', finger: 'rightIndex' },
        { primary: 'ç', shift: '9', finger: 'rightMiddle' },
        { primary: 'à', shift: '0', finger: 'rightRing' },
        { primary: ')', shift: '°', finger: 'rightPinky' },
        { primary: '=', shift: '+', finger: 'rightPinky' }
      ],
      [
        { primary: 'a', shift: 'A', finger: 'leftPinky' },
        { primary: 'z', shift: 'Z', finger: 'leftRing' },
        { primary: 'e', shift: 'E', finger: 'leftMiddle' },
        { primary: 'r', shift: 'R', finger: 'leftIndex' },
        { primary: 't', shift: 'T', finger: 'leftIndex' },
        { primary: 'y', shift: 'Y', finger: 'rightIndex' },
        { primary: 'u', shift: 'U', finger: 'rightIndex' },
        { primary: 'i', shift: 'I', finger: 'rightMiddle' },
        { primary: 'o', shift: 'O', finger: 'rightRing' },
        { primary: 'p', shift: 'P', finger: 'rightPinky' },
        { primary: '^', shift: '¨', finger: 'rightPinky' },
        { primary: '$', shift: '£', finger: 'rightPinky' }
      ],
      [
        { primary: 'q', shift: 'Q', finger: 'leftPinky' },
        { primary: 's', shift: 'S', finger: 'leftRing' },
        { primary: 'd', shift: 'D', finger: 'leftMiddle' },
        { primary: 'f', shift: 'F', finger: 'leftIndex' },
        { primary: 'g', shift: 'G', finger: 'leftIndex' },
        { primary: 'h', shift: 'H', finger: 'rightIndex' },
        { primary: 'j', shift: 'J', finger: 'rightIndex' },
        { primary: 'k', shift: 'K', finger: 'rightMiddle' },
        { primary: 'l', shift: 'L', finger: 'rightRing' },
        { primary: 'm', shift: 'M', finger: 'rightPinky' },
        { primary: 'ù', shift: '%', finger: 'rightPinky' }
      ],
      [
        { primary: 'w', shift: 'W', finger: 'leftPinky' },
        { primary: 'x', shift: 'X', finger: 'leftRing' },
        { primary: 'c', shift: 'C', finger: 'leftMiddle' },
        { primary: 'v', shift: 'V', finger: 'leftIndex' },
        { primary: 'b', shift: 'B', finger: 'leftIndex' },
        { primary: 'n', shift: 'N', finger: 'rightIndex' },
        { primary: ',', shift: '?', finger: 'rightMiddle' },
        { primary: ';', shift: '.', finger: 'rightRing' },
        { primary: ':', shift: '/', finger: 'rightPinky' },
        { primary: '!', shift: '§', finger: 'rightPinky' }
      ]
    ]
  },

  qwertz: {
    id: 'qwertz',
    name: 'QWERTZ (Deutsch)',
    language: 'Deutsch',
    rows: [
      [
        { primary: '^', shift: '°', finger: 'leftPinky' },
        { primary: '1', shift: '!', finger: 'leftPinky' },
        { primary: '2', shift: '"', finger: 'leftRing' },
        { primary: '3', shift: '§', finger: 'leftMiddle' },
        { primary: '4', shift: '$', finger: 'leftIndex' },
        { primary: '5', shift: '%', finger: 'leftIndex' },
        { primary: '6', shift: '&', finger: 'rightIndex' },
        { primary: '7', shift: '/', finger: 'rightIndex' },
        { primary: '8', shift: '(', finger: 'rightMiddle' },
        { primary: '9', shift: ')', finger: 'rightRing' },
        { primary: '0', shift: '=', finger: 'rightPinky' },
        { primary: 'ß', shift: '?', finger: 'rightPinky' }
      ],
      [
        { primary: 'q', shift: 'Q', finger: 'leftPinky' },
        { primary: 'w', shift: 'W', finger: 'leftRing' },
        { primary: 'e', shift: 'E', finger: 'leftMiddle' },
        { primary: 'r', shift: 'R', finger: 'leftIndex' },
        { primary: 't', shift: 'T', finger: 'leftIndex' },
        { primary: 'z', shift: 'Z', finger: 'rightIndex' },
        { primary: 'u', shift: 'U', finger: 'rightIndex' },
        { primary: 'i', shift: 'I', finger: 'rightMiddle' },
        { primary: 'o', shift: 'O', finger: 'rightRing' },
        { primary: 'p', shift: 'P', finger: 'rightPinky' },
        { primary: 'ü', shift: 'Ü', finger: 'rightPinky' },
        { primary: '+', shift: '*', finger: 'rightPinky' }
      ],
      [
        { primary: 'a', shift: 'A', finger: 'leftPinky' },
        { primary: 's', shift: 'S', finger: 'leftRing' },
        { primary: 'd', shift: 'D', finger: 'leftMiddle' },
        { primary: 'f', shift: 'F', finger: 'leftIndex' },
        { primary: 'g', shift: 'G', finger: 'leftIndex' },
        { primary: 'h', shift: 'H', finger: 'rightIndex' },
        { primary: 'j', shift: 'J', finger: 'rightIndex' },
        { primary: 'k', shift: 'K', finger: 'rightMiddle' },
        { primary: 'l', shift: 'L', finger: 'rightRing' },
        { primary: 'ö', shift: 'Ö', finger: 'rightPinky' },
        { primary: 'ä', shift: 'Ä', finger: 'rightPinky' },
        { primary: '#', shift: "'", finger: 'rightPinky' }
      ],
      [
        { primary: 'y', shift: 'Y', finger: 'leftPinky' },
        { primary: 'x', shift: 'X', finger: 'leftRing' },
        { primary: 'c', shift: 'C', finger: 'leftMiddle' },
        { primary: 'v', shift: 'V', finger: 'leftIndex' },
        { primary: 'b', shift: 'B', finger: 'leftIndex' },
        { primary: 'n', shift: 'N', finger: 'rightIndex' },
        { primary: 'm', shift: 'M', finger: 'rightIndex' },
        { primary: ',', shift: ';', finger: 'rightMiddle' },
        { primary: '.', shift: ':', finger: 'rightRing' },
        { primary: '-', shift: '_', finger: 'rightPinky' }
      ]
    ]
  },

  cyrillic: {
    id: 'cyrillic',
    name: 'ЙЦУКЕН (Русский)',
    language: 'Русский',
    rows: [
      [
        { primary: 'ё', shift: 'Ё', finger: 'leftPinky' },
        { primary: '1', shift: '!', finger: 'leftPinky' },
        { primary: '2', shift: '"', finger: 'leftRing' },
        { primary: '3', shift: '№', finger: 'leftMiddle' },
        { primary: '4', shift: ';', finger: 'leftIndex' },
        { primary: '5', shift: '%', finger: 'leftIndex' },
        { primary: '6', shift: ':', finger: 'rightIndex' },
        { primary: '7', shift: '?', finger: 'rightIndex' },
        { primary: '8', shift: '*', finger: 'rightMiddle' },
        { primary: '9', shift: '(', finger: 'rightRing' },
        { primary: '0', shift: ')', finger: 'rightPinky' },
        { primary: '-', shift: '_', finger: 'rightPinky' },
        { primary: '=', shift: '+', finger: 'rightPinky' }
      ],
      [
        { primary: 'й', shift: 'Й', finger: 'leftPinky' },
        { primary: 'ц', shift: 'Ц', finger: 'leftRing' },
        { primary: 'у', shift: 'У', finger: 'leftMiddle' },
        { primary: 'к', shift: 'К', finger: 'leftIndex' },
        { primary: 'е', shift: 'Е', finger: 'leftIndex' },
        { primary: 'н', shift: 'Н', finger: 'rightIndex' },
        { primary: 'г', shift: 'Г', finger: 'rightIndex' },
        { primary: 'ш', shift: 'Ш', finger: 'rightMiddle' },
        { primary: 'щ', shift: 'Щ', finger: 'rightRing' },
        { primary: 'з', shift: 'З', finger: 'rightPinky' },
        { primary: 'х', shift: 'Х', finger: 'rightPinky' },
        { primary: 'ъ', shift: 'Ъ', finger: 'rightPinky' }
      ],
      [
        { primary: 'ф', shift: 'Ф', finger: 'leftPinky' },
        { primary: 'ы', shift: 'Ы', finger: 'leftRing' },
        { primary: 'в', shift: 'В', finger: 'leftMiddle' },
        { primary: 'а', shift: 'А', finger: 'leftIndex' },
        { primary: 'п', shift: 'П', finger: 'leftIndex' },
        { primary: 'р', shift: 'Р', finger: 'rightIndex' },
        { primary: 'о', shift: 'О', finger: 'rightIndex' },
        { primary: 'л', shift: 'Л', finger: 'rightMiddle' },
        { primary: 'д', shift: 'Д', finger: 'rightRing' },
        { primary: 'ж', shift: 'Ж', finger: 'rightPinky' },
        { primary: 'э', shift: 'Э', finger: 'rightPinky' }
      ],
      [
        { primary: 'я', shift: 'Я', finger: 'leftPinky' },
        { primary: 'ч', shift: 'Ч', finger: 'leftRing' },
        { primary: 'с', shift: 'С', finger: 'leftMiddle' },
        { primary: 'м', shift: 'М', finger: 'leftIndex' },
        { primary: 'и', shift: 'И', finger: 'leftIndex' },
        { primary: 'т', shift: 'Т', finger: 'rightIndex' },
        { primary: 'ь', shift: 'Ь', finger: 'rightIndex' },
        { primary: 'б', shift: 'Б', finger: 'rightMiddle' },
        { primary: 'ю', shift: 'Ю', finger: 'rightRing' },
        { primary: '.', shift: ',', finger: 'rightPinky' }
      ]
    ]
  },

  arabic: {
    id: 'arabic',
    name: 'العربية 101',
    language: 'العربية',
    isRTL: true,
    rows: [
      [
        { primary: 'ذ', shift: 'ّ', finger: 'leftPinky' },
        { primary: '1', shift: '!', finger: 'leftPinky' },
        { primary: '2', shift: '@', finger: 'leftRing' },
        { primary: '3', shift: '#', finger: 'leftMiddle' },
        { primary: '4', shift: '$', finger: 'leftIndex' },
        { primary: '5', shift: '%', finger: 'leftIndex' },
        { primary: '6', shift: '^', finger: 'rightIndex' },
        { primary: '7', shift: '&', finger: 'rightIndex' },
        { primary: '8', shift: '*', finger: 'rightMiddle' },
        { primary: '9', shift: ')', finger: 'rightRing' },
        { primary: '0', shift: '(', finger: 'rightPinky' },
        { primary: '-', shift: '_', finger: 'rightPinky' },
        { primary: '=', shift: '+', finger: 'rightPinky' }
      ],
      [
        { primary: 'ض', shift: 'َ', finger: 'leftPinky' },
        { primary: 'ص', shift: 'ً', finger: 'leftRing' },
        { primary: 'ث', shift: 'ُ', finger: 'leftMiddle' },
        { primary: 'ق', shift: 'ٌ', finger: 'leftIndex' },
        { primary: 'ف', shift: 'لإ', finger: 'leftIndex' },
        { primary: 'غ', shift: 'إ', finger: 'rightIndex' },
        { primary: 'ع', shift: '`', finger: 'rightIndex' },
        { primary: 'ه', shift: '÷', finger: 'rightMiddle' },
        { primary: 'خ', shift: '×', finger: 'rightRing' },
        { primary: 'ح', shift: '؛', finger: 'rightPinky' },
        { primary: 'ج', shift: '<', finger: 'rightPinky' },
        { primary: 'د', shift: '>', finger: 'rightPinky' }
      ],
      [
        { primary: 'ش', shift: 'ِ', finger: 'leftPinky' },
        { primary: 'س', shift: 'ٍ', finger: 'leftRing' },
        { primary: 'ي', shift: ']', finger: 'leftMiddle' },
        { primary: 'ب', shift: '[', finger: 'leftIndex' },
        { primary: 'ل', shift: 'لأ', finger: 'leftIndex' },
        { primary: 'ا', shift: 'أ', finger: 'rightIndex' },
        { primary: 'ت', shift: 'ـ', finger: 'rightIndex' },
        { primary: 'ن', shift: '،', finger: 'rightMiddle' },
        { primary: 'م', shift: '/', finger: 'rightRing' },
        { primary: 'ك', shift: ':', finger: 'rightPinky' },
        { primary: 'ط', shift: '"', finger: 'rightPinky' }
      ],
      [
        { primary: 'ئ', shift: '~', finger: 'leftPinky' },
        { primary: 'ء', shift: 'ْ', finger: 'leftRing' },
        { primary: 'ؤ', shift: '}', finger: 'leftMiddle' },
        { primary: 'ر', shift: '{', finger: 'leftIndex' },
        { primary: 'لا', shift: 'لآ', finger: 'leftIndex' },
        { primary: 'ى', shift: 'آ', finger: 'rightIndex' },
        { primary: 'ة', shift: "'", finger: 'rightIndex' },
        { primary: 'و', shift: ',', finger: 'rightMiddle' },
        { primary: 'ز', shift: '.', finger: 'rightRing' },
        { primary: 'ظ', shift: '؟', finger: 'rightPinky' }
      ]
    ]
  }
};

export function getLayoutForLocale(locale: string): KeyboardLayoutDef {
  const code = (locale || '').toLowerCase().split('-')[0];
  switch (code) {
    case 'fr': return KEYBOARD_LAYOUTS.azerty;
    case 'de': return KEYBOARD_LAYOUTS.qwertz;
    case 'ru': return KEYBOARD_LAYOUTS.cyrillic;
    case 'ar': return KEYBOARD_LAYOUTS.arabic;
    default: return KEYBOARD_LAYOUTS.qwerty;
  }
}
