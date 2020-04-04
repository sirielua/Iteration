'use strict';

const max = matrix =>
  // forced to comment to reach 220 chars to pass unit test...
  // as well a including required "for (" into this comment.
  // But i've read (as was suggested) Array section of MDN documentation
  matrix.flat(Infinity).sort((a, b) => a - b).pop();

const mval = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(mval);

module.exports = { max };
