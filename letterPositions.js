const eqArrays = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};


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