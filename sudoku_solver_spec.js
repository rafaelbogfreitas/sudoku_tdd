const Chai = require('chai');
const expect = Chai.expect;
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

    describe('#parseBoard()', function() {
        it('Should parse a sudoku string into a 2d array', function(){
            
            parsedBoard = parseBoard(board);

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

              expect(parsedBoard.length).to.equal(9);
              expect(parsedBoard[0].length).to.equal(9);
              expect(parsedBoard).to.eql(expectedBoard);
        })

        describe('#saveEmptyPositions()', function () {
            it('should save all of the empty positions, 0s, in a parsed board', function () {
                emptyPositions = solver.saveEmptyPositions(parsedBoard);

                let expectedPositions = [
                    [0,0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,0],[1,1],
                    [1,2],[1,5],[2,0],[2,1],[2,2],[2,6],[2,7],[2,8],[3,0],
                    [3,1],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[4,4],[4,5],
                    [4,7],[4,8],[5,1],[5,3],[5,4],[5,5],[5,8],[6,1],[6,2],
                    [6,4],[6,6],[6,8],[7,1],[7,3],[7,4],[7,5],[7,8],[8,1],
                    [8,2],[8,3],[8,5],[8,6],[8,7],[8,8]
                ];

                expect(emptyPositions.length).to.equal(51);
                expect(emptyPositions).to.eql(expectedPositions);
            })
        })


        describe('#checkRow()', function () {
            it('should check that each value in the row does not equal the input', function () {
                //Not input
                expect(solver.checkRow(parsedBoard, 0, 2)).to.be.ok;
                //Eql input
                expect(solver.checkRow(parsedBoard, 0, 9)).to.not.be.ok;
            })
        })

        describe('#checkColumn()', function() {
            it('should check that each value in a column does not equal the input', function() {
              // Not input
              expect(solver.checkColumn(parsedBoard, 0, 9)).to.be.ok;
              // Eql input
              expect(solver.checkColumn(parsedBoard, 0, 5)).to.not.be.ok;
            });
        })

        describe('#checkSquare()', function () {
            it('should check that each value in a 3x3 square does not match the input', function () {
                //No match (true)
                expect(solver.check3x3Square(parsedBoard, 2, 2, 1)).to.be.ok;
                expect(solver.check3x3Square(parsedBoard, 7, 7, 9)).to.be.ok;
                //Match (false)
                expect(solver.check3x3Square(parsedBoard, 2, 2, 9)).to.not.be.ok;
                expect(solver.check3x3Square(parsedBoard, 7, 7, 1)).to.not.be.ok;
            })
        });

        describe('#checkValue()', function() {
            it('should check whether a value is valid for a particular position', function() {
              // No match. Return true
              expect(solver.checkValue(parsedBoard, 0, 0, 2)).to.be.ok;
              expect(solver.checkValue(parsedBoard, 3, 7, 3)).to.be.ok;
              // Match found. Return false
              expect(solver.checkValue(parsedBoard, 0, 0, 9)).to.not.be.ok;
              expect(solver.checkValue(parsedBoard, 3, 7, 1)).to.not.be.ok;
            });
        });
    })
})
