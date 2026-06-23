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
    { kana: 'かまきり', romaji: 'kamakiri', betekenis: 'Bidsprinkhaan', type: 'Woord', thema: 'Insecten', niveau: 'N4' },
    { kana: 'せみ', romaji: 'semi', betekenis: 'Krekel / Cicade', type: 'Woord', thema: 'Insecten', niveau: 'N4' },
    { kana: 'てんとうむし', romaji: 'tentoumushi', betekenis: 'Lieveheersbeestje', type: 'Woord', thema: 'Insecten', niveau: 'N4' },

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
    { kana: 'はれ', romaji: 'hare', betekenis: 'Zonnig weer', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'くもり', romaji: 'kumori', betekenis: 'Bewolkt weer', type: 'Woord', thema: 'Natuur', niveau: 'N5' },
    { kana: 'たいふう', romaji: 'taifuu', betekenis: 'Tyfoon', type: 'Woord', thema: 'Natuur', niveau: 'N4' },
    { kana: 'きおん', romaji: 'kion', betekenis: 'Temperatuur', type: 'Woord', thema: 'Natuur', niveau: 'N4' },
    { kana: 'つゆ', romaji: 'tsuyu', betekenis: 'Regenseizoen', type: 'Woord', thema: 'Natuur', niveau: 'N4' },

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
    { kana: 'ちゃいろ', romaji: 'chairo', betekenis: 'Bruin', type: 'Woord', thema: 'Kleuren', niveau: 'N5' },
    { kana: 'むらさき', romaji: 'murasaki', betekenis: 'Paars', type: 'Woord', thema: 'Kleuren', niveau: 'N5' },

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
    { kana: 'じゅうでん', romaji: 'juuden', betekenis: 'Opladen', type: 'Woord', thema: 'Technologie & Media', niveau: 'N4' },

    // ==========================================
    // THEMA: KLEDING (NIEUW)
    // ==========================================
    { kana: 'ふく', romaji: 'fuku', betekenis: 'Kleding', type: 'Woord', thema: 'Kleding', niveau: 'N5' },
    { kana: 'シャツ', romaji: 'shatsu', betekenis: 'Shirt', type: 'Woord', thema: 'Kleding', niveau: 'N5' },
    { kana: 'ズボン', romaji: 'zubon', betekenis: 'Broek', type: 'Woord', thema: 'Kleding', niveau: 'N5' },
    { kana: 'スカート', romaji: 'sukaato', betekenis: 'Rok', type: 'Woord', thema: 'Kleding', niveau: 'N5' },
    { kana: 'ぼうし', romaji: 'boushi', betekenis: 'Hoed / Pet', type: 'Woord', thema: 'Kleding', niveau: 'N5' },
    { kana: 'めがね', romaji: 'megane', betekenis: 'Bril', type: 'Woord', thema: 'Kleding', niveau: 'N5' },
    { kana: 'てぶくろ', romaji: 'tebukuro', betekenis: 'Handschoenen', type: 'Woord', thema: 'Kleding', niveau: 'N4' },
    { kana: 'くつした', romaji: 'kutsushita', betekenis: 'Sokken', type: 'Woord', thema: 'Kleding', niveau: 'N5' },

    // ==========================================
    // THEMA: HOBBY'S & SPORT (NIEUW)
    // ==========================================
    { kana: 'サッカー', romaji: 'sakkaa', betekenis: 'Voetbal', type: 'Woord', thema: "Hobby's & Sport", niveau: 'N5' },
    { kana: 'やきゅう', romaji: 'yakyuu', betekenis: 'Honkbal', type: 'Woord', thema: "Hobby's & Sport", niveau: 'N5' },
    { kana: 'おんがく', romaji: 'ongaku', betekenis: 'Muziek', type: 'Woord', thema: "Hobby's & Sport", niveau: 'N5' },
    { kana: 'えいが', romaji: 'eiga', betekenis: 'Film', type: 'Woord', thema: "Hobby's & Sport", niveau: 'N5' },
    { kana: 'どくしょ', romaji: 'dokusho', betekenis: 'Lezen (als hobby)', type: 'Woord', thema: "Hobby's & Sport", niveau: 'N4' },
    { kana: 'りょこう', romaji: 'ryokou', betekenis: 'Reizen', type: 'Woord', thema: "Hobby's & Sport", niveau: 'N4' },
    { kana: 'すいえい', romaji: 'suiei', betekenis: 'Zwemmen', type: 'Woord', thema: "Hobby's & Sport", niveau: 'N5' },
    { kana: 'ダンス', romaji: 'dansu', betekenis: 'Dans', type: 'Woord', thema: "Hobby's & Sport", niveau: 'N5' },

    // ==========================================
    // THEMA: GEZONDHEID (NIEUW)
    // ==========================================
    { kana: 'びょうき', romaji: 'byouki', betekenis: 'Ziekte', type: 'Woord', thema: 'Gezondheid', niveau: 'N5' },
    { kana: 'くすり', romaji: 'kusuri', betekenis: 'Medicijn', type: 'Woord', thema: 'Gezondheid', niveau: 'N5' },
    { kana: 'びょういん', romaji: 'byouin', betekenis: 'Ziekenhuis', type: 'Woord', thema: 'Gezondheid', niveau: 'N5' },
    { kana: 'ねつ', romaji: 'netsu', betekenis: 'Koorts', type: 'Woord', thema: 'Gezondheid', niveau: 'N4' },
    { kana: 'いたい', romaji: 'itai', betekenis: 'Pijnlijk', type: 'Woord', thema: 'Gezondheid', niveau: 'N4' },
    { kana: 'げんき', romaji: 'genki', betekenis: 'Gezond / Energiek', type: 'Woord', thema: 'Gezondheid', niveau: 'N5' },
    { kana: '風邪', romaji: 'kaze', betekenis: 'Verkoudheid', type: 'Woord', thema: 'Gezondheid', niveau: 'N4' },
    { kana: 'たいおん', romaji: 'taion', betekenis: 'Lichaamstemperatuur', type: 'Woord', thema: 'Gezondheid', niveau: 'N4' },

    // ==========================================
    // THEMA: KEUKEN & KOKEN (NIEUW)
    // ==========================================
    { kana: 'なべ', romaji: 'nabe', betekenis: 'Pan', type: 'Woord', thema: 'Keuken & Koken', niveau: 'N5' },
    { kana: '箸', romaji: 'hashi', betekenis: 'Eetstokjes', type: 'Woord', thema: 'Keuken & Koken', niveau: 'N5' },
    { kana: 'フォーク', romaji: 'fooku', betekenis: 'Vork', type: 'Woord', thema: 'Keuken & Koken', niveau: 'N5' },
    { kana: 'スプーン', romaji: 'supuun', betekenis: 'Lepel', type: 'Woord', thema: 'Keuken & Koken', niveau: 'N5' },
    { kana: 'さら', romaji: 'sara', betekenis: 'Bord', type: 'Woord', thema: 'Keuken & Koken', niveau: 'N5' },
    { kana: 'コップ', romaji: 'koppu', betekenis: 'Glas / Kopje', type: 'Woord', thema: 'Keuken & Koken', niveau: 'N5' },
    { kana: 'りょうり', romaji: 'ryouri', betekenis: 'Gerecht / Koken', type: 'Woord', thema: 'Keuken & Koken', niveau: 'N5' },
    { kana: 'フライパン', romaji: 'furaipan', betekenis: 'Koekenpan', type: 'Woord', thema: 'Keuken & Koken', niveau: 'N5' }
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
    { kana: "たいへんしつれいしました", romaji: "taihen shitsurei shimashita", betekenis: "Mijn oprechte excuses", thema: "Excuses & Verontschuldigen", niveau: "N4" },

    // Bij de dokter
    { kana: "びょういんはどこですか", romaji: "byouin wa doko desu ka", betekenis: "Waar is het ziekenhuis?", thema: "Bij de dokter", niveau: "N5" },
    { kana: "おなかがいたいです", romaji: "onaka ga itai desu", betekenis: "Mijn buik doet pijn", thema: "Bij de dokter", niveau: "N4" },
    { kana: "ねつがあります", romaji: "netsu ga arimasu", betekenis: "Ik heb koorts", thema: "Bij de dokter", niveau: "N4" },
    { kana: "くすりをください", romaji: "kusuri o kudasai", betekenis: "Medicijn graag", thema: "Bij de dokter", niveau: "N5" },
    { kana: "アレルギーがあります", romaji: "arerugii ga arimasu", betekenis: "Ik heb een allergie", thema: "Bij de dokter", niveau: "N4" },

    // Complimenten geven
    { kana: "すごいですね", romaji: "sugoi desu ne", betekenis: "Dat is geweldig!", thema: "Complimenten geven", niveau: "N5" },
    { kana: "じょうずですね", romaji: "jouzu desu ne", betekenis: "Dat kun je goed!", thema: "Complimenten geven", niveau: "N5" },
    { kana: "かわいいですね", romaji: "kawaii desu ne", betekenis: "Dat is leuk/schattig!", thema: "Complimenten geven", niveau: "N5" },
    { kana: "おいしそうですね", romaji: "oishisou desu ne", betekenis: "Dat ziet er lekker uit!", thema: "Complimenten geven", niveau: "N4" },
    { kana: "がんばってください", romaji: "ganbatte kudasai", betekenis: "Doe je best! / Succes!", thema: "Complimenten geven", niveau: "N5" },

    // Hobby's bespreken
    { kana: "しゅみは何ですか", romaji: "shumi wa nan desu ka", betekenis: "Wat is je hobby?", thema: "Hobby's bespreken", niveau: "N5" },
    { kana: "サッカーがすきです", romaji: "sakkaa ga suki desu", betekenis: "Ik houd van voetbal", thema: "Hobby's bespreken", niveau: "N5" },
    { kana: "えいがをよく見ます", romaji: "eiga o yoku mimasu", betekenis: "Ik kijk vaak films", thema: "Hobby's bespreken", niveau: "N4" },
    { kana: "どくしょがすきです", romaji: "dokusho ga suki desu", betekenis: "Ik houd van lezen", thema: "Hobby's bespreken", niveau: "N5" },
    { kana: "いっしょにあそびませんか", romaji: "issho ni asobimasen ka", betekenis: "Zullen we samen iets doen?", thema: "Hobby's bespreken", niveau: "N4" },

    // Weer bespreken
    { kana: "きょうはいい天気ですね", romaji: "kyou wa ii tenki desu ne", betekenis: "Mooi weer vandaag, niet?", thema: "Weer bespreken", niveau: "N5" },
    { kana: "あめがふっています", romaji: "ame ga futteimasu", betekenis: "Het regent", thema: "Weer bespreken", niveau: "N4" },
    { kana: "さむいですね", romaji: "samui desu ne", betekenis: "Het is koud, niet?", thema: "Weer bespreken", niveau: "N5" },
    { kana: "あついですね", romaji: "atsui desu ne", betekenis: "Het is warm, niet?", thema: "Weer bespreken", niveau: "N5" },
    { kana: "かさをもってきましたか", romaji: "kasa o motte kimashita ka", betekenis: "Heb je een paraplu meegenomen?", thema: "Weer bespreken", niveau: "N4" },

    // Bij het station
    { kana: "つぎのでんしゃはなんじですか", romaji: "tsugi no densha wa nanji desu ka", betekenis: "Hoe laat is de volgende trein?", thema: "Bij het station", niveau: "N4" },
    { kana: "このでんしゃはとうきょうにいきますか", romaji: "kono densha wa Tokyo ni ikimasu ka", betekenis: "Gaat deze trein naar Tokio?", thema: "Bij het station", niveau: "N4" },
    { kana: "きっぷはどこでかえますか", romaji: "kippu wa doko de kaemasu ka", betekenis: "Waar kan ik een ticket kopen?", thema: "Bij het station", niveau: "N4" },
    { kana: "のりばはどこですか", romaji: "noriba wa doko desu ka", betekenis: "Waar is het perron?", thema: "Bij het station", niveau: "N5" },
    { kana: "でんしゃがとまりました", romaji: "densha ga tomarimashita", betekenis: "De trein is gestopt", thema: "Bij het station", niveau: "N4" }
];
// =====================================================================================
// KANJI
// =====================================================================================
// Zelfde structuur als woorden/zinnen (kana/romaji/betekenis/thema/niveau), zodat het
// bestaande quiz-systeem (typen, meerkeuze, SRS, statistieken) hier zonder aanpassingen
// op werkt. romaji = de meest gangbare lezing voor herkenning op dit niveau (meestal de
// kun-lezing); bij de "Basis Werkwoorden" is dat de volledige woordvorm met okurigana
// (bv. 行く i.p.v. los 行), zodat wat je ziet exact overeenkomt met wat je intypt.
const kanjiData = [
    // ==========================================
    // THEMA: CIJFERS
    // ==========================================
    { kana: '一', romaji: 'ichi', betekenis: 'Een (1)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '二', romaji: 'ni', betekenis: 'Twee (2)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '三', romaji: 'san', betekenis: 'Drie (3)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '四', romaji: 'yon', betekenis: 'Vier (4)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '五', romaji: 'go', betekenis: 'Vijf (5)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '六', romaji: 'roku', betekenis: 'Zes (6)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '七', romaji: 'nana', betekenis: 'Zeven (7)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '八', romaji: 'hachi', betekenis: 'Acht (8)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '九', romaji: 'kyuu', betekenis: 'Negen (9)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '十', romaji: 'juu', betekenis: 'Tien (10)', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '百', romaji: 'hyaku', betekenis: 'Honderd', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '千', romaji: 'sen', betekenis: 'Duizend', type: 'Kanji', thema: 'Cijfers', niveau: 'N5' },
    { kana: '万', romaji: 'man', betekenis: 'Tienduizend', type: 'Kanji', thema: 'Cijfers', niveau: 'N4' },

    // ==========================================
    // THEMA: TIJD (KANJI)
    // ==========================================
    { kana: '日', romaji: 'hi', betekenis: 'Dag / Zon', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '月', romaji: 'tsuki', betekenis: 'Maand / Maan', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '年', romaji: 'nen', betekenis: 'Jaar', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '時', romaji: 'toki', betekenis: 'Tijd / Uur', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '今', romaji: 'ima', betekenis: 'Nu', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '朝', romaji: 'asa', betekenis: 'Ochtend', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '昼', romaji: 'hiru', betekenis: 'Middag', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '夜', romaji: 'yoru', betekenis: 'Avond / Nacht', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '分', romaji: 'fun', betekenis: 'Minuut', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N5' },
    { kana: '週', romaji: 'shuu', betekenis: 'Week', type: 'Kanji', thema: 'Tijd (kanji)', niveau: 'N4' },

    // ==========================================
    // THEMA: MENSEN & FAMILIE (KANJI)
    // ==========================================
    { kana: '人', romaji: 'hito', betekenis: 'Mens / Persoon', type: 'Kanji', thema: 'Mensen & Familie (kanji)', niveau: 'N5' },
    { kana: '女', romaji: 'onna', betekenis: 'Vrouw', type: 'Kanji', thema: 'Mensen & Familie (kanji)', niveau: 'N5' },
    { kana: '男', romaji: 'otoko', betekenis: 'Man', type: 'Kanji', thema: 'Mensen & Familie (kanji)', niveau: 'N5' },
    { kana: '子', romaji: 'ko', betekenis: 'Kind', type: 'Kanji', thema: 'Mensen & Familie (kanji)', niveau: 'N5' },
    { kana: '父', romaji: 'chichi', betekenis: 'Vader', type: 'Kanji', thema: 'Mensen & Familie (kanji)', niveau: 'N5' },
    { kana: '母', romaji: 'haha', betekenis: 'Moeder', type: 'Kanji', thema: 'Mensen & Familie (kanji)', niveau: 'N5' },
    { kana: '友', romaji: 'tomo', betekenis: 'Vriend', type: 'Kanji', thema: 'Mensen & Familie (kanji)', niveau: 'N5' },

    // ==========================================
    // THEMA: NATUUR (KANJI)
    // ==========================================
    { kana: '山', romaji: 'yama', betekenis: 'Berg', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N5' },
    { kana: '川', romaji: 'kawa', betekenis: 'Rivier', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N5' },
    { kana: '木', romaji: 'ki', betekenis: 'Boom', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N5' },
    { kana: '花', romaji: 'hana', betekenis: 'Bloem', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N5' },
    { kana: '空', romaji: 'sora', betekenis: 'Lucht', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N5' },
    { kana: '雨', romaji: 'ame', betekenis: 'Regen', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N5' },
    { kana: '雪', romaji: 'yuki', betekenis: 'Sneeuw', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N4' },
    { kana: '海', romaji: 'umi', betekenis: 'Zee', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N5' },
    { kana: '天', romaji: 'ten', betekenis: 'Hemel', type: 'Kanji', thema: 'Natuur (kanji)', niveau: 'N4' },

    // ==========================================
    // THEMA: LICHAAM (KANJI)
    // ==========================================
    { kana: '目', romaji: 'me', betekenis: 'Oog', type: 'Kanji', thema: 'Lichaam (kanji)', niveau: 'N5' },
    { kana: '口', romaji: 'kuchi', betekenis: 'Mond', type: 'Kanji', thema: 'Lichaam (kanji)', niveau: 'N5' },
    { kana: '手', romaji: 'te', betekenis: 'Hand', type: 'Kanji', thema: 'Lichaam (kanji)', niveau: 'N5' },
    { kana: '足', romaji: 'ashi', betekenis: 'Voet / Been', type: 'Kanji', thema: 'Lichaam (kanji)', niveau: 'N5' },
    { kana: '耳', romaji: 'mimi', betekenis: 'Oor', type: 'Kanji', thema: 'Lichaam (kanji)', niveau: 'N4' },
    { kana: '心', romaji: 'kokoro', betekenis: 'Hart / Gevoel', type: 'Kanji', thema: 'Lichaam (kanji)', niveau: 'N4' },

    // ==========================================
    // THEMA: RICHTING & PLAATS (KANJI)
    // ==========================================
    { kana: '上', romaji: 'ue', betekenis: 'Boven', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N5' },
    { kana: '下', romaji: 'shita', betekenis: 'Onder', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N5' },
    { kana: '中', romaji: 'naka', betekenis: 'Midden / In', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N5' },
    { kana: '外', romaji: 'soto', betekenis: 'Buiten', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N4' },
    { kana: '左', romaji: 'hidari', betekenis: 'Links', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N5' },
    { kana: '右', romaji: 'migi', betekenis: 'Rechts', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N5' },
    { kana: '前', romaji: 'mae', betekenis: 'Voor', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N5' },
    { kana: '後', romaji: 'ushiro', betekenis: 'Achter', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N4' },
    { kana: '東', romaji: 'higashi', betekenis: 'Oost', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N4' },
    { kana: '西', romaji: 'nishi', betekenis: 'West', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N4' },
    { kana: '南', romaji: 'minami', betekenis: 'Zuid', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N4' },
    { kana: '北', romaji: 'kita', betekenis: 'Noord', type: 'Kanji', thema: 'Richting & Plaats (kanji)', niveau: 'N4' },

    // ==========================================
    // THEMA: KLEUREN (KANJI)
    // ==========================================
    { kana: '赤', romaji: 'aka', betekenis: 'Rood', type: 'Kanji', thema: 'Kleuren (kanji)', niveau: 'N5' },
    { kana: '青', romaji: 'ao', betekenis: 'Blauw', type: 'Kanji', thema: 'Kleuren (kanji)', niveau: 'N5' },
    { kana: '白', romaji: 'shiro', betekenis: 'Wit', type: 'Kanji', thema: 'Kleuren (kanji)', niveau: 'N5' },
    { kana: '黒', romaji: 'kuro', betekenis: 'Zwart', type: 'Kanji', thema: 'Kleuren (kanji)', niveau: 'N5' },

    // ==========================================
    // THEMA: SCHOOL & TAAL (KANJI)
    // ==========================================
    { kana: '学', romaji: 'gaku', betekenis: 'Studie / Leren', type: 'Kanji', thema: 'School & Taal (kanji)', niveau: 'N5' },
    { kana: '校', romaji: 'kou', betekenis: 'School', type: 'Kanji', thema: 'School & Taal (kanji)', niveau: 'N5' },
    { kana: '先', romaji: 'sen', betekenis: 'Eerder / Voorgaand', type: 'Kanji', thema: 'School & Taal (kanji)', niveau: 'N5' },
    { kana: '生', romaji: 'sei', betekenis: 'Leven / Geboorte', type: 'Kanji', thema: 'School & Taal (kanji)', niveau: 'N5' },
    { kana: '本', romaji: 'hon', betekenis: 'Boek / Oorsprong', type: 'Kanji', thema: 'School & Taal (kanji)', niveau: 'N5' },
    { kana: '語', romaji: 'go', betekenis: 'Taal', type: 'Kanji', thema: 'School & Taal (kanji)', niveau: 'N5' },
    { kana: '名', romaji: 'na', betekenis: 'Naam', type: 'Kanji', thema: 'School & Taal (kanji)', niveau: 'N5' },
    { kana: '国', romaji: 'kuni', betekenis: 'Land', type: 'Kanji', thema: 'School & Taal (kanji)', niveau: 'N5' },

    // ==========================================
    // THEMA: BASIS WERKWOORDEN (KANJI)
    // ==========================================
    { kana: '行く', romaji: 'iku', betekenis: 'Gaan', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '来る', romaji: 'kuru', betekenis: 'Komen', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '見る', romaji: 'miru', betekenis: 'Zien', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '食べる', romaji: 'taberu', betekenis: 'Eten', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '飲む', romaji: 'nomu', betekenis: 'Drinken', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '話す', romaji: 'hanasu', betekenis: 'Spreken', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '書く', romaji: 'kaku', betekenis: 'Schrijven', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '読む', romaji: 'yomu', betekenis: 'Lezen', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '買う', romaji: 'kau', betekenis: 'Kopen', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N5' },
    { kana: '立つ', romaji: 'tatsu', betekenis: 'Staan', type: 'Kanji', thema: 'Basis Werkwoorden', niveau: 'N4' }
];