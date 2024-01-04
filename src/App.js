import { useState } from "react";
import "./App.css"
import Board from "./components/Board";

function App() {

  const [history, setHistory] = useState([ {squares: Array(9).fill(null)}]);
  const [xIsNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let i=0; i<lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner:' + winner;
  } else {
    status = `Next Player ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    if(calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    //전개연산자를 사용해 원래있던 history를 하나씩넣어줌
    //원본을 복사해서 한개씪??
    setHistory([...newHistory, { squares: newSquares }]);
    setXisNext(prev => !prev);

    setStepNumber(newHistory.length);
  }

  const moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game start';
    return(
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    )
  });

  const jumpTo = (step) => {
    setStepNumber(step);
    // 2로 나누어 나머지값이 0나오게함 = 짝수일때만 true값 나오게하는 로직
    setXisNext((step % 2) === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
      <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <ol style={{listStyle:'none'}}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
