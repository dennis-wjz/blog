class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val; // 节点值
    this.next = next === undefined ? null : next; // 指向下一节点的引用
  }
}

/* 初始化链表 1 -> 3 -> 2 -> 5 -> 4 */
// 初始化各节点
const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4);
// 构建各节点之间的引用
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(n0);

/* 在链表的节点 n0 之后插入节点 P */
function insert(no: ListNode, P: ListNode): ListNode {
  const n1 = no.next;
  P.next = n1;
  no.next = P;
  return no;
}

/* 删除链表的节点 n0 之后的首个节点 */
function remove(no: ListNode): void {
  if (!no.next) return;
  const P = no.next;
  const n1 = P.next;
  no.next = n1;
}

/* 在链表中查找值为 target 的首个节点 */
function find(head: ListNode | null, target: number): number {
  let index = 0;
  while (head != null) {
    if (head.val == target) {
      return index;
    }
    head = head.next;
    index += 1;
  }
  return -1;
}

/* 双向链表节点类 */
class DoubleListNode {
  val: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(val?: number, next?: ListNode | null, prev?: ListNode | null) {
    this.val = val === undefined ? 0 : val; // 节点值
    this.next = next === undefined ? null : next; // 指向下一节点的引用
    this.prev = prev === undefined ? null : prev; // 指向上一节点的引用
  }
}
