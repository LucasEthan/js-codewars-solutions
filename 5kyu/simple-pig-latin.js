function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      const code = word[0].charCodeAt(0);
      if ((code >= 65 && code < 90) || (code >= 97 && code <= 122)) {
        return word.slice(1) + word[0] + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(pigIt("Hello world !"));
