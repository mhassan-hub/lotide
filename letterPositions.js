const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};


assertArraysEqual(letterPositions('hello').h, [0])
assertArraysEqual(letterPositions('hello').e, [1])
assertArraysEqual(letterPositions('hello').l, [2, 3])
assertArraysEqual(letterPositions('hello').o, [4])

module.exports = letterPositions;