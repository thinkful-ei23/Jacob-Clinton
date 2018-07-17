'use strict';

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  let time = 'time';
  return function(location) {
    warningCounter++;
    if (warningCounter > 1) {
      time = 'times';
    }
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Water on the Road');
const volcanoWarning = hazardWarningCreator('Lava on the Road');

rocksWarning('Thinkful Headquarters');
rocksWarning('Thinkful Headquarters');
floodWarning('pleasant st, marblehead, ma');
volcanoWarning('Glenview Rd. Glenview, Illinois');