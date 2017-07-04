/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  let result = 0;
  let temp = 0;
  let arrSub = 0;

  arrSub = arr.length / 2;
  if (arr.length % 2 == 0) {
    result = (arr[arrSub - 1] + arr[arrSub]) / 2;
  } else {
    arrSub = parseInt(arrSub);
    result = arr[arrSub];
  }
  return result;
};
