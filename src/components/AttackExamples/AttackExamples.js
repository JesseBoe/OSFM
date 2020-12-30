import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Highlight from "react-highlight.js";

import i1 from "./ExampleProjectile.png"


class AttackExamples extends React.Component {

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

                            <h2 className="text-header">Attack Examples</h2>
                            <p className="text-about">The goal of this section is to teach you how to make pretty much any kind of attack with custom sprites as well.</p>
                            <p className="text-about">Lets get started.</p>
                            
                            <h2 className="text-header">Laser Beams</h2>
                            <p className="text-about"><a href="https://files.catbox.moe/ft0547.rar">Download the sprites!</a></p>
                            <p className="text-about">This attack fires off a laser that hits all tiles horizontally.</p>
                            
                            <Highlight language="xml">
                                &lt;Spell itemID=&quot;LaserExample&quot;&gt;<br/>
                                &nbsp;&nbsp;&lt;Stats animShot=&quot;LaserExampleBlast&quot; shotSound=&quot;sniper_ringshot&quot; setToGunPoint=&quot;Both&quot; hitboxWidth=&quot;9&quot;<br/>
                                &nbsp;&nbsp;hitboxHeight=&quot;1&quot; hitboxOffsetX=&quot;4&quot;&gt;&lt;/Stats&gt;<br/>
                                &nbsp;&nbsp;&lt;HitAllies&gt;&lt;/HitAllies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitEnemies&gt;true&lt;/HitEnemies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitSelf&gt;&lt;/HitSelf&gt;<br/>
                                &nbsp;&nbsp;&lt;HitStructures&gt;true&lt;/HitStructures&gt;<br/>
                                &nbsp;&nbsp;&lt;Name&gt;LaserExample&lt;/Name&gt;<br/>
                                &nbsp;&nbsp;&lt;Tags&gt;&lt;/Tags&gt;<br/>
                                &nbsp;&nbsp;&lt;Action&gt;Multishot&lt;/Action&gt;<br/>
                                &nbsp;&nbsp;&lt;Description&gt;&lt;/Description&gt;<br/>
                                &nbsp;&nbsp;&lt;Meta&gt;Stand and shoot 1 laser&lt;/Meta&gt;<br/>
                                &nbsp;&nbsp;&lt;Rarity&gt;0&lt;/Rarity&gt;<br/>
                                &nbsp;&nbsp;&lt;Brand&gt;Anima&lt;/Brand&gt;<br/>
                                &nbsp;&nbsp;&lt;Mana&gt;0&lt;/Mana&gt;<br/>
                                &nbsp;&nbsp;&lt;Damage&gt;60&lt;/Damage&gt;<br/>
                                &nbsp;&nbsp;&lt;Shots&gt;1&lt;/Shots&gt;<br/>
                                &nbsp;&nbsp;&lt;Tiles&gt;1&lt;/Tiles&gt;<br/>
                                &nbsp;&nbsp;&lt;Location&gt;End&lt;/Location&gt;<br/>
                                &nbsp;&nbsp;&lt;TimeBetweenShots&gt;0&lt;/TimeBetweenShots&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotVelocity&gt;0&lt;/ShotVelocity&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDuration&gt;0.3&lt;/ShotDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDelay&gt;.3&lt;/ShotDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;CastDelay&gt;.1&lt;/CastDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;CastDuration&gt;&lt;/CastDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;BlastDuration&gt;&lt;/BlastDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;DestroyOnHit&gt;&lt;/DestroyOnHit&gt;<br/>
                                &lt;/Spell&gt;<br/>
                            </Highlight>

                            <h2 className="text-header">Melee Attacks</h2>
                            <p className="text-about">There are two things I usually see with melee attacks. One is like a step slash and the other is just a standing melee attack.</p>
                            <p className="text-about"><a href="https://files.catbox.moe/2cvmyn.rar">Download the sprites!</a></p>
                            <p className="text-about">Standing: </p>
                            <Highlight language="xml">
                                &lt;Spell itemID=&quot;ExampleSword&quot;&gt;<br/>
                                &nbsp;&nbsp;&lt;Stats animBlast=&quot;ExampleSlash&quot; animShot=&quot;&quot; castSound=&quot;woosh_large&quot; shotSound=&quot;slice_clang&quot;<br/>
                                &nbsp;&nbsp;setToGunPoint=&quot;None&quot; hitboxWidth=&quot;1&quot; hitboxHeight=&quot;3&quot; spawnOffsetX=&quot;1&quot; hitboxOffsetX=&quot;0&quot;&gt;&lt;/Stats&gt;<br/>
                                &nbsp;&nbsp;&lt;HitAllies&gt;&lt;/HitAllies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitEnemies&gt;true&lt;/HitEnemies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitSelf&gt;&lt;/HitSelf&gt;<br/>
                                &nbsp;&nbsp;&lt;HitStructures&gt;true&lt;/HitStructures&gt;<br/>
                                &nbsp;&nbsp;&lt;Name&gt;Example Slash&lt;/Name&gt;<br/>
                                &nbsp;&nbsp;&lt;Tags&gt;Player&lt;/Tags&gt;<br/>
                                &nbsp;&nbsp;&lt;Action&gt;Multishot&lt;/Action&gt;<br/>
                                &nbsp;&nbsp;&lt;Description&gt;&lt;/Description&gt;<br/>
                                &nbsp;&nbsp;&lt;Meta&gt;Hit 1x3 tiles in front&lt;/Meta&gt;<br/>
                                &nbsp;&nbsp;&lt;Rarity&gt;4&lt;/Rarity&gt;<br/>
                                &nbsp;&nbsp;&lt;Brand&gt;Slashfik&lt;/Brand&gt;<br/>
                                &nbsp;&nbsp;&lt;Mana&gt;1&lt;/Mana&gt;<br/>
                                &nbsp;&nbsp;&lt;Damage&gt;40&lt;/Damage&gt;<br/>
                                &nbsp;&nbsp;&lt;Shots&gt;1&lt;/Shots&gt;<br/>
                                &nbsp;&nbsp;&lt;Tiles&gt;1&lt;/Tiles&gt;<br/>
                                &nbsp;&nbsp;&lt;Location&gt;End&lt;/Location&gt;<br/>
                                &nbsp;&nbsp;&lt;TimeBetweenShots&gt;0&lt;/TimeBetweenShots&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotVelocity&gt;0&lt;/ShotVelocity&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDuration&gt;0.2&lt;/ShotDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDelay&gt;&lt;/ShotDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;CastDelay&gt;.1&lt;/CastDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;BlastDuration&gt;.2&lt;/BlastDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;DestroyOnHit&gt;&lt;/DestroyOnHit&gt;<br/>
                                &lt;/Spell&gt;<br/>
                            </Highlight>

                            <p className="text-about">Step Slash: </p>
                            <Highlight language="xml">
                                &lt;Spell itemID=&quot;ExampleStepSlash&quot;&gt;<br/>
                                &nbsp;&nbsp;&lt;Stats animBlast=&quot;ExampleSlash&quot; animShot=&quot;&quot; castSound=&quot;woosh_large&quot; shotSound=&quot;slice_clang&quot;<br/>
                                &nbsp;&nbsp;setToGunPoint=&quot;None&quot; hitboxWidth=&quot;1&quot; hitboxHeight=&quot;3&quot; spawnOffsetX=&quot;1&quot; hitboxOffsetX=&quot;0&quot;<br/>
                                &nbsp;&nbsp;recoveryTime=&quot;0.6&quot;&gt;&lt;/Stats&gt;<br/>
                                &nbsp;&nbsp;&lt;HitAllies&gt;&lt;/HitAllies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitEnemies&gt;true&lt;/HitEnemies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitSelf&gt;&lt;/HitSelf&gt;<br/>
                                &nbsp;&nbsp;&lt;HitStructures&gt;true&lt;/HitStructures&gt;<br/>
                                &nbsp;&nbsp;&lt;Name&gt;ExampleStepSlash&lt;/Name&gt;<br/>
                                &nbsp;&nbsp;&lt;Tags&gt;Cpu&lt;/Tags&gt;<br/>
                                &nbsp;&nbsp;&lt;Action&gt;StepSlash&lt;/Action&gt;<br/>
                                &nbsp;&nbsp;&lt;Description&gt;&lt;/Description&gt;<br/>
                                &nbsp;&nbsp;&lt;Meta&gt;Dash fwd 3 tiles then slash 2x3 tiles in front&lt;/Meta&gt;<br/>
                                &nbsp;&nbsp;&lt;Rarity&gt;1&lt;/Rarity&gt;<br/>
                                &nbsp;&nbsp;&lt;Brand&gt;Slashfik&lt;/Brand&gt;<br/>
                                &nbsp;&nbsp;&lt;Mana&gt;2&lt;/Mana&gt;<br/>
                                &nbsp;&nbsp;&lt;Damage&gt;80&lt;/Damage&gt;<br/>
                                &nbsp;&nbsp;&lt;Shots&gt;1&lt;/Shots&gt;<br/>
                                &nbsp;&nbsp;&lt;Tiles&gt;1&lt;/Tiles&gt;<br/>
                                &nbsp;&nbsp;&lt;Location Position=&quot;3&quot;&gt;Front&lt;/Location&gt;<br/>
                                &nbsp;&nbsp;&lt;TimeBetweenShots&gt;0&lt;/TimeBetweenShots&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotVelocity&gt;0&lt;/ShotVelocity&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDuration&gt;0.15&lt;/ShotDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDelay&gt;&lt;/ShotDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;CastDelay&gt;0&lt;/CastDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;BlastDuration&gt;0.15&lt;/BlastDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;DestroyOnHit&gt;&lt;/DestroyOnHit&gt;<br/>
                                &nbsp;&nbsp;&lt;OnCast&gt;Anchor&lt;/OnCast&gt;<br/>
                                &lt;/Spell&gt;<br/>
                            </Highlight>

                            <h2 className="text-header">Storm</h2>
                            <p className="text-about">This sort of attack falls from the sky onto the enemies field. Its a little strange because unlike mortar or multicast, it does not have a projectile. Only a blast animation.</p>
                            <p className="text-about"><a href="https://files.catbox.moe/0iirve.rar">Download the storm!</a></p>
                            <p className="text-about"><a href="https://files.catbox.moe/f4m5rn.rar">Download the explosion!</a></p>
                            <Highlight language="xml">
                                &lt;Spell itemID=&quot;ExampleStorm&quot;&gt;<br/>
                                &nbsp;&nbsp;&lt;Stats animWarning=&quot;WarningDangerC&quot; animBlast=&quot;ExampleStorm&quot; animShot=&quot;&quot; introSound=&quot;foom&quot;<br/>
                                &nbsp;&nbsp;castSound=&quot;flare&quot; shotSound=&quot;beam_impact&quot; setToGunPoint=&quot;None&quot;&gt;&lt;/Stats&gt;<br/>
                                &nbsp;&nbsp;&lt;HitAllies&gt;true&lt;/HitAllies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitEnemies&gt;true&lt;/HitEnemies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitSelf&gt;true&lt;/HitSelf&gt;<br/>
                                &nbsp;&nbsp;&lt;HitStructures&gt;true&lt;/HitStructures&gt;<br/>
                                &nbsp;&nbsp;&lt;Name&gt;ExampleStorm&lt;/Name&gt;<br/>
                                &nbsp;&nbsp;&lt;Tags&gt;Player&lt;/Tags&gt;<br/>
                                &nbsp;&nbsp;&lt;Action&gt;Storm&lt;/Action&gt;<br/>
                                &nbsp;&nbsp;&lt;Description&gt;Meteors strike in an area 4 tiles ahead!&lt;/Description&gt;<br/>
                                &nbsp;&nbsp;&lt;Meta&gt;Hits all tiles, can hit self&lt;/Meta&gt;<br/>
                                &nbsp;&nbsp;&lt;Rarity&gt;4&lt;/Rarity&gt;<br/>
                                &nbsp;&nbsp;&lt;Brand&gt;Anima&lt;/Brand&gt;<br/>
                                &nbsp;&nbsp;&lt;Mana&gt;2&lt;/Mana&gt;<br/>
                                &nbsp;&nbsp;&lt;Damage&gt;80&lt;/Damage&gt;<br/>
                                &nbsp;&nbsp;&lt;Shots&gt;1&lt;/Shots&gt;<br/>
                                &nbsp;&nbsp;&lt;Tiles&gt;1&lt;/Tiles&gt;<br/>
                                &nbsp;&nbsp;&lt;Location&gt;RandOtherUnique&lt;/Location&gt;<br/>
                                &nbsp;&nbsp;&lt;TimeBetweenShots&gt;0.01&lt;/TimeBetweenShots&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotVelocity&gt;0&lt;/ShotVelocity&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDuration&gt;.2&lt;/ShotDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDelay&gt;0.1&lt;/ShotDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;CastDelay&gt;0&lt;/CastDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;BlastDuration&gt;0.6&lt;/BlastDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;WarningDuration&gt;0.6&lt;/WarningDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;DestroyOnHit&gt;&lt;/DestroyOnHit&gt;<br/>
                                &nbsp;&nbsp;&lt;Params numOfWaves=&quot;12&quot; timeBetweenWaves=&quot;0.4&quot;&gt;&lt;/Params&gt;<br/>
                                &nbsp;&nbsp;&lt;OnCast&gt;&lt;/OnCast&gt;<br/>
                                &lt;/Spell&gt;<br/>
                            </Highlight>
                            <p className="text-about">Set up your ExampleStorm_AnimInfo.xml like this: </p>
                            <Highlight language="xml">
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br/>
                                &lt;Animation loop=&quot;false&quot; name=&quot;ExampleStorm&quot; frameDuration=&quot;60&quot;&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/StormMeteor01.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/StormMeteor02.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/StormMeteor03.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/MeteorExplosion01.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/MeteorExplosion02.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/MeteorExplosion03.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/MeteorExplosion04.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/MeteorExplosion05.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/MeteorExplosion06.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/MeteorExplosion06.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &lt;/Animation&gt;<br/>
                            </Highlight>

                            <h2 className="text-header">Mortar</h2>
                            <p className="text-about">This sort of attack usually looks like the caster is throwing something into the air and falling onto the enemies field, but can be pretty dynamic.</p>
                            <p className="text-about">It uses both a animBlast and a animObj.</p>
                            <p className="text-about"><a href="https://files.catbox.moe/f4m5rn.rar">Download the animBlast!</a></p>
                            <p className="text-about">Save the projectile below!</p>
                            <div><img src={i1} alt="OSFM Page Header" /></div> <br/>

                            <Highlight language="xml">
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br/>
                                &lt;Animation loop=&quot;true&quot; name=&quot;ExampleProjectile&quot; frameDuration=&quot;60&quot;&gt;<br/>
                                &nbsp;&nbsp;&lt;Frame image=&quot;Attacks/MiniBombProjectile.png&quot;&gt;&lt;/Frame&gt;<br/>
                                &lt;/Animation&gt;<br/>
                            </Highlight>

                            <Highlight language="xml">
                                &lt;Spell itemID=&quot;ExampleMortar&quot;&gt;<br/>
                                &nbsp;&nbsp;&lt;Stats animWarning=&quot;WarningDangerC&quot; animObj=&quot;ExampleProjectile&quot; animShot=&quot;&quot; shotSound=&quot;explosion_bump&quot;<br/>
                                &nbsp;&nbsp;castSound=&quot;woosh_large&quot; setToGunPoint=&quot;Both&quot; timeToTravel=&quot;0.7&quot; animBlast=&quot;ExampleBlast&quot;<br/>
                                &nbsp;&nbsp;bending=&quot;90&quot;&gt;&lt;/Stats&gt;<br/>
                                &nbsp;&nbsp;&lt;HitAllies&gt;&lt;/HitAllies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitEnemies&gt;true&lt;/HitEnemies&gt;<br/>
                                &nbsp;&nbsp;&lt;HitSelf&gt;&lt;/HitSelf&gt;<br/>
                                &nbsp;&nbsp;&lt;HitStructures&gt;true&lt;/HitStructures&gt;<br/>
                                &nbsp;&nbsp;&lt;Name&gt;MiniBomb&lt;/Name&gt;<br/>
                                &nbsp;&nbsp;&lt;Tags&gt;Player, Demo, Live, PvP&lt;/Tags&gt;<br/>
                                &nbsp;&nbsp;&lt;Action&gt;Mortar&lt;/Action&gt;<br/>
                                &nbsp;&nbsp;&lt;Description&gt;Throw a minibomb 4 tiles ahead! &lt;/Description&gt;<br/>
                                &nbsp;&nbsp;&lt;Meta&gt;Throw a minibomb 4 tiles ahead!&lt;/Meta&gt;<br/>
                                &nbsp;&nbsp;&lt;Rarity&gt;1&lt;/Rarity&gt;<br/>
                                &nbsp;&nbsp;&lt;Brand&gt;Hexawan&lt;/Brand&gt;<br/>
                                &nbsp;&nbsp;&lt;Mana&gt;0&lt;/Mana&gt;<br/>
                                &nbsp;&nbsp;&lt;Damage&gt;50&lt;/Damage&gt;<br/>
                                &nbsp;&nbsp;&lt;Shots&gt;1&lt;/Shots&gt;<br/>
                                &nbsp;&nbsp;&lt;Tiles&gt;1&lt;/Tiles&gt;<br/>
                                &nbsp;&nbsp;&lt;Location Position=&quot;4&quot;&gt;Front&lt;/Location&gt;<br/>
                                &nbsp;&nbsp;&lt;Location&gt;Current&lt;/Location&gt;<br/>
                                &nbsp;&nbsp;&lt;TimeBetweenShots&gt;0&lt;/TimeBetweenShots&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotVelocity&gt;0&lt;/ShotVelocity&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDuration&gt;0.1&lt;/ShotDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;ShotDelay&gt;.15&lt;/ShotDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;CastDelay&gt;0&lt;/CastDelay&gt;<br/>
                                &nbsp;&nbsp;&lt;CastDuration&gt;&lt;/CastDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;BlastDuration&gt;&lt;/BlastDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;WarningDuration&gt;0&lt;/WarningDuration&gt;<br/>
                                &nbsp;&nbsp;&lt;DestroyOnHit&gt;&lt;/DestroyOnHit&gt;<br/>
                                &lt;/Spell&gt;<br/>
                            </Highlight>

                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">Of course I cant cover every single kind of attack here, but I think these are the ones I get asked about.</p>
                            <p className="text-about">Happy coding!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AttackExamples;