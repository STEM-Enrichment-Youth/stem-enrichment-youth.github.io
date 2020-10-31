import React from "react";
import "./home.css";
import stemey from "./NewStemeyLogo.png";
import stemworld from "./stemworldlogo.png";
import coding from "./icons/head-cross.png";
import chemistry from "./icons/beaker-atom.png"; import biology from "./icons/genetics.png";
import physicsdrawing from "./icons/Newtons-cradle.png";
import math from "./icons/checkboard-graph.png";
import neuroscience from "./icons/head-brains.png";
import Alert from "./Components/Alert";
import carryTheVision from "./Partners/Logos/carrythevision.png";
import nxstep from "./Partners/Logos/nxstep.png";
import polygence from "./Partners/Logos/polygence.png";
import solveit from "./Partners/Logos/solveit.jpg";
import readwithkids from "./Partners/Logos/readwithkids.png";
import simply from "./Partners/Logos/simply.png";
import schmahl from "./schmahl.jpg";
import wlf from "./Partners/wlf.png";
import antarexxa from "./Partners/Logos/antarexxa.jpeg";
import mip from "./Partners/Logos/mip.png";
import selfie from "./Partners/Logos/selfie.jpeg";
import medicine from "./Partners/Logos/medicine.jpeg";
import lemonslife from "./Partners/Logos/lemonslife.jpeg";
import physics from "./Classes/ClassPics/Physics.png"; 
import anatomy from "./Classes/ClassPics/Anatomy.png"; 
import molbio from "./Classes/ClassPics/MolBio.png"; 
import settheory from "./Classes/ClassPics/SetTheory.png"; 
import geometry from "./Classes/ClassPics/Geometry.png"; 
import algebra from "./Classes/ClassPics/Algebra.png"; 
import tutor from "./Tutor.png"; 
import labs from "./Labs.png"; 
import animalcell from "./animalcell.png"; 
import FallClass from "./ClassPoster.png"; 


function Home() {
  const [scale, setScale] = React.useState(false);
  return (
    <div class="whole-home">
      <div class="home-header" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>

        <a href="/classes" style={{ width: "100%", marginTop: "20px", marginBottom: "10px" }}>
          <Alert
            message="Register for our live Fall Classes in Biology, Physics, or Math!!" button={true} />
        </a>

        <a href="https://tinyurl.com/stemeytutoring" style={{ width: "100%", marginBottom: "20px" }}>
          <Alert
         message="Apply for our Global STEM Tutoring Program as a tutor or tutee!" button={true} />
        </a>       



        <div class="head-txt" >
          <div class="head-con">
            <div class="head-txt-2">
              <div class="main-header">
                <h1 style={{ textAlign: "left" }}>STEMEY</h1>
              </div>
              <p class="head-p" style={{ maxWidth: "800px" }}>
                A high school led nonprofit organization that aims to inspire middle and high school students to pursue STEM and to advance the public’s STEM education and experience.
              </p>
              <a style={{color: "white", marginBottom: "10px"}} class="btn btn-full" href="/about">Learn More</a>
              <a style={{color: "white", marginBottom: "10px", marginLeft: "10px"}} class="btn btn-full" href="https://tinyurl.com/stemeyevents">Register Today</a>

            </div>
            <img class="stemey-logo" src={stemey} />
            {/* <h1 class="biggest-header-2">stem enrichment youth</h1> */}
            {/* <p >Explore biology, coding, neuroscience, programming, physics, or chemistry online at your own pace with the help of 
              passionate, accomplished high school STEM enthusiasts.</p> */}

          </div>

          {/* <img class="stemey-logo-no stemey-logo" src={stemey} /> */}

        </div>

      </div>
    
      <div class="banner">
        <a class="banner-class" href="/math-class">
          <img  src={settheory} />
        </a>
        <a class="banner-class" href="/math-class">
          <img src={geometry} />
        </a>
        <a class="banner-class" href="/math-class">
          <img  src={algebra} />
        </a>
        <a class="banner-class" href="/biology-class">
          <img src={molbio} />
        </a>
        <a class="banner-class" href="/physics-class">
          <img  src={physics} />
        </a>
        <a class="banner-class" href="/biology-class">
          <img  src={anatomy} />
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
            <a style={{color: "white"}} class="btn btn-full" href="https://tinyurl.com/stemeyevents">Register Today</a>


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
            <a style={{color: "white"}} class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">Watch Now</a>


          </div>

         

        </div>

        <div class="banner" style={{marginTop: "50px", marginBottom: "20px"}}>
        <a class="banner-class" href="https://tinyurl.com/stemeytutoring">
          <img  src={tutor} />
        </a>
        <a class="banner-class" href="/plantcell-lab">
          <img  src={labs} />
        </a>

        <a class="banner-class" href="/stemworld">
          <img  src={stemworld}/>
        </a>
      </div> 
      </section>


      {/* <h1 class="partners-head" >Partners/Supporters</h1> */}
{/* 
      <div class="banner partners-banner" style={{ marginBottom: "40px" }}>
        <a class="banner-class" href="https://solveitforkids.com/">
          <img class="class-icon" src={solveit} />
          <h2 style={{ color: "white" }}>Solve it! For Kids</h2>
        </a>
        <a class="banner-class">
          <img class="class-icon" src={readwithkids} />
          <h2 style={{ color: "white" }}>Reading with Your Kids</h2>
        </a>
        <a class="banner-class" href="https://schmahlscience.org/">
          <img class="class-icon" src={schmahl} />
          <h2 style={{ color: "white" }}>Schmahl Science Workshops</h2>
        </a>
        <a class="banner-class" href="https://www.polygence.org/">
          <img class="class-icon" style={{ width: "150px", marginTop: "30px" }} src={polygence} />
          <h2 style={{ color: "white" }}>A Research Mentorship Program</h2>
        </a>
        <a class="banner-class" href="https://nxstep.co/">
          <img class="class-icon" style={{ width: "150px", marginTop: "40px" }} src={nxstep} />
          <h2 style={{ color: "white" }}>NXStep</h2>
        </a>
        <a class="banner-class" href="https://linktr.ee/jessicazhengorg">
          <img class="class-icon" style={{ marginTop: "20px" }} src={lemonslife} />
          <h2 style={{ color: "white" }}>Lemons and Life</h2>
        </a>
        <a class="banner-class" href="https://www.google.com/url?q=https://linktr.ee/CellfieMagazine&sa=D&ust=1599293130338000&usg=AFQjCNGkG1RKMINFEO0h9qMv33ez7qf9Ww">
          <img class="class-icon" src={selfie} />
          <h2 style={{ color: "white" }}>Cellfie Magazine</h2>
        </a>
        <a class="banner-class" href="https://linktr.ee/missionimpassionible">
          <img class="class-icon" src={mip} />
          <h2 style={{ color: "white" }}>Mission Impassionible</h2>
        </a>
        <a class="banner-class" href="https://linktr.ee/medicine.encompassed">
          <img class="class-icon" style={{ width: "140px" }} src={medicine} />
          <h2 style={{ color: "white" }}>Medicine Encompassed</h2>
        </a>
        <a class="banner-class" href="http://antarexxa.com/">
          <img class="class-icon" src={antarexxa} />
          <h2 style={{ color: "white" }}>Antarexxa Space Global</h2>
        </a>
        <a class="banner-class" href="https://www.wavelf.org/">
          <img class="class-icon" style={{ marginTop: '15px' }} src={wlf} />
          <h2 style={{ color: "white" }}>Wave Learning Festival</h2>
        </a>
      </div>
 */}



    </div>


  )
}

export default Home;

