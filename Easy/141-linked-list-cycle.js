/**
 * 141. 环形链表
 * url：https://leetcode-cn.com/problems/linked-list-cycle/
 * 核心点：链表、标志法、快慢指针
 * 核心思路：
 * 1、标志法：给每个已遍历过的节点加标志位，遍历链表，当出现下一个节点已被标志时，则证明单链表有环。
 * 2、快慢指针（双指针法）：设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向null时，快慢指针都不可能相遇。
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    while (head) {
        if (head.flag) return true;
        head.flag = true;
        head = head.next;
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    let slow = head, fast = head.next;
    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    } 
    return true;
};