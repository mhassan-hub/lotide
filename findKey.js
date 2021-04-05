const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


const eqObjects = function(object1, object2) {
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;
  
  if (object1Length === object2Length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const findKey = (object1, callback) => {

  for (let key in object1) {
    // console.log('this is the object key' + object[key])
    // console.log('this is the value' + value)
    // console.log('im looping')
    // console.log(object1[key])
    if (callback(object1[key]) === true) {
      // console.log(object1[key])
      return object1[key];
    } 
  }
  return undefined;
};

assertObjectsEqual(findKey(object1, x => x.stars === 2), { stars: 2 });