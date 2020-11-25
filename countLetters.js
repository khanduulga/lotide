// ASSERTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉️🎉️🎉️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀️👀️👀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//FUNCTION
const countLetters = function(string) {
  const results = {}
  
  for(const char of string) {
    if (char !== ' ') {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
}



const test1 = countLetters("Lighthouse Rules");
assertEqual(test1['L'], 1)
assertEqual(test1['i'], 1)
assertEqual(test1[' '], undefined)
assertEqual(test1['R'], 1)
assertEqual(test1['r'], undefined)
assertEqual(test1['u'], 2)
assertEqual(test1['s'], 2)
