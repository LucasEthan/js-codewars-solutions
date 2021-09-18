function findMissingLetter(array) {
  let prevLetter = array[0];

  for (let i = 1; i <= array.length; i++) {
    let currLetter = array[i];
    if (currLetter.charCodeAt(0) != prevLetter.charCodeAt(0) + 1) {
      return String.fromCharCode(prevLetter.charCodeAt(0) + 1);
    }
    prevLetter = currLetter;
  }
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));
