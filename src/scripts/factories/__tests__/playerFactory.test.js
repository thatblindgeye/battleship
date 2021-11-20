import playerFactory from '../playerFactory';

describe('Player Factory', function () {
  let human;
  beforeAll(() => {
    human = playerFactory('Human');
  });

  test('creates a player', function () {
    expect(human.getName()).toBe('Human');
  });
});
