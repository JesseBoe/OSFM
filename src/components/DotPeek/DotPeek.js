import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Highlight from "react-highlight.js";
import DP1 from "./DP1.png"
import DP2 from "./DP2.png"


class DotPeek extends React.Component {

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
                            <h2 className="text-header">Viewing C# Scripts</h2>
                            <p className="text-about">This tutorial requires DotPeek. Follow the link bellow if you have not downloaded it.</p>
                            <Link to="/Tools"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Tools <i class="fas fa-arrow-right"></i></p></Link>
                            <p className="text-about">Open DotPeek.</p>
                            <div><img src={DP1} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about">Click the open folder button.</p>
                            <p className="text-about">Locate the F:\steam\steamapps\common\One Step From Eden\OSFE_Data\Managed folder.</p>
                            <div><img src={DP2} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about">In the assembly Explorer expand the Managed => Assembly-CSharp => &lt;Root NameSpace&gt;.</p>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">Now we can take a deeper look into how OSFE works.</p>
                            <p className="text-about">Since we can call most of these functions and variables in our lua scripts it could be a good idea to familiarize yourself with them!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DotPeek;