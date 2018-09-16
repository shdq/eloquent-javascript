// Array to List

function arrayToList(array) {
  let list = {};
  for(let i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  }
  return list;
}

function prepend(element, list) {
  let newList = {
    value: element,
    rest: list.rest === undefined ? null : list
  }
  return newList;
}

// List to array

function popList(list) {
  let newList = list.rest;
  return newList;
}

function listToArray(list) {
  let newList = list;
  let array = [];
  while(newList.rest != null) {
    array.push(newList.value);
    newList = popList(newList);
  }
  array.push(newList.value);

  return array;
}

// TODO: make nth recursive

function nth(list, number = 0) {
  let newList = list;
  number = Math.abs(number);
  let count = 0;
  while(count <= number) {
    if(count == number) return newList.value
    newList = popList(newList);
    if (newList === null) return undefined;
    count++;
  }
}