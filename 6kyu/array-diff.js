function arrayDiff(a, b) {
  return a.filter(elem => !b.includes(elem))
}

console.log(arrayDiff([2, 4, 1], [4]));