const data = require("./data");
const incorrectNumberMessage = 'INCORRECT NUMBER';

function getHolyQuranTranslation() {
  return data.translation;
}

function getTranslationByJuz(juz) {
    if(+juz < 1 || +juz > 30) return incorrectNumberMessage;
    return data.translation.filter(item => item.juz === +juz);
}

function getTranslationByHizb(hizb) {
    return data.translation.filter(item => item.hizb === +hizb);
}

function getTranslationByPage(page) {
    if(+page < 1 || +page > 604) return incorrectNumberMessage;
    return data.translation.filter(item => item.page === +page);
}

function getTranslationBySura(sura) {
    if(+sura < 1 || +sura > 114) return incorrectNumberMessage;
    return data.translation.filter(item => item.sura === +sura);
}

function getTranslationByIndex(index) {
    if(+index < 1 || +index > 6236) return incorrectNumberMessage;
    return data.translation.filter(item => item.index === +index)[0];
}

function getTranslationByAyah(aya, sura) {
    return data.translation.filter(item => item.sura === +sura && item.ayaNumber === +aya)[0];
}

module.exports = {
    getHolyQuranTranslation,
    getTranslationByJuz,
    getTranslationByHizb,
    getTranslationByPage,
    getTranslationBySura,
    getTranslationByIndex,
    getTranslationByAyah
};
