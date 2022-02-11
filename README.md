# Quran Translations
بسم الله الرحمن الرحيم
## Installation

```bash
npm install @kmaslesa/quran-translation-bs_korkut
```

## Usage
```typescript
const quranTranslation = require('@kmaslesa/quran-translation-bs_korkut');
```

```typescript
quranTranslations.getHolyQuranTranslation();

RESPONSE:
[
  {
    index: "1",
    sura: "1",
    aya: "1",
    text: "'U ime Allaha, Milostivog, Samilosnog!'",
  },
  {
    index: "2",
    sura: "1",
    aya: "2",
    text: "'Tebe, Allaha, Gospodara svjetova, hvalimo,'",
  },
  {
    index: "3",
    sura: "1",
    aya: "3",
    text: "'Milostivog, Samilosnog,'",
  },
  { index: "4", sura: "1", aya: "4", text: "'Vladara Dana sudnjeg,'" },
  {
    index: "5",
    sura: "1",
    aya: "5",
    text: "'Tebi se klanjamo i od Tebe pomoć tražimo!'",
  },
  {
    index: "6",
    sura: "1",
    aya: "6",
    text: "'Uputi nas na Pravi put,'",
  },
  {
    index: "7",
    sura: "1",
    aya: "7",
    text: "'na Put onih kojima si milost Svoju darovao, a ne onih koji su protiv sebe srdžbu izazvali, niti onih koji su zalutali!'",
  },
  { index: "8", sura: "2", aya: "1", text: "'Elif Lām Mīm.'" },
  {
    index: "9",
    sura: "2",
    aya: "2",
    text: "'Ova Knjiga, u koju nema nikakve sumnje, uputstvo je svima onima koji se budu Allaha bojali;'",
  },
  {
    index: "10",
    sura: "2",
    aya: "3",
    text: "'onima koji u nevidljivi svijet budu vjerovali i molitvu obavljali i udjeljivali dio od onoga što im Mi budemo davali;'",
  },
  {
    index: "11",
    sura: "2",
    aya: "4",
    text: "'i onima koji budu vjerovali u ono što se objavljuje tebi i u ono što je objavljeno prije tebe, i onima koji u onaj svijet budu čvrsto vjerovali.'",
  },
  {
    index: "12",
    sura: "2",
    aya: "5",
    text: "'Njima će Gospodar njihov na Pravi put ukazati i oni će ono što žele ostvariti.'",
  },
  {
    index: "13",
    sura: "2",
    aya: "6",
    text: "'Onima koji neće da vjeruju doista je svejedno – opominjao ih ti ili ne opominjao – oni neće vjerovati.'",
  }
  ..........
]
```

```typescript
quranTranslations.getIndexTranslation(index); // index=(1-6236)

EXAMPLE:
quranTranslations.getIndexTranslation(1);

RESPONSE:
[{"index":"1","sura":"1","aya":"1","text":"'U ime Allaha, Milostivog, Samilosnog!'"}]
```

```typescript
quranTranslations.getSuraTranslation(sura); // sura=(1-114)

EXAMPLE:
quranTranslations.getSuraTranslation(114);

RESPONSE:
[{"index":"6231","sura":"114","aya":"1","text":"'Reci: \"Tražim zaštitu Gospodara ljudi,'"},{"index":"6232","sura":"114","aya":"2","text":"'Vladara ljudi,'"},{"index":"6233","sura":"114","aya":"3","text":"'Boga ljudi,'"},{"index":"6234","sura":"114","aya":"4","text":"'od zla šejtana-napasnika,'"},{"index":"6235","sura":"114","aya":"5","text":"'koji zle misli unosi u srca ljudi –'"},{"index":"6236","sura":"114","aya":"6","text":"'od džina i od ljudi!\"'"}]
```

```typescript
quranTranslations.getAyaTranslation(aya, sura);

EXAMPLE:
quranTranslations.getAyaTranslation(1, 114);

RESPONSE:
[{"index":"6231","sura":"114","aya":"1","text":"'Reci: \"Tražim zaštitu Gospodara ljudi,'"}]

```


## License
[MIT](https://choosealicense.com/licenses/mit/)