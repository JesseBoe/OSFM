import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Highlight from "react-highlight.js";
import s1 from "./SS1.png"
import s2 from "./SS2.png"
import s3 from "./SS3.png"


class SpritesAndSounds extends React.Component {

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
                            <h2 className="text-header">Viewing Sprites And Sound Files</h2>
                            <p className="text-about">This tutorial requires Asset Studio. Follow the link bellow if you have not downloaded it.</p>
                            <Link to="/Tools"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Tools <i class="fas fa-arrow-right"></i></p></Link>
                            <div><img src={s1} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about">Open AssetStudioGUI.</p>
                            <p className="text-about">Go File -> Load Folder.</p>
                            <p className="text-about">Open F:\steam\steamapps\common\One Step From Eden</p>
                            <div><img src={s2} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about">Click the Asset List tab.</p>
                            <div><img src={s3} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about">You can filter your search to find what you need.</p>
                            <p className="text-about">To save a file simply right click it and press "Export selected assets".</p>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">Its really that simple! I find this very useful for making spell icons/finding sound effects to fit my custom spells.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SpritesAndSounds;