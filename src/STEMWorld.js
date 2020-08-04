import React from "react";
import "./home.css";
import "./timeline.css";
import stemey from "./GoodStemeyLogo.png";
import Timeline, {TimelineEntry, TimelineMarker} from './Timeline';
import Papa from 'papaparse';
import speakers from './speakers.csv';

function SND() {
    return (
    <div class="whole-home" style={{marginTop: "70px"}}>
      <div style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover"}}>
        <div class="head-txt" style={{width: "90%", marginLeft: "5%"}}>
          <div >
            <div>
                
                <h1 style={{textAlign: "center"}} class="biggest-header-4">STEM World</h1>
                <h2 style={{textAlign: "center", fontSize: "23px", marginBottom: "30px"}}> An International Virtual STEM Convention</h2>
              
              <p  style={{textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%"}}>
              STEMEY will be holding a virtual international STEM Convention through Slack and Zoom that would cater to STEM enthusiasts around the world. The convention will host guest speakers who discuss their research and academic experiences in STEM for 20-30 minutes via Zoom Webinar and will also provide exciting interactive activities. Our guest speakers are professors and researchers from the TOP US UNIVERSITIES, including Stanford, Princeton, Cornell, CalTech, and they are seeking to inspire the next generation of scientists, mathematicians, and engineers.
              </p>
              <div style={{width: "100%", display: "grid", gridTemplateColumns: "1fr", justifyItems: "center"}}>
                <a class="btn btn-full" style={{marginBottom: "20px"}} href="https://tinyurl.com/rsvpstemworld">RSVP Here to Receive Updates</a>
                <a class="btn btn-full" style={{marginBottom: "20px"}} href="/stemworldspeakers">See Our Speakers</a>
                <a class="btn btn-full" style={{marginBottom: "50px"}} href="/sponsorship">Sponsorships</a>
              </div>

              <h1 class="biggest-header-2">Schedule</h1>
              <div class="stem-world" style={{height: "auto"}}>
                {/* <div style={{display: "grid",  gridGap: "20px"}}> */}
                <div style={{width: "90%"}}>
                {/* <h1>Saturday, August 15</h1> */}
                <ul class="timeline timeline-centered">
                    <TimelineMarker
                        title="Saturday, August 15"
                    />
                    <TimelineEntry
                        time="8:00-8:30 AM PST"
                        speaker="Deven Shah"
                        description="Opening Remarks"
                    />
                    <TimelineEntry
                        time="8:30-9:00 AM PST"
                        speaker="Biology Speaker TBD"
                        description="Biotechnology"
                    />
                    <TimelineEntry
                        time="9:00-9:30 AM PST"
                        speaker="Dr. Helen Vuong"
                        description="Microbiome, Brain and Behaviors"
                    />
                    <TimelineEntry
                        time="9:30-10:00 AM PST"
                        speaker="Dr. Olga Zhaxybayeva"
                        description="Genomic clues to origin, evolution and diversity of life"
                    />
                    <TimelineEntry
                        time="10:00-10:30 AM PST"
                        speaker="Dr. Isaac Cervantes Sandoval"
                        description="Where did I leave my keys: Why do we forget?"
                    />
                    <TimelineEntry
                        time="10:30-11:00 AM PST"
                        speaker="Dr. Xia Yang"
                        description="Dissecting Complex Human Diseases via Big Data Bioinformatics and Systems Biology"
                    />
                    <TimelineEntry
                        time="11:00-11:30 AM PST"
                        speaker="Biology Demonstration"
                        description=""
                    />
                    <TimelineEntry
                        time="11:30-12:00 PM PST"
                        speaker="Biology Competition"
                        description="Middle and High School Level Biology Competitions"
                    />
                    <TimelineEntry
                        time="12:00-12:30 PM PST"
                        speaker="Chemistry Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="12:30-1:00 PM PST"
                        speaker="Chemistry Speaker TBD"
                        description="Nanotech"
                    />
                    <TimelineEntry
                        time="1:00-1:30 PM PST"
                        speaker="Chemistry Speaker TBD"
                        description="Biological and Chemical Engineering"
                    />
                    <TimelineEntry
                        time="1:30-2:00 PM PST"
                        speaker="Chemistry Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="2:00-2:30 PM PST"
                        speaker="Chemistry Speaker TBD"
                        description="Immunoengineering"
                    />
                    <TimelineEntry
                        time="2:30-3:00 PM PST"
                        speaker="Chemistry Demonstration"
                        description=""
                    />
                    <TimelineEntry
                        time="3:00-3:30 PM PST"
                        speaker="Chemistry Competition"
                        description="Middle and High School Level Chemistry Competitions"
                    />
                    <TimelineEntry
                        time="3:30-4:00 PM PST"
                        speaker="Dr. Marcelo Gleiser"
                        description="Mysteries of the Universe: What We Know and What We Don't Know"
                    />
                    <TimelineEntry
                        time="4:00-4:30 PM PST"
                        speaker="Dr. Nitu Kitchloo"
                        description="The close relationship between Algebra and Geometry"
                    />
                    <TimelineEntry
                        time="4:30-5:00 PM PST"
                        speaker="Dr. My T. Le"
                        description="Finding Your North Star: My Journey from a refugee camp to the heart of Silicon Valley"
                    />
                    <TimelineEntry
                        time="5:00-5:30 PM PST"
                        speaker="Math Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="5:30-6:00 PM PST"
                        speaker="Math Speaker TBD"
                        description=""
                    />

                    <TimelineEntry
                        time="6:00-6:30 PM PST"
                        speaker="Katherine Liu"
                        description="Math Demonstration"
                    />   

                    <TimelineEntry
                        time="6:30 PM PST"
                        speaker="William Lin"
                        description="IOI 2019 Silver Medalist"
                    />

                    <TimelineMarker
                        title="Sunday, August 16"
                    />
                    <TimelineEntry
                        time="8:00-8:30 AM PST"
                        speaker="Dr. Richard Henry"
                        description="Physics is Simple!"
                    />
                    <TimelineEntry
                        time="8:30-9:00 AM PST"
                        speaker="Physics Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="9:00-9:30 AM PST"
                        speaker="Dr. Jens Koch"
                        description="Theoretical Condensed Matter Physics"
                    />
                    <TimelineEntry
                        time="9:30-10:00 AM PST"
                        speaker="Dr. Daniel Holz"
                        description="Listening to the Universe"
                    />
                    <TimelineEntry
                        time="10:00-10:30 AM PST"
                        speaker="Dr. Christine Aidala"
                        description="Parton Dynamics in Quantum Chromodynamics"
                    />
                    <TimelineEntry
                        time="10:30-11:00 AM PST"
                        speaker="Physics Demonstration"
                        description=""
                    />
                    <TimelineEntry
                        time="11:00-11:30 AM PST"
                        speaker="Physics Competition"
                        description="Middle and High School Level Physics Competitions"
                    />
                    <TimelineEntry
                        time="11:30-12:00 PM PST"
                        speaker="Dr. Anshul Kundaje"
                        description="Deep learning the regulatory code of the human genome"
                    />
                    <TimelineEntry
                        time="12:00-12:30 PM PST"
                        speaker="CS Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="12:30-1:00 PM PST"
                        speaker="Dr. Ken Birman"
                        description="Cloud Computing and the Intelligent Internet of Things"
                    />
                    <TimelineEntry
                        time="1:00-1:30 PM PST"
                        speaker="Dr. Krishnendu Chakrabarty"
                        description="Computational Intelligence in the Design and Optimization of Digital Microfluidic Biochips"
                    />
                    <TimelineEntry
                        time="1:30-2:00 PM PST"
                        speaker="CS Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="2:00-2:30 PM PST"
                        speaker="CS Demonstration"
                        description=""
                    />
                    <TimelineEntry
                        time="2:30-3:00 PM PST"
                        speaker="Math Competition"
                        description="Middle and High School Level Competitions"
                    />
                    <TimelineEntry
                        time="3:00-3:30 PM PST"
                        speaker="High School Panel (Math and Engineering)"
                        description=""
                    />
                    <TimelineEntry
                        time="3:30-4:00 PM PST"
                        speaker="High School Panel (Life Science)"
                        description=""
                    />
                    <TimelineEntry
                        time="4:00-4:30 PM PST"
                        speaker="CS and Engineering Panel"
                        description="Brown University Students"
                    />
                    <TimelineEntry
                        time="4:30-5:00 PM PST"
                        speaker="Nursing Panel"
                        description="UCLA and Case Western Students"
                    />
                    <TimelineEntry
                        time="5:00-5:30 PM PST"
                        speaker="HBV/Healthcare Panel"
                        description="UCLA, UCB, and UCI Students"
                    />
                    <TimelineEntry
                        time="5:30-6:00 PM PST"
                        speaker="Diana Poplacenel"
                        description="Awards Ceremony"
                    />
                </ul>
                <Timeline/>

                {/* <a class="btn btn-full" href="#">8:00-8:30 AM PST Opening Remarks</a>
                <a class="btn btn-full" href="#">8:30-9:00 AM PST Biology Speaker 1</a>
                <a class="btn btn-full" href="#">9:00-9:30 AM PST Biology Speaker 2</a>
                <a class="btn btn-full" href="#">9:30-10:00 AM PST Biology Speaker 3</a>
                <a class="btn btn-full" href="#">10:00-10:30 AM PST Biology Speaker 4</a>
                <a class="btn btn-full" href="#">10:30-11:00 AM PST Biology Speaker 5</a>
                <a class="btn btn-full" href="#">11:00-11:30 AM PST Biology Demonstration</a>
                <a class="btn btn-full" href="#">11:30-12:00 PM PST Biology HS Competition</a>

                <a class="btn btn-full" href="#">12:00-12:30 PM PST Chemistry Speaker 1</a>
                <a class="btn btn-full" href="#">12:30-1:00 PM PST Chemistry Speaker 2</a>
                <a class="btn btn-full" href="#">1:00-1:30 PM PST Chemistry Speaker 3</a>
                <a class="btn btn-full" href="#">1:30-2:00 AM PST Chemistry Speaker 4</a>
                <a class="btn btn-full" href="#">2:00-2:30 PM PST Chemistry Speaker 5</a>
                <a class="btn btn-full" href="#">2:30-3:00 PM PST Chemistry Demonstration</a>
                <a class="btn btn-full" href="#">3:00-3:30 PM PST Chemistry HS Competition</a>

                <a class="btn btn-full" href="#">3:30-4:00 PM PST Math Speaker 1</a>
                <a class="btn btn-full" href="#">4:00-4:30 PM PST Math Speaker 2</a>
                <a class="btn btn-full" href="#">4:30-5:00 AM PST Math Speaker 3</a>
                <a class="btn btn-full" href="#">5:00-5:30 PM PST Math Speaker 4</a>
                <a class="btn btn-full" href="#">5:30-6:00 PM PST Math Speaker 5</a>
                <a class="btn btn-full" href="#">6:00-6:30 PM PST Math Demonstration</a>
                <a class="btn btn-full" href="#">6:30-7:00 PM PST Math HS Competition</a> */}


                </div>
                {/* <div style={{display: "grid",  gridGap: "20px"}}>
                <h1> Sunday, August 16</h1>
                <a class="btn btn-full stem-btn" href="#">8:00-8:30 AM PST Physics Speaker 1</a>
                <a class="btn btn-full stem-btn" href="#">8:30-9:00 AM PST Physics Speaker 2</a>
                <a class="btn btn-full stem-btn" href="#">9:00-9:30 AM PST Physics Speaker 3</a>
                <a class="btn btn-full stem-btn" href="#">9:30-10:00 AM PST Physics Speaker 4</a>
                <a class="btn btn-full stem-btn" href="#">10:00-10:30 AM PST Physics Speaker 5</a>
                <a class="btn btn-full stem-btn" href="#">10:30-11:00 AM PST Physics Demonstration</a>
                <a class="btn btn-full stem-btn" href="#">11:00-11:30 AM PST Physics HS Competition</a>

                <a class="btn btn-full stem-btn" href="#">11:30-12:00 PM PST Computer Science Speaker 1</a>
                <a class="btn btn-full stem-btn" href="#">12:00-12:30 PM PST Computer Science Speaker 2</a>
                <a class="btn btn-full stem-btn" href="#">12:30-1:00 PM PST Computer Science Speaker 3</a>
                <a class="btn btn-full stem-btn" href="#">1:00-1:30 PM PST Computer Science Speaker 4</a>
                <a class="btn btn-full stem-btn" href="#">1:30-2:00 AM PST Computer Science Speaker 5</a>
                <a class="btn btn-full stem-btn" href="#">2:00-2:30 PM PST Computer Science Demonstration</a>
                <a class="btn btn-full stem-btn" href="#">2:30-3:00 PM PST Computer Science Competition</a>
                <a class="btn btn-full stem-btn" href="#">3:00-3:30 PM PST High School Panel 1</a>
                <a class="btn btn-full stem-btn" href="#">3:30-4:00 PM PST High School Panel 2</a>
                <a class="btn btn-full stem-btn" href="#">4:00-4:30 PM PST High School Panel 3</a>
                <a class="btn btn-full stem-btn" href="#">4:30-5:00 PM PST High School Panel 4</a>
                <a class="btn btn-full stem-btn" href="#">5:00-5:30 PM PST College Panel 1</a>
                <a class="btn btn-full stem-btn" href="#">5:30-6:00 PM PST College Panel 2</a>
                <a class="btn btn-full stem-btn" href="#">6:00-6:30 PM PST College Panel 3</a>
                <a class="btn btn-full stem-btn" href="#">6:30-7:00 PM PST College Panel 4</a>
                </div> */}
                

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


