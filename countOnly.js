// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉️🎉️🎉️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀️👀️👀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  const countOnlyList = Object.keys(itemsToCount);

  for (let i = 0; i < countOnlyList.length; i++) {
    if (itemsToCount[countOnlyList[i]]) {
      for (const item of allItems) {
        if (countOnlyList[i] === item) {
          //CAN MAKE THIS VERY SHORT BY WRAPPING WHATS UNDER HERE WITH ONE IF STATEMENT IF (itemsToCount[item])
          if (results[item]) {
            results[item] += 1;
          } else {
            results[item] = 1;
          }
        }
      }
    }
  }
  return results;
}




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);