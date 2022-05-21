import React from "react";
import { Component } from "react";

import "./home.css";

import stemey from "./NewStemeyLogo.png";

export default class Home extends Component {

  doPopup = true;

  constructor() {
    super();
    this.state = {
      viewPopup: false
    };
  }

  componentDidMount() {
    let visited = sessionStorage.getItem('alreadyVisited');
    if (visited || !this.doPopup) {
      this.setState({ viewPopup: false })
      //do not view Popup
    } else {
      //this is the first time
      sessionStorage.setItem('alreadyVisited', true);
      this.setState({ viewPopup: true });
    }
  }

  closeModal() {
    this.setState({ viewPopup: false })
  }

  render() {
    return (
      <div class="whole-home">
        <div class="home-header" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>

          <div class="head-txt" >
            <div class="head-con">
              <div class="head-txt-2">
                <div class="main-header">
                  <h1 style={{ textAlign: "left" }}>Wiz Prodigy</h1>
                </div>
                <h2 style={{ maxWidth: "700px", textAlign: "left" }}>
                  Online STEM competition that will unleash your talent and creativity.
                </h2>
                <div>
                  <a style={{ color: "white", marginBottom: "20px" }} class="btn btn-full" href="https://www.wizprodigy.com/stemey/">Learn More and Register</a>

                </div>

              </div>
              <div style={{ display: "grid" }}>
                <iframe src="https://drive.google.com/file/d/1sLntzxZvWxEZRAJ6IDQsR3Bdx4wbOTGM/preview" width="auto"></iframe>

              </div>

              {/* <h1 class="biggest-header-2">stem enrichment youth</h1> */}
              {/* <p >Explore biology, coding, neuroscience, programming, physics, or chemistry online at your own pace with the help of 
              passionate, accomplished high school STEM enthusiasts.</p> */}

            </div>

            {/* <img class="stemey-logo-no stemey-logo" src={stemey} /> */}

          </div>

        </div>

        <div style={{ marginTop: "20px" }}>

          <iframe src="https://drive.google.com/file/d/1UTeb2F1HY2Qr2-ob697MRphS8jwGznZu/preview" width="50%" height="800px"></iframe>
          <iframe src="https://drive.google.com/file/d/1I5ub_CqmExOFSy__QFueh4f5cc2SENcN/preview" width="50%" height="800px"></iframe>

        </div>

      </div>


    )
  }
}