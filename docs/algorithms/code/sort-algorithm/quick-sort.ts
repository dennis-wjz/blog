// 快速排序
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);                                    
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

// 解读：快速排序的思想是通过一趟排序将待排序数组分割成独立的两部分，其中一部分的所有元素都比另一部分的所有元素小，然后再按此方法对这两部分分别进行快速排序

// 没有很懂快速排序的思想 需重新学习