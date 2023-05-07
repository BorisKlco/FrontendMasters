const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  const quickLeft = quickSort(left);
  const quickRight = quickSort(right);

  return quickLeft.concat(pivot, quickRight);
};

console.log(quickSort([10, 8, 2, 1, 6, 3, 9, 4, 7, 5]));
