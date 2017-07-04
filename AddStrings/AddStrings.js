/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let a = num1.split("").map((a) => +a)
  let b = num2.split("").map((a) => +a)
  let l1 = a.length
  let l2 = b.length
  let l = (l1 > l2 ? l1 : l2) + 1
  let result = new Array(l).fill(0)
  let tempa, tempb
  for (let i = l1 - 1, j = l2 - 1, k = l - 1; k > 0; i--, j--, k--) {
    tempa = a[i] === undefined ? 0 : a[i]
    tempb = b[j] === undefined ? 0 : b[j]

    let rs = tempa + tempb + result[k]

    result[k] = rs % 10
    result[k - 1] += (rs - result[k]) / 10
  }
  while (result[0] === 0) {
    result.shift()
  }
  if (result.length === 0) {
    result = [0]
  }
  return result.join("")
};
