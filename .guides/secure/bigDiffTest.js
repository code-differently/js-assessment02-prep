const bigDiff = require("../../bigDiff");
let numbers = process.argv.slice(2).map(Number);

console.log(bigDiff(numbers));
