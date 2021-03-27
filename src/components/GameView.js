import React, { useContext } from "react";
import { GameContext } from "../App.js";
import Scoreboard from "./Scoreboard";
function GameView() {
	const gameContext = useContext(GameContext);
	let player1 = gameContext.playerState.p1name;
	let player2 = gameContext.playerState.p2name;
	let p1score = gameContext.playerState.p1score;
	let p2score = gameContext.playerState.p1score;
	return <div></div>;
}
export default GameView;
