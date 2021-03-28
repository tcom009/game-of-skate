import React, { useContext } from "react";
import { GameContext } from "../App.js";

function Scoreboard(params) {
  const gameContext = useContext(GameContext);
  const playerDispatch = gameContext.playerDispatch;
  const dispatchP1 = () => playerDispatch({ type: "setP1Score", value: 1 });
  const dispatchP2 = () => playerDispatch({ type: "setP2Score", value: 1 });
  const selectPlayerDispatch = () =>
    params.player === gameContext.playerState.p1name ? dispatchP1() : dispatchP2()

  return (
    <div className="container">
      <div className="columns">
    	<div className="column">
          <p>{params.player}</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">{params.score > 0 ? "S" : "-"}</div>
        <div className="column">{params.score > 1 ? "K" : "-"}</div>
        <div className="column">{params.score > 2 ? "A" : "-"}</div>
        <div className="column">{params.score > 3 ? "T" : "-"}</div>
        <div className="column">{params.score > 4 ? "E" : "-"}</div>
      </div>
      <div className="columns">
        <div className="column">
          <button
            className="button is-primary"
            onClick={()=>selectPlayerDispatch()}
          >
            Aterrizado!
          </button>
        </div>

        <div className="column">
          <button
            className="button is-danger"
            // onClick={() => selectPlayerDispatch()}
          >
            Fallido!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Scoreboard;
