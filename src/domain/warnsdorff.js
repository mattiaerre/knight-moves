import makeAllowedMoves from './makeAllowedMoves';

function warnsdorff(position) {
  const allowedMoves = makeAllowedMoves(position);

  return allowedMoves
    .map((move) => [...move, makeAllowedMoves(move).length - 1])
    .sort((a, b) => {
      if (a[2] < b[2]) {
        return -1;
      }
      if (a[2] > b[2]) {
        return 1;
      }
      return -1;
    });
}

export default warnsdorff;
