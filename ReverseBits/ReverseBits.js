/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let a = n.toString(2);
  if (a.length < 32) {
    return parseInt(new Array(32 - a.length).fill(0).concat(a.split("")).reverse().map(a => +a).join(""), 2)
  } else {
    return parseInt((a.split("").reverse().map(a => +a).join("")), 2)
  }
};
