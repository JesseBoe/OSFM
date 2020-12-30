import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Highlight from "react-highlight.js";


class AdvancedTesting extends React.Component {

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

                            <h2 className="text-header">Advanced Testing</h2>
                            <p className="text-about">The goal of this section is to teach you how to test your mods using the TestScene.xml file.</p>
                            <p className="text-about">Recently added in patch 1.5 the developer added a quicker way for modders to test their mods.</p>
                            <p className="text-about">Lets navigate to the data folder found at steam\steamapps\common\One Step From Eden\OSFE_Data\StreamingAssets\Data</p>
                            <p className="text-about">And once we are there lets create a file called TestScene.xml</p>
                            <Highlight language="xml">
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;<br/>
                                &lt;document&gt;<br/>
                                &nbsp;&nbsp;&lt;parameters&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;useTestSceneData&gt;false&lt;/useTestSceneData&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;installModsOnStart&gt;false&lt;/installModsOnStart&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;beingID&gt;SelicyAlt&lt;/beingID&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;startingUpgrades&gt;20&lt;/startingUpgrades&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;worldName&gt;Saffron&lt;/worldName&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;worldTier&gt;7&lt;/worldTier&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;zoneNum&gt;0&lt;/zoneNum&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;zoneType&gt;Boss&lt;/zoneType&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;gScene&gt;TestZone&lt;/gScene&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;zonesPerWorld&gt;7&lt;/zonesPerWorld&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;devTools&gt;true&lt;/devTools&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;console&gt;true&lt;/console&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;matchDeckOrder&gt;false&lt;/matchDeckOrder&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;animations&gt;true&lt;/animations&gt;<br/>
                                &nbsp;&nbsp;&lt;/parameters&gt;<br/>
                                &lt;/document&gt;<br/>
                            </Highlight>

                            <p className="text-about">With our file formatted like above when we launch OSFE we are imedietely thrown into the battle scene.</p>
                            <p className="text-about">Since the zoneType is of type boss and the worldName is Saffron we will be fighting a tier 7 Saffron in this example.</p>
                            <p className="text-about"><b>However there are some side effects!</b></p>
                            <ul>
                                <li><p className="text-about">Before using this testing mode make sure you have unchecked any mods inside of your workshop.</p></li>
                                <li><p className="text-about">Move any mods you need into the local mods folder found at steam\steamapps\common\One Step From Eden\OSFE_Data\StreamingAssets\Mods</p></li>
                                <li><p className="text-about">If your mod is dependant on MPL, make sure it makes it into your local mods folder and rename MPL's folder to 0 to ensure it runs first.</p></li>
                            </ul>

                            <p className="text-about">And finally we have this note from the developer.</p>

                            <div className="card-header text-center text-white bg-darkRed text-left" href="#collapseOne"> 

                                <p className="text-about">WARNING: Please backup any save data and confirm it's backed up properly before continuing! (Your data may be saved outside of the folder where the game is installed!)</p>

                                <p className="text-about"> &lt;beingID&gt; - References Beings.xml</p>
                                <p className="text-about"> &lt;worldName&gt; - References Zones.xml</p>
                                <p className="text-about"> &lt;zoneType&gt; - References Zones.xml</p>
                                <p className="text-about"> &lt;zoneType&gt; - Battle, Boss, Miniboss, Campsite, Danger, DarkShop, Distress, Random, Shop, Treasure, World, Pacifist, Normal, Genocide, Idle, PvP</p>
                                <p className="text-about"> &lt;GScene&gt; - AllTestZones, CoOp, DemoLive, GameOver, HeroSelect, Idle, MainMenu, PvP, SpellLoop, TestZone, Victory, VictoryEvil, VictoryFalse</p>

                                <p className="text-about">
                                    Set &lt;useTestSceneData&gt; above to "true" to enable.<br />
                                    <br />
                                    Cheat keyboard shortcuts:<br />
                                    Shift+C = toggle cheat menu<br />
                                    Shift+G = re-roll spell rewards<br />
                                    Shift+F = re-roll artifact rewards<br />
                                    Shift+\` = toggle console<br />
                                    Shift+P = pause<br />
                                    Shift+] = next frame (paused)<br />
                                    Shift+T = auto battle<br />
                                    Shift+H = hide HUD (3 steps)<br />
                                    Shift+U = hide background<br />
                                    Shift+M = hide deck<br />
                                    Shift+L = DebugLog<br />
                                    Shift+R = Reload<br />
                                    <br />
                                    Console:<br />
                                    help = help, "Print this help.");<br />
                                    hide = hide, "Hide the console.");<br />
                                    repeatCmdName, repeatCommand, "Repeat last command.");<br />
                                    reload = reload, "Reload game.");<br />
                                    r = reload, "Reload game.");<br />
                                    spawn = spawn, "Spawn a being on x and y. {`{enemy int, field x, field y}")`};<br />
                                    phealth = pHealth, "Set player health");<br />
                                    pdefense = pDefense, "Set player defense");<br />
                                    money = money, "Set player money");<br />
                                    resetprefs = resetPrefs, "(WARNING) Reset & saves SavedData.");<br />
                                    clear = clear, "Go to Zone {`{world int, zone int}")`};<br />
                                    gotozone = goToZone, "Go to Zone {`{world int, zone int}")`};<br />
                                    bg = changeBG, "Change bg to {`{bgName}")`};<br />
                                    addspell = addSpell, "Add spell {`{spellName}")`}; to end of deck");<br />
                                    animations = setAnimations, "Set animations to {`{bool}")`};<br />
                                    campaign = setCampaign, "Set Campaign to {`{bool}")`};<br />
                                    dev = dev, "Set MainMenu to {`{bool}")`};<br />
                                    transitioncheck = transitionCheck, "Check transitions");<br />
                                    <br />
                                    <br />
                                    Visit discord.gg #modding channel for more info<br />
                                </p>                           
                            </div> 

                            <p className="text-about">I believe that to get access to the developer console, one must be on the sandbox version of the game on steam.</p>
                            <p className="text-about">While not technically required, it can be nice so that you are aware of errors as they occur.</p>
                            <p className="text-about">This is going to reset any changes you have made if you directely moddified the games files, which you shouldnt really be doing anyway, but I guess its best I warn you here.</p>

                            <p className="text-about">To enable sandbox mode simply right click your game in Steam and click properties, go to betas and enter the access code: SandboxTesting.</p>
                            <p className="text-about">Once you are done testing simply set the field useTestSceneData to false and switch back to the main branch of OSFE.</p>

                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">We are able to test out specific fights, zones, bosses, animations, and characters much more quickly!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AdvancedTesting;