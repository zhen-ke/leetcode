/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (s.length === 0) return 0
  let hashMap = {}
  let arr = []
  let max = 0
  let result = 0
  for (let key in s) {
    hashMap[s[key]] = hashMap[s[key]] ? ++hashMap[s[key]] : 1
  }

  for (let key in hashMap) {
    if (hashMap[key] % 2 === 0) {
      result += hashMap[key]
    } else {
      result += hashMap[key] - 1
    }
  }
  if (result < s.length) {
    return result += 1
  } else {
    return result
  }
};
