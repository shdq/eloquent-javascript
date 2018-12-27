const Group = require('./groups');

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if(this.index === this.group.values.length) return { done: true };
    const value = this.group.values[this.index];
    this.index++;
    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function() {
   return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c