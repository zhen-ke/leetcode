/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let ary = nums.sort(function(a, b) {
    return a - b });
  let count = 0;
  let result = 0;
  for (let i = 0; i < ary.length; i++) {
    if (i % 2 == 0) {
      result += ary[i];
    }
  }
  return result;
};
