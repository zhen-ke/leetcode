/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let obj = {}
  let arr = []
  let temp
  let result = "";
  for (let key of s) {
    obj[key] = obj[key] ? ++obj[key] : 1;
  }

  for (let key in obj) {
    arr.push([key, obj[key]]);
  }

  arr.sort((a, b) => b[1] - a[1])

  for (let key in arr) {
    result += arr[key][0].repeat(arr[key][1])
      //console.log(result)
  }
  return result
};
