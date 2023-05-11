class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
    //
  }

  push(value) {
    this.length++;
    this.data[this.length] = value;
    console.log(value + " at index " + this.length);
    return value + " at index " + this.length;
    //
  }

  pop() {
    console.log(this.length);
    this.length--;
    console.log(this.data, this.length);
    //
  }

  get(index) {
    if (index < 1 || index > this.length) {
      return "Out of Bounds";
    }
    console.log(this.data[index]);
    return this.data[index];
    //
  }

  delete(index) {
    if (index < 1 || index > this.length) {
      return "Out of Bounds";
    }
    this.length--;
    for (let x = index; x < this.length; x++) {
      this.data[x] = this.data[x + 1];
    }
    console.log(this.data);
    return this.data;
  }
}

const newList = new ArrayList();
//
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);
newList.push(8);
newList.push(9);
newList.push(10);
//
newList.get(1);
newList.get(2);
newList.get(3);
newList.get(4);
newList.get(5);
newList.get(6);
newList.get(7);
newList.get(8);
newList.get(9);
newList.get(10);
//
newList.delete(5);
//
newList.get(1);
newList.get(2);
newList.get(3);
newList.get(4);
newList.get(5);
newList.get(6);
newList.get(7);
newList.get(8);
newList.get(9);
newList.get(10);
//
newList.push("New 5");
//
newList.get(1);
newList.get(2);
newList.get(3);
newList.get(4);
newList.get(5);
newList.get(6);
newList.get(7);
newList.get(8);
newList.get(9);
newList.get(10);
//
newList.pop();
//
newList.get(1);
newList.get(2);
newList.get(3);
newList.get(4);
newList.get(5);
newList.get(6);
newList.get(7);
newList.get(8);
newList.get(9);
newList.get(10);
//
