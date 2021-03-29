import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FailDisabledButton, LandedDisabledButton } from "./DisabledButtons";

function Scoreboard(params) {
	const gameContext = useContext(GameContext);
	const {
		playerDispatch,
		gameDispatch,
		gameState: { activePlayer, leader, lastAttempt, gameOver },
		playerState: { p1name, p1score, p2name, p2score },
	} = gameContext;
	//dispatch method selector selects the dispatch for the scoreboard associated player
	const playerSelect = () =>
		params.player === p1name
			? {
					player: p1name,
					prevalence: "setP1Prevalence",
					response: "setP1responseCapability",
					lastAttemptSaved: "setP1lastAttemptsSaved",
					score: p1score,
					slave: p2name,
					setScore: "setP1Score",
			  }
			: {
					player: p2name,
					prevalence: "setP2Prevalence",
					response: "setP2responseCapability",
					lastAttemptSaved: "setP2lastAttemptsSaved",
					score: p2score,
					slave: p1name,
					setScore: "setP2Score",
			  };

	const {
		player,
		prevalence,
		response,
		lastAttemptSaved,
		score,
		slave,
		setScore,
	} = playerSelect();

	function isLanded() {
		if (activePlayer === leader) {
			playerDispatch({ type: prevalence });
			setActive(slave);
		} else if (activePlayer !== leader) {
			playerDispatch({ type: response });
			setActive(slave);
			if (score > 3 && lastAttempt) {
				gameDispatch({ type: "setLastAttempt", value: false });
				playerDispatch({ type: response });
				playerDispatch({ type: lastAttemptSaved });
				setActive(slave);
			}
		}
	}

	function isFailed() {
		if (activePlayer === leader) {
			gameDispatch({ type: "setLeader", value: slave });
			gameDispatch({ type: "setTotalMoves" });
			setActive(slave);
		} else if (activePlayer !== leader && score > 3 && lastAttempt) {
			playerDispatch({ type: setScore });
			gameDispatch({ type: "setWinner", value: slave });
			gameDispatch({ type: "setGameOver" });
			//uploadData();
		} else if (activePlayer !== leader && score > 3) {
			gameDispatch({ type: "setLastAttempt", value: true });
			gameDispatch({ type: "setActivePlayer", value: player });
			setActive(player);
		} else if (activePlayer !== leader) {
			playerDispatch({ type: setScore });
			gameDispatch({ type: "setTotalMoves" });
			setActive(slave);
		}
	}

	const setActive = (val) =>
		gameDispatch({ type: "setActivePlayer", value: val });

	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<p>
						{params.player}
						{leader === params.player && (
							<span role="img" aria-label="emoj">
								{" "}
								👑{" "}
							</span>
						)}
					</p>
				</div>
			</div>
			<div className="columns">
				<div className="column">{score > 0 ? "S" : "-"}</div>
				<div className="column">{score > 1 ? "K" : "-"}</div>
				<div className="column">{score > 2 ? "A" : "-"}</div>
				<div className="column">{score > 3 ? "T" : "-"}</div>
				<div className="column">{score > 4 ? "E" : "-"}</div>
			</div>
			<div className="columns">
				<div className="column">
					{/*Bloquear botones */}
					{activePlayer === params.player && !gameOver ? (
						<button
							className="button is-success"
							onClick={function () {
								isLanded();
								//disableButtons();
							}}
						>
							Aterrizado!
						</button>
					) : (
						<LandedDisabledButton />
					)}
				</div>

				<div className="column">
					{activePlayer === params.player && !gameOver ? (
						<button
							className="button is-danger"
							onClick={function () {
								isFailed();
								//disableButtons();
							}}
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
