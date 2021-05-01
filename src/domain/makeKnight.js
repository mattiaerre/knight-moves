import makeAllowedMoves from './makeAllowedMoves';
import warnsdorff from './warnsdorff';

function makeKnight(initial) {
  let position = initial;

  // INFO: may be deprecated
  function canMoveTo(destination) {
    return (
      makeAllowedMoves(position).find(
        ([file, rank]) => file === destination[0] && rank === destination[1]
      ) !== undefined
    );
  }

  function getPosition() {
    return position;
  }

  function moves() {
    return warnsdorff(position);
  }

  function moveTo(newPosition) {
    position = newPosition;
  }

  return {
    canMoveTo,
    getPosition,
    moves,
    moveTo
  };
}

export default makeKnight;
