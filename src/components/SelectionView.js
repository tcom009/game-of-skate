import React, { useContext, useState } from "react";
import { GameContext } from "../App";
import HourGlassSpinner from "./HourGlassSpinner";

function SelectionView() {
  const context = useContext(GameContext);
  const gameState = context.gameState;
  const gameDispatch = context.gameDispatch;
  const player1 = context.playerState.p1name;
  const player2 = context.playerState.p2name;

  return (
    <div clasName="container">
      <div className="columns">
        <div className="column">Sorteando Jugador!</div>
      </div>
      <div className="columns">
        <div className="column">
          <HourGlassSpinner />
        </div>
      </div>
    </div>
  );
}

export default SelectionView;
