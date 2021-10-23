function solution(roman) {
  let num = 0;

  if (roman.startsWith("MMM")) {
    num += 3000;
    roman = roman.slice(3);
  } else if (roman.startsWith("MM")) {
    num += 2000;
    roman = roman.slice(2);
  } else if (roman.startsWith("M")) {
    num += 1000;
    roman = roman.slice(1);
  }

  if (roman.startsWith("CM")) {
    num += 900;
    roman = roman.slice(2);
  } else if (roman.startsWith("DCCC")) {
    num += 800;
    roman = roman.slice(4);
  } else if (roman.startsWith("DCC")) {
    num += 700;
    roman = roman.slice(3);
  } else if (roman.startsWith("DC")) {
    num += 600;
    roman = roman.slice(2);
  } else if (roman.startsWith("D")) {
    num += 500;
    roman = roman.slice(1);
  } else if (roman.startsWith("CD")) {
    num += 400;
    roman = roman.slice(2);
  } else if (roman.startsWith("CCC")) {
    num += 300;
    roman = roman.slice(3);
  } else if (roman.startsWith("CC")) {
    num += 200;
    roman = roman.slice(2);
  } else if (roman.startsWith("C")) {
    num += 100;
    roman = roman.slice(1);
  }

  if (roman.startsWith("XC")) {
    num += 90;
    roman = roman.slice(2);
  } else if (roman.startsWith("LXXX")) {
    num += 80;
    roman = roman.slice(4);
  } else if (roman.startsWith("LXX")) {
    num += 70;
    roman = roman.slice(3);
  } else if (roman.startsWith("LX")) {
    num += 60;
    roman = roman.slice(2);
  } else if (roman.startsWith("L")) {
    num += 50;
    roman = roman.slice(1);
  } else if (roman.startsWith("XL")) {
    num += 40;
    roman = roman.slice(2);
  } else if (roman.startsWith("XXX")) {
    num += 30;
    roman = roman.slice(3);
  } else if (roman.startsWith("XX")) {
    num += 20;
    roman = roman.slice(2);
  } else if (roman.startsWith("X")) {
    num += 10;
    roman = roman.slice(1);
  }

  if (roman.startsWith("IX")) {
    num += 9;
    roman = roman.slice(2);
  } else if (roman.startsWith("VIII")) {
    num += 8;
    roman = roman.slice(4);
  } else if (roman.startsWith("VII")) {
    num += 7;
    roman = roman.slice(3);
  } else if (roman.startsWith("VI")) {
    num += 6;
    roman = roman.slice(2);
  } else if (roman.startsWith("V")) {
    num += 5;
    roman = roman.slice(1);
  } else if (roman.startsWith("IV")) {
    num += 4;
    roman = roman.slice(2);
  } else if (roman.startsWith("III")) {
    num += 3;
    roman = roman.slice(3);
  } else if (roman.startsWith("II")) {
    num += 2;
    roman = roman.slice(2);
  } else if (roman.startsWith("I")) {
    num += 1;
    roman = roman.slice(1);
  }
  return num;
}

console.log(solution("MMM"));
