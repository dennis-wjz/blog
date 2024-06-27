---
title: 栈
customTag: algorithms>数据结构
date: 2024.06.27
editLink: true
---

# 栈

栈是一种先入后出的线性数据结构

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240627200634.png)

典型应用：浏览器的后退与前进、软件中的撤销与反撤销、内存管理



## 基于链表实现栈

```ts
class LinkedListStack {
  private stackPeek: ListNode | null; // 将头节点作为栈顶
  private stkSize: number = 0; // 栈的长度

  constructor() {
    this.stackPeek = null;
  }

  /* 获取栈的长度 */
  get size(): number {
    return this.stkSize;
  }

  /* 判断栈是否为空 */
  isEmpty(): boolean {
    return this.stkSize === 0;
  }

  /* 入栈 */
  push(num: number): void {
    const node = new ListNode(num);
    node.next = this.stackPeek;
    this.stackPeek = node;
    this.stkSize++;
  }

  /* 出栈 */
  pop(): number {
    const num = this.peek();
    if (!this.stackPeek) throw new Error("栈为空");
    this.stackPeek = this.stackPeek.next;
    this.stkSize--;
    return num;
  }

  /* 访问栈顶元素 */
  peek(): number {
    if (!this.stackPeek) throw new Error("栈为空");
    return this.stackPeek.val;
  }

  /* 将链表转化为 Array 并返回 */
  toArray(): number[] {
    let node = this.stackPeek;
    const res = new Array<number>(this.size);
    for (let i = res.length - 1; i >= 0; i--) {
      res[i] = node!.val;
      node = node!.next;
    }
    return res;
  }
}
```



## 基于数组实现栈

```ts
class ArrayStack {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  /* 获取栈的长度 */
  get size(): number {
    return this.stack.length;
  }

  /* 判断栈是否为空 */
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  /* 入栈 */
  push(num: number): void {
    this.stack.push(num);
  }

  /* 出栈 */
  pop(): number | undefined {
    if (!this.isEmpty()) throw new Error("栈为空");
    return this.stack.pop();
  }

  /* 访问栈顶元素 */
  top(): number {
    if (!this.stack.length) throw new Error("栈为空");
    return this.stack[this.stack.length - 1];
  }

  /* 将链表转化为 Array 并返回 */
  toArray(): number[] {
    return this.stack;
  }
}
```

