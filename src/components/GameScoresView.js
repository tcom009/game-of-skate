import React, { useContext } from "react";
import Scoreboard from "./Scoreboard";
import { GameContext } from "../App.js";
function GameScoresView() {
  const gameContext = useContext(GameContext);
  var {
    playerState: { p1name, p2name, p1score, p2score },
    gameState: { leader },
  } = gameContext;

  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column">
        <div className="columns">
          <div className="column">
            <Scoreboard leader={leader} player={p1name} score={p1score} />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="columns">
          <div className="column">
            <Scoreboard leader={leader} player={p2name} score={p2score} />
          </div>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default GameScoresView;
