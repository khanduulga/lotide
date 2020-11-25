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
const letterPositions = function(string) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (results[string[i]]) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  return results;
};


//TEST CASES
const testString = 'hello ll';
const testResult = letterPositions(testString);

assertArraysEqual(testResult['h'], [0])
assertArraysEqual(testResult['l'], [2,3,6,7])
assertArraysEqual(testResult['o'], [4])

