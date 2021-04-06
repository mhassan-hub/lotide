const assertEqual = require('./assertEqual');

const findKeyByValue = function (object, value) {
  for (let key in object) {
    // console.log('this is the object key' + object[key])
    // console.log('this is the value' + value)
    if (object[key] === value) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Better call saul"), undefined);

module.exports = findKeyByValue;