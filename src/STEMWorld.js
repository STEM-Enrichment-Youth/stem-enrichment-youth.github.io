import React from "react";
import "./home.css";
import "./timeline.css";
import stemey from "./GoodStemeyLogo.png";
import Timeline, {TimelineEntry, TimelineMarker} from './Timeline';
import { withGoogleSheets } from 'react-db-google-sheets';

function SND() {
  return (
    <div class="whole-home" style={{marginTop: "70px"}}>
      <div style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover"}}>
        <div class="head-txt" style={{width: "90%", marginLeft: "5%", overflow: "scroll"}}>
          <div>
            <div>
                
                <h1 style={{textAlign: "center"}} class="biggest-header-4">STEM World</h1>
                <h2 style={{textAlign: "center", fontSize: "23px", marginBottom: "30px"}}> An International Virtual STEM Convention</h2>
              
              <p  style={{textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%"}}>
              STEMEY will be holding a virtual international STEM Convention through Slack and Zoom that would cater to STEM enthusiasts around the world. The convention will host guest speakers who discuss their research and academic experiences in STEM for 20-30 minutes via Zoom Webinar and will also provide exciting interactive activities. Our guest speakers are professors and researchers from the TOP US UNIVERSITIES, including Stanford, Princeton, Cornell, CalTech, and they are seeking to inspire the next generation of scientists, mathematicians, and engineers.
              </p>
              <div style={{width: "100%", display: "grid", gridTemplateColumns: "1fr", justifyItems: "center"}}>
                <a class="btn btn-full" style={{marginBottom: "20px"}} href="https://tinyurl.com/rsvpstemworld">RSVP Here to Receive Updates</a>
                <a class="btn btn-full" style={{marginBottom: "50px"}} href="/stemworldspeakers">See Our Speakers</a>
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
                        time="10:00-10:30 AM PST"
                        speaker="Dr. Cervantes Sandoval"
                        description="Where did I leave my keys: Why do we forget?"
                    />
                    <TimelineEntry
                        time="10:30-11:00 AM PST"
                        speaker="Dr. Yang"
                        description="Dissecting Complex Human Diseases via Big Data Bioinformatics and Systems Biology"
                    />
                    <TimelineEntry
                        time="2:00-2:30 PM PST"
                        speaker="Dr. Jamie Spangler"
                        description="Engineering proteins to reprogram the immune response"
                    />
                    <TimelineEntry
                        time="4:00-4:30 PM PST"
                        speaker="Nitu Kitchloo"
                        description="The close relationship between Algebra and Geometry"
                    />
                    <TimelineMarker
                        title="Sunday, August 16"
                    />
                    <TimelineEntry
                        time="8:00-8:30 AM PST"
                        speaker="Dr. Conn Henry"
                        description="Physics is Simple!"
                    />
                    <TimelineEntry
                        time="9:30-10:00 AM PST"
                        speaker="Dr. Daniel Holz"
                        description="Listening to the Universe"
                    />
                    <TimelineEntry
                        time="10:00-10:30 AM PST"
                        speaker="Dr. Aidala"
                        description="Physics"
                    />
                    <TimelineEntry
                        time="11:30-12:00 PM PST"
                        speaker="Dr. Kundaje"
                        description="Computer Science"
                    />
                    <TimelineEntry
                        time="12:30-1:00 PM PST"
                        speaker="Dr. Ken Birman"
                        description="Cloud Computing and the Intelligent Internet of Things."
                    />
                    <TimelineEntry
                        time="1:00-1:30 PM PST"
                        speaker="Dr. Chakrabarty"
                        description="Computer Science"
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


