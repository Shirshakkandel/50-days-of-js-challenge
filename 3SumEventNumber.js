const sumOfEvens = arr => {
  // Write your code here []
  //check is arr is array
  if (Array.isArray(arr)) {
    //COMMENT:: sum of even number in arr using reduce method
    // console.log("it is array");
    // return arr.reduce((prev, curr) => {
    //   if (curr % 2 === 0) {
    //     return prev + curr;
    //   } else {
    //     return prev;
    //   }
    // }, 0);
    //COMMENT:: sum of even number in arr using for loop
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  } else {
    console.log("please provide valid array of number");
    return 0; //return 0 if arr is not array of number
  }
};

console.log(sumOfEvens(1));
console.log(sumOfEvens([1, 1, 1, 2, 2, 2, 3, 3, 3])); // Output: 6
console.log(sumOfEvens([])); // Output: 0
console.log(sumOfEvens([-5, 0, 5, -4, 1, 6, -3, 2, 7])); // Output:8
