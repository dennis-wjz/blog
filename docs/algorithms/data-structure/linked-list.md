---
title: 链表
customTag: algorithms>数据结构
date: 2024.06.25
editLink: true
---

# 链表

链表是一种线性数据结构，存储在分散的内存空间中
![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240625210300.png)

我们接着看，从下面的代码，不难看出，链表`ListNode`除了包含值，还额外保存了一个**引用指针**

```ts
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val; // 节点值
    this.next = next === undefined ? null : next; // 指向下一节点的引用
  }
}
```

