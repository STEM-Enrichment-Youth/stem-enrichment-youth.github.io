import React from "react";
import "./home.css";
import stemey from "./GoodStemeyLogo.png";

function Donate() {
    return (
    <div class="whole-home" style={{marginTop: "70px"}}>
        <div class="column-flex" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover"}}>
            <div class="head-txt column-flex" style={{width: "90%", overflow: "scroll"}}>
                <h1 style={{textAlign: "center"}} class="biggest-header-4">DONATE</h1>
                <br/>
                <p class="description">
                STEMEY is sponsored by Carry The Vision, a non-profit organization dedicated to promoting and providing non-violence education through exercises like mindfulness training, helping to cultivate inner peace. To donate to Carry The Vision and ensure that it reaches us:
                </p>
                <br/>
                <p class="description">
                1. Send a check directed to Carry The Vision, and specify it's intent for STEMEY in the notes
                </p>
                <p class="description" style={{fontSize: "30px"}}>
                OR
                </p>
                <p class="description">
                2. Use the donate button below to donate through PayPal.
                </p>
                <br/>
                <div style={{textAlign: "center", width: "90%"}}>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="LQGSQ93QXMGCG" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Donate;