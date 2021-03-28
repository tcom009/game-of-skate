import React from "react";
import "./HourGlassSpinner.css";

function HourGlassSpinner() {
  return (
    <div className="container">
      <div className="columns ">
        <div className="column has-text-centered">
          <h1>Sorteando Jugadores</h1>
        </div>
      </div>
      <div className="columns ">
        <div className="column"></div>
        <div className="column is-half">
          <div className="lds-dual-ring"></div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default HourGlassSpinner;
