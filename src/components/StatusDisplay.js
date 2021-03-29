//this component is just for control
import { useContext } from "react";
import React from "react";
import { GameContext } from "../App.js";
function StatusDisplay() {
	const gameContext = useContext(GameContext);
	const {
		playerState: {
			p1name,
			p1score,
			p1Prevalence,
			p1responseCapability,
			p1lastAttemptsSaved,
			p2name,
			p2score,
			p2Prevalence,
			p2responseCapability,
			p2lastAttemptsSaved,
		},
	} = gameContext;
	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<table class="table">
						<thead>
							<tr>
								<th></th>
								<th>{p1name}</th>
								<th>{p2name}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Prevalence</th>
								<td>{p1Prevalence}</td>
								<td>{p2Prevalence}</td>
							</tr>
							<tr>
								<th>Response</th>
								<td>{p1responseCapability}</td>
								<td>{p2responseCapability}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default StatusDisplay;
