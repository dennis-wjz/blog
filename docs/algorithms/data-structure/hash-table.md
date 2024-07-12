---
title: 哈希表
customTag: algorithms>数据结构
date: 2024.07.09
editLink: true
---

# 哈希表

概念：哈希表（hash table），又称散列表，它通过建立键 `key` 与值 `value` 之间的映射，实现高效的元素查询。

常见操作：初始化、查询操作、添加键值对和删除键值对

```ts
/* 初始化哈希表 */
const map = new Map<number, string>();
/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map.set(12836, "小哈");
map.set(15937, "小啰");
map.set(16750, "小算");
map.set(13276, "小法");
map.set(10583, "小鸭");
console.info("\n添加完成后，哈希表为\nKey -> Value");
console.info(map);

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
let name = map.get(15937);
console.info("\n输入学号 15937 ，查询到姓名 " + name);

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.delete(10583);
console.info("\n删除 10583 后，哈希表为\nKey -> Value");
console.info(map);

/* 遍历哈希表 */
console.info("\n遍历键值对 Key -> Value");
for (const [k, v] of map.entries()) {
  console.info(k + " -> " + v);
}

for (const k of map.keys()) {
  console.info(k);
}
for (const v of map.values()) {
  console.info(v);
}
```



## 哈希函数

> **哈希函数工作原理：**

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240709155456.png)

> **哈希表：**		

```ts
/* 键值对 Number -> String */
class Pair {
  public key: number;
  public val: string;

  constructor(key: number, val: string) {
    this.key = key;
    this.val = val;
  }
}

/* 基于数组实现的哈希表 */
class ArrayHashMap {
  private readonly buckets: (Pair | null)[];

  constructor() {
    // 初始化数组，包含 100 个桶
    this.buckets = new Array(100).fill(null);
  }

  /* 哈希函数 */
  private hashFunc(key: number): number {
    return key % 100;
  }

  /* 查询操作 */
  public get(key: number): string | null {
    let index = this.hashFunc(key);
    let pair = this.buckets[index];
    if (pair === null) return null;
    return pair.val;
  }

  /* 添加操作 */
  public set(key: number, val: string) {
    let index = this.hashFunc(key);
    this.buckets[index] = new Pair(key, val);
  }

  /* 删除操作 */
  public delete(key: number) {
    let index = this.hashFunc(key);
    // 置为 null ，代表删除
    this.buckets[index] = null;
  }

  /* 获取所有键值对 */
  public entries(): (Pair | null)[] {
    let arr: (Pair | null)[] = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        arr.push(this.buckets[i]);
      }
    }
    return arr;
  }

  /* 获取所有键 */
  public keys(): (number | undefined)[] {
    let arr: (number | undefined)[] = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        arr.push(this.buckets[i]?.key);
      }
    }
    return arr;
  }

  /* 获取所有值 */
  public values(): (string | undefined)[] {
    let arr: (string | undefined)[] = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        arr.push(this.buckets[i]?.val);
      }
    }
    return arr;
  }

  /* 打印哈希表 */
  public print() {
    let pairSet = this.entries();
    for (const pair of pairSet) {
      console.info(`${pair?.key} -> ${pair?.val}`);
    }
  }
}

```

## 哈希冲突

多个输入对应同一输出的情况，因此我们经常会通过**扩容**来减少哈希冲突

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240710172423.png)

**哈希表的结构改良方法主要包括“链式地址”和“开放寻址”**

- 链式地址

  ![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240712141238.png)
- 开放寻址

  - 线性探测：线性探测采用固定步长的线性搜索来进行探测。
  - 平方探测：平方探测不是简单地跳过一个固定的步数，而是跳过“探测次数的平方”的步数，即 1,4,9,… 步。
  - 多次哈希：多次哈希方法使用多个哈希函数 𝑓1(𝑥)、𝑓2(𝑥)、𝑓3(𝑥)、… 进行探测。




## 哈希算法



常见的哈希算法有：（暂时没有很理解这些算法的应用场景）

- **加法哈希**：对输入的每个字符的 ASCII 码进行相加，将得到的总和作为哈希值
- **乘法哈希**：利用乘法的不相关性，每轮乘以一个常数，将各个字符的 ASCII 码累积到哈希值中
- **异或哈希**：将输入数据的每个元素通过异或操作累积到一个哈希值中
- **旋转哈希**：将每个字符的 ASCII 码累积到一个哈希值中，每次累积之前都会对哈希值进行旋转操作



常见的一些标准哈希算法:

|          |            **MD5**             |    **SHA-1**     |          **SHA-2**           |        SHA-3        |
| :------: | :----------------------------: | :--------------: | :--------------------------: | :-----------------: |
| 推出时间 |              1992              |       1995       |             2002             |        2008         |
| 输出长度 |            128 bit             |     160 bit      |         256/512 bit          | 224/256/384/512 bit |
| 哈希冲突 |              较多              |       较多       |             很少             |        很少         |
| 安全等级 |        低，已被成功攻击        | 低，已被成功攻击 |              高              |         高          |
|   应用   | 已被弃用，仍用于数据完整性检查 |     已被弃用     | 加密货币交易验证、数字签名等 |  可用于替代 SHA-2   |

