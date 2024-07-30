function Student(first,last,age,classs){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.classs = classs;
    this.Nationality = "Indian";
    this.name = function(){
        console.log(this.firstName+" "+this.lastName)
    };
}

var student1 = new Student("manik", 'naidu',22,7)
var student2 = new Student("brock", 'lesnar',25,8)
var student3 = new Student("rock", 'silvester',28,9)

// ================================
//! It is not possible for constructor to add property like below
// Student.city = "Bhilai"
// console.log(Student)
// ================================
//! You can add property to object
// student1.Nationality = "Indian"
// ==================
// student1.name = function(){
//     return this.firstName+" "+this.lastName
// }
// console.log(student1.name())
// ===================
// console.log(student2.name())
// ===================


// ================================================
//! Object Prototypes
//! You can add method and property in function using prototype
//? Adding Property to constructor
Student.prototype.city = "Raipur";
// console.log(student1) //it is added under prototype
// console.log(student2.city)

//? Adding function to constructor
// Student.prototype.name = function(){
//     console.log(this.firstName+" "+this.lastName)
// };
// console.log(student3.name())