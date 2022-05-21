import React from "react";
import "./home.css";
import stemey from "./GoodStemeyLogo.png";

function Donate() {
    return (
    <div class="whole-home" style={{marginTop: "70px"}}>
        <div class="column-flex" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover"}}>
            <div class="head-txt column-flex" style={{width: "90%"}}>
                <h1 style={{textAlign: "center"}} class="biggest-header-4">DONATE</h1>
                <br/>
                <p class="description">
                Carry the Vision is a 501(c)(3) non-profit organization that restores lives and communities 
                through nonviolence education to create a peaceful and compassionate world. Carry the Vision serves as the fiscal sponsor of STEM World, STEMEY's August Convention, so if you would like to donate to STEMEY, you can do so through Carry the Vision. <br/><br/>There are two ways 
                to donate to Carry the Vision and ensure that it reaches us:
                </p>
                <p class="description">
                1. Send a check directed to Carry the Vision, and specify it's intent for STEMEY in the notes.
                </p>
                <p class="description">
                2. Use the donate button below to donate through PayPal.
                </p>
                <br/>
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