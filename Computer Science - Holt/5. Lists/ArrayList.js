class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
    //
  }

  push(value) {
    this.length++;
    this.data[this.length] = value;
    return value + " at index " + this.length;
    //
  }

  pop() {
    this.length--;
    //
  }

  get(index) {
    if (index < 1 || index > this.length) {
      return "Out of Bounds";
    }
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
    return this.data;
  }
}

const newList = new ArrayList();
