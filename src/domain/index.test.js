import makeAllowedMoves from './makeAllowedMoves';
import makeKnight from './makeKnight';

describe('knight', () => {
  describe('allowed moves', () => {
    test('b1', () => {
      const allowedMoves = makeAllowedMoves(['b', 1]);
      expect(allowedMoves).toMatchSnapshot();
    });

    test('e5', () => {
      const allowedMoves = makeAllowedMoves(['e', 5]);
      expect(allowedMoves).toMatchSnapshot();
    });
  });

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
});
