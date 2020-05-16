import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

import Home from './components/Home/Home.js'
import BasicOverview from './components/BasicOverview/BasicOverview.js'
import WorkshopSetup from './components/WorkshopSetup/WorkshopSetup.js'
import Tools from './components/Tools/Tools.js'

import logo from './logo.svg';
import './App.css';
import './simple-sidebar.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="d-flex" id="wrapper">
          <div className="bg-dark border-right border-dark text-light sticky-sidebar" id="sidebar-wrapper">
            <div className="sidebar-heading">Getting Started</div>
            <div className="list-group list-group-flush">
              <Link to="/WorkshopSetup"><span className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Steam Workshop Setup</span></Link>
              <Link to="/Tools"><span className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Tools</span></Link>
              <Link to="/Basics"><span className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Basic Overview</span></Link>
              <Link to="/About"><span className="list-group-item list-group-item-action bg-dark text-light text-left toTop">What is XML</span></Link>
              <Link to="/About"><span className="list-group-item list-group-item-action bg-dark text-light text-left toTop">What is LUA</span></Link>
            </div>

            <div className="sidebar-heading">Custom Characters</div>
            <div className="list-group list-group-flush">
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Heroes.xml</span></Link>
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Animations</span></Link>
            </div>

            <div className="sidebar-heading">Custom Spells</div>
            <div className="list-group list-group-flush">
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Spells.xml</span></Link>
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Spells.lua</span></Link>
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Spell Icons</span></Link>
            </div>

            <div className="sidebar-heading">Viewing Game Files</div>
            <div className="list-group list-group-flush">
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Simple</span></Link>
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Sprites and Sounds</span></Link>
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action bg-dark text-light text-left toTop">C# Scripts</span></Link>
            </div>

            <div className="sidebar-heading">Harmony</div>
            <div className="list-group list-group-flush">
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Yeah right</span></Link>
            </div>

            <div className="sidebar-heading">Viewing Game Files</div>
            <div className="list-group list-group-flush">
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Simple</span></Link>
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Sprites and Sounds</span></Link>
              <Link to="/About"><span href="#" clasNames="list-group-item list-group-item-action bg-dark text-light text-left toTop">C# Scripts</span></Link>
            </div>
          </div>
          <div id="page-content-wrapper">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark01 border-dark border-bottom">
              <button className="btn btn-primary" id="menu-toggle"><i className="fas fa-bars"></i></button>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="sidebar-heading text-light ml-4">One Step From Modding by Sunreal</div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <Link to="/"><a className="nav-link text-light toTop">Home <span class="sr-only">(current)</span></a></Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div class="container-fluid">
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/WorkshopSetup" component={WorkshopSetup} />
              <Route exact={true} path="/Tools" component={Tools} />
              <Route exact={true} path="/Basics" component={BasicOverview} />
            </div>
          </div>

        </div>
      </Router>
    </div>
  );
}

export default App;
