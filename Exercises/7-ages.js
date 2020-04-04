'use strict';

const ages = persons => {
  const output = {};
  for (const name in persons) {
    const person = persons[name];
    output[name] = person.died - person.born;
  }
  return output;
};

const output = ages({
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
});

console.log(output);

module.exports = { ages };
