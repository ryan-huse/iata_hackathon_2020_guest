import React, { Component } from 'react';
import Checkpoint from './Checkpoint';
import '../Css/Tracking.css';
import image from '../Images/sample.png';
import image2 from '../Images/Timeline.png';

const Tracking = () => (
  <div className="tracking">
    <div className="track-title">
      <p id="tracking-title"> Tracking: 123456 </p>
    </div>

    <div className="timeline">
          <a href="/checkpoint">
            <img src={image2} alt="sample photo" />
          </a>
        </div>

    <div className="main-details">
      <div className="tracking-point">
        <div className="details">
          <h4>Atlanta airport</h4>
          <p>Airline: Delta</p>
          <p>Date: February 26, 2020</p>
          <p>Timestamp: 10:00 AM</p>
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
          <p>Timestamp: 1:20 PM</p>
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
       <h4> Arrived! Go to Baggage Claim 6.</h4>
      </div>
    </div>
  </div>
  
)

export default Tracking;