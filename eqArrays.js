// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual = expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
};
///////////////////////////////////////////////////////////////////////////////////
const eqArrays = function(arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
   //console.log(arr1[i])
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
assertEquals(eqArrays([1, 2, 3], [1, 2, 3]), true ) 
assertEquals(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true ) 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false )
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS