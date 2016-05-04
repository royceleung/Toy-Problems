//traverse a 2d array in a spiral fashion

var traverseMatrix = function(matrix){

  var results = [];
  var rowStart = 0;
  var rowEnd = matrix.length-1;
  var colStart = 0;
  var colEnd = matrix[0].length-1;

  while (rowStart <= rowEnd && colStart <= colEnd) {

    for (var i = colStart; i <= colEnd; i++) {
      results.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (var j = rowStart; j <= rowEnd; j++) {
      results.push(matrix[j][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (var k = colEnd; k >= colStart; k--) {
        results.push(matrix[rowEnd][k]);
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (var m = rowEnd; m >= rowStart; m--) {
        results.push(matrix[m][colStart]);
      }
      colStart++;
    }

  }

  return results;
};