// function func1(){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             const error = true;
//             if(!error){
//                 console.log("Function : your promise has been resolved");
//                 resolve();
//             }
//             else{
//                 console.log("Function : your promise has not been resolved")
//                 reject();
//             }

//         },2000)
//     })
// }

// func1().then(function(){
//     console.log("Manik: thanks for resolving.")
// }).catch(function(error){
//     console.log("Manik: sorry not fullfilled " + error)
// })

// ===============================================================================

// //! solved using promise
// function promise1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 1st");
//       resolve();
//     }, 5000);
//   });
// }

// function promise2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 2nd");
//       resolve();
//     }, 0);
//   });
// }

// function promise3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 3rd");
//       resolve();
//     });
//   });
// }

// promise1()
//   .then(() => {
//     return  promise2();
//   })
//   .then(() => {
//     return promise3();
//   });
   

// ==============================================================================

// // ! Solved using async/await
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

// ============================================================
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 1st");
      resolve();
    }, 3000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 2nd rejected");
      reject();
    }, 0);
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 3rd");
      resolve();
    });
  });
}

promise1()
  .then(() => {
    return  promise2();
  })
  .then(() => {
    return promise3();
  });

//   =================
// function promise1(){
//     return new Promise((resolve) => {
//     setTimeout(()=>{
//         console.log("Promise 1st");
//         resolve();
//     },5000)
//     })}
// function promise2(){
//     return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("Promise 2nd");
//         reject(new Error("Promise 2 failed"));
//     },0)
// })}
// function promise3(){
//     return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("Promise 3rd");
//         resolve();
//     })  
// })}
// async function executeFunctions(){
//     try{
//         await promise1();
//         await promise2();
//         await promise3();
//     }catch(error){
//         console.error("Error in promise2:", error.message);
//     }
// }
// executeFunctions();




  

