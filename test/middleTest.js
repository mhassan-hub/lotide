const assertArrayEqual = require('../assertArraysEqual');
const middle = require('../middle');



assertArrayEqual(middle([1]), []); // => []
assertArrayEqual(middle([1, 2]), []) ;// => []
assertArrayEqual(middle([1, 2, 3]), [2]); // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [3]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // => [3] // => [3]