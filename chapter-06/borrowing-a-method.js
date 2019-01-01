let map = { one: true, two: true, hasOwnProperty: true };

// Option one
console.log({}.hasOwnProperty.call(map, "one"));
// Option two
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
