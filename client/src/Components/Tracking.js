import React, { Component, Fragment } from "react";
import Checkpoint from "./Checkpoint";
import "../Css/Tracking.css";
import image from "../Images/sample.png";
import image2 from "../Images/Timeline.png";

export const Tracking = props => (
  <div className="tracking">
    <div className="track-title">
      <p id="tracking-title"> Tracking: 90060000001 </p>
    </div>

    {props.tracking[0] ? (
      <div className="timeline">
        <a href="/checkpoint">
          <img src={image2} alt="sample photo" />
        </a>
      </div>
    ) : null}

    <div className="main-details">
      {props.tracking.map(elements => {
        var reversed = elements.sort().reverse();
        return reversed.map((element, index) =>
          element.metadata ? (
            <Fragment>
              <div className="tracking-point">
                <div className="details">
                  <h4>
                    Airport:{" "}
                    {element.metadata.airport
                      ? element.metadata.airport
                      : index == 0
                      ? "SEA"
                      : "ATL"}
                  </h4>
                  <p>Airline: {element.metadata.airline}</p>
                  <p>
                    Date:{" "}
                    {new Date(element.metadata.date).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      }
                    )}
                  </p>
                  <p>
                    Time:{" "}
                    {new Date(element.metadata.date)
                      .toLocaleTimeString()
                      .replace(/:\d+ /, " ") +
                      " " +
                      new Date(element.metadata.date)
                        .toLocaleTimeString("en-us", { timeZoneName: "short" })
                        .split(" ")[2]}
                  </p>
                </div>
                <div className="photo">
                  <a href={`/checkpoint`}>
                    <img src={`data:image/png;base64,${element.data}`}></img>
                  </a>
                </div>
              </div>
              <hr></hr>
            </Fragment>
          ) : null
        );
      })}
      {props.tracking[0] ? (
        <div className="tracking-point">
          <h4> Arrived! Go to Baggage Claim 6.</h4>
        </div>
      ) : null}
    </div>
  </div>
);

export default Tracking;
