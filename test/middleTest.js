const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); 
  });
});


// assertArrayEqual(middle([1]), []); // => []
// assertArrayEqual(middle([1, 2]), []) ;// => []
// assertArrayEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [3]
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // => [3] // => [3]