import shipFactory from '../shipFactory';

describe('Ship Factory', function () {
  let testShip;

  beforeEach(() => {
    testShip = shipFactory(2);
  });

  test('creates a ship', function () {
    expect(testShip.getLength()).toBe(2);
  });

  test('creates a ship that is not sunk', function () {
    expect(testShip.isSunk()).toBe(false);
  });

  test('returns not sunk if all positions are not hit', function () {
    testShip.markHit(1);
    expect(testShip.isSunk()).toBe(false);
  });

  test('returns sunk if all positions are hit', function () {
    testShip.markHit(0);
    testShip.markHit(1);
    expect(testShip.isSunk()).toBe(true);
  });
});

describe('Ship Factory - Thrown Errors', function () {
  let testShip;

  test('throws error if length is not provided', function () {
    expect(() => (testShip = shipFactory())).toThrow(
      'Ship length must be a number greater than 0'
    );
  });

  test('throws error if length is 0', function () {
    expect(() => (testShip = shipFactory(0))).toThrow(
      'Ship length must be a number greater than 0'
    );
  });

  test('throws error if length is a negative number', function () {
    expect(() => (testShip = shipFactory(-1))).toThrow(
      'Ship length must be a number greater than 0'
    );
  });

  test('throws error if length is not a number', function () {
    expect(() => (testShip = shipFactory('0'))).toThrow(
      'Ship length must be a number greater than 0'
    );
  });
});
