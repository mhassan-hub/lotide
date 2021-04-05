const assertEqual = require('./assertEqual');

const tail = (array) => {
  array = array.slice(1);
  console.log(array);
};

module.exports = tail;