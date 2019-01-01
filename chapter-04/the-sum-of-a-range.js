function range(start, end, step = 1) {
  step = Math.abs(step);
  let result = [];

  if (start > end) {
    for (start; start >= end; start -= step) {
      result.push(start);
    }
    return result;
  }

  for (start; start <= end; start += step) {
    result.push(start);
  }
  return result;
}

function sum(numbers) {
  let total = 0;
  for (number of numbers) {
    total += number;
  }
  return total;
}
