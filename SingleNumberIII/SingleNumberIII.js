/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let obj = {}
  let arr = []
  for (let key in nums) {
    obj[nums[key]] = obj[nums[key]] ? ++obj[nums[key]] : 1
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      arr.push(+key)
    }
  }
  return arr
};
