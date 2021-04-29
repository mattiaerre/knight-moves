import classnames from 'classnames';
import { name, version } from '../package.json';
import './App.css';
import { files, ranks } from './domain/constants';
import { visited } from './domain/problem';

function where(position) {
  return (
    visited.find(
      ([file, rank]) => file === position[0] && rank === position[1]
    ) !== undefined
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
              <li
                className={classnames({
                  Knight: where([file, rank]),
                  Square: !where([file, rank])
                })}
                data-file={file}
                data-rank={rank}
                key={file}
              >
                {file}
                {rank}
              </li>
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
