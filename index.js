const data = require("./data");
const incorrectNumberMessage = 'INCORRECT NUMBER';

function getHolyQuranTranslation() {
  return data.translation;
}
function getIndexTranslation(index) {
    if(index < 1 || index > 6236) return incorrectNumberMessage;
    return data.translation.filter(item => +item.index === index);
}

function getSuraTranslation(sura) {
    if(sura < 1 || sura > 114) return incorrectNumberMessage;
    return data.translation.filter(item => +item.sura === sura);
}

function getAyaTranslation(aya, sura) {
    return data.translation.filter(item => +item.sura === sura && +item.aya === aya);
}

module.exports = {
    getHolyQuranTranslation,
    getIndexTranslation,
    getSuraTranslation,
    getAyaTranslation
};
