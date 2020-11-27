// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉️🎉️🎉️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀️👀️👀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION
//returns the first key for which the callback returns a truthy value
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};


//TEST
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"