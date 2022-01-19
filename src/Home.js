import React from "react";
import stemey from "./NewStemeyLogo.png";
import yulia from "./yulia_volunteer_of_the_month.jpg";

import "./HomeModal.css";
import "./home.css";

import ImageSlider from "./PhotoCarousel";
import YoutubeGrid from "./YoutubeGrid";
import VolunteerOfTheMonth from "./VolunteerOfTheMonth";
import PositionedSnackbar from "./PositionedSnackbar";

import { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

/* EDIT THIS TO CHANGE CONTENT FOR VOLUNTEER OF THE MONTH */
/** IF NO MONTH IS SPECIFIED THEN IT DEFAULT TO THE CURRENT MONTH **/
const volunteerOfTheMonth = {
  headshotSrc: yulia,
  announcement: "From the moment she joined STEMEY, Yulia has demonstrated exemplary devotion and enthusiasm as a volunteer. She consistently takes initiative to foster innovation and growth within STEMEY, from spearheading our Annual Review Video Project to developing meaningful, engaging academic resources. As one of our most involved volunteers, Yulia channels her dependability and ambition as a one-on-one tutor, event coordinator, video creator, biology teacher, and Special Needs Science and Math instructor. Yulia is also a passionate and considerate leader: as the Molecular Biology Lead instructor, she fosters a constructive, welcoming work environment and coordinates successful team initiatives.",
  name: "Yulia Anashkina",
  month: "March"
}

export default class Home extends Component {

  doPopup = true;

  constructor() {
    super();
    this.state = {
      viewPopup: false,
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
                  <Link style={{ color: "white", marginBottom: "20px" }} class="btn btn-full" to="/about">About Us</Link>
                  <Link style={{ color: "white", marginBottom: "20px", marginLeft: "10px" }} class="btn btn-full" to="/classes">Classes 2020-2021</Link>
                  <Link style={{ color: "white", marginBottom: "20px", marginLeft: "10px" }} class="btn btn-full" to="/tutoring">Tutoring</Link>
                </div>

              </div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/E1miQGvFh2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


          </div>

        </div>

        <div class="head-txt" style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div className="impact-numbers" style={{ display: "grid", justifyContent: "center", gridTemplateColumns: "repeat(4,1fr)", paddingRight: "2em" }}>

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

          </div >
        </div >

{/** 
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


        <VolunteerOfTheMonth
          headshotSrc={volunteerOfTheMonth.headshotSrc}
          announcement={volunteerOfTheMonth.announcement}
          name={volunteerOfTheMonth.name}
          month={volunteerOfTheMonth.month}
        />
        */}
        <YoutubeGrid />
        <ImageSlider />

        {/** 
        <HomeModal
          show={this.state.viewPopup}
          onHide={() => this.closeModal()}
        />

        {!this.state.viewPopup ? <PositionedSnackbar /> : ''}
        */}
      </div >

    )
  }
}

function HomeModal(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal"
      style={{ overflow: "hidden" }}
    >
      <Modal.Header closeButton>
        <div style={{ display: "flex", alignItems: "center" }} className="header-content">
          <Modal.Title id="contained-modal-title-vcenter">
            What's going on at <span className="gradient-text">STEMEY</span><span className="wiggle-text">?</span>
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
          Start off your summer with <span className="gradient-text">STEMEY</span>!
          From <span className="gradient-text">July 12 - August 6</span>, we will be hosting STEMpowerment, an online summer program that aims to build K-6 students' futures in STEM through hands-on exploration, industry-professional and student-led instruction, and academic mentorship/community-building.
        </p>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link style={{ color: "black" }} className="btn btn-full" to="/tutoring-summer">Learn More</Link>
      </Modal.Footer>
    </Modal >
  );
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}
