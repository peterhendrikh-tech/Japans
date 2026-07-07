// data.js
const DATA_VERSION = '2026-07-07a'; // Bump dit bij elke wijziging: zo zie je meteen of je de nieuwste data draait

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
    { kana: 'ひざ', romaji: 'hiza', betekenis: 'Knie', type: 'Woord', thema: 'Lichaamsdelen' },

    // ==========================================
    // UITBREIDING: BESTAANDE THEMA'S AANGEVULD
    // ==========================================

    // --- Kleuren (uitgebreid) ---
    { kana: 'ちゃいろ', romaji: 'chairo', betekenis: 'Bruin', type: 'Woord', thema: 'Kleuren' },
    { kana: 'オレンジ', romaji: 'orenji', betekenis: 'Oranje', type: 'Woord', thema: 'Kleuren' },
    { kana: 'ピンク', romaji: 'pinku', betekenis: 'Roze', type: 'Woord', thema: 'Kleuren' },
    { kana: 'むらさき', romaji: 'murasaki', betekenis: 'Paars', type: 'Woord', thema: 'Kleuren' },
    { kana: 'はいいろ', romaji: 'haiiro', betekenis: 'Grijs', type: 'Woord', thema: 'Kleuren' },
    { kana: 'きんいろ', romaji: 'kiniro', betekenis: 'Goud', type: 'Woord', thema: 'Kleuren' },
    { kana: 'ぎんいろ', romaji: 'giniro', betekenis: 'Zilver', type: 'Woord', thema: 'Kleuren' },
    { kana: 'みずいろ', romaji: 'mizuiro', betekenis: 'Lichtblauw', type: 'Woord', thema: 'Kleuren' },

    // --- Dieren (uitgebreid) ---
    { kana: 'かえる', romaji: 'kaeru', betekenis: 'Kikker', type: 'Woord', thema: 'Dieren' },
    { kana: 'さかな', romaji: 'sakana', betekenis: 'Vis', type: 'Woord', thema: 'Dieren' },
    { kana: 'たこ', romaji: 'tako', betekenis: 'Octopus', type: 'Woord', thema: 'Dieren' },
    { kana: 'くじら', romaji: 'kujira', betekenis: 'Walvis', type: 'Woord', thema: 'Dieren' },
    { kana: 'いか', romaji: 'ika', betekenis: 'Inktvis', type: 'Woord', thema: 'Dieren' },
    { kana: 'たぬき', romaji: 'tanuki', betekenis: 'Wasbeer / Tanuki', type: 'Woord', thema: 'Dieren' },
    { kana: 'うさぎ', romaji: 'usagi', betekenis: 'Konijn', type: 'Woord', thema: 'Dieren' },
    { kana: 'ねずみ', romaji: 'nezumi', betekenis: 'Muis / Rat', type: 'Woord', thema: 'Dieren' },
    { kana: 'きりん', romaji: 'kirin', betekenis: 'Giraf', type: 'Woord', thema: 'Dieren' },
    { kana: 'ライオン', romaji: 'raion', betekenis: 'Leeuw', type: 'Woord', thema: 'Dieren' },
    { kana: 'サメ', romaji: 'same', betekenis: 'Haai', type: 'Woord', thema: 'Dieren' },

    // --- Eten & Drinken (uitgebreid) ---
    { kana: 'ラーメン', romaji: 'raamen', betekenis: 'Ramen', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'てんぷら', romaji: 'tenpura', betekenis: 'Tempura', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'おにぎり', romaji: 'onigiri', betekenis: 'Rijstbal', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'たまご', romaji: 'tamago', betekenis: 'Ei', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'とうふ', romaji: 'toufu', betekenis: 'Tofu', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'バナナ', romaji: 'banana', betekenis: 'Banaan', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'いちご', romaji: 'ichigo', betekenis: 'Aardbei', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'ぶどう', romaji: 'budou', betekenis: 'Druif', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'コーヒー', romaji: 'koohii', betekenis: 'Koffie', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'ビール', romaji: 'biiru', betekenis: 'Bier', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'みそ', romaji: 'miso', betekenis: 'Miso', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'しお', romaji: 'shio', betekenis: 'Zout', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'さとう', romaji: 'satou', betekenis: 'Suiker', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'やきとり', romaji: 'yakitori', betekenis: 'Gegrilde kip aan spies', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'うどん', romaji: 'udon', betekenis: 'Udon (dikke noedels)', type: 'Woord', thema: 'Eten & Drinken' },
    { kana: 'そば', romaji: 'soba', betekenis: 'Soba (boekweit noedels)', type: 'Woord', thema: 'Eten & Drinken' },

    // --- Natuur (uitgebreid) ---
    { kana: 'くも', romaji: 'kumo', betekenis: 'Wolk', type: 'Woord', thema: 'Natuur' },
    { kana: 'かみなり', romaji: 'kaminari', betekenis: 'Donder / Bliksem', type: 'Woord', thema: 'Natuur' },
    { kana: 'にじ', romaji: 'niji', betekenis: 'Regenboog', type: 'Woord', thema: 'Natuur' },
    { kana: 'しぜん', romaji: 'shizen', betekenis: 'Natuur', type: 'Woord', thema: 'Natuur' },
    { kana: 'もり', romaji: 'mori', betekenis: 'Bos', type: 'Woord', thema: 'Natuur' },
    { kana: 'いけ', romaji: 'ike', betekenis: 'Vijver', type: 'Woord', thema: 'Natuur' },
    { kana: 'たいよう', romaji: 'taiyou', betekenis: 'Zon', type: 'Woord', thema: 'Natuur' },
    { kana: 'しま', romaji: 'shima', betekenis: 'Eiland', type: 'Woord', thema: 'Natuur' },

    // --- Objecten (uitgebreid) ---
    { kana: 'でんわ', romaji: 'denwa', betekenis: 'Telefoon', type: 'Woord', thema: 'Objecten' },
    { kana: 'テレビ', romaji: 'terebi', betekenis: 'Televisie', type: 'Woord', thema: 'Objecten' },
    { kana: 'カメラ', romaji: 'kamera', betekenis: 'Camera', type: 'Woord', thema: 'Objecten' },
    { kana: 'じてんしゃ', romaji: 'jitensha', betekenis: 'Fiets', type: 'Woord', thema: 'Objecten' },
    { kana: 'くるま', romaji: 'kuruma', betekenis: 'Auto', type: 'Woord', thema: 'Objecten' },
    { kana: 'でんしゃ', romaji: 'densha', betekenis: 'Trein', type: 'Woord', thema: 'Objecten' },
    { kana: 'とけい', romaji: 'tokei', betekenis: 'Klok / Horloge', type: 'Woord', thema: 'Objecten' },
    { kana: 'めがね', romaji: 'megane', betekenis: 'Bril', type: 'Woord', thema: 'Objecten' },
    { kana: 'ふとん', romaji: 'futon', betekenis: 'Futon / Slaapmat', type: 'Woord', thema: 'Objecten' },
    { kana: 'はさみ', romaji: 'hasami', betekenis: 'Schaar', type: 'Woord', thema: 'Objecten' },
    { kana: 'ごみ', romaji: 'gomi', betekenis: 'Afval', type: 'Woord', thema: 'Objecten' },

    // --- Lichaamsdelen (uitgebreid) ---
    { kana: 'せなか', romaji: 'senaka', betekenis: 'Rug', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'おなか', romaji: 'onaka', betekenis: 'Buik', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'くび', romaji: 'kubi', betekenis: 'Nek / Hals', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'かた', romaji: 'kata', betekenis: 'Schouder', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'むね', romaji: 'mune', betekenis: 'Borst', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'まゆ', romaji: 'mayu', betekenis: 'Wenkbrauw', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'くちびる', romaji: 'kuchibiru', betekenis: 'Lip', type: 'Woord', thema: 'Lichaamsdelen' },
    { kana: 'は', romaji: 'ha', betekenis: 'Tand', type: 'Woord', thema: 'Lichaamsdelen' },

    // --- Bouw & Constructie (uitgebreid) ---
    { kana: 'ゆか', romaji: 'yuka', betekenis: 'Vloer', type: 'Woord', thema: 'Bouw & Constructie' },
    { kana: 'かいだん', romaji: 'kaidan', betekenis: 'Trap', type: 'Woord', thema: 'Bouw & Constructie' },
    { kana: 'へや', romaji: 'heya', betekenis: 'Kamer', type: 'Woord', thema: 'Bouw & Constructie' },
    { kana: 'にわ', romaji: 'niwa', betekenis: 'Tuin', type: 'Woord', thema: 'Bouw & Constructie' },

    // ==========================================
    // NIEUWE THEMA'S
    // ==========================================

    // --- Getallen & Tijd ---
    { kana: 'いち', romaji: 'ichi', betekenis: 'Één', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'に', romaji: 'ni', betekenis: 'Twee', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'さん', romaji: 'san', betekenis: 'Drie', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'よん', romaji: 'yon', betekenis: 'Vier', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'ご', romaji: 'go', betekenis: 'Vijf', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'ろく', romaji: 'roku', betekenis: 'Zes', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'なな', romaji: 'nana', betekenis: 'Zeven', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'はち', romaji: 'hachi', betekenis: 'Acht', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'きゅう', romaji: 'kyuu', betekenis: 'Negen', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'じゅう', romaji: 'juu', betekenis: 'Tien', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'ひゃく', romaji: 'hyaku', betekenis: 'Honderd', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'せん', romaji: 'sen', betekenis: 'Duizend', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'いま', romaji: 'ima', betekenis: 'Nu', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'きょう', romaji: 'kyou', betekenis: 'Vandaag', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'あした', romaji: 'ashita', betekenis: 'Morgen', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'きのう', romaji: 'kinou', betekenis: 'Gisteren', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'あさ', romaji: 'asa', betekenis: 'Ochtend', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'ひる', romaji: 'hiru', betekenis: 'Middag', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'よる', romaji: 'yoru', betekenis: 'Avond / Nacht', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'まいにち', romaji: 'mainichi', betekenis: 'Elke dag', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'らいしゅう', romaji: 'raishuu', betekenis: 'Volgende week', type: 'Woord', thema: 'Getallen & Tijd' },
    { kana: 'せんしゅう', romaji: 'senshuu', betekenis: 'Vorige week', type: 'Woord', thema: 'Getallen & Tijd' },

    // --- Familie & Mensen ---
    { kana: 'おとうさん', romaji: 'otousan', betekenis: 'Vader', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'おかあさん', romaji: 'okaasan', betekenis: 'Moeder', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'おにいさん', romaji: 'oniisan', betekenis: 'Oudere broer', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'おねえさん', romaji: 'oneesan', betekenis: 'Oudere zus', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'おとうと', romaji: 'otouto', betekenis: 'Jongere broer', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'いもうと', romaji: 'imouto', betekenis: 'Jongere zus', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'おじいさん', romaji: 'ojiisan', betekenis: 'Grootvader', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'おばあさん', romaji: 'obaasan', betekenis: 'Grootmoeder', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'ともだち', romaji: 'tomodachi', betekenis: 'Vriend', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'せんせい', romaji: 'sensei', betekenis: 'Leraar', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'がくせい', romaji: 'gakusei', betekenis: 'Student', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'こども', romaji: 'kodomo', betekenis: 'Kind', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'おとこ', romaji: 'otoko', betekenis: 'Man', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'おんな', romaji: 'onna', betekenis: 'Vrouw', type: 'Woord', thema: 'Familie & Mensen' },
    { kana: 'ひと', romaji: 'hito', betekenis: 'Persoon', type: 'Woord', thema: 'Familie & Mensen' },

    // --- Werkwoorden (basis) ---
    { kana: 'たべる', romaji: 'taberu', betekenis: 'Eten', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'のむ', romaji: 'nomu', betekenis: 'Drinken', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'みる', romaji: 'miru', betekenis: 'Kijken / Zien', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'きく', romaji: 'kiku', betekenis: 'Luisteren / Horen', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'はなす', romaji: 'hanasu', betekenis: 'Spreken', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'かく', romaji: 'kaku', betekenis: 'Schrijven', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'よむ', romaji: 'yomu', betekenis: 'Lezen', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'いく', romaji: 'iku', betekenis: 'Gaan', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'くる', romaji: 'kuru', betekenis: 'Komen', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'ねる', romaji: 'neru', betekenis: 'Slapen', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'おきる', romaji: 'okiru', betekenis: 'Opstaan', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'かう', romaji: 'kau', betekenis: 'Kopen', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'あそぶ', romaji: 'asobu', betekenis: 'Spelen', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'はたらく', romaji: 'hataraku', betekenis: 'Werken', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'まつ', romaji: 'matsu', betekenis: 'Wachten', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'わかる', romaji: 'wakaru', betekenis: 'Begrijpen', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'しる', romaji: 'shiru', betekenis: 'Weten', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'おもう', romaji: 'omou', betekenis: 'Denken / Vinden', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'つかう', romaji: 'tsukau', betekenis: 'Gebruiken', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'かえる', romaji: 'kaeru', betekenis: 'Teruggaan', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'あう', romaji: 'au', betekenis: 'Ontmoeten', type: 'Woord', thema: 'Werkwoorden' },
    { kana: 'うる', romaji: 'uru', betekenis: 'Verkopen', type: 'Woord', thema: 'Werkwoorden' },

    // --- Bijvoeglijke naamwoorden ---
    { kana: 'おおきい', romaji: 'ookii', betekenis: 'Groot', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'ちいさい', romaji: 'chiisai', betekenis: 'Klein', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'たかい', romaji: 'takai', betekenis: 'Hoog / Duur', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'やすい', romaji: 'yasui', betekenis: 'Goedkoop', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'あたらしい', romaji: 'atarashii', betekenis: 'Nieuw', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'ふるい', romaji: 'furui', betekenis: 'Oud', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'はやい', romaji: 'hayai', betekenis: 'Snel / Vroeg', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'おそい', romaji: 'osoi', betekenis: 'Langzaam / Laat', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'あつい', romaji: 'atsui', betekenis: 'Heet / Warm', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'さむい', romaji: 'samui', betekenis: 'Koud', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'つめたい', romaji: 'tsumetai', betekenis: 'Koel (aanraking)', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'おいしい', romaji: 'oishii', betekenis: 'Lekker', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'まずい', romaji: 'mazui', betekenis: 'Niet lekker', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'かわいい', romaji: 'kawaii', betekenis: 'Schattig', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'かっこいい', romaji: 'kakkoii', betekenis: 'Cool / Stoer', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'むずかしい', romaji: 'muzukashii', betekenis: 'Moeilijk', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'やさしい', romaji: 'yasashii', betekenis: 'Makkelijk / Vriendelijk', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'たのしい', romaji: 'tanoshii', betekenis: 'Leuk / Plezierig', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'かなしい', romaji: 'kanashii', betekenis: 'Verdrietig', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },
    { kana: 'こわい', romaji: 'kowai', betekenis: 'Eng / Beangstigend', type: 'Woord', thema: 'Bijvoeglijke naamwoorden' },

    // --- Plaatsen ---
    { kana: 'えき', romaji: 'eki', betekenis: 'Station', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'びょういん', romaji: 'byouin', betekenis: 'Ziekenhuis', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'がっこう', romaji: 'gakkou', betekenis: 'School', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'としょかん', romaji: 'toshokan', betekenis: 'Bibliotheek', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'スーパー', romaji: 'suupaa', betekenis: 'Supermarkt', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'レストラン', romaji: 'resutoran', betekenis: 'Restaurant', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'ホテル', romaji: 'hoteru', betekenis: 'Hotel', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'くうこう', romaji: 'kuukou', betekenis: 'Luchthaven', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'こうえん', romaji: 'kouen', betekenis: 'Park', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'ゆうびんきょく', romaji: 'yuubinkyoku', betekenis: 'Postkantoor', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'ぎんこう', romaji: 'ginkou', betekenis: 'Bank', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'おてら', romaji: 'otera', betekenis: 'Tempel', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'じんじゃ', romaji: 'jinja', betekenis: 'Schrijn', type: 'Woord', thema: 'Plaatsen' },
    { kana: 'うみべ', romaji: 'umibe', betekenis: 'Strand', type: 'Woord', thema: 'Plaatsen' },

    // --- Kleding ---
    { kana: 'シャツ', romaji: 'shatsu', betekenis: 'Shirt', type: 'Woord', thema: 'Kleding' },
    { kana: 'ズボン', romaji: 'zubon', betekenis: 'Broek', type: 'Woord', thema: 'Kleding' },
    { kana: 'スカート', romaji: 'sukaato', betekenis: 'Rok', type: 'Woord', thema: 'Kleding' },
    { kana: 'コート', romaji: 'kooto', betekenis: 'Jas', type: 'Woord', thema: 'Kleding' },
    { kana: 'ぼうし', romaji: 'boushi', betekenis: 'Hoed / Pet', type: 'Woord', thema: 'Kleding' },
    { kana: 'マフラー', romaji: 'mafuraa', betekenis: 'Sjaal', type: 'Woord', thema: 'Kleding' },
    { kana: 'てぶくろ', romaji: 'tebukuro', betekenis: 'Handschoenen', type: 'Woord', thema: 'Kleding' },
    { kana: 'くつした', romaji: 'kutsushita', betekenis: 'Sokken', type: 'Woord', thema: 'Kleding' },
    { kana: 'ふく', romaji: 'fuku', betekenis: 'Kleding', type: 'Woord', thema: 'Kleding' },
    { kana: 'きもの', romaji: 'kimono', betekenis: 'Kimono', type: 'Woord', thema: 'Kleding' },

    // --- Weer ---
    { kana: 'はれ', romaji: 'hare', betekenis: 'Zonnig', type: 'Woord', thema: 'Weer' },
    { kana: 'くもり', romaji: 'kumori', betekenis: 'Bewolkt', type: 'Woord', thema: 'Weer' },
    { kana: 'たいふう', romaji: 'taifuu', betekenis: 'Tyfoon', type: 'Woord', thema: 'Weer' },
    { kana: 'きり', romaji: 'kiri', betekenis: 'Mist', type: 'Woord', thema: 'Weer' },
    { kana: 'あつさ', romaji: 'atsusa', betekenis: 'Hitte', type: 'Woord', thema: 'Weer' },
    { kana: 'さむさ', romaji: 'samusa', betekenis: 'Kou', type: 'Woord', thema: 'Weer' },
    { kana: 'てんき', romaji: 'tenki', betekenis: 'Weer', type: 'Woord', thema: 'Weer' },

    // --- Richting & Positie ---
    { kana: 'うえ', romaji: 'ue', betekenis: 'Boven', type: 'Woord', thema: 'Richting' },
    { kana: 'した', romaji: 'shita', betekenis: 'Onder', type: 'Woord', thema: 'Richting' },
    { kana: 'みぎ', romaji: 'migi', betekenis: 'Rechts', type: 'Woord', thema: 'Richting' },
    { kana: 'ひだり', romaji: 'hidari', betekenis: 'Links', type: 'Woord', thema: 'Richting' },
    { kana: 'まえ', romaji: 'mae', betekenis: 'Voor', type: 'Woord', thema: 'Richting' },
    { kana: 'うしろ', romaji: 'ushiro', betekenis: 'Achter', type: 'Woord', thema: 'Richting' },
    { kana: 'なか', romaji: 'naka', betekenis: 'Binnen / Midden', type: 'Woord', thema: 'Richting' },
    { kana: 'そと', romaji: 'soto', betekenis: 'Buiten', type: 'Woord', thema: 'Richting' },
    { kana: 'となり', romaji: 'tonari', betekenis: 'Naast', type: 'Woord', thema: 'Richting' },
    { kana: 'ちかく', romaji: 'chikaku', betekenis: 'Dichtbij', type: 'Woord', thema: 'Richting' },
    { kana: 'とおく', romaji: 'tooku', betekenis: 'Ver weg', type: 'Woord', thema: 'Richting' },
    { kana: 'まっすぐ', romaji: 'massugu', betekenis: 'Rechtdoor', type: 'Woord', thema: 'Richting' },

    // --- School ---
    { kana: 'えんぴつ', romaji: 'enpitsu', betekenis: 'Potlood', type: 'Woord', thema: 'School' },
    { kana: 'けしごむ', romaji: 'keshigomu', betekenis: 'Gum', type: 'Woord', thema: 'School' },
    { kana: 'ノート', romaji: 'nooto', betekenis: 'Schrift', type: 'Woord', thema: 'School' },
    { kana: 'きょうかしょ', romaji: 'kyoukasho', betekenis: 'Leerboek', type: 'Woord', thema: 'School' },
    { kana: 'じしょ', romaji: 'jisho', betekenis: 'Woordenboek', type: 'Woord', thema: 'School' },
    { kana: 'しゅくだい', romaji: 'shukudai', betekenis: 'Huiswerk', type: 'Woord', thema: 'School' },
    { kana: 'テスト', romaji: 'tesuto', betekenis: 'Toets / Test', type: 'Woord', thema: 'School' },
    { kana: 'べんきょう', romaji: 'benkyou', betekenis: 'Studeren', type: 'Woord', thema: 'School' },
    { kana: 'にほんご', romaji: 'nihongo', betekenis: 'Japans (taal)', type: 'Woord', thema: 'School' },
    { kana: 'クラス', romaji: 'kurasu', betekenis: 'Klas', type: 'Woord', thema: 'School' },

];

const zinnenData = [
    // Gedag zeggen
    { kana: "おはようございます", romaji: "ohayou gozaimasu", betekenis: "Goedemorgen", thema: "Gedag zeggen" },
    { kana: "こんにちは", romaji: "konnichiwa", betekenis: "Hallo / Goedemiddag", thema: "Gedag zeggen" },
    { kana: "こんばんは", romaji: "konbanwa", betekenis: "Goedenavond", thema: "Gedag zeggen" },
    { kana: "ありがとうございます", romaji: "arigatou gozaimasu", betekenis: "Dank u wel", thema: "Gedag zeggen" },
    { kana: "さようなら", romaji: "sayounara", betekenis: "Tot ziens", thema: "Gedag zeggen" },

    // Eten bestellen
    { kana: "メニューをお願いします", romaji: "menyuu o onegaishimasu", betekenis: "Mag ik het menu, alstublieft?", thema: "Eten bestellen" },
    { kana: "これをお願いします", romaji: "kore o onegaishimasu", betekenis: "Ik wil graag dit bestellen", thema: "Eten bestellen" },
    { kana: "おいしいです", romaji: "oishii desu", betekenis: "Het is erg lekker!", thema: "Eten bestellen" },
    { kana: "お会計をお願いします", romaji: "okaikei o onegaishimasu", betekenis: "Mag ik de rekening, alstublieft?", thema: "Eten bestellen" },
    { kana: "水をお願いします", romaji: "mizu o onegaishimasu", betekenis: "Mag ik wat water, alstublieft?", thema: "Eten bestellen" },

    // De weg vragen
    { kana: "すみません、駅はどこですか", romaji: "sumimasen, eki wa doko desu ka", betekenis: "Pardon, waar is het station?", thema: "De weg vragen" },
    { kana: "トイレはどこですか", romaji: "toire wa doko desu ka", betekenis: "Waar is het toilet?", thema: "De weg vragen" },
    { kana: "まっすぐ行ってください", romaji: "massugu itte kudasai", betekenis: "Ga rechtdoor", thema: "De weg vragen" },
    { kana: "右に曲がってください", romaji: "migi ni magatte kudasai", betekenis: "Sla rechtsaf", thema: "De weg vragen" },
    { kana: "左に曲がってください", romaji: "hidari ni magatte kudasai", betekenis: "Sla linksaf", thema: "De weg vragen" },

    // Noodgevallen / Handig
    { kana: "英語を話せますか", romaji: "eigo o hanasemasu ka", betekenis: "Spreekt u Engels?", thema: "Handig op reis" },
    { kana: "わかりません", romaji: "wakarimasen", betekenis: "Ik begrijp het niet", thema: "Handig op reis" },
    { kana: "助けてください", romaji: "tasukete kudasai", betekenis: "Help mij alstublieft", thema: "Handig op reis" },
    { kana: "クレジットカードは使えますか", romaji: "kurejitto kaado wa tsukaemasu ka", betekenis: "Kan ik met creditcard betalen?", thema: "Handig op reis" }
];

// ==========================================
// EZELSBRUGGETJES (mnemonics) voor tekens die vaak
// met elkaar verward worden. Sleutel = het kana-teken.
// Wordt opgezocht via de hint-knop in de quiz.
// ==========================================
const kanaMnemonics = {
    // --- Hiragana: klassieke verwarrende paren ---
    'あ': 'Lijkt op お, maar あ heeft een lus rechtsonder als een "a"-aap die aan een tak slingert.',
    'お': 'Lijkt op あ, maar お heeft een los streepje rechtsboven, als een vlaggetje op een "o"-orgel.',
    'さ': 'Lijkt op き, maar さ heeft maar twee kruisende lijnen — "sa" is simpeler, minder strepen dan き.',
    'き': 'Lijkt op さ, maar き heeft een extra lusje onderaan, als een sleuteltje ("ki" = key in het Engels).',
    'ぬ': 'Lijkt sterk op め, maar ぬ heeft een extra lusje rechtsonder — een "noedel" (nu) die om zichzelf kringelt.',
    'め': 'Lijkt sterk op ぬ, maar め is rustiger: één vloeiende lijn, net als een half geloken "me" = oog.',
    'る': 'Lijkt op ろ, maar る heeft een duidelijke lus onderaan, als een rollende "ru"-bal.',
    'ろ': 'Lijkt op る, maar ろ sluit niet af in een lus — het blijft open, als een "ro"-weg die doorloopt.',
    'わ': 'Lijkt op れ, maar わ heeft een lus rechtsonder, als een ring ("wa" = ring/cirkel-klank).',
    'れ': 'Lijkt op わ, maar れ heeft geen lus, alleen een sierlijke krul naar boven.',
    'ね': 'Familie van れ/わ/る, maar ね heeft een extra lusje linksonder — een kat ("neko") met een kringelende staart.',
    'は': 'Lijkt op ほ, maar は heeft maar één verticaal streepje rechts — "ha", net een lachende mond met 1 tand.',
    'ほ': 'Lijkt op は, maar ほ heeft twee streepjes rechts — net een ladder, "ho ho ho" met twee stappen.',
    'く': 'Eenvoudige hoek, net een opengeklapte "<"; denk aan ku = hoek van een vouw.',
    'へ': 'Eén vloeiende boog, een dak of berg — "he" als een huisje met puntdak.',

    // --- Hiragana dakuten verwarring ---
    'じ': 'じ = し (shi) met dakuten → wordt "ji". Twee stipjes = stemhebbend, dus van "sh" naar "j".',
    'ぢ': 'ぢ = ち (chi) met dakuten → klinkt ook als "ji", maar wordt alleen in specifieke woorden gebruikt.',
    'づ': 'づ = つ (tsu) met dakuten → klinkt als "zu", net als ず, maar dan vanuit つ.',

    // --- Katakana: klassieke verwarrende paren ---
    'シ': 'Lijkt op ツ, maar シ heeft strepen die meer verticaal/naar binnen buigen, als regendruppels die naar één punt vallen.',
    'ツ': 'Lijkt op シ, maar de strepen van ツ wijzen meer naar boven/buiten, als vlammetjes ("tsu" = punt van een vlam).',
    'ソ': 'Lijkt op ン, maar ソ heeft de streep linksboven beginnend en naar rechtsonder lopend.',
    'ン': 'Lijkt op ソ, maar ン begint rechtsboven en loopt naar linksonder — spiegelbeeld van ソ.',
    'ウ': 'Lijkt op ワ, maar ウ heeft een puntje (dakje) boven de boog, als een vogeltje (u = "uguisu").',
    'ワ': 'Lijkt op ウ, maar ワ mist het puntje boven — net een simpele kom of rondje.',
    'マ': 'Lijkt op ム, maar マ heeft een rechte lijn die niet terugkrult — "ma" als een vlag op een stok.',
    'ム': 'Lijkt op マ, maar ム krult aan het eind terug naar binnen, als een mug ("mu") die wegvliegt.',
    'ニ': 'Twee horizontale streepjes, simpelweg "ni" = twee (2) lijntjes, makkelijk te onthouden via het cijfer.',
    'メ': 'Een kruisje, als ogen dichtknijpen — "me" = oog dat een seconde dichtgaat.',
    'ホ': 'Lijkt op オ/ボ, maar ホ heeft twee losse zijstreepjes — een vuur met vonken (ho als in "hot").',
    'ル': 'Lijkt op ハ, maar ル heeft een duidelijke haak/lus rechtsonder.',
    'ハ': 'Lijkt op ル, maar ハ blijft open zonder afsluitende lus — als twee benen die uit elkaar staan.',
    'チ': 'Lijkt op テ, maar チ heeft een duidelijke knik/lus onderaan de verticale lijn.',
    'テ': 'Lijkt op チ, maar テ blijft strak en recht zonder lus — als een tafel ("te" → table).',
};


// ==========================================
// KANJI DATA — N5 niveau (meest gebruikte kanji)
// Structuur: kana = de kanji, romaji = lezing, betekenis = Nederlandse vertaling, thema = categorie
// ==========================================
const kanjiData = [
    // Getallen
    { kana: '一', romaji: 'ichi', betekenis: 'één', thema: 'Getallen' },
    { kana: '二', romaji: 'ni', betekenis: 'twee', thema: 'Getallen' },
    { kana: '三', romaji: 'san', betekenis: 'drie', thema: 'Getallen' },
    { kana: '四', romaji: 'shi/yon', betekenis: 'vier', thema: 'Getallen' },
    { kana: '五', romaji: 'go', betekenis: 'vijf', thema: 'Getallen' },
    { kana: '六', romaji: 'roku', betekenis: 'zes', thema: 'Getallen' },
    { kana: '七', romaji: 'shichi/nana', betekenis: 'zeven', thema: 'Getallen' },
    { kana: '八', romaji: 'hachi', betekenis: 'acht', thema: 'Getallen' },
    { kana: '九', romaji: 'ku/kyuu', betekenis: 'negen', thema: 'Getallen' },
    { kana: '十', romaji: 'juu', betekenis: 'tien', thema: 'Getallen' },
    { kana: '百', romaji: 'hyaku', betekenis: 'honderd', thema: 'Getallen' },
    { kana: '千', romaji: 'sen', betekenis: 'duizend', thema: 'Getallen' },
    // Tijd
    { kana: '日', romaji: 'nichi/hi', betekenis: 'dag / zon', thema: 'Tijd' },
    { kana: '月', romaji: 'tsuki/getsu', betekenis: 'maan / maand', thema: 'Tijd' },
    { kana: '年', romaji: 'nen/toshi', betekenis: 'jaar', thema: 'Tijd' },
    { kana: '時', romaji: 'ji/toki', betekenis: 'uur / tijd', thema: 'Tijd' },
    { kana: '分', romaji: 'fun/pun', betekenis: 'minuut', thema: 'Tijd' },
    { kana: '週', romaji: 'shuu', betekenis: 'week', thema: 'Tijd' },
    { kana: '今', romaji: 'ima/kon', betekenis: 'nu / huidig', thema: 'Tijd' },
    { kana: '先', romaji: 'sen/saki', betekenis: 'vorig / eerder', thema: 'Tijd' },
    { kana: '来', romaji: 'rai/kuru', betekenis: 'komen / volgend', thema: 'Tijd' },
    // Mensen & Familie
    { kana: '人', romaji: 'hito/jin', betekenis: 'persoon / mensen', thema: 'Mensen' },
    { kana: '父', romaji: 'chichi/otou', betekenis: 'vader', thema: 'Mensen' },
    { kana: '母', romaji: 'haha/okaa', betekenis: 'moeder', thema: 'Mensen' },
    { kana: '子', romaji: 'ko/shi', betekenis: 'kind', thema: 'Mensen' },
    { kana: '女', romaji: 'onna/jo', betekenis: 'vrouw / vrouwelijk', thema: 'Mensen' },
    { kana: '男', romaji: 'otoko/dan', betekenis: 'man / mannelijk', thema: 'Mensen' },
    { kana: '友', romaji: 'tomo/yuu', betekenis: 'vriend', thema: 'Mensen' },
    { kana: '先生', romaji: 'sensei', betekenis: 'leraar', thema: 'Mensen' },
    { kana: '学生', romaji: 'gakusei', betekenis: 'student', thema: 'Mensen' },
    // Natuur
    { kana: '山', romaji: 'yama/san', betekenis: 'berg', thema: 'Natuur' },
    { kana: '川', romaji: 'kawa/sen', betekenis: 'rivier', thema: 'Natuur' },
    { kana: '木', romaji: 'ki/moku', betekenis: 'boom / hout', thema: 'Natuur' },
    { kana: '花', romaji: 'hana/ka', betekenis: 'bloem', thema: 'Natuur' },
    { kana: '水', romaji: 'mizu/sui', betekenis: 'water', thema: 'Natuur' },
    { kana: '火', romaji: 'hi/ka', betekenis: 'vuur', thema: 'Natuur' },
    { kana: '空', romaji: 'sora/kuu', betekenis: 'lucht / hemel', thema: 'Natuur' },
    { kana: '雨', romaji: 'ame/u', betekenis: 'regen', thema: 'Natuur' },
    // Plaatsen & Richting
    { kana: '上', romaji: 'ue/jou', betekenis: 'boven / op', thema: 'Richting' },
    { kana: '下', romaji: 'shita/ka', betekenis: 'onder / beneden', thema: 'Richting' },
    { kana: '右', romaji: 'migi/u', betekenis: 'rechts', thema: 'Richting' },
    { kana: '左', romaji: 'hidari/sa', betekenis: 'links', thema: 'Richting' },
    { kana: '中', romaji: 'naka/chuu', betekenis: 'midden / binnen', thema: 'Richting' },
    { kana: '外', romaji: 'soto/gai', betekenis: 'buiten', thema: 'Richting' },
    { kana: '国', romaji: 'kuni/koku', betekenis: 'land / natie', thema: 'Richting' },
    { kana: '駅', romaji: 'eki', betekenis: 'station', thema: 'Richting' },
    // School & Studie
    { kana: '学', romaji: 'gaku/mana', betekenis: 'leren / studie', thema: 'School' },
    { kana: '校', romaji: 'kou', betekenis: 'school', thema: 'School' },
    { kana: '書', romaji: 'ka/sho', betekenis: 'schrijven / boek', thema: 'School' },
    { kana: '読', romaji: 'yomu/doku', betekenis: 'lezen', thema: 'School' },
    { kana: '語', romaji: 'go/kata', betekenis: 'taal / woord', thema: 'School' },
    { kana: '文', romaji: 'bun/fumi', betekenis: 'tekst / zin', thema: 'School' },
    { kana: '字', romaji: 'ji', betekenis: 'karakter / letter', thema: 'School' },
    // Alledaags leven
    { kana: '食', romaji: 'shoku/ta', betekenis: 'eten / voedsel', thema: 'Dagelijks' },
    { kana: '飲', romaji: 'nomu/in', betekenis: 'drinken', thema: 'Dagelijks' },
    { kana: '見', romaji: 'miru/ken', betekenis: 'zien / kijken', thema: 'Dagelijks' },
    { kana: '行', romaji: 'iku/kou', betekenis: 'gaan', thema: 'Dagelijks' },
    { kana: '来', romaji: 'kuru/rai', betekenis: 'komen', thema: 'Dagelijks' },
    { kana: '大', romaji: 'ookii/dai', betekenis: 'groot', thema: 'Dagelijks' },
    { kana: '小', romaji: 'chiisai/shou', betekenis: 'klein', thema: 'Dagelijks' },
    { kana: '高', romaji: 'takai/kou', betekenis: 'hoog / duur', thema: 'Dagelijks' },
    { kana: '安', romaji: 'yasui/an', betekenis: 'goedkoop / veilig', thema: 'Dagelijks' },
    { kana: '新', romaji: 'atarashii/shin', betekenis: 'nieuw', thema: 'Dagelijks' },
    { kana: '古', romaji: 'furui/ko', betekenis: 'oud', thema: 'Dagelijks' },
    { kana: '好', romaji: 'suki/kou', betekenis: 'leuk vinden / goed', thema: 'Dagelijks' },
];