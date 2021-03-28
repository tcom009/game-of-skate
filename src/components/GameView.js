import React, { useEffect, useContext, useState } from "react";
import { GameContext } from "../App.js";
import GameScoresView from "./GameScoresView";
import HourGlassSpinner from "./HourGlassSpinner";
function GameView() {
  const [animationEnded, setAnimationEnded] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimationEnded(true), 2000);
  });

  return (
    <div className="container">
      {!animationEnded ? <HourGlassSpinner /> : <GameScoresView />}
    </div>
  );
}
export default GameView;
