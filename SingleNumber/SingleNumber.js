/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = {}
  let min = 1
  for (let key in nums) {
    obj[nums[key]] = obj[nums[key]] ? ++obj[nums[key]] : 1
  }
  for (let key in obj) {
    //min = obj[nums[key]] < min ? obj[nums[key]] : min
    if (obj[key] === 1) {
      return +key
    }
  }
};
