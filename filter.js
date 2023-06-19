// filter() Array Method
    //Method creates a new array filled with elements that pass a test provided by a function, doesn't execute function for empty elements
    //filtered down to just the elements from the given array that pass the test implemented by the provided function.
  
   
  //syntax
    // array.filter(function(currentValue))
    // array.filter(function(currentValue, index, arr), thisValue),
    //index : Optional
    // arr: Optional
    //thisValue : Optional  

//Example
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter((num) => num%2 ==0);
console.log(evenNumbers);
// Array [2, 4, 6]

//Example
let names = ["John", "Alice", "Bob", "david"];
let lengthNames = names.filter((name) => name.length ==5);
console.log(names);
// Array ["John", "Alice", "Bob", "david"]

let arr = [{ name: "John", age: 25}, { name: "Alice"}, { age: 30}];
let filteredArr = arr.filter((obj) => obj.hasOwnProperty("age"));
console.log(filteredArr);
// Array [Object { name: "John", age: 25 }, Object { age: 30 }]



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