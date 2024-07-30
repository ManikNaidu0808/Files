//! The issue in your code arises because the module.exports syntax is used in Node.js (CommonJS), not in browser-based JavaScript. In the browser, you should use ES6 modules (import/export).

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  module.exports = {
    add,
    subtract
  };