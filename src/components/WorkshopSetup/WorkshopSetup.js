import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import bg from "../../images/OSFMBG1.png"
import ws1 from "./Workshop01.png"
import ws2 from "./Workshop02.png"
import ws3 from "./Workshop03.png"
import ws4 from "./Workshop04.png"
import ws5 from "./Workshop05.png"
import ws6 from "./Workshop06.png"

class WorkshopSetup extends React.Component {

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
                            <h2 className="text-header">Creating your first mod</h2>
                            <p className="text-about">Our goal for this guide is to be able to see, update and run our mod from the mods menu! Lets get started.</p>
                            <p className="text-about">Launch the game and navigate into the mods menu. Once loaded click the Create Mod button. Give your mod a name and a description, then click upload. Dont worry about the description so much, we can change it later.</p>
                            <div><img src={ws1} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about">Now that our mod is created, we need to subscribe to our own mod on the workshop. Lets open up our steam profile and navigate to workshop items.</p>
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"><img className="category-header" src={ws2} alt="OSFM Page Header" /></div>
                            <p className="text-about">Click on our mod.</p>                           
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"><img className="category-header" src={ws3} alt="OSFM Page Header" /></div>
                            <p className="text-about">Click subscribe and also click the "edit title and description" button. As of right now OSFE has a bug that will prevent you from uploading your mod without a description.</p>
                            <p className="text-about">Now close and reopen the game. We should see our new workshop mod!</p>                            
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"><img className="category-header" src={ws4} alt="OSFM Page Header" /></div>
                            <p className="text-about">The red circle opens up the local game files, the green circle opens up the steam workshop page and the yellow circle activates and deactivates our mod.</p>
                            <p className="text-about">Lets start by browsing the local game files, so click the button highlighted by the red circle.</p>                        
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"><img className="category-header" src={ws5} alt="OSFM Page Header" /></div>
                            <p className="text-about">This is where the magic happens. Anything you add to this folder ends up being uploaded to the steam workshop. This is also the folder that gets loaded when you hit install mods.</p>
                            <p className="text-about">For now, lets test our settup by clicking the "Update Mod" button, selecting the appropriate tags and click upload. You should see this upon completion</p>                            
                            <div><img src={ws6} className="mw100" alt="OSFM Page Header" /></div>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">We can now see, update and run our mod from the mods menu! It is important to note that our mod is still hidden on the steam workshop. I would recommend waiting until your mod is finsihed before publishing it to the steam workshop, or be prepared for negitive reviews.</p>
                            <div style={{ position: "relative", bottom: "-12px" }} className="d-flex justify-content-between">
                                <p></p>
                                <Link to="/Tools"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Tools for the Job <i class="fas fa-arrow-right"></i></p></Link>
                            </div>
                        </div>.
                    </div>
                </div>
            </div>
        );
    }

}

export default WorkshopSetup;