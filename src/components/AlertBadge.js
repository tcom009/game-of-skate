import React from "react";

function AlertBadge(params) {
	return (
		<div class="notification is-danger">{params.name} es tu ultimo intento</div>
	);
}

export default AlertBadge;
