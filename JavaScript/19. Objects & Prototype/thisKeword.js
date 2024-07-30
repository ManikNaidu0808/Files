//! We can able to access object property name into different object
let human = {
    name:"Manik",
    age:25,
    occupation:"Software Engineer",
    sayHello(){
        console.log("Hello ! I am "+ this.name +" I have a " +car.brand+" car") 
    } // console.log("Hello ! I am "+ human.name +" I have a " +car.brand+" car") We should use "this" because we are calling property value of same objject(human), That's why we use "This"
}

let car ={
    brand : "Tata",
    model : "Safari"
}

human.sayHello()