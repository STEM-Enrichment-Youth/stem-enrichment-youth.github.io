import React from "react";
import "./home.css";
import stemey from "./GoodStemeyLogo.png";
import coding from "./icons/head-cross.png";
import chemistry from "./icons/beaker-atom.png"; import biology from "./icons/genetics.png";
import physics from "./icons/Newtons-cradle.png";
import math from "./icons/checkboard-graph.png";
import neuroscience from "./icons/head-brains.png";
import katherine from "./NewTeam/InstructorImages/katherine.jpg";
import diana from "./NewTeam/InstructorImages/diana.jpg";
import faith from "./NewTeam/InstructorImages/faith.png";
import aryan from "./NewTeam/InstructorImages/aryan2.jpg";
import deven from "./NewTeam/InstructorImages/deven.png";
import Alert from "./Components/Alert";
import carryTheVision from "./Partners/Logos/carrythevision.png";
import nxstep from "./Partners/Logos/nxstep.png";
import polygence from "./Partners/Logos/polygence.png";
import solveit from "./Partners/Logos/solveit.jpg";

function Home() {
  const [scale, setScale] = React.useState(false);
  return (
    <div class="whole-home">
      <div class="home-header" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>

        <div style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
          <Alert
            message="STEMEY is hosting an international, virtual convention on AUGUST 15/16 with professional guest speakers from the top ranking US Universities and virtual STEM competitions and demonstrations!  
            Check out the STEM World tab for more details!" button={true} />
        </div>
        <div class="head-txt" >
          <div class="head-con">
            <div class="head-txt-2">
              <div class="main-header">
                  <h1 style={{textAlign: "left"}}>STEMEY</h1>
              </div>
              <p class="head-p">
                A high school led nonprofit organization that aims to inspire middle and high school students to pursue STEM and to advance the public’s STEM education and experience.
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
        <a class="banner-class" href="/math-class">
          <img class="class-icon" src={math} />
          <h2 style={{ color: "white" }}>Math</h2>
        </a>
        <a class="banner-class" href="/coding-class">
          <img class="class-icon" src={coding} />
          <h2 style={{ color: "white" }}>Coding</h2>
        </a>
        <a class="banner-class" href="/chemistry-class">
          <img class="class-icon" src={chemistry} />
          <h2 style={{ color: "white" }}>Chemistry</h2>
        </a>
        <a class="banner-class" href="/biology-class">
          <img class="class-icon" src={biology} />
          <h2 style={{ color: "white" }}>Biology</h2>
        </a>
        <a class="banner-class" href="/physics-class">
          <img class="class-icon" src={physics} />
          <h2 style={{ color: "white" }}>Physics</h2>
        </a>
        <a class="banner-class" href="/neuroscience-class">
          <img class="class-icon" src={neuroscience} />
          <h2 style={{ color: "white" }}>Neuroscience</h2>
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
            <h1 class="big-title">What do we provide?</h1>
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
      <div>
        <h1 class="section-header">Partners</h1>
        <div class="partners">
          <a href="http://carrythevision.org/">
            <img src={carryTheVision} />
          </a>
          <a href="https://polygence.org">
            <img src={polygence} />
          </a>
          <a href="https://solveitforkids.com">
            <img src={solveit} />
          </a>
          <a href="https://nxstep.co/">
            <img src={nxstep} />
          </a>
        </div>


      </div>

      {/* <h1 class="section-header">Executive Board</h1>
      <div class="banner">
        <div class="banner-class">
          <div class="image-cropper">
            <img style={{ width: "150px", marginTop: '15px' }} src={diana} />
          </div>
          <h2 style={{ fontSize: "100%" }}>Diana Poplacenel</h2>
          <h3>CEO and Co-Founder</h3>
        </div>
        
        <div class="banner-class">
          <div class="image-cropper">
            <img style={{ width: "150px", marginTop: '15px' }} src={katherine} />
          </div>
          <h2>Katherine Liu</h2>
          <h3>Co-Founder</h3>
        </div>
        <div class="banner-class">
          <div class="image-cropper">
            <img style={{ width: "150px", marginTop: '15px' }} src={aryan} />
          </div>
          <h2>Aryan Mathur</h2>
          <h3>CNO</h3>
        </div>
        <div class="banner-class">
          <div class="image-cropper">
            <img style={{ width: "150px", marginTop: '15px' }} src={faith} />
          </div>
          <h2>Faith Han</h2>
          <h3>Executive Coordinator</h3>
        </div>




      </div> */}
    </div>


  )
}

export default Home;


