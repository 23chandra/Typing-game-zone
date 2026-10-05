import type { FAQItem } from '../types';

export const jaFAQ: FAQItem[] = [
  // --- 1. ゲーム＆プラットフォーム ---
  {
    id: 'best-online-typing-game',
    question: 'おすすめの無料オンラインタイピングゲームはどれですか？',
    category: 'games',
    categoryLabel: 'タイピングゲーム・ツール',
    shortAnswer: 'Typing Game Zoneは、21種類の無料2Dアーケードゲーム、精密なタイピング速度測定、リアルなメカニカル打鍵音を備えた最高のタイピングプラットフォームです。',
    answerHtml: '<p>最高のオンラインタイピングゲームは、爽快なゲーム要素（2Dアーケードバトル、ゾンビサバイバル、リズムアクション）と高精度な<strong>WPM/CPM計測</strong>、そして指の筋肉記憶トレーニングを兼ね備えています。<strong>Typing Game Zone</strong>は以下の特長から世界中で支持されています：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>21種類の無料2Dアーケードタイトル：</strong> <a href="/ja/game/type-defender" class="text-link underline hover:opacity-80">Type Defender</a>、<a href="/ja/game/zombie-horde" class="text-link underline hover:opacity-80">Zombie Horde</a>、<a href="/ja/game/cyber-hacker" class="text-link underline hover:opacity-80">Cyber Hacker</a>、<a href="/ja/game/laser-turret" class="text-link underline hover:opacity-80">Laser Turret</a>、<a href="/ja/game/word-tetris" class="text-link underline hover:opacity-80">Word Tetris</a>など。</li><li><strong>105段階の難易度設定：</strong> 初心者向け30 WPMから100+ WPMの極限ボス戦まで対応。</li><li><strong>リアルな打鍵音シミュレーション：</strong> Cherry MX青軸、Holy Panda、赤軸、レトロタイプライターの音をWeb Audioでリアルタイム再現。</li><li><strong>完全無料・ブラウザ完結：</strong> ダウンロードやインストール、課金は一切不要です。</li></ul>',
    keywords: ['おすすめタイピングゲーム', '無料タイピングゲーム', 'タイピング練習ゲーム', 'typing game zone', 'タイピングゲーム無料']
  },
  {
    id: 'typing-games-free',
    question: 'タイピングゲームは本当に完全無料で遊べますか？',
    category: 'games',
    categoryLabel: 'タイピングゲーム・ツール',
    shortAnswer: 'はい、Typing Game Zoneに収録されている全21種類のゲーム、速度テスト、練習機能はすべて100%無料です。',
    answerHtml: '<p><strong>はい、完全無料です！</strong> <strong>Typing Game Zone</strong>の全21ゲーム、タイピング速度テスト、練習ラボ、17種類のカラーテーマは、課金やサブスクリプション、ソフトウェアのインストールなしで<strong>100%無料</strong>でご利用いただけます。PC、ノートパソコン、Chromebook、タブレットのブラウザから今すぐプレイできます。</p>',
    keywords: ['タイピングゲーム無料ブラウザ', '無料タイピング練習', 'タイピングゲームフリー', 'お金のかからないタイピング']
  },
  {
    id: 'test-typing-skills',
    question: '自分のタイピング速度やスキルを測定するにはどうすればいいですか？',
    category: 'games',
    categoryLabel: 'タイピングゲーム・ツール',
    shortAnswer: 'Typing Game Zoneの無料スピードテスト機能を使って、WPM、CPM、正確率（％）、打鍵の一貫性を瞬時に測定できます。',
    answerHtml: '<p>Typing Game Zoneの<a href="/ja/speed-test" class="text-link underline hover:opacity-80">タイピングスピードテスト</a>で、リアルタイムに自分のタイピング力を測定できます：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>選べる制限時間：</strong> 15秒、30秒、60秒、120秒のベンチマーク。</li><li><strong>詳細なグラフ＆分析：</strong> 粗WPM、純WPM、打鍵精度（％）、キーストロークの安定度。</li><li><strong>17種類のMonkeytypeテーマ：</strong> Serika Dark、Dracula、Cyberpunk、Carbon、Matrixなど。</li><li><strong>メカニカルキースイッチ音：</strong> 青軸やタイプライター風の爽快な打鍵音。</li></ul>',
    keywords: ['タイピング速度測定', 'タイピング検定練習', 'wpm測定', 'タイピングスピードテスト無料']
  },
  {
    id: 'ghost-typing',
    question: 'ゴーストタイピング（Ghost Typing）とは何ですか？',
    category: 'games',
    categoryLabel: 'タイピングゲーム・ツール',
    shortAnswer: 'キーボードのハードウェア的な誤認識・不認識現象（ゴースティング）か、または目標速度で自動入力される半透明カーソル（ゴーストレーサー）を指します。',
    answerHtml: '<p><strong>ゴーストタイピング</strong>には主に2つの意味があります：</p><ol class="list-decimal pl-5 my-2 space-y-2"><li><strong>ハードウェアのゴースティング現象：</strong> メンブレンキーボード等で3つ以上のキーを同時押しした際に、キーが認識されなかったり意図しないキーが入力される現象。ゲーミングキーボードは<em>アンチゴースト</em>や<em>Nキーロールオーバー（NKRO）</em>回路でこれを防ぎます。</li><li><strong>ゴーストレーサー機能：</strong> タイピング練習画面に目標速度（例: 60 WPMや自己ベスト）で動く半透明のゴーストカーソルを表示し、過去の自分と競い合うトレーニング機能です。</li></ol>',
    keywords: ['ゴーストタイピングとは', 'キーボードゴースティング', 'アンチゴースト', 'ゴーストレーサータイピング']
  },
  {
    id: 'practice-typing-paragraphs',
    question: '長文や段落をスムーズにタイピング練習する方法は？',
    category: 'games',
    categoryLabel: 'タイピングゲーム・ツール',
    shortAnswer: '60秒または120秒の長文モードを選び、指が現在の単語を入力している間に目を2〜3単語先へ進めておく先読みを意識します。',
    answerHtml: '<p>長文や段落を淀みなくタイピングするためのコツ：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>長文モードを活用：</strong> <a href="/ja/speed-test" class="text-link underline hover:opacity-80">スピードテスト</a>の60秒/120秒モードで大文字、句読点、記号を含む実用的な文章を練習。</li><li><strong>2〜3単語の先読み：</strong> 指が今の単語を打っている間に、視線はすでに次の単語を捉えておくことで途切れのない入力が可能になります。</li><li><strong>リズムを崩さない：</strong> 突発的に速く打つのではなく、メトロノームのように均一なテンポを保ちます。</li><li><strong>多様な文章を打つ：</strong> ニュース、小説、プログラミングコードなど多彩な文章で柔軟な指の筋肉記憶を育てます。</li></ul>',
    keywords: ['長文タイピング練習', 'タイピング長文コツ', 'パラグラフタイピング練習']
  },

  // --- 2. 速度基準＆WPM ---
  {
    id: 'good-typing-speed',
    question: 'タイピングの平均速度や「速い」とされる目安（WPM）はどれくらいですか？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: '一般的なオフィス業務では50〜70 WPM（95%以上の正確率）が優秀とされ、プロのタイピストは80〜100+ WPMに達します。',
    answerHtml: '<p>PC作業や仕事における<strong>優れたタイピング速度</strong>は、正確率95%以上で<strong>50〜70 WPM（Words Per Minute）</strong>とされています。世界的なレベル分類は以下の通りです：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>初心者（20–35 WPM / 100–175打/分）：</strong> キーボードを見ながらの2本指入力レベル。</li><li><strong>平均的（40–50 WPM / 200–250打/分）：</strong> メール作成や日常業務に困らない世界平均。</li><li><strong>良好・実用的（50–70 WPM / 250–350打/分）：</strong> エンジニア、ライター、事務職として快適なレベル。</li><li><strong>上級者（75–95 WPM / 375–475打/分）：</strong> タッチタイピングを完全習得した上位10%。</li><li><strong>エリート・達人（100–140+ WPM / 500+打/分）：</strong> 世界の上位1%の超高速タイピスト。</li></ul>',
    keywords: ['タイピング平均速度', 'タイピング速い目安', 'wpm基準', 'キーボード打鍵速度平均']
  },
  {
    id: 'what-is-20-wpm',
    question: 'タイピングで「20 WPM」とはどのくらいの速さですか？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: '20 WPMは1分間に約100文字を打つ速度で、キーを探しながら打つ初心者に多いレベルです。',
    answerHtml: '<p><strong>20 WPM</strong>は、1分間に約<strong>100打鍵（キーストローク）</strong>する速さです（1単語＝5文字計算）。キーボードを見ながら数本の指で打つ初心者に多く見られます。当サイトの<a href="/ja/practice" class="text-link underline hover:opacity-80">練習ラボ</a>で毎日15分ホームポジション練習を行えば、数週間で40+ WPMへと倍増させることが可能です。</p>',
    keywords: ['20 wpmどのくらい', '20 wpm速さ', 'タイピング初心者速度']
  },
  {
    id: 'what-is-type-45-wpm',
    question: 'タイピングで「45 WPM」は速いですか？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: '45 WPMは1分間に約225打鍵で、世界的な成人平均（40 WPM）を上回る快適なタイピング速度です。',
    answerHtml: '<p><strong>45 WPM</strong>は毎分約<strong>225打鍵</strong>に相当します。大人の世界平均（約40 WPM）よりやや速く、レポートやメール作成でタイピング速度が思考の邪魔にならない快適なレベルです。</p>',
    keywords: ['45 wpmタイピング', '45 wpm速いか', 'タイピング45wpm目安']
  },
  {
    id: 'is-27-typing-speed-good',
    question: 'タイピング速度27 WPMは良い方ですか？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: '小学生やタッチタイピング習いたての方には十分ですが、大人の平均（40〜45 WPM）よりはやや遅いレベルです。',
    answerHtml: '<p><strong>27 WPM</strong>は<strong>習得中（発展途上）</strong>の速度です。小学生のお子様や、初めて10本指タッチタイピングを練習している大人には自然なスピードですが、社会人の平均よりは低めです。<a href="/ja/practice" class="text-link underline hover:opacity-80">Typing Game Zone</a>で毎日10分練習すれば、すぐに50+ WPMまで伸ばせます。</p>',
    keywords: ['27 wpm良いか', 'タイピング27wpm', 'タイピング速度伸ばす']
  },
  {
    id: 'poor-typing-speed',
    question: '遅い・苦手とされるタイピング速度はどれくらいですか？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: '正確率90%未満で30 WPM未満（150打/分未満）は、成人PCユーザーとして遅いレベルとみなされます。',
    answerHtml: '<p>正確率90%未満かつ<strong>30 WPM未満</strong>の速度は、PC操作において遅いと判断されます。下を向いてキーを探しながら入力しているため、肩こりや目の疲れの原因となり作業効率が落ちてしまいます。</p>',
    keywords: ['タイピング遅い基準', 'タイピングが苦手', 'キーボード打つのが遅い']
  },
  {
    id: 'good-typing-speed-by-age',
    question: '年齢別のタイピング速度の平均目安はどのくらいですか？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: '小学生は15〜25 WPM、中学生は30〜45 WPM、高校生は45〜60 WPM、大人は55〜75 WPMが目安です。',
    answerHtml: '<p>年齢や発達段階に応じたタイピング速度の目安：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>小学生（6〜10歳）：</strong> 15〜25 WPM（正しい指配置と正確さを重視）。</li><li><strong>中学生（11〜13歳）：</strong> 30〜45 WPM（デジタル授業や課題に十分な速度）。</li><li><strong>高校生（14〜18歳）：</strong> 45〜60 WPM（レポート作成や検索を素早くこなす）。</li><li><strong>若手・社会人（19〜40歳）：</strong> 55〜75 WPM（事務、プログラミングに最適）。</li><li><strong>40代〜50代：</strong> 45〜60 WPM。</li><li><strong>シニア（60歳以上）：</strong> 30〜45 WPM。</li></ul>',
    keywords: ['年齢別タイピング速度', '子供のタイピング目安', '学生タイピング平均wpm']
  },
  {
    id: 'how-fast-should-12-year-old-type',
    question: '12歳（中学生）のタイピング速度の目標は？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: '12歳のお子様は正確率90〜95%以上で30〜45 WPMを目指すのが理想的です。',
    answerHtml: '<p>中学1年生前後の12歳であれば、<strong>正確率90〜95%以上で30〜45 WPM</strong>が推奨されます。35+ WPMあれば、学校のICT授業やオンライン試験でタイピングが足かせになることはありません。</p>',
    keywords: ['12歳タイピング速度', '中学生タイピング目標', '中学生wpm']
  },
  {
    id: 'gen-z-average-typing-speed',
    question: 'Z世代（Gen Z）のタイピング速度の平均は？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: 'PCキーボードでは38〜45 WPMですが、スマホのフリックや両親指入力では40〜60+ WPMに達します。',
    answerHtml: '<p><strong>Z世代</strong>はPCキーボードでは平均<strong>38〜45 WPM</strong>ですが、スマホのタッチ画面では両親指入力により<strong>40〜60+ WPM</strong>という驚異的なスピードを誇ります。2Dタイピングゲームで遊ぶことで、PCのキーボード速度も短期間で急激に向上します。</p>',
    keywords: ['Z世代タイピング速度', 'スマホタイピング速度', 'Gen Z打鍵スピード']
  },
  {
    id: 'top-1-percent-wpm',
    question: '世界の上位1%のタイピストの速度はどのくらいですか？',
    category: 'speed',
    categoryLabel: '速度基準・WPM',
    shortAnswer: '上位1%は120+ WPM以上を維持し、世界チャンピオンクラスは150〜216+ WPMに到達します。',
    answerHtml: '<p>世界の<strong>上位1%のタイピスト</strong>は、標準的なQWERTYキーボードで正確率98%以上を保ちながら<strong>120 WPM以上</strong>を持続します。MonkeytypeやTyping Game Zoneのエリートプレイヤーは、単語単位の視覚認知と高速スイッチにより<strong>150〜216+ WPM</strong>の領域に達します。</p>',
    keywords: ['タイピング世界記録', '上位1パーセントwpm', '最速タイピスト速度']
  },

  // --- 3. 指の配置＆テクニック ---
  {
    id: 'ten-finger-typing-called',
    question: '10本指でキーボードを見ずに打つことを何と呼びますか？',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: '正式にはタッチタイピング（Touch Typing / ブラインドタッチ）と呼ばれます。',
    answerHtml: '<p>キーボードを見ずに10本の指で入力する技法を<strong>タッチタイピング（Touch Typing）</strong>またはブラインドタッチと呼びます。ホームポジション（左手<strong>ASDF</strong>、右手<strong>JKL;</strong>）に指を置き、指ごとの担当キーを筋肉記憶で打ちます。</p>',
    keywords: ['タッチタイピングとは', 'ブラインドタッチ正式名称', '10本指タイピング名前']
  },
  {
    id: 'two-finger-typing-called',
    question: '人差し指2本だけで打つタイピングは何と呼ばれますか？',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: 'ハント＆ペック（Hunt and Peck / 探し打ち・一本指打鍵）と呼ばれます。',
    answerHtml: '<p>2本の人差し指だけで打つスタイルは<strong>「ハント＆ペック」（Hunt and Peck / 探し打ち）</strong>と呼ばれます。目でキーを探して指を突くため、首に負担がかかり、10本指タッチタイピングに比べて速度の上限が低くなります。</p>',
    keywords: ['人差し指タイピング名前', 'ハントアンドペック', '2本指タイピング']
  },
  {
    id: 'which-finger-is-used-for-typing',
    question: '各キーはどの指で打つのが正しいですか？（担当指一覧）',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: 'タッチタイピングでは、10本すべての指に担当するキーの列が割り振られています。',
    answerHtml: '<p>一般的な日本語/英語QWERTYキーボードの担当指：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>左手小指：</strong> <code>1</code>, <code>Q</code>, <code>A</code>, <code>Z</code>, <code>Tab</code>, <code>Caps Lock</code>, <code>Shift</code>, <code>Ctrl</code></li><li><strong>左手薬指：</strong> <code>2</code>, <code>W</code>, <code>S</code>, <code>X</code></li><li><strong>左手中指：</strong> <code>3</code>, <code>E</code>, <code>D</code>, <code>C</code></li><li><strong>左手人差し指：</strong> <code>4</code>, <code>5</code>, <code>R</code>, <code>T</code>, <code>F</code>, <code>G</code>, <code>V</code>, <code>B</code></li><li><strong>両手親指：</strong> <code>Space（スペースキー）</code>, <code>変換/無変換</code></li><li><strong>右手人差し指：</strong> <code>6</code>, <code>7</code>, <code>Y</code>, <code>U</code>, <code>H</code>, <code>J</code>, <code>N</code>, <code>M</code></li><li><strong>右手中指：</strong> <code>8</code>, <code>I</code>, <code>K</code>, <code>,</code>（読点/ね）</li><li><strong>右手薬指：</strong> <code>9</code>, <code>O</code>, <code>L</code>, <code>.</code>（句点/る）</li><li><strong>右手小指：</strong> <code>0</code>, <code>-</code>, <code>^</code>, <code>P</code>, <code>@</code>, <code>[</code>, <code>;</code>, <code>:</code>, <code>]</code>, <code>/</code>, <code>Enter</code>, <code>Backspace</code>, <code>Shift</code></li></ul>',
    keywords: ['キーボード指の配置', '担当指一覧タイピング', '正しい指の位置キーボード']
  },
  {
    id: 'which-finger-type-c-key',
    question: '「C」のキーはどの指で押すのが正しいですか？',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: '標準的なタッチタイピングでは、「C」キーは「左手の中指」で押します。',
    answerHtml: '<p>正しいタイピングフォームでは、<strong>Cキー</strong>は<strong>左手の中指</strong>で入力します。ホームポジションの「<strong>D</strong>」に置いた中指を左斜め下へ伸ばしてCを押し、すぐにDの位置へ戻します。</p>',
    keywords: ['Cキーどの指', 'キーボードCを押す指', '左手中指Cキー']
  },
  {
    id: 'how-many-fingers-for-typing',
    question: 'タイピングは何本の指を使って打つのが理想ですか？',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: '文字や数字に8本の指、スペースキーに親指の合計10本すべての指を使うのが理想です。',
    answerHtml: '<p>タイピングは<strong>10本すべての指</strong>を使うのが最も効率的です。負荷が各指に均等に分散され、腱鞘炎の予防になるだけでなく、60〜120+ WPMの高速入力を無理なく達成できます。</p>',
    keywords: ['タイピング指何本', '10本指タイピングメリット', '指の使い方キーボード']
  },
  {
    id: 'what-are-types-of-typing',
    question: 'タイピングの入力方式やスタイルにはどんな種類がありますか？',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: 'タッチタイピング、ハント＆ペック、ハイブリッド打鍵、親指タイピング、テンキー入力、ステノタイプ（速記）などがあります。',
    answerHtml: '<p>主なタイピング方式：</p><ol class="list-decimal pl-5 my-2 space-y-1"><li><strong>タッチタイピング（Touch Typing）：</strong> 10本指でキーを見ずに入力。</li><li><strong>ハント＆ペック（Hunt and Peck）：</strong> キーを探しながら2本指で入力。</li><li><strong>ハイブリッド入力：</strong> 3〜7本の指で画面と手元を適度に見ながら打つ方式。</li><li><strong>親指タイピング：</strong> スマホや携帯端末での入力。</li><li><strong>テンキー10-Key入力：</strong> 片手での高速数値入力。</li><li><strong>ステノタイプ速記打鍵：</strong> 裁判記録などで複数キーを同時押しし200〜300+ WPMを出す特殊方式。</li></ol>',
    keywords: ['タイピング種類', '打鍵方式一覧', 'キーボード入力スタイル']
  },
  {
    id: 'what-are-three-types-of-typing',
    question: 'PCタイピングの3大分類とは何ですか？',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: '「タッチタイピング（10本指）」、「ハント＆ペック（2本指）」、「ハイブリッドタイピング」の3つです。',
    answerHtml: '<p>キーボード入力における代表的な3つのスタイル：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>1. タッチタイピング（10指完全ブラインド）：</strong> ホームポジションを基点に一切キーを見ない。</li><li><strong>2. ハント＆ペック（2指目視入力）：</strong> 手元を凝視しながら人差し指中心で叩く。</li><li><strong>3. ハイブリッド（複合型）：</strong> 3〜6本の指を使い、感覚と手元のチラ見を併用する。</li></ul>',
    keywords: ['タイピング3つの分類', 'タイピングスタイル3種類', 'ブラインドタッチ比較']
  },
  {
    id: 'what-is-typing-style',
    question: 'タイピングスタイル（Typing Style）とは何ですか？',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: 'タイピスト個人の指の割り当てや手の構え、姿勢、キーストロークのリズムの特徴を指します。',
    answerHtml: '<p><strong>タイピングスタイル</strong>とは、個人の指の動かし方の癖やフォームを指します。標準のホームポジション以外にも、ゲーマー向けのWASDホームスタイルなど独自のスタイルが存在します。</p>',
    keywords: ['タイピングスタイルとは', 'キーボード打鍵フォーム', 'タイピング癖']
  },
  {
    id: 'fastest-typing-method',
    question: '世界で最も速いタイピング方法は何ですか？',
    category: 'technique',
    categoryLabel: '指の配置・テクニック',
    shortAnswer: '一般キーボードでは10本指タッチタイピング（150〜216+ WPM）、専用機を含めるとコード入力ステノタイプ速記（225〜360+ WPM）が世界最速です。',
    answerHtml: '<p>機材に応じた最速方式：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>一般PCキーボード：</strong> <strong>10本指タッチタイピング</strong>が最速で、世界トップ層は<strong>150〜216+ WPM</strong>に達します。</li><li><strong>速記専用ステノタイプ機：</strong> ピアノの和音のように複数キーを同時に押して単語全体を出力する<strong>コード式ステノタイプ</strong>が世界最速で、法廷速記者などは<strong>225〜360+ WPM</strong>を叩き出します。</li></ul>',
    keywords: ['世界最速タイピング方法', 'ステノタイプ速記', '一番速く文字を打つ方法']
  },

  // --- 4. キーボード・配列・歴史 ---
  {
    id: 'what-is-qwerty-typing',
    question: 'QWERTY（クワーティ）配列とは何ですか？',
    category: 'keyboards',
    categoryLabel: 'キーボード・配列・歴史',
    shortAnswer: 'キーボード上段のアルファベット左から6文字が「Q-W-E-R-T-Y」と並ぶ世界標準の配列です。',
    answerHtml: '<p><strong>QWERTY配列</strong>は、左上の英字列が<strong>Q-W-E-R-T-Y</strong>から始まる最も普及した配列です。1873年にクリストファー・ショールズが機械式タイプライターのアーム衝突を防ぐために開発し、現代のPCやスマートフォンでも世界標準となっています。</p>',
    keywords: ['qwerty配列とは', 'クワーティ配列', 'キーボード配列標準']
  },
  {
    id: 'why-qwerty-and-not-abc',
    question: 'なぜキーボードはABC順（アルファベット順）ではないのですか？',
    category: 'keyboards',
    categoryLabel: 'キーボード・配列・歴史',
    shortAnswer: '初期のABC順タイプライターでは、隣り合うキーを素早く打つと金属アーム同士が絡まって故障したためです。',
    answerHtml: '<p>1860年代の初期タイプライターは<strong>A-B-C-D-E</strong>順でした。しかし速く打つと隣り合う文字の金属アーム（タイプバー）が空中で衝突して頻繁にジャム（絡まり）を起こしました。考案者のショールズがよく一緒に使われる文字同士を離して配置したのが<strong>QWERTY</strong>配列の始まりです。</p>',
    keywords: ['なぜキーボードはabc順じゃないのか', 'キーボード配列の理由', 'qwerty歴史']
  },
  {
    id: 'who-invented-qwerty',
    question: 'QWERTY配列を発明したのは誰ですか？',
    category: 'keyboards',
    categoryLabel: 'キーボード・配列・歴史',
    shortAnswer: 'アメリカの新聞編集者・発明家であるクリストファー・レイサム・ショールズ（Christopher Latham Sholes）が1867〜1873年に発明しました。',
    answerHtml: '<p>QWERTY配列は、ウィスコンシン州の<strong>クリストファー・レイサム・ショールズ</strong>がサミュエル・ソウル、カルロス・グリデンと共に開発し、1878年に特許を取得後、レミントン社にライセンス供与されました。</p>',
    keywords: ['qwerty発明者', 'キーボード配列開発者', 'クリストファーショールズ']
  },
  {
    id: 'who-invented-keyboard',
    question: 'コンピューターのキーボードを発明したのは誰ですか？',
    category: 'keyboards',
    categoryLabel: 'キーボード・配列・歴史',
    shortAnswer: 'ショールズのタイプライター（1868年）を起源とし、1960年代のベル研究所やコンピューター端末開発者たちによって現代のPCキーボードへ進化しました。',
    answerHtml: '<p>現代のキーボードの進化史：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>ショールズ（1868年）：</strong> 実用的な近代タイプライターとQWERTY配列を発明。</li><li><strong>テレタイプ・パンチカード（1930〜50年代）：</strong> データを電子送信する入力装置へ発展。</li><li><strong>ベル研究所とVDT端末（1960年代）：</strong> ディスプレイと静電容量キーボードを統合し、現代の対話型PCキーボードが完成。</li></ul>',
    keywords: ['キーボードを発明した人', 'パソコンキーボード歴史', 'タイプライター起源']
  },
  {
    id: 'qwerty-vs-azerty',
    question: 'QWERTY配列とAZERTY配列の違いは何ですか？',
    category: 'keyboards',
    categoryLabel: 'キーボード・配列・歴史',
    shortAnswer: 'QWERTYは世界標準ですが、AZERTYはフランス語向けにQとA、WとZが入れ替えられ、アクセント文字が打ちやすくなっています。',
    answerHtml: '<p><strong>QWERTY</strong>と<strong>AZERTY</strong>の主な違い：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>QWERTY：</strong> 日本、英語圏、国際的な標準。数字キーをShiftなしで直接入力可能。</li><li><strong>AZERTY：</strong> フランスやベルギーの標準。<code>Q</code>と<code>A</code>、<code>W</code>と<code>Z</code>の位置が逆転し、<code>M</code>がLの右に配置され、フランス語のアクセント文字（é, è, ç, à）が優先されています。</li></ul>',
    keywords: ['qwerty azerty違い', 'フランス語キーボード配列', 'キーボード配列比較']
  },
  {
    id: 'three-main-types-of-keyboards',
    question: 'キーボードの3大スイッチ方式とは何ですか？',
    category: 'keyboards',
    categoryLabel: 'キーボード・配列・歴史',
    shortAnswer: '「メカニカルキーボード」、「メンブレンキーボード」、「パンタグラフ（シザースイッチ）キーボード」の3つです。',
    answerHtml: '<p>キーボードの主要な3つの構造：</p><ol class="list-decimal pl-5 my-2 space-y-2"><li><strong>メカニカルキーボード：</strong> 各キーに独立した機械式スイッチ（赤軸・青軸・茶軸など）を搭載。最高の打鍵感、高耐久性（5000万〜1億回）、高速入力に最適。</li><li><strong>メンブレンキーボード：</strong> ラバードームとシート基板を使用。静音で安価、オフィス用PCに多い。</li><li><strong>パンタグラフ（シザースイッチ）：</strong> X字の支持金具を採用した薄型構造。ノートPCやApple Magic Keyboardに採用。</li></ol>',
    keywords: ['キーボード種類メカニカルメンブレン', 'パンタグラフキーボードとは', 'キースイッチ種類']
  },
  {
    id: 'what-are-10-key-typing-skills',
    question: 'テンキー技能（10-Keyスキル）とは何ですか？',
    category: 'keyboards',
    categoryLabel: 'キーボード・配列・歴史',
    shortAnswer: 'キーボード右側のテンキー（数字キー）を見ずに片手で素早く正確に数値入力できるスキルのことです。',
    answerHtml: '<p><strong>テンキー技能</strong>とは、テンキーパッドの「<strong>5</strong>」の突起に中指を置き、ブラインドタッチで<strong>毎時8,000〜12,000+打鍵</strong>の超高速入力を行う技術です。経理や銀行業務などで必須とされます。</p>',
    keywords: ['テンキーブラインドタッチ', '10キー入力スキル', 'テンキー打ち方']
  },
  {
    id: 'what-is-a-10-key-typing',
    question: 'テンキータイピングとは何ですか？',
    category: 'keyboards',
    categoryLabel: 'キーボード・配列・歴史',
    shortAnswer: '右手だけで0〜9の数字や四則演算記号を打つ片手タイピング技法のことです。',
    answerHtml: '<p><strong>テンキータイピング</strong>は、片手で0〜9、小数点、Enter、四則演算（+ - * /）を操作する技術です。電卓やデータ入力業務の標準となっています。</p>',
    keywords: ['テンキータイピングとは', '数値入力練習', 'テンキー試験']
  },

  // --- 5. 練習＆学習方法 ---
  {
    id: 'basics-of-typing',
    question: 'タイピング上達のための基本ルールは何ですか？',
    category: 'practice',
    categoryLabel: '練習・学習方法',
    shortAnswer: 'ホームポジションの維持、背筋を伸ばした正しい姿勢、手元を見ず画面を見ること、速度より正確率を最優先することです。',
    answerHtml: '<p>タイピング習得の絶対原則：</p><ol class="list-decimal pl-5 my-2 space-y-1"><li><strong>ホームポジション：</strong> 左手<code>A-S-D-F</code>、右手<code>J-K-L-;</code>に置き、<code>F</code>と<code>J</code>の突起を手がかりにする。</li><li><strong>担当指の厳守：</strong> 決められた指以外でキーを押さない。</li><li><strong>正しい姿勢：</strong> 背筋を伸ばし、足の裏を床につけ、手首を軽く浮かせる。</li><li><strong>手元を見ない：</strong> 画面の文字と指先の感覚だけを信じる。</li><li><strong>正確率第一：</strong> 最初は98%以上の正確さを維持し、速度は後から上げる。</li></ol>',
    keywords: ['タイピング基本ルール', 'タイピング上達のコツ', 'タッチタイピング基礎']
  },
  {
    id: 'how-to-improve-10-finger-typing',
    question: '10本指のタッチタイピングを素早く上達させるには？',
    category: 'practice',
    categoryLabel: '練習・学習方法',
    shortAnswer: '打鍵後にホームポジションへ戻す癖をつけ、1日15分の練習を継続し、ゲームで反射神経を鍛えます。',
    answerHtml: '<p>短期間で上達するための秘訣：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>ホームポジションへ戻る：</strong> キーを打ったら必ず定位置に戻る習慣をつける。</li><li><strong>毎日15分の小分け練習：</strong> <a href="/ja/practice" class="text-link underline hover:opacity-80">練習ラボ</a>での毎日の短時間練習が最も効果的です。</li><li><strong>手元を見るのを禁止：</strong> 脳にキーの位置を強制的に記憶させます。</li><li><strong>2Dタイピングゲームで遊ぶ：</strong> <a href="/ja/game/meteor-strike" class="text-link underline hover:opacity-80">Meteor Strike</a>や<a href="/ja/game/neon-ninja" class="text-link underline hover:opacity-80">Neon Ninja</a>で楽しく反射速度を鍛えます。</li></ul>',
    keywords: ['タッチタイピング上達方法', 'タイピング速くする方法', 'ブラインドタッチ練習方法']
  },
  {
    id: 'how-can-i-learn-to-touch-type',
    question: 'ゼロからタッチタイピングを習得する手順は？',
    category: 'practice',
    categoryLabel: '練習・学習方法',
    shortAnswer: 'ホームポジションを覚え、手元を見ずに段ごとに1列ずつ練習を進めます。',
    answerHtml: '<p>初心者のための段階的ステップ：</p><ol class="list-decimal pl-5 my-2 space-y-1"><li><strong>ホームポジションを覚える：</strong> <strong>ASDF</strong>と<strong>JKL;</strong>の位置に指を置く。</li><li><strong>1段ずつマスター：</strong> 中段（ホーム行）→ 上段（QWERTY）→ 下段（ZXCV）→ 数字行の順に進める。</li><li><strong>画面上のキーガイドを見る：</strong> 下を向かずに画面の仮想キーボードを見る。</li><li><strong>毎日15分反復練習：</strong> 単語や短文を繰り返し打つ。</li><li><strong>スピードテストで計測：</strong> <a href="/ja/speed-test" class="text-link underline hover:opacity-80">タイピングテスト</a>で週ごとの成長を確認。</li></ol>',
    keywords: ['ブラインドタッチ初心者練習', 'タッチタイピングやり方', 'タイピング講座無料']
  },
  {
    id: 'how-do-i-practice-typing',
    question: '効果的な1日のタイピング練習メニューは？',
    category: 'practice',
    categoryLabel: '練習・学習方法',
    shortAnswer: '指のウォーミングアップ5分、60秒スピードテスト5分、2Dゲーム練習10分の合計20分メニューが最適です。',
    answerHtml: '<p>おすすめの20分デイリーメニュー：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>指の準備体操（5分）：</strong> <a href="/ja/practice" class="text-link underline hover:opacity-80">練習ラボ</a>でホームポジションの指鳴らし。</li><li><strong>速度測定（5分）：</strong> <a href="/ja/speed-test" class="text-link underline hover:opacity-80">スピードテスト</a>で現状のWPMをチェック。</li><li><strong>ゲーム実践（10分）：</strong> <a href="/ja/game/dungeon-escape" class="text-link underline hover:opacity-80">Dungeon Escape</a>などでゲームをクリア。</li><li><strong>苦手キーの復習：</strong> ミスしたキーを重点的に練習。</li></ul>',
    keywords: ['タイピング練習メニュー', '毎日のタイピングルーティン', 'タイピング練習メニュー20分']
  },
  {
    id: 'how-can-i-practice-typing-numbers',
    question: '数字キーや記号を素早く正確に打つ練習方法は？',
    category: 'practice',
    categoryLabel: '練習・学習方法',
    shortAnswer: 'ホームポジションからの最上段への指伸ばしを覚え、テンキーや数字混じりの文章を練習します。',
    answerHtml: '<p>数字・記号入力のコツ：</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>最上段の指の担当：</strong> 左小指(1)、左薬指(2)、左中指(3)、左人差し指(4, 5)、右人差し指(6, 7)、右中指(8)、右薬指(9)、右小指(0)。</li><li><strong>テンキーの反復練習：</strong> 5の突起を頼りに片手で数値を連続入力。</li><li><strong>数字混じりの長文を打つ：</strong> 日付や金額、数式を含むテキストを練習ラボで打つ。</li><li><strong>数字対応ゲーム：</strong> <a href="/ja/game/deep-sea" class="text-link underline hover:opacity-80">Deep Sea</a>や<a href="/ja/game/meteor-strike" class="text-link underline hover:opacity-80">Meteor Strike</a>の数字ウェーブに挑戦。</li></ul>',
    keywords: ['数字タイピング練習', '最上段数字キー打ち方', 'テンキー練習']
  },
  {
    id: 'what-is-the-process-of-typing',
    question: 'タイピング時、脳と指の間ではどのようなプロセスが起きていますか？',
    category: 'practice',
    categoryLabel: '練習・学習方法',
    shortAnswer: '「視覚認知（Perception）」、「認知的チャンキング（Chunking）」、「運動指令（Execution）」、「感覚フィードバック（Feedback）」の4段階です。',
    answerHtml: '<p>タイピングの神経科学的・生理学的プロセス：</p><ol class="list-decimal pl-5 my-2 space-y-2"><li><strong>1. 視覚認知・発想：</strong> 画面の文字を視覚が捉える、または頭の中で文章を思い浮かべる。</li><li><strong>2. 認知的チャンキング：</strong> 脳が文字を1文字ずつではなく、音節や単語のかたまり（チャンク）として運動パターンに変換する。</li><li><strong>3. 運動指令の実行：</strong> 脳から神経を通って各指へ瞬時に打鍵の電気信号が送られる。</li><li><strong>4. 感覚フィードバック：</strong> 指先の打鍵感、カチッという打鍵音、画面の文字を確認し、ミリ秒単位で次のリズムを微調整する。</li></ol>',
    keywords: ['タイピングの脳科学', 'タイピングの仕組み', '認知的チャンキングタイピング']
  }
];
