'use strict';

function max(numbers) {
  let max = numbers[0];
  let i = 1;
  while (i < numbers.length){
    if (numbers[i] > max) {
      max = numbers[i];
    }
    i++;
  }

  return max;
}

function min(numbers) {
  let min = numbers[0];
  let i = 1;
  while (i < numbers.length){
    if (numbers[i] < min) {
      min = numbers[i];
    }
    i++;
  }
  return min;
}

let array1 = [1,2,4,63,8];
let array2 = [];

console.log(max(array1));
console.log(max(array2));
console.log(min(array1));
console.log(min(array2));

