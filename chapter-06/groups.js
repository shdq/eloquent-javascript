class Group {
  constructor() {
    this.values = new Array();
  }

  has(value) {
    if (this.values.indexOf(value) >= 0) return true;
    return false;
  }

  add(value) {
    if (!this.has(value)) this.values.push(value);
  }

  delete(value) {
    const index = this.values.indexOf(value);
    if (index === -1) {
      return;
    }
    this.values.splice(index, 1);
  }

  static from(array) {
    let group = new Group();
    array.forEach(element => {
      group.add(element);
    });
    return group;
  }
}

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// → true
// console.log(group.has(30));
// → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// → false

module.exports = Group;
