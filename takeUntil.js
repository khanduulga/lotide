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

//TESTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
