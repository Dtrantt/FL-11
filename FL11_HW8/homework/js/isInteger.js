const isInteger = num => Math.floor(num) === num;

console.log(isInteger(5));
console.log(isInteger(5.1));
console.log(isInteger(5.9));
console.log(isInteger(5.0));