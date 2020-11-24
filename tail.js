// ASSERTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉️🎉️🎉️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀️👀️👀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return array.slice(1, array.length);
};

const words = ["Hello", "World", "Sunny", "Day", "In", "Vancouver"];
tail(words);
assertEqual(words.length, 6);

console.log(tail(words));


assertEqual(tail(words).length, 5);
assertEqual(tail([]).length, 0);
assertEqual(tail([1]).length, 0);