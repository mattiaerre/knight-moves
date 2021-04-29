import { files, ranks } from './constants';
import makeKnight from './makeKnight';

function makeBoard() {
  const board = [];

  files.forEach((file) => {
    ranks.forEach((rank) => {
      board.push([file, rank]);
    });
  });
  return board;
}

export const board = makeBoard();
const origin = ['b', 1];
const knight = makeKnight(origin);
export const visited = [origin];

// while (visited.length < board.length) {
board.forEach((square) => {
  if (
    knight.canMoveTo(square) &&
    visited.find(([file, rank]) => file === square[0] && rank === square[1]) ===
      undefined
  ) {
    knight.moveTo(square);
    visited.push(square);
  }
});
// }
