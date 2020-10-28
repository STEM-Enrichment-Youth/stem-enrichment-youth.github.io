import React from "react";
import "./home.css";
import "./timeline.css";
import stemey from "./GoodStemeyLogo.png";
import Timeline, { TimelineEntry, TimelineMarker } from './Timeline';
import Papa from 'papaparse';
import speakers from './speakers.csv';
import { Container, Row, Col } from 'react-grid-system';
import {Helmet} from "react-helmet"; 



function STEMTober() {
    return (
        <div class="whole-home">
        <h1 class="help" style={{ textAlign: "center" }}>STEMTober</h1>
        <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
        <a style={{justifySelf: "center", marginTop: "20px"}} class="btn btn-full" href="https://www.youtube.com/playlist?list=PLC-l94m5eWHYxLLdquTr2A0TD4IlCNDEI">Watch STEMTober</a>
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

            </div>

        

    )
}

export default STEMTober;


