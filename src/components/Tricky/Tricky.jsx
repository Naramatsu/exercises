import React, { useState, useEffect, useContext } from "react";
import Table from "./components/Table";
import Score from "./components/Score";
import Modal from "./components/Modal";

import {
  BsX,
  BsCircle,
  BsArrowCounterclockwise,
  BsGearFill,
} from "react-icons/bs";

import Toggle from "kromac-ui-18/dist/Toggle";

import { AppContext } from "./context";
import { LIGHT, DARK } from "./context/Theme/types";
import { winConditions } from "./utils";

const App = () => {
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [moves, setMoves] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [showModalSettings, setShowModalSettings] = useState(false);
  const [score, setScore] = useState({
    player0: 0,
    player1: 0,
  });
  const { theme, changeTheme } = useContext(AppContext);

  useEffect(() => {
    if (!winner && moves.length === 9) {
      setGameOver(true);
      setWinner("Tied");
    }
  }, [moves, winner]);

  useEffect(() => {
    validate(0, player1Moves);
  }, [player1Moves]);

  useEffect(() => {
    validate(1, player2Moves);
  }, [player2Moves]);

  const handlerMoves = (move) => {
    if (!gameOver)
      if (!moves.includes(move)) {
        setMoves([...moves, move]);
        const player = moves.length % 2;
        if (player) {
          setPlayer2Moves([...player2Moves, move]);
        } else {
          setPlayer1Moves([...player1Moves, move]);
        }
      }
  };

  const drawIcon = (index) => {
    if (player1Moves.includes(index)) return <BsX className="icon icon-x" />;
    if (player2Moves.includes(index))
      return <BsCircle className="icon icon-o" />;
  };

  const validate = (player, moves = []) => {
    if (
      winConditions.some((winCondition) =>
        winCondition.every((condition) => moves.includes(condition))
      )
    ) {
      setWinner(`The player ${player + 1} is the winner`);
      setGameOver(true);
      setScore({
        ...score,
        [`player${player}`]: score[`player${player}`] + 1,
      });
    }
  };

  const handlerReset = (e) => {
    setMoves([]);
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setGameOver(false);
    setWinner("");
    e.preventDefault();
  };

  const onChangeTheme = () => {
    changeTheme(theme === LIGHT ? DARK : LIGHT);
  };

  return (
    <main className={`tricky-game ${theme}`}>
      <h1>Tricky Game</h1>
      <section className="game-container">
        <Table handlerMoves={handlerMoves} moves={moves} drawIcon={drawIcon} />
      </section>
      <section className="game-info">
        {gameOver && <p className="game-over">Game Over</p>}
        <p className="winner-letter">{winner}</p>
        <button className="btn-reset" onClick={handlerReset}>
          <BsArrowCounterclockwise />
          Reset Game
        </button>
      </section>
      <Score score={score} />
      <Modal show={showModalSettings}>
        <h2>Settings</h2>
        <section className="toggle-settings">
          <p>P v P</p>
          <Toggle onColor="#216c92" offColor="#922b21" />
          <p>P v IA</p>
        </section>
        <section className="toggle-settings">
          <p>Light</p>
          <Toggle
            onColor="#000000"
            offColor="#ffffff"
            onChange={onChangeTheme}
          />
          <p>Dark</p>
        </section>
        <button
          className="btn-reset"
          onClick={() => setShowModalSettings(false)}
        >
          Close
        </button>
      </Modal>
      <button
        className="btn-reset float circle"
        onClick={() => setShowModalSettings(true)}
      >
        <BsGearFill />
      </button>
    </main>
  );
};

export default App;
