import React, { createContext, useReducer } from "react";
import "./App.css";
import PlayerForm from "./components/PlayerForm";
import GameView from "./components/GameView";

export const GameContext = createContext();

//About state keys
//Prevalence: this key counts how many times the player has the domain of the game
//Response: this key counts how many times the player responces a landed trick to the oppenent
//LastAttempSaved: this key counts how many times the player responces a trick in the second
//attempt on the last Letter

const playersInitialState = {
	p1name: "",
	p1score: 0,
	p1Prevalence: 0,
	p1responseCapability: 0,
	p1lastAttemptsSaved: 0,
	p2name: "",
	p2score: 0,
	p2Prevalence: 0,
	p2responseCapability: 0,
	p2lastAttemptsSaved: 0,
};

const gameStatus = {
	gameStarted: false,
	gameOver: false,
	leader: "",
	activePlayer: "",
	buttonDisabled: "",
	lastAttempt: false,
	winner: "",
	totalMoves: 0,
};

function PlayersReducer(state, action) {
	switch (action.type) {
		case "setPlayer1Name":
			return { ...state, p1name: action.value };
		case "setPlayer2Name":
			return { ...state, p2name: action.value };
		case "setP1Score":
			return { ...state, p1score: state.p1score + 1 };
		case "setP2Score":
			return { ...state, p2score: state.p2score + 1 };
		case "setP1Prevalence":
			return { ...state, p1Prevalence: state.p1Prevalence + 1 };
		case "setP2Prevalence":
			return { ...state, p2Prevalence: state.p2Prevalence + 1 };
		case "setP1responseCapability":
			return { ...state, p1responseCapability: state.p1responseCapability + 1 };
		case "setP2responseCapability":
			return { ...state, p2responseCapability: state.p2responseCapability + 1 };
		case "setP2lastAttemptsSaved":
			return { ...state, p2lastAttemptsSaved: state.p2lastAttemptsSaved + 1 };
		case "setP1lastAttemptsSaved":
			return { ...state, p1lastAttemptsSaved: state.p1lastAttemptsSaved + 1 };
		default:
			return state;
	}
}

function GameReducer(state, action) {
	switch (action.type) {
		case "startGame":
			return { ...state, gameStarted: true };
		case "setLeader":
			return { ...state, leader: action.value };
		case "setActivePlayer":
			return { ...state, activePlayer: action.value };
		case "setLastAttempt":
			return { ...state, lastAttempt: action.value };
		case "setTotalMoves":
			return { ...state, totalMoves: state.totalMoves + 1 };
		case "setGameOver":
			return { ...state, gameOver: true };
		default:
			return state;
	}
}

function App() {
	const [playerState, playerDispatch] = useReducer(
		PlayersReducer,
		playersInitialState
	);
	const [gameState, gameDispatch] = useReducer(GameReducer, gameStatus);

	return (
		<GameContext.Provider
			value={{
				playerState: playerState,
				playerDispatch: playerDispatch,
				gameState: gameState,
				gameDispatch: gameDispatch,
			}}
		>
			{gameState.gameStarted ? <GameView /> : <PlayerForm />}
		</GameContext.Provider>
	);
}

export default App;
