let string = '';
let symbol;
let space = true;

for(let i = 1; i <= 64; i++) {
  space ? symbol = ' ' : symbol = '#';
  string += symbol;
  space = !space;
  if(i % 8 == 0) {
    string += `\n`;
    space = !space;
  }
}
console.log(string);