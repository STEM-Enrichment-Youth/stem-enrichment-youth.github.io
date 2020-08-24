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

function Home() {
  const [scale, setScale] = React.useState(false);
  return (
    <div class="whole-home">
      <div class="home-header" style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>

        <div style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
          <Alert
            message="STEMEY just hosted an international, virtual convention with professional guest speakers from the top ranking US Universities and virtual STEM competitions and demonstrations!  
            Check out the STEM World tab for more details!" button={true} />
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
        <a class="banner-class" href="/neuroscience-class">
          <img class="class-icon" src={neuroscience} />
          <h2 style={{ color: "white" }}>Neuroscience</h2>
        </a>
      </div>


      <div class="why-us">

        <div class="inspire item" style={{ gridTemplateRows: "1fr" }}>
          <h1 class="big-title" style={{fontSize: "70px"}}>Free Virtual Speaker Conventions</h1>
        </div>
        <div class="motivate item steps-item">
          <ion-icon name="people-circle"></ion-icon>
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
          <div class="step">
            <i class="fas fa-arrow-alt-circle-right"></i>
            <p>SUBSCRIBE TO OUR YOUTUBE CHANNEL FOR MORE VIDEOS!!</p>
          </div>
        </div>

      </div>

      <div style={{backgroundColor: "rgb(0, 0, 0, 0.7)", display: "grid", gridTemplateColumns: "1fr", justifyItems: "center", marginTop: "50px"}}>
        <h1 style={{marginTop: "20px"}}>Didn't get to watch our last STEM Convention?</h1>
        <p>No Worries! Watch all of our videos on YouTube by clicking any of the links below!!</p>
      </div>

      <div class='youtube-videos'>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/Mp1H11ozNCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yVdLvW_Xvik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zG7mJaH4OaQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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


      <h1 style={{ backgroundColor: "rgb(0, 0, 0, 0.7)", padding: "20px" }}>Partners/Supporters</h1>

      <div class="banner" style={{ marginBottom: "40px" }}>
        <a class="banner-class" href="https://solveitforkids.com/">
          <img class="class-icon" src={solveit} />
          <h2 style={{ color: "white" }}>Solve it! For Kids</h2>
        </a>
        <a class="banner-class">
          <img class="class-icon" src={readwithkids} />
          <h2 style={{ color: "white" }}>Reading with Your Kids</h2>
        </a>
        <a class="banner-class" href="https://schmahlscience.org/">
          <img class="class-icon" src={schmahl}/>
          <h2 style={{ color: "white" }}>Schmahl Science Workshops</h2>
        </a>
        <a class="banner-class" href="/chemistry-class">
          <img class="class-icon" style={{ width: "150px", marginTop: "30px" }} src={polygence} />
          <h2 style={{ color: "white" }}>Polygence</h2>
        </a>
        <a class="banner-class" href="/biology-class">
          <img class="class-icon" style={{ width: "150px", marginTop: "30px" }} src={carryTheVision} />
          <h2 style={{ color: "white" }}>Carry the Vision</h2>
        </a>
        <a class="banner-class" href="/physics-class">
          <img class="class-icon" style={{ width: "150px", marginTop: "40px" }} src={nxstep} />
          <h2 style={{ color: "white" }}>NXStep</h2>
        </a>
        <a class="banner-class" href="/neuroscience-class">
          <img class="class-icon" style={{ marginTop: '25px' }} src={simply} />
          <h2 style={{ color: "white" }}>Simply Neuroscience</h2>
        </a>
      </div>

      <h1>Sponsors</h1>

      <section class="who">

        <div class="why-us">

          <div class="motivate item steps-item">
            <img style={{ width: "200px", marginTop: '15px' }} src={nxstep} />
            <a style={{ fontWeight: "100", letterSpacing: "4px" }} href="http://nxstep.co">An amazing tool to find the perfect college for you!</a>
            <div class="step step1">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>1-on-1 live virtual discussions with a real college student- matched specifically to them by major, personality, etc</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Open, honest, and comfortable environment to ask questions that you find important about college</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>Receive honest, raw feedback about different universities</p>
            </div>
            <div class="step">
              <i class="fas fa-arrow-alt-circle-right"></i>
              <p>The ultimate tool to help high school students find the college that's perfect for them!</p>
            </div>

          </div>

          <div class="motivate item steps-item">
            <img style={{ width: "200px", margin: '15px 0' }} src={carryTheVision} />
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

          </div>
        </div>
      </section>



    </div>


  )
}

export default Home;

