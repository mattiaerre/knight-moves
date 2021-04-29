import makeAllowedMoves from './makeAllowedMoves';

function makeKnight(initial) {
  function canMoveTo(destination) {
    return (
      makeAllowedMoves(initial).find(
        ([file, rank]) => file === destination[0] && rank === destination[1]
      ) !== undefined
    );
  }

  return {
    canMoveTo
  };
}

export default makeKnight;
