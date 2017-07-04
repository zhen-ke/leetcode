/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let hashs = {}
  let hasht = {}
  for (let i = 0, l = s.length; i < l; i++) {
    hs = s.charAt(i);
    ht = t.charAt(i);
    if (hashs[hs] === undefined && hasht[ht] === undefined) {
      hashs[hs] = ht
      hasht[ht] = hs
    } else if (hashs[hs] !== ht) {
      return false
    }
  }
  return true
};
