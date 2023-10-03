
const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];

  function unroll(squareArray) {
    
    // set directional boundaries
    
    let rowStart = 0;
    let colStart = 0;
    let rowEnd = squareArray.length - 1;
    let colEnd = squareArray[0].length -1;

    const result = [];
     
    while(rowStart <= rowEnd && colStart <= colEnd) {
       for(let i = colStart; i <= colEnd; i++){
          result.push(squareArray[rowStart][i]);
       }
       rowStart++;
        
       for(let i = rowStart; i <= rowEnd; i++){
           result.push(squareArray[i][colEnd]);
       }
       colEnd--;
        
       if(rowStart <= rowEnd){
          for(let i = colEnd; i >= colStart; i--){
             result.push(squareArray[rowEnd][i]);
          }      
       }
       rowEnd--;
        
       if(colStart <= colEnd){
           for(let i = rowEnd; i>= rowStart; i--){
              result.push(squareArray[i][colStart]);
           }          
       }
       colStart++;
    }
     console.log(result)
     return result;
 };
 
 unroll(smallerSquare)

 unroll(square)


module.exports = unroll;
