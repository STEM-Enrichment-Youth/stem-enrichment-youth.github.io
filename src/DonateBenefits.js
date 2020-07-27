import React from "react";
import "./home.css";
import stemey from "./GoodStemeyLogo.png";
import "./sponsorship.css"

function DonateBenefits() {
    return (
    <div class="whole-home" style={{marginTop: "70px"}}>
        <div class="column-flex" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover"}}>
            <div class="head-txt column-flex" style={{width: "90%"}}>
                <h1 style={{textAlign: "center"}} class="biggest-header-4">SPONSORSHIP LEVELS</h1>
                <br/>   
                <div class="column-flex tiers-cont">
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
                                -&emsp;On Our Website
                            </span>
                        </div>
                        <div class="description-cont">
                            <span>
                                -&emsp;Promote at STEM World (Opening & Closing Ceremony) <br/>
                                -&emsp;On Our Website <br/>
                                -&emsp;Promote on Our Posters
                            </span>
                        </div>
                        <div class="description-cont">
                            <span>
                                -&emsp;T-Shirts <br/>
                                -&emsp;Promote at STEM World (Opening & Closing Ceremony, Beginning of Each Panel) <br/>
                                -&emsp;On Our Website
                            </span>
                        </div>
                        <div class="description-cont">
                            <span>
                                -&emsp;All Features of Gold<br/>
                                -&emsp;3-5 Minute Segment During Convention
                            </span>
                        </div>
                    </div>
                    <div class="donate-row amt-row">
                        <span>$50-$250</span>
                        <span>$250-$500</span>
                        <span>$500-$1000</span>
                        <span>$1000+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DonateBenefits;