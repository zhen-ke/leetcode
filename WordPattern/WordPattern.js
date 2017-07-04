/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let hash = {}
  let strs = str.split(" ").join("")
  let list = str.split(" ")
  let st = ""
  for (let key in pattern) { // 找出对应关系
    if (!hash[pattern[key]]) {
      hash[pattern[key]] = list[key]
    }
  }
  for (let key in pattern) {
    st += hash[pattern[key]]
  }
  console.log(hash, st, strs)
  if (st === strs) {
    return true
  } else {
    return false
  }
};
