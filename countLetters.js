// ASSERTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉️🎉️🎉️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀️👀️👀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//FUNCTION
const countLetter = function(string) {
  const results = {}

  for(const char of string) {
    if (results[char]) {
      results[item] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results
}





