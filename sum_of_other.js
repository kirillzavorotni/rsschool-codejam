module.exports = function sumOfOther(arr) {
  const sumElem = arr.reduce((acc, elem) => acc + elem);
  return arr.map(elem => sumElem - elem);
}
