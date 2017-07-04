/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  //if(nums.length < 3) return 0
  let arr = nums.sort((a, b) => a - b)

  let a = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  let b = nums[0] * nums[1] * nums[nums.length - 1];
  return a > b ? a : b;
};
