//1. (_completed above_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a [ternary expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) -  the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));

//2. Define a function, as a function expression, `maxOfThree` that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function(num1,num2,num3){
    let max = num1
    if (num2 > max){
        max = num2
    }if(num3>max){
        max=num3
    }else {
        return max
    }
}
const result = maxOfThree(5, 9, 3)
console.log(result);


//3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel (char){
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        return true;
    } else {
        return false;
    }
}
console.log(isCharAVowel("a"));

//4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

const sumArray = function (arrayOfNums){
    let total =0;
    for (i=0; i <arrayOfNums.length; i++){
        total += arrayOfNums[i];
    }
    console.log(total);
}
sumArray([5,10,15]);

//5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

let product=1;
function multiplyArray(arrayNums){
    for (i=0; i < arrayNums.length; i++){
        product *= arrayNums[i];
    }
    return product;
}
multiplyArray([2,4,10]);
console.log(product);

//6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

const numArgs = function(arguments){
    console.log(arguments.length)
}
numArgs(["5", 10, "date"]);
//7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

function reverseString(string){
    let newString = "";
    for ( let i = string.length -1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}
console.log(reverseString("banana"));

//8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(stringArray){
    let longest = 0;
    for(i=0; i <stringArray.length; i++){
        if (stringArray[i].length >longest){
            longest = stringArray[i].length;
        }
    }
    return longest;
}
console.log(longestStringInArray(['apple', 'banana',"mostlikelythelongeststring"]))

//9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
function stringsLongerThan(arr,num){
    let result =[];
    for (i=0; i <arr.length; i++) {
        if (arr[i].length > num){
        result.push(arr[i])
        }
    }
    return result;
}
console.log(stringsLongerThan(['hello','there','stranger','wasgoood'] , 6));