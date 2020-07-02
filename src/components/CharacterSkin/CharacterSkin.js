import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import i1 from "./MettaurRed.png"
import Highlight from "react-highlight.js";

class CharacterSkin extends React.Component {

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
                            <p className="text-about">Article by Silver Spirit/Sunreal</p>
                            <h2 className="text-header">Basic Overview</h2>
                            <p className="text-about">The goal for this guide is to make our first skin appear in-game!</p>
                            <p className="text-about">In this example I will be adding a red mettaur skin to our <Link to="/FirstCharacter">First Character</Link> mod!</p>
                            <p className="text-about">First lets take a look at what we need beforehand.</p>
                            <div><img src={i1} alt="OSFM Page Header" /></div>
                            <p className="text-about"><a href="https://www.dropbox.com/sh/dzjzghl61lzz9qw/AAArrl6yLqVLFnrF14mj0y4pa?dl=1">Dropbox Download</a></p>
                            <p className="text-about">To do:</p>
                            <ul>
                                <li>
                                    Add a skin folder to our mod
                                </li>
                                <li>
                                    Add a AnimInfo.xml that handles our skin animations
                                </li>
                                <li>
                                    Add a being to "Heroes.xml" and add an attribute
                                </li>
                            </ul>
                            <p className="text-about">Navigate to your mod folder and create a folder called "skins".</p>
                            <p className="text-about">In the skins folder lets make one more folder called "Red".</p>
                            <p className="text-about">Place all the sprites in the "Red" folder.</p>
                            <p className="text-about">Next lets create an AnimInfo.xml file named MettaurRed_AnimInfo in our "skins" folder.</p>
                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br/>
                                &lt;Animations&gt;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;MettaurRed_idle&quot; frameDuration=&quot;140&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_Idle1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_Idle2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_spawn&quot; frameDuration=&quot;50&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn5.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;MettaurRed_dashing&quot; frameDuration=&quot;100&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_dashing1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_hit&quot; frameDuration=&quot;100&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_hit1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_hit2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_hit3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_front&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_front.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_back&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_back.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_hop&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_hop.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_drop&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_drop.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast01Start&quot; frameDuration=&quot;50&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast01Mid&quot; frameDuration=&quot;20&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast01End&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast02Start&quot; frameDuration=&quot;50&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast02Mid&quot; frameDuration=&quot;20&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast02End&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast03Start&quot; frameDuration=&quot;50&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast03Mid&quot; frameDuration=&quot;20&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_cast03End&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_channel&quot; frameDuration=&quot;20&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn5.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_spawn1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;MettaurRed_taunt&quot; frameDuration=&quot;70&quot;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_Idle1.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;Red/Mettaur_Idle2.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;/Animation&gt;<br/>
                                &lt;/Animations&gt;<br/>
                            </Highlight>
                            <p className="text-about">Now that our animations are set up we just need to make a few changes to our Heroes.xml.</p>
                            <p className="text-about">Using the <Link to="/FirstCharacter">First Character</Link> mod as an example our file should look like:</p>

                            <Highlight language="XML">
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
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Stats localGunPointPos=&quot;20,24&quot; animName=&quot;FirstCharacter&quot; altAnims=&quot;MettaurRed&quot; splashSprite=&quot;FirstSplash&quot;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;startingBrands=&quot;None,None&quot;&gt;&lt;/Stats&gt;<br />
                                &nbsp;&nbsp;&lt;/Being&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Being beingID=&quot;MettaurRed&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Name&gt;Mettaur&lt;/Name&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Title&gt;Red&lt;/Title&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tags&gt;Mettaur, Skin, Unlock&lt;/Tags&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Description&gt;Red might feel dangerous.&lt;/Description&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Flavor&gt;Design is about clarity&lt;/Flavor&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Stats localGunPointPos=&quot;30,30&quot; animName=&quot;MettaurRed&quot; splashSprite=&quot;FirstSplash&quot;&gt;&lt;/Stats&gt;<br />
                                &nbsp;&nbsp;&lt;/Being&gt;<br />
                                &lt;/Beings&gt;<br />
                            </Highlight>
                            

                            <p className="text-about">Make sure to notice the change we made to the Stats tag in the original being.</p>

                            <Highlight language="XML">
                                &lt;Stats localGunPointPos=&quot;20,24&quot; animName=&quot;FirstCharacter&quot; altAnims=&quot;MettaurRed&quot; splashSprite=&quot;FirstSplash&quot;<br />
                                startingBrands=&quot;None,None&quot;&gt;&lt;/Stats&gt;
                            </Highlight>
                            
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">If everything went correctly, when you open the campaign you should see your very own skin as a dark silhouette!</p>
                            <p className="text-about">After beating the game once using your character and reloading the mod you are able to use your skin over and over again!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CharacterSkin;