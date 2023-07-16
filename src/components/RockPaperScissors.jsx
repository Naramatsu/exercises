import React from "react";

const posibleOptions = ["rock", "paper", "scissors"];

const cases = (option1, option2) => {
  switch (option1) {
    case "rock":
      if (option2 === "paper") return "Lose";
      if (option2 === "scissors") return "Win";
      return "Tied";
    case "paper":
      if (option2 === "scissors") return "Lose";
      if (option2 === "rock") return "Win";
      return "Tied";
    default:
      if (option2 === "rock") return "Lose";
      if (option2 === "paper") return "Win";
      return "Tied";
  }
};

const game = (option) => {
  const option2 = Math.floor(Math.random() * 3);
  return {
    match: `You -> ${option} vs ${posibleOptions[option2]} <- IA`,
    result: cases(option, posibleOptions[option2]),
  };
};

const RockPaperScissors = () => {
  const game1 = game("rock");
  const game2 = game("paper");
  const game3 = game("scissors");

  return (
    <section>
      <h3>Rock. Paper and Scissors game</h3>
      <h5>Result: </h5>
      <p>{game1.match}</p>
      <p>{game1.result}</p>
      <br />
      <p>{game2.match}</p>
      <p>{game2.result}</p>
      <br />
      <p>{game3.match}</p>
      <p>{game3.result}</p>
      <br />
    </section>
  );
};

export default RockPaperScissors;
