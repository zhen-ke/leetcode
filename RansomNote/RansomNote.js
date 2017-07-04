/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let obj = {}
  for (let key of magazine) {
    obj[key] = obj[key] ? ++obj[key] : 1
  }
  for (let key of ransomNote) {
    if (obj[key]) {
      obj[key]--
    } else {
      return false
    }
  }
  return true;
};
