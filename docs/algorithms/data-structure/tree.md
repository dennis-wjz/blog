---
title: 树
customTag: algorithms>数据结构
date: 2024.07.13
editLink: true
---

# 树



## 二叉树

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240716120614.png)



常见二叉树类型：

- 完美二叉树：所有层的节点都被完全填满
- 完全二叉树：只有最底层的节点未被填满，且最底层节点尽量靠左填充
- 完满二叉树：除了叶节点之外，其余所有节点都有两个子节点
- 平衡二叉树：任意节点的左子树和右子树的高度之差的绝对值不超过 1



## 二叉树遍历

常见遍历方式：

- 层序遍历：从顶部到底部逐层遍历二叉树，并在每一层按照从左到右的顺序访问节点 本质上也叫**广度优先遍历**，也称为**广度优先搜索(BFS)**

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240718105621.png)

> **广度优先遍历通常借助“队列”来实现:**

```ts
/* 层序遍历 */
function levelOrder(root: TreeNode | null): number[] {
  // 初始化队列，加入根节点
  const queue = [root];
  // 初始化一个列表，用于保存遍历序列
  const list: number[] = [];
  while (queue.length) {
    let node = queue.shift() as TreeNode; // 队列出队
    list.push(node.val); // 保存节点值
    if (node.left) {
      queue.push(node.left); // 左子节点入队
    }
    if (node.right) {
      queue.push(node.right); // 右子节点入队
    }
  }
  return list;
}
```



- 前序遍历/中序遍历/后序遍历: **深度优先遍历**，也称**深度优先搜索（DFS）**

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240718135746.png)

> **深度优先搜索通常基于递归实现:**

```ts
/* 前序遍历 */
function preOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  // 访问优先级：根节点 -> 左子树 -> 右子树
  list.push(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

/* 中序遍历 */
function inOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  // 访问优先级：左子树 -> 根节点 -> 右子树
  inOrder(root.left);
  list.push(root.val);
  inOrder(root.right);
}

/* 后序遍历 */
function postOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  // 访问优先级：左子树 -> 右子树 -> 根节点
  postOrder(root.left);
  postOrder(root.right);
  list.push(root.val);
}
```

- 前序遍历：根节点→左子树→右子树
- 中序遍历：左子树→根节点→右子树
- 后序遍历：左子树→右子树→根节点



## 二叉树数组

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240723200254.png)

```ts
/* 二叉树的数组表示 */
// 使用 null 来表示空位
let tree: (number | null)[] = [1, 2, 3, 4, null, 6, 7, 8, 9, null, null, 12, null, null, 15];
```

> 基于数组表示的二叉树

```ts
/* 数组表示下的二叉树类 */
class ArrayBinaryTree {
  #tree: (number | null)[];

  /* 构造方法 */
  constructor(arr: (number | null)[]) {
    this.#tree = arr;
  }

  /* 列表容量 */
  size(): number {
    return this.#tree.length;
  }

  /* 获取索引为 i 节点的值 */
  val(i: number): number | null {
    // 若索引越界，则返回 null ，代表空位
    if (i < 0 || i >= this.size()) return null;
    return this.#tree[i];
  }

  /* 获取索引为 i 节点的左子节点的索引 */
  left(i: number): number {
    return 2 * i + 1;
  }

  /* 获取索引为 i 节点的右子节点的索引 */
  right(i: number): number {
    return 2 * i + 2;
  }

  /* 获取索引为 i 节点的父节点的索引 */
  parent(i: number): number {
    return Math.floor((i - 1) / 2); // 向下整除
  }

  /* 层序遍历 */
  levelOrder(): number[] {
    let res = [];
    // 直接遍历数组
    for (let i = 0; i < this.size(); i++) {
      if (this.val(i) !== null) res.push(this.val(i));
    }
    return res;
  }

  /* 深度优先遍历 */
  #dfs(i: number, order: Order, res: (number | null)[]): void {
    // 若为空位，则返回
    if (this.val(i) === null) return;
    // 前序遍历
    if (order === "pre") res.push(this.val(i));
    this.#dfs(this.left(i), order, res);
    // 中序遍历
    if (order === "in") res.push(this.val(i));
    this.#dfs(this.right(i), order, res);
    // 后序遍历
    if (order === "post") res.push(this.val(i));
  }

  /* 前序遍历 */
  preOrder(): (number | null)[] {
    const res = [];
    this.#dfs(0, "pre", res);
    return res;
  }

  /* 中序遍历 */
  inOrder(): (number | null)[] {
    const res = [];
    this.#dfs(0, "in", res);
    return res;
  }

  /* 后序遍历 */
  postOrder(): (number | null)[] {
    const res = [];
    this.#dfs(0, "post", res);
    return res;
  }
}
```



## 二叉搜索树

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240724211811.png)

```ts
/* 查找节点 */
search(num: number): TreeNode | null {
    let cur = this.root;
    // 循环查找，越过叶节点后跳出
    while (cur !== null) {
        // 目标节点在 cur 的右子树中
        if (cur.val < num) cur = cur.right;
        // 目标节点在 cur 的左子树中
        else if (cur.val > num) cur = cur.left;
        // 找到目标节点，跳出循环
        else break;
    }
    // 返回目标节点
    return cur;
}

/* 插入节点 */
insert(num: number): void {
  // 若树为空，则初始化根节点
  if (this.root === null) {
      this.root = new TreeNode(num);
      return;
  }
  let cur: TreeNode | null = this.root,
      pre: TreeNode | null = null;
  // 循环查找，越过叶节点后跳出
  while (cur !== null) {
      // 找到重复节点，直接返回
      if (cur.val === num) return;
      pre = cur;
      // 插入位置在 cur 的右子树中
      if (cur.val < num) cur = cur.right;
      // 插入位置在 cur 的左子树中
      else cur = cur.left;
  }
  // 插入节点
  const node = new TreeNode(num);
  if (pre!.val < num) pre!.right = node;
  else pre!.left = node;
}

/* 删除节点 */
remove(num: number): void {
  // 若树为空，直接提前返回
  if (this.root === null) return;
  let cur: TreeNode | null = this.root,
      pre: TreeNode | null = null;
  // 循环查找，越过叶节点后跳出
  while (cur !== null) {
      // 找到待删除节点，跳出循环
      if (cur.val === num) break;
      pre = cur;
      // 待删除节点在 cur 的右子树中
      if (cur.val < num) cur = cur.right;
      // 待删除节点在 cur 的左子树中
      else cur = cur.left;
  }
  // 若无待删除节点，则直接返回
  if (cur === null) return;
  // 子节点数量 = 0 or 1
  if (cur.left === null || cur.right === null) {
      // 当子节点数量 = 0 / 1 时， child = null / 该子节点
      const child: TreeNode | null =
          cur.left !== null ? cur.left : cur.right;
      // 删除节点 cur
      if (cur !== this.root) {
          if (pre!.left === cur) pre!.left = child;
          else pre!.right = child;
      } else {
          // 若删除节点为根节点，则重新指定根节点
          this.root = child;
      }
  }
  // 子节点数量 = 2
  else {
      // 获取中序遍历中 cur 的下一个节点
      let tmp: TreeNode | null = cur.right;
      while (tmp!.left !== null) {
          tmp = tmp!.left;
      }
      // 递归删除节点 tmp
      this.remove(tmp!.val);
      // 用 tmp 覆盖 cur
      cur.val = tmp!.val;
  }
}
```

