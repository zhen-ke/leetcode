/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function c(a, b) {
  if (b == 0) return a;
  let sum = a ^ b;
  let carry = (a & b) << 1;
  return c(sum, carry);
};
