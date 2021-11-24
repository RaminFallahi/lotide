// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual = expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
};
const head = function(array) {
  return array[0];
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["one"]), "one");
assertEqual(head([]), );
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");