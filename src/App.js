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
              <a href="https://drive.google.com/file/d/19GtTaOrxCL1h7xOxKLSwUCLskxLHauSP/view?usp=sharing">
                Windows
              </a> | <a href="https://drive.google.com/file/d/13A2-_uqeSsBBTo_mN718pn2Tl7sr2PcI/view?usp=sharing"> Android</a>
            </span>
          </div>
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}
