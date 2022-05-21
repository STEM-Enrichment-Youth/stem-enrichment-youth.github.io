import React from "react";
import { Component } from "react";
import cic from "./cic.png"; 
import InstagramEmbed from "react-instagram-embed";
import cic1 from "./cic1.png"; 
import cic2 from "./cic2.png"; 
import cic3 from "./cic3.png";  
import cic4 from "./cic4.png"; 

import stemey from "../NewStemeyLogo.png";

export default class Home extends Component {

  doPopup = true;

  constructor() {
    super();
    this.state = {
      viewPopup: false
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

          <div class="head-txt">
            <div class="head-con">
              <div class="head-txt-2">
                <div class="main-header">
                    <h1 style={{ textAlign: "left", fontSize: "300%"}}> CIC X STEMEY</h1>
                    <h1 style={{ textAlign: "left" }}> Research Internship Program</h1>
                </div>
                <h3 style={{ maxWidth: "700px", textAlign: "left", marginBottom: "20px" }}>
                    Made possible by STEMEY and the National Science Foundation's CIC (Center of Integrated Catalysis)
                </h3>
                <div>
                  <a style={{ color: "white", marginBottom: "20px" }} class="btn btn-full" href="https://docs.google.com/forms/d/e/1FAIpQLSd9BEFFovK2jy0vO2WGkemJ33f3o5plh_W8QyYUHIP0kvhTNw/viewform?usp=sf_link">Learn More and Register</a>

                </div>

              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", justifyItems: "center"}}>
                <img src={cic}></img>
                <img style={{maxWidth: "200px", marginTop: "30px"}} src={stemey}></img>

              </div>

            </div>

          </div>

        </div>

        <div style={{ marginTop: "20px" }}>

            <section class="who">
                    <div class="why-us">
                        <div class="motivate item steps-item">
                            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Program Details</h2>
                            <div class="step step1">
                                <p>The STEMEY-CIC Research Mentorship Program will be a virtual, rigorous 6-week program where high-achieving high school students are matched with a mentor to assist in a chemistry-related research project. </p>
                            </div>

                            <h2 style={{width: "100%", textAlign: "left"}}>Mentees will have the chance to. . .</h2>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Experience chemistry interactively in a professional research environment </p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Explore the CIC’s research</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Build a strong relationship with their mentor</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Mature their academic goals and future prospects</p>
                            </div>

                            <p> Mentees will meet with their mentors for 2-4 hrs/wk to discuss the research. </p>


                        </div>
                        <div class="motivate item steps-item-2">

                        <h2 style={{width: "100%", textAlign: "left"}}>When & Where</h2>
                            <p>1 week training period before the summer - flexible timing. 6 weeks long during the summer. Delivered virtually. </p>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Training Period: May 21-28, 2021</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Dates: June 14-July 12, 2021</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Applications close April 30, 2021</p>
                            </div>
                        
                        <h2 style={{width: "100%", textAlign: "left"}}>Application Process</h2>
                            <p>Letter of Recommendation from an adult that has been involved in your Science classes or extracurriculars.  </p>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Transcript</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Resume</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Two 250-word written questions, One 350-word written question, and One 100-word written question</p>
                            </div>
                            

                            
                        </div>
                        <div class="motivate item steps-item-2">
                            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>What is the CIC? </h2>
                            <div class="step step1">
                                <p>The Center for Integrated Catalysis (CIC) develops the fundamental chemistry needed to prepare synthetic plastics from pools of abundant feedstocks in a single reactor using spatially separated and temporally switchable catalysts. Students will have the opportunity to learn about all aspects of the research process. Through this position you will be able to employ your chemistry knowledge in real world applications. Enthusiasm and passion are valued just as highly as experience! </p>
                            </div>
                            <a style={{ color: "white" }} class="btn btn-full" href="https://cicchemistry.com/">Learn More</a>


                        </div>
                        <div class="motivate item steps-item-2">
                            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Eligibility</h2>
                            <div class="step step1">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>9th-12th graders with a minimum 3.5 GPA (weighted, UC a-g requirements)</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Completed at least 1 Chemistry Class completed (preferably in high school) with an A or B+</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Priority goes to underprivileged individuals with low-income backgrounds, as well as STEMEY volunteers.</p>
                            </div>
                            
                            <div class="step">
                                <h2>Deadline to apply: April 30</h2>
                            </div>

                            <a style={{ color: "white" }} class="btn btn-full" href="https://forms.gle/FodTPuZNsAVLfzwX9">Apply Here</a>

                        </div>



                    </div>



                </section>

        {/* <div class="grid">
        <div class="grid-item">
          <img src={cic1} />
        </div>
        <div class="grid-item">
          <img src={cic2} />
        </div>
        <div class="grid-item">
          <img src={cic3} />
        </div>
        <div class="grid-item">
          <img src={cic4} />
        </div>
        </div> */}

        </div>

      </div>
      


    )
  }
}