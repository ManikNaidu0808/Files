// console.log(this); // window in browsers

// ========================================================================================
// 'use strict';
// function myFunction2() {
    //     console.log(this); // undefined
    // }
    // myFunction2();

// ========================================================================================
//! Method Invocation (1st variation)
// const obj = {
//         firstName :"Manik",
//         lastName : "Naidu",
//         prop: 42,
//         method: function() {
//                 console.log(this); // obj
//                 console.log(this.prop); // 42
//                 console.log(this.firstName+' '+this.lastName); // 42
//             },
//         };
// obj.method();


// const obj2 = {
//         firstName :"Super",
//         lastName : "Man",
//         prop: 42,
//         method: function() {
//                 console.log(this); // obj
//                 console.log(this.firstName+' '+this.lastName); // 42
//             },
//             address: {
//                 street: "Ashish Nagar Bhilai",
//                 city: "Durg",
//                 getAddress: function() {
//                     console.log(this.street + ' ' + this.city);
//                     console.log(this)
//                     console.log(obj2.firstName); 
//             }
//         }
//     };
    // obj2.method();
    // obj2.address.getAddress();

// ========================================================================================
//! Constructor Invocation (2nd variation)

// function Person(firstName,lastName){

//     // let this={}; new will create this object
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function(){
//         console.log(this.firstName+' '+this.lastName);
//     }
//   // return this; 
// }

// let person1 = new Person("Manik",'Naidu')
// console.log(person1);
// person1.getFullName();

// let person2 = new Person("Super", "Man")
// person2.getFullName()

// ============================================================================================
//!  (3rd variation)

function printMessage(){
    console.log(this);
}
printMessage(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//"This" will consider here global object thats why window object is present.
// in VsCode terminal it will show global object.
function Person(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.getFullName = function(){
            console.log(this.firstName+' '+this.lastName);
        }
    }

Person('manik','naidu') // window.firstName = manik , window.lastName = naidu , window.getFullName() = manik naidu
let obj = new printMessage(); //This will be empty object