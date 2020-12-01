const assertArraysEqual = require('./assertArraysEqual');

//FUNCTION
//returns a slice of the given array 
//until it finds a truthy value from the callback
const takeUntil = function(array, callback) {
  //FIRST TRY
  // let indexAtTruthy = 0;
  // for (let i = 0; i < array.length; i++) {
  //   if(callback(array[i])){
  //     indexAtTruthy = i;
  //   }
  // }
  // return array.slice(0, indexAtTruthy);
  //SECOND TRY (stops loop when found falsy)
  let result = [];
  let i = 0
  while (!callback(array[i])) {
    result.push(array[i]);
    i++;
  }
  return result;
}

module.exports = takeUntil;

//TESTS
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
