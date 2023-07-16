import React from "react";
import "./Score.style.scss";

const Score = ({ score }) => (
  <section className="score">
    <p className="score-label">Score</p>
    <section>
      <label className="player player-1">Player 1</label>
      <p className="player player-1">{score["player0"]}</p>
    </section>
    <section>
      <label className="player player-2">Player 2</label>
      <p className="player player-2">{score["player1"]}</p>
    </section>
  </section>
);

export default Score;
