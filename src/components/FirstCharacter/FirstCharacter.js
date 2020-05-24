import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Highlight from "react-highlight.js";

import fc1 from "../FirstSpell/FirstSpell01.png"
import fc2 from "./FC2.png"
import fc3 from "./FC3.png"
import fc4 from "./FirstSplash.png"
import fc5 from "./fc5.png"


class FirstCharacter extends React.Component {

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
                            <h2 className="text-header">First Custom Character</h2>
                            <p className="text-about">The goal for this guide is to make our first character!</p>

                            <p className="text-about">First lets take a look at what a Heroes.xml files looks like.</p>
                            <p className="text-about">Navigate to F:\steam\steamapps\common\One Step From Eden\OSFE_Data\StreamingAssets\Data</p>
                            <p className="text-about">Open the Heroes.xml file</p>

                            <div><img src={fc2} className="mw100" alt="OSFM Page Header" /></div>

                            <p className="text-about">This is the Saffron selectable in the main Campain, lets use this one as our template.</p>

                            <p className="text-about">Next lets set up our own Heroes.xml file to our workshop folder.</p>
                            <p className="text-about">Open your workshop folder using the open with code button if you dont have it open already.</p>
                            <div><img src={fc1} alt="OSFM Page Header" /></div>
                            <p className="text-about">Create a file called "Heroes.xml" and format the file like below.</p>
                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
                                &lt;Beings&gt;<br />
                                &nbsp;&nbsp;&lt;Being beingID=&quot;FirstCharacter&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Name&gt;Mettaur&lt;/Name&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Title&gt;FirstCharacter&lt;/Title&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tags&gt;Campaign, FirstCharacter, Default, Unlock&lt;/Tags&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Description&gt;Welcome to modding!&lt;/Description&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Flavor&gt;WIP&lt;/Flavor&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Weapon&gt;CampaignGun&lt;/Weapon&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Health&gt;900&lt;/Health&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;MaxHealth&gt;900&lt;/MaxHealth&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Money&gt;25&lt;/Money&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;MaxMana&gt;5&lt;/MaxMana&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;BasicCooldown&gt;.1&lt;/BasicCooldown&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;ManaRegen&gt;.8&lt;/ManaRegen&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;ShuffleTime&gt;2.5&lt;/ShuffleTime&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;InvulLength&gt;0&lt;/InvulLength&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Defense&gt;0&lt;/Defense&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;LerpTime&gt;0.1&lt;/LerpTime&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Artifacts&gt;SubTank&lt;/Artifacts&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Deck&gt;Thunder&lt;/Deck&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Deck&gt;Miniminigun&lt;/Deck&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Deck&gt;Frostbolt&lt;/Deck&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Stats localGunPointPos=&quot;20,24&quot; animName=&quot;FirstCharacter&quot; splashSprite=&quot;FirstSplash&quot;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;startingBrands=&quot;None,None&quot;&gt;&lt;/Stats&gt;<br />
                                &nbsp;&nbsp;&lt;/Being&gt;<br />
                                &lt;/Beings&gt;<br />
                            </Highlight>
                            <p className="text-about">For this character we are going to import our own sprite sheet!</p>
                            <div><img src={fc3} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about"><a href="https://www.dropbox.com/sh/x2po1t2hcgweohd/AAAj0ep7rd29kUqQ23HvWgt_a?dl=1">Dropbox Download</a></p>
                            <p className="text-about">Place the Char folder into your workshop folder.</p>
                            <p className="text-about">We will need to make an AnimInfo file for our custom sprite sheet.</p>
                            <p className="text-about">Any xml files ending in "AnimInfo" gets imported into the games animation files.</p>
                            <p className="text-about">Create a file called "FirstCharacter_AnimInfo.xml" and format the file like below.</p>
                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br/>
                                &lt;Animations&gt;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;FirstCharacter_idle&quot; frameDuration=&quot;140&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_Idle1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_Idle2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_spawn&quot; frameDuration=&quot;50&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn5.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;FirstCharacter_dashing&quot; frameDuration=&quot;100&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_dashing1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_hit&quot; frameDuration=&quot;100&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_front&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_front.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_back&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_back.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_hop&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hop.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_drop&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_drop.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast01Start&quot; frameDuration=&quot;50&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>	  
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast01Mid&quot; frameDuration=&quot;20&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast01End&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast02Start&quot; frameDuration=&quot;50&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>  
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast02Mid&quot; frameDuration=&quot;20&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast02End&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast03Start&quot; frameDuration=&quot;50&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>  
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast03Mid&quot; frameDuration=&quot;20&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_cast03End&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;FirstCharacter_Down&quot; frameDuration=&quot;40&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;FirstCharacter_Downed&quot; frameDuration=&quot;40&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_Death&quot; frameDuration=&quot;40&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstCharacter_channel&quot; frameDuration=&quot;20&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn5.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &lt;/Animations&gt;<br/>
                            </Highlight>
                            <p className="text-about">This file sets up every animation a character needs to function in OSFE.</p>
                            <p className="text-about">The last thing we need to do is set up the character splash sprite.</p>
                            <div><img src={fc4} style={{maxWidth:"20%"}} alt="OSFM Page Header" /></div>
                            <p className="text-about">Right click the image above and save it as "FirstSplash.png" inside of your workshop folder.</p>
                            <p className="text-about">And with that we should be good to go! Verify that your workshop folder looks just like mine.</p>
                            <div><img src={fc5} className="mw100" alt="OSFM Page Header" /></div>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">If everything went correctly, when you open the campaign you should see your very own test character!</p>
                            <p className="text-about">Take this moment to ensure that the Mini mini gun is functioning correctly as well.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default FirstCharacter;