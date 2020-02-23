import React, { Component } from 'react';
import Checkpoint from './Checkpoint';
import '../Css/Tracking.css';
import image from '../Images/sample.png';

const Tracking = () => (
  <div className="tracking">
    <div className="track-title">
      <p id="tracking-title"> Tracking: 123456 </p>
    </div>

    <div className="verticalLine">
      some icon
    </div>

    <div className="main-details">
      <div className="tracking-point">
        <div className="details">
          <h4>Atlanta airport</h4>
          <p>Airline: Delta</p>
          <p>Date: February 26, 2020</p>
          <p>Timestamp: 10:00 AM EST</p>
        </div>
        <div className="photo">
          <a href="/checkpoint">
            <img src={image} alt="sample photo" />
          </a>
        </div>
      </div>

      <hr></hr>
      <div className="tracking-point">
        <div className="details">
          <h4>Seattle airport</h4>
          <p>Airline: Delta</p>
          <p>Date: February 26, 2020</p>
          <p>Timestamp: 1:20 PM EST</p>
        </div>
        <div className="photo">
        <div className="photo">
          <a href="/checkpoint">
          <img src={image} alt="sample photo" />
          </a>
        </div>
        </div>
      </div>
      <hr></hr>
      <div className="tracking-point">
        Arrived! Go to Baggage Counter 6.
      </div>
    </div>
  </div>
)

export default Tracking;