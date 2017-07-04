/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num >= 10) {
    num = parseInt(num / 10) + parseInt(num % 10);
  }
  return num;
};
