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
import ctv from "./Partners/Logos/carrythevision.png"; 

function SND() {

  return (
    <div class="whole-home" style={{marginTop: "70px"}}>
      <div style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover"}}>
        <div class="head-txt" style={{width: "90%", marginLeft: "5%"}}>
        <div>
            <div>
                {/* <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>
                    <h1 style={{textAlign: "center"}} class="biggest-header-2">stemey X SND</h1>
                    <img class="stemey-logo" style={{width: "85px", height: "auto", marginLeft: "50px", marginRight: "50px"}} src={stemey} />
                    <img style={{width: "70px", height: "70px"}} src="https://static.wixstatic.com/media/3129a4_603dabd0e2ba41a5b039ea8c576870aa~mv2.png/v1/fill/w_59,h_60,al_c,q_85,usm_0.66_1.00_0.01/Untitled_Artwork_edited.webp"></img>
                </div> */}
                <h1 style={{textAlign: "center"}} class="biggest-header-4">Carry the Vision</h1>
              <p  style={{textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%"}}>
              Carry the Vision restores lives and communities through nonviolence education creating a peaceful and compassionate world.
              </p>
              <h2 style={{marginBottom: "20px"}}>Programs</h2>
              <div class="ctv-stemey">
              <a style={{color: "white"}} class="btn btn-full" href="http://carrythevision.org/restore-for-kids/">Restore! for Kids</a>
                <a style={{color: "white"}} class="btn btn-full" href="http://carrythevision.org/restore-training-and-workshops/">Restore! Training and Workshops</a>
                <a style={{color: "white"}} class="btn btn-full" href="http://carrythevision.org/restore-life-skills-for-service-providers/">Restore! Life Skills for Service Providers</a>
                <a style={{color: "white"}} class="btn btn-full" href="http://carrythevision.org/restore-for-reentry-and-incarcerated-youth-and-adults/">Restore! for Reentry and Incarcerated Youth and Adult</a>
                <a style={{color: "white"}} class="btn btn-full" href="http://carrythevision.org/restore-leadership-program-and-train-the-trainer/">Restore Leadership Program and Train the Traine</a>
                <a style={{color: "white"}} class="btn btn-full" href="http://www.carrythevision.org/">Learn More about CTV</a>
              </div>

              
            </div>
            <div style={{display: "grid", gridTemplateRows: "1fr", justifyItems: "center", gridGap: "20px"}}>
                <div>
                    <img style={{width: "300px", marginBottom: "20px"}} src={ctv} />
                </div>
            </div>
            
           
          </div>
          <div>
            <div>
                {/* <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>
                    <h1 style={{textAlign: "center"}} class="biggest-header-2">stemey X SND</h1>
                    <img class="stemey-logo" style={{width: "85px", height: "auto", marginLeft: "50px", marginRight: "50px"}} src={stemey} />
                    <img style={{width: "70px", height: "70px"}} src="https://static.wixstatic.com/media/3129a4_603dabd0e2ba41a5b039ea8c576870aa~mv2.png/v1/fill/w_59,h_60,al_c,q_85,usm_0.66_1.00_0.01/Untitled_Artwork_edited.webp"></img>
                </div> */}
                <h1 style={{textAlign: "center"}} class="biggest-header-4">STEMEY X SND</h1>
              
              <p  style={{textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%"}}>
              STEMEY has partnered with SND (Students Next Door), a high-school led non-profit organization that aims to support their community through 
            <span style={{fontSize: "130%"}}> FREE, one-on-one tutoring </span> for K-12 students. SND has a wide range of tutors ready to help you in subjects you are struggling in. Need help on your homework, preparing for an online test, or learning a certain subject? SND is here to help! Click below to sign up for one-on-one tutoring or to learn more about Students Next Door! 
              </p>
              <div class="snd-stemey">
                <a style={{color: "white"}} class="btn btn-full" href="https://www.studentsnextdoor.com/">Learn More about SND</a>
                <a style={{color: "white"}} class="btn btn-full" href="https://docs.google.com/forms/d/e/1FAIpQLSe3baa2H80MIOJ1vDi-JKEJvPVB6flggxNLClULa40GnR45rw/viewform">Get an SND Tutor</a>
              </div>
              
            </div>
            <div style={{display: "grid", gridTemplateRows: "1fr", justifyItems: "center", gridGap: "20px"}}>
                <div>
                    <img class="stemey-logo" style={{width: "65px", marginRight: "60px"}} src={stemey} />
                    <img style={{width: "50px"}} src="https://static.wixstatic.com/media/3129a4_603dabd0e2ba41a5b039ea8c576870aa~mv2.png/v1/fill/w_59,h_60,al_c,q_85,usm_0.66_1.00_0.01/Untitled_Artwork_edited.webp"></img>
                </div>
            </div>
            
           
          </div>

          {/* <img class="stemey-logo-no stemey-logo" src={stemey} /> */}

        </div>

      </div>
      
    </div>


  )
}

export default SND;


