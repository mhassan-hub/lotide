const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;