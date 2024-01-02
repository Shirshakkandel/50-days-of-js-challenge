/*
In this coding challenge, you will be implementing a function called 
randomInRange(min, max) that generates a random integer between a 
given minimum value (inclusive) and a maximum value (exclusive). 
The function should take two arguments, min and max, both of which are integers.
*/

/*
const randomInt = randomInRange(1, 10);
console.log(randomInt); // output: a random integer between 1 and 9
*/
const randomInRange = (min, max) => {
  // Write your code here
  //1)random number [0,1) with Math.random() 1 is exclusive and 0 is inclusive
  //2)multiply by max-min(10-1)=9 which will be [0,10)
  //3)Add min to value and use Math.floor to get whole number from min(inclusive) and max(exclusive)
  //4)[0,1,2,3,4,5,6,7,8,9]
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(randomInRange(1, 10));  

// module.exports = randomInRange  
