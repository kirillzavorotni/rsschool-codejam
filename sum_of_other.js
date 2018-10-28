function sumOfOther (arr) {
  let sumElem = arr.reduce((acc, elem) => acc + elem);
  return arr.map(elem => sumElem - elem);
}