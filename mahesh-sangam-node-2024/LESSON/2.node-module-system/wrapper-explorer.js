console.log("Module Wrapper explorer demo");

console.log("__fileName:", __filename);
console.log("__dirname:", __dirname);

module.exports.greet = function(name) {
  console.log(`Hello, ${name}!`);
};
