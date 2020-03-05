module.exports = function countCats(matrix) {
  let c = 0;
    matrix.forEach(array => {
      array.forEach(elem => {
        if (elem === '^^') {
          c++;
        }
      })
    });
  return c;
};
