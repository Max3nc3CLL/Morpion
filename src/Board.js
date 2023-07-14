import React, { useState, useEffect } from 'react';
import Square from './Square';

const Board = ({ currentPlayer, setCurrentPlayer, onWinner }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  useEffect(() => {
    if (winner === 'X') {
      setScoreX(scoreX + 1);
    } else if (winner === 'O') {
      setScoreO(scoreO + 1);
    }
  }, [winner]);

  const handleClick = (index) => {
    if (board[index] === '' && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard);
      togglePlayer();
    }
  };

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (board.every((square) => square !== '')) {
      setWinner('draw');
    }
  };

  const renderSquare = (index) => {
    return (
      <Square
        value={board[index]}
        onClick={() => handleClick(index)}
      />
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setCurrentPlayer('X');
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="score">
        <p>Joueur X: {scoreX}</p>
        <p>Joueur O: {scoreO}</p>
      </div>
      {winner && (
        <div className="winner">
          {winner === 'draw' ? (
            <p>Match nul !</p>
          ) : (
            <p>Le joueur {winner} a gagné !</p>
          )}
          <button className="reset-btn" onClick={resetGame}>
            Recommencer
          </button>
        </div>
      )}
    </div>
  );
};

export default Board;
