import makeAllowedMoves from './makeAllowedMoves';

function makeKnight(initial) {
  let position = initial;

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

  function moveTo(newPosition) {
    position = newPosition;
  }

  return {
    canMoveTo,
    getPosition,
    moveTo
  };
}

export default makeKnight;
