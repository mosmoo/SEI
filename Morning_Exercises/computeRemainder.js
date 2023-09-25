/*-----------------------------------------------------------------
Challenge: 05-computeRemainder
Difficulty: Basic
Prompt:
- Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
- The first argument should be the dividend and the second argument should be the divisor.
- If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.
Examples:
computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------*/
// Your solution for 05-computeRemainder:

function computeRemainder(x,y){
    if (y === 0){
      return Infinity;
    }  let Remainder =  x % y;
    return Remainder;
  }
  computeRemainder(10,2);
  
//make a loop that subtracts the divisor from the dividend
// break the loop when I can no longer subtract from the divident without going below 0
//return the number that I was at when I couldn't subtract more

function computeRemainder(x,y){
    if (y === 0){
      return Infinity;
    }  
    while ( x - y >= 0){
        //dividend = divdend - divisor
        x -= y
    }
    return x;
  }
  computeRemainder(10,2);