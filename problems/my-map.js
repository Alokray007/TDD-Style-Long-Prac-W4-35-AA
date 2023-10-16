function myMap(inputArray, callback) {
  const mappedArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    mappedArr.push(callback(inputArray[i], i, inputArray));
  }
  return mappedArr;
}

module.exports = { myMap };
