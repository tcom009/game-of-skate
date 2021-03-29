import React, { useState, useContext } from "react";
import { GameContext } from "../App.js";

function PlayerForm() {
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [notValid, setNotValid] = useState(false);
	const gameContext = useContext(GameContext);
	const { playerDispatch, gameDispatch } = gameContext;

	const pickPlayer = () => {
		console.log("Seleccionando Jugador");
		var number = Math.ceil(Math.random() * 10);
		console.log(number);
		if (number % 2 === 0) {
			gameDispatch({ value: player2, type: "setLeader" });
			gameDispatch({ value: player2, type: "setActivePlayer" });
		} else {
			gameDispatch({ value: player1, type: "setLeader" });
			gameDispatch({ value: player1, type: "setActivePlayer" });
		}
	};

	const validateForm = () => {
		if (player1 === "" || player1 === player2 || player2 === "") {
			setNotValid(true);
			setPlayer1("");
			setPlayer2("");
		} else {
			setNotValid(false);
			pickPlayer();
			playerDispatch({ type: "setPlayer1Name", value: player1 });
			playerDispatch({ type: "setPlayer2Name", value: player2 });
			gameDispatch({ type: "startGame" });
			gameDispatch({ type: "message", value: "mostrando mensaje" });
		}
	};

	return (
		<div className="container">
			{notValid === true && (
				<div className="columns">
					<div className="column">
						<article className="message is-warning">
							<div className="message-header">
								<p>Cuidado!</p>
								<button className="delete" aria-label="delete"></button>
							</div>
							<div className="message-body">
								Los nombres no pueden ser iguales
							</div>
						</article>
					</div>
				</div>
			)}
			<div className="columns">
				<div className="column">
					<label className="label">Jugador 1</label>
					<div className="control">
						<input
							className="input"
							placeholder="Nones"
							value={player1}
							onChange={(e) => setPlayer1(e.target.value.toUpperCase())}
							type="text"
						/>
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<label className="label">Jugador 2</label>
					<div className="control">
						<input
							className="input"
							placeholder="Pares"
							value={player2}
							onChange={(e) => setPlayer2(e.target.value.toUpperCase())}
							type="text"
						/>
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<button onClick={validateForm} className="button is-primary">
						{" "}
						Iniciar Juego
					</button>
				</div>
			</div>
		</div>
	);
}

export default PlayerForm;
