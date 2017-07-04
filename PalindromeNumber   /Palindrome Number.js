/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var result = '';
  var temp = x;
  var mold;
  while (temp >= 1) {
    mold = temp % 10;
    temp = (temp - mold) / 10;
    result += mold;
  }
  if (x == +result) {
    return true;
  } else {
    return false;
  }
};
