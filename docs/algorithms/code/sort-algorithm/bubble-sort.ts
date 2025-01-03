// 冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 解读：冒泡排序的思想是通过多次比较相邻元素，将较大的（或较小的）元素逐步“冒泡”到数组的一端，直到整个序列有序
