import React, { Component } from 'react';
import '../Css/Checkpoint.css';

const Checkpoint = () => (
  <div className="checkpoint">

    <div className="track-title">
      <p id="tracking-title"> Verification Pictures </p>
    </div>

    <div className="checkpoint-details">
      <h4>Atlanta airport</h4>
      <p>Airline: Delta</p>
      <p>Date: February 26, 2020</p>
      <p>Timestamp: 10:00 AM</p>
    </div>

    <div className="photos">
      Images here
    </div>
    
    <div className="checkpoint-links">
      <a href="#">Back</a>
      <a href="#">Send Report</a>
    </div>
  </div>
)

export default Checkpoint;