// 选择排序
function selectionSort(arr: number[]): number[] {
  const len = arr.length;
  let minIndex: number;
  // 外循环：未排序区间为 [i, len - 1]
  for (let i = 0; i < len - 1; i++) {
    // 内循环：在未排序区间中找到最小值的索引
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 交换未排序区间的第一个元素和最小值
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// 解读：选择排序的思想是每次从未排序区间中找到最小值，然后放到已排序区间的末尾。