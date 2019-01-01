function reverseArray(array) {
  let resultArray = [];
  for (let element of array) {
    resultArray.unshift(element);
  }
  return resultArray;
}

function reverseArrayInPlace(array) {
  let value;
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    value = array[i];
    array[i] = array[j];
    array[j] = value;
  }
  return array;
}
