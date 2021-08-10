function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      a.splice(i, 1);
    }
  }
  return a
}

console.log(arrayDiff([3, 4, 3], [3]));