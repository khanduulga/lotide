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
const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      result.push(array[i])
    } else {
        for (let j = 0; j < array[i].length; j++){
          result.push(array[i][j]);
        }
      }
  }
  return result;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);