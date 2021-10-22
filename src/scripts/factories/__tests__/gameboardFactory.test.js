import gameboardFactory from '../gameboardFactory';

describe('Gameboard Factory', function () {
  describe('Create a Gameboard', function () {
    let comparisonBoard;

    beforeAll(() => {
      comparisonBoard = [];

      for (let i = 0; i < 100; i++) {
        comparisonBoard.push({ ship: null, attacked: false });
      }
    });

    test('creates a gameboard with number passed in', function () {
      const testBoard = gameboardFactory(10);
      expect(testBoard.getBoard()).toEqual(comparisonBoard);
    });

    test('creates a gameboard without parameter passed in', function () {
      const testBoard = gameboardFactory();
      expect(testBoard.getBoard()).toEqual(comparisonBoard);
    });

    test('throws error if size is 0', function () {
      expect(() => {
        const testBoard = gameboardFactory(0);
      }).toThrow('Gameboard size must be a number greater than 0');
    });

    test('throws error if size is passed in, but is not a number', function () {
      expect(() => {
        const testBoard = gameboardFactory('10');
      }).toThrow('Gameboard size must be a number greater than 0');
    });
  });
});
