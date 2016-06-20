function rangeofSquares(start, end) {
//    var outputArray = [];
    var squareRootStart = Math.sqrt(start);
    var squareRootFinish = end;
    while (!(Number.isInteger(squareRootStart))) {
        squareRootStart += 1;
    }

//    outputArray = outputArray.push(squareRootStart);
    
    
    var j = squareRootStart; 
    var i = 1;
    
    while ((i + j) <= squareRootFinish) {
        var outputArray = [];
        var sum = j + i;
        
        var result = sum * sum;
        
        outputArray = outputArray.push(result);
        
        i++;
    }

    return outputArray;


}
