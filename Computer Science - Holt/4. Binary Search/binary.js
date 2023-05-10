const lookingForThis = { id: 23, name: "Brian" };
const searchingIn = [
  { id: 1, name: "Sam" },
  { id: 3, name: "Sarah" },
  { id: 5, name: "John" },
  { id: 6, name: "Burke" },
  { id: 10, name: "Simona" },
  { id: 12, name: "Asim" },
  { id: 13, name: "Niki" },
  { id: 15, name: "Aysegul" },
  { id: 17, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 19, name: "Marc" },
  { id: 21, name: "Chris" },
  lookingForThis,
  { id: 24, name: "Ben" },
];

const binSearch = (lookingFor, array) => {
  let low = 0;
  let high = array.length;
  let mid;
  console.log("Length:", array.length);

  while (low < high) {
    mid = Math.floor(low + (high - low) / 2);
    console.log("Mid:", mid, " - ", "ID:", array[mid].id);
    if (array[mid].id === lookingFor) {
      return array[mid];
    } else if (array[mid].id < lookingFor) {
      low = mid + 1;
      console.log(" Setting low:", low);
    } else {
      high = mid;
      console.log(" Setting high:", high);
    }
  }

  return -1;
};

binSearch(23, searchingIn);
