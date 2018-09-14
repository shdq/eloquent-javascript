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