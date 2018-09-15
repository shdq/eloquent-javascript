function arrayToList(array) {
  let list = {};
  let memory = {
    value: array[array.length - 1],
    rest: null
  }
  for(let i = array.length - 2; i >= 0; i--) {
    list = {
      value: array[i],
      rest: memory
    }
    memory = list; 
  }
  return list;
}

function popList(list) {
  newList = list.rest;
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