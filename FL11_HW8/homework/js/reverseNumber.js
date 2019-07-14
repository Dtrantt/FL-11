const reverseNumber = num => {
  let res = 0;
  while (num) {
    res = res * 10 + parseInt(num % 10);
    num = parseInt(num / 10);
  }
  
  return res;
};

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
console.log(reverseNumber(240));
