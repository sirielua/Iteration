'use strict';

const sum = (...args) => {
  if (args.length === 0) {
    return 0;
  }

  let sum = 0;
  do {
    sum += args.pop();
  } while (args.length > 0);
  return sum;

};

const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7

console.log({ a, b, c, d, e });

module.exports = { sum };
