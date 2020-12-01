const eqObjects = require('./eqObjects');


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`🎉️🎉️🎉️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👀️👀️👀️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//TEST
// assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
// assertObjectsEqual({a: 1, b: 2, c: 3}, {c: 3, b: 2, a: 1});
// assertObjectsEqual({a: [1,2,3], b: 2, c: 3}, {c: 3, b: 2, a: 1});
// assertObjectsEqual({a: [1,2,3], b: 2, c: 3}, {c: 3, b: 2, a: [1,2,3]});