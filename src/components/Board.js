import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = () => {
  // 첫번째인수 (현재상태를 가져옴) , 두번째인수 (함수를 호출하고 갱신함)
  // Array(9)처음에 갖는 값, fill(null) 처음 초기값
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

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
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner:' + winner;
  } else {
    status = `Next Player ${xIsNext ? 'X' : 'O'}`;
  }


  const handleClick = (i) => {
    // 빈슬라이스 메소드 사용하여 모든배열을 새롭게복사
    const newSquares = squares.slice();
    // // 삼항연산자 적용, xIsNext 가 true일때 'X', false일때 'O'
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXisNext(prev => !prev);

  }

  const renderSquare = (i) => {
    return <Square value={squares[i]}
      onClick={()=> handleClick(i)}/>
  }
  
    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )

}
export default Board

