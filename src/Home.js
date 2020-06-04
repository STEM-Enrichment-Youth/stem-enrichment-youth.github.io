import React from "react";
import Carousel from "./Carousel";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import "./home.css";

const iconStyle = {
  gridRow: "span 3",
  alignSelf: "end", fontSize: "60px"
}


function Home() {
  const [scale, setScale] = React.useState(false);

  return (
    <div class="whole-home">
      <div class="home-header">
        <div class="head-txt">
          <h1 class="biggest-header">Explore STEM</h1>
          <h1 class="biggest-header-2">Expand your knowledge</h1>
          <p style={{fontSize: "120%", paddingTop: "3%"}}>Keep scrolling to learn more about us!</p>
        </div>
      </div>
      <section class="who">
        <div class="why-us">
          <div class="inspire item" style={{ gridTemplateRows: "1fr" }}>
            <h1 class="big-title">Who Are We?</h1>
          </div>
          <div class="motivate item">
            <AddLocationIcon
              style={iconStyle}
            />
            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>STEM Enrichment Youth</h2>
            <p class="p-home"
            >
              We are a team of high school upperclassmen dedicated to introducing elementary and middle schoolers to different fields of STEM in a fun and interactive manner. We provide classes in physics, biology, mathematics, chemistry, and programming. We also will provide individual online tutoring in each subject! Read on for more information about each class!
            </p>
          </div>
        </div>
        <div class="why-us">
          <div class="inspire item">
            <AddLocationIcon
              style={iconStyle}
            />
            <h2>Fun Activities</h2>
            <p class="p-home">
              Our main goal is for our students to have FUN while they are learning STEM.
              We will discuss the latest, inspiring innovations in each field and provide fun, interactive
              activities that you can do right from your home! You have complete flexibility over
              what concepts you want to learn about and what activities you perform!
            </p>
          </div>

          <div class="inspire item" style={{ gridTemplateRows: "1fr" }}>
            <h1 class="big-title">Why Us? <span style={{color: "transparent"}}>random</span></h1>
          </div>
        </div>
        <div class="why-us">
          <div class="motivate item">
            <AddLocationIcon
              style={iconStyle}
            />
            <h2>Great Instruction</h2>
            <p class="p-home">But you're high schoolers! Indeed we are, but we have a lot of knowledge to share! Many of our instructors
            have taken college level courses and extracurriculars including national math and biology olympiads.
            You can check out all the information about our members in the TEAM section of the website to learn more! </p>
          </div>
          <div class="motivate item">
            <AddLocationIcon
              style={iconStyle}
            />
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


