import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = ({squares, onClick}) => {
  // 첫번째인수 (현재상태를 가져옴) , 두번째인수 (함수를 호출하고 갱신함)
  // Array(9)처음에 갖는 값, fill(null) 처음 초기값
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXisNext] = useState(true);

  // const handleClick = (i) => {
  //   // 빈슬라이스 메소드 사용하여 모든배열을 새롭게복사
  //   const newSquares = squares.slice();
  //   // // 삼항연산자 적용, xIsNext 가 true일때 'X', false일때 'O'
  //   newSquares[i] = xIsNext ? 'X' : 'O';
  //   setSquares(newSquares);
  //   setXisNext(prev => !prev);

  // }

  const renderSquare = (i) => {
    return <Square value={squares[i]}
      onClick={()=> onClick(i)}/>
  }
  
    return (
      <div className='board-wrapper'>
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

