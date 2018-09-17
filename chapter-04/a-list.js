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

// Recursive nth function that return N-th element of a list.

function nth(list, number = 0, count = 0) {
  let lst = list;
  number = Math.abs(number);

  if(number == count) {
    return lst.value;
  }

  if (lst === null) return undefined;
  lst = lst.rest;
  return nth(lst, number, ++count);
}