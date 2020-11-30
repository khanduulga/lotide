const head = require('../head');
const assert = require('chai').assert;

//Tests
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5)
  });
  it("returns 6 for [6,7,8]", () => {
    assert.strictEqual(head([6,7,8]), 6)
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined)
  });


});