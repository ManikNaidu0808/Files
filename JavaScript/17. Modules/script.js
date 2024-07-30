//! ECMAScript (ES) Modules
//! ES Modules are a standardized module system in JavaScript, widely supported in modern browsers and also in Node.js (from version 12 with the .mjs extension or by setting "type": "module" in package.json).
import { add, subtract } from './math.js';

console.log(add(2, 3)); 
console.log(subtract(5, 2)); 



//! Differences Between CommonJS and ES Modules
//* Syntax: CommonJS uses require() and module.exports, whereas ES modules use import and export.
//* Load Time: CommonJS modules are loaded synchronously, while ES modules can be loaded asynchronously.
//* Scope: ES modules are always in strict mode, and this is undefined at the top level. CommonJS modules are not in strict mode by default.
//* Compatibility: CommonJS is mainly used in Node.js, while ES modules are supported in modern browsers and also in Node.js.