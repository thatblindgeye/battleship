import shipFactory from './shipFactory';

describe('Ship Factory', function () {
  test('creates a ship', function () {
    const testShip = shipFactory(6);
    expect(testShip.getLength()).toBe(6);
  });
});
