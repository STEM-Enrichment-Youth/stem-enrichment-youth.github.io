import React from "react";
import "./home.css";
import stemey from "./GoodStemeyLogo.png";
import stemworld from "./stemworldlogo.png";
import coding from "./icons/head-cross.png";
import chemistry from "./icons/beaker-atom.png"; import biology from "./icons/genetics.png";
import physics from "./icons/Newtons-cradle.png";
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

function Home() {
  const [scale, setScale] = React.useState(false);
  return (
    <div class="whole-home">
      <div class="home-header" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>

        <div style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
          <Alert
            message="STEMEY is hosting a Speaker Event Series in the month of October, called STEM-Tober! Each weekend features four speaker panels from a specific STEM Discipline. Check Out the STEM-Tober Tab for more details!" button={true} />

        </div>
        <div class="head-txt" >
          <div class="head-con">
            <div class="head-txt-2">
              <div class="main-header">
                <h1 style={{ textAlign: "left" }}>STEMEY</h1>
              </div>
              <p class="head-p" style={{ maxWidth: "800px" }}>
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

      </div>

      <section class="who">
        <div class="why-us">

        
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
            <a style={{color: "white"}} class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">Subscribe & Watch STEM World</a>


          </div>

          <div class="motivate item steps-item-2">
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
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Classes in eight STEM Disciplines</p>
            </div>
            <a style={{color: "white"}} class="btn btn-full" href="https://tinyurl.com/stemeyfallclasses">Sign Up for Classes</a>


        </div>

        </div>
      </section>


      {/* <div style={{backgroundColor: "rgb(0, 0, 0, 0.7)", display: "grid", gridTemplateColumns: "1fr", justifyItems: "center", marginTop: "50px"}}>
        <h1 style={{marginTop: "20px"}}>Didn't get to watch our last STEM Convention?</h1>
        <p>No Worries! Watch all of our videos on YouTube by clicking any of the links below!!</p>
      </div> */}

      {/* <div class='youtube-videos'>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/Mp1H11ozNCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yVdLvW_Xvik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}

      <h1 class="biggest-header">Why Us?</h1>
      <section class="who">

  
        <div class="why-us">
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

        </div>
        {/* <div class="why-us">
          
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
        </div> */}

      </section>


      <h1 style={{ backgroundColor: "rgb(0, 0, 0, 0.7)", padding: "20px", marginTop: "50px" }}>Partners/Supporters</h1>

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
          <h2 style={{ color: "white" }}>Polygence</h2>
        </a>
        <a class="banner-class" href="https://www.carrythevision.org/">
          <img class="class-icon" style={{ width: "150px", marginTop: "30px" }} src={carryTheVision} />
          <h2 style={{ color: "white" }}>Carry the Vision</h2>
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
        {/* <a class="banner-class" href="/neuroscience-class">
          <img class="class-icon" style={{ marginTop: '25px' }} src={simply} />
          <h2 style={{ color: "white" }}>Simply Neuroscience</h2>
        </a> */}
        <a class="banner-class" href="https://www.wavelf.org/">
          <img class="class-icon" style={{ marginTop: '15px' }} src={wlf} />
          <h2 style={{ color: "white" }}>Wave Learning Festival</h2>
        </a>
      </div>

      <h1>Sponsors</h1>

      <section class="who">

        <div class="why-us">



          <a class="motivate item steps-item" href="http://carrythevision.org">
            <a href="http://carrythevision.org">
              <img style={{ margin: '15px 0' }} src={carryTheVision} />

            </a>
            <a style={{ fontWeight: "100", letterSpacing: "4px" }} href="http://carrythevision.org">A 501(c)(3) nonprofit organization dedicated to restoring and promoting nonviolence</a>

            <div class="step step1">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Offers nonviolence training, workshops, retreats, and community wide events providing support and inspiration</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Restoring lives and communities through nonviolence education creating a peaceful and compassionate world.</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Building Compassionate Communities in a Peaceful World</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Transforming the world by restoring our human potential one person at a time</p>
            </div>

          </a>
        </div>
      </section>



    </div>


  )
}

export default Home;

