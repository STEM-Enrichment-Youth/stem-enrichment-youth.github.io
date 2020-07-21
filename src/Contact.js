import React from "react";
import "./home.css";
import stemey from "./GoodStemeyLogo.png";
import coding from "./icons/head-cross.png"; 
import chemistry from "./icons/beaker-atom.png"; import biology from "./icons/genetics.png"; 
import physics from "./icons/Newtons-cradle.png"; 
import math from "./icons/checkboard-graph.png"; 
import neuroscience from "./icons/head-brains.png"; 

function Contact() {
  const [scale, setScale] = React.useState(false);

  return (
    <div class="whole-home" style={{marginTop: "70px"}}>
      <div class="home-header" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>
        <div class="head-txt" >
          <div class="head-con row-flex">
            <div class="head-txt-2" class="column-flex" style={{width: "100%"}}>
              <h1 class="biggest-header">stemey</h1>
              <p class="head-p" style={{textAlign: "left"}}>EMAIL: stemenrichmentyouth@gmail.com</p>
              <p class="head-p" style={{textAlign: "left", maxWidth: "400px"}}>Feel free to email us with ANY questions that you have about the program, and we will get to your questions as soon as possible!</p>

            </div>
            <div class="column-flex" style={{width: "100%"}}>
              <img class="stemey-logo" src={stemey} style={{textAlign: "center"}} />
            </div>
              {/* <h1 class="biggest-header-2">stem enrichment youth</h1> */}
              {/* <p >Explore biology, coding, neuroscience, programming, physics, or chemistry online at your own pace with the help of 
              passionate, accomplished high school STEM enthusiasts.</p> */}
           
          </div>

          {/* <img class="stemey-logo-no stemey-logo" src={stemey} /> */}

        </div>

      </div>
      
    </div>


  )
}

export default Contact;


