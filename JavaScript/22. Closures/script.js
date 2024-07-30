//! Closures
//* A closure is a function that has access to its own scope and the scope of its parent functions
//* Closure remember its environment.

// function outer(){
//     let a = 20;
//     let b = 40;
//     let inner = function(){
//         console.log("Inner",a,b);
//     }
//     // inner();
//     return inner;
// }
// // outer();
// // console.log(a,b) //!ReferenceError: a is not defined

// let result = outer();
// console.dir(result)
// result();


//========================================================================================================
// let a = 43;
// setTimeout(function(){
//     console.log(a)
// })
// a = 525;
// Simple concept hai closures mai hum variable ke value ni rakhte hain , value je references rakhte hai
//========================================================================================================
function multiplier(x){
        let fn = function(y){
            return x*y
        }
        return fn;
}
let result = multiplier(2)
console.log(result);
console.log(result(5))

// console.log(multiplier(2)(6));
// console.dir(result)
//========================================================================================================
//! with the help of closures we can make some field private and public
//? person1.firstName or person1.lastName we will undefined
//  publically exposed property is only  "getFullName". Others don't know about the parameters(firstName,lastName,age) and  firstName +" "+lastName; is accessible because of closure
// function Person(firstName,lastName,age){
//     this.getFullName = function(){
//         return firstName +" "+lastName;
//     }
// }

// let person1 = new Person("John" , "Doe", 44)
// console.log(person1)
//========================================================================================================



// function outerFunction() {
//     var outerVar = "I am an outer variable";   
//     return function innerFunction() {
//         console.log("Here I am : "+outerVar+" : in inner scope"); // Accessible here even after outerFunction has returned
//     }
// }
// // Store the returned function in a variable
// const inner = outerFunction();
// // Call the stored function, which is the closure
// inner(); // "I am an outer variable"


//? Example Without Storing the Closure
// function outerFunction() {
//     var outerVar = "I am an outer variable";
//     return function innerFunction() {
//         console.log("Here I am : "+outerVar+" : in inner scope");
//     }
// }
// outerFunction() is called, but the returned function is not stored or executed
// outerFunction()(); // Nothing happens
//* In this example, calling outerFunction() creates the innerFunction but doesn't store it or execute it. The returned function is immediately lost, and you can't call it later.

//? Benefits of Storing the Closure
//* Preservation of State: By storing the closure, you maintain access to the scope in which it was created. This allows the inner function to access variables defined in the outer function even after the outer function has finished executing.
//* Deferred Execution: You can decide when to execute the inner function, which can be useful for event handling, callbacks, or other asynchronous operations.
//* Encapsulation: Closures can help encapsulate and manage state, providing a way to create private variables and functions.

//? Practical Usage
//* Event Handlers: Storing event handler functions that need access to the context in which they were created.
//* Callbacks: Creating callbacks that remember the context in which they were set up.
//* Modules: Implementing module patterns to create private variables and methods.

// function setupCounter() {
//     let count = 0;
//     return{ 
//         incrementCounter: function () {
//         count++;
//         console.log(count);
//     },
//     decrementCounter: function (){
//         count--;
//         console.log(count)
//     }
// };
// }

// const counter = setupCounter();

// document.getElementById('incrementButton').addEventListener('click', counter.incrementCounter);
// document.getElementById('decrementButton').addEventListener('click', counter.decrementCounter);
// Each click on the button will log an incremented count