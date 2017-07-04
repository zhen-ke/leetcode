/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let arr = []
  let result = []
  let obj = {}
  let temp
  for (let key in strs) {
    obj[strs[key].split('').sort().join("")] += "," + strs[key];
  }
  for (let key in obj) {
    temp = obj[key].slice(10).split(",")
    arr.push(temp)
  }
  return arr
};
