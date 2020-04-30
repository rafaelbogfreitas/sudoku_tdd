//parseBoard

module.exports = parseBoard = (board) => 
    board.split('\n')
        .map(arr => arr.split('')
            .map(num => +num)
        );

//saveEmptyPosition
//checkRow checkColumn checkSquare checkValue
//solvePuzzle
//solveSudoku