'use strict';
//? Using strict mode is a good practice as it helps you write cleaner, safer, and more optimized JavaScript code by catching common mistakes and preventing certain actions that are considered unsafe or error-prone.
//* Eliminates Silent Errors: 
// x = 3.14; // Error: x is not defined

// ==========================================================================================================
//* Eliminates `this` coercion
// var myVar = 5;
// myVar = 10; // This is fine
// console.log(myVar)

// ==========================================================================================================
//* Eliminates `this` coercion
// function myFunction() {
    //     console.log(this); // Outputs: undefined
    // }
    // myFunction();

// ==========================================================================================================
//* Disallows duplicate parameter names
// function myFunction(a, a, b) { // Error: Duplicate parameter name not allowed in this context
// }

// ==========================================================================================================
//* Disallows octal syntax
// var num = 015; // Error: Octal literals are not allowed in strict mode

// ==========================================================================================================
//* Disallows `with` statements
// with (Math) { // Error: Strict mode code may not include a with statement
    // var x = cos(2);