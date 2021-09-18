function pigIt(str) {
  let words = str.split(" ");
  let pigLatinWords = [];

  for (let word of words) {
    const firstLetterCode = word[0].charCodeAt(0);

    if (
      (firstLetterCode >= 65 && firstLetterCode <= 90) ||
      (firstLetterCode >= 97 && firstLetterCode <= 122)
    ) {
      pigLatinWords.push(word.slice(1) + word[0] + "ay");
    } else {
      pigLatinWords.push(word);
    }
  }
  return pigLatinWords.join(" ");
}

console.log(pigIt("Hello world !"));
