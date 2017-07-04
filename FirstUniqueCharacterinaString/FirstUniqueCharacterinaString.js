/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hash = {}
  for (let key of s) {
    hash[key] = hash[key] ? ++hash[key] : 1
  }
  for (let key in hash) {
    if (hash[key] === 1) {
      return s.indexOf(key)
    }
  }
  return -1
};
