function deepEqual(value1, value2) {
  if(value1 === value2) return true;
  
  if(typeof value1 === 'object' && typeof value2 === 'object') {
    if(value1 != null && value2 != null) {
      let keysOne = Object.keys(value1), keysTwo = Object.keys(value2);
      if (keysOne.length == keysTwo.length) {
        return(keysOne.every(key => deepEqual(value1[key], value2[key])));
      }
      return false;
    }
    return false;
  }
  return false;
}