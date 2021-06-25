import React, {  } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route /*, Link*/
} from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return (
    <div className="body">
      <div className="header">
        <span>
          <img
            src="https://github.com/jordanreger/media/blob/main/stardomlogo.png?raw=true"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
        </span>
      </div>
      <div className="header">
        <span>
          <img
            src="https://github.com/jordanreger/media/blob/main/stardomlogo.png?raw=true"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
        </span>
      </div>
      <div className="airframe">
        <h1>
          <center>Perspective</center>
        </h1>
        <span id="hover">
          <div className="ds10">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Perspective.png"
              alt="dslogo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              GAME IS IN BETA! EXPECT BUGS! <br />
              <br />
              <br />
              <a href="https://www.dropbox.com/s/18csvqn7jkyuqvq/Perspective.zip?dl=0">
                Download Beta
              </a>
              <br />
              <br />
              <br />
            </span>
          </div>
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}
