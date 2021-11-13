import gameboardFactory from '../gameboardFactory';

describe('Gameboard Factory', function () {
  let comparisonBoard;

  beforeEach(() => {
    comparisonBoard = [];

    for (let i = 0; i < 100; i++) {
      comparisonBoard.push({ ship: null, attacked: false });
    }
  });

  describe('Gameboard Creation', function () {
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

  describe('Ship Placement', function () {
    let shortShip;
    let longShip;
    let testBoard;

    beforeAll(() => {
      const mockShip = jest.fn((length) => {
        const getLength = () => {
          return length;
        };

        return { getLength };
      });

      shortShip = mockShip(2);
      longShip = mockShip(5);
    });

    beforeEach(() => {
      testBoard = gameboardFactory(10);
    });

    test('places a ship horizontally', function () {
      testBoard.placeShip(0, shortShip);
      comparisonBoard[0] = { ship: shortShip, attacked: false };
      comparisonBoard[1] = { ship: shortShip, attacked: false };

      expect(testBoard.getBoard()).toEqual(comparisonBoard);
    });

    test('places a ship vertically', function () {
      testBoard.changePlacementDirection();
      testBoard.placeShip(0, shortShip);
      comparisonBoard[0] = { ship: shortShip, attacked: false };
      comparisonBoard[10] = { ship: shortShip, attacked: false };

      expect(testBoard.getBoard()).toEqual(comparisonBoard);
    });

    test('places multiple ships', function () {
      testBoard.placeShip(3, shortShip);
      testBoard.changePlacementDirection();
      testBoard.placeShip(25, longShip);
      comparisonBoard[3] = { ship: shortShip, attacked: false };
      comparisonBoard[4] = { ship: shortShip, attacked: false };
      comparisonBoard[25] = { ship: longShip, attacked: false };
      comparisonBoard[35] = { ship: longShip, attacked: false };
      comparisonBoard[45] = { ship: longShip, attacked: false };
      comparisonBoard[55] = { ship: longShip, attacked: false };
      comparisonBoard[65] = { ship: longShip, attacked: false };

      expect(testBoard.getBoard()).toEqual(comparisonBoard);
    });
  });
});
