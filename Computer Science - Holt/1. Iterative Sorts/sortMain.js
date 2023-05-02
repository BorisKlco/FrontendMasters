// Bubble Sort
let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

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

  nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]; //unsort
  
  function insertion(nums) {
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
  
  console.log(`Insertion: ${insertion(nums)}`);