function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code >= 97 && code <= 122;
    })
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."));