/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var n = nums;
  let count = 0;
  for (var i = 0; i < nums.length - count; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      count++;
      i--;
    }
  }
};
