/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let l1 = head;
  while (l1.next != null) {
    if (l1.val == l1.next.val) {
      l1.next = l1.next.next;
    } else {
      l1 = l1.next;
    }
  }
  return head;
}
