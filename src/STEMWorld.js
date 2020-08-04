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
                <a class="btn btn-full" style={{marginBottom: "50px"}} href="/sponsorship">Sponsors</a>
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
                        description="Opening Ceremony"
                    />
                    <TimelineEntry
                        time="8:30-9:00 AM PST"
                        speaker="Akshaya Annapragada"
                        professor = "JHU PhD Student"
                        description="Putting the M in STEM: Math AND Medicine"
                    />
                    <TimelineEntry
                        time="9:00-9:30 AM PST"
                        speaker="Dr. Helen Vuong"
                        professor = "UCLA Professor"
                        description="Microbiome, Brain and Behaviors"
                    />
                    <TimelineEntry
                        time="9:30-10:00 AM PST"
                        speaker="Dr. Olga Zhaxybayeva"
                        professor = "Dartmouth Professor"
                        description="Genomic clues to origin, evolution and diversity of life"
                    />
                    <TimelineEntry
                        time="10:00-10:30 AM PST"
                        speaker="Dr. Isaac Cervantes Sandoval"
                        professor = "Georgetown Professor"
                        description="Where did I leave my keys: Why do we forget?"
                    />
                    <TimelineEntry
                        time="10:30-11:00 AM PST"
                        speaker="Dr. Xia Yang"
                        professor = "UCLA Professor"
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
                        description="AP Biology and USABO Based High School Competition"
                    />
                    <TimelineEntry
                        time="12:00-12:30 PM PST"
                        speaker="Dr. Jane Frommer"
                        professor = "IBM Chemist"
                        description="The Molecular Underpinings of Nanotechnology"
                    />
                    <TimelineEntry
                        time="12:30-1:00 PM PST"
                        speaker="Chemistry Speaker TBD"
                    />
                    <TimelineEntry
                        time="1:00-1:30 PM PST"
                        speaker="Chemistry Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="1:30-2:00 PM PST"
                        speaker="Chemistry Speaker TBD"
                    />
                    <TimelineEntry
                        time="2:00-2:30 PM PST"
                        speaker="Chemistry Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="2:30-3:00 PM PST"
                        speaker="Chemistry Demonstration"
                        description=""
                    />
                    <TimelineEntry
                        time="3:00-3:30 PM PST"
                        speaker="Chemistry Competition"
                        description="Middle and High School Level Chem Competitions"
                    />
                    <TimelineEntry
                        time="3:30-4:00 PM PST"
                        speaker="Dr. Marcelo Gleiser"
                        professor = "Dartmouth Professor"
                        description="Mysteries of the Universe: What We Know and What We Don't Know"
                    />
                    <TimelineEntry
                        time="4:00-4:30 PM PST"
                        speaker="Dr. Nitu Kitchloo"
                        professor = "John Hopkins Professor"
                        description="The close relationship between Algebra and Geometry"
                    />
                    <TimelineEntry
                        time="4:30-5:00 PM PST"
                        speaker="Math Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="5:00-5:30 PM PST"
                        speaker="Dr. Tom Hull"
                        description="Origami in Mathematics"
                    />
                    <TimelineEntry
                        time="5:30-6:00 PM PST"
                        speaker="Math Speaker TBD"
                        description=""
                    />
                    <TimelineEntry
                        time="6:00-6:30 PM PST"
                        speaker="Math Competition"
                        description=""
                    />   
                    <TimelineEntry
                        time="6:30 PM PST"
                        speaker="William Lin"
                        description="IOI 2019 Silver Medalist"
                    />
                    <TimelineEntry
                        time="TBD"
                        speaker="Dr. James Swartz (TBD)"
                        description="Chemistry Speaker"
                    />
                    <TimelineEntry
                        time="TBD"
                        speaker="Dr. Lorie Loeb (TBD)"
                        professor = "Dartmouth Professor"
                        description="CS Speaker"
                    />


                    <TimelineMarker
                        title="Sunday, August 16"
                    />

                    <TimelineEntry
                        time="8:00-8:30 AM PST"
                        speaker="Dr. Richard Henry"
                        professor = "JHU Professor"
                        description="Physics is Simple!"
                    />
                    <TimelineEntry
                        time="8:30-9:00 AM PST"
                        speaker="Physics Speaker TBD"
                    />
                    <TimelineEntry
                        time="9:00-9:30 AM PST"
                        speaker="Dr. Jens Koch"
                        professor = "Northwestern Professor"
                        description="Theoretical Condensed Matter Physics"
                    />
                    <TimelineEntry
                        time="9:30-10:00 AM PST"
                        speaker="Dr. Daniel Holz"
                        professor = "UChicago Professor"
                        description="Listening to the Universe"
                    />
                    <TimelineEntry
                        time="10:00-10:30 AM PST"
                        speaker="Dr. Christine Aidala"
                        professor = "UMichigan Professor"
                        description="Peering into the Proton"
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
                        professor = "Stanford Professor"
                        description="Deep learning the regulatory code of the human genome"
                    />
                    <TimelineEntry
                        time="12:00-12:30 PM PST"
                        speaker="Dr. Jamie Spangler"
                        professor = "JHU Professor"
                        description="Engineering proteins to reprogram the immune response"
                    />
                    <TimelineEntry
                        time="12:30-1:00 PM PST"
                        speaker="Dr. Ken Birman"
                        professor = "Cornell Professor"
                        description="Cloud Computing and the Intelligent Internet of Things"
                    />
                    <TimelineEntry
                        time="1:00-1:30 PM PST"
                        professor = "Duke Professor"
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
                        speaker="CS Demonstration"
                        description=""
                    />
                    <TimelineEntry
                        time="3:00-3:30 PM PST"
                        speaker="Dr. My T. Le"
                        professor = "Stanford Professor"
                        description="Finding Your North Star: My Journey from a refugee camp to the heart of Silicon Valley"
                    />
                    <TimelineEntry
                        time="3:30-4:00 PM PST"
                        speaker="Life Science High School Panel"
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
                        description="Awards and Closing Ceremony"
                    />
                    <TimelineEntry
                        time="TBD"
                        speaker="CS Demonstration (TBD)"
                        description="Schmal Science"
                    />
                    <TimelineEntry
                        time="TBD"
                        speaker="Allison Jia (TBD)"
                        description="Winner of the $50,000 Intel Foundation Young Scientist Award"
                    />

                </ul>
                <Timeline/>

                
                </div>
                
                

              </div>
              
            </div>
            
           
          </div>

        </div>

      </div>
      
    </div>


  )
}

export default SND;


