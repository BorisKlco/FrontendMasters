let nums = [1, 5, 7, 4, 2, 3, 6];

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const len = nums.length;
  const mid = Math.floor(len / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  const sortLeft = mergeSort(left);
  const sortRight = mergeSort(right);

  return merge(sortLeft, sortRight);
};

const merge = (left, right) => {
  const res = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  return res.concat(left, right);
};

console.log(mergeSort(nums));
