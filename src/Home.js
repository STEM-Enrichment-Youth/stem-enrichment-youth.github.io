import React from "react";
import Carousel from "./Carousel";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import "./home.css";
import stemey from "./STEMEY.png";


function Home() {
  const [scale, setScale] = React.useState(false);

  return (
    <div class="whole-home">
      <div class="home-header" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>
        <div class="head-txt" >
          <div class="head-con">
            <div style={{display: "flex", marginBottom: "20px"}}>
              <h1 class="biggest-header">stemey</h1>
              <img class="stemey-logo-no stemey-logo" src={stemey} />
            </div>
              <h1 class="biggest-header-2">stem enrichment youth</h1>
              {/* <p >Explore biology, coding, neuroscience, programming, physics, or chemistry online at your own pace with the help of 
              passionate, accomplished high school STEM enthusiasts.</p> */}
           
          </div>

          {/* <img class="stemey-logo-no stemey-logo" src={stemey} /> */}

        </div>

      </div>
      <section class="who">
        <div class="why-us">
          <div class="inspire item" style={{ gridTemplateRows: "1fr" }}>
            <h1 class="big-title">Take our Classes!</h1>
          </div>
          <div class="motivate item">
            <ion-icon name="people-circle"></ion-icon>
            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Virtual Summer STEM Classes</h2>
            <p class="p-home"
            >
              Stem Enrichment Youth is a team of passionate 
              high schoolers dedicated to exploring different fields of STEM. 
              This summer, we will be providing courses in biology, algebra and geometry, precalculus and calculus, competition math preparation,
              chemistry, coding, and physics. These courses are created by our team of high schoolers 
              and are free, completely online, and accessible to all. 
              These classes are aimed towards middle schoolers but anyone is welcome to join!
            </p>
          </div>
        </div>
        {/* here will be the banner */}
        {/* <div class="why-us">
          <div class="inspire item" style={{ gridTemplateRows: "1fr" }}>
            <h1 class="big-title">Who are we?</h1>
          </div>
          <div class="motivate item">
            <ion-icon name="people-circle"></ion-icon>
            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Our Team of instructors</h2>
            <p class="p-home"
            >
              Many of our lead instructors have competed in STEM Competitions including Science Bowl, Science Olympiad, Biology Olympiad, Chemistry Olympiad, the Brain Bee, and the American Invitational Math Examination. 
              We have about twenty instructors in total who are involved in STEM clubs at Leigh 
              High School including Science National Honors Society, Biology and Chemistry Olympiad. 
              Many of us have experience tutoring and teaching other high schoolers and middle schoolers. 
              Check out our TEAM page to learn more about our team! 
            </p>
          </div>
        </div> */}
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
    </div>


  )
}

export default Home;


