function every(array, test) {
  let bool = true;
  array.forEach(element => {
    if(!test(element)) {
      bool = false;
      return;
    }
  });
  return bool;
}

function every1(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true