const randomInRange = (min, max) => {
  // Write your code here
  //Algorithm for dice game(1-6)
  //1)random number [0,1) with Math.random() 1 is exclusive and 0 is inclusive
  //2)multiply by maxmin(6-1)=5 which will be [0,5)
  //3)Add min to floor value [0,1,2,3,4,5]+1= [1,2,3,4,5,6]
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(randomInRange(1, 10));  

// module.exports = randomInRange  
