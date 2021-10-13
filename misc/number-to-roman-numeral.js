function intToRoman(num) {
  let romanNums = "";

  const romanThousands = {
    0: "",
    1: "M",
    2: "MM",
    3: "MMM",
  };

  const romanHundreds = {
    0: "",
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "DM",
  };

  const romanTens = {
    0: "",
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
  };

  const romanOnes = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  };

  let thousands = Math.floor(num / 1000);
  num %= 1000;

  let hundreds = Math.floor(num / 100);
  num %= 100;

  let tens = Math.floor(num / 10);
  num %= 10;

  let ones = num;

  romanNums =
    romanThousands[thousands] +
    romanHundreds[hundreds] +
    romanTens[tens] +
    romanOnes[ones];

  return romanNums;
}

console.log(intToRoman(1492));
