import classnames from 'classnames';
import { name, version } from '../package.json';
import './App.css';
import { files, ranks } from './domain/constants';
import { visited } from './domain/problem';

function beenThere(position) {
  return (
    visited.find(
      ([file, rank]) => file === position[0] && rank === position[1]
    ) !== undefined
  );
}

function ListItem({ file, rank }) {
  return (
    <li
      className={classnames({
        Knight: beenThere([file, rank]),
        Square: !beenThere([file, rank])
      })}
      data-file={file}
      data-rank={rank}
    >
      {file}
      {rank}
    </li>
  );
}

function App() {
  return (
    <div>
      {[...ranks].reverse().map((rank, index) => {
        return (
          <ul
            className={classnames({
              'Rank--even': index % 2 === 0,
              'Rank--odd': index % 2 === 1
            })}
            key={rank}
          >
            {files.map((file, index) => (
              <ListItem file={file} key={file} rank={rank} />
            ))}
          </ul>
        );
      })}
      <footer>
        {name} v{version}
      </footer>
    </div>
  );
}

export default App;
