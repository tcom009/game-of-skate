import React, { useContext } from "react";
import Scoreboard from "./Scoreboard";
import { GameContext } from "../App.js";
function GameScoresView() {
  const gameContext = useContext(GameContext);
  let player1 = gameContext.playerState.p1name;
  let player2 = gameContext.playerState.p2name;
  let p1score = gameContext.playerState.p1score;
  let p2score = gameContext.playerState.p2score;
  let leader = gameContext.gameState.leader;

  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column">
        <div className="columns">
          <div className="column">
            <Scoreboard leader={leader} player={player1} score={p1score} />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="columns">
          <div className="column">
            <Scoreboard leader={leader} player={player2} score={p2score} />
          </div>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default GameScoresView;
