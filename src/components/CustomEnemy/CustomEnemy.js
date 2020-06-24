import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Highlight from "react-highlight.js";

import fc3 from "./FC3.png"
import FE1 from "./FE1.png"
import FE2 from "./FE2.png"


class CustomEnemies extends React.Component {

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
                            <h2 className="text-header">Custom Enemies</h2>
                            <p className="text-about">The goal for this guide is to teach you how to make lua controlled enemies.</p>
                            <p className="text-about">I will be showing you my method for this which differs from how the game tends to handle enemies, but with my method you will have more control over how your custom enemy behaves. Lets get started!</p>
                            <p className="text-about">First, lets start by setting up our enemies sprites! Lets use our good ole pal, the Mettaur.</p>
                            <div><img src={fc3} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about"><a href="https://www.dropbox.com/sh/x2po1t2hcgweohd/AAAj0ep7rd29kUqQ23HvWgt_a?dl=1">Dropbox Download</a></p>
                            <p className="text-about">Place the Char folder into your workshop folder.</p>
                            <p className="text-about">Next we will make an AnimInfo file for our custom sprite sheet.</p>
                            <p className="text-about">Create a file called "FirstEnemy_AnimInfo.xml" and format the file like below.</p>
                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
                                &lt;Animations&gt;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;FirstEnemy_idle&quot; frameDuration=&quot;140&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_Idle1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_Idle2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_spawn&quot; frameDuration=&quot;50&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn3.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn4.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn5.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;FirstEnemy_dashing&quot; frameDuration=&quot;100&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_dashing1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_hit&quot; frameDuration=&quot;100&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit3.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_front&quot; frameDuration=&quot;70&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_front.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_back&quot; frameDuration=&quot;70&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_back.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_hop&quot; frameDuration=&quot;70&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hop.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_drop&quot; frameDuration=&quot;70&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_drop.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast01Start&quot; frameDuration=&quot;50&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast01Mid&quot; frameDuration=&quot;20&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast01End&quot; frameDuration=&quot;70&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast02Start&quot; frameDuration=&quot;50&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast02Mid&quot; frameDuration=&quot;20&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast02End&quot; frameDuration=&quot;70&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast03Start&quot; frameDuration=&quot;50&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start3.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start4.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast03Mid&quot; frameDuration=&quot;20&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Mid2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_cast03End&quot; frameDuration=&quot;70&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01End1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_cast01Start0.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;FirstEnemy_Down&quot; frameDuration=&quot;40&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit3.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;true&quot; name=&quot;FirstEnemy_Downed&quot; frameDuration=&quot;40&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_Death&quot; frameDuration=&quot;40&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_hit3.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&lt;Animation loop=&quot;false&quot; name=&quot;FirstEnemy_channel&quot; frameDuration=&quot;20&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn5.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn4.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn3.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn2.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Frame image=&quot;char/Mettaur_spawn1.png&quot;&gt;&lt;/Frame&gt;<br />
                                &nbsp;&nbsp;&lt;/Animation&gt;<br />
                                &lt;/Animations&gt;<br />
                            </Highlight>

                            <p className="text-about">Now that our animation files are set up lets make a file named Enemies.xml and place it into our workshop folder.</p>
                            <p className="text-about">This is the file where normally we would be defining our enemies' behavior, however using my method we will want to keep it as blank as possible.</p>

                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
                                &lt;Beings&gt;<br />
                                &nbsp;&nbsp;&lt;Being beingID=&quot;FirstEnemy&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Name&gt;FirstEnemy&lt;/Name&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Health&gt;200&lt;/Health&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Experience&gt;10&lt;/Experience&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Money&gt;30&lt;/Money&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;MovPattern&gt;&lt;/MovPattern&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Movements&gt;&lt;/Movements&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;MovementDelay&gt;0.4&lt;/MovementDelay&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;StartDelay&gt;0&lt;/StartDelay&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;LoopDelay&gt;1000&lt;/LoopDelay&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Defense&gt;&lt;/Defense&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;LerpTime&gt;0.1&lt;/LerpTime&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Stagger&gt;false&lt;/Stagger&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Deck&gt;FirstEnemyAI&lt;/Deck&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Stats localGunPointPos=&quot;18,22&quot; animName=&quot;FirstEnemy&quot; lethality=&quot;100&quot;&gt;&lt;/Stats&gt;<br />
                                &nbsp;&nbsp;&lt;/Being&gt;<br />
                                &lt;/Beings&gt;<br />
                            </Highlight>

                            <p className="text-about">This should all look pretty familiar if you have ever made a custom character, however I did want to point out the <b>&lt;Deck&gt;FirstEnemyAI&lt;/Deck&gt;</b>.</p>
                            <p className="text-about">This is actually a spell that our enemy will cast as soon as the battle starts! Its kinda strange, but bear with me.</p>

                            <p className="text-about">Next lets make another file called Spells.xml.</p>
                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
                                &lt;Spells&gt;<br />
                                &nbsp;&nbsp;&lt;Spell itemID=&quot;FirstEnemyAI&quot;&gt;;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Action&gt;FirstEnemyAI&lt;/Action&gt;;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Name&gt;...&lt;/Name&gt;;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Description&gt;Its our first enemy!&lt;/Description&gt;;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Damage&gt;Zero&lt;/Damage&gt;;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Mana&gt;0&lt;/Mana&gt;;<br />
                                &nbsp;&nbsp;&lt;/Spell&gt;;<br />
                                &lt;/Spells&gt;<br />
                            </Highlight>

                            <p className="text-about">Cool, now when this spell is cast a function called FirstEnemyAI will be called.</p>
                            <p className="text-about">And now for the fun part!</p>
                            <p className="text-about">We have one last file to make called Spells.lua. This is where our FirstEnemyAI function will go.</p>
                            <Highlight>
                                function FirstEnemyAI(item)<br />
                                &nbsp;&nbsp;local EnemyState = "Moving1"<br />
                                &nbsp;&nbsp;while (item.being.health.current > 0) do<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;while (EnemyState == "Moving1") do<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PatrolRandomEmpty()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .4)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PatrolRandomEmpty()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .4)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PatrolRandomEmpty()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .4)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CastSpellByName(item, "EarthenArmor")<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .5)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EnemyState = "Moving2"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;end<br />
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;while (EnemyState == "Moving2") do<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PatrolRandomEmpty()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .4)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PatrolRandomEmpty()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .4)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PatrolRandomEmpty()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .4)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CastSpellByName(item, "FlatEarth")<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .5)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EnemyState = "Attacking"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;end<br />
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;while (EnemyState == "Attacking") do<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PlayerHalfField()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .3)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PlayerHalfField()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .3)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.PlayerHalfField()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .3)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CastSpellByName(item, "ShieldThrow")<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WaitForSeconds(item, .8)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EnemyState = "Moving1"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;end<br />
                                &nbsp;&nbsp;end<br />
                                end<br />
                                <br />
                                function CastSpellByName(item, spellName)<br />
                                &nbsp;&nbsp;item.generatedSpell = item.deCtrl.CreateSpellBase(spellName, item.being, false)<br />
                                &nbsp;&nbsp;item.generatedSpell.interrupt = false<br />
                                &nbsp;&nbsp;item.generatedSpell.StartCast(false, 0, false)<br />
                                &nbsp;&nbsp;item.beingAnim.SetTrigger ("spellCast")<br />
                                end<br />
                            </Highlight>
                            <p className="text-about">Alright so lets take a look.</p>
                            <p className="text-about">We start by making a variable called EnemyState and set it to "Moving1".</p>
                            <p className="text-about">While EnemyState is equal to "Moving", we take 3 steps in a random directions. We wait for .4 seconds between steps. Then we cast EarthenArmor, wait half a second and then start Moving2</p>
                            <p className="text-about">While EnemyState is equal to "Moving2", we take 3 steps in a random directions. We wait for .4 seconds between steps. Then we cast FlatEarth, wait half a second and then start Attacking</p>
                            <p className="text-about">While EnemyState is equal to "Attacking", we take 3 steps towards the tile that is 4 infront of the player. We wait for .3 seconds between steps. Then we cast ShieldThrow, wait for about a second and then go back to Moving1</p>

                            <h2 className="text-header">Testing our enemy!</h2>
                            <p className="text-about">So to actually get our enemy to spawn, we must first add it to a zone. At the time of writting this, importing zones from the workshop is broken however edendev is looking into this.</p>
                            <p className="text-about">We can still test our enemy though, so lets go to F:\steam\steamapps\common\One Step From Eden\OSFE_Data\StreamingAssets\Data</p>
                            <p className="text-about">Open the zones.xml file and go to line 254.</p>
                            <p className="text-about">Replace it with &lt;enemy name=&quot;FirstEnemy&quot;&gt;&lt;/enemy&gt;</p>
                            <p className="text-about"><b>This is a permanent change to your game files! Be sure to change it back after you are done testing!</b></p>
                            <p className="text-about">Save.</p>
                            <div><img src={FE1} className="mw100" alt="OSFM Page Header" /></div>
                            <p className="text-about">Now you can start up OSFE, install mods, and start a run with a seed of 0.</p>
                            <div><img src={FE2} className="mw100" alt="OSFM Page Header" /></div>              
                            <p className="text-about">Have fun!</p>
                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">There are many many things you can do with a setup like this.. On the Lua examples page, I will show you more movement options and other useful functions.</p>
                            <div style={{ position: "relative", bottom: "-12px" }} className="d-flex justify-content-between">
                                <div></div>
                                <Link to="/LuaExamples"><p onClick={() => { this.scrollTo() }} style={{ padding: "0px" }} className="nav-link toTop">Useful Lua Examples <i class="fas fa-arrow-right"></i></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CustomEnemies;