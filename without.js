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
const without = function(array, remove) {
  let filtered = [];
  filtered = filtered.concat(array);
  for (let i = 0; i < array.length; i++){
    for (let r = 0; r < remove.length; r++) {
      if(array[i] === remove[r]) {
        filtered.splice(i, 1);
      }
    }
  }
  return filtered;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);