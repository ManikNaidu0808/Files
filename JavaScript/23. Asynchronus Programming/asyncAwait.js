async function manik(){
    console.log("Inside manik funtion");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
}

console.log("before calling manik");
let a = manik();
console.log("after calling manik");
console.log(a);
a.then(data=>console.log(data));
console.log("last line of file");
console.log(a);

// ==========================================================
// function promise1(){
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Promise 1st");
//         resolve();
//     },5000)
//     })}
// function promise2(){
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Promise 2nd");
//         resolve();
//     },0)
// })}
// function promise3(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise 3rd");
//         resolve();
//     })  
// })}
// async function executeFunctions(){
//     await promise1();
//     await promise2();
//     await promise3();
// }

// executeFunctions();