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
  describe('can move to', () => {
    it('c3', () => {
      const knight = makeKnight(['b', 1]);
      expect(knight.canMoveTo(['c', 3])).toBe(true);
    });

    it('b3', () => {
      const knight = makeKnight(['b', 1]);
      expect(knight.canMoveTo(['b', 3])).toBe(false);
    });

    it('a3', () => {
      const knight = makeKnight(['b', 1]);
      expect(knight.canMoveTo(['a', 3])).toBe(true);
    });

    it('h8', () => {
      const knight = makeKnight(['h', 8]);
      expect(knight.canMoveTo(['g', 6])).toBe(true);
    });
  });

  describe('move to', () => {
    it('b1 > c3 > d5', () => {
      const knight = makeKnight(['b', 1]);
      if (knight.canMoveTo(['c', 3])) {
        knight.moveTo(['c', 3]);
      }
      if (knight.canMoveTo(['d', 5])) {
        knight.moveTo(['d', 5]);
      }
      expect(knight.getPosition()).toEqual(['d', 5]);
    });
  });
});
