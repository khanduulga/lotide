# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @khanduulga/lotide`

**Require it:**

`const _ = require('@khanduulga/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: checks if both arrays are equal
* `assertEqual(actual, expected)`: checks if the primitive values are equal
* `assertObjectsEqual(actual, expected)`: checks if both objects are equal
* `countLetters(string)`: returns an object with each key being a letter from  given string and its value being how many times the letter occured
* `countOnly(allItems, itemsToCount)`: returns an object given a list, count only the items indicated by the itemsToCount object (eg. {'hello': true, 'hi': false})
* `eqArrays(actual, expected)`: checks if both arrays are equal, returns a boolean
* `eqObjects(actual, expected)`: checks if both objects are equal, returns a boolean
* `findKey(object, callback)`: returns the first key the callback returns a truthy value for
* `findKeyByValue(object, value)`: returns the first key that holds the given value
* `flatten(array)`: given an array, returns the array in a linear fashion going only 2 levels deep.
* `head(array)`: returns the first element in the array
* `letterPositions(string)`: given a string returns an object with each letter being a key and its value being a list of the string indicies which the letter occurs on.
* `map(array, callback)`: given an array and a callback, returns a new array after the callback is implemented to each item
* `middle(array)`: returns a list of the middle item(s) in the given list thats >=3 in length
* `tail(array)`: returns a list of the rest of the array without its head (or first element)
* `takeUntil(array, callback)`: returns a slice of the given array until the callback returns a truthy value
* `without(array, remove)`: given a remove array, returns the given array without elements that are the same as in the remove array

