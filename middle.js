const middle = (array) => {
  let middleArray = [];
  let halfLengthOddIndex =  Math.floor(array.length / 2);
  let halfLengthEvenIndex = array.length / 2;
  // console.log(halfLengthOddIndex)
  if (array.length < 3){
    return [];
  } else if (array.length % 2 === 0) {
    middleArray.push(array[halfLengthEvenIndex - 1], array[halfLengthEvenIndex]);

  } else {
    middleArray.push(array[halfLengthOddIndex]);
  }
  return middleArray;
};

module.exports = middle;
