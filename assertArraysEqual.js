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
}

const assertArrayEqual = (array1, array2) =>{
  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
    }
  };
}