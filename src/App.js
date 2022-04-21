import React from "react";
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
            src="https://raw.githubusercontent.com/jordan-trempert/media/main/stardom-logo%20(1).png"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
        </span>
      </div>
      <div className="header">
        <span>
          <img
            src="https://raw.githubusercontent.com/jordan-trempert/media/main/stardom-logo%20(1).png"
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
              Perspective Part 1<br />
              <a href="https://stardomgames.itch.io/perspective-part-1">
                Download Now!
              </a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover">
          <div className="ds10">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Project%20Paradox.png"
              alt="dslogo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Project Paradox (Beta)<br />
              <a href="https://www.dropbox.com/s/8dbccpp8b2oxt8b/Project%20Paradox%20%28Beta%204%29.exe?dl=0">
                Windows
              </a> | 
             <a href="https://www.dropbox.com/s/8dbccpp8b2oxt8b/Project%20Paradox%20%28Beta%204%29.apk?dl=0"> Android</a>
              <br />
                <a href="https://projectchangelog.stardomga.me">
                Changelog
              </a>
              <br />
               <a href="https://github.com/StardomGames/ProjectParadoxBugTracker/issues">
                Bug Tracker
              </a>
            </span>
          </div>
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}
