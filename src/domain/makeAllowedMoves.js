import { files, ranks } from './constants';

// [file, rank]

function up(position) {
  const allowedMoves = [];
  allowedMoves.push([files[files.indexOf(position[0]) - 1], position[1] + 2]);
  allowedMoves.push([files[files.indexOf(position[0]) + 1], position[1] + 2]);
  return allowedMoves;
}

function right(position) {
  const allowedMoves = [];
  allowedMoves.push([files[files.indexOf(position[0]) + 2], position[1] + 1]);
  allowedMoves.push([files[files.indexOf(position[0]) + 2], position[1] - 1]);
  return allowedMoves;
}

function down(position) {
  const allowedMoves = [];
  allowedMoves.push([files[files.indexOf(position[0]) + 1], position[1] - 2]);
  allowedMoves.push([files[files.indexOf(position[0]) - 1], position[1] - 2]);
  return allowedMoves;
}

function left(position) {
  const allowedMoves = [];
  allowedMoves.push([files[files.indexOf(position[0]) - 2], position[1] - 1]);
  allowedMoves.push([files[files.indexOf(position[0]) - 2], position[1] + 1]);
  return allowedMoves;
}

function makeAllowedMoves(position) {
  return up(position)
    .concat(right(position))
    .concat(down(position))
    .concat(left(position))
    .filter(([file, rank]) => files.includes(file) && ranks.includes(rank));
}

export default makeAllowedMoves;
