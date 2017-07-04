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
var reverseList = function(head) {
  let o1 = null;
  let o2 = head;
  let temp;
  while (o2 !== null) {
    temp = o2.next;
    o2.next = o1;
    o1 = o2;
    o2 = temp;
  }
  return o1;
};
