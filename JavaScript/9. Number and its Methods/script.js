//? Static methods
//! 1.Number isfinite
// console.log(Number.isFinite(1 / 1)); //true
// console.log(Number.isFinite(1 / 0)); //false
// console.log(Number.isFinite(10 / 5)); //true
// console.log(Number.isFinite(0 / 0)); //false
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(NaN)); // false
// console.log(Number.isFinite(-Infinity)); // false
// console.log(Number.isFinite(0)); // true
// console.log(Number.isFinite(2e64)); // true
// console.log(Number.isFinite(null)); // false
// console.log(Number.isFinite('abc')); // false

//! 2.Number  isInteger 
//? It checks whether the value is of the number type and has no fractional part.
// console.log(Number.isInteger(10)); //true
// console.log(Number.isInteger(Math.PI));//false
// console.log(Number.isInteger(22.15)); //false
// console.log(Number.isInteger(-25)); //true
// console.log(Number.isInteger('10')); //false
// console.log(Number.isInteger(true)); //false
// console.log(Number.isInteger(NaN)); //false
// console.log(Number.isInteger('abc')); //false
// console.log(Number.isInteger(Infinity)); //false
// console.log(Number.isInteger(-Infinity)); //false
// console.log(Number.isInteger([1])); //false


//! 3.Number  isNaN 
// Number.isNaN(NaN); // true
// Number.isNaN(Number.NaN); // true
// Number.isNaN(0 / 0); // true
// Number.isNaN(37); // false

// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN("NaN")); // false
// console.log(Number.isNaN(undefined)); // false
// console.log(Number.isNaN({})); // false
// console.log(Number.isNaN("blabla")); // false
// console.log(Number.isNaN(true)); // false
// console.log(Number.isNaN(null)); // false
// console.log(Number.isNaN("null")); //FALSE
// console.log(Number.isNaN("37")); // false
// console.log(Number.isNaN("37.37")); // false
// console.log(Number.isNaN("")); // false
// console.log(Number.isNaN(" ")); // false

// console.log(isNaN("NaN")); // true
// console.log(isNaN(undefined)); // true
// console.log(isNaN({})); // true
// console.log(isNaN("blabla")); // true
// console.log(isNaN(true)); // false, this is coerced to 1
// console.log(isNaN(null)); // false, this is coerced to 0
// console.log(isNaN("37")); // false, this is coerced to 37
// console.log(isNaN("37.37")); // false, this is coerced to 37.37
// console.log(isNaN("")); // false, this is coerced to 0
// console.log(isNaN(" ")); // false, this is coerced to 0
// console.log(isNaN()); // true

//! 4.Number isSafeInteger
// console.log(Number.isSafeInteger(3)); // true
// console.log(Number.isSafeInteger(2 ** 53)); // false
// console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
// console.log(Number.isSafeInteger(NaN)); // false
// console.log(Number.isSafeInteger(Infinity)); // false
// console.log(Number.isSafeInteger("3")); // false
// console.log(Number.isSafeInteger(3.1)); // false
// console.log(Number.isSafeInteger(3.0)); // true

// ! 5.Number parseFloat
//? parseFloat converts a string to a floating-point number
// console.log(parseFloat("55kg")); //55
// console.log(parseFloat("125.55px")); // 125.55
// console.log(parseFloat("125km")); // 125.55
// console.log(parseFloat("abc")); //NaN
// console.log(Number.parseFloat === parseFloat); //true

//! 6.Number parseInt
//? parseInt is a function that parses a string and returns an integer.
// console.log(parseInt("55kg")); //55
// console.log(parseInt(127.0234)); //127
// console.log(parseInt("a100")); //NaN
// console.log(Number.parseInt === parseInt); // true


//? Instance Methods
//! 1.toExponential Method
// const num1 = 53455;
// const num2 = 8362926;
// console.log(num1.toExponential());
// console.log(num2.toExponential(5));
// console.log(Number.parseInt(3929).toExponential());


//! 2.toFixed Method
// const num1 = 5.3455;
// const num2 = 8.36499;
// console.log(num1.toFixed());
// console.log(num2.toFixed(2));
// console.log(Number.parseFloat(3.929).toFixed(2));

//! 3.toLocaleString Method
// const today = new Date();
// console.log(today.toLocaleString('en-AU'));
// console.log(today.toLocaleString('en-IN'));
// console.log(today.toLocaleString('bn-IN'));


//! 4.toPrecision Method
const num1 = 123456;
const num2 = 34.52353;
console.log(num1.toPrecision(3));
console.log(num2.toPrecision(4));


//! 5.toString Method
// const num1 = 100;
// console.log(num1.toString(16));//8
// console.log(num1.toString(8)); //10
// console.log(num1.toString(2)); //1000

//! 6.valueOf Method
// const num1 = new Number(25);
// console.log(num1.valueOf()); //25
// console.log(typeof num1.valueOf(), typeof num1); //number, object


//? Static Properties
// Number.EPSILON	        The smallest interval between two numbers
// Number.MAX_VALUE	        The largest positive representable number
// Number.MAX_SAFE_INTEGER 	Maximum safe integer in javascript is 253 - 1
// Number.MIN_VALUE	        The smallest positive representable number. The smallest number just greater than 0
// Number.MIN_SAFE_INTEGER  Minimum safe integer in javascript is -(253 - 1)
// Number.NaN	            Not a Number
// Number.NEGATIVE_INFINITY	Represent negative Infinity
// Number.POSITIVE_INFINITY	Represent positive Infinity

// console.log(Number.EPSILON);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.NaN);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);