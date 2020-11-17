import React from "react";
import "./home.css";
import "./timeline.css";
import {Helmet} from "react-helmet"; 



function STEMTober() {
    return (
        <div class="whole-home">
        <h1 class="help" style={{ textAlign: "center" }}>STEMEY Discord</h1>
        <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
        <a style={{justifySelf: "center" }} class="btn btn-full" href="https://tinyurl.com/stemeydiscord">Join the STEMEY Discord</a>

        </div>

        <div>
        <div
 class="canva-embed"
 data-design-id="DAEI4Dc-TT0"
 data-height-ratio="1"
></div>

<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEI4Dc-TT0&#x2F;view?utm_content=DAEI4Dc-TT0&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
        <Helmet>
            <script async src="https:&#x2F;&#x2F;sdk.canva.com&#x2F;v1&#x2F;embed.js"></script>
        </Helmet>
        </div>
 </div>

        

    )
}

export default STEMTober;


