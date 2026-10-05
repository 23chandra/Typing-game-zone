// Categorized word dictionaries for 21 games, speed tests, and practice drills
<<<<<<< HEAD
// Supports 16 global languages: English, Hindi, Spanish, French, German, Japanese, Portuguese, Russian,
// Arabic, Chinese, Italian, Korean, Indonesian, Turkish, Vietnamese, Bengali.

import { getCurrentLanguage } from './i18n';

// --------------------------------------------------------------------------
// 1. ENGLISH WORD POOLS (200 & 1000)
// --------------------------------------------------------------------------
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

// --------------------------------------------------------------------------
// 2. INTERNATIONAL 200-WORD POOLS
// --------------------------------------------------------------------------
export const MONKEYTYPE_HINDI_200 = [
  'aur', 'hai', 'ki', 'ke', 'ka', 'mein', 'ko', 'se', 'yeh', 'bhi',
  'tha', 'kuch', 'karte', 'nahi', 'toh', 'par', 'aap', 'hum', 'woh', 'kar',
  'rahe', 'kya', 'apne', 'saath', 'baad', 'hoga', 'lekin', 'sab', 'agar', 'jab',
  'phir', 'hota', 'paas', 'hume', 'diya', 'baat', 'karte', 'log', 'karte', 'liye',
  'accha', 'pehla', 'samay', 'din', 'naam', 'kam', 'zyada', 'duniya', 'ghar', 'kam',
  'shuru', 'bana', 'badi', 'chota', 'dekh', 'naya', 'purana', 'desh', 'shahar', 'pyaar',
  'raasta', 'soch', 'jeevan', 'dost', 'aaj', 'kal', 'suno', 'padho', 'likho', 'seekho',
  'paani', 'roshni', 'hawa', 'aag', 'zameen', 'aasmaan', 'suraj', 'chand', 'tara', 'sach',
  'jhooth', 'khushi', 'umeed', 'sapna', 'jeet', 'haar', 'koshish', 'himmat', 'taqat', 'rang',
  'gaadi', 'kitab', 'kalam', 'awaaz', 'khel', 'safalta', 'mehnat', 'vishwas', 'shanti', 'sundar'
];

export const MONKEYTYPE_SPANISH_200 = [
  'de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'se', 'del',
  'las', 'un', 'por', 'con', 'no', 'una', 'su', 'para', 'es', 'al',
  'lo', 'como', 'mas', 'pero', 'sus', 'le', 'ya', 'o', 'este', 'si',
  'porque', 'esta', 'son', 'entre', 'esta', 'cuando', 'muy', 'sin', 'sobre', 'ser',
  'tiene', 'tambien', 'me', 'hasta', 'hay', 'donde', 'quien', 'desde', 'todo', 'nos',
  'durante', 'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante',
  'ellos', 'e', 'esto', 'mi', 'antes', 'algunos', 'que', 'unos', 'yo', 'otro',
  'otras', 'otra', 'el', 'tanto', 'esa', 'estos', 'mucho', 'quienes', 'nada', 'muchos',
  'cual', 'sea', 'poco', 'ella', 'estar', 'haber', 'estas', 'estaba', 'tiempo', 'vida',
  'mundo', 'casa', 'dia', 'hombre', 'mujer', 'trabajo', 'luz', 'mano', 'fuerza', 'camino'
];

export const MONKEYTYPE_FRENCH_200 = [
  'de', 'la', 'le', 'et', 'les', 'des', 'en', 'un', 'du', 'une',
  'que', 'est', 'pour', 'qui', 'dans', 'a', 'par', 'sur', 'au', 'plus',
  'ne', 'pas', 'avec', 'ce', 'son', 'se', 'aux', 'ses', 'ou', 'il',
  'sa', 'nous', 'comme', 'mais', 'ils', 'tout', 'on', 'leur', 'bien', 'fait',
  'sans', 'peut', 'faire', 'cette', 'aussi', 'si', 'temps', 'deux', 'autre', 'apres',
  'meme', 'encore', 'entre', 'mon', 'tous', 'premier', 'dire', 'sous', 'vers', 'monde',
  'notre', 'pendant', 'donc', 'vie', 'jour', 'homme', 'femme', 'enfant', 'grand', 'lieu',
  'petit', 'voir', 'savoir', 'pouvoir', 'vouloir', 'venir', 'prendre', 'donner', 'parler', 'trouver',
  'passer', 'croire', 'aimer', 'falloir', 'mettre', 'main', 'chose', 'part', 'force', 'yeux'
];

export const MONKEYTYPE_GERMAN_200 = [
  'der', 'die', 'und', 'in', 'den', 'von', 'zu', 'das', 'mit', 'sich',
  'des', 'auf', 'fuer', 'ist', 'im', 'dem', 'nicht', 'ein', 'eine', 'als',
  'auch', 'es', 'an', 'werden', 'aus', 'er', 'hat', 'dass', 'sie', 'nach',
  'wird', 'bei', 'einer', 'um', 'am', 'sind', 'noch', 'wie', 'einem', 'ueber',
  'einen', 'so', 'war', 'haben', 'nur', 'oder', 'aber', 'vor', 'zur', 'heute',
  'bis', 'mehr', 'durch', 'man', 'sein', 'wurde', 'sei', 'prozent', 'hatte', 'kann',
  'gegen', 'vom', 'koennen', 'schon', 'wenn', 'habe', 'seine', 'ihre', 'dann', 'unter',
  'wir', 'soll', 'ich', 'eines', 'jahr', 'zwei', 'zeit', 'leben', 'mensch', 'hand',
  'auge', 'welt', 'stadt', 'arbeit', 'tag', 'nacht', 'licht', 'kraft', 'weg', 'woche'
];

export const MONKEYTYPE_JAPANESE_200 = [
  'kore', 'sore', 'are', 'watashi', 'anata', 'kare', 'kanojo', 'hito', 'toki', 'koto',
  'mono', 'basho', 'sekai', 'nihon', 'kyou', 'ashita', 'kinou', 'ima', 'korekara', 'zutto',
  'kokoro', 'yume', 'kibou', 'ai', 'tomo', 'kazoku', 'ie', 'michi', 'sora', 'umi',
  'yama', 'kawa', 'hana', 'ki', 'kaze', 'ame', 'hikari', 'yoru', 'asa', 'koe',
  'te', 'me', 'mimi', 'chikara', 'kotoba', 'hon', 'uta', 'oto', 'iro', 'shigoto',
  'mirai', 'kako', 'genki', 'tanoshii', 'hayai', 'tsuyoi', 'yasashii', 'atarashii', 'furui', 'ookii',
  'chiisai', 'omoshiroi', 'utsukushii', 'arigatou', 'ganbare', 'daisuki', 'yoroshiku', 'hajime', 'owari', 'jikan'
];

export const MONKEYTYPE_PORTUGUESE_200 = [
  'de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para',
  'com', 'nao', 'uma', 'os', 'no', 'se', 'na', 'por', 'mais', 'as',
  'dos', 'como', 'mas', 'foi', 'ao', 'ele', 'das', 'tem', 'a', 'seu',
  'sua', 'ou', 'quando', 'muito', 'nos', 'ja', 'eu', 'tambem', 'so', 'pelo',
  'pela', 'ate', 'isso', 'ela', 'entre', 'depois', 'sem', 'mesmo', 'aos', 'seus',
  'quem', 'me', 'esse', 'eles', 'voce', 'essa', 'num', 'nem', 'suas', 'meu',
  'minha', 'numa', 'pelos', 'tempo', 'vida', 'mundo', 'dia', 'homem', 'mulher', 'trabalho',
  'mao', 'luz', 'forca', 'caminho', 'cidade', 'casa', 'noite', 'amor', 'olho', 'palavra'
];

export const MONKEYTYPE_RUSSIAN_200 = [
  'i', 'v', 'ne', 'na', 'ya', 'chto', 'on', 's', 'po', 'eto',
  'kak', 'no', 'oni', 'k', 'u', 'ty', 'iz', 'my', 'za', 'vy',
  'tak', 'zhe', 'ot', 'o', 'vot', 'dlya', 'da', 'byl', 'tolko', 'ee',
  'mne', 'bylo', 'ego', 'esli', 'uzhe', 'tot', 'vam', 'sebya', 'odin', 'vse',
  'den', 'vremya', 'zhizn', 'ruka', 'slovo', 'glaza', 'chelovek', 'mir', 'dom', 'noch',
  'svet', 'gorod', 'put', 'mesto', 'rabota', 'drug', 'golos', 'zemlya', 'solntse', 'doroga',
  'serdtse', 'sila', 'dusha', 'delo', 'vopros', 'mysl', 'kniga', 'voda', 'ogon', 'pesnya'
];

export const MONKEYTYPE_ARABIC_200 = [
  'fi', 'min', 'ala', 'ila', 'an', 'ma', 'inna', 'la', 'hadha', 'alladhi',
  'kull', 'wa', 'kana', 'allati', 'laysa', 'huna', 'kayfa', 'mata', 'ayna', 'man',
  'yawm', 'kitab', 'qalam', 'nur', 'shams', 'qamar', 'sama', 'ard', 'bahr', 'nahr',
  'jabal', 'qalb', 'amal', 'salam', 'hayat', 'mawt', 'hubb', 'sadiq', 'bayt', 'madina',
  'zaman', 'fikr', 'amal', 'ilm', 'adab', 'hurriya', 'quwwa', 'shujaa', 'haqq', 'adala',
  'safina', 'najm', 'tarariq', 'suwar', 'sawti', 'riyada', 'haraka', 'sirr', 'dunya', 'watan'
];

export const MONKEYTYPE_CHINESE_200 = [
  'de', 'shi', 'wo', 'ni', 'ta', 'le', 'zai', 'you', 'ren', 'zhe',
  'bu', 'yi', 'da', 'zhong', 'guo', 'dao', 'shuo', 'men', 'ge', 'he',
  'hui', 'dui', 'sheng', 'zi', 'yao', 'zhe', 'qu', 'kan', 'lai', 'ye',
  'xia', 'shang', 'tian', 'di', 'ri', 'yue', 'xin', 'shui', 'huo', 'feng',
  'shi', 'jian', 'peng', 'you', 'jia', 'xue', 'xi', 'gong', 'zuo', 'kuai',
  'le', 'xi', 'wang', 'meng', 'xiang', 'li', 'liang', 'guang', 'ming', 'ai',
  'shu', 'hua', 'yin', 'yue', 'you', 'xi', 'su', 'du', 'ji', 'qiao', 'sheng'
];

export const MONKEYTYPE_ITALIAN_200 = [
  'di', 'e', 'il', 'la', 'che', 'in', 'un', 'per', 'una', 'non',
  'del', 'le', 'i', 'si', 'da', 'su', 'con', 'ha', 'ma', 'al',
  'come', 'piu', 'cosa', 'gli', 'anche', 'della', 'questo', 'o', 'sono', 'io',
  'qui', 'sei', 'loro', 'tutto', 'vita', 'mondo', 'tempo', 'bene', 'uomo', 'donna',
  'casa', 'giorno', 'notte', 'luce', 'occhio', 'mano', 'cuore', 'strada', 'amico', 'lavoro',
  'sole', 'mare', 'terra', 'cielo', 'parola', 'musica', 'gioco', 'veloce', 'forza', 'sogno'
];

export const MONKEYTYPE_KOREAN_200 = [
  'geu', 'i', 'jeo', 'na', 'neuk', 'uri', 'geudeul', 'sarang', 'maeum', 'gireum',
  'haneul', 'bada', 'namu', 'kkot', 'baram', 'bi', 'bit', 'bam', 'achim', 'sori',
  'son', 'nun', 'gwi', 'him', 'mal', 'chaek', 'norae', 'saek', 'il', 'sigan',
  'mirae', 'gwageo', 'haengbok', 'sarang', 'chingu', 'gajok', 'jip', 'gil', 'sesang', 'gukga',
  'sijak', 'kkeut', 'yeoljeong', 'sokdo', 'geim', 'gongbu', 'seonggong', 'huimang', 'pyeonghwa', 'jayu'
];

export const MONKEYTYPE_INDONESIAN_200 = [
  'yang', 'di', 'dan', 'ini', 'dari', 'untuk', 'pada', 'dengan', 'adalah', 'itu',
  'ke', 'bisa', 'ada', 'mereka', 'kita', 'saya', 'kamu', 'sudah', 'akan', 'tidak',
  'juga', 'oleh', 'hanya', 'saat', 'lebih', 'banyak', 'seperti', 'dalam', 'semua', 'hari',
  'waktu', 'hidup', 'dunia', 'rumah', 'jalan', 'orang', 'mata', 'hati', 'tangan', 'cahaya',
  'kata', 'buku', 'suara', 'kerja', 'teman', 'malam', 'pagi', 'cinta', 'langit', 'bumi',
  'air', 'api', 'angin', 'laut', 'gunung', 'bintang', 'bulan', 'matahari', 'kekuatan', 'semangat'
];

export const MONKEYTYPE_TURKISH_200 = [
  'bir', 've', 'bu', 'da', 'de', 'icin', 'ile', 'cok', 'daha', 'gibi',
  'en', 'kadar', 'var', 'yok', 'olan', 'ama', 'sonra', 'kendi', 'olarak', 'her',
  'o', 'ne', 'göre', 'ancak', 'ben', 'sen', 'biz', 'onlar', 'bunu', 'buna',
  'zaman', 'gun', 'insan', 'hayat', 'dunya', 'ev', 'yol', 'el', 'goz', 'kalp',
  'is', 'gece', 'isik', 'soz', 'kitap', 'ses', 'arkadas', 'sevgi', 'gok', 'yer',
  'su', 'ates', 'ruzgar', 'deniz', 'dag', 'yildiz', 'ay', 'gunes', 'guc', 'hiz'
];

export const MONKEYTYPE_VIETNAMESE_200 = [
  'va', 'cua', 'la', 'co', 'trong', 'nguoi', 'mot', 'cho', 'khong', 'duoc',
  'nay', 'voi', 've', 'cac', 'nhung', 'da', 'den', 'se', 'khi', 'nhu',
  'vao', 'ra', 'de', 'toi', 'ban', 'chung', 'anh', 'em', 'ngay', 'thoi',
  'gian', 'doi', 'the', 'gioi', 'nha', 'duong', 'mat', 'tim', 'tay', 'sang',
  'loi', 'sach', 'tieng', 'viec', 'ban', 'dem', 'sang', 'yeu', 'troi', 'dat',
  'nuoc', 'lua', 'gio', 'bien', 'nui', 'sao', 'trang', 'mat', 'troi', 'suc', 'manh'
];

export const MONKEYTYPE_BENGALI_200 = [
  'ebong', 'o', 'er', 'te', 'theke', 'kore', 'holo', 'ache', 'nei', 'ekti',
  'ei', 'sei', 'je', 'tara', 'amra', 'ami', 'tumi', 'apni', 'shob', 'din',
  'shomoy', 'jibon', 'prithibi', 'bari', 'rasta', 'manush', 'chokh', 'mon', 'haat', 'alo',
  'kotha', 'boi', 'shobdo', 'kaaj', 'bondhu', 'raat', 'sokal', 'valobasha', 'akash', 'mati',
  'jol', 'aagun', 'hawa', 'shagor', 'pahar', 'tara', 'chaad', 'shurjo', 'shokti', 'goti'
];

// --------------------------------------------------------------------------
// 2B. AUTHENTIC NATIVE SCRIPT WORD POOLS (Pure Script Collections)
// --------------------------------------------------------------------------
export const MONKEYTYPE_HINDI_DEVANAGARI_200 = [
  'और', 'है', 'की', 'के', 'का', 'में', 'को', 'से', 'यह', 'भी',
  'था', 'कुछ', 'नहीं', 'तो', 'पर', 'आप', 'हम', 'वह', 'कर', 'रहे',
  'क्या', 'अपने', 'साथ', 'बाद', 'होगा', 'लेकिन', 'सब', 'अगर', 'जब', 'फिर',
  'होता', 'पास', 'हमें', 'दिया', 'बात', 'लोग', 'लिए', 'अच्छा', 'पहला', 'समय',
  'दिन', 'नाम', 'कम', 'ज़्यादा', 'दुनिया', 'घर', 'काम', 'शुरू', 'बड़ा', 'छोटा',
  'देख', 'नया', 'पुराना', 'देश', 'शहर', 'प्यार', 'रास्ता', 'सोच', 'जीवन', 'दोस्त',
  'आज', 'कल', 'सुनो', 'पढ़ो', 'लिखो', 'सीखो', 'पानी', 'रोशनी', 'हवा', 'आग',
  'ज़मीन', 'आसमान', 'सूरज', 'चाँद', 'तारा', 'सच', 'झूठ', 'ख़ुशी', 'उम्मीद', 'सपना',
  'जीत', 'हार', 'कोशिश', 'हिम्मत', 'ताक़त', 'रंग', 'गाड़ी', 'किताब', 'कलम', 'आवाज़',
  'खेल', 'सफलता', 'मेहनत', 'विश्वास', 'शांति', 'सुंदर', 'नमस्ते', 'भारत', 'ज्ञान', 'सत्य'
];

export const MONKEYTYPE_JAPANESE_KANA_200 = [
  'の', 'に', 'は', 'を', 'た', 'が', 'で', 'て', 'と', 'し',
  'れ', 'さ', 'あ', 'る', 'く', 'い', 'う', 'そ', 'な', 'こ',
  'これ', 'それ', 'あれ', '私', 'あなた', 'ともだち', 'ひと', 'もの', 'こと', 'とき',
  'いま', 'きょう', 'あした', 'きのう', 'ひ', 'つき', 'とし', 'くに', 'まち', 'いえ',
  'みち', 'て', 'め', 'こころ', 'ことば', 'ほん', 'なまえ', 'みず', 'ひ', 'かぜ',
  'そら', 'やま', 'うみ', 'き', 'はな', 'ひかり', 'おと', 'ゆめ', 'あい', 'ちから',
  'せかい', 'みらい', 'へいわ', 'しあわせ', 'ゆうき', 'さくら', 'にほん', 'せんせい', 'がくせい', 'じかん',
  'こんにちは', 'ありがとう', 'さようなら', 'おはよう', 'すし', 'さむらい', 'かたな', 'とうきょう', 'ふじさん', 'きぼう'
];

export const MONKEYTYPE_RUSSIAN_CYRILLIC_200 = [
  'и', 'в', 'не', 'на', 'я', 'что', 'тот', 'быть', 'с', 'он',
  'а', 'по', 'это', 'она', 'этот', 'к', 'но', 'они', 'мы', 'как',
  'из', 'у', 'который', 'то', 'за', 'свой', 'что', 'весь', 'год', 'от',
  'так', 'о', 'для', 'ты', 'же', 'все', 'только', 'себя', 'один', 'еще',
  'бы', 'такой', 'только', 'день', 'рука', 'время', 'человек', 'дело', 'жизнь', 'глаз',
  'слово', 'место', 'друг', 'дом', 'мир', 'свет', 'ночь', 'земля', 'небо', 'солнце',
  'привет', 'спасибо', 'россия', 'работа', 'город', 'мысль', 'радость', 'успех', 'любовь', 'сила'
];

export const MONKEYTYPE_ARABIC_NATIVE_200 = [
  'في', 'من', 'عن', 'على', 'إلى', 'مع', 'هذا', 'هذه', 'كل', 'هو',
  'هي', 'أن', 'لا', 'ما', 'كان', 'يكون', 'الذي', 'التي', 'قال', 'يقول',
  'أنا', 'نحن', 'أنت', 'هم', 'حتى', 'إذا', 'لو', 'قد', 'ثم', 'أو',
  'يوم', 'سنة', 'وقت', 'حياة', 'إنسان', 'عالم', 'مكان', 'بيت', 'طريق', 'يد',
  'عين', 'قلب', 'كلمة', 'كتاب', 'صديق', 'نور', 'شمس', 'قمر', 'سماء', 'أرض',
  'مرحبا', 'شكرا', 'سلام', 'أمل', 'حب', 'نجاح', 'عمل', 'علم', 'قوة', 'جمال'
];

export const MONKEYTYPE_GERMAN_UMLAUTS_200 = [
  'schön', 'über', 'groß', 'mädchen', 'käfer', 'außerdem', 'für', 'möglich', 'körper', 'spät',
  'während', 'öffnen', 'drücken', 'verfügbar', 'schließlich', 'ändern', 'hören', 'wählen', 'schüler', 'größe',
  'nähe', 'glücklich', 'können', 'müssen', 'vollständig', 'erklären', 'qualität', 'übung', 'träger', 'lösung',
  'der', 'die', 'das', 'und', 'in', 'den', 'von', 'zu', 'mit', 'sich',
  'auf', 'für', 'ist', 'im', 'dem', 'nicht', 'ein', 'eine', 'als', 'auch',
  'es', 'an', 'werden', 'aus', 'er', 'hat', 'dass', 'sie', 'nach', 'wird'
];

export const MONKEYTYPE_BENGALI_NATIVE_200 = [
  'এবং', 'ও', 'এর', 'তে', 'থেকে', 'করে', 'হলো', 'আছে', 'নেই', 'একটি',
  'এই', 'সেই', 'যে', 'তারা', 'আমরা', 'আমি', 'তুমি', 'আপনি', 'সব', 'দিন',
  'সময়', 'জীবন', 'পৃথিবী', 'বাড়ি', 'রাস্তা', 'মানুষ', 'চোখ', 'মন', 'হাত', 'আলো',
  'কথা', 'বই', 'শব্দ', 'কাজ', 'বন্ধু', 'রাত', 'সকাল', 'ভালোবাসা', 'আকাশ', 'মাটি',
  'জল', 'আগুন', 'হাওয়া', 'সাগর', 'পাহাড়', 'তারা', 'চাঁদ', 'সূর্য', 'শক্তি', 'গতি'
];

export const MONKEYTYPE_CHINESE_HANZI_200 = [
  '的', '一', '是', '在', '不', '了', '有', '和', '人', '这',
  '中', '大', '为', '上', '个', '国', '我', '以', '要', '他',
  '时', '来', '用', '生', '到', '作', '地', '于', '出', '就',
  '分', '对', '成', '会', '可', '主', '发', '年', '动', '同',
  '能', '下', '过', '子', '说', '产', '种', '面', '而', '方',
  '后', '多', '定', '行', '学', '法', '所', '民', '得', '经',
  '三', '之', '进', '着', '等', '部', '度', '家', '电', '力',
  '水', '化', '高', '自', '二', '理', '起', '小', '物', '现',
  '量', '都', '两', '体', '机', '当', '使', '点', '从', '业',
  '你好', '世界', '中国', '朋友', '快乐', '希望', '梦想', '光明', '成功', '和平'
];

export const MONKEYTYPE_KOREAN_HANGUL_200 = [
  '그', '이', '저', '나', '우리', '사람', '때', '일', '말', '사회',
  '문제', '문화', '집', '눈', '마음', '생각', '시간', '손', '속', '곳',
  '물', '앞', '길', '소리', '나라', '몸', '얼굴', '어머니', '여자', '머리',
  '아이', '이야기', '태양', '달', '별', '바다', '하늘', '사랑', '친구', '행복',
  '가족', '인생', '꿈', '희망', '빛', '바람', '불', '비', '밤', '아침',
  '나무', '꽃', '음악', '책', '세계', '평화', '자유', '열정', '성공', '노력',
  '안녕하세요', '감사합니다', '한국어', '한국', '승리', '희망', '청춘', '미래', '우정', '감동'
];

export const MONKEYTYPE_SPANISH_NATIVE_200 = [
  'de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'se', 'del',
  'las', 'un', 'por', 'con', 'no', 'una', 'su', 'para', 'es', 'al',
  'lo', 'como', 'más', 'pero', 'sus', 'le', 'ya', 'o', 'este', 'sí',
  'porque', 'está', 'son', 'entre', 'cuando', 'muy', 'sin', 'sobre', 'ser', 'tiene',
  'también', 'me', 'hasta', 'hay', 'dónde', 'quién', 'desde', 'todo', 'nos', 'durante',
  'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante', 'ellos',
  'año', 'niño', 'día', 'vida', 'mundo', 'casa', 'hombre', 'mujer', 'trabajo', 'luz',
  'mano', 'fuerza', 'camino', 'español', 'corazón', 'adiós', 'hola', 'éxito', 'sueño', 'tiempo',
  'país', 'ciudad', 'mañana', 'canción', 'árbol', 'música', 'esperanza', 'libertad', 'alegría', 'pasión'
];

export const MONKEYTYPE_FRENCH_NATIVE_200 = [
  'de', 'la', 'le', 'et', 'les', 'des', 'en', 'un', 'du', 'une',
  'que', 'est', 'pour', 'qui', 'dans', 'à', 'par', 'sur', 'au', 'plus',
  'ne', 'pas', 'avec', 'ce', 'son', 'se', 'aux', 'ses', 'ou', 'il',
  'sa', 'nous', 'comme', 'mais', 'ils', 'tout', 'on', 'leur', 'bien', 'fait',
  'sans', 'peut', 'faire', 'cette', 'aussi', 'si', 'temps', 'deux', 'autre', 'après',
  'même', 'encore', 'entre', 'mon', 'tous', 'premier', 'dire', 'sous', 'vers', 'monde',
  'notre', 'pendant', 'donc', 'vie', 'jour', 'homme', 'femme', 'enfant', 'grand', 'lieu',
  'petit', 'voir', 'savoir', 'pouvoir', 'vouloir', 'français', 'cœur', 'être', 'très', 'où',
  'déjà', 'grâce', 'liberté', 'égalité', 'fraternité', 'rêve', 'lumière', 'succès', 'espoir', 'vérité'
];

export const MONKEYTYPE_PORTUGUESE_NATIVE_200 = [
  'de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para',
  'com', 'não', 'uma', 'os', 'no', 'se', 'na', 'por', 'mais', 'as',
  'dos', 'como', 'mas', 'foi', 'ao', 'ele', 'das', 'tem', 'à', 'seu',
  'sua', 'ou', 'quando', 'muito', 'nós', 'já', 'eu', 'também', 'só', 'pelo',
  'pela', 'até', 'isso', 'ela', 'entre', 'depois', 'sem', 'mesmo', 'aos', 'seus',
  'quem', 'me', 'esse', 'eles', 'você', 'essa', 'num', 'nem', 'suas', 'meu',
  'minha', 'numa', 'tempo', 'vida', 'mundo', 'dia', 'homem', 'mulher', 'trabalho', 'mão',
  'luz', 'força', 'caminho', 'cidade', 'casa', 'noite', 'amor', 'olho', 'palavra', 'coração',
  'português', 'irmão', 'nação', 'país', 'visão', 'razão', 'emoção', 'esperança', 'vitória', 'canção'
];

export const MONKEYTYPE_TURKISH_NATIVE_200 = [
  'bir', 've', 'bu', 'da', 'de', 'için', 'ile', 'çok', 'daha', 'gibi',
  'en', 'kadar', 'var', 'yok', 'olan', 'ama', 'sonra', 'kendi', 'olarak', 'her',
  'o', 'ne', 'göre', 'ancak', 'ben', 'sen', 'biz', 'onlar', 'bunu', 'buna',
  'zaman', 'gün', 'insan', 'hayat', 'dünya', 'ev', 'yol', 'el', 'göz', 'kalp',
  'iş', 'gece', 'ışık', 'söz', 'kitap', 'ses', 'arkadaş', 'sevgi', 'gök', 'yer',
  'su', 'ateş', 'rüzgar', 'deniz', 'dağ', 'yıldız', 'ay', 'güneş', 'güç', 'hız',
  'türkçe', 'yaşam', 'özgürlük', 'başarı', 'umut', 'barış', 'mutluluk', 'güzel', 'öğrenci', 'bilgi'
];

export const MONKEYTYPE_VIETNAMESE_NATIVE_200 = [
  'và', 'của', 'là', 'có', 'trong', 'người', 'một', 'cho', 'không', 'được',
  'này', 'với', 'về', 'các', 'những', 'đã', 'đến', 'sẽ', 'khi', 'như',
  'vào', 'ra', 'để', 'tôi', 'bạn', 'chúng', 'anh', 'em', 'ngày', 'thời',
  'gian', 'đời', 'thế', 'giới', 'nhà', 'đường', 'mắt', 'tim', 'tay', 'sáng',
  'lời', 'sách', 'tiếng', 'việc', 'đêm', 'yêu', 'trời', 'đất', 'nước', 'lửa',
  'gió', 'biển', 'núi', 'sao', 'trăng', 'mặt', 'sức', 'mạnh', 'Việt', 'Nam',
  'hạnh', 'phúc', 'tự', 'do', 'hòa', 'bình', 'thành', 'công', 'ước', 'mơ'
];

export const MONKEYTYPE_ITALIAN_NATIVE_200 = [
  'di', 'e', 'il', 'la', 'che', 'in', 'un', 'per', 'una', 'non',
  'del', 'le', 'i', 'si', 'da', 'su', 'con', 'ha', 'ma', 'al',
  'come', 'più', 'cosa', 'gli', 'anche', 'della', 'questo', 'o', 'sono', 'io',
  'qui', 'sei', 'loro', 'tutto', 'vita', 'mondo', 'tempo', 'bene', 'uomo', 'donna',
  'casa', 'giorno', 'notte', 'luce', 'occhio', 'mano', 'cuore', 'strada', 'amico', 'lavoro',
  'sole', 'mare', 'terra', 'cielo', 'parola', 'musica', 'gioco', 'veloce', 'forza', 'sogno',
  'città', 'perché', 'così', 'già', 'verità', 'libertà', 'felicità', 'passione', 'vittoria', 'speranza'
];

// --------------------------------------------------------------------------
// 3. THEMED GAME WORD DICTIONARIES (For all 21 games)
// --------------------------------------------------------------------------
export interface GameWordCollections {
  easy: string[];
  medium: string[];
  hard: string[];
  space: string[];
  cyber: string[];
  fantasy: string[];
  combat: string[];
}

export const LOCALIZED_GAME_WORDS: Record<string, Partial<GameWordCollections>> = {
  en: {
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
    ]
  },
  hi: {
    easy: ['आग', 'दिन', 'मन', 'घर', 'सच', 'नाम', 'काम', 'हवा', 'जीत', 'हार', 'सब', 'हम', 'आप', 'वह', 'यह', 'भी', 'तो', 'जब', 'है', 'था'],
    medium: ['सूरज', 'चाँद', 'तारा', 'प्यार', 'दुनिया', 'रास्ता', 'शांति', 'सुंदर', 'भारत', 'सत्य', 'समय', 'लोग', 'पहला', 'सपना', 'किताब', 'दोस्त', 'पानी', 'जीवन', 'कोशिश', 'हिम्मत'],
    hard: ['सफलता', 'विश्वास', 'नमस्ते', 'ज्ञान', 'मेहनत', 'अंतरिक्ष', 'युद्धक्षेत्र', 'विजयश्री', 'सर्वश्रेष्ठ', 'परिवर्तन', 'शक्ति'],
    space: ['अंतरिक्ष', 'ग्रह', 'सितारा', 'सूरज', 'चंद्रमा', 'छायापथ', 'गुरुत्व', 'ब्रह्मांड', 'उल्का', 'आकाश', 'धूमकेतु', 'कक्षा'],
    cyber: ['सूचना', 'यंत्र', 'तरंग', 'सुरक्षा', 'संगणक', 'जाल', 'कुंजी', 'संकेत', 'प्रणाली', 'डेटा', 'प्रक्रिया', 'कोड'],
    fantasy: ['तलवार', 'मायावी', 'योद्धा', 'जादूगर', 'मंदिर', 'मंत्र', 'सम्राट', 'रक्षक', 'दानव', 'किरण', 'अमृत', 'शक्ति'],
    combat: ['आक्रमण', 'रक्षा', 'मुक्का', 'प्रहार', 'वीर', 'संघर्ष', 'विजय', 'लड़ाई', 'शत्रु', 'ढाल', 'तीर', 'कवच']
  },
  es: {
    easy: ['luz', 'sol', 'mar', 'paz', 'ojo', 'vida', 'cielo', 'mano', 'fuego', 'aire', 'día', 'año', 'más', 'bien', 'uno', 'casa'],
    medium: ['tiempo', 'camino', 'fuerza', 'cabeza', 'palabra', 'destino', 'sombra', 'estrella', 'espacio', 'éxito', 'sueño', 'árbol', 'música', 'esperanza', 'alegría', 'pasión', 'corazón', 'ciudad', 'mañana'],
    hard: ['extraordinario', 'revolucionario', 'transformación', 'resurrección', 'intergaláctico', 'incomparable', 'maravilloso', 'indestructible'],
    space: ['galaxia', 'cometa', 'asteroide', 'órbita', 'gravedad', 'planeta', 'estrella', 'cosmos', 'universo', 'nebulosa', 'satélite'],
    cyber: ['código', 'red', 'servidor', 'algoritmo', 'binario', 'archivo', 'memoria', 'sistema', 'seguridad', 'enlace', 'pantalla'],
    fantasy: ['dragón', 'espada', 'magia', 'hechizo', 'castillo', 'reino', 'oráculo', 'poción', 'leyenda', 'místico', 'caballero'],
    combat: ['ataque', 'defensa', 'guerrero', 'escudo', 'victoria', 'combate', 'furia', 'golpe', 'batalla', 'triunfo', 'armadura']
  },
  fr: {
    easy: ['feu', 'eau', 'ciel', 'jour', 'nuit', 'main', 'yeux', 'vent', 'âme', 'paix', 'mot', 'vie', 'voie', 'deux', 'temps'],
    medium: ['étoile', 'chemin', 'soleil', 'espace', 'ombre', 'monde', 'lumière', 'destin', 'victoire', 'cœur', 'rêve', 'liberté', 'vérité', 'espoir', 'succès', 'enfant', 'maison'],
    hard: ['extraordinaire', 'incommensurable', 'désintégration', 'métamorphose', 'ininterrompu', 'reconnaissance', 'transformation', 'indestructible'],
    space: ['galaxie', 'orbite', 'étoile', 'comète', 'planète', 'univers', 'pesanteur', 'vortex', 'cosmos', 'nébuleuse', 'astéroïde'],
    cyber: ['réseau', 'serveur', 'données', 'fichier', 'mémoire', 'système', 'algorithme', 'code', 'sécurité', 'flux', 'programme'],
    fantasy: ['dragon', 'épée', 'magie', 'château', 'sorcier', 'royaume', 'potion', 'grimoire', 'légende', 'mystique', 'chevalier'],
    combat: ['attaque', 'défense', 'guerrier', 'bouclier', 'victoire', 'combat', 'fureur', 'frappe', 'bataille', 'assaut', 'armure']
  },
  de: {
    easy: ['tag', 'mut', 'weg', 'arm', 'see', 'hut', 'gut', 'neu', 'alt', 'rot', 'zeit', 'raum', 'kraft', 'lied', 'mond', 'erde'],
    medium: ['sonne', 'stern', 'feuer', 'wasser', 'licht', 'schatten', 'schön', 'groß', 'käfer', 'glücklich', 'könig', 'wahrheit', 'freiheit', 'zukunft', 'leben', 'traum'],
    hard: ['geschicklichkeit', 'geschwindigkeitsrausch', 'unbesiegbarkeit', 'weltraumabenteuer', 'übermenschlich', 'herausforderung', 'unerschütterlich'],
    space: ['galaxie', 'kosmos', 'schwerkraft', 'asteroid', 'komet', 'planet', 'sternenstaub', 'raumschiff', 'orbit', 'schwarzloch', 'sonnensystem'],
    cyber: ['speicher', 'rechner', 'datenstrom', 'algorithmus', 'prozessor', 'netzwerk', 'code', 'sicherheit', 'datei', 'schnittstelle', 'system'],
    fantasy: ['drache', 'schwert', 'zauberer', 'schloss', 'legende', 'ritter', 'magie', 'elixier', 'zauberspruch', 'kristall', 'abenteuer'],
    combat: ['angriff', 'deckung', 'krieger', 'schild', 'triumph', 'kämpfer', 'faust', 'schlacht', 'schlag', 'verteidigung', 'rüstung']
  },
  ru: {
    easy: ['мир', 'дом', 'свет', 'ночь', 'день', 'рука', 'небо', 'вода', 'друг', 'дело', 'сила', 'глаз', 'ветер', 'песня', 'год'],
    medium: ['город', 'земля', 'солнце', 'время', 'человек', 'жизнь', 'слово', 'место', 'привет', 'спасибо', 'радость', 'успех', 'любовь', 'дорога', 'голос', 'правда'],
    hard: ['путешествие', 'великолепный', 'непобедимый', 'освобождение', 'стремительный', 'бесконечность', 'пространство', 'преображение'],
    space: ['космос', 'галактика', 'орбита', 'звезда', 'планета', 'комета', 'астероид', 'вселенная', 'ракета', 'спутник', 'невесомость'],
    cyber: ['код', 'данные', 'сервер', 'сеть', 'память', 'система', 'файл', 'поток', 'алгоритм', 'защита', 'программа', 'интернет'],
    fantasy: ['дракон', 'меч', 'магия', 'замок', 'рыцарь', 'легенда', 'колдун', 'кристалл', 'заклинание', 'зелье', 'королевство'],
    combat: ['атака', 'защита', 'воин', 'щит', 'победа', 'битва', 'удар', 'ярость', 'сражение', 'крепость', 'доспехи']
  },
  ar: {
    easy: ['سلام', 'بيت', 'باب', 'شمس', 'نور', 'يوم', 'قمر', 'أمل', 'ماء', 'أرض', 'روح', 'حب', 'علم', 'خير', 'عين', 'يد'],
    medium: ['طريق', 'كلمة', 'صديق', 'كتاب', 'مدينة', 'حياة', 'قوة', 'جمال', 'زمان', 'عمل', 'نجاح', 'مرحبا', 'شكرا', 'فجر', 'صوت', 'سماء'],
    hard: ['المستقبل', 'الانتصار', 'الشجاعة', 'المغامرة', 'التحدي', 'اللانهاية', 'الإبداع', 'المعرفة'],
    space: ['فضاء', 'مجرة', 'مدار', 'كوكب', 'نجم', 'نيزك', 'سماء', 'كون', 'قمر', 'صاروخ', 'مذنبات'],
    cyber: ['بيانات', 'خادم', 'شبكة', 'ملف', 'ذاكرة', 'نظام', 'شفرة', 'أمان', 'حاسوب', 'معلومات', 'برمجة'],
    fantasy: ['تنين', 'سيف', 'سحر', 'قلعة', 'فارس', 'أسطورة', 'بلورة', 'تعويذة', 'مملكة', 'عجائب', 'تاج'],
    combat: ['هجوم', 'دفاع', 'محارب', 'درع', 'نصر', 'معركة', 'ضربة', 'شجاعة', 'غضب', 'صمود', 'فرسان']
  },
  ja: {
    easy: ['ひ', 'き', 'て', 'め', 'はな', 'かぜ', 'あめ', 'そら', 'うみ', 'やま', 'みず', 'おと', 'ゆめ', 'あい', 'くに', 'いえ'],
    medium: ['ひかり', 'こころ', 'つるぎ', 'かたな', 'せんし', 'まほう', 'せかい', 'ちから', 'さくら', 'みらい', 'へいわ', 'しあわせ', 'ゆうき', 'ともだち', 'じかん'],
    hard: ['とうきょう', 'しんかんせん', 'ふじさん', 'むげんじょう', 'きぼう', 'ありがとう', 'しょうり', 'だいぼうけん'],
    space: ['ぎんが', 'わくせい', 'うちゅう', 'りゅうせい', 'こうせい', 'たいよう', 'つき', 'じゅうりょく', 'ほし', 'ロケット'],
    cyber: ['でんし', 'データ', 'コード', 'かいろ', 'けいさん', 'きおく', 'ネット', 'システム', 'プログラム'],
    fantasy: ['ドラゴン', 'かたな', 'ニンジャ', 'サムライ', 'まほうつかい', 'ゆうしゃ', 'でんせつ', 'クリスタル'],
    combat: ['こうげき', 'ぼうぎょ', 'しょうしゃ', 'たたかい', 'せんし', 'げきとつ', 'しょうり', 'いあいぎり']
  },
  bn: {
    easy: ['কথা', 'বই', 'কাজ', 'রাত', 'পথ', 'গান', 'বাড়ি', 'দিন', 'ঘর', 'আলো', 'জল', 'মাটি', 'ফুল', 'মন', 'হাত'],
    medium: ['জীবন', 'দেশ', 'নদী', 'সকাল', 'মেঘ', 'বায়ু', 'ছবি', 'খবর', 'বন্ধু', 'আকাশ', 'চাঁদ', 'সূর্য', 'শক্তি', 'গতি', 'ভালোবাসা'],
    hard: ['স্বাধীনতা', 'মাতৃভাষা', 'ঐতিহাসিক', 'শক্তিশালী', 'প্রজাপতি', 'আলোকিত', 'সাহসী'],
    space: ['মহাকাশ', 'গ্রহ', 'নক্ষত্র', 'ছায়াপথ', 'সূর্য', 'চাঁদ', 'মহাবিশ্ব', 'ধূমকেতু', 'কক্ষপথ', 'রকেট'],
    cyber: ['তথ্য', 'যন্ত্র', 'নেটওয়ার্ক', 'সুরক্ষা', 'স্মৃতি', 'কম্পিউটার', 'ফাইল', 'সংকেত', 'প্রোগ্রাম'],
    fantasy: ['তলোয়ার', 'যোদ্ধা', 'জাদুকর', 'রাজপ্রাসাদ', 'মন্ত্র', 'সম্রাট', 'ড্রাগন', 'মায়া', 'রত্ন'],
    combat: ['আক্রমণ', 'সুরক্ষা', 'মুষ্টি', 'প্রহার', 'বীর', 'সংগ্রাম', 'জয়', 'লড়াই', 'ঢাল', 'তীর']
  },
  ko: {
    easy: ['사람', '마음', '나라', '하늘', '소리', '아이', '하루', '사랑', '바다', '시간', '태양', '달', '별', '물', '빛', '바람'],
    medium: ['인생', '희망', '생각', '세상', '미래', '우정', '열정', '성공', '기쁨', '음악', '한국', '친구', '행복', '가족', '자유', '평화'],
    hard: ['안녕하세요', '감사합니다', '대한민국', '아름다운', '도전정신', '무한도전', '승리자'],
    space: ['우주', '은하', '행성', '궤도', '별빛', '혜성', '태양계', '위성', '로켓', '성운'],
    cyber: ['데이터', '서버', '네트워크', '시스템', '파일', '메모리', '보안', '코드', '알고리즘'],
    fantasy: ['드래곤', '검객', '마법', '성채', '기사', '전설', '마법사', '물약', '크리스탈'],
    combat: ['공격', '방어', '전사', '방패', '승리', '전투', '타격', '용기', '결투']
  },
  zh: {
    easy: ['我的', '我们', '中文', '天地', '世界', '朋友', '太阳', '月亮', '星星', '水火', '风云', '大地', '光明', '和平', '今天'],
    medium: ['快乐', '希望', '梦想', '成功', '美好', '勇敢', '热情', '力量', '飞翔', '未来', '中国', '自然', '音乐', '生活', '星空'],
    hard: ['不可思议', '无坚不摧', '超越自我', '欢聚一堂', '全力以赴', '自强不息'],
    space: ['宇宙', '银河', '行星', '轨道', '卫星', '流星', '星云', '引力', '飞船', '恒星'],
    cyber: ['数据', '网络', '系统', '代码', '程序', '算法', '内存', '芯片', '安全', '信息'],
    fantasy: ['巨龙', '宝剑', '魔法', '城堡', '骑士', '传奇', '法师', '秘境', '神话'],
    combat: ['进攻', '防御', '勇士', '盾牌', '胜利', '战斗', '冲锋', '荣耀', '决斗']
  },
  pt: {
    easy: ['luz', 'mar', 'paz', 'vida', 'céu', 'mão', 'fogo', 'vento', 'dia', 'noite', 'amor', 'sol', 'terra', 'água'],
    medium: ['tempo', 'caminho', 'força', 'palavra', 'destino', 'sombra', 'estrela', 'espaço', 'coração', 'alegria', 'paixão', 'mundo', 'amigo', 'cidade', 'vitória', 'sonho'],
    hard: ['extraordinário', 'revolucionário', 'transformação', 'desenvolvimento', 'maravilhoso', 'indestrutível'],
    space: ['galáxia', 'cometa', 'asteroide', 'órbita', 'gravidade', 'planeta', 'estrela', 'universo', 'cosmos', 'satélite'],
    cyber: ['código', 'rede', 'servidor', 'algoritmo', 'arquivo', 'memória', 'sistema', 'segurança', 'computador'],
    fantasy: ['dragão', 'espada', 'magia', 'feitiço', 'castelo', 'reino', 'poção', 'lenda', 'cavaleiro'],
    combat: ['ataque', 'defesa', 'guerreiro', 'escudo', 'vitória', 'combate', 'fúria', 'batalha', 'golpe']
  },
  it: {
    easy: ['luce', 'sole', 'mare', 'pace', 'vita', 'cielo', 'mano', 'fuoco', 'aria', 'notte', 'cuore', 'casa', 'tempo'],
    medium: ['cammino', 'forza', 'parola', 'destino', 'ombra', 'stella', 'spazio', 'mondo', 'sogno', 'amico', 'città', 'verità', 'libertà', 'vittoria', 'musica'],
    hard: ['straordinario', 'rivoluzionario', 'trasformazione', 'intergalattico', 'indistruttibile', 'meraviglioso'],
    space: ['galassia', 'cometa', 'asteroide', 'orbita', 'gravità', 'pianeta', 'universo', 'stella', 'cosmo'],
    cyber: ['codice', 'rete', 'server', 'algoritmo', 'file', 'memoria', 'sistema', 'sicurezza', 'dati'],
    fantasy: ['drago', 'spada', 'magia', 'castello', 'cavaliere', 'leggenda', 'pozione', 'regno', 'mago'],
    combat: ['attacco', 'difesa', 'guerriero', 'scudo', 'vittoria', 'combattimento', 'furia', 'colpo', 'battaglia']
  },
  tr: {
    easy: ['su', 'gök', 'ay', 'yol', 'el', 'göz', 'ses', 'gün', 'can', 'aşk', 'ışık', 'kuş', 'dağ', 'ev'],
    medium: ['zaman', 'yıldız', 'dünya', 'kuvvet', 'hayat', 'barış', 'rüya', 'kitap', 'deniz', 'güneş', 'yürek', 'dost', 'özgürlük', 'başarı', 'umut'],
    hard: ['olağanüstü', 'özgürleştiren', 'dayanıklılık', 'hızlıyazma', 'yenilmezlik', 'kahramanlık'],
    space: ['galaksi', 'kuyrukluyıldız', 'yörünge', 'yerçekimi', 'gezegen', 'evren', 'yıldız', 'roket', 'uzay'],
    cyber: ['kod', 'ağ', 'sunucu', 'algoritma', 'dosya', 'hafıza', 'sistem', 'güvenlik', 'bilgisayar'],
    fantasy: ['ejderha', 'kılıç', 'büyü', 'kale', 'şövalye', 'efsane', 'iksir', 'krallık', 'sihirbaz'],
    combat: ['saldırı', 'savunma', 'savaşçı', 'kalkan', 'zafer', 'dövüş', 'öfke', 'vuruş', 'meydan']
  },
  vi: {
    easy: ['nước', 'trời', 'mây', 'gió', 'lửa', 'đất', 'ngày', 'đêm', 'người', 'bạn', 'hoa', 'sao', 'mắt', 'tim', 'sáng'],
    medium: ['thời gian', 'sáng ngời', 'cuộc đời', 'vui vẻ', 'yêu thương', 'biển cả', 'tâm hồn', 'ánh sáng', 'hạnh phúc', 'tự do', 'hòa bình', 'thành công'],
    hard: ['phi thường', 'cách mạng', 'chuyển hóa', 'bất khả chiến bại', 'tuyệt vời', 'dũng cảm'],
    space: ['thiên hà', 'sao chổi', 'tiểu hành tinh', 'quỹ đạo', 'trọng lực', 'hành tinh', 'vũ trụ', 'phi thuyền'],
    cyber: ['mã hóa', 'mạng', 'máy chủ', 'thuật toán', 'tập tin', 'bộ nhớ', 'hệ thống', 'bảo mật', 'dữ liệu'],
    fantasy: ['rồng thần', 'thanh kiếm', 'phép thuật', 'lâu đài', 'hiệp sĩ', 'huyền thoại', 'tiên dược', 'vương quốc'],
    combat: ['tấn công', 'phòng thủ', 'chiến binh', 'khiên', 'chiến thắng', 'giao chiến', 'nộ khí', 'quyết đấu']
  },
  id: {
    easy: ['air', 'api', 'angin', 'bumi', 'hari', 'malam', 'mata', 'tangan', 'jiwa', 'damai', 'laut', 'buku', 'hati'],
    medium: ['waktu', 'jalan', 'kekuatan', 'bintang', 'dunia', 'cahaya', 'hidup', 'mimpi', 'sahabat', 'semangat', 'senang', 'berani', 'negeri'],
    hard: ['luarbiasa', 'pemberdayaan', 'transformasi', 'kegigihan', 'petualangan', 'kemenangan'],
    space: ['galaksi', 'komet', 'asteroid', 'orbit', 'gravitasi', 'planet', 'alamsemesta', 'bintang', 'roket'],
    cyber: ['kode', 'jaringan', 'server', 'algoritma', 'berkas', 'memori', 'sistem', 'keamanan', 'program'],
    fantasy: ['naga', 'pedang', 'sihir', 'istana', 'ksatria', 'legenda', 'ramuan', 'kerajaan', 'penyihir'],
    combat: ['serangan', 'bertahan', 'pendekar', 'perisai', 'kejayaan', 'pertempuran', 'kemarahan', 'juara']
  }
};

export const PANGRAMS_LIST = [
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
];

export const PRACTICE_DRILLS = {
  homeRow: ['asdf', 'jkl;', 'fjdk', 'slal', 'skal', 'fad', 'lad', 'ask', 'fall', 'flask', 'salad', 'flash', 'slash', 'glad', 'half', 'dash', 'alas', 'fads', 'salsa', 'alfalfa'],
  topRow: ['qwer', 'tyui', 'op', 'qetu', 'wryo', 'type', 'write', 'power', 'quiet', 'tower', 'report', 'require', 'poetry', 'pretty', 'equity', 'proper', 'purity', 'territory', 'utility', 'quote'],
  bottomRow: ['zxcv', 'bnm,', 'zcb', 'xvm', 'zoom', 'cave', 'bone', 'menu', 'zone', 'vixen', 'beacon', 'zenith', 'carbon', 'maximum', 'vocal', 'breeze', 'bronze', 'matrix', 'civil', 'cabin'],
  numberRow: ['1234', '5678', '9012', '1984', '2026', '3.1415', '42', '100%', '#404', '8080', '99.99$', '50-50', '2+2=4', '10*10=100', '192.168.1.1', '256000'],
  symbols: ['()=>{}', '[]', '<>', '!==', '&&', '||', '$', '@', '#', '%', '^', '*', '+', '=', '~/;', 'console.log("ok");', 'const [a, b] = [1, 2];', '<div class="app" />'],
  pangrams: PANGRAMS_LIST,
  ngrams: ['th', 'he', 'in', 'er', 'an', 're', 'ed', 'on', 'es', 'st', 'en', 'at', 'to', 'nt', 'ha', 'nd', 'ou', 'ea', 'ng', 'as', 'or', 'ti', 'is', 'et', 'it', 'ar', 'te', 'se', 'hi', 'of'],
  pinkyDrills: ['aqua', 'quiz', 'paza', 'apex', 'zero', 'lazy', 'zaps', 'quip', 'park', 'past', 'plus', 'plan', 'post', 'path', 'page'],
  ringDrills: ['slow', 'work', 'soul', 'walk', 'silk', 'look', 'solo', 'wall', 'wool', 'laws', 'lows', 'wolf', 'word', 'wood', 'wild'],
  middleDrills: ['deck', 'dive', 'edit', 'cite', 'kite', 'kick', 'like', 'dice', 'cake', 'mile', 'idea', 'epic', 'item', 'time', 'date'],
  indexDrills: ['turn', 'burn', 'from', 'hero', 'jump', 'grab', 'hunt', 'farm', 'yard', 'vibe', 'next', 'math', 'road', 'huge', 'ring'],
  thumbDrills: ['a', 'the', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this']
};

export const LOCALIZED_PRACTICE_DRILLS: Record<string, Partial<typeof PRACTICE_DRILLS>> = {
  hi: {
    homeRow: ['कर', 'पर', 'रख', 'कल', 'तक', 'चलो', 'पाप', 'रात', 'कहा', 'रहना', 'कितना', 'समय', 'लोग', 'पहला', 'काम'],
    topRow: ['बात', 'दिन', 'घर', 'गाना', 'बाद', 'होगा', 'बहुत', 'देना', 'जाना', 'दुनिया', 'बड़ा', 'देख', 'नया', 'जीवन'],
    bottomRow: ['मन', 'सच', 'वन', 'समय', 'सब', 'सोच', 'यही', 'शान', 'सेवा', 'नाम', 'कम', 'प्यार', 'दोस्त', 'पानी'],
    numberRow: ['१२३४', '५६७८', '२०२६', '१००%', '५०-५०', '१', '२', '३', '४', '५', '६', '७', '८', '९', '०'],
    ngrams: ['कर', 'पर', 'सब', 'मन', 'घर', 'दिन', 'बात', 'सच', 'हम', 'तुम', 'आप', 'वह', 'यह', 'भी', 'तो', 'जब', 'है', 'था'],
    pangrams: ['ऋषि ज्ञान से मनुष्य का जीवन सुंदर और सफल बनता है।', 'सत्य और अहिंसा ही सबसे बड़ा धर्म और शक्ति है।']
  },
  ru: {
    homeRow: ['вода', 'дом', 'пора', 'дело', 'слово', 'друг', 'поле', 'дорога', 'голос', 'пожар', 'правда', 'город'],
    topRow: ['утро', 'город', 'день', 'рука', 'небо', 'песня', 'ветер', 'туча', 'берег', 'вечер', 'гроза', 'порог'],
    bottomRow: ['мир', 'свет', 'ночь', 'время', 'мысль', 'сила', 'земля', 'семья', 'число', 'месяц', 'зима', 'весна'],
    numberRow: ['1234', '5678', '1984', '2026', '100%', '50/50'],
    ngrams: ['ст', 'но', 'то', 'на', 'ен', 'ов', 'ни', 'ра', 'во', 'ко', 'ро', 'по', 'ал', 'пр', 'ос'],
    pangrams: ['Съешь же ещё этих мягких французских булок, да выпей чаю.', 'Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства.']
  },
  ja: {
    homeRow: ['ひと', 'こころ', 'はな', 'みち', 'て', 'め', 'ことば', 'ほん', 'なまえ', 'みず', 'ひ', 'かぜ'],
    topRow: ['いま', 'せかい', 'みらい', 'つき', 'くに', 'まち', 'いえ', 'そら', 'やま', 'うみ', 'き', 'ゆめ'],
    bottomRow: ['そら', 'ゆめ', 'あい', 'ちから', 'へいわ', 'しあわせ', 'ゆうき', 'さくら', 'にほん', 'せんせい'],
    numberRow: ['1234', '5678', '2026', '100%', '一二三四', '五六七八'],
    ngrams: ['の', 'に', 'は', 'を', 'た', 'が', 'で', 'て', 'と', 'し', 'れ', 'さ', 'あ', 'る', 'く', 'い'],
    pangrams: ['いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせす']
  },
  ar: {
    homeRow: ['سلام', 'بيت', 'باب', 'كتاب', 'سنة', 'بنت', 'شمس', 'طريق', 'كلمة', 'صديق', 'مكتب', 'نهر'],
    topRow: ['يوم', 'عالم', 'عين', 'حياة', 'قوة', 'خير', 'حديث', 'فجر', 'حق', 'صوت', 'جمال', 'علم'],
    bottomRow: ['نور', 'قمر', 'أمل', 'عمل', 'أرض', 'ماء', 'زمن', 'وطن', 'ورد', 'سرور', 'ذهب', 'روح'],
    numberRow: ['١٢٣٤', '٥٦٧٨', '٢٠٢٦', '١٠٠٪', '1234', '5678'],
    ngrams: ['في', 'من', 'عن', 'على', 'إلى', 'مع', 'كل', 'هو', 'هي', 'أن', 'لا', 'ما', 'كان', 'ثم', 'أو'],
    pangrams: ['نص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومطرز بالذهب.']
  },
  ko: {
    homeRow: ['사람', '마음', '나라', '하늘', '소리', '아이', '어머니', '얼굴', '이야기', '하루', '사랑', '행복'],
    topRow: ['인생', '희망', '바다', '생각', '시간', '태양', '세상', '미래', '우정', '열정', '성공', '기쁨'],
    bottomRow: ['음악', '한국', '친구', '사랑', '행복', '가족', '자유', '평화', '승리', '도전', '청춘', '감동'],
    numberRow: ['1234', '5678', '2026', '100%', '일이삼사', '오육칠팔'],
    ngrams: ['그', '이', '저', '나', '우리', '때', '일', '말', '집', '눈', '손', '물', '앞', '길', '몸'],
    pangrams: ['키스의 고유조건은 입술끼리 만나야 하고 특별한 기술은 필요치 않다.']
  },
  bn: {
    homeRow: ['কথা', 'বই', 'কাজ', 'রাত', 'পথ', 'পর', 'কর', 'তার', 'হাত', 'গান', 'কাল', 'মন'],
    topRow: ['বাড়ি', 'গান', 'দিন', 'হাতে', 'গান', 'ডাক', 'জীবন', 'দেশ', 'ঘর', 'আলো', 'গল্প', 'জল'],
    bottomRow: ['মন', 'সব', 'আলো', 'জল', 'মাটি', 'নদী', 'ফুল', 'সকাল', 'মেঘ', 'বায়ু', 'ছবি', 'খবর'],
    numberRow: ['১২৩৪', '৫৬৭৮', '২০২৬', '১০০%', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '০'],
    ngrams: ['এবং', 'ও', 'এর', 'তে', 'থেকে', 'করে', 'হলো', 'আছে', 'নেই', 'একটি', 'এই', 'সেই', 'যে', 'সব'],
    pangrams: ['যে কোনো স্বাধীন দেশের মানুষের জন্য মাতৃভাষার মর্যাদা রক্ষা করা পরম কর্তব্য।']
  },
  de: {
    homeRow: ['schön', 'spät', 'groß', 'käfer', 'während', 'öffnen', 'hören', 'größe', 'nähe', 'drücken', 'wählen'],
    topRow: ['über', 'für', 'körper', 'schließlich', 'ändern', 'schüler', 'glücklich', 'können', 'müssen', 'übung'],
    bottomRow: ['mädchen', 'außerdem', 'möglich', 'verfügbar', 'vollständig', 'erklären', 'qualität', 'träger', 'lösung'],
    numberRow: ['1234', '5678', '1984', '2026', '100%', '50-50'],
    ngrams: ['der', 'die', 'das', 'und', 'in', 'den', 'von', 'zu', 'mit', 'sich', 'auf', 'für', 'ist', 'im'],
    pangrams: ['Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.', 'Falsches Üben von Xylophonmusik quält jeden größeren Zwerg.']
  },
  es: {
    homeRow: ['más', 'está', 'dónde', 'quién', 'año', 'niño', 'día', 'español', 'corazón', 'adiós', 'mañana', 'canción'],
    topRow: ['éxito', 'sueño', 'tiempo', 'país', 'árbol', 'música', 'esperanza', 'libertad', 'alegría', 'pasión', 'visión'],
    bottomRow: ['también', 'vida', 'mundo', 'casa', 'hombre', 'mujer', 'trabajo', 'luz', 'mano', 'fuerza', 'camino'],
    numberRow: ['1234', '5678', '1984', '2026', '100%', '50-50'],
    ngrams: ['de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'se', 'del', 'las', 'un', 'por', 'con', 'no', 'una'],
    pangrams: ['El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.']
  },
  fr: {
    homeRow: ['français', 'cœur', 'être', 'très', 'où', 'déjà', 'grâce', 'liberté', 'égalité', 'fraternité', 'rêve'],
    topRow: ['après', 'même', 'premier', 'lumière', 'succès', 'espoir', 'vérité', 'monde', 'temps', 'lieu', 'petit'],
    bottomRow: ['homme', 'femme', 'enfant', 'grand', 'chose', 'part', 'force', 'yeux', 'main', 'notre', 'pendant'],
    numberRow: ['1234', '5678', '1984', '2026', '100%', '50-50'],
    ngrams: ['de', 'la', 'le', 'et', 'les', 'des', 'en', 'un', 'du', 'une', 'que', 'est', 'pour', 'qui', 'dans'],
    pangrams: ['Portez ce vieux whisky au juge blond qui fume.', 'Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis.']
  }
};

export function getPracticeDrillWords(drillType: string, lang = 'en', scriptMode: 'native' | 'latin' = 'native'): string[] {
  const code = (lang || 'en').toLowerCase().trim();

  if (code === 'en' || scriptMode === 'latin') {
    const drills = PRACTICE_DRILLS as any;
    if (drills[drillType]) return drills[drillType];
    return getWordPoolForLanguage(code, '200', scriptMode);
  }

  // Check language-specific drills
  const langDrills = LOCALIZED_PRACTICE_DRILLS[code] || LOCALIZED_PRACTICE_DRILLS[code.slice(0, 2)];
  if (langDrills && (langDrills as any)[drillType]) {
    return (langDrills as any)[drillType];
  }

  // Fallback to language native word pool
  return getWordPoolForLanguage(code, '200', scriptMode);
}

export const WORD_LISTS = {
  ...LOCALIZED_GAME_WORDS.en,
  pangrams: PANGRAMS_LIST,
  practiceDrills: PRACTICE_DRILLS
};

// --------------------------------------------------------------------------
// 4. MULTI-LANGUAGE QUOTE SUITE
// --------------------------------------------------------------------------
export interface CategorizedQuote {
  id: number;
  text: string;
  author: string;
  lang?: string;
  source?: string;
  length: 'short' | 'medium' | 'long' | 'thicc';
}

export const MONKEYTYPE_QUOTES: CategorizedQuote[] = [
  // English Quotes
  { id: 1, text: 'Simplicity is prerequisite for reliability.', author: 'Edsger W. Dijkstra', lang: 'en', length: 'short' },
  { id: 2, text: 'Stay hungry, stay foolish.', author: 'Steve Jobs', lang: 'en', length: 'short' },
  { id: 3, text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds', lang: 'en', length: 'short' },
  { id: 4, text: 'First, solve the problem. Then, write the code.', author: 'John Johnson', lang: 'en', length: 'short' },
  { id: 5, text: 'Knowledge is power. Precision is mastery.', author: 'Francis Bacon', lang: 'en', length: 'short' },
  { id: 6, text: 'Make it work, make it right, make it fast.', author: 'Kent Beck', lang: 'en', length: 'short' },
  { id: 7, text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler', lang: 'en', length: 'medium' },
  { id: 8, text: 'Experience is the name everyone gives to their mistakes in life and software engineering.', author: 'Oscar Wilde', lang: 'en', length: 'medium' },
  { id: 9, text: 'The only way to do great work is to love what you do and practice until it becomes second nature.', author: 'Steve Jobs', lang: 'en', length: 'medium' },
  { id: 10, text: 'Do not wait to strike till the iron is hot; but make it hot by continuous and relentless striking.', author: 'William Butler Yeats', lang: 'en', length: 'medium' },
  { id: 11, text: 'Simplicity is about subtracting the obvious and adding the meaningful.', author: 'John Maeda', lang: 'en', length: 'medium' },
  { id: 12, text: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.', author: 'Antoine de Saint-Exupéry', lang: 'en', length: 'medium' },

  // Hindi Quotes
  { id: 101, text: 'Sapne woh nahi jo hum sote waqt dekhte hain, sapne woh hain jo hume sone nahi dete.', author: 'Dr. A.P.J. Abdul Kalam', lang: 'hi', length: 'medium' },
  { id: 102, text: 'Karm karo, phal ki chinta mat karo.', author: 'Bhagavad Gita', lang: 'hi', length: 'short' },
  { id: 103, text: 'Utho, jago aur tab tak mat ruko jab tak lakshya prapt na ho jaye.', author: 'Swami Vivekananda', lang: 'hi', length: 'medium' },

  // Spanish Quotes
  { id: 201, text: 'Caminante, no hay camino, se hace camino al andar.', author: 'Antonio Machado', lang: 'es', length: 'short' },
  { id: 202, text: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', author: 'John Lennon', lang: 'es', length: 'medium' },
  { id: 203, text: 'Saber que se sabe lo que se sabe y que no se sabe lo que no se sabe; he aqui el verdadero saber.', author: 'Confucio', lang: 'es', length: 'medium' },

  // French Quotes
  { id: 301, text: 'Le plus grand secret pour le bonheur, c\'est d\'être bien avec soi.', author: 'Bernard Fontenelle', lang: 'fr', length: 'short' },
  { id: 302, text: 'On ne voit bien qu\'avec le cœur. L\'essentiel est invisible pour les yeux.', author: 'Antoine de Saint-Exupéry', lang: 'fr', length: 'medium' },
  { id: 303, text: 'Il n\'y a point de génie sans un grain de folie.', author: 'Aristote', lang: 'fr', length: 'short' },

  // German Quotes
  { id: 401, text: 'Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.', author: 'Albert Einstein', lang: 'de', length: 'short' },
  { id: 402, text: 'Es ist nicht genug zu wissen, man muss auch anwenden; es ist nicht genug zu wollen, man muss auch tun.', author: 'Johann Wolfgang von Goethe', lang: 'de', length: 'medium' },

  // Japanese Quotes (Romaji)
  { id: 501, text: 'Nana korobi ya oki. Fall seven times, stand up eight.', author: 'Japanese Proverb', lang: 'ja', length: 'short' },
  { id: 502, text: 'Ichi-go ichi-e. Treasure every unrepeatable encounter.', author: 'Sen no Rikyu', lang: 'ja', length: 'short' }
];

export interface CodeSnippet {
  id: number;
  language: string;
  code: string;
}

export const MONKEYTYPE_CODE_SNIPPETS: CodeSnippet[] = [
  { id: 1, language: 'JavaScript', code: 'const calculateWPM = (chars, timeMin) => Math.round((chars / 5) / timeMin);' },
  { id: 2, language: 'TypeScript', code: 'interface TypingResult { wpm: number; rawWpm: number; accuracy: number; consistency: number; }' },
  { id: 3, language: 'Python', code: 'def fibonacci(n: int) -> list[int]:\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result' },
  { id: 4, language: 'Rust', code: 'fn main() {\n    let message = "Speed benchmark zero latency";\n    println!("{}", message);\n}' },
  { id: 5, language: 'C++', code: '#include <iostream>\nint main() {\n    std::cout << "Fast touch typing" << std::endl;\n    return 0;\n}' },
  { id: 6, language: 'CSS', code: ':root {\n  --mt-bg: #323437;\n  --mt-main: #e2b714;\n  --mt-caret: #e2b714;\n}' },
  { id: 7, language: 'SQL', code: 'SELECT player_id, MAX(wpm) AS best_wpm FROM speed_records GROUP BY player_id ORDER BY best_wpm DESC;' }
];

// --------------------------------------------------------------------------
// 5. KEYBOARD LAYOUT MATRICES
// --------------------------------------------------------------------------
export interface KeyboardLayoutDef {
  id: string;
  name: string;
  rows: [string[], string[], string[]];
}

export const KEYBOARD_LAYOUTS: Record<string, KeyboardLayoutDef> = {
  qwerty: {
    id: 'qwerty',
    name: 'QWERTY (US/Standard)',
    rows: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.']
    ]
  },
  azerty: {
    id: 'azerty',
    name: 'AZERTY (French/Français)',
    rows: [
      ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'],
      ['w', 'x', 'c', 'v', 'b', 'n', ',', ';', ':']
    ]
  },
  qwertz: {
    id: 'qwertz',
    name: 'QWERTZ (German/Deutsch)',
    rows: [
      ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö'],
      ['y', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.']
    ]
  },
  dvorak: {
    id: 'dvorak',
    name: 'Dvorak (Ergonomic)',
    rows: [
      ['\'', ',', '.', 'p', 'y', 'f', 'g', 'c', 'r', 'l'],
      ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's'],
      [';', 'q', 'j', 'k', 'x', 'b', 'm', 'w', 'v']
    ]
  },
  colemak: {
    id: 'colemak',
    name: 'Colemak (Modern Ergonomic)',
    rows: [
      ['q', 'w', 'f', 'p', 'g', 'j', 'l', 'u', 'y', ';'],
      ['a', 'r', 's', 't', 'd', 'h', 'n', 'e', 'i', 'o'],
      ['z', 'x', 'c', 'v', 'b', 'k', 'm', ',', '.']
    ]
  },
  hindi: {
    id: 'hindi',
    name: 'हिन्दी (InScript / Devanagari)',
    rows: [
      ['ौ', 'ै', 'ा', 'ी', 'ू', 'ब', 'ह', 'ग', 'द', 'ज'],
      ['ो', 'े', '्', 'ि', 'ु', 'प', 'र', 'क', 'त', 'च'],
      ['ं', 'म', 'न', 'व', 'ल', 'स', 'य', 'श', 'ष']
    ]
  },
  russian: {
    id: 'russian',
    name: 'Русский (ЙЦУКЕН)',
    rows: [
      ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з'],
      ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж'],
      ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']
    ]
  },
  arabic: {
    id: 'arabic',
    name: 'العربية (Arabic Keyboard)',
    rows: [
      ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح'],
      ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك'],
      ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز']
    ]
  }
};

// --------------------------------------------------------------------------
// 6. HELPER FUNCTIONS
export function getWordPoolForLanguage(lang: string, poolType = '200', scriptMode: 'native' | 'latin' = 'native'): string[] {
  const code = (lang || 'en').toLowerCase().trim();
  if (scriptMode === 'native') {
    switch (code) {
      case 'hi': case 'hindi': return MONKEYTYPE_HINDI_DEVANAGARI_200;
      case 'ja': case 'japanese': return MONKEYTYPE_JAPANESE_KANA_200;
      case 'ru': case 'russian': return MONKEYTYPE_RUSSIAN_CYRILLIC_200;
      case 'ar': case 'arabic': return MONKEYTYPE_ARABIC_NATIVE_200;
      case 'de': case 'german': return MONKEYTYPE_GERMAN_UMLAUTS_200;
      case 'bn': case 'bengali': return MONKEYTYPE_BENGALI_NATIVE_200;
      case 'zh': case 'chinese': return MONKEYTYPE_CHINESE_HANZI_200;
      case 'ko': case 'korean': return MONKEYTYPE_KOREAN_HANGUL_200;
      case 'es': case 'spanish': return MONKEYTYPE_SPANISH_NATIVE_200;
      case 'fr': case 'french': return MONKEYTYPE_FRENCH_NATIVE_200;
      case 'pt': case 'portuguese': return MONKEYTYPE_PORTUGUESE_NATIVE_200;
      case 'tr': case 'turkish': return MONKEYTYPE_TURKISH_NATIVE_200;
      case 'vi': case 'vietnamese': return MONKEYTYPE_VIETNAMESE_NATIVE_200;
      case 'it': case 'italian': return MONKEYTYPE_ITALIAN_NATIVE_200;
      case 'id': case 'indonesian': return MONKEYTYPE_INDONESIAN_200;
      default:
        return poolType === '1k' ? MONKEYTYPE_ENGLISH_1K : MONKEYTYPE_ENGLISH_200;
    }
  }

  // Latin / Romaji / Pinyin fallback mode
  switch (code) {
    case 'hi': case 'hindi': return MONKEYTYPE_HINDI_200;
    case 'es': case 'spanish': return MONKEYTYPE_SPANISH_200;
    case 'fr': case 'french': return MONKEYTYPE_FRENCH_200;
    case 'de': case 'german': return MONKEYTYPE_GERMAN_200;
    case 'ja': case 'japanese': return MONKEYTYPE_JAPANESE_200;
    case 'pt': case 'portuguese': return MONKEYTYPE_PORTUGUESE_200;
    case 'ru': case 'russian': return MONKEYTYPE_RUSSIAN_200;
    case 'ar': case 'arabic': return MONKEYTYPE_ARABIC_200;
    case 'zh': case 'chinese': return MONKEYTYPE_CHINESE_200;
    case 'it': case 'italian': return MONKEYTYPE_ITALIAN_200;
    case 'ko': case 'korean': return MONKEYTYPE_KOREAN_200;
    case 'id': case 'indonesian': return MONKEYTYPE_INDONESIAN_200;
    case 'tr': case 'turkish': return MONKEYTYPE_TURKISH_200;
    case 'vi': case 'vietnamese': return MONKEYTYPE_VIETNAMESE_200;
    case 'bn': case 'bengali': return MONKEYTYPE_BENGALI_200;
    default:
      return poolType === '1k' ? MONKEYTYPE_ENGLISH_1K : MONKEYTYPE_ENGLISH_200;
  }
=======
// Powered by modular native datasets in src/data/typing/

import { getCurrentLanguage } from './i18n';
import { KEYBOARD_LAYOUTS } from './keyboardLayouts';
export { KEYBOARD_LAYOUTS };
import {
  LOCALIZED_WORDS,
  MONKEYTYPE_QUOTES,
  getWordPoolForLanguage as getPoolHelper,
  getRandomWord as getWordHelper,
  getRandomWords as getWordsHelper,
  type TypingQuote
} from '../data/typing/index';

export const MONKEYTYPE_ENGLISH_200 = LOCALIZED_WORDS.en.pool200;
export const MONKEYTYPE_ENGLISH_1K = [...LOCALIZED_WORDS.en.pool200, ...LOCALIZED_WORDS.en.pool1k];

export const MONKEYTYPE_CODE_SNIPPETS: string[] = [
  'const result = await fetch("/api/v1/scores", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });',
  'function calculateWpm(keystrokes: number, timeElapsedSec: number): number { const minutes = timeElapsedSec / 60; return Math.round((keystrokes / 5) / minutes); }',
  'export default defineConfig({ site: "https://typinggamezone.com", integrations: [sitemap(), tailwindcss()] });',
  'interface GameEntity { id: string; x: number; y: number; vx: number; vy: number; update(delta: number): void; render(ctx: CanvasRenderingContext2D): void; }',
  'document.addEventListener("keydown", (event: KeyboardEvent) => { if (event.key === "Escape") { togglePauseState(); } });'
];

export const PRACTICE_DRILLS: Record<string, string[]> = {
  homeRow: ['asdf', 'jkl;', 'flask', 'falls', 'salad', 'slash', 'flash', 'dads', 'lass', 'half', 'glad', 'dash', 'asks', 'fads', 'alka', 'shad', 'kall', 'fall', 'hall', 'sash'],
  topRow: ['type', 'rope', 'tree', 'pour', 'port', 'wire', 'quiet', 'write', 'quote', 'query', 'power', 'tower', 'route', 'outer', 'prior', 'equip', 'upper', 'terry', 'rotor', 'weep'],
  bottomRow: ['zoom', 'cave', 'next', 'back', 'vibe', 'zone', 'clan', 'calm', 'zero', 'axon', 'czar', 'bank', 'monk', 'bomb', 'comb', 'mock', 'bone', 'cone', 'vane', 'zinc'],
  numberRow: ['1984', '2024', '100%', '$500', '99.9', '#123', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080', '1999', '2000', '1000', '1024', '4096'],
  symbols: ['const', 'let', 'function()', '() => {}', 'if (x > 0)', '{ key: val }', '[1, 2, 3]', '<div>', '</div>', 'import { x }', 'export default', 'return true;', 'npm install', 'git commit'],
  pangrams: [
    'the quick brown fox jumps over the lazy dog',
    'pack my box with five dozen liquor jugs',
    'how vexingly quick daft zebras jump',
    'sphinx of black quartz judge my vow',
    'two driven jocks help fax my big quiz'
  ],
  ngrams: ['the', 'and', 'ing', 'ion', 'tion', 'that', 'with', 'ment', 'ence', 'ance', 'ness', 'able', 'ible', 'less', 'full', 'ight', 'ough', 'ould', 'ight', 'ound'],
  pinkyDrills: ['pizza', 'plaza', 'quiz', 'lazy', 'equal', 'quick', 'quote', 'apple', 'puppy', 'power', 'pulp', 'poly', 'zeta', 'apex', 'aqua', 'proxy', 'pause', 'pace', 'page', 'park'],
  ringDrills: ['world', 'sweet', 'swear', 'swallow', 'slow', 'solo', 'solid', 'sword', 'wool', 'wood', 'loss', 'wall', 'wolf', 'walk', 'silk', 'silk'],
  middleDrills: ['decide', 'dedicate', 'elite', 'edible', 'electric', 'device', 'define', 'delete', 'defeat', 'iceberg', 'divide', 'element', 'cinema', 'diet'],
  indexDrills: ['flight', 'bright', 'knight', 'thrive', 'target', 'figure', 'gather', 'father', 'growth', 'bridge', 'future', 'ground', 'native', 'rhythm'],
  thumbDrills: ['touch typing speed test', 'practice makes perfect', 'master the home row keys', 'focus on accuracy first', 'steady typing pace']
};

export const LOCALIZED_PRACTICE_DRILLS: Record<string, Record<string, string[]>> = {
  en: PRACTICE_DRILLS,
  hi: {
    homeRow: ['कर', 'रख', 'पर', 'पल', 'कल', 'कम', 'तर', 'पत', 'सत', 'रत', 'कच', 'पट', 'चर', 'फूट', 'खत', 'छाप', 'रोटी', 'पेड़', 'पत्ता', 'ताकत', 'उपाय', 'उत्तर', 'उचित', 'सफर'],
    topRow: ['बात', 'घर', 'हाथ', 'दिन', 'गीत', 'आग', 'बाग', 'दाल', 'जीत', 'भाई', 'दाम', 'बीज', 'घास', 'धूप', 'बाल', 'दवा', 'झील', 'गेंद', 'डाक', 'गाना', 'पूजा', 'भीड़'],
    bottomRow: ['मन', 'वन', 'लय', 'समय', 'नयन', 'मान', 'नाम', 'शान', 'लाभ', 'वंश', 'सेवा', 'सपना', 'नियम', 'सत्य', 'वाणी', 'न्याय', 'शांति', 'संयम', 'नमन', 'माला', 'यश'],
    numberRow: ['१२३४', '५६७८', '२०२६', '१००%', '₹५००', '३.१४', '७७७', '९११', '३६५', '२४/७', '१८००', '४०४', '५००', '८०८०', '१९९९', '२०००', '१०००', '१०२४', '४०९६'],
    symbols: ['सत्यमेव जयते।', 'नमस्ते!', 'क्या हाल है?', '१ + २ = ३', 'ज्ञान = शक्ति', 'सफलता = मेहनत', 'लक्ष्य: विजय', 'शुभकामनाएं!'],
    pangrams: [
      'ऋषियों को सताने वाले दुष्ट राक्षसों के संहार के लिए भगवान ने अवतार लिया',
      'सभी मानव जन्म से स्वतंत्र और अधिकारों में समान हैं',
      'सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः',
      'सच्चा मित्र वही है जो विपत्ति के समय साथ दे',
      'परिश्रम ही सफलता की कुंजी है और ज्ञान सबसे बड़ा धन है'
    ],
    ngrams: ['और', 'है', 'की', 'के', 'का', 'में', 'को', 'से', 'यह', 'भी', 'था', 'कुछ', 'कर', 'सब', 'दिन', 'काम', 'घर', 'सच'],
    pinkyDrills: ['औजार', 'ओस', 'झाड़ी', 'छाता', 'टोकरी', 'ढोल', 'आवाज', 'ऊंट', 'ऐनक', 'ऋषि', 'डमरू', 'झरना', 'चमक', 'टीका', 'औषधि'],
    ringDrills: ['ऐरावत', 'एकता', 'मित्र', 'देश', 'दुआ', 'तारा', 'तलवार', 'मेहनत', 'मातृभूमि', 'दौड़', 'तैरना', 'दीपक', 'दान'],
    middleDrills: ['आकाश', 'अमर', 'नदी', 'गगन', 'कमल', 'कलम', 'किताब', 'अधिकार', 'कविता', 'कौशल', 'नियम', 'गति', 'ज्ञान'],
    indexDrills: ['भारत', 'ईश्वर', 'ऊर्जा', 'इतिहास', 'उपहार', 'विकास', 'वीर', 'लाख', 'हवा', 'पानी', 'सूरज', 'जीवन', 'योद्धा', 'प्रयास', 'विजय'],
    thumbDrills: ['सत्य और शांति', 'ज्ञान ही शक्ति है', 'मेहनत का फल मीठा होता है', 'समय का सदुपयोग करो', 'सदा सच बोलो']
  },
  ja: {
    homeRow: ['ちはし', 'はきく', 'まのり', 'ちと', 'しま', 'のは', 'きり', 'くま', 'まき', 'ちから', 'はな', 'ことり', 'くもり', 'まち'],
    topRow: ['たてい', 'すかん', 'ならせ', 'たい', 'すし', 'かね', 'らい', 'せかい', 'つき', 'ゆき', 'うみ', 'そら', 'てがみ', 'いぬ'],
    bottomRow: ['つさそ', 'ひこみ', 'もねる', 'つみ', 'さる', 'ひかり', 'こころ', 'みち', 'もり', 'ねこ', 'ゆめ', 'ほん', 'やま', 'かわ'],
    numberRow: ['1984', '2026', '100%', '¥500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['こんにちは！', 'ありがとう。', 'はじめまして。', '「タイピング」', '1 + 2 = 3', '日本語・練習'],
    pangrams: [
      'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせす',
      'すべての人間は、生まれながらにして自由であり、かつ、尊厳と権利とについて平等である',
      'あめつちほしそら やまかはみねたに くもきりむろこけ ひといぬうへすゑ ゆわさるおふせよ'
    ],
    ngrams: ['です', 'ます', 'こと', 'もの', 'から', 'まで', 'そして', 'しかし', 'また', 'ない', 'ある', 'する'],
    pinkyDrills: ['せかい', 'たいよう', 'ちから', 'つばさ', 'れもん', 'るり', 'ぷりん', 'ろく', 'ぴあの'],
    ringDrills: ['てがみ', 'ともだち', 'さくら', 'らくだ', 'りす', 'わに', 'ろけっと'],
    middleDrills: ['いぬ', 'しろ', 'そら', 'にじ', 'のり', 'ねこ', 'きつね', 'みどり'],
    indexDrills: ['すずめ', 'はなび', 'ひかり', 'ほし', 'やま', 'うみ', 'かぜ', 'つき', 'みち', 'ゆき'],
    thumbDrills: ['きょうも いちにち がんばろう', 'にほんごの れんしゅう', 'ゆめを あきらめない']
  },
  ru: {
    homeRow: ['фавы', 'апро', 'ролд', 'ждэ', 'вода', 'пара', 'роса', 'поле', 'дело', 'лапа', 'жара', 'факт', 'роль', 'гора', 'флот'],
    topRow: ['йцук', 'кене', 'нгшщ', 'зхъ', 'утро', 'кино', 'небо', 'звук', 'перо', 'снег', 'урок', 'круг', 'окно', 'стих', 'рука'],
    bottomRow: ['ячсм', 'митб', 'бюэ', 'свет', 'мост', 'зима', 'тема', 'брат', 'маяк', 'чудо', 'юбка', 'смех', 'хлеб', 'трава'],
    numberRow: ['1984', '2026', '100%', '500₽', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Привет, мир!', 'Как дела?', '1 + 2 = 3', '«Победа»', 'Знание — сила.', 'Шаг за шагом.'],
    pangrams: [
      'съешь ещё этих мягких французских булок, да выпей чаю',
      'в чащах юга жил-был цитрус, но фальшивый экземпляр',
      'южно-эфиопский грач увёл мышь за хобот'
    ],
    ngrams: ['что', 'как', 'это', 'все', 'так', 'она', 'они', 'был', 'для', 'нет', 'при', 'про', 'под', 'над'],
    pinkyDrills: ['факел', 'экран', 'ягода', 'замок', 'халат', 'щука', 'шарф', 'поезд', 'юрист', 'шторм'],
    ringDrills: ['волна', 'сырок', 'дымка', 'лучник', 'щенок', 'шмель', 'шляпа', 'выбор'],
    middleDrills: ['ветер', 'дерево', 'камыш', 'лампа', 'мечта', 'новости', 'улыбка', 'песня'],
    indexDrills: ['радость', 'победа', 'солнце', 'правда', 'голубь', 'город', 'народ', 'жизнь', 'память'],
    thumbDrills: ['мир и добро', 'знание это сила', 'учись с удовольствием', 'вперед к цели']
  },
  ar: {
    homeRow: ['شسي', 'يبلا', 'اتنم', 'كط', 'بيت', 'نور', 'علم', 'عمل', 'سلام', 'شمس', 'بحر', 'كتاب', 'قلم', 'سماء', 'طريق'],
    topRow: ['ضصث', 'قفغ', 'عهخ', 'حجد', 'ذهب', 'فرح', 'غيمة', 'خير', 'حب', 'جنة', 'دار', 'قلب', 'عين', 'صوت', 'حياة'],
    bottomRow: ['ئءؤ', 'رلاى', 'ةوز', 'ظ', 'ورد', 'زهر', 'رمل', 'وطن', 'أمل', 'نهار', 'ليل', 'روح', 'رؤية', 'زمان'],
    numberRow: ['١٩٨٤', '٢٠٢٦', '١٠٠٪', '٥٠٠$', '٣.١٤', '٧٧٧', '٩١١', '٣٦٥', '٢٤/٧', '١٨٠٠', '٤٠٤', '٥٠٠', '٨٠٨٠'],
    symbols: ['السلام عليكم!', 'كيف حالك؟', '١ + ٢ = ٣', '«النجاح»', 'العلم نور.', 'خطوة بخطوة.'],
    pangrams: [
      'نص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومطرز بحروف ذهبية',
      'كل إنسان يولد حرا ومتساويا في الكرامة والحقوق',
      'العلم نور والجهل ظلام في طريق الحياة'
    ],
    ngrams: ['في', 'من', 'على', 'إلى', 'عن', 'مع', 'هذا', 'هذه', 'التي', 'الذي', 'كان', 'ليس', 'قال', 'كل'],
    pinkyDrills: ['شجرة', 'طائر', 'ضباب', 'حجر', 'ظلام', 'كوكب', 'جسر', 'شاطئ', 'طفل'],
    ringDrills: ['سفينة', 'صحراء', 'غابة', 'قمر', 'صديق', 'سعادة', 'خيال'],
    middleDrills: ['ياسمين', 'ثمرة', 'هلال', 'مطر', 'طاقة', 'تاريخ', 'نجاح'],
    indexDrills: ['بستان', 'لوحة', 'فضاء', 'عالم', 'نجمة', 'أرض', 'إيمان', 'راية'],
    thumbDrills: ['السلام والمحبة', 'العلم ينير العقول', 'العمل سر النجاح', 'الأمل يصنع المعجزات']
  },
  de: {
    homeRow: ['asdf', 'jklö', 'äfal', 'saal', 'glas', 'fall', 'dass', 'kahl', 'sofa', 'jagdt', 'ölk', 'käse', 'saft', 'dachs'],
    topRow: ['qwert', 'zuiop', 'ütre', 'baum', 'zeit', 'tier', 'post', 'ruhe', 'topf', 'wort', 'über', 'tür', 'quer', 'oper'],
    bottomRow: ['yxcv', 'bnm,', 'blau', 'mond', 'mann', 'nacht', 'vogel', 'zahn', 'boot', 'bahn', 'mast', 'bank', 'zone'],
    numberRow: ['1984', '2026', '100%', '500€', '3,14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Hallo Welt!', 'Wie geht es?', '1 + 2 = 3', '»Erfolg«', 'Wissen ist Macht.', 'Schritt für Schritt.'],
    pangrams: [
      'zwölf boxkämpfer jagen viktor quer über den großen sylter deich',
      'jeder mensch hat das recht auf bildung und freiheit',
      'falsches üben von xylophonmusik quält jeden größeren zwerg'
    ],
    ngrams: ['der', 'die', 'das', 'und', 'ist', 'von', 'mit', 'den', 'auf', 'für', 'nicht', 'sich', 'dem', 'dass'],
    pinkyDrills: ['platz', 'qual', 'apfel', 'pause', 'öster', 'käfig', 'zwerg', 'extra', 'äquator', 'üppig'],
    ringDrills: ['wald', 'sohn', 'mond', 'wolf', 'dunst', 'wunder', 'sand'],
    middleDrills: ['erde', 'klima', 'insel', 'licht', 'leben', 'natur', 'kind'],
    indexDrills: ['freude', 'glaube', 'herbst', 'vogel', 'blume', 'sonne', 'traum', 'reise'],
    thumbDrills: ['ruhe und kraft', 'wissen ist macht', 'übung macht den meister', 'jeder tag zählt']
  },
  es: {
    homeRow: ['asdf', 'jklñ', 'faja', 'sala', 'hola', 'hada', 'lado', 'seda', 'sofa', 'kilo', 'año', 'daño', 'niño', 'leña'],
    topRow: ['qwer', 'tyui', 'opqu', 'pero', 'toro', 'rio', 'roca', 'tubo', 'pelo', 'puerta', 'queso', 'tipo', 'pino', 'rosa'],
    bottomRow: ['zxcv', 'bnm,', 'zona', 'vaso', 'vino', 'bien', 'mano', 'cielo', 'boca', 'nave', 'caza', 'coche', 'mapa'],
    numberRow: ['1984', '2026', '100%', '500€', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['¡Hola mundo!', '¿Cómo estás?', '1 + 2 = 3', '«Éxito»', 'El saber es poder.', 'Paso a paso.'],
    pangrams: [
      'el veloz murciélago hindú comía feliz cardillo y kiwi',
      'todos los seres humanos nacen libres e iguales en dignidad y derechos',
      'benjamín pidió una copa de champán en el quiosco de la esquina'
    ],
    ngrams: ['que', 'los', 'del', 'las', 'por', 'con', 'para', 'como', 'pero', 'mas', 'este', 'todo', 'bien', 'solo'],
    pinkyDrills: ['plaza', 'queso', 'playa', 'zumo', 'peña', 'caña', 'árbol', 'paño', 'zapato', 'azúcar'],
    ringDrills: ['sol', 'luna', 'vino', 'santo', 'oro', 'silla', 'lago'],
    middleDrills: ['cielo', 'dardo', 'isla', 'monte', 'idea', 'letra', 'mundo'],
    indexDrills: ['fuego', 'guitarra', 'tierra', 'hierba', 'viento', 'hermano', 'tiempo', 'camino'],
    thumbDrills: ['paz y amor', 'el saber es poder', 'la práctica hace al maestro', 'vive el presente']
  },
  fr: {
    homeRow: ['qsdf', 'jklm', 'fade', 'mars', 'salle', 'lama', 'dame', 'rose', 'flamme', 'mode', 'merci', 'sofa', 'sage'],
    topRow: ['azer', 'tyui', 'opau', 'porte', 'tour', 'arbre', 'peau', 'vent', 'route', 'jour', 'peur', 'toit', 'fleur'],
    bottomRow: ['wxcv', 'bn,;', 'voie', 'beau', 'nuit', 'chat', 'base', 'bonbon', 'vague', 'cœur', 'main', 'zone'],
    numberRow: ['1984', '2026', '100%', '500€', '3,14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Bonjour le monde !', 'Comment allez-vous ?', '1 + 2 = 3', '« Succès »', 'Le savoir est une force.'],
    pangrams: [
      'portez ce vieux whisky au juge blond qui fume',
      'tous les êtres humains naissent libres et égaux en dignité et en droits',
      'le cœur déçu mais fier, l\'exilé joyeux s\'approcha du rivage'
    ],
    ngrams: ['les', 'des', 'que', 'qui', 'dans', 'pour', 'avec', 'tout', 'plus', 'bien', 'fait', 'sans', 'sous', 'vers'],
    pinkyDrills: ['plage', 'quai', 'pomme', 'puzzle', 'azur', 'poire', 'piège', 'piano', 'zèbre'],
    ringDrills: ['soleil', 'lune', 'source', 'oiseau', 'saule', 'valse'],
    middleDrills: ['étoile', 'ciel', 'monde', 'livre', 'image', 'neige'],
    indexDrills: ['nature', 'histoire', 'voyage', 'bonheur', 'flamme', 'rivière', 'liberté'],
    thumbDrills: ['paix et liberté', 'le savoir est une force', 'petit à petit l\'oiseau fait son nid']
  },
  bn: {
    homeRow: ['কর', 'পল', 'তল', 'চর', 'টক', 'পট', 'খত', 'ছাতা', 'খবর', 'রোটি', 'তাল', 'কথা', 'পাতা', 'কলম', 'পথ'],
    topRow: ['ভাত', 'ঘর', 'হাত', 'দিন', 'গান', 'আগুন', 'বাঘ', 'ডাল', 'ভাই', 'বীজ', 'ঘাস', 'রোদ', 'ঝিল', 'গাছ'],
    bottomRow: ['মন', 'বন', 'লয়', 'সময়', 'নাম', 'মান', 'লাভ', 'স্বপ্ন', 'নিয়ম', 'সত্য', 'নদী', 'শান্তি', 'মালা'],
    numberRow: ['১২৩৪', '৫৬৭৮', '২০২৬', '১০০%', '৳৫০০', '৩.১৪', '৭৭৭', '৯১১', '৩৬৫', '২৪/৭', '১৮০০', '৪০৪', '৫০০', '৮০৮০'],
    symbols: ['শুভ সকাল!', 'কেমন আছেন?', '১ + ২ = ৩', '«জয়»', 'জ্ঞানই শক্তি।', 'ধাপে ধাপে উন্নতি।'],
    pangrams: [
      'সব মানুষ স্বাধীনভাবে সমান মর্যাদা ও অধিকার নিয়ে জন্মগ্রহণ করে',
      'সাধু ও চরিত্রবান ব্যক্তি সবার শ্রদ্ধাভাজন হন',
      'জ্ঞান ও প্রজ্ঞার আলো সর্বত্র ছড়িয়ে দাও'
    ],
    ngrams: ['এবং', 'হয়', 'এর', 'কে', 'তে', 'যে', 'না', 'সব', 'করে', 'ছিল', 'হবে', 'এই', 'তার', 'এক'],
    pinkyDrills: ['ঔষধ', 'ওজন', 'ঝুড়ি', 'ছাতা', 'টাকা', 'ঢোল', 'আকাশ', 'উট', 'ঋতু', 'ডিম'],
    ringDrills: ['ঐতিহ্য', 'একতা', 'মিত্র', 'দেশ', 'তারা', 'মেহনত', 'আলো'],
    middleDrills: ['নদী', 'গগন', 'কমল', 'কলম', 'বই', 'কবিতা', 'নিয়ম'],
    indexDrills: ['বাংলাদেশ', 'ভারত', 'ইতিহাস', 'উপহার', 'বীর', 'হাওয়া', 'পানি', 'সূর্য', 'জীবন', 'বিজয়'],
    thumbDrills: ['সত্য ও শান্তি', 'জ্ঞানই পরম শক্তি', 'পরিশ্রম সৌভাগ্যের প্রসূতি', 'সদা সত্য কথা বলো']
  },
  pt: {
    homeRow: ['asdf', 'jklç', 'fala', 'sala', 'lado', 'seda', 'fada', 'kilo', 'sofa', 'laço', 'ação', 'maçã', 'faça'],
    topRow: ['qwer', 'tyui', 'opqu', 'tempo', 'porto', 'rio', 'rua', 'tubo', 'povo', 'queijo', 'tipo', 'ouro', 'rosa'],
    bottomRow: ['zxcv', 'bnm,', 'zona', 'vaso', 'vento', 'bem', 'mão', 'céu', 'boca', 'nave', 'noite', 'mapa', 'voz'],
    numberRow: ['1984', '2026', '100%', 'R$500', '3,14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Olá Mundo!', 'Como vai você?', '1 + 2 = 3', '«Sucesso»', 'O saber é poder.', 'Passo a passo.'],
    pangrams: [
      'um pequeno jabuti xereta viu dez cegonhas felizes',
      'todos os seres humanos nascem livres e iguais em dignidade e direitos',
      'gazeta publica hoje breve anúncio de faxina na quermesse'
    ],
    ngrams: ['que', 'para', 'com', 'não', 'uma', 'por', 'mais', 'como', 'mas', 'foi', 'ele', 'sua', 'tudo', 'bem'],
    pinkyDrills: ['praça', 'queijo', 'praia', 'zebra', 'poema', 'açúcar', 'paço', 'zíper'],
    ringDrills: ['sol', 'lua', 'sonho', 'ouro', 'sapo', 'lago'],
    middleDrills: ['céu', 'mar', 'ilha', 'monte', 'ideia', 'mundo', 'vida'],
    indexDrills: ['fogo', 'terra', 'vento', 'irmão', 'tempo', 'caminho', 'futuro'],
    thumbDrills: ['paz e harmonia', 'o saber é poder', 'a prática leva à perfeição']
  },
  zh: {
    homeRow: ['大家', '可以', '开发', '社会', '设计', '快乐', '好好', '打字', '练习', '提升', '速度', '天天'],
    topRow: ['世界', '朋友', '希望', '梦想', '光明', '特别', '科学', '网络', '英雄', '太空', '星星', '雨水'],
    bottomRow: ['成功', '平安', '天地', '日月', '火风', '爱心', '声音', '文明', '真理', '自然', '森林', '海洋'],
    numberRow: ['1984', '2026', '100%', '¥500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['你好，世界！', '今天过得怎么样？', '1 + 2 = 3', '《成功之路》', '知识就是力量。'],
    pangrams: [
      '人人生而自由，在尊严和权利上一律平等',
      '千里之行始于足下，坚持不懈方能成功',
      '好好学习天天向上，打字练习提升速度'
    ],
    ngrams: ['我们', '他们', '这个', '那个', '因为', '所以', '虽然', '但是', '如果', '而且'],
    pinkyDrills: ['苹果', '汽车', '青年', '左右', '气象', '字母', '清晨', '跑步'],
    ringDrills: ['未来', '书本', '阳光', '蓝天', '白云', '绿色', '温暖'],
    middleDrills: ['电脑', '科技', '音乐', '创造', '思考', '故事', '探索'],
    indexDrills: ['奋斗', '辉煌', '壮丽', '坚强', '勇敢', '热情', '友谊', '胜利'],
    thumbDrills: ['和平与发展', '知识就是力量', '千里之行始于足下', '熟能生巧']
  },
  ko: {
    homeRow: ['바다', '하늘', '나라', '사람', '마음', '하나', '모두', '아이', '사랑', '바람', '가을', '나비'],
    topRow: ['구름', '소리', '태양', '새싹', '기쁨', '빛', '꽃', '길', '꿈', '별', '파도', '달'],
    bottomRow: ['나무', '숲', '물', '달', '친구', '학교', '희망', '가을', '봄', '겨울', '산', '강'],
    numberRow: ['1984', '2026', '100%', '₩500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['안녕하세요!', '오늘 하루 어떠셨나요?', '1 + 2 = 3', '「성공」', '아는 것이 힘이다.'],
    pangrams: [
      '모든 인간은 태어날 때부터 자유로우며 그 존엄과 권리에 있어 동등하다',
      '다람쥐 헌 쳇바퀴에 타고파',
      '키스의 고유조건은 입술끼리 만나야 하고 특별한 기술은 필요치 않다'
    ],
    ngrams: ['그리고', '하지만', '그러나', '그래서', '우리는', '그들은', '이것은', '저것은'],
    pinkyDrills: ['피아노', '카메라', '편지', '파도', '코끼리', '포도', '퀴즈'],
    ringDrills: ['자전거', '신발', '선물', '달리기', '오솔길', '은하수'],
    middleDrills: ['도서관', '컴퓨터', '이야기', '아침', '인사', '기억'],
    indexDrills: ['행복', '용기', '열정', '우정', '도전', '성공', '노력', '승리'],
    thumbDrills: ['평화와 번영', '아는 것이 힘이다', '천 리 길도 한 걸음부터', '연습이 최고다']
  },
  it: {
    homeRow: ['asdf', 'jkl;', 'fede', 'sale', 'lago', 'fase', 'sole', 'dado', 'seta', 'mare', 'casa', 'cosa', 'solo'],
    topRow: ['qwer', 'tyui', 'opqu', 'tempo', 'porto', 'rete', 'riva', 'tubo', 'puro', 'quota', 'tipo', 'oro', 'rosa'],
    bottomRow: ['zxcv', 'bnm,', 'zona', 'vaso', 'vino', 'bene', 'mano', 'cielo', 'bocca', 'nave', 'notte', 'mappa', 'voce'],
    numberRow: ['1984', '2026', '100%', '500€', '3,14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Ciao Mondo!', 'Come stai?', '1 + 2 = 3', '«Successo»', 'Sapere è potere.', 'Passo dopo passo.'],
    pangrams: [
      'quel vil barbone ci vendette un fiasco di buon pecorino',
      'tutti gli esseri umani nascono liberi ed eguali in dignità e diritti',
      'pranzo d\'acqua fa volti sgomenti ma chissà perché'
    ],
    ngrams: ['che', 'per', 'con', 'non', 'una', 'del', 'più', 'come', 'anche', 'sono', 'alla', 'ogni', 'tutto', 'bene'],
    pinkyDrills: ['piazza', 'quota', 'pozzo', 'zero', 'pizza', 'aprile', 'pezzo'],
    ringDrills: ['sole', 'luna', 'sogno', 'oro', 'sabbia', 'lago'],
    middleDrills: ['cielo', 'mare', 'isola', 'monte', 'idea', 'mondo', 'vita'],
    indexDrills: ['fuoco', 'terra', 'vento', 'tempo', 'cammino', 'futuro', 'libertà'],
    thumbDrills: ['pace e amore', 'sapere è potere', 'la pratica rende perfetti']
  },
  tr: {
    homeRow: ['asdf', 'jklş', 'i;kal', 'fark', 'sade', 'kale', 'halk', 'saat', 'dost', 'kasa', 'şaka', 'aşk', 'ışık'],
    topRow: ['qwer', 'tyui', 'opğü', 'renk', 'tarih', 'yol', 'ümit', 'para', 'güneş', 'tepe', 'ördek', 'şehir', 'öykü'],
    bottomRow: ['zxcv', 'bnmö', 'ç.,', 'zaman', 'vatan', 'büyük', 'çiçek', 'deniz', 'bahar', 'öğren', 'mavi', 'nehir'],
    numberRow: ['1984', '2026', '100%', '500₺', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Merhaba Dünya!', 'Nasılsınız?', '1 + 2 = 3', '«Başarı»', 'Bilgi güçtür.', 'Adım adım zafer.'],
    pangrams: [
      'pijamalı hasta yağız şoföre çabucak güvendi',
      'bütün insanlar hür, haysiyet ve haklar bakımından eşit doğarlar',
      'vurguncu vahşi akrep gibi çabucak kaçtı'
    ],
    ngrams: ['bir', 've', 'bu', 'için', 'ile', 'da', 'de', 'çok', 'gibi', 'daha', 'kadar', 'sonra', 'olan', 'her'],
    pinkyDrills: ['ağaç', 'paket', 'şeker', 'pazar', 'çarşı', 'özgür', 'şapka'],
    ringDrills: ['sabah', 'orman', 'dünya', 'yıldız', 'sevgi'],
    middleDrills: ['deniz', 'kitap', 'insan', 'akıl', 'hayat'],
    indexDrills: ['rüzgar', 'güneş', 'toprak', 'bayrak', 'gelecek', 'başarı'],
    thumbDrills: ['barış ve huzur', 'bilgi en büyük güçtür', 'çalışmak başarının anahtarıdır']
  },
  vi: {
    homeRow: ['asdf', 'jkl;', 'sao', 'hoa', 'lao', 'da', 'song', 'khoa', 'la', 'lang', 'tay', 'chan', 'nam'],
    topRow: ['qwer', 'tyui', 'opqu', 'troi', 'que', 'yeu', 'uoc', 'rung', 'phong', 'toi', 'tien', 'ngay'],
    bottomRow: ['zxcv', 'bnm,', 'vang', 'xanh', 'bien', 'nuoc', 'moi', 'chim', 'mai', 'mua', 'nang', 'gio'],
    numberRow: ['1984', '2026', '100%', '500₫', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Xin chào thế giới!', 'Bạn khỏe không?', '1 + 2 = 3', '«Thành công»', 'Kiến thức là sức mạnh.'],
    pangrams: [
      'tất cả mọi người sinh ra đều được tự do và bình đẳng về nhân phẩm và quyền lợi',
      'con cò bay lả bay la bay từ cửa phủ bay ra cánh đồng',
      'người khôn ngoan biết lắng nghe và học hỏi mỗi ngày'
    ],
    ngrams: ['cua', 'va', 'trong', 'cho', 'voi', 'khong', 'nhung', 'duoc', 'nguoi', 'co', 'nay', 'mot', 'rat'],
    pinkyDrills: ['phong', 'que', 'xuan', 'phim', 'quy', 'xanh'],
    ringDrills: ['sao', 'song', 'lang', 'suoi', 'lua'],
    middleDrills: ['dat', 'moi', 'duong', 'tam', 'tinh'],
    indexDrills: ['que huong', 'dat nuoc', 'yeu thuong', 'tu do', 'thanh cong'],
    thumbDrills: ['hoa binh va hanh phuc', 'kien thuc la suc manh', 'co chi thi nen']
  },
  id: {
    homeRow: ['asdf', 'jkl;', 'fajar', 'salam', 'kaca', 'desa', 'halo', 'jalan', 'sama', 'lupa', 'saja', 'lama'],
    topRow: ['qwer', 'tyui', 'opqu', 'pohon', 'waktu', 'ruang', 'pagi', 'tahu', 'roti', 'pintu', 'raja', 'terang'],
    bottomRow: ['zxcv', 'bnm,', 'zaman', 'cahaya', 'bulan', 'nama', 'mata', 'bumi', 'cinta', 'warna', 'batu', 'mobil'],
    numberRow: ['1984', '2026', '100%', 'Rp500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Halo Dunia!', 'Bagaimana kabarmu?', '1 + 2 = 3', '«Sukses»', 'Ilmu adalah kekuatan.'],
    pangrams: [
      'semua orang dilahirkan merdeka dan mempunyai martabat dan hak-hak yang sama',
      'fajar telah menyingsing dan burung berkicau menyambut hari baru',
      'belajar mengetik dengan cepat dan akurat membutuhkan latihan rutin'
    ],
    ngrams: ['yang', 'dan', 'di', 'ini', 'dengan', 'untuk', 'dari', 'tidak', 'akan', 'pada', 'juga', 'ke', 'ada'],
    pinkyDrills: ['pohon', 'pulau', 'peta', 'pasar', 'pena', 'zaman'],
    ringDrills: ['surat', 'langit', 'suara', 'ombak', 'senang'],
    middleDrills: ['danau', 'emas', 'kawan', 'indah', 'teman'],
    indexDrills: ['garuda', 'harapan', 'bintang', 'gunung', 'terbang', 'sukses'],
    thumbDrills: ['damai dan sejahtera', 'ilmu adalah kekuatan', 'rajin pangkal pandai']
  }
};

export const LOCALIZED_PRACTICE_DRILLS_LATIN: Record<string, Record<string, string[]>> = {
  hi: {
    homeRow: ['flask', 'salad', 'flash', 'glad', 'dash', 'asks', 'fall', 'hall', 'sash', 'kall', 'alka'],
    topRow: ['type', 'rope', 'tree', 'pour', 'port', 'wire', 'quiet', 'write', 'power', 'tower', 'route'],
    bottomRow: ['zoom', 'cave', 'next', 'back', 'vibe', 'zone', 'clan', 'calm', 'zero', 'bank', 'monk', 'bomb'],
    numberRow: ['1984', '2026', '100%', '$500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500'],
    symbols: ['namaste!', 'kaise ho?', '1 + 2 = 3', 'shubhkaamnayein', 'satyamev jayate'],
    pangrams: [
      'the quick brown fox jumps over the lazy dog',
      'namaste sabhi dosto ko typing game zone me swagat hai',
      'mehnat karne walo ki kabhi haar nahi hoti',
      'satyamev jayate nanritam satyena pantha vitato devayanah'
    ],
    ngrams: ['hai', 'kya', 'nahi', 'karo', 'apna', 'baat', 'dost', 'pyar', 'aaj', 'kal', 'suno', 'dekho'],
    pinkyDrills: ['pizza', 'plaza', 'quiz', 'lazy', 'equal', 'quick', 'quote', 'apple', 'puppy', 'power'],
    ringDrills: ['world', 'sweet', 'swear', 'swallow', 'slow', 'solo', 'solid', 'sword', 'wool', 'wood'],
    middleDrills: ['decide', 'dedicate', 'elite', 'edible', 'electric', 'device', 'define', 'delete', 'defeat'],
    indexDrills: ['bharat', 'shanti', 'jeevan', 'suraj', 'hawa', 'pani', 'vijay', 'yoddha', 'prayas', 'roshni'],
    thumbDrills: ['satya aur shanti', 'gyan hi shakti hai', 'mehnat ka phal meetha hota hai']
  },
  ja: {
    homeRow: ['ashita', 'katana', 'sakura', 'hikari', 'kimono', 'kokoro', 'arigato', 'sayonara', 'tamago', 'taberu'],
    topRow: ['tokyo', 'kyoto', 'osaka', 'sensou', 'sekai', 'sensei', 'tsubasa', 'tsurugi', 'suzume', 'hotaru'],
    bottomRow: ['matsuri', 'mizu', 'nihon', 'neko', 'inu', 'yama', 'kawa', 'sora', 'tsuki', 'hoshizora'],
    numberRow: ['1984', '2026', '100%', '¥500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500'],
    symbols: ['konnichiwa!', 'arigatou gozaimasu.', '1 + 2 = 3', 'typing practice', 'ganbatte!'],
    pangrams: [
      'the quick brown fox jumps over the lazy dog',
      'irohanihoheto chirinuruwo wakayotareso tsunenaramu',
      'subete no ningen wa umarenagarani shite jiyuu de ari'
    ],
    ngrams: ['desu', 'masu', 'koto', 'mono', 'kara', 'made', 'soshite', 'shikashi', 'mata', 'nai', 'aru'],
    pinkyDrills: ['pizza', 'plaza', 'quiz', 'lazy', 'equal', 'quick', 'quote', 'apple', 'puppy'],
    ringDrills: ['sakura', 'sensou', 'sekai', 'sensei', 'suzume', 'sayonara'],
    middleDrills: ['katana', 'kimono', 'kokoro', 'kawa', 'hikari', 'densha'],
    indexDrills: ['nihon', 'tokyo', 'matsuri', 'tsubasa', 'arigato', 'hotaru'],
    thumbDrills: ['kyou mo ichinichi ganbarou', 'nihongo no renshuu', 'yume wo akiramenai']
  }
};

export const WORD_LISTS = {
  easy: LOCALIZED_WORDS.en.gameWords.easy,
  medium: LOCALIZED_WORDS.en.gameWords.medium,
  hard: LOCALIZED_WORDS.en.gameWords.hard,
  space: LOCALIZED_WORDS.en.gameWords.space,
  cyber: LOCALIZED_WORDS.en.gameWords.cyber,
  fantasy: LOCALIZED_WORDS.en.gameWords.fantasy,
  combat: LOCALIZED_WORDS.en.gameWords.combat,
  practiceDrills: PRACTICE_DRILLS,
};

export function getPracticeDrillWords(
  drillType: string = 'homeRow',
  param2: number | string = 25,
  param3: string = 'en',
  param4: 'native' | 'latin' | number = 'native'
): string[] {
  let count = 25;
  let lang = 'en';
  let scriptMode: 'native' | 'latin' = 'native';

  if (typeof param2 === 'number') {
    count = param2;
    lang = param3 || 'en';
    scriptMode = (param4 as 'native' | 'latin') || 'native';
  } else if (typeof param2 === 'string') {
    lang = param2;
    scriptMode = (param3 as 'native' | 'latin') || 'native';
    count = typeof param4 === 'number' ? param4 : 25;
  }

  const cleanLang = (lang || 'en').toLowerCase().trim().split('-')[0];

  let drillsMap = LOCALIZED_PRACTICE_DRILLS[cleanLang];
  if (scriptMode === 'latin' && cleanLang !== 'en' && LOCALIZED_PRACTICE_DRILLS_LATIN[cleanLang]) {
    drillsMap = LOCALIZED_PRACTICE_DRILLS_LATIN[cleanLang];
  }

  let pool = drillsMap?.[drillType];

  if (!pool || pool.length === 0) {
    if (cleanLang !== 'en' && LOCALIZED_PRACTICE_DRILLS[cleanLang]?.homeRow) {
      pool = LOCALIZED_PRACTICE_DRILLS[cleanLang].homeRow;
    } else if (PRACTICE_DRILLS[drillType]) {
      pool = cleanLang === 'en' ? PRACTICE_DRILLS[drillType] : getWordPoolForLanguage(cleanLang, '200');
    } else {
      pool = getWordPoolForLanguage(cleanLang, '200');
    }
  }

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  return result;
}

export function getWordPoolForLanguage(
  lang: string,
  poolType: '200' | '1k' = '200',
  _scriptMode: 'native' | 'latin' = 'native'
): string[] {
  return getPoolHelper(lang, poolType);
>>>>>>> b518fd16ad909e014560532f5e3a8c72f63be92e
}

export function getRandomWord(
  category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium',
  lang?: string
): string {
<<<<<<< HEAD
  const rawLang = (lang || getCurrentLanguage() || 'en').toLowerCase().trim();
  const currentLang = LOCALIZED_GAME_WORDS[rawLang] ? rawLang : rawLang.slice(0, 2);
=======
<<<<<<< HEAD
  const currentLang = lang || getCurrentLanguage();
>>>>>>> 89673b989cb3248af3a02f625713e2bb0060b3e7
  const langWords = LOCALIZED_GAME_WORDS[currentLang] || LOCALIZED_GAME_WORDS.en;
  const list = langWords[category] || langWords.medium || langWords.easy || langWords.combat || langWords.space || LOCALIZED_GAME_WORDS.en[category] || LOCALIZED_GAME_WORDS.en.medium!;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
=======
  const curLang = lang || getCurrentLanguage();
  return getWordHelper(category, curLang);
>>>>>>> b518fd16ad909e014560532f5e3a8c72f63be92e
}

export function getRandomWords(
  count: number,
  category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium',
  lang?: string
): string[] {
<<<<<<< HEAD
  const rawLang = (lang || getCurrentLanguage() || 'en').toLowerCase().trim();
  const currentLang = LOCALIZED_GAME_WORDS[rawLang] ? rawLang : rawLang.slice(0, 2);
=======
<<<<<<< HEAD
  const currentLang = lang || getCurrentLanguage();
>>>>>>> 89673b989cb3248af3a02f625713e2bb0060b3e7
  const langWords = LOCALIZED_GAME_WORDS[currentLang] || LOCALIZED_GAME_WORDS.en;
  const pool = [...(langWords[category] || langWords.medium || langWords.easy || langWords.combat || LOCALIZED_GAME_WORDS.en[category] || LOCALIZED_GAME_WORDS.en.medium!)];
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * pool.length);
    result.push(pool[index]);
  }
  return result;
=======
  const curLang = lang || getCurrentLanguage();
  return getWordsHelper(count, category, curLang);
>>>>>>> b518fd16ad909e014560532f5e3a8c72f63be92e
}

export function generateMonkeytypeWordList(
  count: number,
  language = 'english',
  includePunc = false,
  includeNum = false,
  langCode = 'en',
  scriptMode: 'native' | 'latin' = 'native'
): string[] {
<<<<<<< HEAD
  let pool = MONKEYTYPE_ENGLISH_200;
  const targetLang = (langCode && langCode !== 'en') ? langCode : language;

  if (targetLang === 'english1k') {
    pool = MONKEYTYPE_ENGLISH_1K;
  } else {
    pool = getWordPoolForLanguage(targetLang, '200', scriptMode);
  }

=======
  const targetLang = (langCode && langCode !== 'en') ? langCode : language;
  const pool = getWordPoolForLanguage(targetLang, '200', scriptMode);
>>>>>>> b518fd16ad909e014560532f5e3a8c72f63be92e
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

export function getMonkeytypeQuote(
  lengthType: 'all' | 'short' | 'medium' | 'long' | 'thicc' = 'all',
  lang?: string
<<<<<<< HEAD
): CategorizedQuote {
=======
): TypingQuote {
>>>>>>> b518fd16ad909e014560532f5e3a8c72f63be92e
  let list = MONKEYTYPE_QUOTES;
  if (lang) {
    const langQuotes = MONKEYTYPE_QUOTES.filter(q => q.lang === lang);
    if (langQuotes.length > 0) list = langQuotes;
  }
  if (lengthType !== 'all') {
    const filtered = list.filter(q => q.length === lengthType);
    if (filtered.length > 0) list = filtered;
  }
  return list[Math.floor(Math.random() * list.length)] || MONKEYTYPE_QUOTES[0];
}

export function generateWeakKeysDrill(weakKeys: string[], count = 25, lang = 'en'): string[] {
  if (!weakKeys || weakKeys.length === 0) {
    weakKeys = ['p', 'q', 'z', 'x', 'b'];
  }
  const cleanKeys = weakKeys.map(k => k.toLowerCase());
<<<<<<< HEAD
  const wordPool = getWordPoolForLanguage(lang, '1k');
=======
  const wordPool = getWordPoolForLanguage(lang, '200');
>>>>>>> b518fd16ad909e014560532f5e3a8c72f63be92e

  const matchingWords = wordPool.filter(w => {
    const lower = w.toLowerCase();
    return cleanKeys.some(k => lower.includes(k));
  });

<<<<<<< HEAD
  const pool = matchingWords.length >= 10 ? matchingWords : wordPool;
=======
  const pool = matchingWords.length >= 8 ? matchingWords : wordPool;
>>>>>>> b518fd16ad909e014560532f5e3a8c72f63be92e
  const result: string[] = [];

  for (let i = 0; i < count; i++) {
    const word = pool[Math.floor(Math.random() * pool.length)];
    result.push(word);
  }

  return result;
}
<<<<<<< HEAD
=======

export { LOCALIZED_WORDS, MONKEYTYPE_QUOTES };
>>>>>>> b518fd16ad909e014560532f5e3a8c72f63be92e
