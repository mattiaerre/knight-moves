import classnames from 'classnames';
import './App.css';
import { files, ranks } from './domain/constants';

function where(position) {
  return position[0] === 'b' && position[1] === 1;
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
              />
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export default App;
