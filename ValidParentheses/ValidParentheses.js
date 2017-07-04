/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;
  let stacks = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stacks.push(")")
    }
    if (s[i] === "[") {
      stacks.push("]")
    }
    if (s[i] === "{") {
      stacks.push("}")
    }
    if (s[i] === ")") {
      if (stacks.pop() !== s[i]) {
        return false;
      }
    }
    if (s[i] === "]") {
      if (stacks.pop() !== s[i]) {
        return false;
      }
    }
    if (s[i] === "}") {
      if (stacks.pop() !== s[i]) {
        return false;
      }
    }
  }
  if (stacks.length !== 0) {
    return false;
  } else {
    return true;
  }
};
