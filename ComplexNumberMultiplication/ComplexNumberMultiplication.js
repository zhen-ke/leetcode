/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  a = parseComplex(a);
  b = parseComplex(b);
  let real = a[0] * b[0] - a[1] * b[1]
  let virtual = a[0] * b[1] + a[1] * b[0];
  return `${real}+${virtual}i`
};

function parseComplex(c) {
  let parts = c.split("+");
  let real = parseInt(parts[0])
  let virtual = parseInt(parts[1])
  return [real, virtual]
}
