// Categorized word dictionaries for 21 games, speed tests, and practice drills

export const WORD_LISTS = {
  // Beginner short words (3-4 letters)
  easy: [
    'ace', 'act', 'add', 'aim', 'air', 'all', 'and', 'ant', 'ape', 'arc', 'arm', 'art', 'ash', 'ask', 'axe',
    'bad', 'bag', 'ban', 'bar', 'bat', 'bay', 'bed', 'bee', 'beg', 'bet', 'bid', 'big', 'bin', 'bit', 'bow',
    'box', 'boy', 'bug', 'bus', 'but', 'buy', 'cab', 'can', 'cap', 'car', 'cat', 'cow', 'cry', 'cup', 'cut',
    'dam', 'day', 'den', 'dew', 'die', 'dig', 'dim', 'dip', 'dog', 'dot', 'dry', 'due', 'duo', 'ear', 'eat',
    'egg', 'elf', 'elk', 'elm', 'end', 'era', 'eye', 'fan', 'far', 'fat', 'fed', 'fee', 'few', 'fig', 'fit',
    'fix', 'fly', 'fog', 'for', 'fox', 'fry', 'fun', 'fur', 'gap', 'gas', 'gel', 'gem', 'get', 'gin', 'god',
    'gun', 'gut', 'guy', 'gym', 'ham', 'hat', 'hay', 'hen', 'hex', 'hid', 'hip', 'hit', 'hop', 'hot', 'how',
    'hub', 'hug', 'hum', 'hut', 'ice', 'ill', 'ink', 'inn', 'ion', 'ivy', 'jam', 'jar', 'jaw', 'jay', 'jet',
    'job', 'jog', 'joy', 'jug', 'key', 'kid', 'kin', 'kit', 'lab', 'lad', 'lap', 'law', 'lay', 'led', 'leg',
    'lid', 'lie', 'lip', 'lit', 'log', 'lot', 'low', 'mad', 'man', 'map', 'mat', 'may', 'men', 'met', 'mix',
    'mob', 'mud', 'mug', 'nap', 'net', 'new', 'nod', 'not', 'now', 'nut', 'oak', 'oar', 'oat', 'odd', 'off',
    'oil', 'old', 'one', 'opt', 'orb', 'ore', 'our', 'out', 'owl', 'own', 'pad', 'pan', 'pat', 'paw', 'pay',
    'pea', 'peg', 'pen', 'pet', 'pie', 'pig', 'pin', 'pit', 'ply', 'pod', 'pop', 'pot', 'pro', 'pry', 'pug',
    'rag', 'ram', 'ran', 'rap', 'rat', 'raw', 'ray', 'red', 'rib', 'rid', 'rig', 'rim', 'rip', 'rob', 'rod',
    'rot', 'row', 'rub', 'rug', 'run', 'rut', 'rye', 'sad', 'sag', 'sap', 'sat', 'saw', 'say', 'sea', 'see',
    'set', 'sew', 'sin', 'sip', 'sir', 'sit', 'six', 'ski', 'sky', 'sly', 'sob', 'son', 'sow', 'soy', 'spy',
    'sun', 'tab', 'tag', 'tan', 'tap', 'tar', 'tea', 'ten', 'tie', 'tin', 'tip', 'toe', 'ton', 'top', 'toy',
    'try', 'tub', 'tug', 'two', 'urn', 'use', 'van', 'vat', 'vet', 'via', 'vow', 'war', 'wax', 'way', 'web',
    'wet', 'who', 'why', 'wig', 'win', 'wit', 'won', 'woo', 'yak', 'yam', 'yap', 'yaw', 'yea', 'yes', 'yet',
    'zen', 'zip', 'zoo',
    'acid', 'atom', 'bolt', 'beam', 'claw', 'core', 'dash', 'dark', 'dust', 'echo', 'edge', 'fire', 'flux',
    'glow', 'grid', 'halo', 'helm', 'hero', 'iron', 'jump', 'keen', 'lava', 'lock', 'luna', 'mesh', 'neon',
    'nova', 'orbit', 'peak', 'pulse', 'rage', 'rust', 'scan', 'ship', 'shot', 'spark', 'star', 'volt', 'warp',
    'wind', 'zero', 'zone'
  ],

  // Medium words (5-7 letters)
  medium: [
    'arcade', 'attack', 'avatar', 'battle', 'beacon', 'blaster', 'bullet', 'bunker', 'cannon', 'castle',
    'charge', 'cipher', 'clash', 'combat', 'comet', 'cosmic', 'cursor', 'cyborg', 'damage', 'danger',
    'defeat', 'defense', 'destroy', 'dragon', 'driver', 'energy', 'engine', 'escape', 'factor', 'fighter',
    'flame', 'flying', 'force', 'fusion', 'galaxy', 'glider', 'gravity', 'ground', 'hammer', 'hazard',
    'health', 'hunter', 'impact', 'infantry', 'invader', 'knight', 'laser', 'launch', 'legend', 'lightning',
    'matrix', 'meteor', 'missile', 'motion', 'nebula', 'ninja', 'orbital', 'outpost', 'plasma', 'portal',
    'power', 'quantum', 'radar', 'raider', 'reactor', 'refine', 'rescue', 'rocket', 'runner', 'samurai',
    'sector', 'shadow', 'shield', 'signal', 'sniper', 'sorcerer', 'spark', 'speed', 'strike', 'system',
    'target', 'temple', 'thrust', 'thunder', 'titan', 'tracer', 'turret', 'tycoon', 'vector', 'velocity',
    'vessel', 'victor', 'vortex', 'walker', 'warrior', 'weapon', 'wizard', 'zombie'
  ],

  // Advanced & Hard words (8-12 letters)
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

  // Space & Sci-Fi (Type Defender, Meteor Strike, Space Racer)
  space: [
    'orbit', 'pulsar', 'quasar', 'nebula', 'galaxy', 'cosmos', 'starlight', 'supernova',
    'asteroid', 'gravity', 'thrust', 'warp', 'hyperspace', 'payload', 'booster', 'docking',
    'shuttle', 'station', 'telescope', 'spacewalk', 'lander', 'satellite', 'blackhole', 'parsec',
    'lightyear', 'singularity', 'wormhole', 'exoplanet', 'interstellar', 'cosmonaut', 'zenith', 'antimatter'
  ],

  // Cyber & Coding (Cyber Hacker, Key Master)
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

  // Magic & Fantasy (Wizard Duel, Samurai Showdown, Dungeon Escape)
  fantasy: [
    'alchemy', 'arcane', 'astral', 'blade', 'blessing', 'cast', 'cauldron', 'charm', 'crystal',
    'curse', 'dagger', 'dragon', 'elixir', 'enchant', 'ether', 'grimoire', 'hex', 'illusion',
    'katana', 'knight', 'legend', 'magic', 'mana', 'mystic', 'ninja', 'oracle', 'parry', 'phantom',
    'potion', 'relic', 'rune', 'samurai', 'scroll', 'shadow', 'shrine', 'slash', 'sorcery', 'specter',
    'spell', 'staff', 'strike', 'sword', 'talisman', 'temple', 'valiant', 'vortex', 'ward', 'wizard'
  ],

  // Action & Combat (Zombie Horde, Street Fighter, Gladiator Arena, Robo Rampage)
  combat: [
    'armor', 'assault', 'attack', 'barricade', 'brawler', 'charge', 'chariot', 'cleave', 'colosseum',
    'combo', 'counter', 'crush', 'defense', 'dodge', 'duel', 'fighter', 'fury', 'gladiator', 'guard',
    'hadoken', 'headshot', 'impact', 'jab', 'kick', 'legion', 'uppercut', 'parry', 'punch', 'rampage',
    'shield', 'slash', 'smash', 'sniper', 'spear', 'stamina', 'strike', 'survival', 'sword', 'titan',
    'uppercut', 'valor', 'vanquish', 'victory', 'warrior', 'weapon', 'wrath', 'zombie'
  ],

  // Pangrams & Practice Drills (for Key Master & Touch Typing)
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

  // Famous Quotes for Speed Test
  quotes: [
    {
      text: 'Simplicity is the soul of efficiency and the heart of master craftsmanship.',
      author: 'Austin Freeman'
    },
    {
      text: 'First, solve the problem. Then, write the code with precision and clarity.',
      author: 'John Johnson'
    },
    {
      text: 'Experience is the name everyone gives to their mistakes in software engineering.',
      author: 'Oscar Wilde'
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      author: 'Martin Fowler'
    },
    {
      text: 'Knowledge is power. Information is liberating. Education is the premise of progress in every society.',
      author: 'Kofi Annan'
    },
    {
      text: 'Stay hungry, stay foolish. Never settle for what is easy when greatness is attainable.',
      author: 'Steve Jobs'
    },
    {
      text: 'The only way to do great work is to love what you do and practice until it becomes second nature.',
      author: 'Steve Jobs'
    },
    {
      text: 'Do not wait to strike till the iron is hot; but make it hot by continuous and relentless striking.',
      author: 'William Butler Yeats'
    }
  ],

  // Code Snippets for Speed Test Code Mode
  codeSnippets: [
    {
      lang: 'JavaScript',
      code: 'const calculateWPM = (chars, timeMin) => Math.round((chars / 5) / timeMin);'
    },
    {
      lang: 'TypeScript',
      code: 'interface PlayerStats { grossWPM: number; accuracy: number; streak: number; }'
    },
    {
      lang: 'Python',
      code: 'def fibonacci(n: int) -> list[int]:\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result'
    },
    {
      lang: 'CSS',
      code: '@theme {\n  --color-primary: #171717;\n  --radius-pill: 100px;\n}'
    },
    {
      lang: 'Rust',
      code: 'fn main() {\n    let greeting = "Hello, Typing Game Zone!";\n    println!("{}", greeting);\n}'
    }
  ],

  // Home Row & Finger Placement Drills
  practiceDrills: {
    homeRow: ['asdf', 'jkl;', 'fad', 'lad', 'ask', 'fall', 'flask', 'salad', 'flash', 'slash'],
    topRow: ['qwer', 'tyui', 'op', 'type', 'write', 'power', 'quiet', 'tower', 'report', 'require'],
    bottomRow: ['zxcv', 'bnm,', 'zoom', 'cave', 'bone', 'menu', 'zone', 'vixen', 'beacon', 'zenith'],
    numberRow: ['1234', '5678', '90', '1984', '2026', '3.1415', '42', '100%', '#404', '8080'],
    symbols: ['()=>{}', '[]', '<>', '!==', '&&', '||', '$', '@', '#', '%', '^', '*', '+', '=', '~/']
  }
};

/**
 * Returns a random word based on category and difficulty
 */
export function getRandomWord(category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium'): string {
  const list = WORD_LISTS[category] || WORD_LISTS.medium;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

/**
 * Returns an array of N random unique words
 */
export function getRandomWords(count: number, category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium'): string[] {
  const list = [...(WORD_LISTS[category] || WORD_LISTS.medium)];
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    if (list.length === 0) break;
    const index = Math.floor(Math.random() * list.length);
    result.push(list.splice(index, 1)[0]);
  }
  return result;
}
