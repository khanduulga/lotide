const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Tests
const words = ["Hello", "World", "Sunny", "Day", "In", "Vancouver"];
tail(words);

assertEqual(words.length, 6);
assertEqual(tail(words).length, 5);
assertEqual(tail([]).length, 0);
assertEqual(tail([1]).length, 0);