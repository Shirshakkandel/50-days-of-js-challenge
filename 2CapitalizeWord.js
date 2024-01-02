/*
Implement a function called capitalizeWord(word) that capitalizes the first letter 
of the input string word and returns the capitalized string.
*/
/*
capitaliseWord('hello'); // Output: 'Hello'
capitaliseWord('mom'); // Output: 'Mom'
capitaliseWord('dAD'); // Output: 'DAD'
*/
const capitaliseWord = word => {
  //check if word is a string
  if (typeof word !== "string") {
    console.log("Please enter a string");
    return;
    //capitalize first letter of the  word
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
};

console.log(capitaliseWord(1));
console.log(capitaliseWord("hello")); // Output: 'Hello'
console.log(capitaliseWord("mom")); // Output: 'Mom'
console.log(capitaliseWord("dAD")); // Output: 'DAD'
