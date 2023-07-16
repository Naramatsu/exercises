import React from "react";
import RandomsUniqueNums from "./components/RandomsUniqueNums";
import RockPaperScissors from "./components/RockPaperScissors";
import ThemeState from "./components/Tricky/context/Theme/ThemeState";
import Tricky from "./components/Tricky";
import TextAnimated from "./components/TextAnimated";
import CardGlass from "./components/CardGlass/CardGlass";
import BackgroundAnimated from "./components/BackgroundAnimated";

const App = () => {
  return (
    <main>
      <BackgroundAnimated>
        <RandomsUniqueNums />
        <br />
        <RockPaperScissors />
        <br />
        <TextAnimated />
        <br />
        <CardGlass />
        <br />
        <ThemeState>
          <Tricky />
        </ThemeState>
      </BackgroundAnimated>
    </main>
  );
};

export default App;
