const  SCRIPTS = require('./data/scripts');

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let directions = countBy(text, char => {
    let direction = characterScript(char.codePointAt(0));
    return direction ? direction.direction : "none";
  }).filter(({name}) => name != "none");

  let total = directions.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No caracters with particular direction found";

  return directions.reduce((a, b) => a.count > b.count ? a : b).name;

}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
