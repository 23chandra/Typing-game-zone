// Categorized word dictionaries for 21 games, speed tests, and practice drills
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
    easy: ['aag', 'din', 'man', 'ghar', 'sach', 'nam', 'kam', 'hawa', 'jeet', 'haar'],
    medium: ['koshish', 'himmat', 'suraj', 'chand', 'tara', 'pyaar', 'duniya', 'raasta', 'shanti', 'sundar'],
    hard: ['antariksh', 'yuddhakshetra', 'vijayashree', 'sarvashreshtha', 'atma-vishwas', 'parivartan'],
    space: ['antariksh', 'grah', 'sitara', 'suraj', 'chandrama', 'chhayapatha', 'gurutva', 'brahmand'],
    cyber: ['suchna', 'yantra', 'tarang', 'suraksha', 'kalanidhi', 'sangnak', 'shikhar'],
    fantasy: ['talwar', 'mayavi', 'yoddha', 'jadugar', 'mandir', 'mantra', 'samrat', 'rakshak'],
    combat: ['aakraman', 'raksha', 'mukka', 'prahar', 'veer', 'sangharsh', 'chauthi', 'vijay']
  },
  es: {
    easy: ['luz', 'sol', 'mar', 'paz', 'ojo', 'vida', 'cielo', 'mano', 'fuego', 'aire'],
    medium: ['tiempo', 'camino', 'fuerza', 'cabeza', 'palabra', 'destino', 'sombra', 'estrella', 'espacio'],
    hard: ['extraordinario', 'revolucionario', 'transformacion', 'resurreccion', 'intergalactico'],
    space: ['galaxia', 'cometa', 'asteroide', 'orbita', 'gravedad', 'planeta', 'estrella', 'cosmos'],
    cyber: ['codigo', 'red', 'servidor', 'algoritmo', 'binario', 'archivo', 'memoria', 'sistema'],
    fantasy: ['dragon', 'espada', 'magia', 'hechizo', 'castillo', 'reino', 'oraculo', 'pocion'],
    combat: ['ataque', 'defensa', 'guerrero', 'escudo', 'victoria', 'combate', 'furia', 'golpe']
  },
  fr: {
    easy: ['feu', 'eau', 'ciel', 'jour', 'nuit', 'main', 'yeux', 'vent', 'ame', 'paix'],
    medium: ['etoile', 'chemin', 'soleil', 'espace', 'ombre', 'monde', 'lumiere', 'destin', 'victoire'],
    hard: ['extraordinaire', 'incommensurable', 'desintegration', 'metamorphose', 'ininterrompu'],
    space: ['galaxie', 'orbite', 'etoile', 'comete', 'planete', 'univers', 'pesanteur', 'vortex'],
    cyber: ['reseau', 'serveur', 'donnees', 'fichier', 'memoire', 'systeme', 'algorithme', 'code'],
    fantasy: ['dragon', 'epee', 'magie', 'chateau', 'sorcier', 'royaume', 'potion', 'grimoire'],
    combat: ['attaque', 'defense', 'guerrier', 'bouclier', 'victoire', 'combat', 'fureur', 'frappe']
  },
  de: {
    easy: ['tag', 'mut', 'weg', 'arm', 'see', 'hut', 'gut', 'neu', 'alt', 'rot'],
    medium: ['sonne', 'mond', 'stern', 'feuer', 'wasser', 'erde', 'licht', 'kraft', 'schatten'],
    hard: ['geschicklichkeit', 'geschwindigkeitsrausch', 'unbesiegbarkeit', 'weltraumabenteuer'],
    space: ['galaxie', 'kosmos', 'schwerkraft', 'asteroid', 'komet', 'planet', 'sternenstaub'],
    cyber: ['speicher', 'rechner', 'datenstrom', 'algorithmus', 'prozessor', 'netzwerk', 'code'],
    fantasy: ['drache', 'schwert', 'zauberer', 'schloss', 'legende', 'ritter', 'magie'],
    combat: ['angriff', 'deckung', 'krieger', 'schild', 'triumph', 'kaempfer', 'faust']
  },
  ja: {
    easy: ['hi', 'ki', 'te', 'me', 'hana', 'kaze', 'ame', 'sora', 'umi', 'yama'],
    medium: ['hikari', 'kokoro', 'tsurugi', 'katana', 'senshi', 'mahou', 'sekai', 'chkara', 'sakura'],
    hard: ['shinkansen', 'mugenjou', 'fujisan', 'hyakurenjitoku', 'isshinfuran', 'tenkafubu'],
    space: ['ginga', 'wakusei', 'uchuu', 'ryuusei', 'kousei', 'taiyou', 'tsuki', 'juuryoku'],
    cyber: ['denshi', 'deta', 'koudo', 'kairo', 'keisan', 'kioku', 'toushin', 'moukei'],
    fantasy: ['doragon', 'katana', 'ninja', 'samurai', 'youkai', 'mahoutsukai', 'kamisama'],
    combat: ['kougeki', 'bougyo', 'shousha', 'tatakai', 'hadouken', 'senshi', 'gekitotsu']
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
}

export function getRandomWord(
  category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium',
  lang?: string
): string {
  const currentLang = lang || getCurrentLanguage();
  const langWords = LOCALIZED_GAME_WORDS[currentLang] || LOCALIZED_GAME_WORDS.en;
  const list = langWords[category] || LOCALIZED_GAME_WORDS.en[category] || LOCALIZED_GAME_WORDS.en.medium!;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

export function getRandomWords(
  count: number,
  category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium',
  lang?: string
): string[] {
  const currentLang = lang || getCurrentLanguage();
  const langWords = LOCALIZED_GAME_WORDS[currentLang] || LOCALIZED_GAME_WORDS.en;
  const pool = [...(langWords[category] || LOCALIZED_GAME_WORDS.en[category] || LOCALIZED_GAME_WORDS.en.medium!)];
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * pool.length);
    result.push(pool[index]);
  }
  return result;
}

export function generateMonkeytypeWordList(
  count: number,
  language = 'english',
  includePunc = false,
  includeNum = false,
  langCode = 'en',
  scriptMode: 'native' | 'latin' = 'native'
): string[] {
  let pool = MONKEYTYPE_ENGLISH_200;
  const targetLang = (langCode && langCode !== 'en') ? langCode : language;

  if (targetLang === 'english1k') {
    pool = MONKEYTYPE_ENGLISH_1K;
  } else {
    pool = getWordPoolForLanguage(targetLang, '200', scriptMode);
  }

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
): CategorizedQuote {
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
  const wordPool = getWordPoolForLanguage(lang, '1k');

  const matchingWords = wordPool.filter(w => {
    const lower = w.toLowerCase();
    return cleanKeys.some(k => lower.includes(k));
  });

  const pool = matchingWords.length >= 10 ? matchingWords : wordPool;
  const result: string[] = [];

  for (let i = 0; i < count; i++) {
    const word = pool[Math.floor(Math.random() * pool.length)];
    result.push(word);
  }

  return result;
}
