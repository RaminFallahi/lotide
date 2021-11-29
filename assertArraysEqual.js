const eqArrays = require("./eqArrays")
///////////////////////////////////////////////////////////////////////////////////
const assertArraysEqual  = function(arr1,arr2) {
  if( eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Asseration Passed: ${arr1} === ${arr2}`);
  } else {
      console.log(`🛑🛑🛑 Asseration Failed: ${arr1} !== ${arr2}`);
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1]) 
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) 
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])  
assertArraysEqual([1, 2, 3], [1, 2, 3])// => should PASS