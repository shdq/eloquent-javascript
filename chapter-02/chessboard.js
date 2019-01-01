let string = "";
let symbol;
let space = true;
let size = 9;

for (let i = 1; i <= size * size; i++) {
  space ? (symbol = " ") : (symbol = "#");
  string += symbol;
  space = !space;
  if (i % size == 0) {
    string += `\n`;
    if (size % 2 == 0) space = !space;
  }
}

console.log(string);
