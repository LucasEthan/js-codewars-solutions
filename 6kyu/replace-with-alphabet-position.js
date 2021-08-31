function alphabetPosition(text) {
  let result = [];
  for (letter of text) {
    const code = letter.toLowerCase().charCodeAt(0);
    if (code >= 97 && code <= 122) {
      result.push(code - 96);
    }
  }
  return result.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
