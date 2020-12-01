const assertEqual = require('./assertEqual');

/*Implement the function findKeyByValue which takes 
in an object and a value. It should scan the object 
and return the first key which contains the given value.
 If no key with that given value is found, 
 then it should return undefined.*/
const findKeyByValue = function (obj, value) {
//  const allKeys = Object.keys(obj);
  for(const key in obj) {
    if(obj[key] === value) {
      return key;
    }
  }

}

module.exports = findKeyByValue;

 //TEST CASES
//  const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Queen's Gambit"), undefined);