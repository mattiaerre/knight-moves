import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { name, version } from '../package.json';
import './App.css';
import { files, ranks } from './domain/constants';
import { visited } from './domain/problem';

function ListItem({ file, rank, squares }) {
  function beenThere(position) {
    return (
      squares.find(
        ([file, rank]) => file === position[0] && rank === position[1]
      ) !== undefined
    );
  }

  return (
    <li
      className={classnames({
        Knight: beenThere([file, rank], squares),
        Square: !beenThere([file, rank], squares)
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
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    if (squares.length < visited.length) {
      const timer = setTimeout(() => {
        setSquares([...squares, visited[squares.length]]);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [squares]);

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
              <ListItem file={file} key={file} rank={rank} squares={squares} />
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
