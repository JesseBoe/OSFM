import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import b1 from "./Basics01.png"
import b2 from "./Basics02.png"
import b3 from "./Basics03.png"
import b4 from "./Basics04.png"

class BasicOverview extends React.Component {

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
                            <h2 className="text-header">Basic Overview</h2>
                            <p className="text-about">The goal for this guide is to introduce you to the game's data folder.</p>
                            <p className="text-about">Lets get started by going to F:\steam\steamapps\common\One Step From Eden\OSFE_Data\StreamingAssets\Data.</p>
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"> <img className="category-header" src={b1} alt="OSFM Page Header" /></div>
                            <p className="text-about">This folder contains every spell, artifact, most enemies and much much more.</p>
                            <p className="text-about">As you can imagine this is a great resource.</p>
                            <div><img src={b2} alt="OSFM Page Header" /></div>
                            <p className="text-about">Right click anywhere in the folder and Open with Code.<br></br> (If this option is not available perhaps you just installed and have not reset your computer?)</p>
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"> <img className="category-header" src={b3} alt="OSFM Page Header" /></div>
                            <p className="text-about">Your window should look something like this. Lets open the Spells.xml file.</p>
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"> <img className="category-header" src={b4} alt="OSFM Page Header" /></div>
                            <p className="text-about">Behold, this is every spell in the game and more! Dont worry about knowing what every single tag does. I will be showing you a simple way to make your own custom spells later.</p>
                            <p className="text-about">I think the important part here is showing you what an XML file looks like.</p>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">We learned a little about navigating with VSC and about the Data folder.</p>
                            <div style={{position:"relative", bottom: "-12px"}} className="d-flex justify-content-between">
                                <Link to="/Tools"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop"><i class="fas fa-arrow-left"></i> Tools for the Job</p></Link>
                                <Link to="/Xml"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">What is an XML file anyways? <i class="fas fa-arrow-right"></i></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default BasicOverview;