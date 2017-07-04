/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) return "0"
  var mold;
  var result = '';
  let flag = false
  if (num < 0) {
    num *= -1
    flag = true
  } else {
    flag = false
  }
  while (num >= 1) {
    mold = num % 7;
    switch (mold) {
      case 0:
        result = "0" + result;
        break;
      case 1:
        result = "1" + result;
        break;
      case 2:
        result = "2" + result;
        break;
      case 3:
        result = "3" + result;
        break;
      case 4:
        result = "4" + result;
        break;
      case 5:
        result = "5" + result;
        break;
      case 6:
        result = "6" + result;
        break;
      case 7:
        result = "7" + result;
        break;
    }
    num = (num - mold) / 7;
  }
  if (flag) {
    result *= -1
    result += ""
  }
  return result;
};
