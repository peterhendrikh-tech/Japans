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
    { kana: 'いぬ', romaji: 'inu', betekenis: 'Hond', type: 'Woord', thema: 'Dieren' },
    { kana: 'ねこ', romaji: 'neko', betekenis: 'Kat', type: 'Woord', thema: 'Dieren' },
    { kana: 'とり', romaji: 'tori', betekenis: 'Vogel', type: 'Woord', thema: 'Dieren' },
    { kana: 'うし', romaji: 'ushi', betekenis: 'Koe', type: 'Woord', thema: 'Dieren' },
    { kana: 'うま', romaji: 'uma', betekenis: 'Paard', type: 'Woord', thema: 'Dieren' },
    { kana: 'さる', romaji: 'saru', betekenis: 'Aap', type: 'Woord', thema: 'Dieren' },
    { kana: 'くま', romaji: 'kuma', betekenis: 'Beer', type: 'Woord', thema: 'Dieren' },
    { kana: 'かめ', romaji: 'kame', betekenis: 'Schildpad', type: 'Woord', thema: 'Dieren' },
    { kana: 'へび', romaji: 'hebi', betekenis: 'Slang', type: 'Woord', thema: 'Dieren' },
    { kana: 'ぞう', romaji: 'zou', betekenis: 'Olifant', type: 'Woord', thema: 'Dieren' }, 
    { kana: 'とら', romaji: 'tora', betekenis: 'Tijger', type: 'Woord', thema: 'Dieren' },
    { kana: 'しか', romaji: 'shika', betekenis: 'Hert', type: 'Woord', thema: 'Dieren' },
    { kana: 'かに', romaji: 'kani', betekenis: 'Krab', type: 'Woord', thema: 'Dieren' },
    { kana: 'きつね', romaji: 'kitsune', betekenis: 'Vos', type: 'Woord', thema: 'Dieren' },
    { kana: 'ぶた', romaji: 'buta', betekenis: 'Varken', type: 'Woord', thema: 'Dieren' }, 
    { kana: 'かば', romaji: 'kaba', betekenis: 'Nijlpaard', type: 'Woord', thema: 'Dieren' }, 
    { kana: 'パンダ', romaji: 'panda', betekenis: 'Panda', type: 'Woord', thema: 'Dieren' }, 
    { kana: 'ペンギン', romaji: 'pengin', betekenis: 'Pinguïn', type: 'Woord', thema: 'Dieren' }, 

    // ==========================================
    // THEMA: INSECTEN (NIEUW)
    // ==========================================
    { kana: 'あり', romaji: 'ari', betekenis: 'Mier', type: 'Woord', thema: 'Insecten' },
    { kana: 'むし', romaji: 'mushi', betekenis: 'Insect / Kever', type: 'Woord', thema: 'Insecten' },
    { kana: 'す', romaji: 'su', betekenis: 'Nest / Web', type: 'Woord', thema: 'Insecten' },
    { kana: 'くも', romaji: 'kumo', betekenis: 'Spin', type: 'Woord', thema: 'Insecten' },
    { kana: 'はち', romaji: 'hachi', betekenis: 'Bij', type: 'Woord', thema: 'Insecten' },

    // ==========================================
    // THEMA: NATUUR
    // ==========================================
    { kana: 'うみ', romaji: 'umi', betekenis: 'Zee', type: 'Woord', thema: 'Natuur' },
    { kana: 'やま', romaji: 'yama', betekenis: 'Berg', type: 'Woord', thema: 'Natuur' },
    { kana: 'ゆき', romaji: 'yuki', betekenis: 'Sneeuw', type: 'Woord', thema: 'Natuur' },
    { kana: 'あめ', romaji: 'ame', betekenis: 'Regen', type: 'Woord', thema: 'Natuur' },
    { kana: 'はな', romaji: 'hana', betekenis: 'Bloem', type: 'Woord', thema: 'Natuur' },
    { kana: 'はる', romaji: 'haru', betekenis: 'Lente', type: 'Woord', thema: 'Natuur' },
    { kana: 'なつ', romaji: 'natsu', betekenis: 'Zomer', type: 'Woord', thema: 'Natuur' },
    { kana: 'あき', romaji: 'aki', betekenis: 'Herfst', type: 'Woord', thema: 'Natuur' },
    { kana: 'ふゆ', romaji: 'fuyu', betekenis: 'Winter', type: 'Woord', thema: 'Natuur' },
    { kana: 'かわ', romaji: 'kawa', betekenis: 'Rivier', type: 'Woord', thema: 'Natuur' },
    { kana: 'そら', romaji: 'sora', betekenis: 'Lucht / Hemel', type: 'Woord', thema: 'Natuur' },
    { kana: 'つき', romaji: 'tsuki', betekenis: 'Maan', type: 'Woord', thema: 'Natuur' },
    { kana: 'かぜ', romaji: 'kaze', betekenis: 'Wind', type: 'Woord', thema: 'Natuur' }, 
    { kana: 'ほし', romaji: 'hoshi', betekenis: 'Ster', type: 'Woord', thema: 'Natuur' },
    { kana: 'いし', romaji: 'ishi', betekenis: 'Steen', type: 'Woord', thema: 'Natuur' },

    // ==========================================
    // THEMA: GROENTEN & TUIN (NIEUW)
    // ==========================================
    { kana: 'きゅうり', romaji: 'kyuuri', betekenis: 'Komkommer', type: 'Woord', thema: 'Groenten & Tuin' },
    { kana: 'ブロッコリー', romaji: 'burokkorii', betekenis: 'Broccoli', type: 'Woord', thema: 'Groenten & Tuin' },
    { kana: 'ズッキーニ', romaji: 'zukkiini', betekenis: 'Courgette / Zucchini', type: 'Woord', thema: 'Groenten & Tuin' },
    { kana: 'トマト', romaji: 'tomato', betekenis: 'Tomaat', type: 'Woord', thema: 'Groenten & Tuin' },
    { kana: 'にんじん', romaji: 'ninjin', betekenis: 'Wortel', type: 'Woord', thema: 'Groenten & Tuin' },
    { kana: 'はっぱ', romaji: 'happa', betekenis: 'Blad', type: 'Woord', thema: 'Groenten & Tuin' },
    { kana: 'き', romaji: 'ki', betekenis: 'Boom / Hout', type: 'Woord', thema: 'Groenten & Tuin' },

    // ==========================================
    // THEMA: ETEN & DRINKEN
    // ==========================================
    { kana: 'すし', romaji: 'sushi', betekenis: 'Sushi', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'にく', romaji: 'niku', betekenis: 'Vlees', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'さけ', romaji: 'sake', betekenis: 'Rijstwijn / Zalm', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'パン', romaji: 'pan', betekenis: 'Brood', type: 'Woord', thema: 'Eten & Drinken' }, 
    { kana: 'ツナ', romaji: 'tsuna', betekenis: 'Tonijn', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'みず', romaji: 'mizu', betekenis: 'Water', type: 'Woord', thema: 'Eten & Drinken' }, 
    { kana: 'お茶', romaji: 'ocha', betekenis: 'Groene Thee', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'ピザ', romaji: 'piza', betekenis: 'Pizza', type: 'Woord', thema: 'Eten & Drinken' }, 
    { kana: 'みかん', romaji: 'mikan', betekenis: 'Mandarijn', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'りんご', romaji: 'ringo', betekenis: 'Appel', type: 'Woord', thema: 'Eten & Drinken' }, 
    { kana: 'ごはん', romaji: 'gohan', betekenis: 'Rijst / Maaltijd', type: 'Woord', thema: 'Eten & Drinken' }, 

    // ==========================================
    // THEMA: KLEUREN (NIEUW)
    // ==========================================
    { kana: 'あか', romaji: 'aka', betekenis: 'Rood', type: 'Woord', thema: 'Kleuren' },
    { kana: 'あお', romaji: 'ao', betekenis: 'Blauw', type: 'Woord', thema: 'Kleuren' },
    { kana: 'みどり', romaji: 'midori', betekenis: 'Groen', type: 'Woord', thema: 'Kleuren' },
    { kana: 'くろ', romaji: 'kuro', betekenis: 'Zwart', type: 'Woord', thema: 'Kleuren' },
    { kana: 'しろ', romaji: 'shiro', betekenis: 'Wit', type: 'Woord', thema: 'Kleuren' },
    { kana: 'きいろ', romaji: 'kiiro', betekenis: 'Geel', type: 'Woord', thema: 'Kleuren' },

    // ==========================================
    // THEMA: BOUW & CONSTRUCTIE (NIEUW)
    // ==========================================
    { kana: 'たてもの', romaji: 'tatemono', betekenis: 'Gebouw', type: 'Woord', thema: 'Bouw & Constructie' },
    { kana: 'いえ', romaji: 'ie', betekenis: 'Huis', type: 'Woord', thema: 'Bouw & Constructie' },
    { kana: 'はし', romaji: 'hashi', betekenis: 'Brug', type: 'Woord', thema: 'Bouw & Constructie' },
    { kana: 'てつ', romaji: 'tetsu', betekenis: 'IJzer / Staal', type: 'Woord', thema: 'Bouw & Constructie' },
    { kana: 'かべ', romaji: 'kabe', betekenis: 'Muur', type: 'Woord', thema: 'Bouw & Constructie' },
    { kana: 'やね', romaji: 'yane', betekenis: 'Dak', type: 'Woord', thema: 'Bouw & Constructie' },

    // ==========================================
    // THEMA: OBJECTEN & DIVERSEN
    // ==========================================
    { kana: 'ほん', romaji: 'hon', betekenis: 'Boek', type: 'Woord', thema: 'Objecten' },
    { kana: 'バス', romaji: 'basu', betekenis: 'Bus', type: 'Woord', thema: 'Objecten' }, 
    { kana: 'ドア', romaji: 'doa', betekenis: 'Deur', type: 'Woord', thema: 'Objecten' }, 
    { kana: 'ペン', romaji: 'pen', betekenis: 'Pen', type: 'Woord', thema: 'Objecten' }, 
    { kana: 'メモ', romaji: 'memo', betekenis: 'Notitie', type: 'Woord', thema: 'Objecten' },
    { kana: 'かさ', romaji: 'kasa', betekenis: 'Paraplu', type: 'Woord', thema: 'Objecten' },
    { kana: 'くつ', romaji: 'kutsu', betekenis: 'Schoenen', type: 'Woord', thema: 'Objecten' },
    { kana: 'かぎ', romaji: 'kagi', betekenis: 'Sleutel', type: 'Woord', thema: 'Objecten' }, 
    { kana: 'まど', romaji: 'mado', betekenis: 'Raam', type: 'Woord', thema: 'Objecten' }, 
    { kana: 'かばん', romaji: 'kaban', betekenis: 'Tas', type: 'Woord', thema: 'Objecten' }, 
    { kana: 'つくえ', romaji: 'tsukue', betekenis: 'Bureau', type: 'Woord', thema: 'Objecten' },
    { kana: 'いす', romaji: 'isu', betekenis: 'Stoel', type: 'Woord', thema: 'Objecten' },
    { kana: 'てがみ', romaji: 'tegami', betekenis: 'Brief', type: 'Woord', thema: 'Objecten' }, 

    // ==========================================
    // THEMA: LICHAAMSDELEN
    // ==========================================
    { kana: 'かお', romaji: 'kao', betekenis: 'Gezicht', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'あたま', romaji: 'atama', betekenis: 'Hoofd', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'みみ', romaji: 'mimi', betekenis: 'Oor', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'め', romaji: 'me', betekenis: 'Oog', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'はな', romaji: 'hana', betekenis: 'Neus', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'くち', romaji: 'kuchi', betekenis: 'Mond', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'て', romaji: 'te', betekenis: 'Hand', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'あし', romaji: 'ashi', betekenis: 'Voet / Been', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'ゆび', romaji: 'yubi', betekenis: 'Vinger', type: 'Woord', thema: 'Lichaamsdelen' }, 
    { kana: 'うで', romaji: 'ude', betekenis: 'Arm', type: 'Woord', thema: 'Lichaamsdelen' }, 
    { kana: 'ひざ', romaji: 'hiza', betekenis: 'Knie', type: 'Woord', thema: 'Lichaamsdelen' } 
];
