/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let one = "qwertyuiopQWERTYUIOP";
  let two = "asdfghjklASDFGHJKL";
  let three = "zxcvbnmZXCVBNM";
  let arr = [];
  let x = 0;
  let y = 0;
  let z = 0;
  for (let key of words) {
    for (let val of key) {
      if (one.indexOf(val) !== -1) {
        x++
      } else if (two.indexOf(val) !== -1) {
        y++
      } else if (three.indexOf(val) !== -1) {
        z++
      }
    }
    if (x === key.length || y === key.length || z === key.length) {
      arr.push(key)
    }
    x = 0;
    y = 0;
    z = 0;
  }
  return arr
};
