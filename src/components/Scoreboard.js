import React, { useContext, useState } from "react";
import { GameContext } from "../App.js";
import { FailDisabledButton, LandedDisabledButton } from "./DisabledButtons";
function Scoreboard(params) {
  const gameContext = useContext(GameContext);
  const playerDispatch = gameContext.playerDispatch;
  const dispatchP1 = (val) =>
    playerDispatch({ type: "setP1Score", value: val });
  const dispatchP2 = (val) =>
    playerDispatch({ type: "setP2Score", value: val });
  let activePlayer = gameContext.gameState.activePlayer;

  const selectPlayerDispatch = (val) =>
    params.player === gameContext.playerState.p1name
      ? dispatchP1(val)
      : dispatchP2(val);

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <p>
            {params.player}
            {params.leader === params.player && (
              <span role="img" aria-label="emoj">
                {" "}
                👑{" "}
              </span>
            )}
          </p>
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
          {activePlayer === params.player ? (
            <button
              className="button is-success"
              onClick={() => selectPlayerDispatch(1)}
            >
              Aterrizado!
            </button>
          ) : (
            <LandedDisabledButton />
          )}
        </div>

        <div className="column">
          {activePlayer === params.player ? (
            <button
              className="button is-danger"
              onClick={() => selectPlayerDispatch(-1)}
            >
              Fallido!
            </button>
          ) : (
            <FailDisabledButton />
          )}
        </div>
      </div>
    </div>
  );
}
export default Scoreboard;
