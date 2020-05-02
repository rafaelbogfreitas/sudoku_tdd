//parseBoard

module.exports = parseBoard = (board) => 
    board.split('\n')
        .map(arr => arr.split('')
            .map(num => +num)
        );

//saveEmptyPosition

module.exports.saveEmptyPositions = (board) => {
    let emptyPositions = [];
    board.map((row, i) => 
        row.map((column, j) => 
            column == 0 ? 
            emptyPositions.push([i, j]) : 
            column));
    return emptyPositions;
}
//checkRow 
module.exports.checkRow = (board, y, num) => {
    for(let i = 0; i < board[y].length; i++){
        if(board[y][i] == num) return false;
    }
    return true;
}
//checkColumn 
module.exports.checkColumn = (board, x, num) => {
    for(let i = 0; i < board[x].length; i++){
        if(board[i][x] == num) return false;
    }
    return true;
}
//checkSquare 
module.exports.check3x3Square = (board, y, x, num) => {

    let yStart = Math.floor( y / 3 ) * 3;
    let xStart = Math.floor( x / 3 ) * 3;

    for(let i = yStart; i < yStart + 2; i++){
        for(let j = xStart; j < xStart + 2; j++){
            if(board[i][j] == num) return false;
        }
    }

    return true;
}

//checkValue
module.exports.checkValue = (board, y, x, num) => 

    module.exports.checkRow(board, y, num) && 
    module.exports.checkColumn(board, x, num) &&
    module.exports.check3x3Square(board, y, x, num)    

//solvePuzzle
//solveSudoku