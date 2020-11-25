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


//FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return []
  } else if (array.length % 2 === 1) {
    return [array[(array.length - 1) / 2 ]];
  } else {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
}


//TESTS
assertArraysEqual(middle([1]),  [])// => []
assertArraysEqual(middle([1, 2]), [])// => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])// => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])// => [3, 4]