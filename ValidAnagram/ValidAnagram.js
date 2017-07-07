/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let arr = [];
  let hash = {};
  let count = 0
  for (let key of t) {
    hash[key] = hash[key] ? ++hash[key] : 1
  }
  for (let key of s) {
    if (hash[key]) {
      count++
      --hash[key]
    }
  }
  return count === t.length
};
