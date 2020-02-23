import React from 'react';
import '../Css/Home.css';

const Home = () => (

<div className="home">
<div className="home-title">
  <p id="homebase-title"> Flight Information </p>
  
</div>
<form>
  <h1> Flight Number: </h1>     <h2>DL2680 </h2>
  <hr></hr>
    <h1>Departure City: </h1>     <h2>Atlanta(ATL)</h2> 
    <hr></hr>
    <h1>Date of Departure: </h1> <h2> 02/26/2020</h2>
    <hr></hr>
    <h1>Time of Departure:</h1>  <h2> 10:20 am</h2>
    <hr></hr>
    <h1>Final Destination:</h1>  <h2> Seattle(SEA)</h2>
    <hr></hr>
    <h1>Date of Arrival: </h1>   <h2> 02/26/2020</h2>
    <hr></hr>
    <h1>Time of Departure:</h1>   <h2> 10:20 am</h2>
</form>
<br></br>
<br></br>
<div className="home-title2">
<p id="homebase-title2"> Mobility Device Specifications </p>
</div>

</div>
);

export default Home;