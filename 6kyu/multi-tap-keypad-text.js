function presses(phrase) {
  const keypad = {
    1: "1",
    2: "ABC2",
    3: "DEF3",
    4: "GHI4",
    5: "JKL5",
    6: "MNO6",
    7: "PQRS7",
    8: "TUV8",
    9: "WXYZ9",
    0: " 0",
  };

  let presses = 0;

  for (let char of phrase.toUpperCase()) {
    for (let value of Object.values(keypad)) {
      const i = value.indexOf(char);
      if (i != -1) {
        presses += i + 1;
        break;
      }
    }
  }
  return presses;
}

console.log(presses("WHERE DO U WANT 2 MEET L8R"));