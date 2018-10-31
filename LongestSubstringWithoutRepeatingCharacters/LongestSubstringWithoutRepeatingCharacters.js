/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) { //debugger
  let arr = [];
  let result = '';
  let max = 0;
  for (var i = 0; i < s.length; i++) {
    result += s[i];
    for (var j = i + 1; j <= s.length; j++) {
      if (j >= s.length) {
        arr.push(result);
        result = '';
        break;
      } else {
        if (result.indexOf(s[j]) == -1) {
          result += s[j];
        } else {
          arr.push(result);
          result = '';
          break;
        }
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  return max;
};
