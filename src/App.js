import React, { createContext, useReducer } from "react";
import "./App.css";
import PlayerForm from "./components/PlayerForm";
import GameView from "./components/GameView";

/*const gameStatusSchema ={ 
  gameStarted:false,
  gameOver:false,
  leader:"",
  activePlayer:"",
  button1Disabled:false,
  button2Disabled:false,
  lastAttpemt:0,
  winner:"",
  totalMoves:0,
}
*/

export const GameContext = createContext();

//About state keys
//Prevalence: this key counts how many times the player has the domain of the game
//Response: this key counts how many times the player responces a landed trick to the oppenent
//LastAttempSaved: this key counts how many times the player responces a trick in the second
//attempt on the last Letter
const playersInitialState = {
	p1name: "",
	p1score: 0,
	p1gamePrevalence: 0,
	p1responseCapability: 0,
	p1lastAttemptsSaved: 0,
	p2name: "",
	p2score: 0,
	p2gamePrevalence: 0,
	p2responseCapability: 0,
	p2lastAttemptsSaved: 0,
};

const gameStatus = {
	gameStarted: false,
	gameOver: false,
	leader: "",
	activePlayer: "",
	button1Disabled: false,
	button2Disabled: false,
	lastAttpemt: 0,
	winner: "",
	totalMoves: 0,
};

function PlayersReducer(state, action) {
	switch (action.type) {
		case "setPlayer1Name":
			return { ...state, p1name: action.value };
		case "setPlayer2Name":
			return { ...state, p2name: action.value };
		default:
			return state;
	}
}

function GameReducer(state, action) {
	switch (action.type) {
		case "startGame":
			return { ...state, gameStarted: true };
		case "":
			return { ...state, message: action.value };
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
