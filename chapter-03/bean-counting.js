let countChar = (string, char) => {
  let count = 0;
  for(let chr of string) {
    if(chr === char) count++;
  }
  return count;
}

let countBs = string => {
  return countChar(string, 'B');
}