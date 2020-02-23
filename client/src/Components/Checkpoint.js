import React, { Component } from "react";
import "../Css/Checkpoint.css";

const Checkpoint = (props, params) => (
  <div className="checkpoint">
    <div className="track-title">
      <p id="tracking-title"> Verification Pictures </p>
    </div>
    {props.tracking.map(element => {
      var element = element.reverse();
      return (
        <div className="checkpoint-details">
          <h4>Airport: SEA</h4>
          <p>Airline: Delta</p>
          <p>Date: February 23, 2020</p>
          <div className="photo-checkpoint">
            <img
              style={{ width: "350px", paddingLeft: "15px" }}
              src={`data:image/png;base64,${element[0].data}`}
            ></img>
          </div>
        </div>
      );
    })}

    <div className="checkpoint-links">
      <a href="#">Back</a>
      <a href="#">Send Report</a>
    </div>
  </div>
);

export default Checkpoint;
