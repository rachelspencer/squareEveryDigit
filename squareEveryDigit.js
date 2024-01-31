// Welcome. In this kata, you are asked to square every digit of a number 
// and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, 
// because 9 squared is 81 and 1 squared  is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 7 squared  is 49, 
// 6 squared  is 36 , and 5 squared  is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num){
    const numArr = String(num).split("");
       
    return parseInt(numArr.map((num) => num ** 2 ).join(""), 10);
  };

console.log(squareDigits(9119));