/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let arr = nums.slice(0);
  arr.push(arr[arr.length - 1]);
  let count = 0;
  let result = [];
  let temp = [];
  let st = ""
  for (var i = 1; i < arr.length; i++) {
    count++;
    if (arr[i - 1] + 1 !== arr[i]) {
      temp = arr.splice(0, count);
      i = 0;
      count = 0;
      if (temp.length <= 1) {
        st += temp[0];
        result.push(st)
        st = "";
      } else {
        st = temp[0] + "->" + temp[temp.length - 1];
        result.push(st);
        st = ""
      }
      temp = [];
    }
  }
  //console.log(arr,result,temp)
  return result
};
