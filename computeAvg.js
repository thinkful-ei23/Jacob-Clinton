'use strict';

function average(numbers) {
  let sum = 0;
  numbers.forEach(num => sum += num);
  return sum / numbers.length;
}

let array1 = [1,2,4,63,8];
let array2 = [];

console.log(average(array1));
console.log(average(array2));