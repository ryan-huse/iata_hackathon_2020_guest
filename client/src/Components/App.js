import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import "../Css/App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSignOutAlt, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import Checkpoint from "./Checkpoint";
import Tracking from "./Tracking";
import NotFound from "./NotFound";
import Logout from "./Logout";
import Header from "./Header";


library.add(fab, faHome, faMapMarker, faSignOutAlt)


class App extends Component {
  state = {
    isLoggedIn: false
  }

  logout = () => {
    this.setState({ isLoggedIn: false });
  }

  handleLogin = () => {
    this.setState({isLoggedIn: true});
  }
  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <div className="app">

        <Header/>
      
          <Switch>
            <Route path="/tracking" component={Tracking} />
            <Route path="/checkpoint" component={Checkpoint} />
            <Route path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch> 

          <div id="footer">
            <ul className="nav-list">
              <div>
                <FontAwesomeIcon icon={faHome} />
                <li className="nav-item"> <Link to="/">Home</Link> </li>
              </div>
              <div>
               <FontAwesomeIcon icon={faMapMarker} />
                <li className="nav-item"> <Link to="/tracking">Track</Link> </li>
              </div>
              <div>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <li className="nav-item"> <Link to="/logout" onClick={this.logout}> Logout </Link> </li>
              </div>
              {/* <li className="nav-item"> <Link to="/checkpoint">Checkpoint</Link>  </li> */}
            </ul>
          </div>  
        </div>
      </Router>
    )
  }
}

export default App;

// state = {
//   response: "",
//   post: "",
//   responseToPost: ""
// };

// componentDidMount() {
//   this.callApi()
//     .then(res => this.setState({ response: res.express }))
//     .catch(err => console.log(err));
// }

// callApi = async () => {
//   const response = await fetch("/api/hello");
//   const body = await response.json();
//   if (response.status !== 200) throw Error(body.message);

//   return body;
// };

// handleSubmit = async e => {
//   e.preventDefault();
//   const response = await fetch("/api/world", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ post: this.state.post })
//   });
//   const body = await response.text();

//   this.setState({ responseToPost: body });
// };
