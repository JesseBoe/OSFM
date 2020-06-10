import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Highlight from "react-highlight.js";

import Intoxication from "./Intoxication.png"
import Antidote from "./Antidote.png"
import EffectIcon from "./EffectIcon.png"
import i4 from "./GIF.gif"



class CustomEffects extends React.Component {

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

                            <h2 className="text-header">Custom Effects</h2>
                            <p className="text-about">The goal of this section is to teach you how to create your very own Effect! First of all you might be asking, what is an Effect?</p>
                            <p className="text-about">Think about stuff like poison and chrono. For this example lets code a confusion Effect.</p>
                            <p className="text-about">This effect will cause the player to stumble around the grid.</p>
                            <p className="text-about"><Link to="/MoreLuaPower"><span onClick={() => { this.scrollTo() }} style={{ padding: "0px", display: "inline" }} className="nav-link toTop">MoreLuaPower</span></Link> is required for this mod!</p>
                            <p className="text-about">Lets create a file called init.lua</p>
                            <Highlight language="lua">
                                function Init(test)<br />
                                &nbsp;&nbsp;MakeSprite("EffectIcon.png", PATH, "EffectIcon");<br/>
                                &nbsp;&nbsp;while (GetSprite("EffectIcon") == null) do<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;WaitForFrames(1);<br/>
                                &nbsp;&nbsp;end<br/>
                                &nbsp;&nbsp;NewEffect("Confusion", "EffectIcon");<br/>
                                end<br />
                            </Highlight>

                            <p className="text-about">Lets add an image for our Effect.</p>

                            <div><img src={EffectIcon} alt="OSFM Page Header" /></div>

                            <p className="text-about">Save the image above as EffectIcon.png.</p>

                            <p className="text-about">Now our effect is set up! Lets make a function in our Spells.lua file.</p>
                            <Highlight language="lua">
                            function Confuse(item)<br/>
                            &nbsp;&nbsp;local TimeSinceLastStep = 0<br/>
                            &nbsp;&nbsp;local TimeToNextStep = (math.random() / 2) + .15<br/>
                            &nbsp;&nbsp;AddEffect(item.being, "Confusion", 10, 1)<br/>
                            &nbsp;&nbsp;while(GetEffect(item.being, "Confusion")) do<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;TimeSinceLastStep = TimeSinceLastStep + item.GetDeltaTime()<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;if (TimeSinceLastStep &gt; TimeToNextStep) then<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TimeSinceLastStep = 0<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TimeToNextStep = (math.random() / 2) + .15<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;local rnd = math.random()<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (rnd &lt; .25) then<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.Move (0, -1, false, true, false, true, true, true, item.being)<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elseif (rnd &lt; .5) then<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.Move (0, 1, false, true, false, true, true, true, item.being)<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elseif (rnd &lt; .75) then<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.Move (-1, 0, false, true, false, true, true, true, item.being)<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.being.mov.Move (1, 0, false, true, false, true, true, true, item.being)<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;end<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;WaitForFrames(1)<br/>
                            &nbsp;&nbsp;end<br/>
                            end<br/>
                            </Highlight>

                            <p className="text-about">Lets take a look at this line.</p>
                            <Highlight language="lua">
                                AddEffect(item.being, "Confusion", 10, 1)
                            </Highlight>
                            <p className="text-about">AddEffect comes from MoreLuaPower. It takes these parameters.</p>
                            <p className="text-about">void AddEffect(Being being, string effect, float duration = 0, float amount = 0).</p>
                            <p className="text-about">So now when we do GetEffect(item.being, "Confusion"), it will return true for the next 10 seconds.</p>

                            <p className="text-about">Lets code one more function called antidote just below this one.</p>

                            <Highlight language="lua">
                            function Antidote(item)<br/>
                            &nbsp;&nbsp;RemoveEffect(item.being, "Confusion")<br/>
                            end<br/>
                            </Highlight>

                            <p className="text-about">Perfect and now lets switch over to a Spells.xml file to make use of this Lua.</p>

                            <Highlight>
                            &lt;Spell itemID=&quot;Intoxication&quot;&gt;<br/>
                            &nbsp;&nbsp;&lt;Action&gt;Confuse&lt;/Action&gt;<br/>
                            &nbsp;&nbsp;&lt;Name&gt;Intoxication&lt;/Name&gt;<br/>
                            &nbsp;&nbsp;&lt;Tags&gt;Player, PvP&lt;/Tags&gt;<br/>
                            &nbsp;&nbsp;&lt;Description&gt;Makes you dizzy!&lt;/Description&gt;<br/>
                            &nbsp;&nbsp;&lt;Brand&gt;&lt;/Brand&gt;<br/>
                            &nbsp;&nbsp;&lt;Damage&gt;Zero&lt;/Damage&gt;<br/>
                            &nbsp;&nbsp;&lt;Mana&gt;0&lt;/Mana&gt;<br/>
                            &lt;/Spell&gt;<br/>
                                <br/>
                            &lt;Spell itemID=&quot;Antidote&quot;&gt;<br/>
                            &nbsp;&nbsp;&lt;Action&gt;Antidote&lt;/Action&gt;<br/>
                            &nbsp;&nbsp;&lt;Name&gt;Antidote&lt;/Name&gt;<br/>
                            &nbsp;&nbsp;&lt;Tags&gt;Player, PvP&lt;/Tags&gt;<br/>
                            &nbsp;&nbsp;&lt;Description&gt;Makes you not dizzy!&lt;/Description&gt;<br/>
                            &nbsp;&nbsp;&lt;Brand&gt;&lt;/Brand&gt;<br/>
                            &nbsp;&nbsp;&lt;Damage&gt;Zero&lt;/Damage&gt;<br/>
                            &nbsp;&nbsp;&lt;Mana&gt;0&lt;/Mana&gt;<br/>
                            &lt;/Spell&gt;<br/>
                            </Highlight>

                            <p className="text-about">And lets save these images as Intoxication and Antidote.</p>

                            <div><img src={Intoxication} alt="OSFM Page Header" /></div>

                            <div><img src={Antidote} alt="OSFM Page Header" /></div>

                            <p className="text-about">And finally lets change our Heroes &lt;Deck&gt; so we have both Intoxication and Antidote.</p>

                            <div><img src={i4} alt="OSFM Page Header" /></div>

                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">A fully functional effect! I didnt go over GetEffectAmount, but if you are curious you can always check the documentation at: <a href="https://github.com/GoldenEpsilon/MoreLuaPower/blob/master/API.txt">https://github.com/GoldenEpsilon/MoreLuaPower/blob/master/API.txt</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CustomEffects;