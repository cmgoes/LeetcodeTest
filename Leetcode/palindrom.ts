/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {    
    let temp: number[] = [];
    let result: number[] = [];
    let comp: number[] = [];
    let index: number = 0;
    let cur: ListNode = head;
    while(cur != null) {
        temp[index++] = cur.val;
        cur = cur.next;
    }
    result = temp.concat(temp);
    comp = temp.concat(temp.reverse());
    if(result.toString() === comp.toString()) {
        return true;
    } else {
        return false;
    }
    console.log("Temp array", comp);    
};