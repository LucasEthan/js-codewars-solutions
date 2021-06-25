#!/usr/bin/env node

function oddOrEven(array) {
  sum = array.reduce((a, b) => a + b, 0);

  if (Math.abs((sum % 2)) == 1) {
    return "Odd";
  } if ((sum % 2) == 0) {
    return "Even";
  } else {
    return "Even";
  }
}
