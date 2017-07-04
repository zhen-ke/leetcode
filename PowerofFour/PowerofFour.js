/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  var target = 1;
  while (target < num) {
    target = target * 4

  }
  return target === num;
};
