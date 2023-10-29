const countEvens = require("../../countEvens");
let numbers = process.argv.slice(2).map(Number);

console.log(countEvens(numbers));