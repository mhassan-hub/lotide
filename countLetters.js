const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');

const countLetters = function (sentence) {
  const letterCount = {};
  
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (!letterCount[letter]) {
        letterCount[letter] = 1;
      } else {
        letterCount[letter] ++;
      }
    }
  }
  return letterCount;
}

console.log(countLetters('lighthouse in the house'))

module.exports = countLetters;