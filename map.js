const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = map;

//TEST
// const words = ["ground", "control", "to", "major", "tom"];
// const nums = [1,2,3,4,5];
// const booleans = [true,true,false,true]

// const results1 = map(words, word => word[0]);
// const results2 = map(nums, num => num * 2);
// const results3 = map(booleans, boolean => !boolean);

// assertArraysEqual(results1, ['g','c','t','m','t']);
// assertArraysEqual(results2, [2, 4, 6, 8, 10]);
// assertArraysEqual(results3, [false,false,true,false]);
