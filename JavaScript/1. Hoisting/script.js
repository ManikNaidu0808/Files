var a=20;
let b=25;

// function ABC(a,b){
//     var a =1;
//     var b =10;
//     console.log(a,b)
// }
// ABC(8,4) //1 10

// =======================================

// function ABC(){
//     let a =1;
//     let b =10;
//     console.log(a,b)
// }
// ABC(8,4) //1 10
// =======================================

// function ABC(){
//     let a =1;
//     let a =10;
//     console.log(a,b)
// }
// ABC(8,4) //1 10
// SyntaxError: Identifier 'a' has already been declared
// ==========================================
// ABC(8,4) //1 10
// function ABC(){
//     let a =1;
//     let b =10;
//     console.log(a,b)
// }
  // =========================================
//   console.log(x); // ReferenceError: Cannot access 'hoistedLet' before initialization
// let x = 10;
// console.log(x); // Output: 10

// console.log(z); // ReferenceError: Cannot access 'hoistedConst' before initialization
// const z = 20;
// console.log(z); // Output: 20

// =========================================
// hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function

// var hoistedFunctionExpression = function() {
//     console.log("This function is not hoisted");
// };

// ========================================

// function outerFunction(a,b) {
//     console.log(a+b);

//     innerFunction(7,6); 

//     function innerFunction(a,b) {
//          b=4
//         console.log(a+b);
//     };
// }

// outerFunction(1,1);


function shiftDigits(n1, n2) {
  // Function to count frequency of each digit in a number
  function countDigits(num) {
      let counts = {};
      let digits = num.toString().split('').map(Number);
      digits.forEach(digit => {
          if (counts[digit] === undefined) {
              counts[digit] = 0;
          }
          counts[digit]++;
      });
      return counts;
  }

  // Function to find the most frequent and least frequent digits
  function findFrequentAndLeastFrequentDigits(num) {
      let counts = countDigits(num);
      let maxCount = -1;
      let minCount = Infinity;
      let mostFrequentDigit;
      let leastFrequentDigit;

      for (let digit in counts) {
          if (counts[digit] > maxCount) {
              maxCount = counts[digit];
              mostFrequentDigit = digit;
          }
          if (counts[digit] < minCount) {
              minCount = counts[digit];
              leastFrequentDigit = digit;
          }
      }

      return { mostFrequentDigit, leastFrequentDigit };
  }

  // Find the most and least frequent digits in n1 and n2
  let { mostFrequentDigit: mostFreqN1, leastFrequentDigit: leastFreqN1 } = findFrequentAndLeastFrequentDigits(n1);
  let { mostFrequentDigit: mostFreqN2, leastFrequentDigit: leastFreqN2 } = findFrequentAndLeastFrequentDigits(n2);

  // Replace the most frequent digit of n1 with the least frequent digit of n2
  n1 = parseInt(n1.toString().replace(new RegExp(mostFreqN1, 'g'), leastFreqN2));

  // Replace the most frequent digit of n2 with the least frequent digit of n1
  n2 = parseInt(n2.toString().replace(new RegExp(mostFreqN2, 'g'), leastFreqN1));

  return { n1, n2 };
}

// Example usage:
let n1 = 13145;
let n2 = 455;
let result = shiftDigits(n1, n2);
console.log("n1 =", result.n1); // Output: n1 = 3454
console.log("n2 =", result.n2); // Output: n2 = 5511
