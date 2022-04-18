function isPalindrome(word) {

  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here

  create a function that takes a string parameter
  
  reverse the string

  if the reversed string is the same as the input
  return true
  else
  return false
*/

/*
  Add written explanation of your solution here

  I need to create a function isPalindrome  which takes a string input. 
  If the input is read the same forward and backwards eg mom, the function should return true.
  if the input string is different when read forward and backwards, returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
