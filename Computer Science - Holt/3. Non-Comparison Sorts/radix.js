const getDigit = (num, place, longest) => {
  const string = num.toString();
  const size = string.length;

  const mod = longest - size;
  return string[place - mod] || 0;
};

const getLongest = (array) => {
  let longest = 0;

  for (let num of array) {
    const current = num.toString().length;
    longest = current > longest ? current : longest;
  }

  return longest;
};

const radixSort = (array) => {
  const longest = getLongest(array);

  const bucket = new Array(10).fill().map(() => []);

  for (let i = longest - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      bucket[getDigit(current, i, longest)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (bucket[j].length) {
        array.push(bucket[j].shift());
      }
    }
  }
  return array;
};

const nums = [
  20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
  3001, 1200, 633,
];

console.log(radixSort(nums));
