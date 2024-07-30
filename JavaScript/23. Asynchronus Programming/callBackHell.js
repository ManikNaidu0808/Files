//! it was first in nested function ,but now resolved using promise

function asyncFunction1(param1) {
    return new Promise((resolve, reject) => {
      // Simulating async operation
      setTimeout(() => {
        resolve(param1 + 1);
        reject(new Error('Error in asyncFunction1'));
      }, 1000);
    });
  }
  
  function asyncFunction2(param2) {
    return new Promise((resolve, reject) => {
      // Simulating async operation
      setTimeout(() => {
        resolve(param2 + 1);
        reject(new Error('Error in asyncFunction2'));
      }, 1000);
    });
  }
  
  function asyncFunction3(param3) {
    return new Promise((resolve, reject) => {
      // Simulating async operation
      setTimeout(() => {
        // resolve(param3 + 1);
        reject(new Error('Error in asyncFunction3'));
      }, 1000);
    });
  }
  
  asyncFunction1(1)
    .then(asyncFunction2)
    .then(asyncFunction3)
    .then((result) => {
      console.log('Final result:', result); // Final result: 4
    })
    .catch((error) => {
      console.error('Error:', error);
    });


  
  