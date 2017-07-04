/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let obj = {};
  let arr = []
  for (let key of nums1) {
    obj[key] = obj[key] ? ++obj[key] : 1
  }
  for (let key of nums2) {
    if (obj[key]) {
      obj[key]--
        arr.push(key);
    }
  }
  return arr
};
