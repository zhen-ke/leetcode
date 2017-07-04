/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let s = (x ^ y).toString(2);
  let r = 0;
  for (let i = 0; i < s.length; i++) {
    r += +s[i];
  }
  return r;
};
