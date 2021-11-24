// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual = expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
};
/////////////////////////////////////////////////////////////////////////////////
const eqArrays = function(arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
   //console.log(arr1[i])
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
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
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEquals(eqArrays([1, 2, 3], [1, 2, 3]), true ) 
assertEquals(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true ) 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false )
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

