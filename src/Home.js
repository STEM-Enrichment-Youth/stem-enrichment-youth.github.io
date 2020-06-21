import React from "react";
import Carousel from "./Carousel";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import "./home.css";
import stemey from "./GoodStemeyLogo.png";
import coding from "./icons/head-cross.png";
import chemistry from "./icons/beaker-atom.png"; import biology from "./icons/genetics.png";
import physics from "./icons/Newtons-cradle.png";
import math from "./icons/checkboard-graph.png";
import neuroscience from "./icons/head-brains.png";
import katherine from "./NewTeam/InstructorImages/katherine.jpg";
import christian from "./NewTeam/InstructorImages/christian.png";
import Alert from "./Components/Alert";

function Home() {
  const [scale, setScale] = React.useState(false);

  return (
    <div class="whole-home">
      <div class="home-header" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>
      <div style={{width: "100%", marginTop: "20px"}}>
        <Alert message="Our Neuroscience Class is now available! Check out the Neuroscience Class Page for more information!"/>
      </div>
      <div style={{ width: "100%", marginTop: "20px"}}>
          <Alert
            message="This Monday we will have a Zoom meeting to introduce our program and instructors to the public! Link will be on this page Monday! Feel free to drop by if you have any questions whatsoever about the program." button={true} />
        </div>
        <div class="head-txt" >
          <div class="head-con">
            <div class="head-txt-2">
              <h1 class="biggest-header">stemey</h1>
              <p class="head-p">
                A high-school led organization committed to encouraging interest in STEM especially among middle schoolers.
                STEMEY provides virtual classes built by high schoolers to grades 5-10.
              </p>

            </div>
            <img class="stemey-logo" src={stemey} />
            {/* <h1 class="biggest-header-2">stem enrichment youth</h1> */}
            {/* <p >Explore biology, coding, neuroscience, programming, physics, or chemistry online at your own pace with the help of 
              passionate, accomplished high school STEM enthusiasts.</p> */}

          </div>

          {/* <img class="stemey-logo-no stemey-logo" src={stemey} /> */}

        </div>

      </div>
      {/* <div class="announcement">
      <h2 style={{marginBottom: "20px"}}>Special Announcement</h2>
      <p style={{lineHeight: "180%"}}>This Friday, June 19, STEMEY will have a Zoom meeting open to the public for anyone who wants to 
              ask questions about the program! Link to the meeting will be on this page Friday!</p>
      </div> */}
      <div class="banner">
        <a class="banner-class" href="/classes">
          <img class="class-icon" src={coding} />
          <h2 style={{ color: "white" }}>Coding</h2>
        </a>
        <a class="banner-class" href="/classes">
          <img class="class-icon" src={biology} />
          <h2 style={{ color: "white" }}>Biology</h2>
        </a>
        <a class="banner-class" href="/classes">
          <img class="class-icon" src={chemistry} />
          <h2 style={{ color: "white" }}>Chemistry</h2>
        </a>
        <a class="banner-class" href="/classes">
          <img class="class-icon" src={neuroscience} />
          <h2 style={{ color: "white" }}>Neuroscience</h2>
        </a>
        <a class="banner-class" href="/classes">
          <img class="class-icon" src={physics} />
          <h2 style={{ color: "white" }}>Physics</h2>
        </a>
        <a class="banner-class" href="/classes">
          <img class="class-icon" src={math} />
          <h2 style={{ color: "white" }}>Math</h2>
        </a>
      </div>
      <section class="who">

        <div class="why-us">

          <div class="inspire item" style={{ gridTemplateRows: "1fr" }}>
            <h1 class="big-title">Free Virtual Classes!</h1>
          </div>
          <div class="motivate item steps-item">
            <ion-icon name="people-circle"></ion-icon>
            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Summer STEM Classes</h2>
            <div class="step step1">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Free Online Academic Resources</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Fun Activities, Video Lectures, and More</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Pick and Choose What You Learn</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Get Help From Experienced and Accomplished High Schoolers</p>
            </div>
            {/* <p class="p-home"
            >
              Stem Enrichment Youth is a team of passionate 
              high schoolers dedicated to exploring different fields of STEM. 
              This summer, we will be providing courses in biology, algebra and geometry, precalculus and calculus, competition math preparation,
              chemistry, coding, and physics. These courses are created by our team of high schoolers 
              and are free, completely online, and accessible to all. 
              These classes are aimed towards middle schoolers but anyone is welcome to join!
            </p> */}
          </div>
        </div>


        <div class="why-us">
          <div class="inspire item" style={{ gridTemplateRows: "1fr" }}>
            <h1 class="big-title">Why Us? <span style={{ color: "transparent", fontSize: "20px" }}>randomrandom</span></h1>
          </div>
          <div class="inspire item">
            <ion-icon name="logo-electron"></ion-icon>
            <h2>Fun Classes</h2>
            <p class="p-home">
              Our main goal is for our students to have FUN while they are learning STEM.
              We will discuss the latest, inspiring innovations in each field and provide fun, interactive
              activities that you can do right from your home! You have complete flexibility over
              what concepts you want to learn about and what activities you perform!
            </p>
          </div>
        </div>
        <div class="why-us">
          <div class="motivate item">
            <ion-icon name="color-filter"></ion-icon>
            <h2>Great Instruction</h2>
            <p class="p-home">
              Many of our lead instructors have competed in STEM Competitions including Science Bowl, Science Olympiad, Biology Olympiad, Chemistry Olympiad, the Brain Bee, and the American Invitational Math Examination.
              We have about twenty instructors in total who are involved in STEM clubs at Leigh
              High School including Science National Honors Society, Biology and Chemistry Olympiad.
              Many of us have experience tutoring and teaching other high schoolers and middle schoolers.
              Check out our TEAM page to learn more about our team!
             </p>
          </div>
          <div class="motivate item">
            <ion-icon name="color-wand"></ion-icon>
            <h2>We're Super Flexible!</h2>
            <p class="p-home"
            >
              We offer assignments and instruction through many modalities! We will post assignments
              (including labs and activities) through classroom but Zoom classes and
              individual online tutoring will also be available! All completely free!
            </p>
          </div>



        </div>

      </section>
      <h1 style={{ textAlign: "center", fontSize: "500%", marginTop: "20px" }}>Founders</h1>
      <div class="banner">
        <div class="banner-class">
          <img style={{ width: "120px", marginTop: '15px' }} src="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/diana_orig.jpg" />
          <h2 style={{ fontSize: "100%" }}>Diana Poplacenel</h2>
        </div>
        <div class="banner-class">
          <img style={{ width: "50%", marginTop: '15px' }} src={katherine} />
          <h2>Katherine Liu</h2>
        </div>
        <div class="banner-class">
          <img style={{ width: "50%", marginTop: '15px' }} src={christian} />
          <h2>Christian Kim</h2>
        </div>
        <div class="banner-class">
          <img class="class-icon" src={neuroscience} style={{ marginTop: '15px' }} />
          <h2>Aniketh Prasad</h2>
        </div>

      </div>
    </div>


  )
}

export default Home;


