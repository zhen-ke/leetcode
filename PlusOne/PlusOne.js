/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length - 1] = digits[digits.length - 1] + 1;
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[0] == 10) {
      digits[0] = 0;
      digits.unshift(1);
    }
    if (digits[i] > 9) {
      digits[i] = 0;
      digits[i - 1] = digits[i - 1] + 1;
    }
  }
  return digits;
};
