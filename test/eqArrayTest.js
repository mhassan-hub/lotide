const assert = require('chai').assert
const eqArrays = require('../eqArrays');

describe("#eqArray", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns false for [1, 2, 3], [3, 2, 1]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
  it("returns true for ['1', '2', '3'] and ['1', '2', '3'] ", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for ['1', '2', '3'] and ['1', '2', '3'] ", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
});
// eqArrays(eqArrays([1, 2, 3], [1, 2, 3]), true);
// eqArrays(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// eqArrays(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true

// eqArrays(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false