/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  var target = 1;
  while (target < n) {
    target = target * 3

  }
  return target === n;
};
