/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let result = []
  let queue = [root]
  if (root) {
    while (queue.length !== 0) {
      let temp = []
      for (let i = 0, len = queue.length; i < len; i++) {
        let node = queue.shift()
        temp.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
      let max = Math.max(...temp)
      result.push(max)
    }
  }
  return result
};
