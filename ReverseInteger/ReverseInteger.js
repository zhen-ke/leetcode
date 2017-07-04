/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  x = x.toString()
  let result = "";
  let count = 0;
  let INT_MAX = Math.pow(2, 31) - 1;
  for (var i = 0; i < x.length; i++) {
    if (x[i] === "0") {
      count++;
    } else {
      count = 0;
    }
    result = x[i] + result;
  }
  if (result[x.length - 1] === "-") {
    result = +("-" + result.slice(0, x.length - 1))
  } else if (count !== 0) {
    result = +(result.slice(count));
  }

  if (result > INT_MAX || result < -(1 + INT_MAX)) {
    return 0;
  }
  return +result
};
