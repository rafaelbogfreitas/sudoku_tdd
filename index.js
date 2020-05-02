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
module.exports.solvePuzzle = (board, positions) => {
    let i;
    for(i = 0; i < positions.length;){
        let row = positions[i][0];
        let column = positions[i][1];
        let match = false;
        let value = board[row][column] + 1;
        console.log('value ', value);

        for(let j = value; j < 10;j++){
            if(module.exports.checkValue(board, row, column, j)){
                match = true;
                board[row][column] = j
                i++
                break
            } 
        }
        console.log('i ',i)
        
        if(!match){
            board[row][column] = 0
            i--
        }

        board.forEach(function(row) {
            console.log(row.join());
        });
        
    }
    
    board.forEach(function(row) {
        console.log(row.join());
    });

    return board;
}

//solveSudoku

module.exports.solveSudoku = board => 
       module.exports.solvePuzzle(
           parseBoard(board),
           module.exports.saveEmptyPositions(parseBoard(board))
           )