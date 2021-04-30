import makeKnight from './makeKnight';

const origin = ['b', 1];
export const knight = makeKnight(origin);
export const visited = [origin];

function go(knight, visited) {
  let flag = true;
  const moves = knight.moves(); // [['a', 3], ['c', 3], ['d', 2]]

  moves.forEach((square) => {
    if (
      visited.find(
        ([file, rank]) => file === square[0] && rank === square[1]
      ) === undefined &&
      flag
    ) {
      knight.moveTo(square);
      visited.push(square);
      flag = false;
    }
  });

  if (flag === true) {
    throw new Error(`Oh Noes! "${knight.getPosition()}"`);
  }
}

const length = 54; // ['a', 5]

try {
  while (visited.length < length) {
    go(knight, visited);
  }
} catch (error) {
  console.log(error);
}
