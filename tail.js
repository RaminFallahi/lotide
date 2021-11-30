const assertEqual = require("./assertEqual");
const head = require("./head")

const tail = function(words) {
  const result = []
  for (let i = 1; i < words.length; i++) {
    let element = words[i]
    result.push(element)
  }
  return result
};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words))
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); 
module.exports = tail;