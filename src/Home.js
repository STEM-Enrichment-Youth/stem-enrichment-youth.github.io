import React from "react";
import Carousel from "./Carousel";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import "./home.css";





function Home() {
  const [scale, setScale] = React.useState(false);

  return (
    <div class="whole-home">
      <div class="head-txt" style={{ padding: "50px", paddingBottom: "10px", color: "white" }}>
        <h3 style={{ fontSize: "8rem", textTransform: "uppercase", letterSpacing: "10px", marginLeft: "-10px", color: "rgb(179, 178, 178)"}}>Explore STEM</h3>
        <h4 style={{ fontSize: "4rem", padding: "30px 0", textTransform: "uppercase", letterSpacing: "10px" }}>Expand your knowledge</h4>
        {/* <h1 style={{ fontSize: "3rem", marginTop: "40px" }}>Biology — Mathematics — Physics — Chemistry — Coding — Astronomy </h1> */}
      </div>
      <section class="who">
        <div class="why-us">
          <div class="inspire item" style={{gridTemplateRows: "1fr" }}>
            <h1 style={{ alignSelf: "center", fontSize: "6rem", textAlign: "center" }}>Who Are We?</h1>
          </div>
          <div class="motivate item">
            <AddLocationIcon
              style={{ gridRow: "span 3", alignSelf: "end", fontSize: "60px" }}
            />
            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>STEM Enrichment Youth</h2>
            <p class="p"
              style={{ lineHeight: "160%", width: "90%" }}>
              We are a team of high school upperclassmen dedicated to introducing elementary and middle schoolers to different fields of STEM in a fun and interactive manner. We provide classes in physics, biology, mathematics, chemistry, and programming. We also will provide individual online tutoring in each subject! Read on for more information about each class!
            </p>
          </div>
        </div>
        <div class="why-us">
          <div class="inspire item">
            <AddLocationIcon
              style={{ gridRow: "span 3", alignSelf: "end", fontSize: "60px" }}
            />
            <h2 style={{ fontWeight: "100" }}>Fun Activities</h2>
            <p style={{ lineHeight: "160%", width: "90%" }} class="p">
              Our main goal is for our students to have FUN while they are learning STEM.
              We will discuss the latest, inspiring innovations in each field and provide fun, interactive
              activities that you can do right from your home! You have complete flexibility over
              what concepts you want to learn about and what activities you perform!
            </p>
          </div>

          <div class="inspire item" style={{gridTemplateRows: "1fr" }}>
            <h1 style={{ alignSelf: "center", fontSize: "150px", textAlign: "center" }}>Why Us?</h1>
          </div>
        </div>
        <div class="why-us">
          <div class="motivate item">
            <AddLocationIcon
              style={{ gridRow: "span 3", alignSelf: "end", fontSize: "60px" }}
            />
            <h2 style={{ fontWeight: "100" }}>Great Instruction</h2>
            <p style={{ lineHeight: "160%", width: "90%" }} class="p">But you're high schoolers! Indeed we are, but we have a lot of knowledge to share! Many of our instructors
            have taken college level courses and extracurriculars including national math and biology olympiads.
            You can check out all the information about our members in the TEAM section of the website to learn more! </p>
          </div>
          <div class="motivate item">
            <AddLocationIcon
              style={{ gridRow: "span 3", alignSelf: "end", fontSize: "60px" }}
            />
            <h2 style={{ fontWeight: "100" }}>We're Super Flexible!</h2>
            <p class="p"
              style={{ lineHeight: "160%", width: "90%" }}>
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


/*
<div class="who-we-are" style={whoWeAre}>
          <div class="inspire item" style={item}>
            <AddLocationIcon
              style={{ gridRow: "span 3", alignSelf: "end", fontSize: "60px" }}
            />
            <h2 style={{ fontWeight: "100" }}>Fun Activities</h2>
            <p style={{ lineHeight: "160%", width: "90%" }} class="p">
              Our main goal is for our students to have FUN while they are learning STEM.
              We will discuss the latest, inspiring innovations in each field and provide fun, interactive
              activities that you can do right from your home! You have complete flexibility over
              what concepts you want to learn about and what activities you perform!
            </p>
          </div>
          <div class="motivate item" style={item}>
            <AddLocationIcon
              style={{ gridRow: "span 3", alignSelf: "end", fontSize: "60px" }}
            />
            <h2 style={{ fontWeight: "100" }}>Great Instruction</h2>
            <p style={{ lineHeight: "160%", width: "90%" }} class="p">But you're high schoolers! Indeed we are, but we have a lot of knowledge to share! Many of our instructors
            have taken college level courses and extracurriculars including national math and biology olympiads.
            You can check out all the information about our members in the TEAM section of the website to learn more! </p>
          </div>
          <div class="inspire item" style={item}>
            <AddLocationIcon
              style={{ gridRow: "span 3", alignSelf: "end", fontSize: "60px" }}
            />
            <h2 style={{ fontWeight: "100" }}>We're Super Flexible!</h2>
            <p class="p"
              style={{ lineHeight: "160%", width: "90%" }}>
              We offer assignments and instruction through many modalities! We will post assignments
              (including labs and activities) through classroom but Zoom classes and
              individual online tutoring will also be available! All completely free!
            </p>
          </div>
        </div>
*/


