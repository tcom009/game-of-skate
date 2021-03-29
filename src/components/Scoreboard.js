import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FailDisabledButton, LandedDisabledButton } from "./DisabledButtons";
import StatusDisplay from "./StatusDisplay";

function Scoreboard(params) {
	const gameContext = useContext(GameContext);
	const {
		playerDispatch,
		gameDispatch,
		gameState: { activePlayer, leader, lastAttempt },
		playerState: { p1name, p1score, p2name, p2score },
	} = gameContext;
	//dispatch method selector
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
		} else if (activePlayer !== leader) {
			playerDispatch({ type: response });
			if (score > 3 && lastAttempt === true) {
				console.log(`${params.player} has salvado el ultimo truco`);
				gameDispatch({ type: "setLastAttempt" });
				playerDispatch({ type: response });
				playerDispatch({ type: lastAttemptSaved });
				//setPlayerResponseCapability(active);
			}
		}
	}

	function isFailed() {
		if (activePlayer === leader) {
			gameDispatch({ type: "setLeader", value: slave });
			gameDispatch({ type: "setTotalMoves" });
		} else if (activePlayer !== leader && score > 3 && lastAttempt === true) {
			playerDispatch({ type: setScore });
			playerDispatch({ type: setScore });
			gameDispatch({ type: "setWinner", value: slave });
			gameDispatch({ type: "setGameOver" });
			//uploadData();
		} else if (activePlayer !== leader && score > 3) {
			gameDispatch({ type: "setLastAttempt" });
		} else if (activePlayer !== leader) {
			playerDispatch({ type: setScore });
			gameDispatch({ type: "setTotalMoves" });
		}
	}

	const disableButtons = () => {
		if (!lastAttempt) {
			params.player === gameContext.playerState.p1name
				? gameDispatch({ type: "setActivePlayer", value: p2name })
				: gameDispatch({ type: "setActivePlayer", value: p1name });
		} else {
			gameDispatch({ type: "setActivePlayer", value: player });
		}
	};

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
					{activePlayer === params.player ? (
						<button
							className="button is-success"
							onClick={function () {
								disableButtons();
								isLanded();
							}}
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
							onClick={function () {
								disableButtons();
								isFailed();
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
