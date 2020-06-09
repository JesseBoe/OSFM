import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Highlight from "react-highlight.js";


class LuaExamples extends React.Component {

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

                            <h2 className="text-header">Cast Spell By Name</h2>
                            <p className="text-about">Example: CastSpellByName(item, "Frostbolt")</p>
                            <Highlight language="lua">
                                function CastSpellByName(item, spellName)<br/>
                                &nbsp;&nbsp;item.generatedSpell = item.deCtrl.CreateSpellBase(spellName, item.being, false)<br/>
                                &nbsp;&nbsp;item.generatedSpell.interrupt = false<br/>
                                &nbsp;&nbsp;item.generatedSpell.StartCast(false, 0, false)<br/>
                                &nbsp;&nbsp;item.beingAnim.SetTrigger ("spellCast")<br/>
                                end<br/>
                            </Highlight>

                            <h2 className="text-header">Add a temperoray Spell By Name</h2>
                            <p className="text-about">Example: AddSpellToDeck(item, "Frostbolt")</p>
                            <Highlight language="lua">
                                function AddSpellToDeck(item, nameOfSpell)<br/>
                                &nbsp;&nbsp;item.being.player.duelDisk.AddLiveSpell(item, nameOfSpell, item.being.player, false, false)<br/>
                                end<br/>
                            </Highlight>

                            <h2 className="text-header">Equip Weapon By Name</h2>
                            <p className="text-about">Example: EquipWeaponByName(item, "CampaignGun")</p>
                            <Highlight language="lua">
                                function EquipWeaponByName(item, weaponName)<br />
                                &nbsp;&nbsp;item.deCtrl.EquipWep(weaponName)<br />
                                end<br />
                            </Highlight>

                            <h2 className="text-header">Play Sound By Name</h2>
                            <p className="text-about">Example: PlaySoundByName(item, "misc_shimmer")</p>
                            <h4>Custom Sounds</h4>
                            <p className="text-about">Using <Link to="/MoreLuaPower"><span onClick={() => { this.scrollTo() }} style={{ padding: "0px", display: "inline" }} className="nav-link toTop">MoreLuaPower</span></Link> you can even import .Wav or .Ogg files and play them this way. If I had a file named MySound.ogg placed in my mod folder, I would simply use PlaySoundByName(item, "MySound"). The name of this file must be unique!</p>
                            <Highlight language="lua">
                                function PlaySoundByName(item, soundName)<br />
                                &nbsp;&nbsp;item.being.PlayOnce(soundName)<br />
                                end<br />
                            </Highlight>

                            <h2 className="text-header">Play Song</h2>
                            <p className="text-about"><Link to="/MoreLuaPower"><span onClick={() => { this.scrollTo() }} style={{ padding: "0px", display: "inline" }} className="nav-link toTop">MoreLuaPower</span></Link> required.</p>
                            <Highlight language="lua">
                                &nbsp;&nbsp;PlayBattleMusic("MySoundName")<br />
                            </Highlight>

                            <h2 className="text-header">Change Character Animations</h2>
                            <p className="text-about"><Link to="/MoreLuaPower"><span onClick={() => { this.scrollTo() }} style={{ padding: "0px", display: "inline" }} className="nav-link toTop">MoreLuaPower</span></Link> required.</p>
                            <Highlight language="lua">
                                item.being.animOverrider.controllerName = "NameOfYourCharacter"
                            </Highlight>

                            <h2 className="text-header">Move Towards By X, Y</h2>
                            <p className="text-about">MoveTowardsTile(item, 1, 1)</p>
                            <Highlight language="lua">
                                function MoveTowardsTile(item, x, y)<br/>
                                &nbsp;&nbsp;item.being.mov.MoveTowardsTile(item.being.battleGrid.GetTileAt(x,y))<br/>
                                end<br/>
                            </Highlight>


                            
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

export default LuaExamples;