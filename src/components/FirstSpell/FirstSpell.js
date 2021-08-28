import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import s1 from "./FirstSpell01.png"
import s3 from "./FirstSpell02.png"
import s4 from "./FirstSpell03.png"
import s2 from "./Miniminigun.png"
import Highlight from "react-highlight.js";


class FirstSpell extends React.Component {

    

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
                            <h2 className="text-header">First Custom Spell</h2>
                            <p className="text-about">The goal for this guide is to make our first spell!</p>
                            <p className="text-about">First lets set up a Spells.xml file to our workshop folder.</p>
                            <p className="text-about">Open your workshop folder using the open with code button if you dont have it open already.</p>
                            <div><img src={s1} alt="OSFM Page Header" /></div>
                            <p className="text-about">Create a file called "Spells.xml" and format the file like below.</p>
                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt; <br />
                                &lt;Spells&gt;<br />
                                <br />
                                &lt;/Spells&gt;<br />
                            </Highlight>
                            <p className="text-about">Now that our file is set up, lets think of what kind of spell we want to make..</p>
                            <p className="text-about">Maybe it would be cool if we made a spell called "MiniMiniGun".</p>
                            <p className="text-about">This spell would function like just like minigun, but cost 0 mana and only shoot half as many bullets.</p>
                            <p className="text-about">Lets use Control + F to search for the minigun spell in the Data version of Spells.xml.</p>
                            <Highlight>
                                &lt;Spell itemID=&quot;Minigun&quot;&gt;<br />
                                    &nbsp;&nbsp;&lt;Stats animBlast=&quot;BasicCast&quot; animShot=&quot;BasicBullet&quot; introSound=&quot;gun_cock_35ms&quot;<br />
                                    &nbsp;&nbsp;shotSound=&quot;rubbery_snap_short&quot; setToGunPoint=&quot;Both&quot; yVariance=&quot;3&quot;&gt;&lt;/Stats&gt;<br />
                                    &nbsp;&nbsp;&lt;HitAllies&gt;&lt;/HitAllies&gt;<br />
                                    &nbsp;&nbsp;&lt;HitEnemies&gt;true&lt;/HitEnemies&gt;<br />
                                    &nbsp;&nbsp;&lt;HitSelf&gt;&lt;/HitSelf&gt;<br />
                                    &nbsp;&nbsp;&lt;HitStructures&gt;true&lt;/HitStructures&gt;<br />
                                    &nbsp;&nbsp;&lt;Name&gt;Minnie Gun&lt;/Name&gt;<br />
                                    &nbsp;&nbsp;&lt;Tags&gt;Player, Demo, Live, PvP&lt;/Tags&gt;<br />
                                    &nbsp;&nbsp;&lt;Action&gt;Multishot&lt;/Action&gt;<br />
                                    &nbsp;&nbsp;&lt;Description&gt;&lt;/Description&gt;<br />
                                    &nbsp;&nbsp;&lt;Meta&gt;Fires 12 shots&lt;/Meta&gt;<br />
                                    &nbsp;&nbsp;&lt;Rarity&gt;0&lt;/Rarity&gt;<br />
                                    &nbsp;&nbsp;&lt;Brand&gt;Hexawan&lt;/Brand&gt;<br />
                                    &nbsp;&nbsp;&lt;Mana&gt;1&lt;/Mana&gt;<br />
                                    &nbsp;&nbsp;&lt;Damage&gt;5&lt;/Damage&gt;<br />
                                    &nbsp;&nbsp;&lt;Shots&gt;12&lt;/Shots&gt;<br />
                                    &nbsp;&nbsp;&lt;Tiles&gt;1&lt;/Tiles&gt;<br />
                                    &nbsp;&nbsp;&lt;Location&gt;End&lt;/Location&gt;<br />
                                    &nbsp;&nbsp;&lt;TimeBetweenShots&gt;0.12&lt;/TimeBetweenShots&gt;<br />
                                    &nbsp;&nbsp;&lt;ShotVelocity&gt;1000&lt;/ShotVelocity&gt;<br />
                                    &nbsp;&nbsp;&lt;ShotDuration&gt;0.28&lt;/ShotDuration&gt;<br />
                                    &nbsp;&nbsp;&lt;ShotDelay&gt;&lt;/ShotDelay&gt;<br />
                                    &nbsp;&nbsp;&lt;CastDelay&gt;0&lt;/CastDelay&gt;<br />
                                    &nbsp;&nbsp;&lt;BlastDuration&gt;0&lt;/BlastDuration&gt;<br />
                                    &nbsp;&nbsp;&lt;DestroyOnHit&gt;true&lt;/DestroyOnHit&gt;<br />
                                    &nbsp;&nbsp;&lt;OnCast amount=&quot;1&quot;&gt;Trinity&lt;/OnCast&gt;<br />
                                    &nbsp;&nbsp;&lt;TrinityCast&gt;DoubleCast&lt;/TrinityCast&gt;<br />
                                    &lt;/Spell&gt;
                            </Highlight>
                            <p className="text-about">Lets copy this spell into our own file and change the itemID to "MiniMiniGun"</p>
                            <p className="text-about">Change the &lt;Mana&gt; tag to 0</p>
                            <p className="text-about">Change the &lt;Shots&gt; tag to 6</p>
                            <p className="text-about">Change the &lt;Description&gt; tag to say "Fires 6 shots."</p>
                            <p className="text-about">Change the &lt;Name&gt; tag to say "Mini Mini Gun"</p>
                            <p className="text-about">Our spell should look like:</p>
                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
                                &lt;Spells&gt;<br />
                                &nbsp;&nbsp;&lt;Spell itemID=&quot;Miniminigun&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Stats animBlast=&quot;BasicCast&quot; animShot=&quot;BasicBullet&quot; introSound=&quot;gun_cock_35ms&quot;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;shotSound=&quot;rubbery_snap_short&quot; setToGunPoint=&quot;Both&quot; yVariance=&quot;3&quot;&gt;&lt;/Stats&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;HitAllies&gt;&lt;/HitAllies&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;HitEnemies&gt;true&lt;/HitEnemies&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;HitSelf&gt;&lt;/HitSelf&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;HitStructures&gt;true&lt;/HitStructures&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Name&gt;Mini Mini Gun&lt;/Name&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tags&gt;Player, Demo, Live, PvP&lt;/Tags&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Action&gt;Multishot&lt;/Action&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Description&gt;Fires 6 shots.&lt;/Description&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Meta&gt;Fires 6 shots&lt;/Meta&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Rarity&gt;0&lt;/Rarity&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Brand&gt;Hexawan&lt;/Brand&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Mana&gt;0&lt;/Mana&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Damage&gt;5&lt;/Damage&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Shots&gt;6&lt;/Shots&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tiles&gt;1&lt;/Tiles&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Location&gt;End&lt;/Location&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;TimeBetweenShots&gt;0.12&lt;/TimeBetweenShots&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;ShotVelocity&gt;1000&lt;/ShotVelocity&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;ShotDuration&gt;0.28&lt;/ShotDuration&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;ShotDelay&gt;&lt;/ShotDelay&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;CastDelay&gt;0&lt;/CastDelay&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;BlastDuration&gt;0&lt;/BlastDuration&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;DestroyOnHit&gt;true&lt;/DestroyOnHit&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;OnCast amount=&quot;1&quot;&gt;Trinity&lt;/OnCast&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;TrinityCast&gt;DoubleCast&lt;/TrinityCast&gt;<br />
                                &nbsp;&nbsp;&lt;/Spell&gt;<br />
                                &lt;/Spells&gt;
                            </Highlight>
                            <p className="text-about">Lets save our Spells.xml.</p>
                            <p className="text-about">Now we just need a new spell icon for our spell.</p>
                            <p className="text-about">Spellicons need to be 256x256 pixel images where the actual image itself is about 156x156 pixels.</p>

                            <div><img src={s2} alt="OSFM Page Header" /></div>

                            <p className="text-about">For now you can right click the image above and Save As Miniminigun.png inside of your workshop folder.</p>
                            <p className="text-about">The name of the image must match the <b>itemID!</b></p>

                            <div><img src={s3} className="mw100" alt="OSFM Page Header" /></div>

                            <p className="text-about">Your workshop folder should look like this.</p>
                            <p className="text-about">If you boot up the game and click the Install Mods button in the mods tab, we should be able to view our spell in the library.</p>

                            <b className="text-about" style={{fontSize: "18px"}}>Note: I have received some reports of the Mini Mini Gun not appearing in he library until after adding the spell to a character</b>

                            <div style={{marginTop:"16px"}}><img src={s4} className="mw100" alt="OSFM Page Header" /></div>

                            <p className="text-about">Unfortuantly, we do not currently have an easy way to test out our new spells, so we will be making a custom character capable of testing in the next section.</p>

                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">We will be covering spells in depth in the "Custom Spells" section. At this point, it would be nice if we could actually test our new spell, so lets set up a custom character.</p>

                            <p className="text-about"></p>
                            <div style={{ position: "relative", bottom: "-12px" }} className="d-flex justify-content-between">
                                <Link to="/Basics"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop"><i class="fas fa-arrow-left"></i> Basics</p></Link>
                                <Link to="/FirstCharacter"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Our First Custom Character <i class="fas fa-arrow-right"></i></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default FirstSpell;