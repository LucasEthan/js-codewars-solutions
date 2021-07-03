#!/usr/bin/env node

// function disemvowel(str) {
  // return str.replace(/[aeiou]/gi, "");
// }

// console.log(disemvowel("This website is for losers LOL!"));

   function disemvowel(str) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
      let vowels = "aeiou";
      if (!vowels.includes(str[i].toLowerCase())) {
        newString += str[i];
      }
    }
    return newString;
  }

console.log(disemvowel("This website is for losers LOL!"));