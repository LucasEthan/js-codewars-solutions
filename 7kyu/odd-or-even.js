#!/usr/bin/env node

function oddOrEven(array) {
  let sum = array.reduce((num, total) => num + total, 0); 

  if (!(sum % 2)) {
    return "even";
  } else {
    return "odd";
  }
}

ary = []
console.log(oddOrEven(ary))
