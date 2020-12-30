import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

import Home from './components/Home/Home.js'
import BasicOverview from './components/BasicOverview/BasicOverview.js'
import WorkshopSetup from './components/WorkshopSetup/WorkshopSetup.js'
import Tools from './components/Tools/Tools.js'
import FirstSpell from './components/FirstSpell/FirstSpell.js'
import FirstCharacter from './components/FirstCharacter/FirstCharacter.js'
import SpritesAndSounds from './components/SpritesAndSounds/SpritesAndSounds.js'
import DotPeek from './components/DotPeek/DotPeek.js'
import LuaIntro from './components/LuaIntro/FirstLua.js'
import LuaExamples from './components/LuaExamples/LuaExamples.js'
import MoreLuaPower from './components/MoreLuaPower/MoreLuaPower.js'
import CustomBrand from './components/CustomBrand/CustomBrand.js'
import CustomEffect from './components/CustomEffects/CustomEffects.js'
import HarmonyIntro from './components/HarmonySetup/HarmonySetup.js'
import CustomEnemies from './components/CustomEnemy/CustomEnemy.js'
import CustomSkin from './components/CharacterSkin/CharacterSkin.js'
import CustomZones from './components/CustomZones/CustomZones.js'
import AdvancedTesting from './components/AdvancedTesting/AdvancedTesting.js'

import './App.css';
import './simple-sidebar.css';



function App() {
  return (
    <div className="App">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>
      <Router>
        <div className="d-flex" id="wrapper">
          <div className="bg-dark border-right border-dark text-light sticky-sidebar" id="sidebar-wrapper">
            <div className="sidebar-heading">Getting Started</div>
            <div className="list-group list-group-flush">
              <Link to="/WorkshopSetup"><span className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Steam Workshop Setup</span></Link>
              <Link to="/Tools"><span className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Tools</span></Link>
              <Link to="/Basics"><span className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Basic Overview</span></Link>
              <Link to="/FirstSpell"><span className="list-group-item list-group-item-action bg-dark text-light text-left toTop">First Spell</span></Link>
              <Link to="/FirstCharacter"><span className="list-group-item list-group-item-action bg-dark text-light text-left toTop">First Character</span></Link>
            </div>

            <div className="sidebar-heading">Advanced</div>
            <div className="list-group list-group-flush">
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop"><b>Spells.xml</b></span></Link>
              <Link to="/LuaIntro"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Intro to LUA</span></Link>
              <Link to="/LuaExamples"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">LUA Examples</span></Link>
              <Link to="/MoreLuaPower"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">More LUA Power</span></Link>
              <Link to="/CustomBrands"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Custom Brands</span></Link>
              <Link to="/CustomEnemies"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Custom Enemies</span></Link>
              <Link to="/CustomEffects"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Custom Effects</span></Link>
              <Link to="/CharacterSkins"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Character Skins</span></Link>
              <Link to="/About"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop"><b>Custom Particle Effects</b></span></Link>
              <Link to="/CustomZones"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">Custom Zones</span></Link>
              <Link to="/AdvancedTesting"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop">AdvancedTesting</span></Link>
            </div>

            <div className="sidebar-heading">Viewing Game Files</div>
            <div className="list-group list-group-flush">
              <Link to="/SpritesAndSounds"><span href="#" className="list-group-item list-group-item-action bg-dark text-light text-left toTop">Sprites and Sounds</span></Link>
              <Link to="/DotPeek"><span href="#" className="list-group-item list-group-item-action bg-dark text-light text-left toTop">C# Scripts</span></Link>
            </div>
            
            <div className="sidebar-heading">Harmony</div>
            <div className="list-group list-group-flush">
              <Link to="/HarmonyIntro"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop"><b>Harmony Setup</b></span></Link>
              <Link to="/HarmonyIntro"><span href="#" className="list-group-item list-group-item-action text-light bg-dark text-left toTop"><b>Harmony Example</b></span></Link>
            </div>   
          </div>
          <div id="page-content-wrapper">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark01 border-dark border-bottom">
              <button className="btn btn-primary" id="menu-toggle"><i className="fas fa-bars"></i></button>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="sidebar-heading text-light ml-4"><Link to="/"><a className="nav-link text-light toTop">Home <span class="sr-only">(current)</span></a></Link></div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item active" style={{color: "white"}}>
                    One Step From Modding by Sunreal
                  </li>
                </ul>
              </div>
            </nav>
            <div class="container-fluid">
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/WorkshopSetup" component={WorkshopSetup} />
              <Route exact={true} path="/Tools" component={Tools} />
              <Route exact={true} path="/Basics" component={BasicOverview} />
              <Route exact={true} path="/FirstSpell" component={FirstSpell} />
              <Route exact={true} path="/FirstCharacter" component={FirstCharacter} />
              <Route exact={true} path="/SpritesAndSounds" component={SpritesAndSounds} />
              <Route exact={true} path="/DotPeek" component={DotPeek} />
              <Route exact={true} path="/LuaIntro" component={LuaIntro} />
              <Route exact={true} path="/LuaExamples" component={LuaExamples} />
              <Route exact={true} path="/MoreLuaPower" component={MoreLuaPower} />
              <Route exact={true} path="/CustomBrands" component={CustomBrand} />
              <Route exact={true} path="/CustomEffects" component={CustomEffect} />
              <Route exact={true} path="/HarmonySetup" component={HarmonyIntro} />             
              <Route exact={true} path="/CustomEnemies" component={CustomEnemies} />
              <Route exact={true} path="/CharacterSkins" component={CustomSkin} />              
              <Route exact={true} path="/CustomZones" component={CustomZones} />              
              <Route exact={true} path="/AdvancedTesting" component={AdvancedTesting} />              
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
