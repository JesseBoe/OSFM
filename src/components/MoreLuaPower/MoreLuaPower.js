import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import mlp1 from "./MLP01.png"


class MoreLuaPower extends React.Component {

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
                            <h2 className="text-header">More Lua Power</h2>
                            <p className="text-about">Now introducing MoreLuaPower! This is a mod available on the workshop that aims to make modding much much easier for the general public. It provides you with the ability to do many different things that are not possible without harmony modding.</p>
                            <p className="text-about">Huge props to Golden Epsilon and everyone else who has contributed! You can contribute to the project here: <a href="https://github.com/GoldenEpsilon/MoreLuaPower">https://github.com/GoldenEpsilon/MoreLuaPower</a></p>
                            <h2 className="text-header">Uses:</h2>
                            <p className="text-about">Without MoreLuaPower there are some variables and classes in the C# code that we cannot change within our LUA mods.</p>
                            <p className="text-about">Ability to import .ogg and .wav files.</p>
                            <p className="text-about">Ability to create custom Brands.</p>
                            <p className="text-about">Ability to create unity particle effects.</p>
                            <p className="text-about">Ability to create custom effects (Ex: Flow, Trinity, Frost).</p>
                            <p className="text-about">And a bunch of other stuff. You can see a full list of features here: <a href="https://github.com/GoldenEpsilon/MoreLuaPower/blob/master/API.txt">https://github.com/GoldenEpsilon/MoreLuaPower/blob/master/API.txt</a></p>

                            <h2 className="text-header">How to use:</h2>
                            <p className="text-about">Subscribe to the mod at: <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2066319533">https://steamcommunity.com/sharedfiles/filedetails/?id=2066319533</a>.</p>
                            <p className="text-about">While making a mod that is dependant on MoreLuaPower, make sure your to have your mods in an extra folder.</p>
                            <div><img src={mlp1} alt="OSFM Page Header" /></div>
                            <p className="text-about">We need to do this since OSFE does not support Mod Priority, but with MoreLuaPower sub folders will always be loaded after MoreLuaPower.</p>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">We can now use MoreLuaPower in our mods. Make sure that if you use MoreLuaPower, let players know they must install it on your workshop page! I will be showing how to use some features, but there is much more in MoreLuaPower that is out of the scope of this website.</p>
                            <div style={{ position: "relative", bottom: "-12px" }} className="d-flex justify-content-between">
                                <Link to="/LuaIntro"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop"><i class="fas fa-arrow-left"></i> Intro to Lua</p></Link>
                                <Link to="/LuaExamples"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Lua Examples <i class="fas fa-arrow-right"></i></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MoreLuaPower;