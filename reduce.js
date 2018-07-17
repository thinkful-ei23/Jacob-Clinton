'use strict';

let code = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function decode(messg) {
  messg = messg.split(' ');
  // let decodedMessg = '';
  return messg.reduce(reducer, '');
  // return decodedMessg;
}

function reducer(accumulator, currentValue) {
  if (currentValue.length === 3) {
    accumulator += ' ';
  } else {
    accumulator += currentValue[currentValue.length - 1].toUpperCase();
  }
  return accumulator;
}

console.log(decode(code));