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



链表常用操作：

- 初始化链表

  - 通常将头节点当做链表代称

  - ```ts
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
    ```

- 插入节点

  - ```ts
    /* 在链表的节点 n0 之后插入节点 P */
    function insert(no: ListNode, P: ListNode): ListNode {
      const n1 = no.next;
      P.next = n1;
      no.next = P;
      return no
    }
    ```

- 删除节点

  - ```ts
    /* 删除链表的节点 n0 之后的首个节点 */
    function remove(no: ListNode): void {
      if (!no.next) return;
      const P = no.next;
      const n1 = P.next;
      no.next = n1;
    }
    ```

- 访问节点

- 查找节点

  - ```ts
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
    ```

    

常见的链表类型有以下三种

## 单向链表

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240626201150.png)

典型应用：栈与队列、哈希表、图



## 双向链表

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240626201250.png)

```ts
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
```

典型应用：高级数据结构（红黑树、B树）、浏览器历史（前进、后退）、`缓存淘汰（LRU）算法`



## 环形链表

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240626201225.png)

典型应用：`时间片轮转调度算法`、数据缓冲区（音频、视频播放器）
