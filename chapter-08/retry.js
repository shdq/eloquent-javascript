class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  try {
    let result = primitiveMultiply(a, b);
    if (Object.prototype.toString.call(result) === "[Object Error]") {
      result = primitiveMultiply(a, b);
    }
    return result;
  } catch (e) {
    return reliableMultiply(a, b);
  }
}

console.log(reliableMultiply(8, 8));
// → 64
