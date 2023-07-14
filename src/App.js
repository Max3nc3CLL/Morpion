import React, { useState } from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';

const App = () => {
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleWinner = (winner) => {
    setCurrentPlayer(winner === 'X' ? 'O' : 'X');
  };

  return (
    <div className="container">
      <h1>Jeu Morpion</h1>
      <Scoreboard scores={scores} />
      <Board currentPlayer={currentPlayer} onWinner={handleWinner} setCurrentPlayer={setCurrentPlayer} />
    </div>
  );
};

export default App;
