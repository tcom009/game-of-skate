import React, { useContext } from "react";
function Scoreboard() {
	const gameContext = useContext();

	return (
		<div className="container">
			<div className="columns">
				<div className="column"></div>
			</div>
			<div className="columns">
				<div className="">{}</div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
			</div>
		</div>
	);
}
export default Scoreboard;
