function nestedAdd(sum, array) {
    if (Array.isArray(array[0])) {
      sum += nestedAdd(0, array[0]);
      array.shift();
      return nestedAdd(sum, array);
    } else if (array.length !== 0) {
      sum += array.shift();
      return nestedAdd(sum, array);
    } else {
      return sum;
    }
  }

  console.log('6',nestedAdd(0, [1, 2, 3]))
  console.log('6',nestedAdd(0, [1, [2], 3]))
  console.log('5',nestedAdd(0, [[[[[[[[[5]]]]]]]]]))
  console.log('94',nestedAdd(0, [10, [12, 14, [1], [16, [20]]], 10, 11]))