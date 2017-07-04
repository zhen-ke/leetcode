/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let countA = 0;
  let countL = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      countA++;
    }
    if (s[i] === "L") {
      countL++;
    } else countL = 0;
    if (countA >= 2 || countL > 2) return false;
  }
  return true
};
