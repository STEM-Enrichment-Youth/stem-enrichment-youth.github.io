import React from "react";
import "./home.css";
import stemey from "./GoodStemeyLogo.png";
import "./sponsorship.css";
import ctv from "./Partners/Logos/carrythevision.png";
import smarterd from "./smarterd.png";
import nxstep from "./nxstep.png";

function Sponsorship() {
    return (
    <div class="whole-home" style={{marginTop: "70px"}}>
        <div class="column-flex" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover"}}>
            <div class="head-txt column-flex" style={{width: "90%"}}>
                <h1 style={{textAlign: "center"}} class="biggest-header-4">Sponsors</h1>
                <div id="current-sponsors">
                    <h1 style={{fontSize: "120%"}}>Our STEM World Sponsors</h1>
                    <h2 style={{color:"#B7D1E2", fontWeight:"400"}}>Platinum</h2>
                    <div class="sponsors-grid">
                        <div><img src={ctv} style={{width: "100%"}}/></div> 
                    </div>
                    {/* <h2 style={{color:"#FAD766", fontWeight:"400"}}>Gold</h2> */}
                    {/* <h2 style={{color:"#C0C0C0", fontWeight:"400"}}>Silver</h2> */}
                    
                    <h2 style={{color:"#DBA670", fontWeight:"400"}}>Bronze</h2>
                    <div class="sponsors-grid">
                        <div><img src={nxstep}/></div> 
                    </div>

                </div>
                {/* <h1 class="biggest-header-2">Sponsor Tiers</h1> */}
                {/* <br/>    */}
                {/* <div class="column-flex tiers-cont">
                    <div class="donate-row tier-row">
                        <span style={{color:"#DBA670"}}>Bronze</span>
                        <span style={{color:"#C0C0C0"}}>Silver</span>
                        <span style={{color:"#FAD766"}}>Gold</span>
                        <span style={{color:"#B7D1E2"}}>Platinum</span>
                    </div>
                    <div class="donate-row">
                        <div class="description-cont">
                            <span>
                                -&emsp;Promote at STEM World (Opening & Closing Ceremony) <br/>
                                -&emsp;On Front Page of Our Website
                            </span>
                        </div>
                        <div class="description-cont">
                            <span>
                                -&emsp;Promote at STEM World (Opening & Closing Ceremony) <br/>
                                -&emsp;On Front Page of Our Website <br/>
                                -&emsp;Promote on Our Posters
                            </span>
                        </div>
                        <div class="description-cont">
                            <span>
                                -&emsp;T-Shirts <br/>
                                -&emsp;Promote at STEM World (Opening & Closing Ceremony, Beginning of Each Panel) <br/>
                                -&emsp;On Front Page of Our Website
                            </span>
                        </div>
                        <div class="description-cont">
                            <span>
                                -&emsp;All Benefits of Gold<br/>
                                -&emsp;3-5 Minute Segment During Convention
                            </span>
                        </div>
                    </div>
                    <div class="donate-row amt-row">
                        <span>$50-$250</span>
                        <span>$250-$300</span>
                        <span>$500-$1000</span>
                        <span>$1000+</span>
                    </div>
                </div> */}
                <p style={{margin: "20px"}}>If you donate to us, because our fiscal sponsors are filed as a 501(c)(3), you will be eligible for tax deductions as permitted by the extent of the law.</p> 
            </div>
        </div>
    </div>
    )
}

export default Sponsorship;