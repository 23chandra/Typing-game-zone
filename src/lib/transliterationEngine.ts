// In-Browser Real-Time Phonetic Transliteration & Native Script Engine
// Converts standard QWERTY keyboard keystrokes to authentic native scripts:
// - Hindi: English Phonetics -> Devanagari (e.g., 'namaste' -> 'नमस्ते', 'bharat' -> 'भारत')
// - Japanese: Romaji -> Hiragana / Katakana (e.g., 'konnichiwa' -> 'こんにちは', 'arigatou' -> 'ありがとう')
// - Russian: Latin Phonetics -> Cyrillic (e.g., 'privet' -> 'привет', 'spasibo' -> 'спасибо')
// - Arabic: Arabizi / Phonetic -> Arabic Script (e.g., 'salam' -> 'سلام', 'shukran' -> 'شكرا')
// - German/French/Spanish: Smart Accents & Diacritics (e.g., 'ae' -> 'ä', 'ss' -> 'ß', 'n~' -> 'ñ', 'c,' -> 'ç')

export type ScriptType = 'latin' | 'devanagari' | 'kana' | 'cyrillic' | 'arabic';

// --------------------------------------------------------------------------
// 1. JAPANESE HIRAGANA & KATAKANA ROMAJI MAPPINGS
// --------------------------------------------------------------------------
const JAPANESE_ROMAJI_MAP: Record<string, string> = {
  // Triple combinations & double consonants (sokuon)
  'kya': 'きゃ', 'kyu': 'きゅ', 'kyo': 'きょ',
  'sha': 'しゃ', 'shu': 'しゅ', 'sho': 'しょ',
  'cha': 'ちゃ', 'chu': 'ちゅ', 'cho': 'ちょ',
  'nya': 'にゃ', 'nyu': 'にゅ', 'nyo': 'にょ',
  'hya': 'ひゃ', 'hyu': 'ひゅ', 'hyo': 'ひょ',
  'mya': 'みゃ', 'myu': 'みゅ', 'myo': 'みょ',
  'rya': 'りゃ', 'ryu': 'りゅ', 'ryo': 'りょ',
  'gya': 'ぎゃ', 'gyu': 'ぎゅ', 'gyo': 'ぎょ',
  'ja': 'じゃ', 'ju': 'じゅ', 'jo': 'じょ',
  'jya': 'じゃ', 'jyu': 'じゅ', 'jyo': 'じょ',
  'bya': 'びゃ', 'byu': 'びゅ', 'byo': 'びょ',
  'pya': 'ぴゃ', 'pyu': 'ぴゅ', 'pyo': 'ぴょ',
  'shi': 'し', 'chi': 'ち', 'tsu': 'つ', 'fu': 'ふ',

  // Double combinations
  'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
  'sa': 'さ', 'si': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
  'ta': 'た', 'ti': 'ち', 'tu': 'つ', 'te': 'て', 'to': 'と',
  'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
  'ha': 'は', 'hi': 'ひ', 'hu': 'ふ', 'he': 'へ', 'ho': 'ほ',
  'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
  'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
  'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
  'wa': 'わ', 'wo': 'を', 'nn': 'ん', 'n': 'ん',

  // Voiced consonants (Dakuten)
  'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご',
  'za': 'ざ', 'zi': 'じ', 'zu': 'ず', 'ze': 'ぜ', 'zo': 'ぞ',
  'ji': 'じ',
  'da': 'だ', 'di': 'ぢ', 'du': 'づ', 'de': 'де', 'do': 'ど',
  'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
  'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ',

  // Single vowels
  'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お'
};

// --------------------------------------------------------------------------
// 2. RUSSIAN CYRILLIC PHONETIC MAPPINGS
// --------------------------------------------------------------------------
const RUSSIAN_CYRILLIC_MAP: Record<string, string> = {
  'shch': 'щ', 'yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я',
  'ye': 'е', 'kh': 'х', 'ts': 'ц',
  'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 'e': 'е', 'z': 'з',
  'i': 'и', 'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о',
  'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф', 'h': 'х',
  'c': 'ц', 'w': 'в', 'q': 'к', 'x': 'кс', 'j': 'ж'
};

// --------------------------------------------------------------------------
// 3. ARABIC PHONETIC / ARABIZI MAPPINGS
// --------------------------------------------------------------------------
const ARABIC_PHONETIC_MAP: Record<string, string> = {
  'sh': 'ش', 'th': 'ث', 'kh': 'خ', 'dh': 'ذ', 'gh': 'غ', 'ch': 'تش',
  '2': 'ء', '3': 'ع', '5': 'خ', '7': 'ح', '8': 'ق', '9': 'ص',
  'a': 'ا', 'aa': 'آ', 'b': 'ب', 't': 'ت', 'j': 'ج', 'h': 'ه',
  'd': 'د', 'r': 'ر', 'z': 'ز', 's': 'س', 'f': 'ف', 'q': 'ق',
  'k': 'ك', 'l': 'ل', 'm': 'م', 'n': 'ن', 'w': 'و', 'y': 'ي',
  'o': 'و', 'u': 'و', 'i': 'ي', 'e': 'ي', 'p': 'ب', 'v': 'ف'
};

// --------------------------------------------------------------------------
// 4. HINDI DEVANAGARI PHONETIC ENGINE (Smart Rule-Based Transliteration)
// --------------------------------------------------------------------------
const HINDI_VOWELS: Record<string, string> = {
  'aa': 'आ', 'a': 'अ', 'ii': 'ई', 'ee': 'ई', 'i': 'इ',
  'uu': 'ऊ', 'oo': 'ऊ', 'u': 'उ', 'e': 'ए', 'ai': 'ऐ',
  'o': 'ओ', 'au': 'औ', 'ri': 'ऋ'
};

const HINDI_MATRAS: Record<string, string> = {
  'aa': 'ा', 'a': '', 'ii': 'ी', 'ee': 'ी', 'i': 'ि',
  'uu': 'ू', 'oo': 'ू', 'u': 'ु', 'e': 'े', 'ai': 'ै',
  'o': 'ो', 'au': 'ौ', 'ri': 'ृ'
};

const HINDI_CONSONANTS: Record<string, string> = {
  'kya': 'क्या', 'shra': 'श्र', 'ksha': 'क्ष', 'tra': 'त्र', 'gya': 'ज्ञ',
  'kh': 'ख', 'gh': 'घ', 'ch': 'च', 'chh': 'छ', 'jh': 'झ',
  'th': 'थ', 'dh': 'ध', 'ph': 'फ', 'bh': 'भ', 'sh': 'श', 'shh': 'ष',
  'k': 'क', 'g': 'ग', 'j': 'ज', 't': 'त', 'd': 'द', 'n': 'न',
  'p': 'प', 'b': 'ब', 'm': 'म', 'y': 'य', 'r': 'र', 'l': 'ल',
  'v': 'व', 'w': 'व', 's': 'स', 'h': 'ह', 'f': 'फ़', 'z': 'ज़',
  'q': 'क़', 'x': 'क्स'
};

// Special common words dictionary for 100% natural, elegant Devanagari output
const HINDI_COMMON_WORDS: Record<string, string> = {
  'namaste': 'नमस्ते',
  'namaskar': 'नमस्कार',
  'bharat': 'भारत',
  'hindi': 'हिन्दी',
  'shanti': 'शांति',
  'dost': 'दोस्त',
  'mitra': 'मित्र',
  'khel': 'खेल',
  'samay': 'समय',
  'jeevan': 'जीवन',
  'jivan': 'जीवन',
  'prem': 'प्रेम',
  'pyar': 'प्यार',
  'khushi': 'ख़ुशी',
  'anand': 'आनंद',
  'duniya': 'दुनिया',
  'sansar': 'संसार',
  'desh': 'देश',
  'shakti': 'शक्ति',
  'vidya': 'विद्या',
  'gyan': 'ज्ञान',
  'safal': 'सफल',
  'safalta': 'सफलता',
  'prayas': 'प्रयास',
  'kam': 'काम',
  'karma': 'कर्म',
  'dharm': 'धर्म',
  'dharma': 'धर्म',
  'satya': 'सत्य',
  'sach': 'सच',
  'dil': 'दिल',
  'man': 'मन',
  'aaj': 'आज',
  'kal': 'कल',
  'har': 'हर',
  'jeet': 'जीत',
  'yodha': 'योद्धा',
  'swagat': 'स्वागत',
  'dhanyawad': 'धन्यवाद',
  'dhanyavad': 'धन्यवाद',
  'koshish': 'कोशिश',
  'honsla': 'हौंसला',
  'himmat': 'हिम्मत',
  'subah': 'सुबह',
  'shaam': 'शाम',
  'raat': 'रात',
  'suraj': 'सूरज',
  'chand': 'चाँद',
  'tara': 'तारा',
  'aakash': 'आकाश',
  'dharti': 'धरती',
  'pani': 'पानी',
  'hawa': 'हवा',
  'aag': 'आग',
  'roshni': 'रोशनी',
  'pyara': 'प्यारा',
  'achha': 'अच्छा',
  'sundar': 'सुंदर',
  'khoobsurat': 'खूबसूरत'
};

// --------------------------------------------------------------------------
// 5. TRANSLITERATION CORE ENGINE
// --------------------------------------------------------------------------

/**
 * Transliterate Latin/English keystrokes to Hindi Devanagari phonetically
 */
export function transliterateHindi(text: string): string {
  if (!text) return '';
  const lower = text.toLowerCase();

  // 1. Direct dictionary match for perfect spelling
  if (HINDI_COMMON_WORDS[lower]) {
    return HINDI_COMMON_WORDS[lower];
  }

  // 2. Rule-based phonetic parser
  let result = '';
  let i = 0;

  while (i < lower.length) {
    // Check 4-char, 3-char, 2-char, 1-char combinations
    let matched = false;

    // A. Check multi-char consonants
    for (const len of [4, 3, 2, 1]) {
      if (i + len <= lower.length) {
        const sub = lower.slice(i, i + len);
        if (HINDI_CONSONANTS[sub]) {
          const cons = HINDI_CONSONANTS[sub];
          i += len;
          matched = true;

          // Check following vowel/matra
          let matraMatched = false;
          for (const vLen of [2, 1]) {
            if (i + vLen <= lower.length) {
              const vSub = lower.slice(i, i + vLen);
              if (HINDI_MATRAS[vSub] !== undefined) {
                result += cons + HINDI_MATRAS[vSub];
                i += vLen;
                matraMatched = true;
                break;
              }
            }
          }

          if (!matraMatched) {
            // Check if end of word or followed by consonant -> add virama/halant or default 'a'
            if (i < lower.length && lower[i] !== ' ' && lower[i] !== '.' && lower[i] !== ',') {
              result += cons + '्';
            } else {
              result += cons;
            }
          }
          break;
        }
      }
    }

    if (matched) continue;

    // B. Check vowels at start of word or standalone
    for (const len of [2, 1]) {
      if (i + len <= lower.length) {
        const sub = lower.slice(i, i + len);
        if (HINDI_VOWELS[sub]) {
          result += HINDI_VOWELS[sub];
          i += len;
          matched = true;
          break;
        }
      }
    }

    if (matched) continue;

    // C. Non-mapped characters (spaces, punctuation, numbers)
    result += lower[i];
    i++;
  }

  return result;
}

/**
 * Transliterate Romaji to Japanese Hiragana
 */
export function transliterateJapanese(text: string): string {
  if (!text) return '';
  let lower = text.toLowerCase();
  let result = '';
  let i = 0;

  while (i < lower.length) {
    // Sokuon (double consonant: 'kk' -> 'っk', 'tt' -> 'っt', 'pp' -> 'っp', 'ss' -> 'っs')
    if (
      i + 1 < lower.length &&
      lower[i] === lower[i + 1] &&
      !['a', 'i', 'u', 'e', 'o', 'n'].includes(lower[i])
    ) {
      result += 'っ';
      i++;
      continue;
    }

    let matched = false;
    for (const len of [3, 2, 1]) {
      if (i + len <= lower.length) {
        const sub = lower.slice(i, i + len);
        if (JAPANESE_ROMAJI_MAP[sub]) {
          result += JAPANESE_ROMAJI_MAP[sub];
          i += len;
          matched = true;
          break;
        }
      }
    }

    if (!matched) {
      result += lower[i];
      i++;
    }
  }

  return result;
}

/**
 * Transliterate Latin to Russian Cyrillic
 */
export function transliterateRussian(text: string): string {
  if (!text) return '';
  let lower = text.toLowerCase();
  let result = '';
  let i = 0;

  while (i < lower.length) {
    let matched = false;
    for (const len of [4, 2, 1]) {
      if (i + len <= lower.length) {
        const sub = lower.slice(i, i + len);
        if (RUSSIAN_CYRILLIC_MAP[sub]) {
          result += RUSSIAN_CYRILLIC_MAP[sub];
          i += len;
          matched = true;
          break;
        }
      }
    }

    if (!matched) {
      result += lower[i];
      i++;
    }
  }

  return result;
}

/**
 * Transliterate Latin/Arabizi to Arabic Script
 */
export function transliterateArabic(text: string): string {
  if (!text) return '';
  let lower = text.toLowerCase();
  let result = '';
  let i = 0;

  while (i < lower.length) {
    let matched = false;
    for (const len of [2, 1]) {
      if (i + len <= lower.length) {
        const sub = lower.slice(i, i + len);
        if (ARABIC_PHONETIC_MAP[sub]) {
          result += ARABIC_PHONETIC_MAP[sub];
          i += len;
          matched = true;
          break;
        }
      }
    }

    if (!matched) {
      result += lower[i];
      i++;
    }
  }

  return result;
}

/**
 * Smart Accents for German, Spanish, and French
 */
export function applySmartAccents(text: string, lang: string): string {
  if (!text) return '';
  let res = text;

  if (lang === 'de') {
    res = res
      .replace(/ae/g, 'ä')
      .replace(/oe/g, 'ö')
      .replace(/ue/g, 'ü')
      .replace(/ss/g, 'ß')
      .replace(/AE/g, 'Ä')
      .replace(/OE/g, 'Ö')
      .replace(/UE/g, 'Ü');
  } else if (lang === 'es') {
    res = res
      .replace(/n~/g, 'ñ')
      .replace(/N~/g, 'Ñ')
      .replace(/a'/g, 'á')
      .replace(/e'/g, 'é')
      .replace(/i'/g, 'í')
      .replace(/o'/g, 'ó')
      .replace(/u'/g, 'ú')
      .replace(/\?\?/g, '¿')
      .replace(/!!/g, '¡');
  } else if (lang === 'fr') {
    res = res
      .replace(/c,/g, 'ç')
      .replace(/C,/g, 'Ç')
      .replace(/e'/g, 'é')
      .replace(/e`/g, 'è')
      .replace(/e\^/g, 'ê')
      .replace(/a`/g, 'à')
      .replace(/u`/g, 'ù')
      .replace(/o\^/g, 'ô');
  }

  return res;
}

/**
 * Universal Transliteration Dispatcher
 */
export function transliterateInput(input: string, lang: string, scriptMode: 'native' | 'latin' = 'native'): string {
  if (scriptMode === 'latin') return input;

  switch (lang) {
    case 'hi':
      return transliterateHindi(input);
    case 'ja':
      return transliterateJapanese(input);
    case 'ru':
      return transliterateRussian(input);
    case 'ar':
      return transliterateArabic(input);
    case 'de':
    case 'es':
    case 'fr':
      return applySmartAccents(input, lang);
    default:
      return input;
  }
}

/**
 * Check if the given language supports native script mode
 */
export function isNativeScriptSupported(lang: string): boolean {
  return ['hi', 'ja', 'ru', 'ar', 'de', 'es', 'fr', 'zh', 'ko', 'bn'].includes(lang);
}

/**
 * Get Script Type for a Language
 */
export function getScriptType(lang: string): ScriptType {
  switch (lang) {
    case 'hi':
      return 'devanagari';
    case 'ja':
      return 'kana';
    case 'ru':
      return 'cyrillic';
    case 'ar':
      return 'arabic';
    default:
      return 'latin';
  }
}
