//HELPER FUNCTION
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

// ASSERTION FUNCTION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🎉️🎉️🎉️ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`👀️👀️👀️ Assertion Failed: ${array1} !== ${array2}`)
  }
}

//our map function take two arguments:
//array to map and a callback function
//return a new array based on the results of callback
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5];
const booleans = [true,true,false,true]

const results1 = map(words, word => word[0]);
const results2 = map(nums, num => num * 2);
const results3 = map(booleans, boolean => !boolean);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, [2, 4, 6, 8, 10]);
assertArraysEqual(results3, [false,false,true,false]);
