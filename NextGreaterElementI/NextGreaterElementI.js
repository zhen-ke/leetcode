/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let hashMap = {}
  let arr = []
  for (let key in nums) {
    hashMap[nums[key]] = nums.slice(+key + 1)
    if (+key === nums.length - 1) {
      hashMap[nums[key]] = [-1]
    }
  }
  for (let key in hashMap) {
    for (let i = 0; i < hashMap[key].length; i++) {
      if (hashMap[key][i] > key) {
        //delete(hashMap[key][i])
        //i--
        hashMap[key] = hashMap[key][i]
      }
    }
  }
  for (let key of findNums) {
    if (Array.isArray(hashMap[key])) {
      arr.push(-1)
    } else {
      arr.push(hashMap[key])
    }
  }
  return arr
};
