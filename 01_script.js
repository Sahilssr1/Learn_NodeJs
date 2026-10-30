// let n = 5;

// for(i=0; i<n; i++){
//     console.log("hello, ", i); 
// }


// require() imports whatever was exported by module.exports in that file
const someValue = require("./03_modules_export");

console.log(someValue); // Logs 123 (or whatever module.exports sent)


// Requiring a directory: Node.js automatically looks for 04_Fruits/index.js
const info = require("./04_Fruits");

console.log(info);
