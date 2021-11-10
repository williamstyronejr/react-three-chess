import * as React from "react";
import Game from "./Game";

function App() {
  const [side, setSide] = React.useState("white");
  const [startGame, setStartGame] = React.useState(false);
  const [optionsVisible, setOptionsVisible] = React.useState(false);

  const changeSide = (evt) => {
    setSide(evt.target.value);
  };

  console.log(side, startGame, optionsVisible);
  return (
    <main className="main">
      <div className={`options ${optionsVisible ? "options--active" : ""}`}>
        <button
          className="options__wheel"
          type="button"
          onClick={() => setOptionsVisible(!optionsVisible)}
        >
          Wheel
        </button>

        <div className="options__menu">menu</div>
      </div>

      <section className={`menu ${startGame ? "menu--hidden" : ""}`}>
        <header className="menu__header">
          <h3 className="menu__heading">React Chess</h3>
        </header>

        <div className="menu__section">
          <button
            className={`menu__btn  menu__btn--side ${
              side === "white" ? "menu__btn--active" : ""
            }`}
            type="button"
            onClick={changeSide}
            value="white"
          >
            White
          </button>

          <button
            className={`menu__btn  menu__btn--side ${
              side === "black" ? "menu__btn--active" : ""
            }`}
            type="button"
            onClick={changeSide}
            value="black"
          >
            Black
          </button>
        </div>

        <button
          className="menu__btn menu__btn--start"
          type="button"
          onClick={() => setStartGame(true)}
        >
          Start Game
        </button>
      </section>

      <Game gameStarted={startGame} />
    </main>
  );
}

export default App;
