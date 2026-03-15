/* ═══════════════════════════════════════════════════════════════
   BTS FAN SITE — script.js
   All interactive features, data, and animations
═══════════════════════════════════════════════════════════════ */

'use strict';
import './style.css';

/* ──────────────────────────────────────────
   DATA — BTS MEMBERS
────────────────────────────────────────── */
const MEMBERS = [
  {
    id: 'rm',
    stage: 'RM',
    name: 'Kim Nam-joon (김남준)',
    position: 'Leader· Main Rapper. Song Writer',
    dob: 'September 12, 1994',
    nationality: '🇰🇷 South Korean',
    Family: 'Parents, Younger Sister(Kim Kyung-min(1997)',
    intro: 'The intellectual heart of BTS, RM is a self-taught English speaker, art enthusiast, and the group\'s creative anchor. His deep, philosophical lyrics explore identity, youth, and society.',
    photo: 'https://i.imgur.com/placeholder.jpg',
    // Using gradient placeholder colors per member
    color: '#6600cc',
    emoji: '🐨',
    bio: 'Born Kim Nam-joon in Ilsan, South Korea, RM (formerly Rap Monster) is the leader and main rapper of BTS. He taught himself English through the TV series "Friends" and holds an impressive IQ of 148. A passionate art collector, RM has visited numerous galleries and museums worldwide. He was the first BTS member to release solo music with the mixtape "RM" in 2015.',
    funFacts: [
      'Self-taught English through watching "Friends"',
      'IQ of 148 — acknowledged by Mensa',
      'Passionate fine art collector and museum-goer',
      'Was a top 1.3% student nationally in South Korea',
      'Can speak Korean, English, and some Japanese'
    ],
    achievements: [
      'Led BTS speech at the United Nations (2018, 2021)',
      'First K-pop artist to top Billboard Hot 100 (as BTS leader)',
      'Grammy nomination for Best Pop Duo/Group Performance',
      'Solo album "Indigo" peaked #2 on Billboard 200',
      'Time 100 Most Influential People (2019)',
      'Released first solo mixtape “RM” (2015) showing underground rap credibility',
      'Mixtape “Mono” (2018) became the highest-charting Korean album on iTunes in many countries',
      'Solo album “Indigo” (2022) debuted at No.3 on Billboard 200',
      'Credited with 200+ songs registered in the Korea Music Copyright Association',
      'Collaborated with global artists like Wale, Anderson Park, Erykah Badu',
      'He is the middle child  BTS',
      'He is known as God Of Destruction',
      "He got his driver's license in the year 2026"
    ],
    discography: [
      { year: '2015', title: 'RM (Mixtape)' },
      { year: '2018', title: 'mono. (Playlist)' },
      { year: '2022', title: 'Indigo (Studio Album)' },
      { year: '2024', title: 'Right Place, Wrong Person' }
    ],
    videos: [
      { id: 'u18be_kRmC0', title: 'Wild Flower' },
      { id: 'NrfikKxF4Ps', title: 'Come back to me' },
      { id: '2vfmL4q2koo', title: 'Still Life' }
    ],
    "Business Endorsements": [
      'Official Public Relations Ambassador for Korean Art Exhibitions with Overseas Korean Cultural Heritage Foundation',
      'Became Brand Ambassador of Bottega Veneta(2023)',
      'Featured in global promotional campaigns with Samsung Electronics'
    ],
    Instagram: [
      { id: 'rkive', link: 'https://www.instagram.com/rkive' }
    ],
  },
  {
    id: 'jin',
    stage: 'Jin',
    name: 'Kim Seok-jin (김석진)',
    position: 'Vocalist · Visual',
    dob: 'December 4, 1992',
    Family: 'Parents, Older Brother(Kim Seok-jung(1990)',
    nationality: '🇰🇷 South Korean',
    intro: 'The eldest member and worldwide handsome, Jin\'s powerful vocals and radiant charm light up every room. Off-stage, he\'s famous for his dad jokes, windshield wiper laugh, and genuine warmth.',
    photo: '',
    color: '#cc0066',
    emoji: '🐹',
    bio: 'Kim Seok-jin, known as Jin, is the eldest member of BTS and a vocalist known for his warm, crystal-clear tenor voice. He studied acting at Konkuk University. Jin is known for his comedic personality, self-proclaimed good looks (earning the nickname "Worldwide Handsome"), and his iconic "traffic safety" PSA-style content. He completed his mandatory military service and returned in 2024.',
    funFacts: [
      'Studied Film & Performing Arts at Konkuk University',
      'Known for the legendary "Worldwide Handsome" entrance at the BBMAs',
      'His infectious laugh sounds like a window-wiper — beloved by ARMY',
      'Completed South Korean mandatory military service (2022–2024)',
      'Master chef — regularly cooks on BTS content',
      'Holds a black belt in Taekwondo',
      'Team name with Kim Seok-jin always wins',
      'Came from a rich family before joining BTS',
    ],
    achievements: [
      'Performed "The Astronaut" at Coldplay\'s concert in Buenos Aires (2022)',
      'Solo debut with "The Astronaut" — co-written with Coldplay',
      'BTS Grammy nomination (x2)',
      'Solo album "Happy" released (2024) after military discharge',
      'Countless Daesang awards with BTS',
      'Served in South Korean military and became assistant drill instructor (leadership recognition)',

    ],
    discography: [
      { year: '2018', title: 'Epiphany' },
      { year: '2020', title: 'Moon' },
      { year: '2022', title: 'The Astronaut (Single)' },
      { year: '2024', title: 'Happy (Studio Album)' },
      { year: '2024', title: 'Super Tuna (Single)' },
      { year: '2025', title: 'Echo(Second Solo EP by Jin)' },
    ],
    videos: [
      { id: 'c6ASQOwKkhk', title: 'The Astranaut' },
      { id: 'ArHGiOxYwHM', title: 'Super Tuna' },
      { id: '7GQ4V6y8E0Y', title: 'Running Wild' },
      { id: 'Kx9vQ8Qn6oQ', title: "Don't Say You Love Me" }
    ],
    "Brand Endorsements and Business": [
      'Luxury Fashion exposure connected with Gucci',
      'Associated with beauty / skincare promotions like Laneige',
      'First global ambassador of FRED Jewellery',
      'Founder and Ambassador of traditional liquor branding like iGin',
      'Co-owner of Japanese restaurant Ossu Seiromushi with his brother',
      'Featured in multiple global endorsements as member of BTS'
    ],
    Instagram: [
      { id: 'jin', link: 'https://www.instagram.com/jin' },
    ],
  },
  {
    id: 'suga',
    stage: 'Suga',
    name: 'Min Yoon-gi (민윤기)',
    Nickname: 'Yoongi, Lil Meow Meow',
    position: 'Lead Rapper · Song Writer. Main Producer',
    dob: 'March 9, 1993',
    nationality: '🇰🇷 South Korean',
    Family: 'Parents, Older Brother(Min Geum-jae(1989)',
    intro: 'Suga\'s genius lies in translating raw vulnerability into music. As Agust D, he opened up about mental health, trauma, and resilience — speaking for millions. His blunt honesty and dry wit hide a deeply caring soul.',
    photo: '',
    color: '#003399',
    emoji: '🐱',
    bio: 'Min Yoon-gi, known as Suga in BTS and Agust D as a solo artist, is a rapper, songwriter, and producer. From Daegu, South Korea, he worked part-time jobs to pursue music before debuting. He is one of the most celebrated lyricists in K-pop, tackling mental illness, OCD, and trauma with unflinching honesty. His three-part "Agust D" mixtape series is considered a masterpiece of modern hip-hop.',
    funFacts: [
      'Has produced songs for IU, Halsey, Psy, and many others',
      'His stage name "Suga" comes from SU (shooter) + GA (guard) in basketball',
      'Once worked a part-time delivery job to fund his music career',
      'Openly discussed his OCD and depression — a pioneer in K-pop mental health discourse',
      'Graduated from Global Cyber University with a degree in Broadcasting',
      'His "Agust D" name is an anagram + reverse of his hometown: DT + Agus(suga)'
    ],
    achievements: [
      'First Asian Rapper to have multiple albums surpass 1B streams on spotify',
      'Three Agust D mixtapes with billions of streams',
      'Daechwita MV broke records on YouTube',
      'Produced chart-topping tracks for multiple K-pop artists',
      'Grammy nomination with BTS (x2)',
      'Billboard Hot 100 #1 multiple times'
    ],
    discography: [
      { year: '2016', title: 'Agust D (Mixtape)' },
      { year: '2020', title: 'D-2 (Mixtape)' },
      { year: '2023', title: 'D-Day (Studio Album)' }
    ],
    videos: [
      { id: 'qGjAWJ2zWWI', title: 'Daechwita' },
      { id: 'gBuD_PnFDFc', title: 'People Pt.2 ft. IU' },
      { id: 'iy9qZR_OGa0', title: 'Haegeum' },
      { id: 'uVD-YgzDzyY', title: 'People Pt.2 ft. IU' },
      { id: '8dJyRm2jJ-U', title: 'That That (PSY feat. SUGA)' },
    ],
    "Brand Endorsements and Business": [
      'Global Ambassador — NBA',
      'Luxury Fashion Ambassador — Valentino',
      "Produced the Samsung's Over the Horizon Ringtone(2022)",
      'Featured in multiple world wide campaigns as BTS member',
    ],
    Instagram: [
      { id: 'agustd', link: 'https://www.instagram.com/agustd' },
    ],
  },
  {
    id: 'jhope',
    stage: 'J-Hope',
    name: 'Jung Ho-seok (정호석)',
    Nickname: 'Hobi, Sunshine',
    position: 'Main Dancer. Dance Leader. Rapper',
    dob: 'February 18, 1994',
    nationality: '🇰🇷 South Korean',
    intro: 'J-Hope is BTS\'s sunshine — the main dancer whose energy is contagious, whose stage presence is electrifying, and whose mixtapes reveal a deep artistic vision that goes far beyond his effervescent public persona.',
    Family: 'Parents, Older Sister(Jung Jiwoo(1990))',
    photo: '',
    color: '#cc7700',
    emoji: '🐿️',
    bio: 'Jung Ho-seok, known as J-Hope, is BTS\'s main dancer, rapper, and a world-class performer. Before BTS, he was a street dancer in a b-boy crew. His hip-hop mixtapes "Hope World" and "Jack In The Box" showcase his range from bright pop to dark, complex hip-hop. He became the first BTS member to headline Lollapalooza (2022) — a historic moment for Korean artists.',
    funFacts: [
      'First Korean solo artist to headline a main stage at Lollapalooza (2022)',
      'Was a professional street dancer before joining HYBE',
      'His real name means "bright" and "protect" — fitting for BTS\'s sunshine',
      'Known as the mood-maker of the group — always lifting spirits',
      'His mixtape "Hope World" debuted at #38 on Billboard 200',
      'He has strong interest in dance,Fashion and Photography',
      'He got his stage name from his idol and rapper J.Cole',
      'He is often called as Second leader of BTS because of his leadership skills and discipline',
    ],
    achievements: [
      'First Korean artist to headline Lollapalooza main stage (2022)',
      '"Jack In The Box" debuted on Billboard 200',
      'Grammy nomination with BTS',
      '"On the Street" collab with J. Cole (2023)',
      'Countless Best Dancer awards with BTS'
    ],
    discography: [
      { year: '2018', title: 'Hope World (Mixtape)' },
      { year: '2022', title: 'Jack In The Box (Studio Album)' },
      { year: '2024', title: 'Hope on the Street Vol.1' },
      { year: '2025', title: "Killin' it girl" },
    ],
    videos: [
      { id: 'H6t96utevCI', title: 'Day Dreaam' },
      { id: 'i23NEQEFpgq', title: 'Chicken Noodle Soup' },
      { id: 'kW1e8NtdW90', title: 'Sweet Dreams' },
      { id: 'q9leDz1NEaY', title: "Killin' it girl" },
    ],
    "Brand Endorsements": [
      'Louis Vuitton-Official house ambassador (2023)',
      'Audemars Piguet-Official watch brand ambassador.',
      'Human Made-Self Made Brand'
    ],
    Instagram: [
      { id: 'uarmyhope', link: 'https://www.instagram.com/uarmyhope' }
    ],

  },
  {
    id: 'jimin',
    stage: 'Jimin',
    name: 'Park Ji-min (박지민)',
    Nickname: 'Mochi, Chim Chim,Jiminie',
    position: 'Main Vocalist · Dancer',
    dob: 'October 13, 1995',
    Family: 'Parents, Younger Brother(Park Ji-hyun(1997))',
    nationality: '🇰🇷 South Korean',
    intro: 'Jimin\'s artistry is a study in refined emotion — a trained contemporary dancer whose vocals carry immense feeling. Off-stage, his gentle heart and fierce dedication to craft make him beloved universally.',
    photo: '',
    color: '#aa0044',
    emoji: '🐥',
    bio: 'Park Ji-min, known simply as Jimin, is the main vocalist and lead dancer of BTS. He studied modern dance at Busan Arts High School, which profoundly influenced his fluid, emotive performance style. His debut solo album "FACE" (2023) produced the global smash "Like Crazy" — making him the first Korean solo artist to top the Billboard Hot 100. He is known for his extraordinary work ethic, often practicing long after others have gone to sleep.',
    funFacts: [
      'First Korean solo artist to reach #1 on Billboard Hot 100',
      'Studied contemporary dance at Busan Arts High School',
      'Known to practice the hardest — often trains alone until dawn',
      'His hand gestures during performances are distinctive and iconic',
      '"Promise" (2018) broke records as fastest video to 100M views on YouTube',
      'Named one of TIME magazine\'s 25 Most Influential People on the Internet',
      'Known as Sexy,Cutie,Lovely',
    ],
    achievements: [
      '#1 on Billboard Hot 100 with "Like Crazy" (2023) — first Korean solo artist',
      'Solo album "FACE" topped multiple international charts',
      '"Set Me Free Pt.2" — first solo to enter Billboard Hot 100 at #1',
      'Grammy nomination with BTS (x2)',
      'Second most streamed kpop soloist on sptify',
    ],
    discography: [
      { year: '2018', title: 'Promise (Single)' },
      { year: '2023', title: 'FACE (Studio Album)' },
      { year: '2024', title: 'MUSE (Studio Album)' }
    ],
    videos: [
      { id: 'nOI67IDlNMQ', title: 'Like Crazy' },
      { id: 'Av9DvtlJ9_M', title: 'WHO' },
      { id: 'fNB2zyXWwG8', title: 'Slow Dance (feat. Sofia Carson)' }
    ],
    "Brand endorsements": [
      'Dior-Global Ambassador',
      'Tiffany & Co.-House ambassador',
      'Samsung Electronics-Global ambassador',
      'Seoul Tourism Organization-Global ambassador (with SUGA, 2022)'
    ],
    Instagram: [
      { id: 'j.m', link: 'https://www.instagram.com/j.m' }
    ],
  },
  {
    id: 'v',
    stage: 'V',
    name: 'Kim Tae-hyung (김태형)',
    Nickname: 'Taetae, Tete',
    position: 'Vocalist · Visual',
    dob: 'December 30, 1995',
    Family: 'Parents, Younger Sister(Kim Eon-jin), Younger brother(Kim Jeong - gyu)',
    nationality: '🇰🇷 South Korean',
    intro: 'V is BTS\'s most unpredictable creative force — a deep baritone vocalist, self-taught saxophonist, photography enthusiast, and fashion icon whose personality defies all expectations.',
    photo: '',
    color: '#005588',
    emoji: '🐻🐯',
    bio: 'Kim Tae-hyung, known as V, is a vocalist of BTS celebrated for his distinctive deep baritone voice and chameleonic stage presence. He grew up in Daegu and nearly kept his BTS membership secret until his very first performance. V is a multi-faceted artist: he plays saxophone, paints, and is an avid photographer. His solo debut "Layover" (2023) was described as an introspective jazz-influenced album, showing yet another side of his limitless artistry.',
    funFacts: [
      'His BTS membership was kept secret until the official debut in 2013',
      'Self-taught saxophonist — plays it live and in recordings',
      'Avid photographer: has his own solo photography exhibition',
      'Grew up on a farm in Geochang, South Korea',
      'His favorite color is grey — often referenced in his art',
      '"Winter Bear" was entirely composed, written, and sung in English by V himself',
      'His dog Yeontan has the most fan cam views',
      'He is the most social member of BTS',


    ],
    achievements: [
      'Solo debut "Layover" topped iTunes in 100+ countries (2023)',
      '"FRI(END)S" reached top 5 on Billboard Hot 100',
      'Grammy nomination with BTS (x2)',
      'Named among TIME\'s next generation leaders',
      'Most followed K-pop idol on Instagram (2026)',
    ],
    discography: [
      { year: '2019', title: 'Singularity (Solo BTS Track)' },
      { year: '2019', title: 'Sweet Night (OST)' },
      { year: '2023', title: 'Layover (Studio Album)' }
    ],
    videos: [
      { id: '62peQdQv4uo', title: 'FRI(END)S' },
      { id: 'yTsINmrAK4I', title: 'Rainy Days' },
      { id: 'eI0iTRS0Ha8', title: 'Slow Dancing' },
      { id: 'HYzyRHAHJl8', title: 'Love Me Again' }
    ],
    "Brand endorsements": [

      'Cartier – Global Ambassador for Panthère de Cartier (2023–present)',
      'TIRTIR – Global Beauty Brand Ambassador (announced 2025)',
      'YUNTH – Exclusive Skincare Ambassador (2025)',
      'Compose Coffee – Brand Ambassador (date ~2023/2024)',
      'Coca‑Cola Korea (Coke Zero) – Ambassador (2025)',
      'Snow Peak – Outdoor Apparel Ambassador (2025)',
    ],
    Instagram: [
      { id: 'thv', link: 'https://www.instagram.com/thv' }
    ]
  },
  {
    id: 'jungkook',
    stage: 'Jungkook',
    name: 'Jeon Jung-kook (전정국)',
    Nickname: 'Kookie, Golden Maknae,Muscle Kook,Bunny,JJK,Jungkookie',
    position: 'Main Vocalist · Maknae.Rapper.Main Dancer.Song Writer',
    dob: 'September 1, 1997',
    nationality: '🇰🇷 South Korean',
    intro: 'The Golden Maknae who can do it all — sing, dance, rap, produce, box, draw, cook. Jungkook\'s pure, powerful vocals and effortless charisma have made him one of the most recognized names in global pop.',
    photo: '',
    color: '#004422',
    emoji: '🐰',
    bio: 'Jeon Jung-kook, the youngest (maknae) of BTS, joined the group at just 15 years old. Nicknamed "Golden Maknae" for his ability to excel at virtually any skill, Jungkook is BTS\'s main vocalist and one of the most streamed Korean solo artists in history. His debut solo album "Golden" (2023) produced the global smash "Seven" — the longest-charting song by a Korean solo artist on Billboard Hot 100.',
    funFacts: [
      'Nicknamed "Golden Maknae" for being talented at literally everything',
      'Joined BTS at age 15 — rejecting multiple other agency offers',
      '"Seven (feat. Latto)" had 52 consecutive weeks on Billboard Hot 100',
      'First Korean solo artist to surpass 500M streams on Spotify for a single track',
      'Tattooed artist — designs include a tiger lily (for the ARMY) and "ARMY" on his knuckles',
      'Trained in boxing, swimming, and archery — in addition to singing and dancing',
      'Most streamed korean artist on spotify',
      'His idol is IU',
    ],
    achievements: [
      '"Seven" spent 52+ weeks on Billboard Hot 100 — longest by a Korean solo act',
      'Solo album "Golden" topped Billboard 200',
      'Performed at the 2022 FIFA World Cup closing ceremony',
      'Grammy nomination with BTS (x2)',
      'First Korean solo artist to achieve 1 Billion streams on a single on Spotify',
      'The All-rounder in Kpop industry',
    ],
    discography: [
      { year: '2022', title: 'Stay Alive (OST)' },
      { year: '2023', title: '3D (Single)' },
      { year: '2023', title: 'Seven (Single)' },
      { year: '2023', title: 'Golden (Studio Album)' }
    ],
    videos: [
      { id: 'UNo0TG9LwwI', title: 'Standing Next to You' },
      { id: 'QU9c0053UAU', title: 'Seven (feat. Latto)' },
      { id: 'mHNCM-YALSA', title: '3D (feat. Jack Harlow)' },
      { id: 'jEdfjuG0Fx4', title: 'Dreamers (FIFA World Cup)' }
    ],
    "Brand endorsements": [


      'Calvin Klein (Jeans & Underwear) – Global Ambassador (2023)',
      'Hublot – Global Brand Ambassador (2026) (luxury Swiss watch brand)',
      'Chanel Fragrance & Beauty – Global Ambassador (Dec 2025)'
    ],
    Instagram: [
      { id: 'mnijungkook', link: 'https://www.instagram.com/mnijungkook' },
      { id: 'bowwow_bam', link: 'https://www.instagram.com/bowwow_bam' }
    ],

  }
];

/* ──────────────────────────────────────────
   DATA — SOLO ALBUMS
────────────────────────────────────────── */
const SOLO_WORKS = [
  { member: 'RM', title: 'RM (Mixtape)', year: 2015, type: 'Mixtape', emoji: '📖', tracks: ['Do You', 'Voice', 'Awakening', 'God Rap'], desc: 'RM\'s debut mixtape showcasing philosophical rap on identity and growth.' },
  { member: 'RM', title: 'mono.', year: 2018, type: 'Playlist', emoji: '🌙', tracks: ['tokyo', 'seoul', 'moonchild', 'badbye', 'forever rain'], desc: 'A melancholy musical journey through Tokyo and Seoul.' },
  { member: 'RM', title: 'Indigo', year: 2022, type: 'Studio Album', emoji: '💙', tracks: ['Yun', 'Still Life', 'All Day', 'Closer', 'Heather'], desc: 'RM\'s debut studio album — an introspective exploration of the end of youth.' },
  { member: 'Suga', title: 'Agust D', year: 2016, type: 'Mixtape', emoji: '🎹', tracks: ['Intro: Dt sugA', 'Agust D', 'Give It To Me', 'Interlude: Dream, Reality'], desc: 'Suga\'s raw debut mixtape confronting mental illness and past struggles.' },
  { member: 'Suga', title: 'D-2', year: 2020, type: 'Mixtape', emoji: '⚡', tracks: ['Moonlight', 'Daechwita', 'What Do You Think?', 'Burn It'], desc: 'A bold, cinematic sophomore mixtape blending genres effortlessly.' },
  { member: 'Suga', title: 'D-Day', year: 2023, type: 'Studio Album', emoji: '🌑', tracks: ['Haiku', 'HUH?!', 'People Pt.2', 'AMYGDALA', 'SDL'], desc: 'The final chapter of the Agust D trilogy — a reckoning with the past.' },
  { member: 'J-Hope', title: 'Hope World', year: 2018, type: 'Mixtape', emoji: '🌈', tracks: ['Hope World', 'Piece of Peace', 'Daydream', 'Base Line'], desc: 'J-Hope\'s colorful, vibrant debut mixtape.' },
  { member: 'J-Hope', title: 'Jack In The Box', year: 2022, type: 'Studio Album', emoji: '🔥', tracks: ['Pandora\'s Box', 'MORE', 'STOP', '= (Equal Sign)'], desc: 'J-Hope breaks free from his sunshine image with dark, complex hip-hop.' },
  { member: 'Jin', title: 'The Astronaut', year: 2022, type: 'Single', emoji: '🚀', tracks: ['The Astronaut'], desc: 'Co-written with Coldplay, a heartfelt farewell before military service.' },
  { member: 'Jin', title: 'Happy', year: 2024, type: 'Studio Album', emoji: '🌸', tracks: ['Running Wild', 'I\'ll Be There', 'Until the End', 'Falling', 'Confess'], desc: 'Jin\'s joyful return after military service — pure warm pop perfection.' },
  { member: 'Jimin', title: 'FACE', year: 2023, type: 'Studio Album', emoji: '🪞', tracks: ['Alone', 'Interlude: Face-off', 'Like Crazy', 'Set Me Free Pt.2'], desc: 'Jimin\'s debut album — confronting solitude and finding strength.' },
  { member: 'Jimin', title: 'MUSE', year: 2024, type: 'Studio Album', emoji: '💫', tracks: ['Rebirth', 'Who', 'Soulmate', 'Closer Than This'], desc: 'A soulful, genre-blending second solo album.' },
  { member: 'V', title: 'Sweet Night', year: 2020, type: 'OST Single', emoji: '🎷', tracks: ['Sweet Night'], desc: 'Haunting OST for the K-drama Itaewon Class — became a global hit.' },
  { member: 'V', title: 'Layover', year: 2023, type: 'Studio Album', emoji: '🌫️', tracks: ['Rainy Days', 'Blue', 'Slow Dancing', 'For Us', 'FRI(END)S'], desc: 'V\'s jazz-infused debut album — an introspective whisper of an album.' },
  { member: 'Jungkook', title: 'Golden', year: 2023, type: 'Studio Album', emoji: '✨', tracks: ['Standing Next to You', 'Seven', '3D', 'Too Sad to Dance'], desc: 'The Golden Maknae\'s dazzling debut album — pure pop gold.' },
];

/* ──────────────────────────────────────────
   DATA — BTS GROUP ALBUMS
────────────────────────────────────────── */
const BTS_ALBUMS = [
  { title: '2 Cool 4 Skool', year: 2013, type: 'Single Album', emoji: '🎒', tracks: ['We Are Bulletproof Pt.1', 'Skit: Circle Room Talk', 'No More Dream', 'We On', 'I Like It (좋아요)'] },
  { title: 'O!RUL8,2?', year: 2013, type: 'Mini Album', emoji: '📼', tracks: ['N.O', 'We On', 'BTS Cypher PT.1', '길 (Road/Path)', 'If I Ruled The World'] },
  { title: 'Dark & Wild', year: 2014, type: 'Studio Album', emoji: '🌑', tracks: ['Danger', 'War of Hormone', 'Hip Hop Lover', 'Let Me Know', 'Rain', 'BTS Cypher PT.3: KILLER'] },
  { title: 'The Most Beautiful Moment in Life Pt.1', year: 2015, type: 'Mini Album', emoji: '🌸', tracks: ['I Need U', 'Hold Me Tight', 'Dope (쩔어)', 'Boyz With Fun', 'Converse High', 'Moving On'] },
  { title: 'Wings', year: 2016, type: 'Studio Album', emoji: '🪶', tracks: ['Intro: Boy Meets Evil', 'Blood Sweat & Tears', 'Begin', 'Lie', 'Stigma', 'First Love', 'Reflection', 'MAMA', 'Awake', 'Lost', 'BTS Cypher 4', 'Am I Wrong'] },
  { title: 'Love Yourself: Her', year: 2017, type: 'Mini Album', emoji: '💛', tracks: ['DNA', 'Best Of Me', 'Dimple (보조개)', 'Pied Piper', 'Skit: Billboard Music Awards Speech', 'MIC Drop', 'Go Go (고민보다 Go)', 'Outro: Her'] },
  { title: 'Love Yourself: Answer', year: 2018, type: 'Compilation Album', emoji: '💎', tracks: ['Euphoria', 'Trivia 起: Just Dance', 'Serendipity', 'DNA', 'Singularity', 'FAKE LOVE', 'The Truth Untold', 'Trivia 轉: Seesaw', 'Tear', 'Epiphany', 'I\'m Fine', 'IDOL', 'Answer: Love Myself'] },
  { title: 'Map of the Soul: Persona', year: 2019, type: 'Mini Album', emoji: '🎭', tracks: ['Intro: Persona', 'Boy With Luv', 'Mikrokosmos', 'Make It Right', 'HOME', 'Jamais Vu', 'Dionysus'] },
  { title: 'Map of the Soul: 7', year: 2020, type: 'Studio Album', emoji: '🗺️', tracks: ['Interlude: Shadow', 'Filter', 'Moon', 'Telepathy', 'ON', 'My Time', 'Black Swan', 'Louder than Bombs', 'We are Bulletproof: the Eternal', 'Outro: Ego'] },
  { title: 'BE', year: 2020, type: 'Studio Album', emoji: '🏠', tracks: ['Life Goes On', 'Fly To My Room', 'Blue & Grey', 'Skit', 'Telepathy', 'Dis-ease', 'Stay', 'Dynamite'] },
  { title: 'Butter', year: 2021, type: 'Single Album', emoji: '🧈', tracks: ['Butter', 'Permission to Dance', 'Butter (Instrumental)', 'Permission to Dance (Instrumental)'] },
  { title: 'Proof', year: 2022, type: 'Anthology Album', emoji: '📚', tracks: ['Born Singer', 'No More Dream', 'N.O', 'Boy In Luv', 'DNA', 'FAKE LOVE', 'Boy With Luv', 'Dynamite', 'Butter', 'Run BTS', 'Yet To Come (The Most Beautiful Moment)'] },
];

/* ──────────────────────────────────────────
   DATA — TIMELINE
────────────────────────────────────────── */
const TIMELINE_EVENTS = [
  { year: '2010', emoji: '🌱', title: 'BTS Formation Begins', desc: 'RM joins Big Hit Entertainment and becomes the foundation of what will become BTS.' },
  { year: '2013', emoji: '🚀', title: 'Official Debut', desc: 'BTS debuts on June 13 with "No More Dream" on Mnet\'s M Countdown. Seven boys step onto the global stage.' },
  { year: '2015', emoji: '💫', title: 'First Daesang Award', desc: 'BTS wins their first Daesang (Grand Prize) at the Melon Music Awards with the HYYH series.' },
  { year: '2016', emoji: '🪶', title: 'Wings Era', desc: '"Blood Sweat & Tears" becomes their first music show #1 and "Wings" breaks records as their best-selling album to date.' },
  { year: '2017', emoji: '🏆', title: 'Billboard Music Awards', desc: 'BTS wins Top Social Artist at the BBMAs — first K-pop act to win a BBMA — shocking the world stage.' },
  { year: '2018', emoji: '🌍', title: 'UN General Assembly Speech', desc: 'RM delivers a moving speech at the United Nations representing UNICEF\'s "Love Myself" campaign, watched by millions.' },
  { year: '2019', emoji: '🎭', title: 'Sold-Out World Tour', desc: 'Map of the Soul: Persona Tour sells out stadiums worldwide. "Boy With Luv" feat. Halsey becomes a global phenomenon.' },
  { year: '2020', emoji: '🧈', title: 'Dynamite & BE', desc: '"Dynamite" becomes BTS\'s first all-English song and their FIRST #1 on the Billboard Hot 100 — a historic moment for K-pop.' },
  { year: '2021', emoji: '🎵', title: 'Grammy Nomination', desc: 'BTS receives their first Grammy nomination for Best Pop Duo/Group Performance for "Dynamite." Butter hits #1 for 10 weeks.' },
  { year: '2022', emoji: '🌏', title: 'Yet To Come & Permission to Dance', desc: 'BTS performs "Permission to Dance on Stage" at the UN and announces the anthology album "Proof." Military service begins.' },
  { year: '2023', emoji: '⭐', title: 'Solo Era Begins', desc: 'All 7 members pursue solo careers. Jimin\'s "Like Crazy" tops Hot 100. Jungkook\'s "Seven" breaks records globally.' },
  { year: '2024', emoji: '💜', title: 'Members Complete Service & Return', desc: 'Jin and J-Hope return from military service. Jin releases "Happy." The countdown to BTS\'s full reunion begins.' },
  { year: '2025', emoji: '🔜', title: 'The Reunion Approaches', desc: 'With all members completing service, the entire world anticipates the most celebrated comeback in music history.' },
];

/* ──────────────────────────────────────────
   DATA — VIDEOS
────────────────────────────────────────── */
const BTS_VIDEOS = [
  { id: 'gdZLi9oWNZg', title: 'Dynamite', year: 2020, description: 'BTS’s first all-English single; a disco-pop track that became a global hit and topped the Billboard Hot 100.' },
  { id: 'XpqqjU7u5Yc', title: 'Boy With Luv (feat. Halsey)', year: 2019, description: 'Funk-pop collaboration with Halsey; explores love and joy with vibrant visuals and choreography.' },
  { id: 'MBdVXkSdhwU', title: 'DNA', year: 2017, description: 'Bright electro-pop track highlighting young love; features colorful, high-energy choreography.' },
  { id: 'WMweEpGlu_U', title: 'Butter', year: 2021, description: 'Smooth, upbeat English-language summer hit; charted at #1 globally.' },
  { id: '7C2z4GqqS5E', title: 'Fake Love', year: 2018, description: 'Dark, moody track about heartbreak and the pain of false love; cinematic MV visuals.' },
  { id: 'hmE9f-TEutc', title: 'Blood Sweat & Tears', year: 2016, description: 'Art-inspired MV with themes of temptation and sacrifice; mix of pop and moombahton elements.' },
  { id: 'kTlv5_Bs8aw', title: 'Mic Drop (Steve Aoki Remix)', year: 2017, description: 'Energetic hip-hop remix with bold visuals and choreography; celebrates BTS’s global success.' },
  { id: 'CuklIb9d3fI', title: 'Permission to Dance', year: 2021, description: 'Upbeat, feel-good song encouraging freedom and positivity; choreography by “dance crew” style.' },
  { id: 'H5v3kku4y6Q', title: 'ON', year: 2020, description: 'Powerful, anthemic track reflecting BTS’s struggles and growth; epic cinematic MV with intense choreography.' },
  { id: 'rClUODTDtMU', title: 'Life Goes On', year: 2020, description: 'Soft, emotional track addressing the pandemic and resilience; MV set in a quiet town with intimate storytelling.' },
  { id: 'pBuZEGYXA6E', title: 'IDOL', year: 2018, description: 'High-energy track celebrating self-identity and culture; features traditional Korean elements and colorful visuals.' }
];

/* ──────────────────────────────────────────
   DATA — QUIZ QUESTIONS
────────────────────────────────────────── */
const QUIZ_QUESTIONS = [
  { q: 'What does "BTS" stand for in Korean?', opts: ['Bangtan Sonyeondan', 'Beyond The Scene', 'Beautiful Talented Stars', 'Boys That Shine'], ans: 0 },
  { q: 'Which BTS member is the youngest (maknae)?', opts: ['Jimin', 'V', 'Jungkook', 'J-Hope'], ans: 2 },
  { q: 'In what year did BTS officially debut?', opts: ['2011', '2012', '2013', '2014'], ans: 2 },
  { q: 'Which BTS song was their first #1 on the Billboard Hot 100?', opts: ['Boy With Luv', 'Butter', 'DNA', 'Dynamite'], ans: 3 },
  { q: 'What is RM\'s real name?', opts: ['Kim Seok-jin', 'Kim Nam-joon', 'Min Yoon-gi', 'Park Ji-min'], ans: 1 },
  { q: 'What is the name of the BTS fan community?', opts: ['PURPLE', 'ARMY', 'ANGELS', 'STARS'], ans: 1 },
  { q: 'Which member was the first to headline a major US music festival solo?', opts: ['RM', 'Suga', 'V', 'J-Hope'], ans: 3 },
  { q: 'What color is most associated with BTS and ARMY?', opts: ['Gold', 'Silver', 'Purple', 'Blue'], ans: 2 },
  { q: 'Which BTS album contains the iconic song "Blood Sweat & Tears"?', opts: ['Love Yourself: Her', 'Wings', 'HYYH Pt.1', 'Map of the Soul: 7'], ans: 1 },
  { q: 'What is J-Hope\'s real name?', opts: ['Jung Ho-seok', 'Kim Tae-hyung', 'Jeon Jung-kook', 'Kim Nam-joon'], ans: 0 },
  { q: 'Who is the leader of BTS?', opts: ['Jimin', 'RM', 'Jin', 'Suga'], ans: 1 },
  { q: 'Which BTS song was their first English-language single?', opts: ['Butter', 'Dynamite', 'Life Goes On', 'Boy With Luv'], ans: 1 },
  { q: 'Name the BTS album that includes Blood Sweat & Tears.', opts: ['Love Yourself: Tear', 'Map of the Soul: 7', 'BE', 'Dark & Wild'], ans: 3 },
  { q: 'Which BTS member is a brand ambassador for Louis Vuitton?', opts: ['V', 'Jimin', 'J-Hope', 'Jungkook'], ans: 2 },
  { q: 'Name the 2022 FIFA World Cup song performed by Jungkook?', opts: ['Dreamers', 'Life Goes On', 'Dynamite', 'Butter'], ans: 0 },
  { q: 'Which BTS member released the solo album Layover?', opts: ['V', 'Jimin', 'RM', 'Jin'], ans: 0 },
  { q: 'In what year did BTS officially debut?', opts: ['2012', '2013', '2014', '2015'], ans: 1 },
  { q: 'Name all the members of BTS in order of their stage names.', opts: ['RM, Jin, Suga, J-Hope, Jimin, V, Jungkook', 'Jin, RM, Suga, J-Hope, V, Jimin, Jungkook', 'RM, Suga, Jin, J-Hope, Jimin, V, Jungkook', 'RM, Jin, J-Hope, Suga, Jimin, Jungkook, V'], ans: 0 }
];

/* ══════════════════════════════════════════
   LOADER
══════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('fade-out');
    document.body.style.overflow = 'auto';
  }, 2400);
});
document.body.style.overflow = 'hidden';

/* ══════════════════════════════════════════
   PARTICLE CANVAS
══════════════════════════════════════════ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 2.5 + 0.5;
      this.dx = (Math.random() - 0.5) * 0.4;
      this.dy = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = `hsl(${270 + Math.random() * 60}, 80%, 70%)`;
    }
    update() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);

  // Active link
  document.querySelectorAll('.section').forEach(sec => {
    const top = sec.offsetTop - 100;
    const bottom = top + sec.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${sec.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ══════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════ */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
let isDark = true;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
});

/* ══════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════ */
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

function addReveal(el) {
  el.classList.add('reveal');
  revealObserver.observe(el);
}

/* ══════════════════════════════════════════
   MEMBERS GRID
══════════════════════════════════════════ */
function renderMembers() {
  const grid = document.getElementById('membersGrid');
  grid.innerHTML = '';
  MEMBERS.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="member-card-img-wrap">
        <div style="width:100%;height:100%;background:linear-gradient(135deg,${m.color}66,${m.color}22);display:flex;align-items:center;justify-content:center;font-size:5rem;">${m.emoji}</div>
        <div class="member-card-img-overlay"></div>
        <span class="member-card-position">${m.position}</span>
      </div>
      <div class="member-card-body">
        <div class="member-card-stage">${m.stage}</div>
        <div class="member-card-name">${m.name}</div>
        <div class="member-card-intro">${m.intro}</div>
        <div class="member-card-dob"><i class="fas fa-birthday-cake" style="color:${m.color}"></i> ${m.dob}</div>
      </div>
      <div class="member-card-footer">
        <span class="member-card-view">View Profile <i class="fas fa-arrow-right"></i></span>
        <span class="member-card-nationality">${m.nationality}</span>
      </div>
    `;
    card.addEventListener('click', () => openMemberModal(m));
    grid.appendChild(card);
    addReveal(card);
  });
}

/* ══════════════════════════════════════════
   MEMBER MODAL
══════════════════════════════════════════ */
const memberModal = document.getElementById('memberModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openMemberModal(m) {
  const discHTML = m.discography.map(d => `
    <div class="discography-card">
      <div class="disc-year">${d.year}</div>
      <div class="disc-title">${d.title}</div>
    </div>
  `).join('');

  const videoHTML = m.videos.map(v => `
    <iframe src="https://www.youtube.com/embed/${v.id}?rel=0" title="${v.title}" allowfullscreen loading="lazy"></iframe>
  `).join('');

  const factsHTML = m.funFacts.map(f => `<li>${f}</li>`).join('');
  const achieveHTML = m.achievements.map(a => `<li>${a}</li>`).join('');

  modalContent.innerHTML = `
    <div class="modal-banner">
      <div style="width:100%;height:100%;background:linear-gradient(135deg,${m.color}99,${m.color}22);display:flex;align-items:center;justify-content:center;font-size:8rem;">${m.emoji}</div>
      <div class="modal-banner-overlay"></div>
    </div>
    <div class="modal-body">
      <div class="modal-header-row">
        <div>
          <div class="modal-stage">${m.stage}</div>
          <div class="modal-fullname">${m.name}</div>
        </div>
        <div class="modal-badges">
          ${m.position.split(' · ').map(p => `<span class="modal-badge">${p}</span>`).join('')}
          <span class="modal-badge">${m.dob}</span>
          <span class="modal-badge">${m.nationality}</span>
        </div>
      </div>
      <p class="modal-bio">${m.bio}</p>
      <div class="modal-two-col">
        <div>
          <div class="modal-col-title"><i class="fas fa-star" style="color:${m.color}"></i> Fun Facts</div>
          <ul class="modal-list">${factsHTML}</ul>
        </div>
        <div>
          <div class="modal-col-title"><i class="fas fa-trophy" style="color:${m.color}"></i> Achievements</div>
          <ul class="modal-list">${achieveHTML}</ul>
        </div>
      </div>
      <div class="modal-discography">
        <div class="modal-col-title"><i class="fas fa-music" style="color:${m.color}"></i> Solo Discography</div>
        <div class="discography-cards">${discHTML}</div>
      </div>
      <div>
        <div class="modal-col-title"><i class="fab fa-youtube" style="color:${m.color}"></i> Solo Music Videos</div>
        <div class="modal-video-grid">${videoHTML}</div>
      </div>
    </div>
  `;
  memberModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', closeMemberModal);
memberModal.addEventListener('click', e => {
  if (e.target === memberModal) closeMemberModal();
});
function closeMemberModal() {
  memberModal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════
   SOLO WORKS
══════════════════════════════════════════ */
let activeSoloMember = 'All';

function renderSoloTabs() {
  const tabs = document.getElementById('soloTabs');
  const members = ['All', ...MEMBERS.map(m => m.stage)];
  tabs.innerHTML = members.map(m => `
    <button class="solo-tab ${m === activeSoloMember ? 'active' : ''}" data-member="${m}">${m}</button>
  `).join('');
  tabs.querySelectorAll('.solo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeSoloMember = tab.dataset.member;
      renderSoloTabs();
      renderSoloGrid();
    });
  });
}

function renderSoloGrid() {
  const grid = document.getElementById('soloGrid');
  const filtered = activeSoloMember === 'All' ? SOLO_WORKS : SOLO_WORKS.filter(s => s.member === activeSoloMember);
  grid.innerHTML = filtered.map((s, i) => `
    <div class="solo-card reveal" data-index="${i}" style="animation-delay:${i * 0.06}s">
      <div class="solo-card-art" style="background:linear-gradient(135deg,${getMemberColor(s.member)}99,${getMemberColor(s.member)}33)">
        <span style="position:relative;z-index:1">${s.emoji}</span>
      </div>
      <div class="solo-card-info">
        <div class="solo-card-member">${s.member}</div>
        <div class="solo-card-title">${s.title}</div>
        <div class="solo-card-year">${s.year}</div>
        <span class="solo-card-type">${s.type}</span>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.solo-card').forEach((card, i) => {
    revealObserver.observe(card);
    card.addEventListener('click', () => openSoloPopup(filtered[i]));
  });
}

function getMemberColor(stage) {
  const m = MEMBERS.find(m => m.stage === stage);
  return m ? m.color : '#6600cc';
}

const soloPopup = document.getElementById('soloPopup');
const soloPopupContent = document.getElementById('soloPopupContent');
document.getElementById('soloPopupClose').addEventListener('click', () => { soloPopup.classList.remove('open'); document.body.style.overflow = ''; });
soloPopup.addEventListener('click', e => { if (e.target === soloPopup) { soloPopup.classList.remove('open'); document.body.style.overflow = ''; } });

function openSoloPopup(s) {
  soloPopupContent.innerHTML = `
    <div style="font-size:4rem;text-align:center;margin-bottom:16px">${s.emoji}</div>
    <div style="text-align:center;margin-bottom:8px">
      <span style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:${getMemberColor(s.member)};background:${getMemberColor(s.member)}22;padding:4px 14px;border-radius:100px;border:1px solid ${getMemberColor(s.member)}44">${s.member} · ${s.type}</span>
    </div>
    <h3 style="font-family:var(--font-display);font-size:2rem;font-weight:400;color:var(--text);text-align:center;margin-bottom:4px">${s.title}</h3>
    <div style="text-align:center;color:var(--text3);font-size:0.85rem;margin-bottom:20px">${s.year}</div>
    <p style="color:var(--text2);font-size:0.9rem;line-height:1.7;margin-bottom:20px">${s.desc}</p>
    <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--p7);margin-bottom:12px">Tracklist</div>
    <ul style="display:flex;flex-direction:column;gap:8px">
      ${s.tracks.map((t, i) => `
        <li style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--surface-strong);border:1px solid var(--border);border-radius:10px;font-size:0.88rem;color:var(--text2)">
          <span style="width:22px;height:22px;border-radius:50%;background:${getMemberColor(s.member)}33;color:${getMemberColor(s.member)};font-size:0.72rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i + 1}</span>
          ${t}
        </li>
      `).join('')}
    </ul>
  `;
  soloPopup.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ══════════════════════════════════════════
   BTS GROUP ALBUMS
══════════════════════════════════════════ */
function renderAlbums() {
  const grid = document.getElementById('albumsGrid');
  const gradients = [
    'linear-gradient(135deg,#2d0060,#6600cc)',
    'linear-gradient(135deg,#003399,#0066ff)',
    'linear-gradient(135deg,#cc0066,#ff6ab5)',
    'linear-gradient(135deg,#004422,#00aa55)',
    'linear-gradient(135deg,#cc7700,#ffcc00)',
    'linear-gradient(135deg,#660000,#cc3300)',
    'linear-gradient(135deg,#4a00a0,#00e5cc)',
    'linear-gradient(135deg,#1a0044,#8833ee)',
    'linear-gradient(135deg,#003333,#00aa99)',
    'linear-gradient(135deg,#440044,#cc44cc)',
    'linear-gradient(135deg,#cc6600,#ffaa00)',
    'linear-gradient(135deg,#0d0015,#4a00a0)',
  ];
  grid.innerHTML = BTS_ALBUMS.map((a, i) => `
    <div class="album-card reveal" data-index="${i}">
      <div class="album-card-art" style="background:${gradients[i % gradients.length]}">
        <span style="position:relative;z-index:1">${a.emoji}</span>
      </div>
      <div class="album-card-body">
        <div class="album-card-title">${a.title}</div>
        <div class="album-card-year">${a.year}</div>
        <div class="album-card-type">${a.type}</div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.album-card').forEach((card, i) => {
    revealObserver.observe(card);
    card.addEventListener('click', () => openAlbumPopup(BTS_ALBUMS[i], gradients[i % gradients.length]));
  });
}

const albumPopup = document.getElementById('albumPopup');
const albumPopupContent = document.getElementById('albumPopupContent');
document.getElementById('albumPopupClose').addEventListener('click', () => { albumPopup.classList.remove('open'); document.body.style.overflow = ''; });
albumPopup.addEventListener('click', e => { if (e.target === albumPopup) { albumPopup.classList.remove('open'); document.body.style.overflow = ''; } });

function openAlbumPopup(a, gradient) {
  albumPopupContent.innerHTML = `
    <div style="height:120px;background:${gradient};border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:5rem;margin-bottom:20px">${a.emoji}</div>
    <h3 style="font-family:var(--font-display);font-size:1.9rem;font-weight:400;color:var(--text);margin-bottom:4px">${a.title}</h3>
    <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">
      <span style="font-size:0.75rem;font-weight:700;color:var(--p7);background:rgba(170,85,255,0.15);border:1px solid rgba(170,85,255,0.25);padding:3px 12px;border-radius:100px">${a.year}</span>
      <span style="font-size:0.75rem;font-weight:700;color:var(--text3);background:var(--surface-strong);border:1px solid var(--border);padding:3px 12px;border-radius:100px">${a.type}</span>
    </div>
    <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--p7);margin-bottom:12px">Tracklist (${a.tracks.length} tracks)</div>
    <ul style="display:flex;flex-direction:column;gap:6px">
      ${a.tracks.map((t, i) => `
        <li style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--surface-strong);border:1px solid var(--border);border-radius:8px;font-size:0.88rem;color:var(--text2)">
          <span style="width:26px;height:26px;border-radius:50%;background:rgba(170,85,255,0.15);color:var(--p7);font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i + 1}</span>
          ${t}
        </li>
      `).join('')}
    </ul>
  `;
  albumPopup.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ══════════════════════════════════════════
   TIMELINE
══════════════════════════════════════════ */
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  container.innerHTML = TIMELINE_EVENTS.map((e, i) => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-emoji">${e.emoji}</div>
        <div class="timeline-year">${e.year}</div>
        <div class="timeline-title">${e.title}</div>
        <div class="timeline-desc">${e.desc}</div>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.timeline-item').forEach(item => revealObserver.observe(item));
}

/* ══════════════════════════════════════════
   VIDEOS
══════════════════════════════════════════ */
function renderVideos() {
  const grid = document.getElementById('videosGrid');
  grid.innerHTML = BTS_VIDEOS.map(v => `
    <div class="video-card reveal">
      <iframe src="https://www.youtube.com/embed/${v.id}?rel=0" title="${v.title}" allowfullscreen loading="lazy"></iframe>
      <div class="video-card-info">
        <div class="video-card-title">${v.title}</div>
        <div class="video-card-year">${v.year} · ${v.desc}</div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.video-card').forEach(card => revealObserver.observe(card));
}

/* ══════════════════════════════════════════
   QUIZ
══════════════════════════════════════════ */
let quizIndex = 0;
let quizScore = 0;

document.getElementById('startQuizBtn').addEventListener('click', startQuiz);

function startQuiz() {
  quizIndex = 0;
  quizScore = 0;
  document.getElementById('quizStart').classList.add('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizQuestion').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const q = QUIZ_QUESTIONS[quizIndex];
  document.getElementById('quizQNum').textContent = `Question ${quizIndex + 1} / ${QUIZ_QUESTIONS.length}`;
  document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
  document.getElementById('quizProgressBar').style.width = `${(quizIndex / QUIZ_QUESTIONS.length) * 100}%`;
  document.getElementById('quizQ').textContent = q.q;
  const opts = document.getElementById('quizOptions');
  opts.innerHTML = q.opts.map((opt, i) => `
    <button class="quiz-opt" data-index="${i}">${opt}</button>
  `).join('');
  opts.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
  });
}

function handleAnswer(chosen) {
  const q = QUIZ_QUESTIONS[quizIndex];
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach(b => b.disabled = true);
  btns[q.ans].classList.add('correct');
  if (chosen !== q.ans) {
    btns[chosen].classList.add('wrong');
  } else {
    quizScore++;
  }
  setTimeout(() => {
    quizIndex++;
    if (quizIndex < QUIZ_QUESTIONS.length) {
      showQuestion();
    } else {
      showQuizResult();
    }
  }, 1200);
}

function showQuizResult() {
  document.getElementById('quizQuestion').classList.add('hidden');
  document.getElementById('quizResult').classList.remove('hidden');
  document.getElementById('quizProgressBar').style.width = '100%';

  const pct = quizScore / QUIZ_QUESTIONS.length;
  let emoji, title, text;
  if (pct === 1) { emoji = '🏆'; title = 'ARMY Level: Legendary!'; text = 'Perfect score! You know BTS inside-out. Jungkook would be proud!'; }
  else if (pct >= 0.8) { emoji = '💜'; title = 'True ARMY!'; text = 'Almost perfect! You\'re a real BTS fan through and through!'; }
  else if (pct >= 0.6) { emoji = '⭐'; title = 'Solid ARMY!'; text = 'Good job! A few more listens and you\'ll be a BTS expert!'; }
  else if (pct >= 0.4) { emoji = '🌱'; title = 'Baby ARMY!'; text = 'You\'re just getting started! Dive into BTS and try again!'; }
  else { emoji = '😅'; title = 'Just Discovering BTS?'; text = 'No worries! Start with "Dynamite" and "Boy With Luv" and come back!'; }

  document.getElementById('quizResultEmoji').textContent = emoji;
  document.getElementById('quizResultTitle').textContent = title;
  document.getElementById('quizResultText').textContent = text;
  document.getElementById('quizFinalScore').textContent = `${quizScore} / ${QUIZ_QUESTIONS.length}`;
}

document.getElementById('retryQuizBtn').addEventListener('click', () => {
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizStart').classList.remove('hidden');
});

/* ══════════════════════════════════════════
   COUNTDOWN
══════════════════════════════════════════ */
function updateCountdown() {
  const target = new Date('2026-06-13T00:00:00');
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) {
    ['cdDays', 'cdHours', 'cdMins', 'cdSecs'].forEach(id => document.getElementById(id).textContent = '00');
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById('cdDays').textContent = String(days).padStart(2, '0');
  document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cdMins').textContent = String(mins).padStart(2, '0');
  document.getElementById('cdSecs').textContent = String(secs).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ══════════════════════════════════════════
   FAN WALL
══════════════════════════════════════════ */
// Pre-seed fan messages
const SEED_MESSAGES = [
  { name: 'PurpleSky_Ananya', country: 'India 🇮🇳', bias: 'V (Taehyung)', text: 'BTS changed my life. Their music carried me through my toughest days. Thank you for everything, Taehyung! 💜', time: '2 hours ago' },
  { name: 'Maria_ARMY', country: 'Brazil 🇧🇷', bias: 'Jungkook', text: 'Golden Maknae\'s "Seven" was on repeat for weeks. Jungkook, you are the definition of talent. See you in 2026! 💜', time: '5 hours ago' },
  { name: 'SeoulBound_Kai', country: 'USA 🇺🇸', bias: 'Suga (Yoongi)', text: 'Agust D\'s trilogy helped me understand my own mental health in ways therapy never could. Min Yoongi is a genius. 💙', time: '1 day ago' },
  { name: 'ARMY_Forever_Luna', country: 'Philippines 🇵🇭', bias: 'Jimin', text: 'Jimin\'s "Like Crazy" making history at the Hot 100 was the best moment ever. Proud of you every single day! 🌸', time: '1 day ago' },
  { name: 'BonsaiARMY', country: 'Japan 🇯🇵', bias: 'J-Hope (Hoseok)', text: 'J-Hope at Lollapalooza proved K-pop belongs on every stage in the world. That performance was historic. ☀️', time: '2 days ago' },
  { name: 'Fatima_Namjoonie', country: 'Egypt 🇪🇬', bias: 'RM (Namjoon)', text: 'RM\'s "Indigo" is the most beautiful album I have ever heard. His art and music are one. Purple forever 💜', time: '3 days ago' },
];

const fanMessages = document.getElementById('fanMessages');

function renderSeedMessages() {
  SEED_MESSAGES.forEach(msg => {
    fanMessages.appendChild(createMsgCard(msg));
  });
}

function createMsgCard(msg) {
  const card = document.createElement('div');
  card.className = 'fan-msg-card';
  card.innerHTML = `
    <div class="fan-msg-header">
      <div>
        <div class="fan-msg-name">💜 ${msg.name}</div>
        <div class="fan-msg-country">${msg.country}</div>
      </div>
      <span class="fan-msg-bias">${msg.bias}</span>
    </div>
    <div class="fan-msg-text">${msg.text}</div>
    <div class="fan-msg-time"><i class="fas fa-clock"></i> ${msg.time}</div>
  `;
  return card;
}

document.getElementById('fanSubmitBtn').addEventListener('click', () => {
  const name = document.getElementById('fanName').value.trim();
  const country = document.getElementById('fanCountry').value.trim();
  const bias = document.getElementById('fanFavorite').value;
  const text = document.getElementById('fanMsg').value.trim();

  if (!name || !text) {
    alert('Please enter your name and message! 💜');
    return;
  }

  const msg = {
    name: name || 'Anonymous ARMY',
    country: country || 'Worldwide 🌍',
    bias: bias || 'All 7! 💜',
    text,
    time: 'Just now'
  };

  const card = createMsgCard(msg);
  fanMessages.prepend(card);

  // Clear form
  document.getElementById('fanName').value = '';
  document.getElementById('fanCountry').value = '';
  document.getElementById('fanFavorite').value = '';
  document.getElementById('fanMsg').value = '';

  // Scroll messages into view
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

/* ══════════════════════════════════════════
   SECTION HEADER REVEALS
══════════════════════════════════════════ */
function revealSectionHeaders() {
  document.querySelectorAll('.section-header').forEach(h => addReveal(h));
  document.querySelectorAll('.fanwall-form, .fanwall-messages, .countdown-wrapper, .quiz-container').forEach(el => addReveal(el));
}

/* ══════════════════════════════════════════
   INIT — Run everything
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderMembers();
  renderSoloTabs();
  renderSoloGrid();
  renderAlbums();
  renderTimeline();
  renderVideos();
  renderSeedMessages();
  revealSectionHeaders();
});
