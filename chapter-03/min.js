function min(one, two) {
  if (typeof one != "number" || typeof two != "number") {
    return Error("One or both arguments are not a numbers");
  }
  if (one === two) {
    return Error("Numbers are equal");
  }
  if (one < two) {
    return one;
  }
  return two;
}
