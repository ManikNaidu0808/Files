// function student(firstName,lastName,subject){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.subject = subject; 
// }
//     this.greet = function(){ 
//         console.log(`${this.firstName} ${this.lastName}`);
   
// }

// let student1 = new student('manik','naidu');
// // console.log(student1.value)
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

// ===========================================================
// let name ={
//     firstName:"Sachin",
//     lastName:"Tendulkar",
//     printfullname: function(){
//         console.log(this.firstName+" "+this.lastName)
//     }
// }
// name.printfullname()

// let name2 = {
//     firstName:"Rhoit",
//     lastName:"Sharma",
//     // If we want to print fullName inside the obj2 , we can do but thats not the good approach
//     // so that why call method comes into picture
//     // Using call method we can do function borrowing
//     // We can borrow function from other objects and use it with the data of other objects
// }

// name.printfullname.call(name2) //It will print Rohit Sharma
// // thats why we use function borrowing


// ==============================================================
let name ={
    firstName:"Sachin",
    lastName:"Tendulkar",
    // However in general we dont keep our methods inside objectif we want to reuse then rather take them out and keep outside
}
// suppose we have some argument
// but we have lot of arguments at that time apply method is usefull
// the only difference between call and apply , is the way we pass arguments 
// instead of passing arguments individually using call method , use apply method we as array list  
 let printfullname = function(hometown){
        console.log(this.firstName+" "+this.lastName +" From " +hometown)
    }
printfullname.call(name,"Raipur")

let name2 = {
    firstName:"Rhoit",
    lastName:"Sharma",
}
printfullname.call(name2 , "Bhilai") 
