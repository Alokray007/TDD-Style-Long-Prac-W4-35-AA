module.exports = function reverseString(string) {
  let reversedString = "";
  if(typeof string === "string") {
    for (let i=string.length-1; i>=0; i--) {

      reversedString += string.charAt(i);
    }
  } else {
    throw new TypeError;
  }

  return reversedString;
};
