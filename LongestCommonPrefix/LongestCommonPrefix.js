/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ""
  if (strs.length === 1) return strs[0];
  let st = "";
  let temp = "";
  let count = 0;
  for (var i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[1][i]) {
      break
    } else {
      st += strs[0][i];
    }
  }
  if (strs.length > 2) {
    for (var i = 2; i < strs.length; i++) {
      for (var j = 0; j < strs[i].length; j++) {
        if (strs[i][j] !== st[j]) {
          break
        } else {
          temp += strs[i][j];
        }
      }
      st = temp;
      temp = "";
    }
  }
  //console.log(st)
  return st;
};
