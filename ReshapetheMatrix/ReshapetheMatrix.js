/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (r * c !== nums.length * nums[0].length) {
    return nums;
  }
  let result = [];
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      temp.push(nums[i][j])
      if (temp.length === c) {
        result.push(temp)
        temp = []
      }
    }
  }
  return result;
};
