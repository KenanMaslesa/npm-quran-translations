# Quran Translations
بسم الله الرحمن الرحيم
## Installation

```bash
npm install @quran-translation/bosnian_korkut
```

## Usage
```typescript
const quranTranslation = require('@quran-translation/bosnian_korkut');
```

```typescript
quranTranslation.getHolyQuranTranslation();

RESPONSE:
[
	{
		"index":1,
		"sura":1,
		"ayaNumber":1,
		"aya":"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
		"juz":1,
		"hizb":1,
		"page":1,
		"translation":"U ime Allaha, Milostivog, Samilosnog!"
	},
	{
		"index":2,
		"sura":1,
		"ayaNumber":2,
		"aya":"ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
		"juz":1,
		"hizb":1,
		"page":1,
		"translation":"Tebe, Allaha, Gospodara svjetova, hvalimo,"
	},
	{
		"index":3,
		"sura":1,
		"ayaNumber":3,
		"aya":"ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
		"juz":1,
		"hizb":1,
		"page":1,
		"translation":"Milostivog, Samilosnog,"
	}
  ..........
]
]
```


```typescript
quranTranslation.getTranslationByJuz(juz); // juz=(1-30)
```

```typescript
quranTranslation.getTranslationByHizb(hizb); // juz=(1-60)
```

```typescript
quranTranslation.getTranslationByPage(page); // page=(1-604)
```

```typescript
quranTranslation.getTranslationBySura(sura); // sura=(1-114)
```

```typescript
quranTranslation.getTranslationByIndex(index); // index=(1-6236)
```

```typescript
quranTranslation.getTranslationByAyah(aya, sura);

```

## License
[MIT](https://choosealicense.com/licenses/mit/)