/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) {
    return null;
  }
  let prev;
  let node = head;
  while (node != null) {
    if (node.val == val) {
      if (!prev) {
        head = head.next;
      } else {
        prev.next = node.next;
      }
    } else {
      prev = node;
    }
    node = node.next;
  }
  return head;
};
