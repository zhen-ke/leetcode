/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let arrs = nums.slice(0);
  let arr = arrs.sort((a, b) => b - a);
  let hashMap = {}

  for (let key in nums) {
    hashMap[nums[key]] = +key + 1
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (hashMap[arr[i]]) {
        nums[hashMap[arr[i]] - 1] = "Gold Medal"
      }
    } else if (i === 1) {
      if (hashMap[arr[i]]) {
        nums[hashMap[arr[i]] - 1] = "Silver Medal"
      }
    } else if (i === 2) {
      if (hashMap[arr[i]]) {
        nums[hashMap[arr[i]] - 1] = "Bronze Medal"
      }
    } else {
      nums[hashMap[arr[i]] - 1] = i + 1 + ""
    }
  }
  console.log(nums)
  return nums
};
