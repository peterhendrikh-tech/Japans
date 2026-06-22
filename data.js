// data.js

const kanaData = [
    // ==========================================
    // BASIS HIRAGANA (46 tekens)
    // ==========================================
    { kana: 'あ', romaji: 'a', groep: 'Hira: Klinkers', type: 'Hiragana' },
    { kana: 'い', romaji: 'i', groep: 'Hira: Klinkers', type: 'Hiragana' },
    { kana: 'う', romaji: 'u', groep: 'Hira: Klinkers', type: 'Hiragana' },
    { kana: 'え', romaji: 'e', groep: 'Hira: Klinkers', type: 'Hiragana' },
    { kana: 'お', romaji: 'o', groep: 'Hira: Klinkers', type: 'Hiragana' },

    { kana: 'か', romaji: 'ka', groep: 'Hira: K-Reeks', type: 'Hiragana' },
    { kana: 'き', romaji: 'ki', groep: 'Hira: K-Reeks', type: 'Hiragana' },
    { kana: 'く', romaji: 'ku', groep: 'Hira: K-Reeks', type: 'Hiragana' },
    { kana: 'け', romaji: 'ke', groep: 'Hira: K-Reeks', type: 'Hiragana' },
    { kana: 'こ', romaji: 'ko', groep: 'Hira: K-Reeks', type: 'Hiragana' },

    { kana: 'さ', romaji: 'sa', groep: 'Hira: S-Reeks', type: 'Hiragana' },
    { kana: 'し', romaji: 'shi', groep: 'Hira: S-Reeks', type: 'Hiragana' },
    { kana: 'す', romaji: 'su', groep: 'Hira: S-Reeks', type: 'Hiragana' },
    { kana: 'せ', romaji: 'se', groep: 'Hira: S-Reeks', type: 'Hiragana' },
    { kana: 'そ', romaji: 'so', groep: 'Hira: S-Reeks', type: 'Hiragana' },

    { kana: 'た', romaji: 'ta', groep: 'Hira: T-Reeks', type: 'Hiragana' },
    { kana: 'ち', romaji: 'chi', groep: 'Hira: T-Reeks', type: 'Hiragana' },
    { kana: 'つ', romaji: 'tsu', groep: 'Hira: T-Reeks', type: 'Hiragana' },
    { kana: 'て', romaji: 'te', groep: 'Hira: T-Reeks', type: 'Hiragana' },
    { kana: 'と', romaji: 'to', groep: 'Hira: T-Reeks', type: 'Hiragana' },

    { kana: 'な', romaji: 'na', groep: 'Hira: N-Reeks', type: 'Hiragana' },
    { kana: 'に', romaji: 'ni', groep: 'Hira: N-Reeks', type: 'Hiragana' },
    { kana: 'ぬ', romaji: 'nu', groep: 'Hira: N-Reeks', type: 'Hiragana' },
    { kana: 'ね', romaji: 'ne', groep: 'Hira: N-Reeks', type: 'Hiragana' },
    { kana: 'の', romaji: 'no', groep: 'Hira: N-Reeks', type: 'Hiragana' },

    { kana: 'は', romaji: 'ha', groep: 'Hira: H-Reeks', type: 'Hiragana' },
    { kana: 'ひ', romaji: 'hi', groep: 'Hira: H-Reeks', type: 'Hiragana' },
    { kana: 'ふ', romaji: 'fu', groep: 'Hira: H-Reeks', type: 'Hiragana' },
    { kana: 'へ', romaji: 'he', groep: 'Hira: H-Reeks', type: 'Hiragana' },
    { kana: 'ほ', romaji: 'ho', groep: 'Hira: H-Reeks', type: 'Hiragana' },

    { kana: 'ま', romaji: 'ma', groep: 'Hira: M-Reeks', type: 'Hiragana' },
    { kana: 'み', romaji: 'mi', groep: 'Hira: M-Reeks', type: 'Hiragana' },
    { kana: 'む', romaji: 'mu', groep: 'Hira: M-Reeks', type: 'Hiragana' },
    { kana: 'め', romaji: 'me', groep: 'Hira: M-Reeks', type: 'Hiragana' },
    { kana: 'も', romaji: 'mo', groep: 'Hira: M-Reeks', type: 'Hiragana' },

    { kana: 'や', romaji: 'ya', groep: 'Hira: Y-Reeks', type: 'Hiragana' },
    { kana: 'ゆ', romaji: 'yu', groep: 'Hira: Y-Reeks', type: 'Hiragana' },
    { kana: 'よ', romaji: 'yo', groep: 'Hira: Y-Reeks', type: 'Hiragana' },

    { kana: 'ら', romaji: 'ra', groep: 'Hira: R-Reeks', type: 'Hiragana' },
    { kana: 'り', romaji: 'ri', groep: 'Hira: R-Reeks', type: 'Hiragana' },
    { kana: 'る', romaji: 'ru', groep: 'Hira: R-Reeks', type: 'Hiragana' },
    { kana: 'れ', romaji: 're', groep: 'Hira: R-Reeks', type: 'Hiragana' },
    { kana: 'ろ', romaji: 'ro', groep: 'Hira: R-Reeks', type: 'Hiragana' },

    { kana: 'わ', romaji: 'wa', groep: 'Hira: W/N-Reeks', type: 'Hiragana' },
    { kana: 'を', romaji: 'wo', groep: 'Hira: W/N-Reeks', type: 'Hiragana' },
    { kana: 'ん', romaji: 'n',  groep: 'Hira: W/N-Reeks', type: 'Hiragana' },

    // ==========================================
    // HIRAGANA DAKUTEN & HANDAKUTEN (25 tekens)
    // ==========================================
    { kana: 'が', romaji: 'ga', groep: 'Hira: G-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ぎ', romaji: 'gi', groep: 'Hira: G-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ぐ', romaji: 'gu', groep: 'Hira: G-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'げ', romaji: 'ge', groep: 'Hira: G-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ご', romaji: 'go', groep: 'Hira: G-Reeks (Dakuten)', type: 'Hiragana' },

    { kana: 'ざ', romaji: 'za', groep: 'Hira: Z-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'じ', romaji: 'ji', groep: 'Hira: Z-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ず', romaji: 'zu', groep: 'Hira: Z-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ぜ', romaji: 'ze', groep: 'Hira: Z-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ぞ', romaji: 'zo', groep: 'Hira: Z-Reeks (Dakuten)', type: 'Hiragana' },

    { kana: 'だ', romaji: 'da', groep: 'Hira: D-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ぢ', romaji: 'dji', groep: 'Hira: D-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'づ', romaji: 'dzu', groep: 'Hira: D-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'で', romaji: 'de', groep: 'Hira: D-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ど', romaji: 'do', groep: 'Hira: D-Reeks (Dakuten)', type: 'Hiragana' },

    { kana: 'ば', romaji: 'ba', groep: 'Hira: B-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'び', romaji: 'bi', groep: 'Hira: B-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ぶ', romaji: 'bu', groep: 'Hira: B-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'べ', romaji: 'be', groep: 'Hira: B-Reeks (Dakuten)', type: 'Hiragana' },
    { kana: 'ぼ', romaji: 'bo', groep: 'Hira: B-Reeks (Dakuten)', type: 'Hiragana' },

    { kana: 'ぱ', romaji: 'pa', groep: 'Hira: P-Reeks (Handakuten)', type: 'Hiragana' },
    { kana: 'ぴ', romaji: 'pi', groep: 'Hira: P-Reeks (Handakuten)', type: 'Hiragana' },
    { kana: 'ぷ', romaji: 'pu', groep: 'Hira: P-Reeks (Handakuten)', type: 'Hiragana' },
    { kana: 'ぺ', romaji: 'pe', groep: 'Hira: P-Reeks (Handakuten)', type: 'Hiragana' },
    { kana: 'ぽ', romaji: 'po', groep: 'Hira: P-Reeks (Handakuten)', type: 'Hiragana' },

    // ==========================================
    // BASIS KATAKANA (46 tekens)
    // ==========================================
    { kana: 'ア', romaji: 'a', groep: 'Kata: Klinkers', type: 'Katakana' },
    { kana: 'イ', romaji: 'i', groep: 'Kata: Klinkers', type: 'Katakana' },
    { kana: 'ウ', romaji: 'u', groep: 'Kata: Klinkers', type: 'Katakana' },
    { kana: 'エ', romaji: 'e', groep: 'Kata: Klinkers', type: 'Katakana' },
    { kana: 'オ', romaji: 'o', groep: 'Kata: Klinkers', type: 'Katakana' },

    { kana: 'カ', romaji: 'ka', groep: 'Kata: K-Reeks', type: 'Katakana' },
    { kana: 'キ', romaji: 'ki', groep: 'Kata: K-Reeks', type: 'Katakana' },
    { kana: 'ク', romaji: 'ku', groep: 'Kata: K-Reeks', type: 'Katakana' },
    { kana: 'ケ', romaji: 'ke', groep: 'Kata: K-Reeks', type: 'Katakana' },
    { kana: 'コ', romaji: 'ko', groep: 'Kata: K-Reeks', type: 'Katakana' },

    { kana: 'サ', romaji: 'sa', groep: 'Kata: S-Reeks', type: 'Katakana' },
    { kana: 'シ', romaji: 'shi', groep: 'Kata: S-Reeks', type: 'Katakana' },
    { kana: 'ス', romaji: 'su', groep: 'Kata: S-Reeks', type: 'Katakana' },
    { kana: 'セ', romaji: 'se', groep: 'Kata: S-Reeks', type: 'Katakana' },
    { kana: 'ソ', romaji: 'so', groep: 'Kata: S-Reeks', type: 'Katakana' },

    { kana: 'タ', romaji: 'ta', groep: 'Kata: T-Reeks', type: 'Katakana' },
    { kana: 'チ', romaji: 'chi', groep: 'Kata: T-Reeks', type: 'Katakana' },
    { kana: 'ツ', romaji: 'tsu', groep: 'Kata: T-Reeks', type: 'Katakana' },
    { kana: 'テ', romaji: 'te', groep: 'Kata: T-Reeks', type: 'Katakana' },
    { kana: 'ト', romaji: 'to', groep: 'Kata: T-Reeks', type: 'Katakana' },

    { kana: 'ナ', romaji: 'na', groep: 'Kata: N-Reeks', type: 'Katakana' },
    { kana: 'ニ', romaji: 'ni', groep: 'Kata: N-Reeks', type: 'Katakana' },
    { kana: 'ヌ', romaji: 'nu', groep: 'Kata: N-Reeks', type: 'Katakana' },
    { kana: 'ネ', romaji: 'ne', groep: 'Kata: N-Reeks', type: 'Katakana' },
    { kana: 'ノ', romaji: 'no', groep: 'Kata: N-Reeks', type: 'Katakana' },

    { kana: 'ハ', romaji: 'ha', groep: 'Kata: H-Reeks', type: 'Katakana' },
    { kana: 'ヒ', romaji: 'hi', groep: 'Kata: H-Reeks', type: 'Katakana' },
    { kana: 'フ', romaji: 'fu', groep: 'Kata: H-Reeks', type: 'Katakana' },
    { kana: 'ヘ', romaji: 'he', groep: 'Kata: H-Reeks', type: 'Katakana' },
    { kana: 'ホ', romaji: 'ho', groep: 'Kata: H-Reeks', type: 'Katakana' },

    { kana: 'マ', romaji: 'ma', groep: 'Kata: M-Reeks', type: 'Katakana' },
    { kana: 'ミ', romaji: 'mi', groep: 'Kata: M-Reeks', type: 'Katakana' },
    { kana: 'ム', romaji: 'mu', groep: 'Kata: M-Reeks', type: 'Katakana' },
    { kana: 'メ', romaji: 'me', groep: 'Kata: M-Reeks', type: 'Katakana' },
    { kana: 'モ', romaji: 'mo', groep: 'Kata: M-Reeks', type: 'Katakana' },

    { kana: 'ヤ', romaji: 'ya', groep: 'Kata: Y-Reeks', type: 'Katakana' },
    { kana: 'ユ', romaji: 'yu', groep: 'Kata: Y-Reeks', type: 'Katakana' },
    { kana: 'ヨ', romaji: 'yo', groep: 'Kata: Y-Reeks', type: 'Katakana' },

    { kana: 'ラ', romaji: 'ra', groep: 'Kata: R-Reeks', type: 'Katakana' },
    { kana: 'リ', romaji: 'ri', groep: 'Kata: R-Reeks', type: 'Katakana' },
    { kana: 'ル', romaji: 'ru', groep: 'Kata: R-Reeks', type: 'Katakana' },
    { kana: 'レ', romaji: 're', groep: 'Kata: R-Reeks', type: 'Katakana' },
    { kana: 'ロ', romaji: 'ro', groep: 'Kata: R-Reeks', type: 'Katakana' },

    { kana: 'ワ', romaji: 'wa', groep: 'Kata: W/N-Reeks', type: 'Katakana' },
    { kana: 'ヲ', romaji: 'wo', groep: 'Kata: W/N-Reeks', type: 'Katakana' },
    { kana: 'ン', romaji: 'n',  groep: 'Kata: W/N-Reeks', type: 'Katakana' },

    // ==========================================
    // KATAKANA DAKUTEN & HANDAKUTEN (25 tekens)
    // ==========================================
    { kana: 'ガ', romaji: 'ga', groep: 'Kata: G-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ギ', romaji: 'gi', groep: 'Kata: G-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'グ', romaji: 'gu', groep: 'Kata: G-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ゲ', romaji: 'ge', groep: 'Kata: G-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ゴ', romaji: 'go', groep: 'Kata: G-Reeks (Dakuten)', type: 'Katakana' },

    { kana: 'ザ', romaji: 'za', groep: 'Kata: Z-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ジ', romaji: 'ji', groep: 'Kata: Z-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ズ', romaji: 'zu', groep: 'Kata: Z-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ゼ', romaji: 'ze', groep: 'Kata: Z-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ゾ', romaji: 'zo', groep: 'Kata: Z-Reeks (Dakuten)', type: 'Katakana' },

    { kana: 'ダ', romaji: 'da', groep: 'Kata: D-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ヂ', romaji: 'dji', groep: 'Kata: D-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ヅ', romaji: 'dzu', groep: 'Kata: D-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'デ', romaji: 'de', groep: 'Kata: D-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ド', romaji: 'do', groep: 'Kata: D-Reeks (Dakuten)', type: 'Katakana' },

    { kana: 'バ', romaji: 'ba', groep: 'Kata: B-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ビ', romaji: 'bi', groep: 'Kata: B-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ブ', romaji: 'bu', groep: 'Kata: B-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ベ', romaji: 'be', groep: 'Kata: B-Reeks (Dakuten)', type: 'Katakana' },
    { kana: 'ボ', romaji: 'bo', groep: 'Kata: B-Reeks (Dakuten)', type: 'Katakana' },

    { kana: 'パ', romaji: 'pa', groep: 'Kata: P-Reeks (Handakuten)', type: 'Katakana' },
    { kana: 'ピ', romaji: 'pi', groep: 'Kata: P-Reeks (Handakuten)', type: 'Katakana' },
    { kana: 'プ', romaji: 'pu', groep: 'Kata: P-Reeks (Handakuten)', type: 'Katakana' },
    { kana: 'ペ', romaji: 'pe', groep: 'Kata: P-Reeks (Handakuten)', type: 'Katakana' },
    { kana: 'ポ', romaji: 'po', groep: 'Kata: P-Reeks (Handakuten)', type: 'Katakana' }
];

const woordenData = [
    // ==========================================
    // THEMA: DIEREN
    // ==========================================
    { kana: 'いぬ', romaji: 'inu', betekenis: 'Hond', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'ねこ', romaji: 'neko', betekenis: 'Kat', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'とり', romaji: 'tori', betekenis: 'Vogel', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'うし', romaji: 'ushi', betekenis: 'Koe', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'うま', romaji: 'uma', betekenis: 'Paard', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'さる', romaji: 'saru', betekenis: 'Aap', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'くま', romaji: 'kuma', betekenis: 'Beer', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'かめ', romaji: 'kame', betekenis: 'Schildpad', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'へび', romaji: 'hebi', betekenis: 'Slang', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'ぞう', romaji: 'zou', betekenis: 'Olifant', type: 'Woord', thema: 'Dieren', niveau: 'N5' }, 
    { kana: 'とら', romaji: 'tora', betekenis: 'Tijger', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'しか', romaji: 'shika', betekenis: 'Hert', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'かに', romaji: 'kani', betekenis: 'Krab', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'きつね', romaji: 'kitsune', betekenis: 'Vos', type: 'Woord', thema: 'Dieren', niveau: 'N5' },
    { kana: 'ぶた', romaji: 'buta', betekenis: 'Varken', type: 'Woord', thema: 'Dieren', niveau: 'N5' }, 
    { kana: 'かば', romaji: 'kaba', betekenis: 'Nijlpaard', type: 'Woord', thema: 'Dieren', niveau: 'N5' }, 
    { kana: 'パンダ', romaji: 'panda', betekenis: 'Panda', type: 'Woord', thema: 'Dieren', niveau: 'N5' }, 
    { kana: 'ペンギン', romaji: 'pengin', betekenis: 'Pinguïn', type: 'Woord', thema: 'Dieren', niveau: 'N5' }, 

    // ==========================================
    // THEMA: INSECTEN (NIEUW)
    // ==========================================
    { kana: 'あり', romaji: 'ari', betekenis: 'Mier', type: 'Woord', thema: 'Insecten', niveau: 'N5' },
    { kana: 'むし', romaji: 'mushi', betekenis: 'Insect / Kever', type: 'Woord', thema: 'Insecten', niveau: 'N5' },
    { kana: 'す', romaji: 'su', betekenis: 'Nest / Web', type: 'Woord', thema: 'Insecten', niveau: 'N5' },
    { kana: 'くも', romaji: 'kumo', betekenis: 'Spin', type: 'Woord', thema: 'Insecten', niveau: 'N5' },
    { kana: 'はち', romaji: 'hachi', betekenis: 'Bij', type: 'Woord', thema: 'Insecten', niveau: 'N5' },

    // ==========================================
    // THEMA: NATUUR
    // ==========================================
    { kana: 'うみ', romaji: 'umi', betekenis: 'Zee', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'やま', romaji: 'yama', betekenis: 'Berg', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'ゆき', romaji: 'yuki', betekenis: 'Sneeuw', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'あめ', romaji: 'ame', betekenis: 'Regen', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'はな', romaji: 'hana', betekenis: 'Bloem', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'はる', romaji: 'haru', betekenis: 'Lente', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'なつ', romaji: 'natsu', betekenis: 'Zomer', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'あき', romaji: 'aki', betekenis: 'Herfst', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'ふゆ', romaji: 'fuyu', betekenis: 'Winter', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'かわ', romaji: 'kawa', betekenis: 'Rivier', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'そら', romaji: 'sora', betekenis: 'Lucht / Hemel', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'つき', romaji: 'tsuki', betekenis: 'Maan', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'かぜ', romaji: 'kaze', betekenis: 'Wind', type: 'Woord', thema: 'Natuur', niveau: 'N5' }, 
    { kana: 'ほし', romaji: 'hoshi', betekenis: 'Ster', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'いし', romaji: 'ishi', betekenis: 'Steen', type: 'Woord', thema: 'Natuur', niveau: 'N5' },

    // ==========================================
    // THEMA: GROENTEN & TUIN (NIEUW)
    // ==========================================
    { kana: 'きゅうり', romaji: 'kyuuri', betekenis: 'Komkommer', type: 'Woord', thema: 'Groenten & Tuin', niveau: 'N5' },
    { kana: 'ブロッコリー', romaji: 'burokkorii', betekenis: 'Broccoli', type: 'Woord', thema: 'Groenten & Tuin', niveau: 'N5' },
    { kana: 'ズッキーニ', romaji: 'zukkiini', betekenis: 'Courgette / Zucchini', type: 'Woord', thema: 'Groenten & Tuin', niveau: 'N5' },
    { kana: 'トマト', romaji: 'tomato', betekenis: 'Tomaat', type: 'Woord', thema: 'Groenten & Tuin', niveau: 'N5' },
    { kana: 'にんじん', romaji: 'ninjin', betekenis: 'Wortel', type: 'Woord', thema: 'Groenten & Tuin', niveau: 'N5' },
    { kana: 'はっぱ', romaji: 'happa', betekenis: 'Blad', type: 'Woord', thema: 'Groenten & Tuin', niveau: 'N5' },
    { kana: 'き', romaji: 'ki', betekenis: 'Boom / Hout', type: 'Woord', thema: 'Groenten & Tuin', niveau: 'N5' },

    // ==========================================
    // THEMA: ETEN & DRINKEN
    // ==========================================
    { kana: 'すし', romaji: 'sushi', betekenis: 'Sushi', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' },
    { kana: 'にく', romaji: 'niku', betekenis: 'Vlees', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' },
    { kana: 'さけ', romaji: 'sake', betekenis: 'Rijstwijn / Zalm', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' },
    { kana: 'パン', romaji: 'pan', betekenis: 'Brood', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' }, 
    { kana: 'ツナ', romaji: 'tsuna', betekenis: 'Tonijn', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' },
    { kana: 'みず', romaji: 'mizu', betekenis: 'Water', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' }, 
    { kana: 'お茶', romaji: 'ocha', betekenis: 'Groene Thee', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' },
    { kana: 'ピザ', romaji: 'piza', betekenis: 'Pizza', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' }, 
    { kana: 'みかん', romaji: 'mikan', betekenis: 'Mandarijn', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' },
    { kana: 'りんご', romaji: 'ringo', betekenis: 'Appel', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' }, 
    { kana: 'ごはん', romaji: 'gohan', betekenis: 'Rijst / Maaltijd', type: 'Woord', thema: 'Eten & Drinken', niveau: 'N5' }, 

    // ==========================================
    // THEMA: KLEUREN (NIEUW)
    // ==========================================
    { kana: 'あか', romaji: 'aka', betekenis: 'Rood', type: 'Woord', thema: 'Kleuren', niveau: 'N5' },
    { kana: 'あお', romaji: 'ao', betekenis: 'Blauw', type: 'Woord', thema: 'Kleuren', niveau: 'N5' },
    { kana: 'みどり', romaji: 'midori', betekenis: 'Groen', type: 'Woord', thema: 'Kleuren', niveau: 'N5' },
    { kana: 'くろ', romaji: 'kuro', betekenis: 'Zwart', type: 'Woord', thema: 'Kleuren', niveau: 'N5' },
    { kana: 'しろ', romaji: 'shiro', betekenis: 'Wit', type: 'Woord', thema: 'Kleuren', niveau: 'N5' },
    { kana: 'きいろ', romaji: 'kiiro', betekenis: 'Geel', type: 'Woord', thema: 'Kleuren', niveau: 'N5' },

    // ==========================================
    // THEMA: BOUW & CONSTRUCTIE (NIEUW)
    // ==========================================
    { kana: 'たてもの', romaji: 'tatemono', betekenis: 'Gebouw', type: 'Woord', thema: 'Bouw & Constructie', niveau: 'N4' },
    { kana: 'いえ', romaji: 'ie', betekenis: 'Huis', type: 'Woord', thema: 'Bouw & Constructie', niveau: 'N4' },
    { kana: 'はし', romaji: 'hashi', betekenis: 'Brug', type: 'Woord', thema: 'Bouw & Constructie', niveau: 'N4' },
    { kana: 'てつ', romaji: 'tetsu', betekenis: 'IJzer / Staal', type: 'Woord', thema: 'Bouw & Constructie', niveau: 'N4' },
    { kana: 'かべ', romaji: 'kabe', betekenis: 'Muur', type: 'Woord', thema: 'Bouw & Constructie', niveau: 'N4' },
    { kana: 'やね', romaji: 'yane', betekenis: 'Dak', type: 'Woord', thema: 'Bouw & Constructie', niveau: 'N4' },

    // ==========================================
    // THEMA: OBJECTEN & DIVERSEN
    // ==========================================
    { kana: 'ほん', romaji: 'hon', betekenis: 'Boek', type: 'Woord', thema: 'Objecten', niveau: 'N5' },
    { kana: 'バス', romaji: 'basu', betekenis: 'Bus', type: 'Woord', thema: 'Objecten', niveau: 'N5' }, 
    { kana: 'ドア', romaji: 'doa', betekenis: 'Deur', type: 'Woord', thema: 'Objecten', niveau: 'N5' }, 
    { kana: 'ペン', romaji: 'pen', betekenis: 'Pen', type: 'Woord', thema: 'Objecten', niveau: 'N5' }, 
    { kana: 'メモ', romaji: 'memo', betekenis: 'Notitie', type: 'Woord', thema: 'Objecten', niveau: 'N5' },
    { kana: 'かさ', romaji: 'kasa', betekenis: 'Paraplu', type: 'Woord', thema: 'Objecten', niveau: 'N5' },
    { kana: 'くつ', romaji: 'kutsu', betekenis: 'Schoenen', type: 'Woord', thema: 'Objecten', niveau: 'N5' },
    { kana: 'かぎ', romaji: 'kagi', betekenis: 'Sleutel', type: 'Woord', thema: 'Objecten', niveau: 'N5' }, 
    { kana: 'まど', romaji: 'mado', betekenis: 'Raam', type: 'Woord', thema: 'Objecten', niveau: 'N5' }, 
    { kana: 'かばん', romaji: 'kaban', betekenis: 'Tas', type: 'Woord', thema: 'Objecten', niveau: 'N5' }, 
    { kana: 'つくえ', romaji: 'tsukue', betekenis: 'Bureau', type: 'Woord', thema: 'Objecten', niveau: 'N5' },
    { kana: 'いす', romaji: 'isu', betekenis: 'Stoel', type: 'Woord', thema: 'Objecten', niveau: 'N5' },
    { kana: 'てがみ', romaji: 'tegami', betekenis: 'Brief', type: 'Woord', thema: 'Objecten', niveau: 'N5' }, 

    // ==========================================
    // THEMA: LICHAAMSDELEN
    // ==========================================
    { kana: 'かお', romaji: 'kao', betekenis: 'Gezicht', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },
    { kana: 'あたま', romaji: 'atama', betekenis: 'Hoofd', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },
    { kana: 'みみ', romaji: 'mimi', betekenis: 'Oor', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },
    { kana: 'め', romaji: 'me', betekenis: 'Oog', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },
    { kana: '鼻', romaji: 'hana', betekenis: 'Neus', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },
    { kana: 'くち', romaji: 'kuchi', betekenis: 'Mond', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },
    { kana: 'て', romaji: 'te', betekenis: 'Hand', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },
    { kana: 'あし', romaji: 'ashi', betekenis: 'Voet / Been', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },
    { kana: 'ゆび', romaji: 'yubi', betekenis: 'Vinger', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' }, 
    { kana: 'うで', romaji: 'ude', betekenis: 'Arm', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' }, 
    { kana: 'ひざ', romaji: 'hiza', betekenis: 'Knie', type: 'Woord', thema: 'Lichaamsdelen', niveau: 'N5' },

    // ==========================================
    // THEMA: FAMILIE (NIEUW)
    // ==========================================
    { kana: 'かぞく', romaji: 'kazoku', betekenis: 'Familie', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'おとうさん', romaji: 'otousan', betekenis: 'Vader', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'おかあさん', romaji: 'okaasan', betekenis: 'Moeder', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'あに', romaji: 'ani', betekenis: 'Oudere broer', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'あね', romaji: 'ane', betekenis: 'Oudere zus', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'おとうと', romaji: 'otouto', betekenis: 'Jongere broer', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'いもうと', romaji: 'imouto', betekenis: 'Jongere zus', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'そふ', romaji: 'sofu', betekenis: 'Opa', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'そぼ', romaji: 'sobo', betekenis: 'Oma', type: 'Woord', thema: 'Familie', niveau: 'N5' },
    { kana: 'こども', romaji: 'kodomo', betekenis: 'Kind', type: 'Woord', thema: 'Familie', niveau: 'N5' },

    // ==========================================
    // THEMA: BEROEPEN (NIEUW)
    // ==========================================
    { kana: 'せんせい', romaji: 'sensei', betekenis: 'Leraar / Meester', type: 'Woord', thema: 'Beroepen', niveau: 'N5' },
    { kana: 'いしゃ', romaji: 'isha', betekenis: 'Dokter', type: 'Woord', thema: 'Beroepen', niveau: 'N5' },
    { kana: 'がくせい', romaji: 'gakusei', betekenis: 'Student', type: 'Woord', thema: 'Beroepen', niveau: 'N5' },
    { kana: 'かいしゃいん', romaji: 'kaishain', betekenis: 'Bedrijfsmedewerker', type: 'Woord', thema: 'Beroepen', niveau: 'N4' },
    { kana: 'けいさつかん', romaji: 'keisatsukan', betekenis: 'Politieagent', type: 'Woord', thema: 'Beroepen', niveau: 'N4' },
    { kana: 'かんごし', romaji: 'kangoshi', betekenis: 'Verpleegkundige', type: 'Woord', thema: 'Beroepen', niveau: 'N4' },
    { kana: 'エンジニア', romaji: 'enjinia', betekenis: 'Ingenieur', type: 'Woord', thema: 'Beroepen', niveau: 'N4' },
    { kana: 'りょうりし', romaji: 'ryourishi', betekenis: 'Chef-kok', type: 'Woord', thema: 'Beroepen', niveau: 'N4' },
    { kana: 'べんごし', romaji: 'bengoshi', betekenis: 'Advocaat', type: 'Woord', thema: 'Beroepen', niveau: 'N4' },

    // ==========================================
    // THEMA: TIJD & DAGEN (NIEUW)
    // ==========================================
    { kana: 'いま', romaji: 'ima', betekenis: 'Nu', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'きょう', romaji: 'kyou', betekenis: 'Vandaag', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'あした', romaji: 'ashita', betekenis: 'Morgen', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'きのう', romaji: 'kinou', betekenis: 'Gisteren', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'げつようび', romaji: 'getsuyoubi', betekenis: 'Maandag', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'かようび', romaji: 'kayoubi', betekenis: 'Dinsdag', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'すいようび', romaji: 'suiyoubi', betekenis: 'Woensdag', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'もくようび', romaji: 'mokuyoubi', betekenis: 'Donderdag', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'きんようび', romaji: 'kinyoubi', betekenis: 'Vrijdag', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'どようび', romaji: 'doyoubi', betekenis: 'Zaterdag', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },
    { kana: 'にちようび', romaji: 'nichiyoubi', betekenis: 'Zondag', type: 'Woord', thema: 'Tijd & Dagen', niveau: 'N5' },

    // ==========================================
    // THEMA: VERVOER (NIEUW)
    // ==========================================
    { kana: 'でんしゃ', romaji: 'densha', betekenis: 'Trein', type: 'Woord', thema: 'Vervoer', niveau: 'N5' },
    { kana: 'くるま', romaji: 'kuruma', betekenis: 'Auto', type: 'Woord', thema: 'Vervoer', niveau: 'N5' },
    { kana: 'じてんしゃ', romaji: 'jitensha', betekenis: 'Fiets', type: 'Woord', thema: 'Vervoer', niveau: 'N5' },
    { kana: 'ひこうき', romaji: 'hikouki', betekenis: 'Vliegtuig', type: 'Woord', thema: 'Vervoer', niveau: 'N5' },
    { kana: 'ふね', romaji: 'fune', betekenis: 'Boot', type: 'Woord', thema: 'Vervoer', niveau: 'N5' },
    { kana: 'えき', romaji: 'eki', betekenis: 'Station', type: 'Woord', thema: 'Vervoer', niveau: 'N5' },
    { kana: 'ちかてつ', romaji: 'chikatetsu', betekenis: 'Metro', type: 'Woord', thema: 'Vervoer', niveau: 'N4' },
    { kana: 'タクシー', romaji: 'takushii', betekenis: 'Taxi', type: 'Woord', thema: 'Vervoer', niveau: 'N5' },

    // ==========================================
    // THEMA: GEVOELENS & EMOTIES (NIEUW)
    // ==========================================
    { kana: 'うれしい', romaji: 'ureshii', betekenis: 'Blij', type: 'Woord', thema: 'Gevoelens & Emoties', niveau: 'N5' },
    { kana: 'かなしい', romaji: 'kanashii', betekenis: 'Verdrietig', type: 'Woord', thema: 'Gevoelens & Emoties', niveau: 'N5' },
    { kana: 'たのしい', romaji: 'tanoshii', betekenis: 'Leuk / Plezierig', type: 'Woord', thema: 'Gevoelens & Emoties', niveau: 'N5' },
    { kana: 'こわい', romaji: 'kowai', betekenis: 'Bang / Eng', type: 'Woord', thema: 'Gevoelens & Emoties', niveau: 'N5' },
    { kana: 'つかれた', romaji: 'tsukareta', betekenis: 'Moe', type: 'Woord', thema: 'Gevoelens & Emoties', niveau: 'N4' },
    { kana: 'さびしい', romaji: 'sabishii', betekenis: 'Eenzaam', type: 'Woord', thema: 'Gevoelens & Emoties', niveau: 'N4' },
    { kana: 'しんぱい', romaji: 'shinpai', betekenis: 'Bezorgd / Zorgen', type: 'Woord', thema: 'Gevoelens & Emoties', niveau: 'N4' },
    { kana: 'びっくり', romaji: 'bikkuri', betekenis: 'Verrast / Geschrokken', type: 'Woord', thema: 'Gevoelens & Emoties', niveau: 'N4' },

    // ==========================================
    // THEMA: WINKELEN & GELD (NIEUW)
    // ==========================================
    { kana: 'おかね', romaji: 'okane', betekenis: 'Geld', type: 'Woord', thema: 'Winkelen & Geld', niveau: 'N5' },
    { kana: 'やすい', romaji: 'yasui', betekenis: 'Goedkoop', type: 'Woord', thema: 'Winkelen & Geld', niveau: 'N5' },
    { kana: 'たかい', romaji: 'takai', betekenis: 'Duur', type: 'Woord', thema: 'Winkelen & Geld', niveau: 'N5' },
    { kana: 'みせ', romaji: 'mise', betekenis: 'Winkel', type: 'Woord', thema: 'Winkelen & Geld', niveau: 'N5' },
    { kana: 'レジ', romaji: 'reji', betekenis: 'Kassa', type: 'Woord', thema: 'Winkelen & Geld', niveau: 'N5' },
    { kana: 'えん', romaji: 'en', betekenis: 'Yen (munteenheid)', type: 'Woord', thema: 'Winkelen & Geld', niveau: 'N5' },
    { kana: 'おつり', romaji: 'otsuri', betekenis: 'Wisselgeld', type: 'Woord', thema: 'Winkelen & Geld', niveau: 'N4' },
    { kana: 'かいもの', romaji: 'kaimono', betekenis: 'Boodschappen doen', type: 'Woord', thema: 'Winkelen & Geld', niveau: 'N5' },

    // ==========================================
    // THEMA: TECHNOLOGIE & MEDIA (NIEUW)
    // ==========================================
    { kana: 'でんわ', romaji: 'denwa', betekenis: 'Telefoon', type: 'Woord', thema: 'Technologie & Media', niveau: 'N5' },
    { kana: 'けいたい', romaji: 'keitai', betekenis: 'Mobiele telefoon', type: 'Woord', thema: 'Technologie & Media', niveau: 'N5' },
    { kana: 'コンピューター', romaji: 'konpyuutaa', betekenis: 'Computer', type: 'Woord', thema: 'Technologie & Media', niveau: 'N5' },
    { kana: 'インターネット', romaji: 'intaanetto', betekenis: 'Internet', type: 'Woord', thema: 'Technologie & Media', niveau: 'N4' },
    { kana: 'メール', romaji: 'meeru', betekenis: 'E-mail', type: 'Woord', thema: 'Technologie & Media', niveau: 'N5' },
    { kana: 'テレビ', romaji: 'terebi', betekenis: 'Televisie', type: 'Woord', thema: 'Technologie & Media', niveau: 'N5' },
    { kana: 'でんち', romaji: 'denchi', betekenis: 'Batterij', type: 'Woord', thema: 'Technologie & Media', niveau: 'N4' },
    { kana: 'じゅうでん', romaji: 'juuden', betekenis: 'Opladen', type: 'Woord', thema: 'Technologie & Media', niveau: 'N4' }
];

const zinnenData = [
    // Gedag zeggen
    { kana: "おはようございます", romaji: "ohayou gozaimasu", betekenis: "Goedemorgen", thema: "Gedag zeggen", niveau: "N5" },
    { kana: "こんにちは", romaji: "konnichiwa", betekenis: "Hallo / Goedemiddag", thema: "Gedag zeggen", niveau: "N5" },
    { kana: "こんばんは", romaji: "konbanwa", betekenis: "Goedenavond", thema: "Gedag zeggen", niveau: "N5" },
    { kana: "ありがとうございます", romaji: "arigatou gozaimasu", betekenis: "Dank u wel", thema: "Gedag zeggen", niveau: "N5" },
    { kana: "さようなら", romaji: "sayounara", betekenis: "Tot ziens", thema: "Gedag zeggen", niveau: "N5" },

    // Eten bestellen
    { kana: "メニューをお願いします", romaji: "menyuu o onegaishimasu", betekenis: "Mag ik het menu, alstublieft?", thema: "Eten bestellen", niveau: "N5" },
    { kana: "これをお願いします", romaji: "kore o onegaishimasu", betekenis: "Ik wil graag dit bestellen", thema: "Eten bestellen", niveau: "N5" },
    { kana: "おいしいです", romaji: "oishii desu", betekenis: "Het is erg lekker!", thema: "Eten bestellen", niveau: "N5" },
    { kana: "お会計をお願いします", romaji: "okaikei o onegaishimasu", betekenis: "Mag ik de rekening, alstublieft?", thema: "Eten bestellen", niveau: "N5" },
    { kana: "水をお願いします", romaji: "mizu o onegaishimasu", betekenis: "Mag ik wat water, alstublieft?", thema: "Eten bestellen", niveau: "N5" },

    // De weg vragen
    { kana: "すみません、駅はどこですか", romaji: "sumimasen, eki wa doko desu ka", betekenis: "Pardon, waar is het station?", thema: "De weg vragen", niveau: "N5" },
    { kana: "トイレはどこですか", romaji: "toire wa doko desu ka", betekenis: "Waar is het toilet?", thema: "De weg vragen", niveau: "N5" },
    { kana: "まっすぐ行ってください", romaji: "massugu itte kudasai", betekenis: "Ga rechtdoor", thema: "De weg vragen", niveau: "N5" },
    { kana: "右に曲がってください", romaji: "migi ni magatte kudasai", betekenis: "Sla rechtsaf", thema: "De weg vragen", niveau: "N5" },
    { kana: "左に曲がってください", romaji: "hidari ni magatte kudasai", betekenis: "Sla linksaf", thema: "De weg vragen", niveau: "N5" },

    // Noodgevallen / Handig
    { kana: "英語を話せますか", romaji: "eigo o hanasemasu ka", betekenis: "Spreekt u Engels?", thema: "Handig op reis", niveau: "N4" },
    { kana: "わかりません", romaji: "wakarimasen", betekenis: "Ik begrijp het niet", thema: "Handig op reis", niveau: "N4" },
    { kana: "助けてください", romaji: "tasukete kudasai", betekenis: "Help mij alstublieft", thema: "Handig op reis", niveau: "N4" },
    { kana: "クレジットカードは使えますか", romaji: "kurejitto kaado wa tsukaemasu ka", betekenis: "Kan ik met creditcard betalen?", thema: "Handig op reis", niveau: "N4" },

    // Jezelf voorstellen
    { kana: "はじめまして", romaji: "hajimemashite", betekenis: "Leuk je te ontmoeten", thema: "Jezelf voorstellen", niveau: "N5" },
    { kana: "おなまえは何ですか", romaji: "onamae wa nan desu ka", betekenis: "Hoe heet u?", thema: "Jezelf voorstellen", niveau: "N5" },
    { kana: "どうぞよろしくおねがいします", romaji: "douzo yoroshiku onegaishimasu", betekenis: "Aangenaam kennis te maken", thema: "Jezelf voorstellen", niveau: "N5" },
    { kana: "オランダから来ました", romaji: "oranda kara kimashita", betekenis: "Ik kom uit Nederland", thema: "Jezelf voorstellen", niveau: "N5" },
    { kana: "にほんごがすこしわかります", romaji: "nihongo ga sukoshi wakarimasu", betekenis: "Ik begrijp een beetje Japans", thema: "Jezelf voorstellen", niveau: "N4" },

    // Winkelen
    { kana: "これはいくらですか", romaji: "kore wa ikura desu ka", betekenis: "Hoeveel kost dit?", thema: "Winkelen", niveau: "N5" },
    { kana: "これをください", romaji: "kore o kudasai", betekenis: "Dit graag / Geef mij dit", thema: "Winkelen", niveau: "N5" },
    { kana: "カードで払えますか", romaji: "kaado de haraemasu ka", betekenis: "Kan ik met kaart betalen?", thema: "Winkelen", niveau: "N5" },
    { kana: "もうすこし安くなりますか", romaji: "mou sukoshi yasuku narimasu ka", betekenis: "Kan het iets goedkoper?", thema: "Winkelen", niveau: "N4" },
    { kana: "試着していいですか", romaji: "shichaku shite ii desu ka", betekenis: "Mag ik het passen?", thema: "Winkelen", niveau: "N4" },

    // Gevoelens uitdrukken
    { kana: "おなかがすきました", romaji: "onaka ga sukimashita", betekenis: "Ik heb honger", thema: "Gevoelens uitdrukken", niveau: "N4" },
    { kana: "のどがかわきました", romaji: "nodo ga kawakimashita", betekenis: "Ik heb dorst", thema: "Gevoelens uitdrukken", niveau: "N4" },
    { kana: "だいじょうぶです", romaji: "daijoubu desu", betekenis: "Het is goed / Geen probleem", thema: "Gevoelens uitdrukken", niveau: "N5" },
    { kana: "とてもうれしいです", romaji: "totemo ureshii desu", betekenis: "Ik ben heel blij", thema: "Gevoelens uitdrukken", niveau: "N5" },
    { kana: "ちょっとつかれました", romaji: "chotto tsukaremashita", betekenis: "Ik ben een beetje moe", thema: "Gevoelens uitdrukken", niveau: "N4" },

    // Tijd & Afspraken
    { kana: "いまなんじですか", romaji: "ima nanji desu ka", betekenis: "Wat is het nu voor tijd?", thema: "Tijd & Afspraken", niveau: "N5" },
    { kana: "なんようびですか", romaji: "nan youbi desu ka", betekenis: "Welke dag is het?", thema: "Tijd & Afspraken", niveau: "N5" },
    { kana: "またあとで", romaji: "mata atode", betekenis: "Tot later", thema: "Tijd & Afspraken", niveau: "N5" },
    { kana: "すこしまってください", romaji: "sukoshi matte kudasai", betekenis: "Wacht u even alstublieft", thema: "Tijd & Afspraken", niveau: "N5" },
    { kana: "あさってあえますか", romaji: "asatte aemasu ka", betekenis: "Kunnen we overmorgen afspreken?", thema: "Tijd & Afspraken", niveau: "N4" },

    // Telefoongesprek
    { kana: "もしもし", romaji: "moshi moshi", betekenis: "Hallo (aan de telefoon)", thema: "Telefoongesprek", niveau: "N4" },
    { kana: "でんわばんごうをおしえてください", romaji: "denwa bangou o oshiete kudasai", betekenis: "Mag ik uw telefoonnummer?", thema: "Telefoongesprek", niveau: "N4" },
    { kana: "あとでかけなおします", romaji: "atode kakenaoshimasu", betekenis: "Ik bel later terug", thema: "Telefoongesprek", niveau: "N4" },
    { kana: "すみません、きこえません", romaji: "sumimasen, kikoemasen", betekenis: "Sorry, ik kan u niet horen", thema: "Telefoongesprek", niveau: "N4" },

    // Excuses & Verontschuldigen
    { kana: "すみません", romaji: "sumimasen", betekenis: "Sorry / Pardon", thema: "Excuses & Verontschuldigen", niveau: "N5" },
    { kana: "ごめんなさい", romaji: "gomennasai", betekenis: "Het spijt me", thema: "Excuses & Verontschuldigen", niveau: "N5" },
    { kana: "もうしわけありません", romaji: "moushiwake arimasen", betekenis: "Mijn excuses (formeel)", thema: "Excuses & Verontschuldigen", niveau: "N4" },
    { kana: "たいへんしつれいしました", romaji: "taihen shitsurei shimashita", betekenis: "Mijn oprechte excuses", thema: "Excuses & Verontschuldigen", niveau: "N4" }
];