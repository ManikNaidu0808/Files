
//! object literal : object.prototype
//? When we are making object using object literal ,it will provide javascript object tempelate (object.prototype)
//? Whatever object i have made I cannot change object literal prototype by using constructor or with the help of constructor i can change prototype
// let obj = {
//     name:"Manik",
//     age:25,
//     occupation:"Software Engineer",
// }
// console.log(obj)

//! To check "city" property name is present or not
// console.log("city" in obj) // it will give or false


// ======================================================================
//? When i am using constructor it is making its own prototype and constructor

// function Obj(givenName){
//     this.name = givenName
// }
// let obj1 = new Obj("Rock");
// console.log(obj1)

//! With the help of constructor when we are making new prototype , What if i can able to change prototype?
//! So always edit your object prototype which you have made using constructor (As shown below)
// function Obj(givenName){
//     this.name = givenName;
// }
// //  Obj.prototype.getName = function(){
// //     return this.name;
// //  }
// //  let obj2 = new Obj("Goldberg");
// //  console.log(obj2); 
// //  console.log(obj2.toString())
// //  console.log(obj2.hasOwnProperty())

//  Obj.prototype.setName = function(newName){
//     this.name = newName
//  }
// let obj2 = new Obj("Reymisterio");
// console.log(obj2)


// ==================================================================================
//! I want to use each property of person object
//* By use of "for in" loop we can iterate over objects to get property name.
let person = {
    name:"Manik",
    age:25,
    occupation:"Software Engineer",
    functionInsideObject :function(){
        console.log("Function Inside object is 3rd way.")
    },
    withOutKeyValueFunction(){
        console.log("With out key value")
    }
}
for(let key in person){
    console.log(key+" : "+person[key])
}

//? Methods in object
//* Now we will provide action to object, so object can able to do something
//* We are making and assigning function to it. But here it will called method, Function which is inside object are called method objects.  
//* We can make methods by 4 ways :-
// 1. 1st Way:-
person.sayHello = function(){   //Anonymous function , function which don't have name.
    console.log("Hello, My name is Interbiz")
}
person.sayHello();

// 2. 2nd Way:-
function greet(){
    console.log("GoodAfternoon India")
}
person.greetings = greet;
person.greetings();

// 3. 3rd Way:-
// we can assign function in object itself
person.functionInsideObject();

// 4th way :-
// It came in ES6 version
// assigning function in object itself.
person.withOutKeyValueFunction();


