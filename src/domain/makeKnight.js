import warnsdorff from './warnsdorff';

function makeKnight(initial) {
  let position = initial;

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
    getPosition,
    moves,
    moveTo
  };
}

export default makeKnight;
