/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let ret = Math.sqrt(num)
  if (ret % 1 !== 0) {
    return false
  } else {
    return true
  }
};
