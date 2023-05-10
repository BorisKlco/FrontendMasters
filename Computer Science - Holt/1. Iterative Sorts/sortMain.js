let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

// Insertion - return new array
function newArrayInsertion(nums) {
  let sortedArray = [nums[0]];
  for (let x = 1; x < nums.length; x++) {
    sortedArray.push(nums[x]);
    for (let y = sortedArray.length - 1; y > 0; y--) {
      if (sortedArray[y] < sortedArray[y - 1]) {
        let temp = sortedArray[y - 1];
        sortedArray[y - 1] = sortedArray[y];
        sortedArray[y] = temp;
      }
    }
  }

  return sortedArray;
}

console.log(`Insertion New Array: ${newArrayInsertion(nums)}`);

// Insertion - modify nums
function sameArrayInsertion(nums) {
  for (let x = 1; x < nums.length; x++) {
    for (let y = nums.slice(0, x).length; y > 0; y--) {
      if (nums[y] < nums[y - 1]) {
        let temp = nums[y - 1];
        nums[y - 1] = nums[y];
        nums[y] = temp;
      }
    }
  }
  return nums;
}

console.log(`Insertion: ${sameArrayInsertion(nums)}`);

nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]; //unsort

// Bubble Sort - modify nums
function bubbleSort(nums) {
  for (let x = 0; x < nums.length - 1; x++) {
    for (let y = 0; y < nums.length - 1 - x; y++) {
      if (nums[y] > nums[y + 1]) {
        let holder = nums[y + 1];
        nums[y + 1] = nums[y];
        nums[y] = holder;
      }
    }
  }
  return nums;
}

console.log(`bubbleSort: ${bubbleSort(nums)}`);
