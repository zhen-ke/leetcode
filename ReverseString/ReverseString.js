/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result = s[i] + result;
  }
  return result;
};
