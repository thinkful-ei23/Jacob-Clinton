'use strict';

const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function turtleFilter(steps) {
  return steps.filter(smArr => smArr[0] >= 0 && smArr[1] >= 0);
  // return steps.filter(function(smArr) {
  //   if (smArr[0] < 0 || smArr[1] < 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // });
}
console.log(turtleFilter(turtleSteps));

function turtleMap(steps) {
  return steps.map(smArr => Math.abs(smArr[0]) + Math.abs(smArr[1]));
}

function turtlePrint(map) {
  map.forEach(num => console.log(num));
}

console.log(turtlePrint(turtleMap(turtleSteps)));