import React, { Component } from 'react';
import '../Css/Checkpoint.css';

const Checkpoint = () => (
  <div className="checkpoint">
    <div className="inner-checkpoint">

      <h2 id="checkpoint-title"> Verification Picture </h2>

      <div className="checkpoint-details">
        <p>Agent's ID: </p>
        <p>Location: </p>
        <p>Timestamp: </p>
        <p>Date: </p>
      </div>

      <div className="photos">
        Images here
      </div>
    </div>
    
    <div className="checkpoint-links">
      <a href="#">Back</a>
      <a href="#">Send Report</a>
    </div>
  </div>
)

export default Checkpoint;