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

const middle = (array) => {
  let middleArray = [];
  let halfLengthOddIndex =  Math.floor(array.length / 2);
  let halfLengthEvenIndex = array.length / 2
  // console.log(halfLengthOddIndex)
  if (array.length < 3){
    return [];
  } else if (array.length % 2 === 0) {
    middleArray.push(array[halfLengthEvenIndex - 1], array[halfLengthEvenIndex])

  } else if (array.length % 3 === 0) {
    middleArray.push(array[halfLengthOddIndex])
  }
  return middleArray
}


console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]