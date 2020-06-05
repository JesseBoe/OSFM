import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import bg from "../../images/OSFMBG1.png"

class Home extends React.Component {

    scrollTo = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render () {
        return(
            <div>
                <div className="container mt-4">
                    <div className="card text-left bg-dark">
                        <img className="category-header" src={bg} alt="OSFM Page Header" /> 
                        <div className="card-header text-center text-white" href="#collapseOne">
                        </div>
                        <div className='card-body text-white'>
                            <h2 className="text-header">What is this?</h2>
                            <p className="text-about">Welcome to One Step From Modding! OSFE is the first game I have ever modded. I wanted to share some of the things I have learned here with you! I am by no means an expert, but my hope is that I can help inspire people to get creative. Simply click on the navbar in the top left to get started.</p>
                            <h2 className="text-header">I dont have much coding experience. Is modding really for me?</h2>
                            <p className="text-about">This game is very mod friendly and I think with guides we can make this game even more accessible. Depending on how much you are trying to accomplish, the amount of trouble you will run into will vary, but with that being said, I believe you can make very cool spells and characters even without coding experience. Remember, when it comes to learning something new there will always be challenges! If you feel truly stuck you can check out the Modding channel in the OSFE official discord. We are a friendly bunch, so feel free to post your creations there.</p>
                            <h2 className="text-header">But Sunreal, I dont see a guide on how to do X!</h2>
                            <p className="text-about">This site is a WIP, so feel free to message me on discord with any critiques!</p>
                            <br/>
                            <div style={{ position: "relative", bottom: "-12px" }} className="d-flex justify-content-between">
                                <div></div>
                                <Link to="/WorkshopSetup"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Your First Mod<i className="fas fa-arrow-right"></i></p></Link>
                            </div>
                        </div>.
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;