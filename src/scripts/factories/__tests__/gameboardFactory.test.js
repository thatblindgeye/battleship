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
    let testShip;

    beforeAll(() => {
      const mockShip = jest.fn((length) => {
        const getLength = () => {
          return length;
        };

        return { getLength };
      });

      testShip = new mockShip(2);
    });

    test('places a ship horizontally', function () {
      const testBoard = gameboardFactory(10);
      testBoard.placeShip(0, testShip);
      comparisonBoard[0] = { ship: testShip, attacked: false };
      comparisonBoard[1] = { ship: testShip, attacked: false };

      expect(testBoard.getBoard()).toEqual(comparisonBoard);
    });
  });
});
