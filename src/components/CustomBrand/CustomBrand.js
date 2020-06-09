import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Highlight from "react-highlight.js";
import i1 from "./MyBrandBG.png"
import i2 from "./MyBrandIcon.png"
import i3 from "./i3.png"


class CustomBrand extends React.Component {

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

                            <h2 className="text-header">Custom Brand</h2>
                            <p className="text-about">The goal of this section is to teach you how to create your very own brand! First of all you might be asking, what is a brand?</p>
                            <p className="text-about">In OSFE every spell the player can obtain belongs to a brand, like Anima, Slashfik or Kinesys.</p>
                            <p className="text-about">Using <Link to="/MoreLuaPower"><span onClick={() => { this.scrollTo() }} style={{ padding: "0px", display: "inline" }} className="nav-link toTop">MoreLuaPower</span></Link> it is possible to add your own!</p>
                            <p className="text-about">Lets create a file called init.lua</p>
                            <Highlight language="lua">
                                function Init(test)<br/>
                                &nbsp;&nbsp;MakeSprite("MyBrandIcon.png", PATH, "MyBrandIcon");<br/>
                                &nbsp;&nbsp;MakeSprite("MyBrandBG.png", PATH, "MyBrandBG");<br/>
                                &nbsp;&nbsp;MakeBrand("MyBrandName");<br/>
                                &nbsp;&nbsp;while (GetSprite("MyBrandBG") == null) do<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;WaitForFrames(1);<br/>
                                &nbsp;&nbsp;end<br/>
                                &nbsp;&nbsp;while (GetSprite("MyBrandIcon") == null) do<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;WaitForFrames(1);<br/>
                                &nbsp;&nbsp;end<br/>
                                &nbsp;&nbsp;SetBrandImage("MyBrandName", "MyBrandIcon", "MyBrandBG");<br/>
                                end<br/>
                            </Highlight>

                            <p className="text-about">With our file formatted like above, we can start adding our spells to the brand called "MyBrandName".</p>
                            <div><img src={i1} alt="OSFM Page Header" /></div>
                            <p className="text-about">Right click the image above and save it as "MyBrandBG.png" in your mod folder.</p>
                            <div><img src={i2} alt="OSFM Page Header" /></div>
                            <p className="text-about">Right click the image above and save it as "MyBrandIcon.png" in your mod folder.</p>
                            <div><img src={i3} alt="OSFM Page Header" /></div>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">We should be able to see our new brand in action!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CustomBrand;