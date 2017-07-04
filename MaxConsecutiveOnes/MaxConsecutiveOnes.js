/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var max = 0;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
      max = count >= max ? count : max;
    } else {
      count = 0;
      continue;
    }
  }
  return max;
};
