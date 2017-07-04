/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let temp = ""
  let i = 1
  while (i <= s.length / 2) {
    temp = s.slice(0, i).repeat(s.length / i)
    if (temp === s) {
      return true
    } else {
      temp = ""
      i++
    }
  }
  return false
};
