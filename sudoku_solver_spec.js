const Chai = require('chai');
const expext = Chai.expect;
const solver = require('./index');


describe('Sudoku Solver', function(){

    let board = '090000006\n' + 
                '000960485\n' +
                '000581000\n' +
                '004000000\n' +
                '517200900\n' +
                '602000370\n' +
                '100804020\n' +
                '706000810\n' +
                '300090000';

    let parsedBoard;

    describe('#parsedBoard()', function() {
        it('Should parse a sudoku string into a 2d array', function(){
            
            parsedBoard = parsedBoard(board);

            let expectedBoard = [
                [0,9,0,0,0,0,0,0,6],
                [0,0,0,9,6,0,4,8,5],
                [0,0,0,5,8,1,0,0,0],
                [0,0,4,0,0,0,0,0,0],
                [5,1,7,2,0,0,9,0,0],
                [6,0,2,0,0,0,3,7,0],
                [1,0,0,8,0,4,0,2,0],
                [7,0,6,0,0,0,8,1,0],
                [3,0,0,0,9,0,0,0,0]
              ];

              expext(parsedBoard.length).to.equal(9);
              expext(parsedBoard[0].length).to.equal(9);
              expext(parsedBoard[0].length).to.eql(expectedBoard);
        })
    })
})
