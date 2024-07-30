// function student(firstName,lastName,subject){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.subject = subject; 
// }
//     this.greet = function(){ 
//         console.log(`${this.firstName} ${this.lastName}`);
   
// }

// let student1 = new student('manik','naidu');
// // student1.greet()
// // greet() //this object is pointing global object now , that's why it will show undefined undefined
// greet.call(student1);

// // ========================================================================================
// function student(firstName,lastName,subject){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.subject = subject; 
// }
//     this.greet = function(prefix,suffix){ //suppose this function is taking parameter
//         console.log(`${prefix} ${this.firstName} ${this.lastName} ${suffix}`);  
// }
// let student1 = new student('Manik','Naidu');
// greet.call(student1 , 'Hi' , "- How are you"); // we can pass comma separated values
// greet.apply(student1,["Hello","- How are you brother."])

// ==================================
//? there is small difference between call and apply
// in call we give values by comma separated.
// in apply we pass array of vallues.
// ====================================

//? In case of bind
//* bind creates new function

// let fn = greet.bind(student1);
// // console.log(fn);
// fn("Hey", 'Whats up?')



