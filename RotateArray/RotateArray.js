/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let arr = [];
  let result;
  let right = nums.slice(0, nums.length - k);
  let left = nums.slice(nums.length - k);
  result = arr.concat(left, right);
  nums.splice(0, nums.length);
  for (var i = 0; i < result.length; i++) {
    nums.push(result[i]);
  }
};
