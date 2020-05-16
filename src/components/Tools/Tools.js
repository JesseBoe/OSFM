import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import t1 from "./Tools01.png"
import t2 from "./Tools02.png"

class Tools extends React.Component {

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
                            <h2 className="text-header">Tools for the Job</h2>
                            <p className="text-about">The goal for this guide is to introduce you to various tools we will be using in these guides.</p>
                            <br></br>
                            <h2 className="text-header">Visual Studio Code (Required)</h2>
                            <p className="text-about">Link: <a href={"https://code.visualstudio.com/"}>https://code.visualstudio.com/</a></p>
                            <p className="text-about">(VSC) is the tool we are going to be using for editing XML and LUA files. Its lightweight, customizable and its even what I am using to make this website! Do note that <b>Visual Studio Code and Visual Studio are not the same thing.</b></p>
                            <div><img src={t2} alt="OSFM Page Header" /></div>
                            <p className="text-about">Make sure that <b>"Open with Code"</b> is checked!</p>
                            <p className="text-about">After VSC is done installing, you can close it for now. We will be going over how to use it in the Basics Overview section.</p>
                            <br></br>
                            <h2 className="text-header">Asset Studio (Optional)</h2>
                            <p className="text-about">Link: <a href={"https://github.com/Perfare/AssetStudio/releases/tag/v0.14.0"}>https://github.com/Perfare/AssetStudio/releases/tag/v0.14.0</a></p>
                            <p className="text-about">AssetStudio is a tool for exploring, extracting and exporting game files.</p>
                            <p className="text-about">We will be going over how to use it in the Viewing Game Files (Simple) section.</p>
                            <br></br>
                            <h2 className="text-header">DotPeek (Optional)</h2>
                            <p className="text-about">Link: <a href={"https://www.jetbrains.com/decompiler/"}>https://www.jetbrains.com/decompiler/</a></p>
                            <p className="text-about">DotPeek is a tool for decomiling the games C# files. This allows us to get a more indepth look at how the games logic works.</p>
                            <p className="text-about">We will be going over how to use it in the Viewing Game Files (Advanced) section.</p>
                            <br></br>
                            <h2 className="text-header">Visual Studio for Harmony Modding (Optional Advanced)</h2>
                            <p className="text-about">Link: <a href={"https://visualstudio.microsoft.com/vs/"}>https://visualstudio.microsoft.com/vs/</a></p>
                            <p className="text-about">OSFE supports Harmony, a library for patching, replacing and decorating .NET and Mono methods during runtime! This allows you to really change the standard game flow while remaining compatible with other mods.</p>
                            <p className="text-about">We will be going over how to set up Visual Studio and use Harmony in the Harmony section.</p>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">For now lets only worry about Visual Studio Code.</p>
                            <div style={{ position: "relative", bottom: "-12px" }} className="d-flex justify-content-between">
                                <Link to="/WorkshopSetup"><p onClick={() => { this.scrollTo()}} style={{ padding: "0px" }} className="nav-link toTop"><i className="fas fa-arrow-left"></i> Workshop Setup</p></Link>
                                <Link to="/Basics"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Basics <i className="fas fa-arrow-right"></i></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Tools;