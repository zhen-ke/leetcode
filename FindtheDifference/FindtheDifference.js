/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var a = 0;
  var b = 0;
  var result = 0;
  for (var i = 0; i < s.length; i++) {
    a += s[i].charCodeAt(0);
  }
  for (var i = 0; i < t.length; i++) {
    b += t[i].charCodeAt(0);
  }
  result = String.fromCharCode(+(b - a));
  return result;
};
