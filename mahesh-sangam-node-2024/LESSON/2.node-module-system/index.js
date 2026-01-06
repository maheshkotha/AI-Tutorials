// module.exports  ==> exports
// require  (import other modules)

const firstModule = require("./first-module");

console.log("Addition of 10 and 5 is:", firstModule.add(10, 5));

const  { subtract }  = firstModule;
console.log("Subtraction of 10 and 5 is:", subtract(10, 5));

try {
  console.log("Division of 10 by 0 is:", firstModule.divide(10, 0));
} catch (error) {
  console.error(error.message);
}

// module wrapper
(
  function(exports, reuire, module, __filename, __dirname) {
    // your module goes here

  }
)