function intToRoman(num) {
  const thousands = Math.floor(num / 1000);
  let romanNums = "";

  switch (thousands) {
    case 1:
      romanNums += "M";
      break;
    case 2:
      romanNums += "MM";
      break;
    case 3:
      romanNums += "MMM";
      break;
  }

  num = num % 1000;
  const hundreds = Math.floor(num / 100);

  switch (hundreds) {
    case 1:
      romanNums += "C";
      break;
    case 2:
      romanNums += "CC";
      break;
    case 3:
      romanNums += "CCC";
      break;
    case 4:
      romanNums += "CD";
      break;
    case 5:
      romanNums += "D";
      break;
    case 6:
      romanNums += "DC";
      break;
    case 7:
      romanNums += "DCC";
      break;
    case 8:
      romanNums += "DCCC";
      break;
    case 9:
      romanNums += "CM";
      break;
  }

  num = num % 100;
  const tens = Math.floor(num / 10);

  switch (tens) {
    case 1:
      romanNums += "X";
      break;
    case 2:
      romanNums += "XX";
      break;
    case 3:
      romanNums += "XXX";
      break;
    case 4:
      romanNums += "XL";
      break;
    case 5:
      romanNums += "L";
      break;
    case 6:
      romanNums += "LX";
      break;
    case 7:
      romanNums += "LXX";
      break;
    case 8:
      romanNums += "LXXX";
      break;
    case 9:
      romanNums += "XC";
  }

  num = num % 10;

  switch (num) {
    case 1:
      romanNums += "I";
      break;
    case 2:
      romanNums += "II";
      break;
    case 3:
      romanNums += "III";
      break;
    case 4:
      romanNums += "IV";
      break;
    case 5:
      romanNums += "V";
      break;
    case 6:
      romanNums += "VI";
      break;
    case 7:
      romanNums += "VII";
      break;
    case 8:
      romanNums += "VIII";
      break;
    case 9:
      romanNums += "IX";
      break;
  }
  return romanNums;
}
