const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

//Tests
const words = ["Hello", "World", "Sunny", "Day", "In", "Vancouver"];
tail(words);

// assertEqual(words.length, 6);
// assertEqual(tail(words).length, 5);
// assertEqual(tail([]).length, 0);
// assertEqual(tail([1]).length, 0);

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns ['World', 'Sunny', 'Day', 'In', 'Vancouver'] for ['Hello', 'World', 'Sunny', 'Day', 'In', 'Vancouver']", () => {
    assert.deepEqual(tail(["Hello", "World", "Sunny", "Day", "In", "Vancouver"]), ["World", "Sunny", "Day", "In", "Vancouver"]);
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), []);
  });
})