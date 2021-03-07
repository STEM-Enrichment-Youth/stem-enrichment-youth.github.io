import React from "react";
import "./home.css";
import stemey from "./NewStemeyLogo.png";
import stemworld from "./newstemworld.png";

import physics from "./Classes/ClassPics/2.png";
import anatomy from "./Classes/ClassPics/1.png";
import molbio from "./Classes/ClassPics/5.png";
import settheory from "./Classes/ClassPics/3.png";
import geometry from "./Classes/ClassPics/4.png";
import algebra from "./Classes/ClassPics/6.png";
import fcsn from "./Classes/ClassPics/FCSN.png";
import tutor from "./Tutoring.png";
import labs from "./Lab.png";
import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import stemworld2 from "./stemworld2logo.png";


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
                  <h1 style={{ textAlign: "left" }}>STEMEY</h1>
                </div>
                <p class="head-p" style={{ maxWidth: "700px" }}>
                  A high school led nonprofit organization that aims to inspire middle and high school students to pursue STEM and to democratize STEM education.
              </p>
                <div>
                  <a style={{ color: "white", marginBottom: "20px" }} class="btn btn-full" href="/about">About Us</a>
                  <a style={{ color: "white", marginBottom: "20px", marginLeft: "10px" }} class="btn btn-full" href="/classes">Classes</a>
                  <a style={{ color: "white", marginBottom: "20px", marginLeft: "10px" }} class="btn btn-full" href="/tutoring">Tutoring</a>

                </div>

              </div>
              <img class="stemey-logo" src={fcsn} />
              {/* <h1 class="biggest-header-2">stem enrichment youth</h1> */}
              {/* <p >Explore biology, coding, neuroscience, programming, physics, or chemistry online at your own pace with the help of 
              passionate, accomplished high school STEM enthusiasts.</p> */}

            </div>

            {/* <img class="stemey-logo-no stemey-logo" src={stemey} /> */}

          </div>

        </div>

        <MyVerticallyCenteredModal
          show={this.state.viewPopup}
          onHide={() => this.closeModal()}
        />


        <div class="class-banner banner" style={{ marginTop: "50px", marginBottom: "20px" }}>
          <a class="banner-class" href="/tutoring">
            <img src={tutor} />
          </a>
          <a class="banner-class" href="/plantcell-lab">
            <img src={labs} />
          </a>

          <a class="banner-class" href="/stemworld">
            <img src={stemworld} />
          </a>
          <a class="banner-class" href="/classes">
            <img src={settheory} />
          </a>
          <a class="banner-class" href="/classes">
            <img src={geometry} />
          </a>
          <a class="banner-class" href="/classes">
            <img src={algebra} />
          </a>
          <a class="banner-class" href="/classes">
            <img src={molbio} />
          </a>
          <a class="banner-class" href="/classes">
            <img src={physics} />
          </a>
          <a class="banner-class" href="/classes">
            <img src={anatomy} />
          </a>
        </div>


        <section class="who">
          <div class="why-us">
            <div class="motivate item steps-item-2">
              <ion-icon name="people-circle"></ion-icon>
              <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Free Fall STEM Classes</h2>
              <div class="step step1">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Live Weekly Classes</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Fun Activities, Personalized Support, and More</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Free Online Academic Resources</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Get Help From Experienced and Accomplished High Schoolers</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Classes in six STEM Disciplines</p>
              </div>
              <a style={{ color: "white" }} class="btn btn-full" href="https://tinyurl.com/stemeyevents">Register Today</a>


            </div>

            <div class="motivate item steps-item">
              <ion-icon name="globe"></ion-icon>
              <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>STEM World</h2>
              <div class="step step1">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>22 Hours Worth of STEM Lectures and Events</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Explore Interdisciplinary and Innovative Areas of Science</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Watch all of our lectures from STEM World on Youtube</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Advice and Tips on College Advimissions and STEM Opportunities</p>
              </div>
              <a style={{ color: "white" }} class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">Watch Now</a>


            </div>



          </div>

        </section>



      </div>


    )
  }
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          STEM World II!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img height="300px" src={stemworld2}></img>
        <p>
        STEM World II! Hosted by EFA and STEMEY. We’ve come back from STEM World I with over a dozen of even more distinguished speakers as well as bigger, brain-itching competitions. Get ready for a whole array of new activities, social events, and workshops to ultimately explore critical issues in modern society that relate to STEM and/or global education. Happening on March 20-28th.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <a style={{ color: "black", marginBottom: "20px" }} class="btn btn-full" href="/stemworld2">Learn More!</a>
      </Modal.Footer>
    </Modal>
  );
}
