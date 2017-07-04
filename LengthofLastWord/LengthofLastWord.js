/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.length === 0) return 0;
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr.splice(i, 1);
      i--;
    }
  }
  if (arr.length === 0) return 0;
  return arr[arr.length - 1].length;
};
