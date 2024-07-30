//! 1.Global Scope
//* In JavaScript, global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code
//* Variables declared outside any function or block are in the global scope. These variables are accessible from anywhere in the code.

// var globalScope = 'I am global scope';
// function displayGlobalScope (){
//     console.log(globalScope);   
// }
// displayGlobalScope(); 
// console.log(globalScope); // Accessible here too

//! 2.Function Scope
// //* Variables declared within a function are in the function scope. These variables are only accessible within that function.
// function myFunctionScope(){
//     var functionScope = 'I am in local scope';
//     console.log(functionScope);
// }
// myFunctionScope();
// console.log(functionScope); //ReferenceError: functionScope is not defined
//? The Concept of Variable Shadowing 
// Variable shadowing occurs when you declare a variable with the same name inside a local scope, effectively "hiding" the variable with the same name in a higher scope.
// This is similar to placing an object with the same name in multiple rooms, and the one in the inner room takes precedence when you try to access it.

// var message = "Global message";
// function showMessage() {
//   var message = "Local message"; // This "shadows" the global variable
//   console.log(message); // Accessing the local variable
// }
// showMessage();
// console.log(message); // Accessing the global variable


//! 3.Block Scope
//* Variables declared with let or const inside a block (a pair of curly braces {}) are in the block scope. These variables are only accessible within that block.
//* block scope is created within specific code blocks, such as conditional statements (if, else, switch) and loops (for, while).
//* Variables declared in block scope are confined to that block, offering a high degree of isolation.
// if(true){
//     const ifBlockVariable = "I am in ifBlockVariable"
//     console.log(ifBlockVariable)
// }
// console.log(ifBlockVariable); //ReferenceError: ifBlockVariable is not defined

//? Differences between Block Scope and Local/function Scope
//* Block scope is often confused with Local/function scope, but there's a key distinction
//* In Local/function scope, variables are typically defined within a function, while block scope is created within code blocks like if, for, or while statements.
//* Local/function scope is function-level, meaning it encompasses the entire function, while block scope is limited to the specific block where the variable is declared.
// function myFunction() {
//     if (true) {
//       var localVariable = "1st - I'm in block scope";
//       let blockVariable = "2nd - I'm also in block scope";
//       const constVariable = "3rd - I'm also in block scope";
//     }
//     console.log(localVariable); // Accessible
//     console.log(blockVariable); // Error: blockVariable is not defined
//     console.log(constVariable); // Error: constVariable is not defined
//   }
//   myFunction();
//   console.log(localVariable); //ReferenceError: localVariable is not defined
//* In this example, localVariable is accessible within the function because it's in local scope. On the other hand, blockVariable is accessible only within the if block due to block scope.

//? Block Scope in Conditional Statements and Loops
function checkCondition() {
    let result = "Before condition";
    if (true) {
      let  result = "Inside condition"; // Block-scoped variable
    }
    console.log(result); // "Before condition" from the outer scope
  }
  checkCondition()


//! 4.Lexical Scope / Scope Chain.
// const globalVariable = "I'm global variable";
// function outerFunction() {
//   const outerVariable = "I'm in outer scope";
//   function innerFunction() {
//     const innerVariable = "I'm in inner scope";
//     console.log(innerVariable); // Access innerVariable
//     console.log(outerVariable); // Access outerVariable
//     console.log(globalVariable); // Access globalVariable
//   }
// innerFunction();
// }
// outerFunction();

//* The scope chain in JavaScript follows a principle known as lexical (or static) scoping.
//* Lexical scoping means that the scope of a function is determined by where the function is declared, not where it's called
// const a = "I'm global";
// function firstFunction() {
//     const a = "I'm in firstFunction";
//   function secondFunction() {
//     // console.log(a); // Accesses a from firstFunction, not the global a
//     console.log(a);
// }
// secondFunction();
// }
// // console.log(a); // "I'm global"
// console.log(a); // I'm in firstFunction
// firstFunction();

//! 6.Module Scope
//* In modern JavaScript, using ES6 modules, each module has its own scope. Variables, functions, and classes declared in a module are not accessible outside unless explicitly exported.
// import { moduleVar } from './myModule.js';
// console.log(moduleVar); // Accessible here


//! Hoisting
//* Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. This means that variable and function declarations are processed before any code is executed.
// console.log(hoistedVar); // undefined
// var hoistedVar = "I am hoisted";

// hoistedFunction(); // "I am hoisted"
// function hoistedFunction() {
//     console.log("I am hoisted");
// }

// console.log(hoistedVariable); // ReferenceError: Cannot access 'hoistedVariable' before initialization
// let hoistedVariable = "I am hoisted";

// console.log(hoistedVariable); // ReferenceError: Cannot access 'hoistedVariable' before initialization
// const hoistedVariable = "I am hoisted";


//! Closures
//* A closure is a function that has access to its own scope and the scope of its parent functions

// function outerFunction() {
//     var outerVar = "I am an outer variable";   
//     return function innerFunction() {
//         console.log(outerVar); // Accessible here even after outerFunction has returned
//     }
// }
// Store the returned function in a variable
// const inner = outerFunction();
// Call the stored function, which is the closure
// inner(); // "I am an outer variable"


//? Example Without Storing the Closure
// function outerFunction() {
//     var outerVar = "I am an outer variable";
//     return function innerFunction() {
//         console.log(outerVar);
//     }
// }
// outerFunction() is called, but the returned function is not stored or executed
// outerFunction(); // Nothing happens
//* In this example, calling outerFunction() creates the innerFunction but doesn't store it or execute it. The returned function is immediately lost, and you can't call it later.

//? Benefits of Storing the Closure
//* Preservation of State: By storing the closure, you maintain access to the scope in which it was created. This allows the inner function to access variables defined in the outer function even after the outer function has finished executing.
//* Deferred Execution: You can decide when to execute the inner function, which can be useful for event handling, callbacks, or other asynchronous operations.
//* Encapsulation: Closures can help encapsulate and manage state, providing a way to create private variables and functions.

//? Practical Usage
//* Event Handlers: Storing event handler functions that need access to the context in which they were created.
//* Callbacks: Creating callbacks that remember the context in which they were set up.
//* Modules: Implementing module patterns to create private variables and methods.

function setupCounter() {
    let count = 0;
    return{ 
        incrementCounter: function () {
        count++;
        console.log(count);
    },
    decrementCounter: function (){
        count--;
        console.log(count)
    }
};
}

const counter = setupCounter();

document.getElementById('incrementButton').addEventListener('click', counter.incrementCounter);
document.getElementById('decrementButton').addEventListener('click', counter.decrementCounter);
// Each click on the button will log an incremented count