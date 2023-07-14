import React from 'react';

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <h2>Score</h2>
      <p>Joueur X: {scores.X}</p>
      <p>Joueur O: {scores.O}</p>
    </div>
  );
};

export default Scoreboard;
