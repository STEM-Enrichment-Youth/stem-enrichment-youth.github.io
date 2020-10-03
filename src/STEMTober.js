import React from "react";
import "./home.css";
import "./timeline.css";
import stemey from "./GoodStemeyLogo.png";
import Timeline, { TimelineEntry, TimelineMarker } from './Timeline';
import Papa from 'papaparse';
import speakers from './speakers.csv';
import { Container, Row, Col } from 'react-grid-system';
import {Helmet} from "react-helmet"; 



function SND() {
    return (
        <div class="whole-home">
        <h1 class="help" style={{ textAlign: "center" }}>STEMTober</h1>
        <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
        <a style={{justifySelf: "center" }} class="btn btn-full" href="https://tinyurl.com/stemtoberzoom">Join the STEMTober Zoom</a>
        <a style={{justifySelf: "center", marginTop: "20px"}} class="btn btn-full" href="https://wavelf.org">Check out WLF</a>

        </div>

        <div style={{width:"80%", marginLeft: "10%"}}>
        <div
 class="canva-embed"
 data-design-id="DAEJGSxFOMk"
 data-height-ratio=".8"
></div>

<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEJGSxFOMk&#x2F;view?utm_content=DAEJGSxFOMk&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
        <Helmet>
            <script async src="https:&#x2F;&#x2F;sdk.canva.com&#x2F;v1&#x2F;embed.js"></script>
        </Helmet>
        </div>
    
{/* 
            <div style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>
                <div class="head-txt" style={{ width: "90%", marginLeft: "5%" }}>
                    <div>
                        <div style={{display: "grid"}}>

                            <h3> Free STEM Speaker Series in partnership with Wave Learning Festival</h3>
                            <p style={{justifySelf: "center", margin: "0 10%"}}>We have partnered with Wave Learning Festival to host a virtual series of speaker seminars every Saturday of October, and thus we present to you STEMtober! We are hoping to inspire students who have limited contact with STEM to explore the field further, as well as provide guidance to passionate students seeking to become more involved in STEM.</p>
                            <p style={{textAlign: "center", marginTop: "20px"}}><a class="btn btn-full" href="https://tinyurl.com/stemtoberzoom">Join the Zoom!</a></p>
                            

                          
    
</div>
                           


                        </div>


                    </div>

                </div> */}

            </div>

        

    )
}

export default SND;


