import React from "react";
import "./home.css";
import "WizPopup.css";
import stemey from "./NewStemeyLogo.png";
import stemworld from "./newstemworld.png";

import "./HomeModal.css";

import ImageSlider from "./PhotoCarousel";
import YoutubeGrid from "./YoutubeGrid";

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
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


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

        <div class="head-txt" style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div style={{ display: "grid", justifyContent: "center", gridTemplateColumns: "repeat(4,1fr)" }}>

            <CountUp
              start={0}
              end={300}
              delay={0}
              duration={1.75}
              separator=","
              suffix=""
              onEnd={() => { }}
              onStart={() => { }}
            >
              {({ countUpRef, start }) => (
                <div>
                  <VisibilitySensor onChange={start} delayedCall>
                    <h1 ref={countUpRef} />
                  </VisibilitySensor>
                  <h1>Video Lectures</h1>
                </div>
              )}
            </CountUp>

            <CountUp
              start={0}
              end={30000}
              delay={0}
              duration={2.5}
              separator=","
              suffix=""
              onEnd={() => { }}
              onStart={() => { }}
            >
              {({ countUpRef, start }) => (
                <div>
                  <VisibilitySensor onChange={start} delayedCall>
                    <h1 ref={countUpRef} />
                  </VisibilitySensor>
                  <h1>Viewers</h1>
                </div>
              )}
            </CountUp>

            <CountUp
              start={0}
              end={1000}
              delay={0}
              duration={2}
              separator=","
              suffix=""
              onEnd={() => { }}
              onStart={() => { }}
            >
              {({ countUpRef, start }) => (
                <div>
                  <VisibilitySensor onChange={start} delayedCall>
                    <h1 ref={countUpRef} />
                  </VisibilitySensor>
                  <h1>Event Attendees</h1>
                </div>
              )}
            </CountUp>


            <CountUp
              start={0}
              end={300}
              delay={0}
              duration={1.85}
              separator=","
              suffix=""
              onEnd={() => { }}
              onStart={() => { }}
            >
              {({ countUpRef, start }) => (
                <div>
                  <VisibilitySensor onChange={start} delayedCall>
                    <h1 ref={countUpRef} />
                  </VisibilitySensor>
                  <h1>Students</h1>
                </div>
              )}
            </CountUp>

          </div>
        </div>


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


        <YoutubeGrid />
        <ImageSlider />

        <HomeModal
          show={this.state.viewPopup}
          onHide={() => this.closeModal()}
        />



        {/*

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
        */}

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

function HomeModal(props) {
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
            Want to join <span className="gradient-text">STEMEY</span><span className="wiggle-text">?</span>
          </Modal.Title>
          <div className="wizCog-container">
          </div>
        </div>
      </Modal.Header>
      <Modal.Body style={{ margin: "1em" }}>
        <div className="image-container">
          <img src={stemey} alt="STEMEY Logo" />
        </div>
        <p>
          Applications for <span className="gradient-text">STEMEY</span> are open and rolling!
          Interested in applying your STEM knowledge and skills to democratize education?
          Passionate about helping underprivileged youth explore STEM?
          Join <span className="gradient-text">STEMEY</span> today! We welcome individuals of diverse interests and skills, including web development, community engagement, video animation, and marketing.
        </p>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <a style={{ color: "black" }} class="btn btn-full" href="/apply">Learn More</a>
      </Modal.Footer>
    </Modal >
  );
}
