import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import i1 from "./CustomZone01.png"
import i2 from "./WorldIconTemplate.png"
import i3 from "./WorldIconExample.png"
import i5 from "./WorldFire.png"
import i6 from "./WorldForest.png"
import i4 from "./WorldIce.png"

import bg0 from "./Ice-bg_0.png"
import bg1 from "./Ice-bg_1.png"
import bg2 from "./Ice-bg_2.png"
import bg3 from "./Ice-bg_3.png"
import bg4 from "./Ice-bg.png"

import bg5 from "./bg-0.png"
import bg6 from "./bg-1.png"
import bg7 from "./bg-2.png"
import bg8 from "./bg-3.png"
import bg9 from "./BattleBG.png"

import z1 from "./ZoneGuide.png"
import init1 from "./InitLuaExample.png"

import f1 from "./FolderStructure.png"


class CustomZones extends React.Component {

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
                            <h2 className="text-header">Custom Zones</h2>
                            <p className="text-about">The goal for this guide is to teach you how to make your own custom zone!</p>
                            <p className="text-about">The gameplay of OSFE is made up of many worlds that are contained in the zones.xml file.</p>
                            <p className="text-about">Using <Link to="/MoreLuaPower"><span onClick={() => { this.scrollTo() }} style={{ padding: "0px", display: "inline" }} className="nav-link toTop">MoreLuaPower</span></Link> it is possible to create your own!</p>
                            <p className="text-about"><b>Any time you are using More Lua Power remember to double up your first folder or it may load in the wrong order.</b></p>
                            <p className="text-about">Lets take a look at the steps involved.</p>
                            <ul>
                                <li className="text-about">Creating a world logo.</li>
                                <li className="text-about">Creating a background.</li>
                                <li className="text-about">Gathering music files.</li>
                                <li className="text-about">Creation of the zones.xml file.</li>
                                <li className="text-about">Creating an init.lua file.</li>
                            </ul>

                            <h2 className="text-header">World Logo</h2>

                            <p className="text-about">So what is a world logo? Well when pogressing through OSFE its the icon that shows up on the dot map.</p>

                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"> <img className="category-header" src={i1} alt="OSFM Page Header" /></div>

                            <p className="text-about">Lets create our own! I'll supply you with a template underneath and provide you with some examples.</p>
                            <p className="text-about">Template: (You can right click this image and save it to your computer)</p>

                            <div><img src={i2} alt="OSFM Page Header" /></div>

                            <p className="text-about">Examples:</p>
                            <div>
                                <img src={i3} alt="OSFM Page Header" />
                                <img className="ml-4" src={i4} alt="OSFM Page Header" />
                                <img className="ml-4" src={i5} alt="OSFM Page Header" /> 
                                <img className="ml-4" src={i6} alt="OSFM Page Header" /> 
                            </div>

                            <p className="text-about mt-4">For now you can pick any of these you like. Lets save it as FirstCustomWorldIcon.png in our mod folder.</p>

                            <h2 className="text-header">Zone Backgrounds</h2>
                            <p className="text-about mt-4">All zone backgrounds in OSFE are made up of 4 images with different amounts of paralax scrolling associated with them.</p>
                            <p className="text-about">As an example lets take a look at the ice world. Each image is 428x240.</p>
                            <div className="row">
                                <div style={{"overflow": "hidden"} } className="col-lg-12 col-xl-6">
                                    <p className="text-about mt-4">Ice-bg_0.png</p>
                                    <img src={bg0} alt="OSFM Page Header" />
                                </div>
                                <div style={{ "overflow": "hidden" }} className="col-lg-12 col-xl-6">
                                    <p className="text-about mt-4">Ice-bg_1.png</p>
                                    <img src={bg1} alt="OSFM Page Header" />
                                </div>
                                <div style={{ "overflow": "hidden" }} className="col-lg-12 col-xl-6">
                                    <p className="text-about mt-4">Ice-bg_2.png</p>
                                    <img src={bg2} alt="OSFM Page Header" />
                                </div>
                                <div style={{ "overflow": "hidden" }} className="col-lg-12 col-xl-6">
                                    <p className="text-about mt-4">Ice-bg_3.png</p>
                                    <img src={bg3} alt="OSFM Page Header" />
                                </div>
                            </div>

                            <p className="text-about mt-4">All of these combine to make this.</p>
                            <img src={bg4} alt="OSFM Page Header" />

                            <p className="text-about mt-4">Unfortuantely, because of the way unity handles our sprites, to get our background to not look blurry in game, we will need to take our image and scale it up using nearest neighbor.</p>

                            <div className="row">
                                <div style={{ "overflow": "hidden" }} className="col-lg-12 col-xl-6">
                                    <p className="text-about mt-4">MMBN-bg_0.png</p>
                                    <img src={bg5} alt="OSFM Page Header" />
                                </div>
                                <div style={{ "overflow": "hidden" }} className="col-lg-12 col-xl-6">
                                    <p className="text-about mt-4">MMBN-bg_1.png</p>
                                    <img src={bg6} alt="OSFM Page Header" />
                                </div>
                                <div style={{ "overflow": "hidden" }} className="col-lg-12 col-xl-6">
                                    <p className="text-about mt-4">MMBN-bg_2.png</p>
                                    <img src={bg7} alt="OSFM Page Header" />
                                </div>
                                <div style={{ "overflow": "hidden" }} className="col-lg-12 col-xl-6">
                                    <p className="text-about mt-4">MMBN-bg_3.png</p>
                                    <img src={bg8} alt="OSFM Page Header" />
                                </div>
                            </div>

                            <p className="text-about mt-4">If we take these images and scale them to 2568x1440 they will apear in game with only slight subpixeling!</p>
                            <p className="text-about"><a href="https://www.youtube.com/watch?v=rTng5sl6rbs">Random video about resizing pixel art.</a></p>

                            <h2 className="text-header">Music</h2>
                            <p className="text-about">Custom Zones actually soft lock if they dont have music associeted with them. I suggest finding a .wav file for the following.</p>
                            <ul>
                                <li className="text-about">Idle Music</li>
                                <li className="text-about">Battle Music</li>
                                <li className="text-about">Boss Music (If you have your own boss.)</li>
                            </ul>

                            <h2 className="text-header">Zones.xml</h2>

                            <p className="text-about">Lets create a Zones.xml file.</p>
                            <p className="text-about">We can use the original games Zones.xml file to learn about how to format ours!</p>
                            <p className="text-about">F:\steam\steamapps\common\One Step From Eden\OSFE_Data\StreamingAssets\Data\Zones.xml</p>
                            <p className="text-about">I usually start by copying a random world, then changing things to fit my content.</p>
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"> <img className="category-header" src={z1} alt="OSFM Page Header" /></div>

                            <h2 className="text-header mt-4">init.lua</h2>
                            <p className="text-about">We have a few goals in our init.lua.</p>
                            <ul>
                                <li className="text-about">Hook up the world icon.</li>
                                <li className="text-about">Hook up the music.</li>
                                <li className="text-about">Make sure our world is registered as Genocide Lenient.</li>
                            </ul>

                            <p className="text-about">This is an example of what that looks like.</p>
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"> <img className="category-header" src={init1} alt="OSFM Page Header" /></div>

                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">That is roughly how to make a custom zone.</p> 
                            <p className="text-about">Your folder should look something like this once your setup is complete.</p> 
                            <div className="card-header text-center text-white bg-darkRed" href="#collapseOne"> <img className="category-header" src={f1} alt="OSFM Page Header" /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CustomZones;