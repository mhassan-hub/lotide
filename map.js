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

const words = ["Goooood", "Morning", "Vietnaaaaam"];
const soccerPlayers = ['Ronaldo', 'Messi', 'MO Salah', 'Kante', 'Rooney'];
const randomList = ['2', '3', '6', '35', '78', '29293']
 
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);
// const map = (map, func) => {
  
// }
assertArraysEqual(map(words, word => word[0]), ['G', 'M', 'V']); // Passes
assertArraysEqual(map(soccerPlayers, player => player[0]), ['R', 'M', 'M', 'K', 'r']); //Fails
assertArraysEqual(map(soccerPlayers, player => player[0]), ['R', 'M', 'M', 'K', 'R']); //Passes
assertArraysEqual(map(randomList, num => num[0]), ['2', '3', '6', '3', '7', '2']); //Passes