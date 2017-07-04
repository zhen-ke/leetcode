/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let arr = s.split("")
  let hash = { "a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "A": 1, "E": 1, "I": 1, "O": 1, "U": 1 }
  let temp = []
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (hash[s[i]]) {
      if (hash[s[j]]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
      } else {
        j--
      }
    } else {
      i++
    }
  }
  return arr.join("")
};
