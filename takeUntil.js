const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = (array, callback) => {
  let positiveArray = [];
  
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (callback(num) === true) {
      break;
    } else {
      positiveArray.push(num);
    }
  }
  return positiveArray;
};


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);