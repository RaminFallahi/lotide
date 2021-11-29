const assertEqual = require('./assertEqual');
/////////////////////////////////////////////////////////////////////////////////
const eqArrays = require("./eqArrays")
///////////////////////////////////////////////////////////////////////////////////
const middle = function(arr) {
  let devideIndex = arr.length / 2
  if(arr.length % 2 === 0 && arr.length > 3) {
    return [arr[devideIndex-1], arr[devideIndex]]
  }
  else if (arr.length > 2) {
    let index = Math.ceil(devideIndex)
    return [arr[index-1]]
  }
  else return []
}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

