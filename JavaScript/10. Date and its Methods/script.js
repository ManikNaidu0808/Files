//! There are 4 different ways by which you can create Date object in javascript.
//? 1.new Date()
//? 2.new Date(milliseconds)
//? 3.new Date(dateString)
//? 4.new Date(year, month, day, hours, minutes, seconds, milliseconds)

//! 1. new Date()
// The new Date() method creates a new Date object representing the current date and time.
// var today = new Date();
// console.log(today);

//! 2. new Date(milliseconds)
var date = new Date();
console.log(date); //todays date withtime but 

var date = new Date(0);
console.log(date);  //1970-01-01T00:00:00.000Z

date = new Date(100000000000);
console.log(date); //1973-03-03T09:46:40.000Z

//! 3. new Date(dateString)
// This method takes a string argument and returns a Date object representing the date and time specified by the string.
var date = new Date("05 05, 1996 17:00:00");
console.log(date); //"1996-05-05T11:30:00.000Z"

date = new Date("November 11, 1997 01:00:00");
console.log(date); //"1997-11-10T19:30:00.000Z"

date.

//! 4. new Date() with Parameters
// The new Date(year, month, day, hours, minutes, seconds, milliseconds) accepts 7 parameters. This return standard date is based on passed arguments.
// All the parameters should have the same sequence as mentioned, where year and month are compulsory and the rest are optional.
// using all parameters
// var date = new Date(2010, 6, 21, 9, 15, 55, 250);
// console.log(date);

//* leaving milliseconds
// date = new Date(2010, 6, 21, 9, 15, 55);
// console.log(date);

//* leaving seconds
// date = new Date(2010, 6, 21, 9, 15);
// console.log(date);

//* leaving minutes
// date = new Date(2010, 6, 21, 9);
// console.log(date);

//* leaving hours
// date = new Date(2010, 6, 21);
// console.log(date);

//* only year and month
// date = new Date(2010, 6);
// console.log(date);

// if you think of removing month too
// then year will be treated as milliseconds
// remember this => new Date(milliseconds)