//! What is a function?
//* A function is a named sequence of statements that performs a specific operation. Functions are used to break down a program into smaller, reusable pieces.

// function add(a, b) {
//     let sum = a + b; // statement 
//     return sum; // return
//   }
//   console.log(add(1, 2)); //3

// function hello() {
//     console.log("Hello World!");
// }
//    hello();
//   Just defining a function does nothing until it is invoked or called.



// function hello(name) {
//     console.log(`Hello ${name}!`);
//   }
//   hello("John"); //Hello John!


//! The actual values that are passed in the function are known as arguments while the variable that is declared in the function is known as a parameter.
// function message(user, message) {
//     console.log("User: " + user + " , Message: " + message);
//   }
//   message("Herry", "How are you?"); //User: Herry , Message: How are you?
//   message("John", "I'm fine.");  //User: John , Message: I'm fine.


//? When a number of arguments are less than parameters then the rest parameters will be undefined
//? when the number of arguments are more than parameters then extra arguments will be ignored

// function fullName(firstname, lastname) {
//    return firstname + " " + lastname;
//   }
//   fullName("Stephen", "Hawking"); // Stephen Hawking
//   fullName("Stephen", "William", "Hawking"); // Stephen William
//   fullName("Stephen"); // Stephen undefined


//! Javascript Function Return
// The function stops execution when reached to return statement even if there are more statements in the function after a return.
// The return value can be stored in a variable.
// function multiply(a, b) {
//     return a * b;
//   }
//   var value = multiply(4, 6);
//   console.log(value);

//* The return value can be placed anywhere in the function but as soon as the function finds a return statement it stops further execution of the code in a function.


//! Javascript Function Local Variable
// The variables that are defined inside the function have local scope. This means these variables can't be accessed outside the function.
// But a function can access the variable that is defined outside the function.
// function localVariable() {
//     let a = 10;
//     console.log("'a' inside function is " + a); //'a' inside function is 10
//   }
  
//   localVariable();
//   console.log("'a' outside function is " + typeof a); //'a' outside function is undefined



//! What is arrow function in JavaScript?
//? Arrow function is one of the features introduced in ES6 for writing better javascript.
//? Arrow function is similar to a function expression, but it does not have a name. It is written as a function expression with parenthesis.

// const add = (a, b) => { return a + b };
// console.log(add(5, 15));


//! Arrow Function Without return Keyword
// In the above example, a + b is returned using the return keyword, but when there is only a single statement in the arrow function then you can omit the return keyword and remove curly braces ( {} ) and it still works in the same way.
// const add = (a,b)=>a+b;
// console.log(add(1,1))



//! A self-calling function, also known as an Immediately Invoked Function Expression (IIFE), is a function that is defined and executed immediately after it is created. The primary purpose of an IIFE is to create a new scope to avoid polluting the global scope, which helps in avoiding conflicts between variables and functions.
// Basic Syntax

// (function() {
//  function body
// })();

// (() => {
// function body
// })();

// (function() {
//     const message = "Hello, India!";
//     console.log(message);
// })(); //Hello, India


//! Uses of IIFE
//? 1.Avoiding Global Scope Pollution: Variables and functions inside an IIFE are not accessible from the global scope.
// (function() {
//     const localVariable = "I'm local";
//     console.log(localVariable); // Output: I'm local
// })();
// console.log(localVariable); // ReferenceError: localVariable is not defined

//? 2.Creating a Module Pattern: IIFEs can be used to create modules that encapsulate private data and expose public methods.
// const counterModule = (function() {
//     let count = 0;
    
//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         }
//     };
// })();

// console.log(counterModule.increment()); // Output: 1
// console.log(counterModule.increment()); // Output: 2
// console.log(counterModule.decrement()); // Output: 1


//? 3.Executing Initialization Code: IIFEs are useful for running setup code that needs to be executed once.
// (function() {
//     console.log("Initialization code runs immediately.");
// })();

// Why Use IIFE?
// Isolation of Variables: It helps in isolating variables within a local scope, reducing the risk of variable name collisions.
// Cleaner Code: By limiting the scope of variables, it makes the code easier to manage and understand.
// Immediate Execution: Ensures that the code runs as soon as it is defined, which is useful for setup and initialization tasks.
// IIFEs are a powerful tool in JavaScript for managing scope and ensuring code runs immediately without affecting the surrounding code.


//! A callback function is a function that is passed into another function as an argument and is executed after some operation has been completed. Callback functions are a fundamental part of asynchronous programming in JavaScript, allowing you to perform operations after the completion of tasks such as network requests, file operations, or timers.

// function fetchData(callback){
//     setTimeout(()=>{
//         console.log("Data Fetched")
//         callback();
//     },5000)
// }
//     function processData(){
//         console.log("Processing Data")
//     }

// fetchData(processData);

//! Nested Callbacks and Callback Hell
//* When dealing with multiple asynchronous operations, you might end up with nested callbacks, leading to what's known as "callback hell"
// function firstOperation(callback) {
//     setTimeout(() => {
//         console.log("First operation");
//         callback();
//     }, 1000);
// }

// function secondOperation(callback) {
//     setTimeout(() => {
//         console.log("Second operation");
//         callback();
//     }, 1000);
// }

// function thirdOperation(callback) {
//     setTimeout(() => {
//         console.log("Third operation");
//         callback();
//     }, 1000);
// }

// firstOperation(() => {
//     secondOperation(() => {
//         thirdOperation(() => {
//             console.log("All operations completed");
//         });
//     });
// });
//* This code is hard to read and maintain. Promises and async/await can help to mitigate this issue:
// function firstOperation() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("First operation");
//             resolve();
//         }, 1000);
//     });
// }

// function secondOperation() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Second operation");
//             resolve();
//         }, 1000);
//     });
// }

// function thirdOperation() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Third operation");
//             resolve();
//         }, 1000);
//     });
// }

// firstOperation()
//     .then(secondOperation)
//     .then(thirdOperation)
//     .then(() => {
//         console.log("All operations completed");
//     });

//? Using Async/Await
// async function runOperations() {
//     await firstOperation();
//     await secondOperation();
//     await thirdOperation();
//     console.log("All operations completed");
// }

// runOperations();