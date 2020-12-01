const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;

//TEST CASES
// const testString = 'hello ll';
// const testResult = letterPositions(testString);

// assertArraysEqual(testResult['h'], [0])
// assertArraysEqual(testResult['l'], [2,3,6,7])
// assertArraysEqual(testResult['o'], [4])

