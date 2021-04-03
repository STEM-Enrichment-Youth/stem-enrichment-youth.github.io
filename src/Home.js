import React from "react";
import "./home.css";
import "WizPopup.css";
import stemey from "./NewStemeyLogo.png";
import stemworld from "./newstemworld.png";

import physics from "./Classes/ClassPics/2.png";
import anatomy from "./Classes/ClassPics/1.png";
import molbio from "./Classes/ClassPics/5.png";
import settheory from "./Classes/ClassPics/3.png";
import geometry from "./Classes/ClassPics/4.png";
import algebra from "./Classes/ClassPics/6.png";
import tutor from "./Tutoring.png";
import labs from "./Lab.png";
import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import stemworld2 from "./stemworld2logo.png";
import wiz from "./stemworld2wizprodigy.png";

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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/E1miQGvFh2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


          </div>

        </div>

        <WizModal
          show={this.state.viewPopup}
          onHide={() => this.closeModal()}
        />


        <section class="who">
          <div class="why-us">
            

            <div class="motivate item steps-item-2">
              <ion-icon name="people-circle"></ion-icon>
              <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Free STEM Classes</h2>
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
              <a style={{ color: "white" }} class="btn btn-full" href="/classes">Register Today</a>


            </div>

            <div class="motivate item steps-item">
              <ion-icon name="globe"></ion-icon>
              <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>STEM World Conventions</h2>
              <div class="step step1">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Professional Speaker Workshops and High-school Level Competitions</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Featuring 50+ researchers from top-ranking American universities</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>30K viewers and 1K event attendees from 20+ countries</p>
              </div>
              <div class="step">
                <i class="fas fa-arrow-alt-circle-right"></i>
                <p>Advice and Tips on College Advimissions and STEM Opportunities</p>
              </div>
              <a style={{ color: "white" }} class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">Watch Now</a>


            </div>



          </div>

        </section>


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


      </div>


    )
  }
}

/*
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
*/


function WizModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal"
      style={{ overflow: "hidden" }}
    >
      <Modal.Header closeButton>
        <div style={{ display: "flex", alignItems: "center" }} className="header-content">
          <Modal.Title id="contained-modal-title-vcenter">
            Wiz Prodigy <wizCog />
          </Modal.Title>
          <div className="wizCog-container">
            <svg class="wizCog" width="86" height="80" viewBox="0 0 86 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M77.8061 34.9333L69.8033 32.7111C69.25 30.914 68.4891 29.178 67.5339 27.5333L71.4517 20.7111C71.5987 20.4536 71.6525 20.1588 71.6052 19.8706C71.5578 19.5824 71.4118 19.316 71.1889 19.1111L65.4794 13.7778C65.2591 13.5704 64.9728 13.4346 64.663 13.3905C64.3531 13.3465 64.0363 13.3966 63.7594 13.5333L56.4733 17.1555C54.6879 16.2237 52.7972 15.4784 50.8356 14.9333L48.4467 7.57777C48.3456 7.3067 48.1547 7.07244 47.9014 6.90871C47.6482 6.74498 47.3456 6.66023 47.0372 6.66666H38.9628C38.6526 6.668 38.3509 6.7614 38.1017 6.93327C37.8525 7.10513 37.6688 7.34649 37.5772 7.62222L35.1883 14.9556C33.2104 15.4977 31.3034 16.2431 29.5028 17.1778L22.3361 13.5778C22.0593 13.441 21.7424 13.3909 21.4326 13.435C21.1227 13.479 20.8364 13.6148 20.6161 13.8222L14.8111 19.0889C14.5882 19.2938 14.4422 19.5602 14.3948 19.8484C14.3475 20.1366 14.4013 20.4314 14.5483 20.6889L18.4183 27.3556C17.4151 29.0235 16.6139 30.7899 16.0294 32.6222L8.12222 34.8444C7.82582 34.9296 7.56636 35.1005 7.3816 35.3323C7.19685 35.5641 7.09645 35.8448 7.095 36.1333V43.6444C7.09645 43.933 7.19685 44.2136 7.3816 44.4454C7.56636 44.6773 7.82582 44.8482 8.12222 44.9333L16.0772 47.1555C16.6681 48.9574 17.4692 50.6936 18.4661 52.3333L14.5483 59.3111C14.4013 59.5686 14.3475 59.8634 14.3948 60.1516C14.4422 60.4398 14.5882 60.7062 14.8111 60.9111L20.5206 66.2222C20.7409 66.4296 21.0272 66.5654 21.337 66.6095C21.6469 66.6535 21.9637 66.6034 22.2406 66.4667L29.6222 62.8C31.3684 63.6765 33.2104 64.3768 35.1167 64.8889L37.5056 72.3778C37.5971 72.6535 37.7808 72.8949 38.03 73.0667C38.2792 73.2386 38.5809 73.332 38.8911 73.3333H46.9656C47.2758 73.332 47.5774 73.2386 47.8266 73.0667C48.0758 72.8949 48.2596 72.6535 48.3511 72.3778L50.74 64.8667C52.63 64.3519 54.4558 63.6517 56.1867 62.7778L63.6161 66.4667C63.8929 66.6034 64.2098 66.6535 64.5196 66.6095C64.8295 66.5654 65.1158 66.4296 65.3361 66.2222L71.0456 60.9111C71.2685 60.7062 71.4145 60.4398 71.4618 60.1516C71.5092 59.8634 71.4553 59.5686 71.3083 59.3111L67.3428 52.4222C68.292 50.806 69.0528 49.1 69.6122 47.3333L77.6628 45.1111C77.9592 45.026 78.2186 44.855 78.4034 44.6232C78.5882 44.3914 78.6886 44.1108 78.69 43.8222V36.2444C78.7041 35.9681 78.627 35.6944 78.469 35.46C78.311 35.2256 78.0797 35.0419 77.8061 34.9333V34.9333ZM43 52.2222C40.4014 52.2222 37.8611 51.5054 35.7004 50.1624C33.5397 48.8194 31.8557 46.9106 30.8613 44.6772C29.8668 42.4439 29.6066 39.9864 30.1136 37.6156C30.6205 35.2447 31.8719 33.0669 33.7094 31.3576C35.5469 29.6483 37.888 28.4842 40.4367 28.0126C42.9854 27.541 45.6272 27.7831 48.028 28.7081C50.4289 29.6332 52.4809 31.1998 53.9246 33.2097C55.3683 35.2196 56.1389 37.5827 56.1389 40C56.1389 43.2415 54.7546 46.3503 52.2906 48.6424C49.8266 50.9345 46.4846 52.2222 43 52.2222V52.2222Z" fill="#47b6ff" />
            </svg>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body style={{ margin: "1em" }}>
        <div className="image-container" style={imageContainerStyle}>
          <img height="300px" src={wiz}></img>
        </div>
        <p>
          Join our amazing STEMEY and STEM World II sponsor, <span style={wizRoboStyle}>Wiz Robotics</span>, in an online STEM and robotics competition that will unleash your talent and creativity. Many students are inspired by Tesla’s bold movement towards an alternate gas solution. In this competition, you will design a model of a cybertruck upon receiving a “base” kit and learn how to move the DC motors using the Wiz platform.
        </p>


      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <a style={{ color: "black" }} class="btn btn-full" href="/wiz">Learn More</a>
      </Modal.Footer>
    </Modal >
  );
}

const wizRoboStyle = {
  fontSize: "1.1em",
  fontWeight: "bold",
  color: "#61cdff"
}

const imageContainerStyle = {
  margin: "0 auto",
  maxWidth: "30em",
  backgroundColor: "black",
  borderRadius: "0.5em",
  paddingLeft: "2em",
  marginBottom: "1em"
}