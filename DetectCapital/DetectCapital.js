/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let capital = word.toLocaleUpperCase()
  let lowercase = word.toLocaleLowerCase()
  let firstcapital = word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
  if (word == capital || word == lowercase || word == firstcapital) {
    return true;
  } else {
    return false;
  }
};
