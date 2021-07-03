#!/usr/bin/env node

// function disemvowel(str) {
  // return str.replace(/[aeiou]/gi, "");
// }

// console.log(disemvowel("This website is for losers LOL!"));


  function disemvowel(str) {
    let newString = "";
    for (char of str) {
      let vowels = "aeiou";
      if (!vowels.includes(char.toLowerCase())) {
        newString += char;
      }
    }
    return newString;
  }

console.log(disemvowel("This website is for losers LOL!"));