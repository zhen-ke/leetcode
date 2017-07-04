/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let st = num.toString(2);
  let result = "";
  for (let key of st) {
    if (+key === 0) {
      result += 1;
    }
    if (+key === 1) {
      result += 0;
    }
  }
  return parseInt(result, 2)
};
