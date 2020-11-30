const head = require('../head');
const assertEqual = require('../assertEqual');

//Tests
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,7,8]), 5);
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");
assertEqual(head([]), undefined);