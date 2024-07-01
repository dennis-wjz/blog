import { ListNode } from "../linked-list/ListNode";

/* 基于链表实现的队列 */
class LinkedListQueue {
  private front: ListNode | null; // 头节点 front
  private rear: ListNode | null; // 尾节点 rear
  private queSize: number = 0;

  constructor() {
    this.front = null;
    this.rear = null;
  }

  /* 获取队列的长度 */
  get size(): number {
    return this.queSize;
  }

  /* 判断队列是否为空 */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /* 入队 */
  push(num: number): void {
    // 在尾节点后添加 num
    const node = new ListNode(num);
    // 如果队列为空，则令头、尾节点都指向该节点
    if (!this.front) {
      this.front = node;
      this.rear = node;
      // 如果队列不为空，则将该节点添加到尾节点后
    } else {
      this.rear!.next = node;
      this.rear = node;
    }
    this.queSize++;
  }

  /* 出队 */
  pop(): number {
    const num = this.peek();
    if (!this.front) throw new Error("队列为空");
    // 删除头节点
    this.front = this.front.next;
    this.queSize--;
    return num;
  }

  /* 访问队首元素 */
  peek(): number {
    if (this.size === 0) throw new Error("队列为空");
    return this.front!.val;
  }

  /* 将链表转化为 Array 并返回 */
  toArray(): number[] {
    let node = this.front;
    const res = new Array<number>(this.size);
    for (let i = 0; i < res.length; i++) {
      res[i] = node!.val;
      node = node!.next;
    }
    return res;
  }
}
