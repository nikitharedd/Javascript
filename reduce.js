//reduce() Array method
    //Returns a single value: the function's accumulated result, doesn't execute the function for empty array elements

//syntax
    // array.reduce(callback[,currentValue])
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
   
    //total* Required
    // The initialValue, or the previously returned value of the function
    
    //currentValue*Required.
    //The value of the current element.

   //Example 

   let nums = [1, 2, 3, 4, 5, 6];
   let sum = nums.reduce((result, item) => result + item);
   console.log(sum);
   //> 21

   //Example
   const string = ["Hello", " ", "world!"];
   const concat = string.reduce((result, item) => result + item);
   console.log(concat);
   //> "Hello world!"

   //Example (max number in array)
 
    function maxNum(numbers){
        return numbers.reduce((max, current) => {
            if(current > max){
                return current
            }
            return max;
            numbers[0]
        });
    }

    let numb = [4, 2, 9, 5, 7];
    let maxNumber = maxNum(numb);
    console.log(maxNumber);

