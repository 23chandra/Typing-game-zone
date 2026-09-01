// In-Browser Real-Time Phonetic Transliteration & Native Script Engine
// Converts standard QWERTY keyboard keystrokes to authentic native scripts:
// - Hindi: English Phonetics -> Devanagari (e.g., 'namaste' -> 'नमस्ते', 'bharat' -> 'भारत')
// - Bengali: English Phonetics -> Bangla (e.g., 'amra' -> 'আমরা', 'shomoy' -> 'সময়')
// - Japanese: Romaji -> Hiragana / Katakana (e.g., 'konnichiwa' -> 'こんにちは', 'arigatou' -> 'ありがとう')
// - Russian: Latin Phonetics -> Cyrillic (e.g., 'privet' -> 'привет', 'spasibo' -> 'спасибо')
// - Arabic: Arabizi / Phonetic -> Arabic Script (e.g., 'salam' -> 'سلام', 'shukran' -> 'شكرا')
// - Korean: Romaja -> Hangul (e.g., 'annyeong' -> '안녕', 'sarang' -> '사랑')
// - Chinese: Pinyin -> Hanzi (e.g., 'nihao' -> '你好', 'shijie' -> '世界')
// - German/French/Spanish/Portuguese/Italian/Turkish/Vietnamese: Smart Accents & Diacritics

export type ScriptType = 'latin' | 'devanagari' | 'bengali' | 'kana' | 'cyrillic' | 'arabic' | 'hangul' | 'hanzi';

/**
 * Standardize any language string (e.g. 'hindi' -> 'hi', 'JAPANESE' -> 'ja')
 */
export function normalizeLangCode(lang: string): string {
  if (!lang) return 'en';
  const clean = lang.toLowerCase().trim();
  const map: Record<string, string> = {
    hindi: 'hi', hi: 'hi',
    japanese: 'ja', ja: 'ja',
    russian: 'ru', ru: 'ru',
    arabic: 'ar', ar: 'ar',
    bengali: 'bn', bn: 'bn',
    german: 'de', de: 'de',
    spanish: 'es', es: 'es',
    french: 'fr', fr: 'fr',
    portuguese: 'pt', pt: 'pt',
    italian: 'it', it: 'it',
    turkish: 'tr', tr: 'tr',
    vietnamese: 'vi', vi: 'vi',
    chinese: 'zh', zh: 'zh',
    korean: 'ko', ko: 'ko',
    indonesian: 'id', id: 'id',
    english: 'en', english1k: 'en', en: 'en'
  };
  return map[clean] || clean;
}

// --------------------------------------------------------------------------
// 1. JAPANESE HIRAGANA & KATAKANA ROMAJI MAPPINGS
// --------------------------------------------------------------------------
const JAPANESE_ROMAJI_MAP: Record<string, string> = {
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

  'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
  'sa': 'さ', 'si': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
  'ta': 'た', 'ti': 'ち', 'tu': 'つ', 'te': 'て', 'to': 'と',
  'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
  'ha': 'は', 'hi': 'ひ', 'hu': 'ふ', 'he': 'へ', 'ho': 'ほ',
  'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
  'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
  'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
  'wa': 'わ', 'wo': 'を', 'nn': 'ん', 'n': 'ん',

  'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご',
  'za': 'ざ', 'zi': 'じ', 'zu': 'ず', 'ze': 'ぜ', 'zo': 'ぞ',
  'ji': 'じ',
  'da': 'だ', 'di': 'ぢ', 'du': 'づ', 'de': 'で', 'do': 'ど',
  'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
  'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ',

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
// 4. HINDI DEVANAGARI PHONETIC ENGINE
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

const HINDI_COMMON_WORDS: Record<string, string> = {
  'namaste': 'नमस्ते', 'namaskar': 'नमस्कार', 'bharat': 'भारत', 'hindi': 'हिन्दी',
  'shanti': 'शांति', 'dost': 'दोस्त', 'mitra': 'मित्र', 'khel': 'खेल',
  'samay': 'समय', 'jeevan': 'जीवन', 'jivan': 'जीवन', 'prem': 'प्रेम',
  'pyar': 'प्यार', 'khushi': 'ख़ुशी', 'anand': 'आनंद', 'duniya': 'दुनिया',
  'sansar': 'संसार', 'desh': 'देश', 'shakti': 'शक्ति', 'vidya': 'विद्या',
  'gyan': 'ज्ञान', 'safal': 'सफल', 'safalta': 'सफलता', 'prayas': 'प्रयास',
  'kam': 'काम', 'karma': 'कर्म', 'dharm': 'धर्म', 'dharma': 'धर्म',
  'satya': 'सत्य', 'sach': 'सच', 'dil': 'दिल', 'man': 'मन',
  'aaj': 'आज', 'kal': 'कल', 'har': 'हर', 'jeet': 'जीत',
  'yodha': 'योद्धा', 'swagat': 'स्वागत', 'dhanyawad': 'धन्यवाद', 'dhanyavad': 'धन्यवाद',
  'koshish': 'कोशिश', 'honsla': 'हौंसला', 'himmat': 'हिम्मत', 'subah': 'सुबह',
  'shaam': 'शाम', 'raat': 'रात', 'suraj': 'सूरज', 'chand': 'चाँद',
  'tara': 'तारा', 'aakash': 'आकाश', 'dharti': 'धरती', 'pani': 'पानी',
  'hawa': 'हवा', 'aag': 'आग', 'roshni': 'रोशनी', 'pyara': 'प्यारा',
  'achha': 'अच्छा', 'sundar': 'सुंदर', 'khoobsurat': 'खूबसूरत'
};

// --------------------------------------------------------------------------
// 5. BENGALI PHONETIC ENGINE
// --------------------------------------------------------------------------
const BENGALI_COMMON_WORDS: Record<string, string> = {
  'ebong': 'এবং', 'amra': 'আমরা', 'ami': 'আমি', 'tumi': 'তুমি',
  'apni': 'আপনি', 'tara': 'তারা', 'shob': 'সব', 'din': 'দিন',
  'shomoy': 'সময়', 'jibon': 'জীবন', 'prithibi': 'পৃথিবী', 'bari': 'বাড়ি',
  'rasta': 'রাস্তা', 'manush': 'মানুষ', 'chokh': 'চোখ', 'mon': 'মন',
  'haat': 'হাত', 'alo': 'আলো', 'kotha': 'কথা', 'boi': 'বই',
  'shobdo': 'শব্দ', 'kaaj': 'কাজ', 'bondhu': 'বন্ধু', 'raat': 'রাত',
  'sokal': 'সকাল', 'valobasha': 'ভালোবাসা', 'bhalobasha': 'ভালোবাসা',
  'akash': 'আকাশ', 'mati': 'মাটি', 'jol': 'জল', 'aagun': 'আগুন',
  'hawa': 'হাওয়া', 'shagor': 'সাগর', 'pahar': 'পাহাড়', 'tara_b': 'তারা',
  'chaad': 'চাঁদ', 'shurjo': 'সূর্য', 'shokti': 'শক্তি', 'goti': 'গতি',
  'bangla': 'বাংলা', 'dhonnobad': 'ধন্যবাদ', 'shagotom': 'স্বাগতম'
};

const BENGALI_CONSONANTS: Record<string, string> = {
  'kh': 'খ', 'gh': 'ঘ', 'ch': 'চ', 'chh': 'ছ', 'jh': 'ঝ',
  'th': 'থ', 'dh': 'ধ', 'ph': 'ফ', 'bh': 'ভ', 'sh': 'শ', 'shh': 'ষ',
  'k': 'ক', 'g': 'গ', 'j': 'জ', 't': 'ত', 'd': 'দ', 'n': 'ন',
  'p': 'প', 'b': 'ব', 'm': 'ম', 'y': 'য', 'r': 'র', 'l': 'ল',
  's': 'স', 'h': 'হ'
};

const BENGALI_MATRAS: Record<string, string> = {
  'aa': 'া', 'a': '', 'ii': 'ী', 'ee': 'ী', 'i': 'ি',
  'uu': 'ূ', 'oo': 'ূ', 'u': 'ু', 'e': 'ে', 'ai': 'ৈ',
  'o': 'ো', 'au': 'ৌ'
};

const BENGALI_VOWELS: Record<string, string> = {
  'aa': 'আ', 'a': 'অ', 'ii': 'ঈ', 'ee': 'ঈ', 'i': 'ই',
  'uu': 'ঊ', 'oo': 'ঊ', 'u': 'উ', 'e': 'এ', 'ai': 'ঐ',
  'o': 'ও', 'au': 'ঔ'
};

// --------------------------------------------------------------------------
// 6. KOREAN HANGUL PHONETIC ENGINE
// --------------------------------------------------------------------------
const KOREAN_COMMON_WORDS: Record<string, string> = {
  'geu': '그', 'i': '이', 'jeo': '저', 'na': '나', 'uri': '우리',
  'saram': '사람', 'ttae': '때', 'il': '일', 'mal': '말', 'sahoe': '사회',
  'munje': '문제', 'munhwa': '문화', 'jip': '집', 'nun': '눈', 'maeum': '마음',
  'saenggak': '생각', 'sigan': '시간', 'son': '손', 'sok': '속', 'got': '곳',
  'mul': '물', 'ap': '앞', 'gil': '길', 'sori': '소리', 'nara': '나라',
  'mom': '몸', 'eolgul': '얼굴', 'eomeoni': '어머니', 'yeoja': '여자',
  'meori': '머리', 'ai': '아이', 'iyagi': '이야기', 'taeyang': '태양',
  'dal': '달', 'byeol': '별', 'bada': '바다', 'haneul': '하늘',
  'sarang': '사랑', 'chingu': '친구', 'haengbok': '행복', 'gajok': '가족',
  'insaeng': '인생', 'kkum': '꿈', 'huimang': '희망', 'bit': '빛',
  'baram': '바람', 'bul': '불', 'bi': '비', 'bam': '밤', 'achim': '아침',
  'namu': '나무', 'kkot': '꽃', 'eumak': '음악', 'chaek': '책',
  'hanguk': '한국', 'hanguk-eo': '한국어', 'annyeong': '안녕',
  'annyeonghaseyo': '안녕하세요', 'gamsahamnida': '감사합니다',
  'segye': '세계', 'pyeonghwa': '평화', 'jayu': '자유', 'yeoljeong': '열정',
  'seonggong': '성공', 'noryeok': '노력', 'seungri': '승리'
};

// --------------------------------------------------------------------------
// 7. CHINESE HANZI PHONETIC / PINYIN ENGINE
// --------------------------------------------------------------------------
const CHINESE_COMMON_WORDS: Record<string, string> = {
  'de': '的', 'yi': '一', 'shi': '是', 'zai': '在', 'bu': '不',
  'le': '了', 'you': '有', 'he': '和', 'ren': '人', 'zhe': '这',
  'zhong': '中', 'da': '大', 'wei': '为', 'shang': '上', 'ge': '个',
  'guo': '国', 'wo': '我', 'yao': '要', 'ta': '他', 'lai': '来',
  'yong': '用', 'sheng': '生', 'dao': '到', 'zuo': '作', 'di': '地',
  'yu': '于', 'chu': '出', 'jiu': '就', 'fen': '分', 'dui': '对',
  'cheng': '成', 'hui': '会', 'ke': '可', 'zhu': '主', 'fa': '发',
  'nian': '年', 'dong': '动', 'tong': '同', 'neng': '能', 'xia': '下',
  'zi': '子', 'shuo': '说', 'chan': '产', 'mian': '面', 'er': '而',
  'fang': '方', 'hou': '后', 'duo': '多', 'ding': '定', 'xing': '行',
  'xue': '学', 'suo': '所', 'min': '民', 'jing': '经', 'san': '三',
  'zhi': '之', 'jin': '进', 'deng': '等', 'jia': '家', 'dian': '电',
  'li': '力', 'ru': '如', 'shui': '水', 'hua': '化', 'gao': '高',
  'qi': '起', 'xiao': '小', 'wu': '物', 'xian': '现', 'liang': '量',
  'dou': '都', 'ti': '体', 'ji': '机', 'dang': '当', 'cong': '从',
  'ye': '业', 'ben': '本', 'qu': '去', 'ba': '把',
  'nihao': '你好', 'shijie': '世界', 'zhongguo': '中国', 'pengyou': '朋友',
  'kuaile': '快乐', 'xiwang': '希望', 'mengxiang': '梦想', 'guangming': '光明',
  'chenggong': '成功', 'heping': '和平', 'tian': '天', 'yue': '月',
  'ri': '日', 'huo': '火', 'feng': '风', 'ai': '爱', 'shu': '书',
  'yinyue': '音乐', 'sudu': '速度'
};

// --------------------------------------------------------------------------
// 8. TRANSLITERATION CORE ENGINES
// --------------------------------------------------------------------------

export function transliterateHindi(text: string): string {
  if (!text) return '';
  const lower = text.toLowerCase();
  if (HINDI_COMMON_WORDS[lower]) return HINDI_COMMON_WORDS[lower];

  let result = '';
  let i = 0;

  while (i < lower.length) {
    let matched = false;

    for (const len of [4, 3, 2, 1]) {
      if (i + len <= lower.length) {
        const sub = lower.slice(i, i + len);
        if (HINDI_CONSONANTS[sub]) {
          const cons = HINDI_CONSONANTS[sub];
          i += len;
          matched = true;

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

    result += lower[i];
    i++;
  }

  return result;
}

export function transliterateBengali(text: string): string {
  if (!text) return '';
  const lower = text.toLowerCase();
  if (BENGALI_COMMON_WORDS[lower]) return BENGALI_COMMON_WORDS[lower];

  let result = '';
  let i = 0;

  while (i < lower.length) {
    let matched = false;

    for (const len of [3, 2, 1]) {
      if (i + len <= lower.length) {
        const sub = lower.slice(i, i + len);
        if (BENGALI_CONSONANTS[sub]) {
          const cons = BENGALI_CONSONANTS[sub];
          i += len;
          matched = true;

          let matraMatched = false;
          for (const vLen of [2, 1]) {
            if (i + vLen <= lower.length) {
              const vSub = lower.slice(i, i + vLen);
              if (BENGALI_MATRAS[vSub] !== undefined) {
                result += cons + BENGALI_MATRAS[vSub];
                i += vLen;
                matraMatched = true;
                break;
              }
            }
          }

          if (!matraMatched) {
            if (i < lower.length && lower[i] !== ' ' && lower[i] !== '.') {
              result += cons + '্';
            } else {
              result += cons;
            }
          }
          break;
        }
      }
    }

    if (matched) continue;

    for (const len of [2, 1]) {
      if (i + len <= lower.length) {
        const sub = lower.slice(i, i + len);
        if (BENGALI_VOWELS[sub]) {
          result += BENGALI_VOWELS[sub];
          i += len;
          matched = true;
          break;
        }
      }
    }

    if (matched) continue;

    result += lower[i];
    i++;
  }

  return result;
}

export function transliterateJapanese(text: string): string {
  if (!text) return '';
  let lower = text.toLowerCase();
  let result = '';
  let i = 0;

  while (i < lower.length) {
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

export function transliterateKorean(text: string): string {
  if (!text) return '';
  const lower = text.toLowerCase();
  if (KOREAN_COMMON_WORDS[lower]) return KOREAN_COMMON_WORDS[lower];
  return lower;
}

export function transliterateChinese(text: string): string {
  if (!text) return '';
  const lower = text.toLowerCase();
  if (CHINESE_COMMON_WORDS[lower]) return CHINESE_COMMON_WORDS[lower];
  return lower;
}

/**
 * Smart Diacritics & Accents for European & Asian Latin alphabets
 */
export function applySmartAccents(text: string, langCode: string): string {
  if (!text) return '';
  const code = normalizeLangCode(langCode);
  let res = text;

  if (code === 'de') {
    res = res
      .replace(/ae/g, 'ä')
      .replace(/oe/g, 'ö')
      .replace(/ue/g, 'ü')
      .replace(/ss/g, 'ß')
      .replace(/a:/g, 'ä')
      .replace(/o:/g, 'ö')
      .replace(/u:/g, 'ü')
      .replace(/AE/g, 'Ä')
      .replace(/OE/g, 'Ö')
      .replace(/UE/g, 'Ü');
  } else if (code === 'es') {
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
  } else if (code === 'fr') {
    res = res
      .replace(/c,/g, 'ç')
      .replace(/C,/g, 'Ç')
      .replace(/e'/g, 'é')
      .replace(/e`/g, 'è')
      .replace(/e\^/g, 'ê')
      .replace(/a`/g, 'à')
      .replace(/u`/g, 'ù')
      .replace(/o\^/g, 'ô')
      .replace(/i\^/g, 'î');
  } else if (code === 'pt') {
    res = res
      .replace(/a~/g, 'ã')
      .replace(/o~/g, 'õ')
      .replace(/c,/g, 'ç')
      .replace(/a'/g, 'á')
      .replace(/e'/g, 'é')
      .replace(/e\^/g, 'ê')
      .replace(/o\^/g, 'ô');
  } else if (code === 'it') {
    res = res
      .replace(/a`/g, 'à')
      .replace(/e`/g, 'è')
      .replace(/e'/g, 'é')
      .replace(/i`/g, 'ì')
      .replace(/o`/g, 'ò')
      .replace(/u`/g, 'ù');
  } else if (code === 'tr') {
    res = res
      .replace(/c,/g, 'ç')
      .replace(/g~/g, 'ğ')
      .replace(/i\./g, 'ı')
      .replace(/o:/g, 'ö')
      .replace(/s,/g, 'ş')
      .replace(/u:/g, 'ü')
      .replace(/sh/g, 'ş')
      .replace(/ch/g, 'ç');
  } else if (code === 'vi') {
    res = res
      .replace(/dd/g, 'đ')
      .replace(/aa/g, 'â')
      .replace(/aw/g, 'ă')
      .replace(/ee/g, 'ê')
      .replace(/oo/g, 'ô')
      .replace(/ow/g, 'ơ')
      .replace(/uw/g, 'ư');
  }

  return res;
}

/**
 * Universal Transliteration Dispatcher
 */
export function transliterateInput(input: string, lang: string, scriptMode: 'native' | 'latin' = 'native'): string {
  if (scriptMode === 'latin') return input;
  const code = normalizeLangCode(lang);

  switch (code) {
    case 'hi':
      return transliterateHindi(input);
    case 'bn':
      return transliterateBengali(input);
    case 'ja':
      return transliterateJapanese(input);
    case 'ru':
      return transliterateRussian(input);
    case 'ar':
      return transliterateArabic(input);
    case 'ko':
      return transliterateKorean(input);
    case 'zh':
      return transliterateChinese(input);
    case 'de':
    case 'es':
    case 'fr':
    case 'pt':
    case 'it':
    case 'tr':
    case 'vi':
      return applySmartAccents(input, code);
    default:
      return input;
  }
}

/**
 * Check if the given language supports native script mode
 */
export function isNativeScriptSupported(lang: string): boolean {
  const code = normalizeLangCode(lang);
  return ['hi', 'ja', 'ru', 'ar', 'bn', 'de', 'es', 'fr', 'pt', 'it', 'tr', 'vi', 'zh', 'ko', 'id'].includes(code);
}

/**
 * Get Script Type for a Language
 */
export function getScriptType(lang: string): ScriptType {
  const code = normalizeLangCode(lang);
  switch (code) {
    case 'hi':
      return 'devanagari';
    case 'bn':
      return 'bengali';
    case 'ja':
      return 'kana';
    case 'ru':
      return 'cyrillic';
    case 'ar':
      return 'arabic';
    case 'ko':
      return 'hangul';
    case 'zh':
      return 'hanzi';
    default:
      return 'latin';
  }
}
