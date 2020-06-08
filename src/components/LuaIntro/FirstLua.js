import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Highlight from "react-highlight.js";


class LuaIntro extends React.Component {

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
                            <h2 className="text-header">LUA Scipting</h2>
                            <p className="text-about">The goal for this guide is to serve as a very rudimentary introduction to LUA scripting. If you are already familiar with programming, you may skip to the next section.</p>
                            <p className="text-about">Lets get started by creating a Spells.lua in our workshop folder.</p>
                            <Highlight language="lua">
                                function OurFirstFunction(item)<br/>
                                &nbsp;&nbsp;local MyVariable = 50<br />
                                &nbsp;&nbsp;if (MyVariable >= 10) then <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;print("Hello World")<br />
                                &nbsp;&nbsp;end<br />
                                end<br/>
                            </Highlight>
                            <p className="text-about">And lets break down this segment of code line by line.</p>
                            <p className="text-about">On the first line we can see is called a <b>function decloration</b>. We happened to name it OurFirstFunction. The stuff inbetween the parentheses is called a parameter.</p>
                            <p className="text-about">A parameter is like a value that we give this function when we <b>call</b> it. So far we are only defining our function. We have named our parameter item.</p>
                            <p className="text-about">On the second line is a <b>statement</b>. We created a variable using the <b>local</b> key word named MyVariable. We asigned it the value of 50.</p>
                            <p className="text-about">On the third line is a <b>conditional statement</b>. If MyVariable is greater or equal to 10, then run the code below.</p>
                            <p className="text-about">On the fourth line is a bit different. We are <b>calling a function</b> called print.</p>
                            <p className="text-about">In this case, print takes a parameter single parameter. We decided to give it a <b>string</b> called "Hello World".</p>
                            <p className="text-about">The fith line closes the <b>conditional statement</b>.</p>
                            <p className="text-about">The sixth line closes the <b>function decloration</b>.</p>

                            <p className="text-about">Lets save this file.</p>
                            <p className="text-about">Now lets make a Spells.xml file or add the following spell to an existing Spells.xml file.</p>
                            <Highlight>
                                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
                                &lt;Spells&gt;<br />
                                &nbsp;&nbsp;&lt;Spell itemID=&quot;HelloWorld&quot;&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Action&gt;OurFirstFunction&lt;/Action&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Name&gt;Hello!&lt;/Name&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Description&gt;We can call our Lua function by casting this spell!&lt;/Description&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Damage&gt;Zero&lt;/Damage&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Mana&gt;0&lt;/Mana&gt;<br />
                                &nbsp;&nbsp;&lt;/Spell&gt;<br />
                                &lt;/Spells&gt;<br />
                            </Highlight>

                            <p className="text-about">You can see that in our &lt;Action&gt; tag we have the name of the function we wrote.</p>
                            <p className="text-about">So now when the player casts this spell, the function we wrote will be <b>called</b>!</p>
                            <p className="text-about">The code we wrote will simply write "Hello World" into a text file located at:</p>
                            <p className="text-about">C:\Users\[YourUserName]\AppData\LocalLow\RistacciaLLC\OneStepFromEden\output_log.txt</p>

                            <h2 className="text-header mt-4">Mission Complete!</h2>
                            <p className="text-about">We learned how to call our lua functions using the &lt;Action&gt; tag and learned a little about lua. Even if you dont know exactly how lua works, doesnt mean you still cant use it in your mods. In the next section I will provide you will useful code blocks to help you acomplish more complex behavoir.</p>
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

export default LuaIntro;