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



module.exports = findKey;