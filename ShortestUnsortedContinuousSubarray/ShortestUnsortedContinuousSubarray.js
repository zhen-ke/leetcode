/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let arr = nums.slice(0).sort((a, b) => a - b);
  let l = arr.length;
  let left = 0;
  let right = 0;
  for (var i = 0, j = l; i < l, j >= 0; i++, j--) {
    if (arr[i] !== nums[i]) {
      left = i;
    }
    if (arr[j] !== nums[j]) {
      right = j;
    }
  }
  let diff;
  if (left === 0 && right === 0) {
    diff = left = right;
  } else {
    diff = (left + 1) - right;
  }
  return diff;
};
