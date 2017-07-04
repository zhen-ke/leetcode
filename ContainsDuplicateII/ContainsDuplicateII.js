/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hash = {}

  for (let key in nums) {
    if (!hash[nums[key]]) {
      hash[nums[key]] = []
      hash[nums[key]].push(key)
    } else {
      hash[nums[key]].push(key)
    }
  }
  for (let key in hash) {
    if (hash[key].length >= 2) {
      for (let j = 1; j < hash[key].length; j++) {
        if (+hash[key][j] - +hash[key][j - 1] <= k) {
          return true
        }
      }
    }
  }
  return false
};
