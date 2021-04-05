const assert = require('chai').assert;
const findKey = require('../findKey');
// const assertObjectsEqual = require('../assertObjectsEqual');

let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it("returns truthy values", () => {

    assert.deepEqual(findKey(object1, x => x.stars === 2), { stars: 2 });
  });
});
