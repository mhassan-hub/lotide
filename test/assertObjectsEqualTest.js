const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {
  it("returns false for ab = { a: '1', b: 2 }  and { b: 2, a: '1' }", () => {
    assert.isTrue(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }), true);
  });
});




