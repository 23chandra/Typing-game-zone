// Categorized word dictionaries for 21 games, speed tests, and practice drills
// Includes authentic Monkeytype English 200, English 1k, categorised quotes, and code drills.

export const MONKEYTYPE_ENGLISH_200 = [
  'the', 'be', 'of', 'and', 'a', 'to', 'in', 'he', 'have', 'it',
  'that', 'for', 'they', 'I', 'with', 'as', 'not', 'on', 'she', 'at',
  'by', 'this', 'we', 'you', 'do', 'but', 'his', 'from', 'they', 'say',
  'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there',
  'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which',
  'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him',
  'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them',
  'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over',
  'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first',
  'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day',
  'most', 'us', 'world', 'here', 'look', 'find', 'path', 'water', 'write', 'learn',
  'call', 'first', 'down', 'side', 'been', 'now', 'part', 'place', 'made', 'live',
  'where', 'little', 'round', 'man', 'came', 'show', 'every', 'under', 'name', 'very',
  'through', 'form', 'sentence', 'great', 'help', 'low', 'line', 'differ', 'turn', 'cause',
  'much', 'mean', 'before', 'move', 'right', 'boy', 'old', 'too', 'same', 'tell',
  'does', 'set', 'three', 'air', 'play', 'small', 'end', 'put', 'home', 'read',
  'hand', 'port', 'large', 'spell', 'add', 'land', 'must', 'big', 'high', 'such',
  'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off',
  'need', 'house', 'picture', 'try', 'again', 'animal', 'point', 'mother', 'near', 'build',
  'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found'
];

export const MONKEYTYPE_ENGLISH_1K = [
  ...MONKEYTYPE_ENGLISH_200,
  'answer', 'school', 'grow', 'study', 'still', 'plant', 'cover', 'food', 'sun', 'four',
  'between', 'state', 'keep', 'eye', 'never', 'last', 'let', 'thought', 'city', 'tree',
  'cross', 'farm', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw',
  'left', 'late', 'run', 'while', 'press', 'close', 'night', 'real', 'life', 'few',
  'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk',
  'example', 'ease', 'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'often',
  'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry',
  'took', 'science', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'stop',
  'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood',
  'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red',
  'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'dog', 'family', 'direct',
  'pose', 'leave', 'song', 'measure', 'door', 'product', 'black', 'short', 'numeral', 'class',
  'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire',
  'south', 'problem', 'piece', 'told', 'knew', 'pass', 'since', 'top', 'whole', 'king',
  'space', 'heard', 'best', 'hour', 'better', 'true', 'during', 'hundred', 'five', 'remember',
  'step', 'early', 'hold', 'west', 'ground', 'interest', 'reach', 'fast', 'verb', 'sing',
  'listen', 'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several', 'vowel',
  'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money',
  'serve', 'appear', 'road', 'map', 'rain', 'rule', 'govern', 'pull', 'cold', 'notice',
  'voice', 'unit', 'power', 'town', 'fine', 'certain', 'fly', 'fall', 'lead', 'cry',
  'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun', 'field',
  'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front',
  'teach', 'week', 'final', 'gave', 'green', 'quick', 'develop', 'ocean', 'warm', 'free',
  'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street',
  'inch', 'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object',
  'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'system', 'busy', 'test', 'record',
  'boat', 'common', 'gold', 'possible', 'plane', 'stead', 'dry', 'wonder', 'laugh', 'thousands',
  'ago', 'check', 'game', 'shape', 'equate', 'hot', 'miss', 'brought', 'heat', 'snow',
  'tire', 'bring', 'yes', 'distant', 'fill', 'east', 'paint', 'language', 'among', 'grand',
  'ball', 'yet', 'wave', 'drop', 'heart', 'am', 'present', 'heavy', 'dance', 'engine',
  'position', 'arm', 'wide', 'sail', 'material', 'size', 'vary', 'settle', 'speak', 'weight',
  'general', 'ice', 'matter', 'circle', 'pair', 'include', 'divide', 'syllable', 'felt', 'perhaps',
  'pick', 'sudden', 'count', 'square', 'reason', 'length', 'represent', 'art', 'subject', 'region',
  'energy', 'hunt', 'probable', 'bed', 'brother', 'egg', 'ride', 'cell', 'believe', 'fraction',
  'forest', 'sit', 'race', 'window', 'store', 'summer', 'train', 'sleep', 'prove', 'lone',
  'leg', 'exercise', 'wall', 'catch', 'mount', 'wish', 'sky', 'board', 'joy', 'winter',
  'sat', 'written', 'wild', 'instrument', 'kept', 'glass', 'grass', 'cow', 'job', 'edge',
  'sign', 'visit', 'past', 'soft', 'fun', 'bright', 'gas', 'weather', 'month', 'million',
  'bear', 'finish', 'happy', 'hope', 'flower', 'clothe', 'strange', 'gone', 'jump', 'baby',
  'eight', 'village', 'meet', 'root', 'buy', 'raise', 'solve', 'metal', 'whether', 'push',
  'seven', 'paragraph', 'third', 'shall', 'held', 'hair', 'describe', 'cook', 'floor', 'either',
  'result', 'burn', 'hill', 'safe', 'cat', 'century', 'consider', 'type', 'law', 'bit',
  'coast', 'copy', 'phrase', 'silent', 'tall', 'sand', 'soil', 'roll', 'temperature', 'finger',
  'industry', 'value', 'fight', 'lie', 'beat', 'excite', 'natural', 'view', 'sense', 'ear',
  'else', 'quite', 'broke', 'case', 'middle', 'kill', 'son', 'lake', 'moment', 'scale',
  'loud', 'spring', 'observe', 'child', 'straight', 'consonant', 'nation', 'dictionary', 'milk', 'speed',
  'method', 'organ', 'pay', 'age', 'section', 'dress', 'cloud', 'surprise', 'quiet', 'stone',
  'tiny', 'climb', 'cool', 'design', 'poor', 'lot', 'experiment', 'bottom', 'key', 'iron',
  'single', 'stick', 'flat', 'twenty', 'skin', 'smile', 'crease', 'hole', 'trade', 'melody',
  'trip', 'office', 'receive', 'row', 'mouth', 'exact', 'symbol', 'die', 'least', 'trouble',
  'shout', 'except', 'wrote', 'seed', 'tone', 'join', 'suggest', 'clean', 'break', 'lady',
  'yard', 'rise', 'bad', 'blow', 'oil', 'blood', 'touch', 'grew', 'cent', 'mix',
  'team', 'wire', 'cost', 'lost', 'brown', 'wear', 'garden', 'equal', 'sent', 'choose',
  'fell', 'fit', 'flow', 'fair', 'bank', 'collect', 'save', 'control', 'decimal', 'gentle',
  'woman', 'captain', 'practice', 'separate', 'difficult', 'doctor', 'please', 'protect', 'noon', 'whose',
  'locate', 'ring', 'character', 'insect', 'caught', 'period', 'indicate', 'radio', 'spoke', 'atom',
  'human', 'history', 'effect', 'electric', 'expect', 'crop', 'modern', 'element', 'hit', 'student',
  'corner', 'party', 'supply', 'bone', 'rail', 'imagine', 'provide', 'agree', 'thus', 'capital'
];

export interface CategorizedQuote {
  id: number;
  text: string;
  author: string;
  source?: string;
  length: 'short' | 'medium' | 'long' | 'thicc';
}

export const MONKEYTYPE_QUOTES: CategorizedQuote[] = [
  // Short Quotes (< 100 chars)
  {
    id: 1,
    text: 'Simplicity is prerequisite for reliability.',
    author: 'Edsger W. Dijkstra',
    length: 'short'
  },
  {
    id: 2,
    text: 'Stay hungry, stay foolish.',
    author: 'Steve Jobs',
    length: 'short'
  },
  {
    id: 3,
    text: 'Talk is cheap. Show me the code.',
    author: 'Linus Torvalds',
    length: 'short'
  },
  {
    id: 4,
    text: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
    length: 'short'
  },
  {
    id: 5,
    text: 'Knowledge is power. Precision is mastery.',
    author: 'Francis Bacon',
    length: 'short'
  },
  {
    id: 6,
    text: 'Make it work, make it right, make it fast.',
    author: 'Kent Beck',
    length: 'short'
  },

  // Medium Quotes (100 - 250 chars)
  {
    id: 7,
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
    length: 'medium'
  },
  {
    id: 8,
    text: 'Experience is the name everyone gives to their mistakes in life and software engineering.',
    author: 'Oscar Wilde',
    length: 'medium'
  },
  {
    id: 9,
    text: 'The only way to do great work is to love what you do and practice until it becomes second nature.',
    author: 'Steve Jobs',
    length: 'medium'
  },
  {
    id: 10,
    text: 'Do not wait to strike till the iron is hot; but make it hot by continuous and relentless striking.',
    author: 'William Butler Yeats',
    length: 'medium'
  },
  {
    id: 11,
    text: 'Simplicity is about subtracting the obvious and adding the meaningful.',
    author: 'John Maeda',
    length: 'medium'
  },
  {
    id: 12,
    text: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
    author: 'Antoine de Saint-Exupéry',
    length: 'medium'
  },

  // Long Quotes (251 - 450 chars)
  {
    id: 13,
    text: 'Programs must be written for people to read, and only incidentally for machines to execute. Structure and interpretation of computer programs begins with the clarity of human expression.',
    author: 'Harold Abelson',
    length: 'long'
  },
  {
    id: 14,
    text: 'There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.',
    author: 'C.A.R. Hoare',
    length: 'long'
  },
  {
    id: 15,
    text: 'It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat.',
    author: 'Theodore Roosevelt',
    length: 'long'
  },

  // Thicc Quotes (450+ chars)
  {
    id: 16,
    text: 'Look again at that dot. That is here. That is home. That is us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization lived there on a mote of dust suspended in a sunbeam.',
    author: 'Carl Sagan',
    length: 'thicc'
  },
  {
    id: 17,
    text: 'You have power over your mind, not outside events. Realize this, and you will find strength. Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. Waste no more time arguing about what a good man should be. Be one.',
    author: 'Marcus Aurelius',
    length: 'thicc'
  }
];

export interface CodeSnippet {
  id: number;
  language: string;
  code: string;
}

export const MONKEYTYPE_CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 1,
    language: 'JavaScript',
    code: 'const calculateWPM = (chars, timeMin) => Math.round((chars / 5) / timeMin);'
  },
  {
    id: 2,
    language: 'TypeScript',
    code: 'interface TypingResult { wpm: number; rawWpm: number; accuracy: number; consistency: number; }'
  },
  {
    id: 3,
    language: 'Python',
    code: 'def fibonacci(n: int) -> list[int]:\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result'
  },
  {
    id: 4,
    language: 'Rust',
    code: 'fn main() {\n    let message = "Speed benchmark zero latency";\n    println!("{}", message);\n}'
  },
  {
    id: 5,
    language: 'C++',
    code: '#include <iostream>\nint main() {\n    std::cout << "Fast touch typing" << std::endl;\n    return 0;\n}'
  },
  {
    id: 6,
    language: 'CSS',
    code: ':root {\n  --mt-bg: #323437;\n  --mt-main: #e2b714;\n  --mt-caret: #e2b714;\n}'
  },
  {
    id: 7,
    language: 'SQL',
    code: 'SELECT player_id, MAX(wpm) AS best_wpm FROM speed_records GROUP BY player_id ORDER BY best_wpm DESC;'
  }
];

// Preserved original WORD_LISTS dictionary for 21 games compatibility
export const WORD_LISTS = {
  easy: MONKEYTYPE_ENGLISH_200.filter(w => w.length <= 4),
  medium: MONKEYTYPE_ENGLISH_200.filter(w => w.length >= 4 && w.length <= 7),
  hard: [
    'accelerate', 'achievement', 'annihilation', 'apocalyptic', 'atmospheric', 'backpropagation',
    'bioluminescence', 'cataclysmic', 'chronosphere', 'containment', 'cybersecurity', 'decryption',
    'destruction', 'disintegration', 'electromagnetic', 'encryption', 'equilibrium', 'extinction',
    'gravitational', 'hypervelocity', 'illumination', 'incantation', 'intergalactic', 'invulnerability',
    'jurisdiction', 'kaleidoscope', 'nanotechnology', 'navigation', 'necromancer', 'neutralization',
    'obliteration', 'omnidirectional', 'overclocking', 'paratrooper', 'particlebeam', 'perseverance',
    'phenomenon', 'photosynthesis', 'polarization', 'poltergeist', 'propulsion', 'pyrotechnic',
    'quadrilateral', 'radioactive', 'reconnaissance', 'regeneration', 'resurrection', 'semiconductor',
    'stratosphere', 'superposition', 'supervelocity', 'synchronize', 'teleportation', 'thermonuclear',
    'trajectory', 'transformation', 'transmutation', 'transponder', 'unbreakable', 'vulnerability'
  ],
  space: [
    'orbit', 'pulsar', 'quasar', 'nebula', 'galaxy', 'cosmos', 'starlight', 'supernova',
    'asteroid', 'gravity', 'thrust', 'warp', 'hyperspace', 'payload', 'booster', 'docking',
    'shuttle', 'station', 'telescope', 'spacewalk', 'lander', 'satellite', 'blackhole', 'parsec',
    'lightyear', 'singularity', 'wormhole', 'exoplanet', 'interstellar', 'cosmonaut', 'zenith', 'antimatter'
  ],
  cyber: [
    'byte', 'code', 'data', 'file', 'hash', 'host', 'link', 'loop', 'node', 'null', 'path', 'ping',
    'port', 'root', 'sync', 'task', 'user', 'void', 'wifi', 'wire', 'algorithm', 'binary', 'buffer',
    'cipher', 'client', 'compile', 'cookie', 'crypto', 'cursor', 'daemon', 'debug', 'decode', 'driver',
    'encode', 'engine', 'ether', 'export', 'firewall', 'format', 'gateway', 'global', 'import', 'inject',
    'kernel', 'lambda', 'layout', 'memory', 'module', 'network', 'opcode', 'packet', 'parser', 'payload',
    'pointer', 'process', 'prompt', 'protocol', 'proxy', 'query', 'random', 'render', 'router', 'schema',
    'script', 'server', 'session', 'socket', 'source', 'stack', 'stream', 'string', 'struct', 'syntax',
    'system', 'thread', 'token', 'vector', 'virtual', 'widget'
  ],
  fantasy: [
    'alchemy', 'arcane', 'astral', 'blade', 'blessing', 'cast', 'cauldron', 'charm', 'crystal',
    'curse', 'dagger', 'dragon', 'elixir', 'enchant', 'ether', 'grimoire', 'hex', 'illusion',
    'katana', 'knight', 'legend', 'magic', 'mana', 'mystic', 'ninja', 'oracle', 'parry', 'phantom',
    'potion', 'relic', 'rune', 'samurai', 'scroll', 'shadow', 'shrine', 'slash', 'sorcery', 'specter',
    'spell', 'staff', 'strike', 'sword', 'talisman', 'temple', 'valiant', 'vortex', 'ward', 'wizard'
  ],
  combat: [
    'armor', 'assault', 'attack', 'barricade', 'brawler', 'charge', 'chariot', 'cleave', 'colosseum',
    'combo', 'counter', 'crush', 'defense', 'dodge', 'duel', 'fighter', 'fury', 'gladiator', 'guard',
    'hadoken', 'headshot', 'impact', 'jab', 'kick', 'legion', 'uppercut', 'parry', 'punch', 'rampage',
    'shield', 'slash', 'smash', 'sniper', 'spear', 'stamina', 'strike', 'survival', 'sword', 'titan',
    'uppercut', 'valor', 'vanquish', 'victory', 'warrior', 'weapon', 'wrath', 'zombie'
  ],
  pangrams: [
    'the quick brown fox jumps over the lazy dog',
    'pack my box with five dozen liquor jugs',
    'how vexingly quick daft zebras jump',
    'sphinx of black quartz judge my vow',
    'two driven jocks help fax my big quiz',
    'the five boxing wizards jump quickly',
    'jackdaws love my big sphinx of quartz',
    'crazy fredrick bought many very exquisite opal jewels',
    'we promptly judged antique ivory buckles for the next prize',
    'a mad boxer shot a quick gloved jab to the jaw of his dizzy opponent'
  ],
  quotes: MONKEYTYPE_QUOTES,
  codeSnippets: MONKEYTYPE_CODE_SNIPPETS,
  practiceDrills: {
    homeRow: ['asdf', 'jkl;', 'fad', 'lad', 'ask', 'fall', 'flask', 'salad', 'flash', 'slash'],
    topRow: ['qwer', 'tyui', 'op', 'type', 'write', 'power', 'quiet', 'tower', 'report', 'require'],
    bottomRow: ['zxcv', 'bnm,', 'zoom', 'cave', 'bone', 'menu', 'zone', 'vixen', 'beacon', 'zenith'],
    numberRow: ['1234', '5678', '90', '1984', '2026', '3.1415', '42', '100%', '#404', '8080'],
    symbols: ['()=>{}', '[]', '<>', '!==', '&&', '||', '$', '@', '#', '%', '^', '*', '+', '=', '~/']
  }
};

export function getRandomWord(category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium'): string {
  const list = WORD_LISTS[category] || WORD_LISTS.medium;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

export function getRandomWords(count: number, category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium'): string[] {
  const pool = [...(WORD_LISTS[category] || WORD_LISTS.medium)];
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * pool.length);
    result.push(pool[index]);
  }
  return result;
}

/**
 * Generate Monkeytype Words with optional punctuation and numbers
 */
export function generateMonkeytypeWordList(
  count: number,
  language: 'english' | 'english1k' = 'english',
  includePunc = false,
  includeNum = false
): string[] {
  const pool = language === 'english1k' ? MONKEYTYPE_ENGLISH_1K : MONKEYTYPE_ENGLISH_200;
  const words: string[] = [];
  const puncs = ['.', ',', '!', '?', ';', ':', '-', '...', '—', '"'];

  for (let i = 0; i < count; i++) {
    const baseWord = pool[Math.floor(Math.random() * pool.length)];
    let finalWord = baseWord;

    if (includeNum && Math.random() < 0.16) {
      finalWord = `${Math.floor(Math.random() * 999 + 1)}`;
    } else if (includePunc) {
      const rand = Math.random();
      if (rand < 0.18 && i > 0) {
        const punc = puncs[Math.floor(Math.random() * puncs.length)];
        if (punc === '"') {
          finalWord = `"${finalWord}"`;
        } else {
          finalWord = `${finalWord}${punc}`;
        }
      } else if (rand > 0.88) {
        finalWord = finalWord.charAt(0).toUpperCase() + finalWord.slice(1);
      }
    }

    words.push(finalWord);
  }

  return words;
}

export function getMonkeytypeQuote(lengthType: 'all' | 'short' | 'medium' | 'long' | 'thicc' = 'all'): CategorizedQuote {
  let list = MONKEYTYPE_QUOTES;
  if (lengthType !== 'all') {
    list = MONKEYTYPE_QUOTES.filter(q => q.length === lengthType);
    if (list.length === 0) list = MONKEYTYPE_QUOTES;
  }
  return list[Math.floor(Math.random() * list.length)];
}
