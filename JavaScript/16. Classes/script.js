// class railwayForm{
//     submit(){
//             alert(this.name+': form submitted')
//     }
//     cancel(){
//         alert(this.name+ ': form cancelled')
//     }
//     fill(givenName){
//         this.name = givenName;
//     }
// }

// let rohanForm = new railwayForm()
// rohanForm.fill('Rohan')

// let rajeshForm = new railwayForm()
// rajeshForm.fill('Rajesh')

// rohanForm.submit()
// rajeshForm.submit()
// rajeshForm.cancel()

// ==================================================================================================






class car{ 
    constructor(carName, model , price){
        this.carName = carName;
        this.model = model;
        this.price = price;

    }
    display(){
        console.log(`Car Name: ${this.carName}, Model: ${this.model}, Price: ${this.price}`)
    }

}
let car1 = new car()
// car1.carName ="Swift"
// car1.model ="ssss";
// car1.price = 2022;
car1 = ['sdcds','sdcs',1212]
car1.display()
let car2 = new car('Honda', 'Civic', 150000)
let car3 = new car('Maruti','Alto',300000)
// car1.display()
let cars = [car1,car2,car3];

const filteredCars = cars.filter(car=>car.price>200000);
filteredCars.forEach((car)=>car.display());

// ===============================================================================================

// class book{
//     constructor(title,author,price){
//         this.title = title;
//         this.author = author;
//         this.price = price;
//     }
//     displayInfo(){
//         console.log(`Title : ${this.title} , Author : ${this.author} , Price: ${this.price}`)
//     }
// }
// let book1 = new book('Harry Potter', 'J.K. Rowling', 500)
// const book2 = new book('1984', 'George Orwell', 350);
// const book3 = new book('The Great Gatsby', 'F. Scott Fitzgerald', 400);
// book3.displayInfo()


// ===============================================================================================

// class student{
//     constructor(name,age,grade){
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
//     displayDetails(){
//         console.log(`Name: ${this.name} , Age:${this.age}, Grade:${this.grade} `)
//     }
// }

// const students = [
//     new student('John', 19, 'A'),
//     new student('Jane', 17, 'B'),
//     new student('Alice', 20, 'B'),
//     new student('Bob', 16, 'C')
// ];  

// const adultStudents = students.filter(student=>student.age>17)
// adultStudents.forEach(student => student.displayDetails())


// ====================================================================================================
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} making sound`)
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this.breed = breed;
//     }
//     speaker(){
        
//          console.log(`${this.name} barks`);
//     }
// }

// let dog = new Dog("Jumbo","Doberman")
// dog.speak()
// dog.speaker()

// ==================================================================================================
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} making sound`)
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this.breed = breed;
//     }
//     speak(){
//     super.speak();
//     console.log(`${this.name} barks`)
//     }
// }

// let dog = new Dog("Jumbo","Doberman")
// dog.speak()


// =============================================================================================

// class Animal{
//     constructor(firstname){
//         this.firstname=firstname;
//     }
//     fly(){
//         alert(`${this.firstname} is flying`)
//     }
//     get name(){
//         return this.firstname
//     }

//     set name(newName){
//         this.firstname = newName;
//     }
// }
// let bird = new Animal("Pigeon")
// bird.fly()
// console.log(bird.name)
// bird.name = "Sparrow";
// console.log(bird.name)