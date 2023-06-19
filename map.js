// map() concept
//map() Array Method
 // creates a new array from calling a function for every array element. doesn't execute the function for empty elements(ES5)

//syntax
    // array.map(function(currentValue))
    // array.map(function(currentValue, index, arr)thisValue),
    //index : Optional
    // arr: Optional
    //thisValue : Optional

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//Example
let number = [1, 2, 3];
let newNumbers = number.map((num) => num + 1);
console.log(newNumbers);
//[2, 3, 4]

//Example
let fruits = ["apple", "banana", "cherry"];
let capitalFruits = fruits.map((fruit) =>fruit.toUpperCase());
console.log(capitalFruits);
// Array ["APPLE", "BANANA", "CHERRY"]

//Example
let nums = [2, 3, 4];
let sqrtArr = nums.map((num) => num*num);
console.log(sqrtArr);
//> Array [4, 9, 16]



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#try_it
/* 
Polyfill of Array.prototype.filter in core-js
Indexed collections
Array
Array.prototype.forEach()
Array.prototype.every()
Array.prototype.map()
Array.prototype.some()
Array.prototype.reduce()
TypedArray.prototype.filter()
*/