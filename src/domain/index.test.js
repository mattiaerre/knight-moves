import makeAllowedMoves from './makeAllowedMoves';
import makeKnight from './makeKnight';

describe('allowed moves', () => {
  test('b1', () => {
    const allowedMoves = makeAllowedMoves(['b', 1]);
    expect(JSON.stringify(allowedMoves)).toEqual(
      JSON.stringify([
        ['c', 3],
        ['d', 2],
        ['a', 3]
      ])
    );
  });

  test('e5', () => {
    const allowedMoves = makeAllowedMoves(['e', 5]);
    expect(JSON.stringify(allowedMoves)).toEqual(
      JSON.stringify([
        ['f', 7],
        ['g', 6],
        ['g', 4],
        ['f', 3],
        ['d', 3],
        ['c', 4],
        ['c', 6],
        ['d', 7]
      ])
    );
  });

  test('h6', () => {
    const allowedMoves = makeAllowedMoves(['h', 6]);
    expect(allowedMoves).toMatchSnapshot();
  });
});

describe('knight', () => {
  describe('moves', () => {
    it('b1', () => {
      const knight = makeKnight(['b', 1]);
      expect(JSON.stringify(knight.moves())).toEqual(
        JSON.stringify([
          ['a', 3, 3],
          ['d', 2, 5],
          ['c', 3, 7]
        ])
      );
    });
  });
});
