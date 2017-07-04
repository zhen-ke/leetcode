/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let result = "";
  let temp = "";
  if (s == " ") return ""
  for (let i = 0; i < s.length; i++) {
    if (i == s.length - 1) {
      temp = s[i] + temp;
      result += temp;
    } else if (s[i] !== " ") {
      temp = s[i] + temp;
    } else {
      result += temp + " ";
      temp = "";
    }
  }
  return result;
};
