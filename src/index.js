
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  let newArr = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if((i+1)%2===0){
      for (let y = matrix[i].length - 1; y >= 0 ; y--) {
        newArr.push(matrix[i][y])
      }
    } else{
      for (let y = 0; y < matrix[i].length; y++) {
        newArr.push(matrix[i][y])
      }
    }
    
  }
  return newArr;
}
