import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import h1 from "./Harmony01.png"
import h2 from "./Harmony02.png"
import h3 from "./Harmony03.png"
import h4 from "./Harmony04.png"
import h5 from "./Harmony05.png"
import h6 from "./Harmony06.png"
import h7 from "./Harmony07.png"
import Highlight from "react-highlight.js";

class HarmonySetup extends React.Component {

    scrollTo = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <div className="card text-left bg-dark">
                        <div className="card-header text-center text-white" href="#collapseOne"></div>
                        <div className='card-body text-white'>
                            <h2 className="text-header">Harmony Intro</h2>
                            <p className="text-about">The goal for this guide is to set up everything you need for Harmony development.</p>
                            <p className="text-about">But first, what even is Harmony?</p>
                            <p className="text-about">A library for patching, replacing and decorating .NET and Mono methods during runtime. When using Harmony, just about anything is possible. I would reccomend you proceed with this section if you are brushed up on C# or are strong with other programming languages.</p>
                            <p className="text-about">Lets start by getting Visual Studio! <b>This is different from Visual Studio Code!</b> 
                            <Link to="/Tools"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Tools</p></Link></p>
                            <p className="text-about">Open Visual Studio and go File -> New -> Project...</p>
                            <div><img src={h1} style={{ maxWidth: "100%" }} alt="OSFM Page Header" /></div>
                            <p className="text-about">Select .Net Framework, set the location and name your project. <b>Dont Select .Net Standard</b></p>
                            <div><img src={h2} style={{ maxWidth: "100%" }} alt="OSFM Page Header" /></div>
                            <p className="text-about">Right click your project -> Properties</p>
                            <div><img src={h3} style={{ maxWidth: "100%" }} alt="OSFM Page Header" /></div>
                            <p className="text-about">Select Application -> Set Target Framework to .Net Framework 3.5 (No client Profile)</p>
                            <div><img src={h4} style={{ maxWidth: "100%" }} alt="OSFM Page Header" /></div>
                            <p className="text-about">Select Build -> Advanced and set "Debugging Information" to none.</p>
                            <div><img src={h5} style={{maxWidth: "100%"}} alt="OSFM Page Header" /></div>
                            <p className="text-about">Close Advanced, and in the same window I like to set the Output Path to an active mod folder.</p>
                            <div><img src={h6} style={{ maxWidth: "100%" }} alt="OSFM Page Header" /></div>
                            <p className="text-about">Right click your refrences -> Add Reference...</p>
                            <p className="text-about">Click Browse...</p>
                            <p className="text-about">Navigate to</p>
                            <Highlight language="xml">F:\steam\steamapps\common\One Step From Eden\OSFE_Data\Managed</Highlight>
                            <p className="text-about">Then select the files:</p>
                            <Highlight language="xml">Assembly-CSharp.dll<br/>
                            UnityEngine.dll</Highlight>
                            <p className="text-about">Click "Add"</p>
                            <p className="text-about">Click "Ok" and close the Reference Manager.</p>
                            <div><img src={h7} style={{ maxWidth: "100%" }} alt="OSFM Page Header" /></div>
                            <p className="text-about">Left Click on both Assembly-CSharp.dll and UnityEngine.dll and set Copy Local to False (Properties pane).</p>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">Our enviroment is set up! In the next section we will start out with a simple hello world to ensure everything is working!</p>              

                            <div style={{ position: "relative", bottom: "-12px" }} className="d-flex justify-content-between">
                                <div></div>
                                <Link to="/HarmonyIntro"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Our First Harmony Mod <i class="fas fa-arrow-right"></i></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HarmonySetup;