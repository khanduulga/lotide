// ASSERT IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉️🎉️🎉️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀️👀️👀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const head = function(array) {
  return array[0];
}




assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,7,8]), 5);
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");
assertEqual(head([]), undefined);