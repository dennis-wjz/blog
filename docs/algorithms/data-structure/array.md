---
title: 数组
customTag: algorithms>数据结构
date: 2024.06.24
editLink: true
---

# 数组

数组是一种线性结构，存储在连续的内存空间中，常用的操作有：

- 初始化数组

- 访问元素

- 插入元素

  ```typescript
  function insert(nums: number[], num: number, index: number): number[] {
    for (let i = nums.length; i > index; i--) {
      nums[i] = nums[i - 1];
    }
    nums[index] = num;
    return nums;
  }
  
  console.log(insert([1, 2, 3, 4], 5, 2)); // [ 1, 2, 5, 3, 4 ]
  ```

- 删除元素

  ```typescript
  function remove(nums: number[], index: number): number[] {
    for (let i = index; i < nums.length - 1; i++) {
      nums[i] = nums[i + 1];
    }
    return nums;
  }
  
  console.log(remove([1, 2, 3, 4], 1)); // [ 1, 3, 4, 4 ]
  ```

- 遍历数组

- 查找元素

- 扩容数组

典型应用有：快速排序、归并排序、二分查找
