const assert = require('chai').assert;
const assertEqual = require('../assertEqual');


describe("#assertEqual", () => {
  it("returns true for (1, 1)", () => {
    assert.isTrue(assertEqual(1, 1), true);
  });
  it('returns false for (Lighthouse Labs, Bootcamp )', () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"), false); 
  });
});

