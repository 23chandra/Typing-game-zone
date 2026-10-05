// Native Multilingual Typing Datasets for all 16 Supported Languages
// Categorized by game genre, difficulty, and speed-test word pools

export interface CategorizedGameWords {
  easy: string[];
  medium: string[];
  hard: string[];
  space: string[];
  cyber: string[];
  fantasy: string[];
  combat: string[];
}

export interface TypingQuote {
  text: string;
  source: string;
  length: 'short' | 'medium' | 'long' | 'thicc';
  lang: string;
}

export const LOCALIZED_WORDS: Record<string, { pool200: string[]; pool1k: string[]; gameWords: CategorizedGameWords }> = {
  en: {
    pool200: [
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
    ],
    pool1k: [
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
      'inch', 'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object'
    ],
    gameWords: {
      easy: ['run', 'sky', 'hit', 'jump', 'fire', 'bolt', 'fast', 'dash', 'glow', 'star', 'ship', 'core', 'code', 'beam', 'key', 'play', 'hero', 'orb', 'wind', 'wave'],
      medium: ['laser', 'shield', 'rocket', 'plasma', 'strike', 'attack', 'glider', 'charge', 'shadow', 'energy', 'portal', 'blaster', 'hunter', 'vector', 'matrix', 'sentry', 'falcon', 'vortex'],
      hard: ['hyperdrive', 'supernova', 'intercept', 'annihilate', 'overdrive', 'relativity', 'singularity', 'apocalypse', 'championship', 'cybernetics', 'destruction', 'cataclysmic', 'invulnerable'],
      space: ['pulsar', 'nebula', 'asteroid', 'orbit', 'galaxy', 'quasar', 'meteor', 'mothership', 'teleport', 'warp', 'comet', 'satellite', 'gravity', 'starlight', 'interstellar'],
      cyber: ['matrix', 'quantum', 'cipher', 'decrypt', 'firewall', 'override', 'terminal', 'protocol', 'daemon', 'neural', 'kernel', 'binary', 'exploit', 'database', 'algorithm'],
      fantasy: ['wizard', 'dragon', 'potion', 'crystal', 'sorcery', 'dungeon', 'phoenix', 'spectral', 'valkyrie', 'enchanted', 'artifact', 'arcane', 'mystic', 'grimoire', 'elemental'],
      combat: ['striker', 'gladiator', 'katana', 'warrior', 'barrage', 'counter', 'berserker', 'champion', 'rampage', 'colosseum', 'headshot', 'parry', 'combo', 'finisher', 'slayer']
    }
  },

  hi: {
    pool200: [
      'और', 'है', 'की', 'के', 'का', 'में', 'को', 'से', 'यह', 'भी',
      'था', 'कुछ', 'करते', 'नहीं', 'तो', 'पर', 'आप', 'हम', 'वह', 'कर',
      'रहे', 'क्या', 'अपने', 'साथ', 'बाद', 'होगा', 'लेकिन', 'सब', 'अगर', 'जब',
      'फिर', 'होता', 'पास', 'हमें', 'दिया', 'बात', 'लोग', 'लिए', 'समय', 'दिन',
      'नाम', 'काम', 'ज्यादा', 'दुनिया', 'घर', 'शुरू', 'बड़ा', 'छोटा', 'देख', 'नया',
      'देश', 'शहर', 'प्यार', 'रास्ता', 'सोच', 'जीवन', 'दोस्त', 'आज', 'कल', 'पढ़ो',
      'लिखो', 'सीखो', 'पानी', 'रोशनी', 'हवा', 'आग', 'जमीन', 'आसमान', 'सूरज', 'चाँद',
      'तारा', 'सच', 'झूठ', 'खुशी', 'उम्मीद', 'सपना', 'जीत', 'हार', 'कोशिश', 'हिम्मत',
      'ताकत', 'रंग', 'किताब', 'कलम', 'आवाज', 'खेल', 'सफलता', 'मेहनत', 'विश्वास', 'शांति'
    ],
    pool1k: [
      'भारत', 'नमस्ते', 'नमस्कार', 'सत्य', 'धर्म', 'कर्म', 'विद्या', 'ज्ञान', 'सफल', 'प्रयास',
      'हौंसला', 'सुबह', 'शाम', 'रात', 'प्यारा', 'अच्छा', 'सुंदर', 'खूबसूरत', 'मित्र', 'आनंद',
      'संसार', 'शक्ति', 'योद्धा', 'स्वागत', 'धन्यवाद', 'धरती', 'अग्नि', 'गगन', 'सागर', 'नदी',
      'पर्वत', 'जंगल', 'फूल', 'वृक्ष', 'मार्ग', 'लक्ष्य', 'विजय', 'वीर', 'साहस', 'संकल्प'
    ],
    gameWords: {
      easy: ['आग', 'हवा', 'सच', 'जीत', 'खेल', 'नाम', 'काम', 'पानी', 'दिन', 'रात', 'फूल', 'पेड़', 'मन', 'दिल', 'घर', 'राह', 'दीप', 'सूर्य', 'चाँद', 'तारा'],
      medium: ['हिम्मत', 'ताकत', 'रोशनी', 'उम्मीद', 'सपना', 'किताब', 'मेहनत', 'सफलता', 'विश्वास', 'शांति', 'संसार', 'आनंद', 'प्रयास', 'साहस', 'योद्धा', 'विजय'],
      hard: ['अंतरिक्ष', 'ब्रह्मांड', 'शक्तिशाली', 'अविनाशी', 'आत्मविश्वास', 'सफलतापूर्वक', 'प्रतिस्पर्धा', 'पराक्रम', 'सामर्थ्य', 'महासागर', 'गौरवशाली', 'अजेय'],
      space: ['तारा', 'ग्रह', 'उल्का', 'धूमकेतु', 'अंतरिक्ष', 'कक्षा', 'सूरज', 'चाँद', 'आकाशगंगा', 'उपग्रह', 'प्रकाश', 'शून्य', 'ब्रह्मांड', 'नक्षत्र', 'ग्रहण'],
      cyber: ['कंप्यूटर', 'कोड', 'साइबर', 'नेटवर्क', 'डेटा', 'सुरक्षा', 'सिस्टम', 'डिजिटल', 'सॉफ्टवेयर', 'सर्वर', 'प्रोग्राम', 'कलनविधि', 'इंटरनेट', 'प्रक्रिया'],
      fantasy: ['जादूगर', 'ड्रैगन', 'अमृत', 'तलवार', 'मणि', 'माया', 'योद्धा', 'राक्षस', 'अमर', 'वरदान', 'रहस्य', 'किंवदंती', 'सिंहासन', 'मंत्र'],
      combat: ['हमला', 'बचाव', 'वार', 'कवच', 'तीर', 'धनुष', 'ढाल', 'सेनापति', 'योद्धा', 'द्वंद्व', 'लड़ाई', 'युद्ध', 'शत्रु', 'परास्त', 'विजय']
    }
  },

  es: {
    pool200: [
      'de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'se', 'del',
      'las', 'un', 'por', 'con', 'no', 'una', 'su', 'para', 'es', 'al',
      'lo', 'como', 'mas', 'pero', 'sus', 'le', 'ya', 'o', 'este', 'si',
      'porque', 'esta', 'son', 'entre', 'cuando', 'muy', 'sin', 'sobre', 'ser', 'tiene',
      'tambien', 'me', 'hasta', 'hay', 'donde', 'quien', 'desde', 'todo', 'nos', 'durante',
      'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante', 'ellos',
      'esto', 'mi', 'antes', 'algunos', 'unos', 'yo', 'otro', 'otras', 'otra', 'tanto',
      'tiempo', 'vida', 'mundo', 'casa', 'dia', 'hombre', 'mujer', 'trabajo', 'luz', 'mano',
      'fuerza', 'camino', 'fuego', 'cielo', 'tierra', 'agua', 'noche', 'verdad', 'paz', 'juego'
    ],
    pool1k: [
      'corazon', 'palabra', 'amigo', 'nino', 'ciudad', 'cuerpo', 'cabeza', 'libro', 'esperanza', 'camino',
      'fuerza', 'puerta', 'mente', 'espacio', 'tiempo', 'historia', 'campo', 'suelo', 'nombre', 'parte',
      'sistema', 'forma', 'cambio', 'punto', 'musica', 'linea', 'grupo', 'lugar', 'caso', 'semana'
    ],
    gameWords: {
      easy: ['sol', 'mar', 'luz', 'paz', 'red', 'ola', 'rey', 'voz', 'pie', 'pan', 'ojo', 'sur', 'gas', 'ley', 'oro', 'rio', 'fin', 'ano', 'mes', 'dia'],
      medium: ['fuego', 'laser', 'escudo', 'ataque', 'fuerza', 'camino', 'sombra', 'tiempo', 'portal', 'cohete', 'estrella', 'cazador', 'galaxia', 'planeta'],
      hard: ['hiperespacio', 'supernova', 'aniquilacion', 'velocidad', 'implacable', 'relatividad', 'destruccion', 'invencible', 'tecnologia', 'extraordinario'],
      space: ['orbita', 'meteoro', 'cometa', 'planeta', 'estrella', 'galaxia', 'universo', 'satelite', 'gravedad', 'telescopio', 'cosmico', 'nebulosa', 'astronave'],
      cyber: ['codigo', 'sistema', 'servidor', 'algoritmo', 'red', 'matriz', 'cuantico', 'cifrado', 'protocolo', 'seguridad', 'terminal', 'binario', 'datos'],
      fantasy: ['dragon', 'magia', 'hechizo', 'espada', 'cristal', 'castillo', 'pocion', 'guerrero', 'tesoro', 'fantasma', 'leyenda', 'misterio', 'reino'],
      combat: ['golpe', 'combate', 'arena', 'gladiador', 'armadura', 'espada', 'escudo', 'batalla', 'victoria', 'ataque', 'defensa', 'guerrero', 'contraataque']
    }
  },

  fr: {
    pool200: [
      'de', 'la', 'le', 'et', 'les', 'des', 'en', 'un', 'du', 'une',
      'que', 'est', 'pour', 'qui', 'dans', 'a', 'par', 'sur', 'au', 'plus',
      'ne', 'pas', 'avec', 'ce', 'son', 'se', 'aux', 'ses', 'ou', 'il',
      'sa', 'nous', 'comme', 'mais', 'ils', 'tout', 'on', 'leur', 'bien', 'fait',
      'sans', 'peut', 'faire', 'cette', 'aussi', 'si', 'temps', 'deux', 'autre', 'apres',
      'meme', 'encore', 'entre', 'mon', 'tous', 'premier', 'dire', 'sous', 'vers', 'monde',
      'notre', 'pendant', 'donc', 'vie', 'jour', 'homme', 'femme', 'enfant', 'grand', 'lieu'
    ],
    pool1k: [
      'petit', 'voir', 'savoir', 'pouvoir', 'vouloir', 'venir', 'prendre', 'donner', 'parler', 'trouver',
      'passer', 'croire', 'aimer', 'falloir', 'mettre', 'main', 'chose', 'part', 'force', 'yeux',
      'coeur', 'esprit', 'terre', 'ciel', 'eau', 'feu', 'nuit', 'soleil', 'amour', 'raison'
    ],
    gameWords: {
      easy: ['air', 'eau', 'feu', 'mer', 'roi', 'ciel', 'jour', 'nuit', 'bois', 'main', 'mot', 'jeu', 'ame', 'vie', 'vent', 'or', 'voie', 'bras', 'cle', 'arc'],
      medium: ['laser', 'bouclier', 'attaque', 'fusil', 'espace', 'ombre', 'vitesse', 'etoile', 'planete', 'portail', 'energie', 'chasseur', 'roquette', 'eclair'],
      hard: ['hyperespace', 'supernova', 'annihilation', 'invulnerable', 'destruction', 'relativite', 'extraordinaire', 'cybernetique', 'singularity'],
      space: ['orbite', 'meteore', 'comete', 'galaxie', 'univers', 'satellite', 'gravite', 'cosmique', 'nebuleuse', 'vaisseau', 'etoile', 'asteroide'],
      cyber: ['reseau', 'serveur', 'matrice', 'code', 'securite', 'algorithme', 'terminal', 'donnees', 'protocole', 'quantique', 'binaire', 'chiffrement'],
      fantasy: ['dragon', 'magie', 'sorcier', 'epee', 'chateau', 'potion', 'cristal', 'fantome', 'legende', 'royaume', 'tresor', 'mystere', 'artefact'],
      combat: ['combat', 'guerrier', 'armure', 'bouclier', 'victoire', 'attaque', 'defense', 'arene', 'frappe', 'gladiateur', 'bataille', 'champion']
    }
  },

  de: {
    pool200: [
      'der', 'die', 'und', 'in', 'den', 'von', 'zu', 'das', 'mit', 'sich',
      'des', 'auf', 'fuer', 'ist', 'im', 'dem', 'nicht', 'ein', 'eine', 'als',
      'auch', 'es', 'an', 'werden', 'aus', 'er', 'hat', 'dass', 'sie', 'nach',
      'wird', 'bei', 'einer', 'um', 'am', 'sind', 'noch', 'wie', 'einem', 'ueber',
      'einen', 'so', 'war', 'haben', 'nur', 'oder', 'aber', 'vor', 'zur', 'heute',
      'bis', 'mehr', 'durch', 'man', 'sein', 'wurde', 'sei', 'prozent', 'hatte', 'kann'
    ],
    pool1k: [
      'gegen', 'vom', 'koennen', 'schon', 'wenn', 'habe', 'seine', 'ihre', 'dann', 'unter',
      'wir', 'soll', 'ich', 'eines', 'jahr', 'zwei', 'zeit', 'leben', 'mensch', 'hand',
      'auge', 'welt', 'stadt', 'arbeit', 'tag', 'nacht', 'licht', 'kraft', 'weg', 'woche'
    ],
    gameWords: {
      easy: ['mut', 'rot', 'tag', 'weg', 'arm', 'see', 'ton', 'eis', 'rad', 'gas', 'gut', 'neu', 'ziel', 'flug', 'fels', 'blitz', 'feuer', 'wind', 'kraft', 'stern'],
      medium: ['rakete', 'schild', 'plasma', 'angriff', 'schatten', 'energie', 'portal', 'galaxie', 'weltall', 'krieger', 'jager', 'impuls', 'panzer', 'laser'],
      hard: ['hyperantrieb', 'supernova', 'vernichtung', 'unbesiegbar', 'zerstorung', 'relativitat', 'katastrophe', 'kybernetik', 'abenteuer'],
      space: ['orbit', 'meteor', 'komet', 'planet', 'galaxie', 'kosmos', 'satellit', 'gravitation', 'weltraum', 'nebel', 'raumschiff', 'asteroid'],
      cyber: ['netzwerk', 'server', 'matrix', 'system', 'algorithmus', 'terminal', 'sicherheit', 'protokoll', 'datenbank', 'quanten', 'binaer'],
      fantasy: ['drache', 'zauber', 'schwert', 'schloss', 'kristall', 'ritter', 'magier', 'phantom', 'legende', 'artefakt', 'monument', 'geheimnis'],
      combat: ['kampf', 'krieger', 'ruestung', 'angriff', 'verteidigung', 'gladiator', 'schlacht', 'sieger', 'treffer', 'arena', 'turnier']
    }
  },

  ja: {
    pool200: [
      'これ', 'それ', 'あれ', '私', 'あなた', '彼', '彼女', '人', '時', 'こと',
      'もの', '場所', '世界', '日本', '今日', '明日', '昨日', '今', 'これから', 'ずっと',
      '前', '後', '上', '下', '中', '外', '右', '左', '東', '西',
      '南', '北', '春', '夏', '秋', '冬', '空', '海', '山', '川',
      '木', '花', '雨', '風', '太陽', '月', '星', '光', '影', '道',
      '夢', '希望', '心', '力', '愛', '平和', '未来', '過去', '言葉', '本'
    ],
    pool1k: [
      '友達', '家族', '学校', '仕事', '時間', '毎日', '朝', '昼', '夜', '生活',
      '音楽', '映画', '旅行', '写真', '電話', '手紙', '笑顔', '勇気', '自由', '約束',
      '科学', '宇宙', '歴史', '文化', '自然', '動物', '地球', '仲間', '勝利', '挑戦'
    ],
    gameWords: {
      easy: ['空', '海', '山', '川', '木', '花', '雨', '風', '月', '星', '光', '影', '道', '夢', '心', '力', '愛', '火', '水', '剣'],
      medium: ['レーザー', 'シールド', 'ロケット', 'プラズマ', 'アタック', 'シャドウ', 'エネルギー', 'ポータル', '銀河', '宇宙', '戦士', '勇者', '光速', '波動'],
      hard: ['ハイパードライブ', '超新星爆発', '完全勝利', '相対性理論', '絶対防御', '殲滅作戦', '電脳空間', '最終決戦', '時空超越', '無限軌道'],
      space: ['軌道', '流星', '彗星', '惑星', '銀河', '宇宙', '衛星', '重力', '星雲', '宇宙船', '小惑星', '光年', '恒星', 'ブラックホール'],
      cyber: ['ネットワーク', 'サーバー', 'マトリクス', 'コード', '暗号化', 'アルゴリズム', '端末', '量子', 'バイナリ', 'ファイアウォール', 'データ'],
      fantasy: ['ドラゴン', '魔法', '剣士', '城', 'クリスタル', '騎士', '魔導士', '幻影', '伝説', '聖剣', '秘宝', '精霊', '王国'],
      combat: ['戦闘', '戦士', '鎧', '攻撃', '防御', '闘技場', '合戦', '勝利', '一撃', '格闘', '必殺技', '連撃', '決闘']
    }
  },

  pt: {
    pool200: [
      'de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para',
      'com', 'não', 'uma', 'os', 'no', 'se', 'na', 'por', 'mais', 'as',
      'dos', 'como', 'mas', 'foi', 'ao', 'ele', 'das', 'tem', 'seu', 'sua',
      'ou', 'ser', 'quando', 'muito', 'há', 'nos', 'já', 'está', 'eu', 'também',
      'só', 'pelo', 'pela', 'até', 'isso', 'ela', 'entre', 'era', 'depois', 'sem',
      'mesmo', 'aos', 'ter', 'seus', 'quem', 'me', 'esse', 'eles', 'estão', 'você',
      'tempo', 'vida', 'mundo', 'casa', 'dia', 'homem', 'mulher', 'trabalho', 'luz', 'mão',
      'força', 'caminho', 'fogo', 'céu', 'terra', 'água', 'noite', 'verdade', 'paz', 'jogo'
    ],
    pool1k: [
      'coração', 'palavra', 'amigo', 'criança', 'cidade', 'corpo', 'cabeça', 'livro', 'esperança', 'caminho',
      'força', 'porta', 'mente', 'espaço', 'tempo', 'história', 'campo', 'chão', 'nome', 'parte',
      'sistema', 'forma', 'mudança', 'ponto', 'música', 'linha', 'grupo', 'lugar', 'caso', 'semana'
    ],
    gameWords: {
      easy: ['sol', 'mar', 'luz', 'paz', 'rede', 'onda', 'rei', 'voz', 'pé', 'pão', 'olho', 'rio', 'fim', 'ano', 'mês', 'dia', 'ar', 'arco', 'ouro', 'via'],
      medium: ['fogo', 'laser', 'escudo', 'ataque', 'força', 'sombra', 'tempo', 'portal', 'foguete', 'estrela', 'caçador', 'galáxia', 'planeta', 'relâmpago'],
      hard: ['hiperpropulsão', 'supernova', 'aniquilação', 'invulnerável', 'destruição', 'relatividade', 'extraordinário', 'cibernética', 'singularidade'],
      space: ['órbita', 'meteoro', 'cometa', 'planeta', 'estrela', 'galáxia', 'universo', 'satélite', 'gravidade', 'cósmico', 'nebulosa', 'astronave'],
      cyber: ['rede', 'servidor', 'matriz', 'código', 'segurança', 'algoritmo', 'terminal', 'dados', 'protocolo', 'quântico', 'binário', 'criptografia'],
      fantasy: ['dragão', 'magia', 'espada', 'castelo', 'cristal', 'poção', 'cavaleiro', 'fantasma', 'lenda', 'mistério', 'reino', 'artefato'],
      combat: ['luta', 'guerreiro', 'armadura', 'escudo', 'vitória', 'ataque', 'defesa', 'arena', 'golpe', 'gladiador', 'batalha', 'campeão']
    }
  },

  ru: {
    pool200: [
      'и', 'в', 'не', 'на', 'я', 'быть', 'он', 'с', 'что', 'а',
      'по', 'это', 'она', 'этот', 'к', 'но', 'они', 'мы', 'как', 'из',
      'у', 'который', 'то', 'за', 'свой', 'весь', 'год', 'от', 'так', 'о',
      'для', 'ты', 'же', 'все', 'тот', 'мочь', 'вы', 'человек', 'такой', 'его',
      'сказать', 'только', 'или', 'еще', 'бы', 'себя', 'один', 'уже', 'до', 'время',
      'если', 'сам', 'когда', 'другой', 'вот', 'говорить', 'наш', 'мой', 'знать', 'стать',
      'время', 'жизнь', 'дело', 'рука', 'день', 'глаз', 'дом', 'слово', 'место', 'лицо',
      'друг', 'свет', 'путь', 'земля', 'небо', 'вода', 'огонь', 'сила', 'правда', 'сердце'
    ],
    pool1k: [
      'вопрос', 'город', 'работа', 'ночь', 'сторона', 'голова', 'страна', 'голос', 'письмо', 'вечер',
      'минута', 'дорога', 'взгляд', 'книга', 'мысль', 'число', 'поезд', 'образ', 'надежда', 'победа',
      'солнце', 'звезда', 'музыка', 'счастье', 'свобода', 'мужество', 'знание', 'память', 'мечта', 'будущее'
    ],
    gameWords: {
      easy: ['луч', 'ход', 'бой', 'дом', 'мир', 'шаг', 'путь', 'свет', 'меч', 'щит', 'дым', 'пар', 'снег', 'дождь', 'звук', 'знак', 'круг', 'враг', 'удар', 'цель'],
      medium: ['лазер', 'ракета', 'плазма', 'атака', 'тень', 'энергия', 'портал', 'галактика', 'космос', 'воин', 'охотник', 'импульс', 'вспышка', 'пламя'],
      hard: ['гиперпространство', 'сверхновая', 'уничтожение', 'неуязвимый', 'разрушение', 'относительность', 'катастрофа', 'кибернетика', 'сингулярность'],
      space: ['орбита', 'метеорит', 'комета', 'планета', 'галактика', 'вселенная', 'спутник', 'гравитация', 'туманность', 'звездолет', 'астероид'],
      cyber: ['сервер', 'матрица', 'код', 'безопасность', 'алгоритм', 'терминал', 'квантовый', 'двоичный', 'протокол', 'файрвол', 'база данных'],
      fantasy: ['дракон', 'магия', 'заклинание', 'замок', 'кристалл', 'рыцарь', 'чародей', 'артефакт', 'легенда', 'призрак', 'королевство'],
      combat: ['битва', 'воин', 'доспехи', 'нападение', 'защита', 'гладиатор', 'победа', 'сражение', 'комбо', 'арена', 'поединок', 'чемпион']
    }
  },

  ar: {
    pool200: [
      'في', 'من', 'على', 'إلى', 'أن', 'هذا', 'كان', 'هو', 'عن', 'مع',
      'التي', 'الذي', 'كل', 'ما', 'لا', 'قد', 'بين', 'أو', 'بعد', 'يوم',
      'حيث', 'له', 'قال', 'تم', 'يكون', 'هذه', 'لم', 'لها', 'ذلك', 'هم',
      'نحن', 'أنا', 'أنت', 'وقت', 'حياة', 'عالم', 'بيت', 'شمس', 'قمر', 'نجم',
      'نور', 'طريق', 'أرض', 'سماء', 'ماء', 'نار', 'هواء', 'سلام', 'علم', 'عمل'
    ],
    pool1k: [
      'مستقبل', 'ماضي', 'حرية', 'عدالة', 'نجاح', 'شجاعة', 'معرفة', 'حكمة', 'محبة', 'فرح',
      'صديق', 'مدينة', 'تاريخ', 'طبيعة', 'فضاء', 'كوكب', 'بحر', 'نهر', 'جبل', 'شجر'
    ],
    gameWords: {
      easy: ['نور', 'نار', 'ماء', 'ريح', 'سماء', 'أرض', 'قمر', 'نجم', 'بحر', 'شمس', 'سيف', 'درع', 'قلب', 'روح', 'يوم', 'عين', 'يد', 'صوت', 'فوز', 'أمل'],
      medium: ['ليزر', 'صاروخ', 'بلازما', 'هجوم', 'ظل', 'طاقة', 'بوابة', 'مجرة', 'فضاء', 'محارب', 'صياد', 'برق', 'سرعة', 'شهاب'],
      hard: ['سرعة_الضوء', 'مستعر_أعظم', 'لا_يقهر', 'نسبية', 'تدمير_شامل', 'فرط_المجال', 'تكنولوجيا', 'تفرد'],
      space: ['مدار', 'نيزك', 'مذنب', 'كوكب', 'مجرة', 'كون', 'قمر_صناعي', 'جاذبية', 'سديم', 'سفينة_فضائية', 'كويكب'],
      cyber: ['شبكة', 'خادم', 'مصفوفة', 'شفرة', 'أمان', 'خوارزمية', 'طرفية', 'كمومي', 'ثنائي', 'قاعدة_بيانات'],
      fantasy: ['تنين', 'سحر', 'سيف_سحري', 'قلعة', 'بلورة', 'فارس', 'ساحر', 'أسطورة', 'كنز', 'مملكة', 'تعويذة'],
      combat: ['قتال', 'محارب', 'درع', 'دفاع', 'نصر', 'حلبة', 'ضربة', 'مجالد', 'معركة', 'بطل']
    }
  },

  zh: {
    pool200: [
      '的', '一', '是', '在', '不', '了', '有', '和', '人', '这',
      '中', '大', '为', '上', '个', '国', '我', '要', '他', '来',
      '用', '生', '到', '作', '地', '于', '出', '就', '分', '对',
      '成', '会', '可', '主', '发', '年', '动', '同', '能', '下',
      '时间', '世界', '生活', '光明', '道路', '朋友', '希望', '和平', '力量', '梦想'
    ],
    pool1k: [
      '未来', '历史', '自由', '正义', '成功', '勇敢', '智慧', '科学', '文化', '快乐',
      '宇宙', '自然', '星球', '海洋', '大地', '太阳', '月亮', '星辰', '音乐', '艺术'
    ],
    gameWords: {
      easy: ['光', '火', '水', '风', '天', '地', '月', '星', '海', '山', '云', '雨', '树', '花', '剑', '盾', '心', '力', '飞', '快'],
      medium: ['激光', '护盾', '火箭', '等离子', '攻击', '暗影', '能量', '传送门', '银河', '太空', '勇士', '闪电', '速度', '战机'],
      hard: ['超空间跃迁', '超新星爆发', '坚不可摧', '相对论', '歼灭作战', '赛博朋克', '量子计算', '时空穿梭'],
      space: ['轨道', '流星', '彗星', '行星', '星系', '宇宙', '卫星', '引力', '星云', '飞船', '小行星'],
      cyber: ['网络', '服务器', '矩阵', '代码', '安全', '算法', '终端', '量子', '二进制', '数据库', '防火墙'],
      fantasy: ['巨龙', '魔法', '宝剑', '城堡', '水晶', '骑士', '法师', '传说', '宝藏', '王国', '符文'],
      combat: ['战斗', '武士', '铠甲', '防守', '胜利', '擂台', '重击', '角斗士', '对决', '冠军']
    }
  },

  it: {
    pool200: [
      'di', 'e', 'il', 'la', 'che', 'in', 'un', 'a', 'per', 'una',
      'sono', 'non', 'con', 'si', 'da', 'le', 'lo', 'i', 'ma', 'come',
      'ha', 'del', 'della', 'dei', 'nel', 'nella', 'al', 'alla', 'anche', 'piu',
      'questo', 'questa', 'se', 'su', 'tutto', 'tutti', 'suo', 'sua', 'tra', 'fra',
      'tempo', 'vita', 'mondo', 'casa', 'giorno', 'uomo', 'donna', 'lavoro', 'luce', 'mano',
      'forza', 'strada', 'fuoco', 'cielo', 'terra', 'acqua', 'notte', 'verita', 'pace', 'gioco'
    ],
    pool1k: [
      'cuore', 'parola', 'amico', 'bambino', 'citta', 'corpo', 'testa', 'libro', 'speranza', 'via',
      'porta', 'mente', 'spazio', 'storia', 'campo', 'suolo', 'nome', 'parte', 'sistema', 'musica'
    ],
    gameWords: {
      easy: ['sole', 'mare', 'luce', 'pace', 'rete', 'onda', 're', 'voce', 'piede', 'pane', 'occhio', 'fiume', 'fine', 'anno', 'mese', 'giorno', 'aria', 'arco', 'oro', 'via'],
      medium: ['fuoco', 'laser', 'scudo', 'attacco', 'forza', 'ombra', 'tempo', 'portale', 'razzo', 'stella', 'cacciatore', 'galassia', 'pianeta', 'fulmine'],
      hard: ['iperguida', 'supernova', 'annientamento', 'invulnerabile', 'distruzione', 'relativita', 'straordinario', 'cibernetica', 'singolarita'],
      space: ['orbita', 'meteora', 'cometa', 'pianeta', 'stella', 'galassia', 'universo', 'satellite', 'gravita', 'cosmico', 'nebulosa', 'astronave'],
      cyber: ['rete', 'server', 'matrice', 'codice', 'sicurezza', 'algoritmo', 'terminale', 'dati', 'protocollo', 'quantistico', 'binario', 'crittografia'],
      fantasy: ['drago', 'magia', 'spada', 'castello', 'cristallo', 'pozione', 'cavaliere', 'fantasma', 'leggenda', 'mistero', 'regno', 'artefatto'],
      combat: ['lotta', 'guerriero', 'armatura', 'scudo', 'vittoria', 'attacco', 'difesa', 'arena', 'colpo', 'gladiatore', 'battaglia', 'campione']
    }
  },

  ko: {
    pool200: [
      '그', '이', '저', '나', '우리', '사람', '때', '일', '말', '사회',
      '문제', '문화', '집', '눈', '마음', '생각', '시간', '손', '속', '곳',
      '물', '앞', '길', '소리', '나라', '몸', '얼굴', '어머니', '여자', '머리',
      '아이', '이야기', '태양', '달', '별', '바다', '하늘', '사랑', '친구', '행복'
    ],
    pool1k: [
      '가족', '인생', '꿈', '희망', '빛', '바람', '불', '비', '밤', '아침',
      '나무', '꽃', '음악', '책', '세계', '평화', '자유', '열정', '성공', '노력'
    ],
    gameWords: {
      easy: ['빛', '불', '물', '바람', '하늘', '땅', '별', '달', '해', '바다', '산', '강', '나무', '꽃', '새', '칼', '활', '방패', '마음', '꿈'],
      medium: ['레이저', '실드', '로켓', '플라즈마', '공격', '그림자', '에너지', '포털', '은하', '우주', '전사', '번개', '속도', '용사'],
      hard: ['하이퍼드라이브', '초신성폭발', '무적함대', '상대성이론', '완전소멸', '사이버네틱스', '양자역학', '시공초월'],
      space: ['궤도', '유성', '혜성', '행성', '은하', '우주', '위성', '중력', '성운', '우주선', '소행성'],
      cyber: ['네트워크', '서버', '매트릭스', '코드', '보안', '알고리즘', '터미널', '양자', '이진수', '데이터베이스'],
      fantasy: ['드래곤', '마법', '성검', '성', '크리스탈', '기사', '마법사', '전설', '보물', '왕국', '영혼'],
      combat: ['전투', '용사', '갑옷', '방어', '승리', '경기장', '타격', '검투사', '대전', '챔피언']
    }
  },

  id: {
    pool200: [
      'yang', 'dan', 'di', 'ini', 'dari', 'untuk', 'dengan', 'ada', 'pada', 'itu',
      'adalah', 'ke', 'akan', 'juga', 'bisa', 'tidak', 'saya', 'mereka', 'oleh', 'kami',
      'kita', 'dalam', 'karena', 'sudah', 'lebih', 'hanya', 'satu', 'atau', 'dia', 'tahun',
      'saat', 'hari', 'orang', 'waktu', 'banyak', 'dapat', 'menjadi', 'harus', 'seperti', 'semua',
      'hidup', 'dunia', 'rumah', 'jalan', 'cahaya', 'tangan', 'kekuatan', 'api', 'air', 'udara',
      'tanah', 'langit', 'matahari', 'bulan', 'bintang', 'malam', 'suara', 'kata', 'buku', 'hati'
    ],
    pool1k: [
      'masa depan', 'masa lalu', 'kebebasan', 'keadilan', 'keberhasilan', 'keberanian', 'pengetahuan', 'pikiran', 'kebahagiaan', 'sahabat',
      'kota', 'sejarah', 'alam', 'luar angkasa', 'planet', 'laut', 'sungai', 'gunung', 'pohon', 'bunga'
    ],
    gameWords: {
      easy: ['api', 'air', 'angin', 'awan', 'langit', 'bumi', 'bintang', 'bulan', 'matahari', 'laut', 'sungai', 'pohon', 'bunga', 'burung', 'ikan', 'pedang', 'busur', 'perisai', 'hati', 'jiwa'],
      medium: ['laser', 'perisai', 'roket', 'plasma', 'serangan', 'bayangan', 'energi', 'portal', 'galaksi', 'angkasa', 'pendekar', 'pemburu', 'kilat', 'kecepatan'],
      hard: ['kecepatan cahaya', 'supernova', 'tak terkalahkan', 'kehancuran', 'relativitas', 'luar biasa', 'sibernetika', 'singularitas'],
      space: ['orbit', 'meteor', 'komet', 'planet', 'galaksi', 'alam semesta', 'satelit', 'gravitasi', 'nebula', 'pesawat luar angkasa', 'asteroid'],
      cyber: ['jaringan', 'server', 'matriks', 'kode', 'keamanan', 'algoritma', 'terminal', 'data', 'protokol', 'kuantum', 'biner', 'enkripsi'],
      fantasy: ['naga', 'sihir', 'pedang pusaka', 'istana', 'kristal', 'kesatria', 'penyihir', 'legenda', 'harta karun', 'kerajaan', 'artefak'],
      combat: ['pertarungan', 'pendekar', 'baju besi', 'pertahanan', 'kemenangan', 'arena', 'pukulan', 'gladiator', 'pertempuran', 'juara']
    }
  },

  tr: {
    pool200: [
      'bir', 've', 'bu', 'da', 'de', 'için', 'ile', 'ne', 'gibi', 'var',
      'çok', 'daha', 'kadar', 'en', 'olarak', 'sonra', 'kendi', 'olan', 'her', 'o',
      'ama', 'ben', 'biz', 'sen', 'siz', 'onlar', 'bunu', 'böyle', 'zaman', 'gün',
      'insan', 'dünya', 'hayat', 'yol', 'ışık', 'el', 'güç', 'ateş', 'su', 'hava',
      'toprak', 'gökyüzü', 'güneş', 'ay', 'yıldız', 'gece', 'ses', 'söz', 'kitap', 'yürek'
    ],
    pool1k: [
      'gelecek', 'geçmiş', 'özgürlük', 'adalet', 'başarı', 'cesaret', 'bilgi', 'akıl', 'sevgi', 'barış',
      'dost', 'şehir', 'tarih', 'doğa', 'uzay', 'gezegen', 'deniz', 'ırmak', 'dağ', 'ağaç'
    ],
    gameWords: {
      easy: ['ışık', 'ateş', 'su', 'hava', 'gök', 'yer', 'yol', 'ses', 'söz', 'el', 'kol', 'göz', 'baş', 'gün', 'ay', 'yıl', 'yaz', 'kış', 'ok', 'yay'],
      medium: ['lazer', 'kalkan', 'roket', 'plazma', 'saldırı', 'gölge', 'enerji', 'portal', 'galaksi', 'uzay', 'savaşçı', 'avcı', 'yıldız', 'hız'],
      hard: ['hiperuzay', 'süpernova', 'yokoluş', 'yenilmez', 'yıkım', 'görelilik', 'olağanüstü', 'sibernetik', 'tekillik'],
      space: ['yörünge', 'meteor', 'kuyrukluyıldız', 'gezegen', 'galaksi', 'evren', 'uydu', 'yerçekimi', 'bulutsu', 'uzaygemisi', 'asteroit'],
      cyber: ['ağ', 'sunucu', 'matris', 'kod', 'güvenlik', 'algoritma', 'terminal', 'kuantum', 'ikili', 'veritabanı', 'protokol'],
      fantasy: ['ejderha', 'büyü', 'kılıç', 'kale', 'kristal', 'şövalye', 'büyücü', 'efsane', 'hazine', 'krallık', 'tılsım', 'gizlem'],
      combat: ['dövüş', 'savaşçı', 'zırh', 'kalkan', 'zafer', 'saldırı', 'savunma', 'arena', 'darbe', 'gladyatör', 'meydan', 'şampiyon']
    }
  },

  vi: {
    pool200: [
      'và', 'là', 'của', 'có', 'trong', 'được', 'cho', 'người', 'với', 'một',
      'này', 'đã', 'không', 'những', 'để', 'các', 'khi', 'về', 'nhiều', 'lại',
      'từ', 'ra', 'vào', 'đến', 'làm', 'như', 'trên', 'họ', 'tôi', 'chúng',
      'ngày', 'thời', 'gian', 'cuộc', 'sống', 'thế', 'giới', 'nhà', 'đường', 'ánh',
      'sáng', 'tay', 'sức', 'mạnh', 'lửa', 'nước', 'trời', 'đất', 'mặt', 'trăng'
    ],
    pool1k: [
      'tương', 'lai', 'quá', 'khứ', 'tự', 'do', 'công', 'lý', 'thành', 'công',
      'dũng', 'cảm', 'trí', 'tuệ', 'yêu', 'thương', 'hòa', 'bình', 'bạn', 'bè',
      'thành', 'phố', 'lịch', 'sử', 'thiên', 'nhiên', 'vũ', 'trụ', 'hành', 'tinh'
    ],
    gameWords: {
      easy: ['lửa', 'nước', 'gió', 'mây', 'trời', 'đất', 'sao', 'trăng', 'biển', 'núi', 'sông', 'rừng', 'cây', 'hoa', 'chim', 'cá', 'kiếm', 'cung', 'khiên', 'xe'],
      medium: ['laser', 'lá chắn', 'tên lửa', 'plasma', 'tấn công', 'bóng tối', 'năng lượng', 'cổng không gian', 'ngân hà', 'vũ trụ', 'chiến binh', 'tia chớp'],
      hard: ['siêu không gian', 'siêu tân tinh', 'bất khả chiến bại', 'thuyết tương đối', 'chiến hạm không gian', 'hủy diệt toàn diện', 'công nghệ lượng tử'],
      space: ['quỹ đạo', 'sao băng', 'sao chổi', 'hành tinh', 'ngân hà', 'vũ trụ', 'vệ tinh', 'trọng lực', 'tinh vân', 'phi thuyền', 'tiểu hành tinh'],
      cyber: ['mạng lưới', 'máy chủ', 'ma trận', 'mã hóa', 'thuật toán', 'bảo mật', 'thiết bị đầu cuối', 'lượng tử', 'nhị phân', 'cơ sở dữ liệu'],
      fantasy: ['rồng lửa', 'phép thuật', 'thần kiếm', 'lâu đài', 'pha lê', 'hiệp sĩ', 'pháp sư', 'huyền thoại', 'bảo vật', 'vương quốc', 'linh hồn'],
      combat: ['chiến đấu', 'dũng sĩ', 'áo giáp', 'phòng thủ', 'chiến thắng', 'võ đài', 'đòn đánh', 'đấu sĩ', 'trận chiến', 'vô địch']
    }
  },

  bn: {
    pool200: [
      'এবং', 'হয়', 'এর', 'এক', 'একটি', 'করা', 'থেকে', 'যা', 'আছে', 'করে',
      'না', 'এই', 'হতে', 'তার', 'বা', 'জন্য', 'বলা', 'যে', 'হয়ে', 'ছিল',
      'তিনি', 'আমরা', 'তুমি', 'আমি', 'তারা', 'সময়', 'দিন', 'জীবন', 'মানুষ', 'পৃথিবী',
      'ঘর', 'পথ', 'আলো', 'হাত', 'শক্তি', 'আগুন', 'জল', 'বাতাস', 'মাটি', 'আকাশ',
      'সূর্য', 'চাঁদ', 'তারা', 'রাত', 'শব্দ', 'বই', 'হৃদয়', 'আশা', 'ভালোবাসা', 'শান্তি'
    ],
    pool1k: [
      'ভবিষ্যৎ', 'অতীত', 'স্বাধীনতা', 'ন্যায়', 'সাফল্য', 'সাহস', 'জ্ঞান', 'বুদ্ধি', 'প্রেম', 'আনন্দ',
      'বন্ধু', 'শহর', 'ইতিহাস', 'প্রকৃতি', 'মহাকাশ', 'গ্রহ', 'সমুদ্র', 'নদী', 'পাহাড়', 'গাছ'
    ],
    gameWords: {
      easy: ['আলো', 'আগুন', 'জল', 'হাওয়া', 'মেঘ', 'মাটি', 'তারা', 'চাঁদ', 'সূর্য', 'সাগর', 'নদী', 'ফুল', 'গাছ', 'পাখি', 'মাছ', 'তীর', 'ধনুক', 'ঢাল', 'মন', 'প্রাণ'],
      medium: ['লেজার', 'রকেট', 'প্লাজমা', 'আক্রমণ', 'ছায়া', 'শক্তি', 'মহাবিশ্ব', 'নক্ষত্র', 'যোদ্ধা', 'গতি', 'বিদ্যুৎ', 'প্রতিরোধ', 'সীমানা'],
      hard: ['মহাজাগতিক', 'সুপারনোভা', 'অপ্রতিরোধ্য', 'আপেক্ষিকতা', 'মহাকাশযান', 'ধ্বংসস্তূপ', 'কোয়ান্টাম', 'সাইবারনেটিক্স'],
      space: ['কক্ষপথ', 'উল্কা', 'ধূমকেতু', 'গ্রহ', 'ছায়াপথ', 'মহাবিশ্ব', 'উপগ্রহ', 'মাধ্যাকর্ষণ', 'নীহারিকা', 'নভোযান', 'গ্রহাণু'],
      cyber: ['নেটওয়ার্ক', 'সার্ভার', 'ম্যাট্রিক্স', 'কোড', 'নিরাপত্তা', 'অ্যালগরিদম', 'টার্মিনাল', 'কোয়ান্টাম', 'বাইনারি', 'ডাটাবেস'],
      fantasy: ['ড্রাগন', 'ম্যাজিক', 'তলোয়ার', 'দুর্গ', 'স্ফটিক', 'বীর', 'জাদুকর', 'কিংবদন্তি', 'গুপ্তধন', 'রাজ্য', 'রহস্য'],
      combat: ['যুদ্ধ', 'যোদ্ধা', 'বর্ম', 'আক্রমণ', 'সুরক্ষা', 'ময়দান', 'বিজয়', 'আঘাত', 'লড়াই', 'বীরত্ব', 'চ্যাম্পিয়ন']
    }
  }
};

export const MONKEYTYPE_QUOTES: TypingQuote[] = [
  { text: 'The only way to do great work is to love what you do.', source: 'Steve Jobs', length: 'short', lang: 'en' },
  { text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', source: 'Ralph Waldo Emerson', length: 'medium', lang: 'en' },
  { text: 'In the middle of difficulty lies opportunity. Keep typing, keep striving, and keep growing.', source: 'Albert Einstein', length: 'short', lang: 'en' },
  { text: 'खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।', source: 'Mahatma Gandhi', length: 'short', lang: 'hi' },
  { text: 'उठो, जागो और तब तक मत रुको जब तक लक्ष्य की प्राप्ति न हो जाए।', source: 'Swami Vivekananda', length: 'medium', lang: 'hi' },
  { text: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', source: 'John Lennon', length: 'short', lang: 'es' },
  { text: 'Le plus grand secret pour le bonheur, c’est d’être bien avec soi-même.', source: 'Fontenelle', length: 'short', lang: 'fr' },
  { text: 'Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.', source: 'Bertolt Brecht', length: 'short', lang: 'de' },
  { text: '千里の道も一歩から。毎日練習を続けることが上達への近道です。', source: 'ことわざ (Proverb)', length: 'short', lang: 'ja' },
  { text: '千里之行，始于足下。保持专注与恒心，方能成就卓越。', source: '老子 (Laozi)', length: 'short', lang: 'zh' },
  { text: '시작이 반이다. 꾸준한 연습이 최고의 결과를 만듭니다.', source: '한국 속담', length: 'short', lang: 'ko' },
  { text: 'العلم في الصغر كالنقش على الحجر. استمر في التدريب يومياً لتصل إلى القمة.', source: 'حكمة عربية', length: 'short', lang: 'ar' },
  { text: 'A única maneira de fazer um excelente trabalho é amar o que você faz.', source: 'Steve Jobs', length: 'short', lang: 'pt' },
  { text: 'Учение без размышления бесполезно, но и размышление без учения опасно.', source: 'Конфуций', length: 'short', lang: 'ru' },
  { text: 'Hiduplah seolah-olah kamu akan mati besok. Belajarlah seolah-olah kamu akan hidup selamanya.', source: 'Mahatma Gandhi', length: 'short', lang: 'id' },
  { text: 'La semplicità è l’estrema perfezione. Continua a digitare con precisione e costanza.', source: 'Leonardo da Vinci', length: 'short', lang: 'it' },
  { text: 'Gelecek, bugünden hazırlananlara aittir. Her gün pratik yapın ve hızınızı artırın.', source: 'Malcolm X', length: 'short', lang: 'tr' },
  { text: 'Học, học nữa, học mãi. Kiên trì luyện tập mỗi ngày để đạt đỉnh cao tốc độ.', source: 'V.I. Lenin', length: 'short', lang: 'vi' },
  { text: 'জ্ঞানের চেয়ে বড় কোনো আলো নেই। প্রতিদিন অনুশীলনের মাধ্যমেই পরিপূর্ণতা আসে।', source: 'রবীন্দ্রনাথ ঠাকুর', length: 'short', lang: 'bn' }
];

const TYPING_LANG_MAP: Record<string, string> = {
  english: 'en', english1k: 'en', en: 'en',
  hindi: 'hi', hi: 'hi',
  spanish: 'es', es: 'es',
  french: 'fr', fr: 'fr',
  german: 'de', de: 'de',
  japanese: 'ja', ja: 'ja',
  portuguese: 'pt', pt: 'pt',
  russian: 'ru', ru: 'ru',
  arabic: 'ar', ar: 'ar',
  chinese: 'zh', zh: 'zh',
  italian: 'it', it: 'it',
  korean: 'ko', ko: 'ko',
  indonesian: 'id', id: 'id',
  turkish: 'tr', tr: 'tr',
  vietnamese: 'vi', vi: 'vi',
  bengali: 'bn', bn: 'bn'
};

export function getWordPoolForLanguage(
  locale: string = 'en',
  poolType: '200' | '1k' = '200'
): string[] {
  const clean = (locale || 'en').toLowerCase().trim().split('-')[0];
  const code = TYPING_LANG_MAP[clean] || clean;
  const dataset = LOCALIZED_WORDS[code] || LOCALIZED_WORDS.en;
  return poolType === '1k' ? [...dataset.pool200, ...dataset.pool1k] : dataset.pool200;
}

export function getRandomWord(
  category: keyof CategorizedGameWords = 'medium',
  locale: string = 'en'
): string {
  const clean = (locale || 'en').toLowerCase().trim().split('-')[0];
  const code = TYPING_LANG_MAP[clean] || clean;
  const dataset = LOCALIZED_WORDS[code] || LOCALIZED_WORDS.en;
  const list = dataset.gameWords[category] || dataset.gameWords.medium || LOCALIZED_WORDS.en.gameWords.medium;
  return list[Math.floor(Math.random() * list.length)];
}

export function getRandomWords(
  count: number,
  category: keyof CategorizedGameWords = 'medium',
  locale: string = 'en'
): string[] {
  const clean = (locale || 'en').toLowerCase().trim().split('-')[0];
  const code = TYPING_LANG_MAP[clean] || clean;
  const dataset = LOCALIZED_WORDS[code] || LOCALIZED_WORDS.en;
  const pool = dataset.gameWords[category] || dataset.gameWords.medium || LOCALIZED_WORDS.en.gameWords.medium;
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  return result;
}
