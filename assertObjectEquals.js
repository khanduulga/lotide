// HELPER FUNCTION
//takes two arrays and returns true if they are a perfect match
const eqArrays = function(first, second) {
  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      } 
    }
    return true;
  } else {
    return false;
  }

};


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

assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
assertObjectsEqual({a: 1, b: 2, c: 3}, {c: 3, b: 2, a: 1});
assertObjectsEqual({a: [1,2,3], b: 2, c: 3}, {c: 3, b: 2, a: 1});
assertObjectsEqual({a: [1,2,3], b: 2, c: 3}, {c: 3, b: 2, a: [1,2,3]});