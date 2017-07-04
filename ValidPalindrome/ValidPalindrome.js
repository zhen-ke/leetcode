/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let temp1 = ""
  let temp2 = ""
  for (let key in s) {
    if (/[\w]/g.test(s[key]) && s[key] !== "_") {
      temp1 += s[key].toLowerCase();
      temp2 = s[key].toLowerCase() + temp2;
    }
  }
  if (temp1 === temp2) {
    return true
  } else {
    return false
  }
};
