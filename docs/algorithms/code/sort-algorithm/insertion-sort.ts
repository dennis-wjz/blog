// 插入排序
function insertionSort(arr: number[]): number[] {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

// 解读：插入排序的思想是在未排序区间选择一个基准元素 ，将该元素与其左侧已排序区间的元素逐一比较大小，并将该元素插入到正确的位置