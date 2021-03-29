import React, { useContext } from "react";
import Scoreboard from "./Scoreboard";
import { GameContext } from "../App.js";
import StatusDisplay from "./StatusDisplay";

function GameScoresView() {
	const gameContext = useContext(GameContext);
	var {
		playerState: { p1name, p2name },
	} = gameContext;

	return (
		<>
			<StatusDisplay />
			<div className="columns">
				<div className="column"></div>
				<div className="column">
					<div className="columns">
						<div className="column">
							<Scoreboard player={p1name} />
						</div>
					</div>
				</div>
				<div className="column">
					<div className="columns">
						<div className="column">
							<Scoreboard player={p2name} />
						</div>
					</div>
				</div>
				<div className="column"></div>
			</div>
		</>
	);
}

export default GameScoresView;
