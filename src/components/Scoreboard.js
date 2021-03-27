import React from "react";
function Scoreboard(params) {
	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<p>{params.player}</p>
				</div>
			</div>
			<div className="columns">
				<div className="">{params > 0 ? "S" : "-"}</div>
				<div className="">{params > 1 ? "K" : "-"}</div>
				<div className="">{params > 2 ? "A" : "-"}</div>
				<div className="">{params > 3 ? "T" : "-"}</div>
				<div className="">{params > 4 ? "E" : "-"}</div>
			</div>
		</div>
	);
}
export default Scoreboard;
