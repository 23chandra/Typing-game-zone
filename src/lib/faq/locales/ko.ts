import type { FAQItem } from '../types';

export const koFAQ: FAQItem[] = [
  // --- 1. 타자 게임 및 도구 ---
  {
    id: 'best-online-typing-game',
    question: '최고의 무료 온라인 타자 연습 게임은 무엇인가요?',
    category: 'games',
    categoryLabel: '타자 게임 및 도구',
    shortAnswer: 'Typing Game Zone은 21가지 무료 2D 아케이드 타자 게임, 실시간 타자 속도 측정(WPM/타), 생생한 기계식 키보드 타건음을 제공하는 최고의 타자 플랫폼입니다.',
    answerHtml: '<p>최고의 온라인 타자 게임은 흥미진진한 아케이드 액션(2D 슈팅 전투, 좀비 서바이벌, 리듬 액션)과 정밀한 <strong>WPM/타수 측정</strong> 및 근육 기억 훈련을 완벽하게 결합합니다. <strong>Typing Game Zone</strong>은 다음과 같은 강점으로 전 세계 학습자들에게 인정받고 있습니다:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>21가지 무료 2D 아케이드 게임:</strong> <a href="/ko/game/type-defender" class="text-link underline hover:opacity-80">Type Defender</a>, <a href="/ko/game/zombie-horde" class="text-link underline hover:opacity-80">Zombie Horde</a>, <a href="/ko/game/cyber-hacker" class="text-link underline hover:opacity-80">Cyber Hacker</a>, <a href="/ko/game/laser-turret" class="text-link underline hover:opacity-80">Laser Turret</a>, <a href="/ko/game/word-tetris" class="text-link underline hover:opacity-80">Word Tetris</a> 등.</li><li><strong>105단계 난이도 구성:</strong> 초보자를 위한 30 WPM 연습부터 100+ WPM의 극한 보스전까지 지원.</li><li><strong>실시간 기계식 타건음 합성:</strong> 체리 청축(Blue)의 경쾌한 클릭음, 홀리판다(Holy Panda)의 조약돌 타건음, 적축 및 클래식 타자기 소리 구현.</li><li><strong>100% 무설치 브라우저 플레이:</strong> 다운로드나 결제 없이 바로 시작할 수 있습니다.</li></ul>',
    keywords: ['타자 연습 게임 추천', '온라인 무료 타자 게임', '한컴타자연습 대체', 'typing game zone', '타자 속도 측정']
  },
  {
    id: 'typing-games-free',
    question: '사이트의 모든 타자 게임은 무료로 이용할 수 있나요?',
    category: 'games',
    categoryLabel: '타자 게임 및 도구',
    shortAnswer: '네, Typing Game Zone의 21가지 게임, 타자 속도 테스트, 자리익히기 연습 도구는 100% 완전 무료입니다.',
    answerHtml: '<p><strong>네, 완전히 무료입니다!</strong> <strong>Typing Game Zone</strong>의 모든 21개 게임, 타자 속도 측정기, 터치 타이핑 연습 모듈, 17가지 테마는 유료 결제나 프로그램 설치 없이 <strong>100% 무료</strong>로 제공됩니다. PC, 노트북, 크롬북, 태블릿 브라우저에서 바로 즐기실 수 있습니다.</p>',
    keywords: ['무료 타자 게임', '타자 연습 사이트 무료', '타자 게임 무설치', '인터넷 타자 연습']
  },
  {
    id: 'test-typing-skills',
    question: '내 타자 속도와 실력을 측정하려면 어떻게 해야 하나요?',
    category: 'games',
    categoryLabel: '타자 게임 및 도구',
    shortAnswer: 'Typing Game Zone의 무료 타자 속도 측정기를 사용하면 WPM, 분당 타수(CPM), 정확도(%), 타건 리듬 안정성을 즉시 측정할 수 있습니다.',
    answerHtml: '<p><a href="/ko/speed-test" class="text-link underline hover:opacity-80">실시간 타자 속도 측정기</a>에서 자신의 타자 실력을 정밀하게 측정할 수 있습니다:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>맞춤형 타이머:</strong> 15초, 30초, 60초, 120초 테스트 모드 지원.</li><li><strong>정밀 분석 및 그래프:</strong> 총 WPM, 순수 WPM, 타건 정확도(%), 타이핑 리듬 편차 표시.</li><li><strong>17가지 Monkeytype 테마:</strong> Serika Dark, Dracula, Cyberpunk, Carbon, Matrix 등.</li><li><strong>기계식 스위치 사운드:</strong> 키를 누를 때마다 생생한 타건음 제공.</li></ul>',
    keywords: ['타자 속도 테스트', '타자 속도 측정', '분당 타수 측정', '타자 검정 시험 연습']
  },
  {
    id: 'ghost-typing',
    question: '고스트 타이핑(Ghost Typing)이란 무엇인가요?',
    category: 'games',
    categoryLabel: '타자 게임 및 도구',
    shortAnswer: '키보드 하드웨어의 동시 입력 씹힘 현상(고스팅) 또는 연습 시 목표 속도로 앞서가는 반투명 가이드 커서를 의미합니다.',
    answerHtml: '<p><strong>고스트 타이핑</strong>은 두 가지 주요 의미를 가집니다:</p><ol class="list-decimal pl-5 my-2 space-y-2"><li><strong>키보드 하드웨어 고스팅(Ghosting):</strong> 멤브레인 키보드에서 3개 이상의 키를 동시에 누를 때 일부 키가 인식되지 않거나 오작동하는 현상. 기계식 및 게이밍 키보드는 <em>안티 고스팅</em>과 <em>무한 동시 입력(N-Key Rollover / NKRO)</em>으로 이를 해결합니다.</li><li><strong>고스트 레이서(Ghost Racing):</strong> 타자 연습 시 설정한 목표 속도(예: 60 WPM 또는 개인 최고 기록)로 움직이는 반투명 가상 커서로, 기록 갱신을 돕는 기능입니다.</li></ol>',
    keywords: ['고스트 타이핑 뜻', '키보드 고스팅 현상', '무한 동시 입력', '타자 고스트 레이서']
  },
  {
    id: 'practice-typing-paragraphs',
    question: '긴 문장이나 문단을 끊김 없이 빠르게 연습하는 방법은 무엇인가요?',
    category: 'games',
    categoryLabel: '타자 게임 및 도구',
    shortAnswer: '60초 또는 120초 문단 모드를 선택하고, 현재 단어를 치는 동안 시선은 다음 2~3단어를 미리 읽어두는 습관을 기릅니다.',
    answerHtml: '<p>긴 글과 문단을 매끄럽게 타이핑하기 위한 핵심 팁:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>장문 테스트 활용:</strong> <a href="/ko/speed-test" class="text-link underline hover:opacity-80">타자 속도 측정</a>에서 60초 또는 120초 모드를 선택하여 대문자, 마침표, 쉼표, 특수문자를 종합 연습합니다.</li><li><strong>2~3단어 앞서 읽기(선독):</strong> 손가락이 현재 단어를 입력하는 동안 시선은 이미 다음 단어를 파악하여 멈칫거림을 없앱니다.</li><li><strong>일정한 박자 유지:</strong> 순간적으로 서두르기보다 메트로놈처럼 일정한 템포로 칩니다.</li><li><strong>다양한 장르의 글 연습:</strong> 소설, 뉴스, 코드 등을 폭넓게 연습하여 유연한 손가락 기억력을 기릅니다.</li></ul>',
    keywords: ['긴글 타자 연습', '문단 타자 연습', '타자 속도 올리는 법', '장문 타자 빨리 치기']
  },

  // --- 2. 타자 속도 및 기준 ---
  {
    id: 'good-typing-speed',
    question: '일반적으로 좋은 타자 속도(WPM / 분당 타수)의 기준은 어떻게 되나요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: '업무 및 학습 기준 50~70 WPM(분당 약 250~350타, 정확도 95% 이상)이 우수한 수준이며, 전문 타이피스트는 80~100+ WPM(400~500+타)에 달합니다.',
    answerHtml: '<p>컴퓨터 사용자와 직장인에게 <strong>우수한 타자 속도</strong>는 정확도 95% 이상에서 <strong>50~70 WPM (분당 약 250~350타)</strong>입니다. 전 세계 타자 수준 분류는 다음과 같습니다:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>초보자 (20–35 WPM / 100–175타):</strong> 독수리 타법으로 키보드를 보며 치는 단계.</li><li><strong>평균 수준 (40–50 WPM / 200–250타):</strong> 일상적인 이메일 및 문서 작성에 무리 없는 전 세계 평균.</li><li><strong>숙련/능숙 (50–70 WPM / 250–350타):</strong> 프로그래머, 작가, 학생에게 이상적인 실용적 속도.</li><li><strong>고급자 (75–95 WPM / 375–475타):</strong> 10손가락 터치 타이핑을 완벽히 마스터한 상위 10%.</li><li><strong>엘리트/달인 (100–140+ WPM / 500+타 이상):</strong> 전 세계 상위 1%의 극한 스피드 타이피스트.</li></ul>',
    keywords: ['타자 평균 타수', '타자 몇 타가 빠른가요', 'wpm 타수 변환', '타자 속도 기준']
  },
  {
    id: 'what-is-20-wpm',
    question: '타자 속도 20 WPM은 어느 정도의 속도인가요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: '20 WPM은 분당 약 100타에 해당하며, 키보드를 보며 치는 초보자 수준입니다.',
    answerHtml: '<p><strong>20 WPM (Words Per Minute)</strong>은 분당 약 <strong>100타</strong>를 의미합니다. 키보드를 내려다보며 치는 입문자 단계입니다. 당사 <a href="/ko/practice" class="text-link underline hover:opacity-80">연습실</a>에서 매일 15분씩 기본 자리 연습을 진행하면 수주일 내에 40+ WPM(200+타)으로 두 배 이상 향상될 수 있습니다.</p>',
    keywords: ['20 wpm 속도', '20 wpm 몇 타', '타자 초보 속도']
  },
  {
    id: 'what-is-type-45-wpm',
    question: '타자 45 WPM(약 225타)은 괜찮은 속도인가요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: '45 WPM은 분당 약 225타로, 전 세계 성인 평균을 웃돌며 일상 업무를 쾌적하게 수행할 수 있는 수준입니다.',
    answerHtml: '<p><strong>45 WPM</strong>은 분당 약 <strong>225타</strong>에 해당합니다. 성인 세계 평균(~40 WPM)을 상회하며, 생각의 흐름이 키보드 입력에 의해 끊기지 않는 쾌적한 속도입니다.</p>',
    keywords: ['45 wpm 타수', '45 wpm 빠른가요', '타자 45wpm 수준']
  },
  {
    id: 'is-27-typing-speed-good',
    question: '타자 속도 27 WPM은 좋은 편인가요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: '27 WPM은 초등학생이나 10손가락 자리익히기 초보자에게는 자연스럽지만, 성인 평균(40~45 WPM)보다는 낮습니다.',
    answerHtml: '<p><strong>27 WPM (약 135타)</strong>은 <strong>발전 단계</strong>입니다. 초등학교 저학년이나 처음 자리익히기를 배우는 성인에게는 정상적인 속도이지만, 직장인 평균보다는 낮습니다. <a href="/ko/practice" class="text-link underline hover:opacity-80">Typing Game Zone</a>에서 매일 10분씩 연습하면 50+ WPM까지 빠르게 도달할 수 있습니다.</p>',
    keywords: ['27 wpm 타수', '타자 27wpm 좋은가요', '타자 속도 올리기']
  },
  {
    id: 'poor-typing-speed',
    question: '어느 정도의 타자 속도가 느리거나 미흡한 수준으로 간주되나요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: '성인 기준으로 정확도 90% 미만에 30 WPM 미만(분당 150타 미만)은 느린 수준으로 평가됩니다.',
    answerHtml: '<p><strong>30 WPM 미만(150타 미만)</strong>의 속도는 키보드를 보면서 찾는 비효율적인 방식으로 인해 목과 어깨의 피로를 유발하고 업무 생산성을 저하시킵니다.</p>',
    keywords: ['느린 타자 속도 기준', '타자가 너무 느려요', '타자 실력 부족']
  },
  {
    id: 'good-typing-speed-by-age',
    question: '연령별 권장 평균 타자 속도는 어떻게 되나요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: '초등학생 15~25 WPM, 중학생 30~45 WPM, 고등학생 45~60 WPM, 성인 직장인 55~75 WPM이 표준입니다.',
    answerHtml: '<p>연령별 타자 속도 기준 가이드:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>초등학생 (6~10세):</strong> 15~25 WPM (정확한 손가락 자리 익히기 중심).</li><li><strong>중학생 (11~13세):</strong> 30~45 WPM (디지털 수업 과제 수행에 적합).</li><li><strong>고등학생 및 청소년 (14~18세):</strong> 45~60 WPM (수행평가 및 논술 작성).</li><li><strong>성인 및 직장인 (19~40세):</strong> 55~75 WPM (프로그래밍, 사무직 권장).</li><li><strong>중장년층 (41~60세):</strong> 45~60 WPM.</li><li><strong>시니어 (60세 이상):</strong> 30~45 WPM.</li></ul>',
    keywords: ['연령별 타자 속도', '학생 타자 속도 기준', '초등학생 타자 몇 타']
  },
  {
    id: 'how-fast-should-12-year-old-type',
    question: '12세(중학생) 학생의 타자 속도 목표는 어느 정도가 적당한가요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: '12세 학생은 정확도 90~95% 이상으로 30~45 WPM(약 150~225타)을 목표로 하는 것이 좋습니다.',
    answerHtml: '<p>12세 학생은 <strong>정확도 90~95% 이상에 30~45 WPM</strong>을 목표로 권장합니다. 35+ WPM 이상이면 학교 과제나 디지털 시험을 편안하게 치를 수 있습니다.</p>',
    keywords: ['12살 타자 속도', '중1 타자 목표', '학생 타자 몇 타']
  },
  {
    id: 'gen-z-average-typing-speed',
    question: 'Z세대(Gen Z)의 평균 타자 속도는 어느 정도인가요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: 'PC 키보드에서는 평균 38~45 WPM이지만, 스마트폰 터치스크린에서는 두 엄지로 40~60+ WPM에 이릅니다.',
    answerHtml: '<p><strong>Z세대</strong>는 물리 키보드에서 평균 <strong>38~45 WPM</strong>을 기록하지만, 스마트폰 화면에서는 <strong>40~60+ WPM</strong>이라는 놀라운 속도를 보입니다. 2D 타자 아케이드 게임을 통해 이러한 스마트폰 순발력을 키보드 타자 실력으로 빠르게 전이시킬 수 있습니다.</p>',
    keywords: ['Z세대 타자 속도', '스마트폰 타자 속도', 'Gen Z 타자 실력']
  },
  {
    id: 'top-1-percent-wpm',
    question: '전 세계 상위 1% 초고수들의 타자 속도는 얼마나 빠른가요?',
    category: 'speed',
    categoryLabel: '타자 속도 및 기준 (WPM/타)',
    shortAnswer: '상위 1%는 지속 속도 120+ WPM(600+타) 이상을 유지하며, 세계 챔피언들은 150~216+ WPM(750~1000+타)에 도달합니다.',
    answerHtml: '<p><strong>세계 상위 1% 타이피스트</strong>는 표준 QWERTY 키보드에서 98%+ 정확도로 <strong>120 WPM(600타) 이상</strong>을 기록합니다. Monkeytype 및 Typing Game Zone의 챔피언들은 단어 단위 시각 인지와 특수 기계식 스위치를 통해 <strong>150~216+ WPM</strong>에 도달합니다.</p>',
    keywords: ['타자 세계 랭킹 1위 속도', '타자 기네스북 기록', '가장 빠른 타자 속도']
  },

  // --- 3. 손가락 위치 및 타법 ---
  {
    id: 'ten-finger-typing-called',
    question: '10개 손가락으로 키보드를 안 보고 치는 타법을 무엇이라 하나요?',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '공식 명칭은 터치 타이핑(Touch Typing) 또는 자리익히기 / 블라인드 터치(Blind Touch)라고 부릅니다.',
    answerHtml: '<p>키보드를 보지 않고 10손가락을 모두 사용하는 타법을 <strong>터치 타이핑(Touch Typing)</strong> 또는 <em>블라인드 터치</em>라고 합니다. 기본 자리(왼손 <strong>ㅁㄴㅇㄹ / ASDF</strong>, 오른손 <strong>ㅓㅏㅣ; / JKL;</strong>)에 손을 두고 근육 기억으로 칩니다.</p>',
    keywords: ['10손가락 타법 명칭', '터치 타이핑이란', '블라인드 터치 뜻']
  },
  {
    id: 'two-finger-typing-called',
    question: '검지 두 개로만 찾는 타법을 무엇이라고 부르나요?',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '흔히 "독수리 타법" 또는 "헌트 앤 펙"(Hunt and Peck)이라고 부릅니다.',
    answerHtml: '<p>두 검지만으로 글자를 찾아 누르는 방식을 <strong>"독수리 타법" (Hunt and Peck)</strong>이라고 부릅니다. 눈으로 키를 확인해야 하므로 목에 피로가 쌓이고 속도 한계가 명확합니다.</p>',
    keywords: ['독수리 타법 영어로', '두손가락 타법', '헌트앤펙 타법']
  },
  {
    id: 'which-finger-is-used-for-typing',
    question: '키보드의 각 키는 어떤 손가락으로 눌러야 하나요? (손가락별 자리 배치)',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '터치 타이핑에서는 10개 손가락마다 담당하는 열(Column)과 대각선 영역이 명확히 정해져 있습니다.',
    answerHtml: '<p>표준 키보드 손가락별 키 배치 가이드:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>왼손 새끼손가락:</strong> <code>1/`</code>, <code>ㅂ/Q</code>, <code>ㅁ/A</code>, <code>ㅋ/Z</code>, <code>Tab</code>, <code>Caps Lock</code>, <code>Shift</code>, <code>Ctrl</code>.</li><li><strong>왼손 약지:</strong> <code>2</code>, <code>ㅈ/W</code>, <code>ㄴ/S</code>, <code>ㅌ/X</code>.</li><li><strong>왼손 중지:</strong> <code>3</code>, <code>ㄷ/E</code>, <code>ㅇ/D</code>, <code>ㅊ/C</code>.</li><li><strong>왼손 검지:</strong> <code>4</code>, <code>5</code>, <code>ㄱ/R</code>, <code>ㅅ/T</code>, <code>ㄹ/F</code>, <code>ㅎ/G</code>, <code>ㅍ/V</code>, <code>ㅠ/B</code>.</li><li><strong>양손 엄지:</strong> <code>Space (스페이스바)</code>, <code>한/영 키</code>.</li><li><strong>오른손 검지:</strong> <code>6</code>, <code>7</code>, <code>ㅛ/Y</code>, <code>ㅕ/U</code>, <code>ㅗ/H</code>, <code>ㅓ/J</code>, <code>ㅜ/N</code>, <code>ㅡ/M</code>.</li><li><strong>오른손 중지:</strong> <code>8</code>, <code>ㅑ/I</code>, <code>ㅏ/K</code>, <code>,</code> (쉼표).</li><li><strong>오른손 약지:</strong> <code>9</code>, <code>ㅐ/O</code>, <code>ㅣ/L</code>, <code>.</code> (마침표).</li><li><strong>오른손 새끼손가락:</strong> <code>0</code>, <code>-</code>, <code>=</code>, <code>ㅔ/P</code>, <code>[</code>, <code>]</code>, <code>;</code>, <code>&#39;</code>, <code>/</code>, <code>Enter</code>, <code>Backspace</code>, <code>Shift</code>.</li></ul>',
    keywords: ['키보드 손가락 위치', '타자 손가락 배치도', '올바른 타자 자리']
  },
  {
    id: 'which-finger-type-c-key',
    question: 'C(ㅊ) 키는 어느 손가락으로 누르는 것이 정석인가요?',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '정석 타법에서 C(ㅊ) 키는 "왼손 중지"로 기본 자리 D(ㅇ)에서 우하단으로 대각선 이동하여 누릅니다.',
    answerHtml: '<p><strong>C(ㅊ) 키</strong>는 <strong>왼손 중지</strong>로 누릅니다. 기본 자리 <strong>D(ㅇ)</strong>에서 대각선 아래로 내려와 C를 친 후 즉시 원래 위치 D로 복귀합니다.</p>',
    keywords: ['c키 무슨 손가락', 'ㅊ키 누르는 손가락', '왼손 중지 c키']
  },
  {
    id: 'how-many-fingers-for-typing',
    question: '타자 칠 때 몇 개의 손가락을 사용하는 것이 가장 좋은가요?',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '문자/숫자에 8개 손가락, 스페이스바에 양손 엄지를 포함한 10개 손가락 전체를 사용하는 것이 가장 좋습니다.',
    answerHtml: '<p>가장 이상적인 타법은 <strong>10개 손가락 전체</strong>를 사용하는 것입니다. 손가락 관절의 부담을 고루 분산시켜 손목터널증후군을 예방하고 60~120+ WPM의 고속 타이핑을 달성할 수 있습니다.</p>',
    keywords: ['타자 손가락 몇개 써야 하나요', '10손가락 타법 장점', '올바른 타자법']
  },
  {
    id: 'what-are-types-of-typing',
    question: '키보드 타자 방식에는 어떤 종류들이 있나요?',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '터치 타이핑(자리익히기), 독수리 타법(Hunt and Peck), 하이브리드 타법, 엄지 타법(스마트폰), 텐키(숫자패드) 입력, 속기 타법(Stenography) 등이 있습니다.',
    answerHtml: '<p>주요 타자 방식의 분류:</p><ol class="list-decimal pl-5 my-2 space-y-1"><li><strong>터치 타이핑 (Touch Typing):</strong> 키보드를 안 보고 10손가락으로 입력.</li><li><strong>독수리 타법 (Hunt and Peck):</strong> 2개 검지로 보면서 입력.</li><li><strong>하이브리드 타법:</strong> 3~7개 손가락을 조합한 개별화된 방식.</li><li><strong>엄지 타법:</strong> 스마트폰과 태블릿 화면에서의 입력.</li><li><strong>텐키(10-Key) 타법:</strong> 숫자 키패드 한손 고속 입력.</li><li><strong>속기 타법:</strong> 법원 등에서 코드 형태로 200~300+ WPM을 치는 방식.</li></ol>',
    keywords: ['타자 방식 종류', '키보드 타법 분류', '타자 스타일']
  },
  {
    id: 'what-are-three-types-of-typing',
    question: '컴퓨터 타자의 3대 주요 유형은 무엇인가요?',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '터치 타이핑(10손가락), 독수리 타법(2손가락), 하이브리드 타법의 세 가지입니다.',
    answerHtml: '<p>가장 대표적인 3가지 타자 유형:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>1. 터치 타이핑 (10손가락):</strong> 기본 자리에 손을 얹고 모니터만 보며 입력.</li><li><strong>2. 독수리 타법 (2손가락):</strong> 시선이 키보드에 머무르며 검지 위주로 입력.</li><li><strong>3. 하이브리드 타법:</strong> 3~6개 손가락을 유연하게 활용하는 방식.</li></ul>',
    keywords: ['타자 3대 유형', '3가지 타법 비교', '터치 타이핑 독수리타법']
  },
  {
    id: 'what-is-typing-style',
    question: '타이핑 스타일(Typing Style)이란 무엇인가요?',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '개인이 타이핑할 때 나타나는 자세, 손가락 분배 습관, 타건 리듬의 고유한 특성을 말합니다.',
    answerHtml: '<p><strong>타이핑 스타일</strong>은 개개인의 손가락 사용 습관과 자세를 뜻합니다. 표준 10손가락 타법 외에도 게이머나 개발자들은 WASD 기반 등 효율적인 변형 스타일을 갖추기도 합니다.</p>',
    keywords: ['타이핑 스타일 뜻', '타자 습관', '타자 자세']
  },
  {
    id: 'fastest-typing-method',
    question: '세상에서 가장 빠른 타자 입력 방식은 무엇인가요?',
    category: 'technique',
    categoryLabel: '손가락 위치 및 타법',
    shortAnswer: '일반 컴퓨터 키보드에서는 10손가락 터치 타이핑(150~216+ WPM), 특수 기기 포함 시 화음식 속기 기계(225~360+ WPM)가 세계에서 가장 빠릅니다.',
    answerHtml: '<p>기기별 세계 최고속 방식:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>일반 PC 키보드:</strong> <strong>10손가락 터치 타이핑</strong>이 가장 빠르며 세계 최고수들은 <strong>150~216+ WPM (750~1000+타)</strong>에 달합니다.</li><li><strong>전문 속기 기계 (Stenotype):</strong> 피아노 화음처럼 여러 키를 동시에 눌러 음절과 단어 전체를 한 번에 입력하는 <strong>속기 타법</strong>이 세계에서 가장 빠르며 <strong>225~360+ WPM (1200~1800타)</strong>을 기록합니다.</li></ul>',
    keywords: ['세계에서 가장 빠른 타법', '속기사 타자 속도', '가장 빠른 타이핑']
  },

  // --- 4. 키보드, QWERTY 및 역사 ---
  {
    id: 'what-is-qwerty-typing',
    question: 'QWERTY(쿼티) 키보드 배열이란 무엇인가요?',
    category: 'keyboards',
    categoryLabel: '키보드, QWERTY 및 역사',
    shortAnswer: '키보드 상단 알파벳 첫 6글자(Q-W-E-R-T-Y)에서 이름을 딴 세계 표준 키보드 배열입니다.',
    answerHtml: '<p><strong>QWERTY 배열</strong>은 1873년 크리스토퍼 숄스(Christopher Latham Sholes)가 기계식 타자기 활자대가 엉키는 것을 방지하기 위해 자주 쓰이는 철자를 분리 배치한 표준 배열로, 오늘날 전 세계 PC와 스마트폰의 표준이 되었습니다.</p>',
    keywords: ['쿼티 키보드 뜻', 'qwerty 자판 유래', '표준 키보드 배열']
  },
  {
    id: 'why-qwerty-and-not-abc',
    question: '왜 키보드는 ABC 순서가 아닌 QWERTY로 배열되어 있나요?',
    category: 'keyboards',
    categoryLabel: '키보드, QWERTY 및 역사',
    shortAnswer: '초기 ABC 순서 타자기에서 인접한 키를 빠르게 누르면 활자 쇠막대가 서로 부딪혀 고장 났기 때문입니다.',
    answerHtml: '<p>1860년대 초기 타자기는 <strong>A-B-C-D-E</strong> 순서였습니다. 하지만 빠르게 칠 때 인접한 활자 막대가 공중에서 엉켜 멈추는 결함이 생겼습니다. 발명가 숄스는 자주 함께 쓰이는 알파벳을 멀리 떨어뜨린 <strong>QWERTY</strong> 배열을 만들어 엉킴 현상을 해결했습니다.</p>',
    keywords: ['키보드가 abc순이 아닌 이유', '쿼티 자판의 역사', '타자기 엉킴 방지']
  },
  {
    id: 'who-invented-qwerty',
    question: 'QWERTY 자판을 발명한 사람은 누구인가요?',
    category: 'keyboards',
    categoryLabel: '키보드, QWERTY 및 역사',
    shortAnswer: '미국의 신문 편집자이자 발명가인 크리스토퍼 레이섬 숄스(Christopher Latham Sholes)가 1867~1873년에 발명했습니다.',
    answerHtml: '<p>QWERTY 배열은 <strong>크리스토퍼 레이섬 숄스</strong>가 동료들과 개발하여 1878년 특허를 취득하고 레밍턴(Remington) 사에 라이선스하여 상용화되었습니다.</p>',
    keywords: ['쿼티 자판 발명가', '키보드 만든 사람', '크리스토퍼 숄스']
  },
  {
    id: 'who-invented-keyboard',
    question: '현대 컴퓨터 키보드는 누가 발명했나요?',
    category: 'keyboards',
    categoryLabel: '키보드, QWERTY 및 역사',
    shortAnswer: '숄스의 타자기(1868년)와 1960년대 벨 연구소 및 컴퓨터 터미널 개발자들의 기술이 융합되어 발전했습니다.',
    answerHtml: '<p>현대 키보드의 역사적 발전:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>크리스토퍼 숄스 (1868년):</strong> 최초의 실용적 타자기와 QWERTY 배열 제작.</li><li><strong>텔레타이프와 천공 카드 (1930~1950년대):</strong> 전자 신호 전송용 키보드로 진화.</li><li><strong>벨 연구소와 VDT 터미널 (1960년대):</strong> 화면 디스플레이와 전자 키보드를 결합해 현대 PC 키보드 완성.</li></ul>',
    keywords: ['컴퓨터 키보드 발명 역사', '키보드 기원', '타자기 발전사']
  },
  {
    id: 'qwerty-vs-azerty',
    question: 'QWERTY와 AZERTY 키보드 배열의 차이점은 무엇인가요?',
    category: 'keyboards',
    categoryLabel: '키보드, QWERTY 및 역사',
    shortAnswer: 'QWERTY는 글로벌 표준이며, AZERTY는 프랑스어 특성에 맞춰 Q/A 및 W/Z 키 위치를 맞바꾼 배열입니다.',
    answerHtml: '<p><strong>QWERTY</strong>와 <strong>AZERTY</strong>의 차이점:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>QWERTY:</strong> 한국어/영어 및 국제 표준. 숫자 키를 Shift 없이 직접 입력 가능.</li><li><strong>AZERTY:</strong> 프랑스 및 벨기에 표준. <code>Q</code>와 <code>A</code>, <code>W</code>와 <code>Z</code>가 바뀌어 있고, <code>M</code>이 L 옆에 있으며, 프랑스어 악센트(é, è, ç, à) 입력을 위해 숫자를 칠 때 <code>Shift</code>를 눌러야 합니다.</li></ul>',
    keywords: ['qwerty azerty 차이', '프랑스어 키보드 배열', '자판 배열 비교']
  },
  {
    id: 'three-main-types-of-keyboards',
    question: '컴퓨터 키보드의 3대 주요 구조 방식은 무엇인가요?',
    category: 'keyboards',
    categoryLabel: '키보드, QWERTY 및 역사',
    shortAnswer: '기계식 키보드(Mechanical), 멤브레인 키보드(Membrane), 팬터그래프(가위형/Chiclet) 키보드의 3가지입니다.',
    answerHtml: '<p>스위치 방식에 따른 3대 키보드 유형:</p><ol class="list-decimal pl-5 my-2 space-y-2"><li><strong>기계식 키보드 (Mechanical):</strong> 키마다 개별 물리 스위치(청축/적축/갈축 등) 탑재. 우수한 타건감, 5천만~1억 회 수명, 무한 동시 입력 지원.</li><li><strong>멤브레인 키보드 (Membrane):</strong> 고무 돔과 회로 시트 사용. 조용하고 가벼우며 저렴함.</li><li><strong>팬터그래프 키보드 (Scissor-Switch):</strong> X자 가위형 지지대 구조. 슬림한 높이로 노트북과 애플 매직 키보드에 사용.</li></ol>',
    keywords: ['키보드 종류 기계식 멤브레인', '팬터그래프 키보드란', '키보드 축 종류']
  },
  {
    id: 'what-are-10-key-typing-skills',
    question: '텐키(10-Key / 숫자 키패드) 입력 스킬이란 무엇인가요?',
    category: 'keyboards',
    categoryLabel: '키보드, QWERTY 및 역사',
    shortAnswer: '키보드 우측의 전용 숫자 키패드를 안 보고 한 손으로 고속 정밀 입력하는 능력을 말합니다.',
    answerHtml: '<p><strong>텐키(10-Key) 스킬</strong>은 숫자 키패드의 <strong>5</strong>번 돌기에 중지를 얹고 안 보고 치는 기술입니다. 금융 및 회계 직무에서 <strong>시간당 8,000~12,000+ 타건(KPH)</strong>의 고속 입력을 수행합니다.</p>',
    keywords: ['텐키 패드 연습', '숫자 키패드 블라인드 터치', '텐키 스킬']
  },
  {
    id: 'what-is-a-10-key-typing',
    question: '10키(Ten Key) 타이핑이란 무엇인가요?',
    category: 'keyboards',
    categoryLabel: '키보드, QWERTY 및 역사',
    shortAnswer: '오른손 한 손으로 전용 숫자 패드의 숫자(0~9)와 사칙연산 기호를 빠르게 입력하는 타법입니다.',
    answerHtml: '<p><strong>10키 타이핑</strong>은 한 손으로 숫자와 연산자(+, -, *, /)를 입력하는 기법으로 은행원과 데이터 입력 전문가의 핵심 역량입니다.</p>',
    keywords: ['10키 타이핑이란', '숫자 타자 연습', '텐키 시험']
  },

  // --- 5. 연습 및 학습법 ---
  {
    id: 'basics-of-typing',
    question: '타자 연습을 시작할 때 지켜야 할 가장 중요한 기본 원칙은 무엇인가요?',
    category: 'practice',
    categoryLabel: '연습 및 학습법',
    shortAnswer: '기본 자리(홈 포지션) 고수, 바른 자세, 시선은 모니터 고정, "속도보다 정확도 우선" 원칙입니다.',
    answerHtml: '<p>타자 입문의 핵심 5대 원칙:</p><ol class="list-decimal pl-5 my-2 space-y-1"><li><strong>기본 자리 지키기:</strong> 왼손 <code>ㅁ-ㄴ-ㅇ-ㄹ</code>, 오른손 <code>ㅓ-ㅏ-ㅣ-;</code>의 <code>ㄹ</code>과 <code>ㅓ</code> 돌기를 기준으로 잡기.</li><li><strong>손가락별 전담 키 준수:</strong> 정해진 손가락으로만 해당 키 누르기.</li><li><strong>바른 자세:</strong> 허리를 펴고 발바닥을 바닥에 붙이며 손목은 살짝 띄우기.</li><li><strong>화면만 보기:</strong> 손을 내려다보지 않고 감각으로 치기.</li><li><strong>정확도 우선:</strong> 98% 이상의 정확도를 유지한 후 속도 올리기.</li></ol>',
    keywords: ['타자 연습 기본 규칙', '타자 잘 치는 법', '자리익히기 기초']
  },
  {
    id: 'how-to-improve-10-finger-typing',
    question: '10손가락 타자 속도를 빠르게 향상시키는 비결은 무엇인가요?',
    category: 'practice',
    categoryLabel: '연습 및 학습법',
    shortAnswer: '타건 후 항상 기본 자리로 복귀하고, 매일 15분씩 꾸준히 연습하며, 2D 아케이드 게임을 즐깁니다.',
    answerHtml: '<p>단기간에 타자 실력을 올리는 비결:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>기본 자리 복귀:</strong> 키를 누른 뒤 즉시 손가락을 홈 포지션으로 되돌리는 습관 들이기.</li><li><strong>매일 15분 연습:</strong> <a href="/ko/practice" class="text-link underline hover:opacity-80">연습실</a>에서 매일 꾸준히 연습하는 것이 한 번에 몰아서 하는 것보다 훨씬 효과적입니다.</li><li><strong>손 쳐다보기 금지:</strong> 뇌가 공간 감각을 기억하도록 유도합니다.</li><li><strong>타자 아케이드 게임 플레이:</strong> <a href="/ko/game/meteor-strike" class="text-link underline hover:opacity-80">Meteor Strike</a>와 <a href="/ko/game/neon-ninja" class="text-link underline hover:opacity-80">Neon Ninja</a> 같은 게임으로 실전 순발력을 기릅니다.</li></ul>',
    keywords: ['타자 속도 올리는 비결', '타자 빨리 치는 법', '타자 연습 팁']
  },
  {
    id: 'how-can-i-learn-to-touch-type',
    question: '완전 초보자가 터치 타이핑을 처음부터 배우는 단계는?',
    category: 'practice',
    categoryLabel: '연습 및 학습법',
    shortAnswer: '기본 자리를 외우고, 손을 보지 않으며, 가운데 줄부터 위/아래 줄로 단계별 연습을 진행합니다.',
    answerHtml: '<p>초보자를 위한 단계별 학습법:</p><ol class="list-decimal pl-5 my-2 space-y-1"><li><strong>기본 자리 익히기:</strong> 왼손 <strong>ㅁㄴㅇㄹ</strong>, 오른손 <strong>ㅓㅏㅣ;</strong> 위치 파악.</li><li><strong>한 줄씩 마스터:</strong> 가운데 기본 줄 → 윗줄(QWERTY) → 아랫줄(ZXCV) → 숫자 줄 순으로 확장.</li><li><strong>화면 가이드 활용:</strong> 고개를 숙이지 않고 모니터 화면의 키보드 가이드를 보며 연습.</li><li><strong>매일 15분 단어 반복:</strong> 짧은 단어와 자주 쓰이는 표현 연습.</li><li><strong>주간 측정:</strong> <a href="/ko/speed-test" class="text-link underline hover:opacity-80">타자 속도 측정</a>에서 성장을 확인.</li></ol>',
    keywords: ['타자 자리익히기 독학', '타자 연습 처음부터', '터치 타이핑 배우기']
  },
  {
    id: 'how-do-i-practice-typing',
    question: '가장 효과적인 일일 20분 타자 연습 루틴은 어떻게 되나요?',
    category: 'practice',
    categoryLabel: '연습 및 학습법',
    shortAnswer: '손가락 워밍업(5분), 60초 속도 테스트(5분), 2D 아케이드 게임 실전(10분)의 20분 루틴이 가장 좋습니다.',
    answerHtml: '<p>최적의 일일 20분 루틴:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>손가락 준비운동 (5분):</strong> <a href="/ko/practice" class="text-link underline hover:opacity-80">연습실</a>에서 자리익히기 드릴 진행.</li><li><strong>속도 측정 (5분):</strong> <a href="/ko/speed-test" class="text-link underline hover:opacity-80">타자 속도 테스트</a>에서 60초 측정으로 기본 WPM 점검.</li><li><strong>게임 실전 (10분):</strong> <a href="/ko/game/dungeon-escape" class="text-link underline hover:opacity-80">Dungeon Escape</a> 또는 <a href="/ko/game/retro-invaders" class="text-link underline hover:opacity-80">Retro Invaders</a> 플레이.</li><li><strong>오답 키 복습:</strong> 자주 틀린 키를 1분간 집중 반복.</li></ul>',
    keywords: ['하루 20분 타자 루틴', '타자 연습 계획표', '효과적인 타자 공부']
  },
  {
    id: 'how-can-i-practice-typing-numbers',
    question: '숫자 키와 특수문자를 빠르고 정확하게 치는 연습 방법은?',
    category: 'practice',
    categoryLabel: '연습 및 학습법',
    shortAnswer: '기본 자리에서 맨 윗줄 숫자 키로 뻗는 손가락 이동 반경을 익히고, 텐키와 숫자 혼합 문장을 연습합니다.',
    answerHtml: '<p>숫자 및 기호 입력 숙달 요령:</p><ul class="list-disc pl-5 my-2 space-y-1"><li><strong>숫자 열 손가락 배정:</strong> 왼새끼(1), 왼약지(2), 왼중지(3), 왼검지(4, 5), 오른검지(6, 7), 오른중지(8), 오른약지(9), 오른새끼(0).</li><li><strong>텐키 반복 연습:</strong> 5번 돌기를 중심으로 안 보고 계산 연습.</li><li><strong>숫자 혼합 텍스트:</strong> 날짜, 전화번호, 금액이 포함된 문장을 <a href="/ko/practice" class="text-link underline hover:opacity-80">연습실</a>에서 연습.</li><li><strong>숫자 게임 플레이:</strong> <a href="/ko/game/deep-sea" class="text-link underline hover:opacity-80">Deep Sea</a> 및 <a href="/ko/game/meteor-strike" class="text-link underline hover:opacity-80">Meteor Strike</a>의 숫자 웨이브 도전.</li></ul>',
    keywords: ['숫자 타자 연습', '키보드 위 숫자 치는 법', '숫자 키패드 연습']
  },
  {
    id: 'what-is-the-process-of-typing',
    question: '타이핑을 할 때 뇌와 신경계에서는 어떤 과정이 일어나는가요?',
    category: 'practice',
    categoryLabel: '연습 및 학습법',
    shortAnswer: '시각 인지/착상, 인지적 청킹(Chunking), 운동 신경 실행, 감각 피드백의 4단계가 동기화되어 일어납니다.',
    answerHtml: '<p>타이핑 시 뇌와 신체가 거치는 4단계 프로세스:</p><ol class="list-decimal pl-5 my-2 space-y-2"><li><strong>1. 시각 인지 및 착상:</strong> 화면의 글자를 읽거나 머릿속으로 타이핑할 생각을 떠올립니다.</li><li><strong>2. 인지적 청킹 (Chunking):</strong> 뇌가 낱자를 하나씩 처리하지 않고, 음절과 단어 단위 덩어리(청크)와 운동 패턴으로 즉시 변환합니다.</li><li><strong>3. 운동 신경 실행:</strong> 뇌가 해당 손가락으로 신경 신호를 보내 근육 기억으로 스위치를 누릅니다.</li><li><strong>4. 감각 피드백:</strong> 스위치의 압력 감각, 찰칵하는 소리, 화면의 텍스트 출력을 확인하며 실시간으로 리듬을 미세 조정합니다.</li></ol>',
    keywords: ['타이핑 뇌과학 원리', '타자 칠 때 뇌 작용', '인지적 청킹 타자']
  }
];
