//!  1. Write a function to reverse a given string without using built-in reverse methods?
// const reverse = (str)=>{
// let isReverse="";
// for(let i=str.length-1; i>=0; i--){
// isReverse = isReverse+ str[i];
// }
// return isReverse;
// }
// console.log(reverse("Manik"));


// it will reverse the array
// const array = ['interbiz',' better','place','to',' work'];
// array.reverse();
// console.log(array);

// const originalArray = ['interbiz',' better','place','to',' ewws'];
// const reversedArray = [...originalArray].reverse();
// console.log(reversedArray)

// const originalString = 'interbiz better place to work';
// const reversedString = originalString.split('').reverse().join('');
// console.log(reversedString);


//!  2. Given an array of products where each product has a name and a price, write a function that uses a filter method to return an  array containing only the products with a price less than or equal to 500.
// const products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 300 },
//     { name: "Smartwatch", price: 150 },
//    ];
   
//    const filterProduct = products.filter((e)=>{
//     return e.price<=500;
//    })
// console.log(filterProduct);


//! 3.Filter Unique Value from a given array?
// const numbers = [1,2,3,3,4,5,6,6,7,8,1,6,6];
// let uniqueValues = numbers.filter((currElem, index ,arr)=>{
//     return arr.indexOf(currElem) === index;
// })
// console.log(uniqueValues)

// numbers.forEach((currElem, index, arr) => {
//     console.log(`Current Element: ${currElem}`);
//     console.log(`Index: ${index}`);
//     console.log(`Index of currElem in array: ${arr.indexOf(currElem)}`);
//     console.log('------------------------');
//   });

// another method
// console.log([...new Set(numbers)]) 

// A Set in JavaScript is a collection of unique values.
// When we pass an array to the Set constructor, it removes all duplicate values, leaving us with a collection of unique numbers.
// [...new Set(numbers)]: This is called the spread operator or rest operator. It takes the Set of unique numbers and spreads them out into a new array.
// This is necessary because Sets are not arrays, and we often need to work with arrays in JavaScript.

//! 4.Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number?
// const number = [1,2,3,4,5];
// let result = number.map((currElem)=>{
//     if(currElem%2==0){
//         return currElem * currElem;
//     }else
//     return currElem;
// }) 
// console.log(result)



//! 5.Write a JS function that prints the letters ‘a’ through ‘z’ in the console. You should use loop to iterate through the letters and print each one on a new line?
// console.log('a'.charCodeAt())
// console.log('z'.charCodeAt())

// for(let i=97; i<=122;i++){
//     console.log(String.fromCharCode(i))
// }


//!6. Write a function to check if all the vowels are present in a string or not? If not then console which are not present.
// const checkVowels = (str)=>{
//     const vowels = 'aeiou';
//     const missingVowels = [];
//     for(let char of vowels){
//         if(!str.includes(char)){
//             missingVowels.push(char)
//         }
//     }
//     return missingVowels;

// }
// console.log(checkVowels('I m Interbiz'))


//!7. Write a function to count the number of vowels in a string?
// const countVowels = (str)=>{
//     let vowels = 'aeiou'
//     let count = 0;
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Haaaaapy"))
// console.log(countVowels("interbiz"))


//! 8. No. of Occurrenece of Character in a String
// let str = "Lets together make interbiz a better place to work"
// let characterToCount = 'e';
// let count = 0;

// for(let i=0; i<=str.length; i++){
//     if(str[i]===characterToCount){
//         count++;
//     }
//     }
// console.log(count);


//!9. WAF findlongest word that takes a string as input and returns the longest word in the string. If there are multiple longest words, return first one wncountered.
// const findLongestWord = (str)=>{
    // words = str.split(' ');
    // // console.log(words);
    // words = words.sort((a,b)=>b.length-a.length);
    // return words[0];   

    //? another method to solve with reduce()
    //? Whenever we want "single value" like(sumof number, average)etc. at that time we will use reduce.
//     words = str.split(' ');
//    return words.reduce((accum, currWord)=>(currWord.length > accum.length ?currWord:accum),"")
// }
// console.log(findLongestWord(" JavaScriptHTML&CSS is the best Courses in the world JavaScriptHTffsefsefesseML&CSS"))


//!10. WAF generateHash that generates a hash tag  from given input string.
//! The input string should be converted to a hashTag format , where each word is capitalized and concatenated together without whiteSpaces

// const generateHash = (str)=>{
//     str = str.split(" ");
//     // console.log(str);
//    str = str.map((curElem)=>curElem.replace(curElem[0],curElem[0].toUpperCase()))
//     // console.log(str)
//     str = `#${str.join('')}`;
//     // console.log(str)
//     return str;
// };
// console.log(generateHash("My name is interbiz company"));

//? Another Solution
// const generateHash = (str)=>{
//     str = str.split(" ");
//     str = str.map((curElem)=>curElem.charAt(0).toUpperCase() + curElem.slice(1))
//     console.log(str)
//     str = `#${str.join('')}`;
//     return str
// }
// console.log(generateHash("generates a hash tag  from given input string"));


//! 11 WAF called countChar that takes two parameter: a string and a character to count.The function should return the number of times the specified character appears in the string.

// const countChar = (word,char)=>{
//     word = word.toLowerCase();
//     char = char.toLowerCase();
//     totalCount = word.split("").reduce((accum, currElem)=>{ 
//             if(currElem === char){
//                 accum++;
//             }
//             return accum;
//      },0 )
//     return  totalCount;
// }

// console.log(countChar('Mississippi','i'))


//! 12 Sort an array of numbers in an ascending order.


// const sortAscending = (str)=>{
//     let result = str.sort((a,b)=>a-b)
//     return result;
// }
// console.log(sortAscending([551,975,2246,424,669,7014,301,114]))


//! 13.  WAF to determine whether given string is palindrome or not . A Palindrome is a word, phrase, number or sequence of characters  that reads the same forward and backward , ignoring space ,punctiation  and capitalization.

// const isPalindrome = (str)=>{
//     str = str.toLowerCase().replace(/\W/g,''); // it will also handle string like this ("A man, a plan, a canal, Panama"). Non-word will be replaced.
//     let reverse_str = str.split('').reverse().join('');
//     console.log(str)
//     return str === reverse_str ? true : false;
// }

// console.log(isPalindrome("A man, a plan, a canal, Panama"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("hello"))

// Note:
// .replace(/\W/g,''): Uses a replace method with regular expression (/\W/g,'') to remove all non-word characters from the String.
// Here \W any non-word character(eqivalent to  [^a-zA-Z0-9_])
// g flag perform global search , meaning it replaces all occurrences of non word characters in the string.


//! 14. WAF findMax that takes an array of numbers as input and returns the maximum number in the array.

//     const findMax = (str)=>{
//         // console.log(...str)
//         return Math.max(...str)
//     }

// console.log(findMax([1,3,5,9,2]))
// console.log(findMax([-10,-3,5,-9,-2]))


//!  15 WAF factorial that takes a non-negative integer num as input and returns its factorial. the factorial of non-negative integer n  denoted as n!, is the product of all positive integers less than or equal to n. the factorial of 0 is defined as 1

// const factorial = (str)=>{
//     let fact = 1;
//  for(let i=1; i<=str; i++){
//     console.log(i);
//     fact = fact * i;
//  }
//  return fact;
// }
// console.log(factorial(5)) //? 5*4*3*2*1 = 120
// console.log(factorial(4)) //? 24


// //! 16 WAF called  calculate average that takes an array of number as input and returns the average of those number.


// const calculateAverage = (arr)=>{
//  const total = arr.reduce((accum, curElem)=>(accum + curElem))
//     return total/arr.length;
// }
// console.log(calculateAverage([5,10,2,8]))
// console.log(calculateAverage([2,2,2,2,2]))

//! 17. WAF arrayAreEqual that takes two array arr1 and arr2 as input and return true if the arrays are equal (i.e conatin the same element in the same order) and false otherwise.

// const arrayAreEqual = (arr1,arr2)=>{
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//  return arr1.every((currElem,index)=> currElem === arr2[index])
// }
// console.log(arrayAreEqual([1,2,3],[1,2,3])) //true
// console.log(arrayAreEqual([1,2,3],[1,2,4])) //false
// console.log(arrayAreEqual([1,2,3],[1,2,3,4])) //false
// console.log(arrayAreEqual([9,8,2],[9,8,2])) //false
// console.log(arrayAreEqual([],[])) //true

//! 18 WAF that takes a number as input na returns the sum of its digits.

// const sumOfDigits = (num)=>{
//     let arr = Array.from(String(num), Number); // we will convert number into array, but it will give empty string. So , we will convert it to string, but when we will add it , it will concatinate, so we will give Number for proper Addition.
//     // console.log(arr);
//     let result =  arr.reduce((accum,curElem)=>accum = accum + curElem,0);
//     return result;
// }
// console.log(sumOfDigits(1234))
// console.log(sumOfDigits(4321))
// console.log(sumOfDigits(123456))


//! 19 WAF that takes an array  of integers as input and removes any duplicate elements , returning the new array with only the unique elements.
// const removeDuplicates = (arr)=>{
//     let result = ([...new Set(arr)])
//     return result;
// }
// console.log(removeDuplicates([1,2,3,4,1,5,2,6,3,7,2,9,6,4,8,8]))
// console.log(removeDuplicates([5,6,4,5,2,4,7,9,5,4,7,8,2,3,4,5,2]))
// console.log(removeDuplicates([1,2,3,-1,-2,-3,-1]))
// Note
// The new Set() Method in javascript creates a new Set object. A Set object is a collection of unique values. It can store any type of values, whether primitive values or object references.

//! 20 WAF to calculate the sum of squares of all elements in the array. For example , given the array[1,2,3] the function should return 14  because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14

// const sumOfSquares = (arr)=>{
//     return arr.reduce((accum , currElem) => (accum = accum + currElem * currElem),0)
// }
// console.log(sumOfSquares([1,2,3]))
// console.log(sumOfSquares([3,3,3]))

//! another solution
// const sumOfSquares = (arr)=>{
//  let sum = 0;
// for(let elem in arr){
//     sum = sum + elem * elem;
// }
// return sum;
// }                        
// console.log(sumOfSquares([1,2,3]))
// console.log(sumOfSquares([3,3,3]))


//! 21 Given an array of objects users, print fullname.
// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ram",lastName:"Das",age:50},
//     {firstName:"shyamam",lastName:"lal",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//     {firstName:"Ron",lastName:"Weasly",age:26},  
//   ];
// const output = users.map((e)=>(e.firstName+" "+e.lastName).toUpperCase())
// console.log(output);

//! print user of particular age along with their frequency.
// const output=users.reduce(function(accum,currElem){
//     if(accum[currElem.age]){
//         accum[currElem.age]++;
//     }else{
//         accum[currElem.age]=1;
//     }
//     return accum;
// },{})
// console.log(output);

//! 23 Print object having marks greater than 60 and rollNumber greater than 15.
// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55},
//     {name:"Lion",rollNumber:25,marks:40},
//     {name:"Owl",rollNumber:14,marks:25},
//     {name:"leopard",rollNumber:9,marks:45}
//    ];

//    const details= student.filter((x)=>x.marks>60 && x.rollNumber>15);
// console.log(details); 

// !Print sum of marks of all the student
// let total = student.reduce((accum, currElem)=>accum += currElem.marks,0);
// console.log(total);

//! List of all Name from array whose mark is more than 50.
// let result = student.filter((x)=>x.marks>50).map((x)=>x.name)
// console.log(result);

//! Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
// const totalMarks = student.map((num)=>{
//     if(num.marks<60){
//         num.marks = num.marks + 20
//     }
//     return num;
// }).filter((num)=>num.marks>60).reduce((acc,curr)=>acc+=curr.marks,0);

// console.log(totalMarks)


