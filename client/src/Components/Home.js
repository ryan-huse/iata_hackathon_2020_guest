import React, { Component } from "react";
import "../Css/Home.css";
import image from "../Images/Edit_button.png";

class Home extends Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <div className="home">
        <div className="home-title">
          <p id="homebase-title"> Flight Information </p>
        </div>
        <form>
          <h1> Flight Number: </h1> <h2>DL2680 </h2>
          <hr></hr>
          <h1>Departure City: </h1> <h2>Atlanta(ATL)</h2>
          <hr></hr>
          <h1>Date of Departure: </h1> <h2> 02/26/2020</h2>
          <hr></hr>
          <h1>Time of Departure:</h1> <h2> 10:20 am</h2>
          <hr></hr>
          <h1>Final Destination:</h1> <h2> Seattle(SEA)</h2>
          <hr></hr>
          <h1>Date of Arrival: </h1> <h2> 02/26/2020</h2>
          <hr></hr>
          <h1>Time of Departure:</h1> <h2> 10:20 am</h2>
        </form>
        <br></br>
        <div className="home-title2">
          <p id="homebase-title2"> Mobility Device Specifications</p>
          <img className="edit" src={image} alt="sample photo" />
        </div>
        <h1>Dimensions: </h1>
        <br></br>
        <h3>Length:</h3> <h4>42 inches</h4>
        <h3>Width:</h3> <h4>23.25 inches</h4>
        <h3>Height:</h3> <h4>24 inches</h4>
        <h3>Weight:</h3> <h4>200 lbs</h4>
        <hr></hr>
        <h1>Battery Type:</h1> <h4>non-spillable battery</h4>
        <hr></hr>
        <h1>Removable Parts:</h1> <h4> Head Rest</h4>
        <h1> </h1> <h4> Seat Cushion</h4>
        <h1> </h1> <h4> Side Protectors</h4>
        <br></br>
        <hr></hr>
        <h1>Additional Information: </h1> <h4> None</h4>
      </div>
    );
  }
}

export default Home;
