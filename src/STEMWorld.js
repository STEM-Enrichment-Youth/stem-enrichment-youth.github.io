import React from "react";
import "./home.css";
import "./timeline.css";
import stemey from "./GoodStemeyLogo.png";
import Timeline, { TimelineEntry, TimelineMarker } from './Timeline';
import Papa from 'papaparse';
import speakers from './speakers.csv';
import { Container, Row, Col } from 'react-grid-system';



function SND() {
    return (
        <div style={{ marginTop: "70px" }}>
            <div style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>
                <div class="head-txt" style={{ width: "90%", marginLeft: "5%" }}>
                    <div>
                        <div>

                            <h1 style={{ textAlign: "center" }} class="biggest-header-4">STEM World</h1>
                            <h2 style={{ textAlign: "center", fontSize: "23px", marginBottom: "30px" }}> Free Virtual Stem Convention</h2>
                            <p style={{textAlign: "center"}}><a class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">Watch STEM World</a></p>
                            <p style={{textAlign: "center"}}><a class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">STEM World Speakers</a></p>

                            <div class="container" style={{paddingTop: "0"}}>
                            <Container>
                                <Row>
                                    <Col sm={6}>
                                        <div style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>
                                            <h2 style={{ textAlign: "left", lineHeight: "2"}}> Speakers </h2>
                                            <p>Researchers and Students from the Top US Universities and Companies</p>
                                            <p>25+ STEM Professionals</p>
                                            <p style={{textAlign: "left"}}><a class="btn btn-full" href="/stemworldspeakers">View our Speakers!</a></p>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>
                                            <h2 style={{ textAlign: "left", lineHeight: "2"}}> Demonstrations </h2>
                                            <p>Live demonstrations for computer science and biochemistry</p>
                                            <p>Explore how computer science can be used to advance bee research!</p>

                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>
                                            <h2 style={{ textAlign: "left", lineHeight: "2"}}> Competitions </h2>
                                            <p>Live, High school level competitions in Math, Physics, Chemistry, and Biology</p>
                                            <p>Prizes for the top 8-10 competitors</p>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div style={{ textAlign: "center", lineHeight: "2", width: "90%", marginLeft: "5%" }}>
                                            <h2 style={{ textAlign: "left", lineHeight: "2"}}> How to Participate </h2>
                                            <p style={{textAlign: "left"}}><a class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">Watch STEM World</a></p>
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                            </div>

                            <h1 class="biggest-header-2" style={{marginTop: "50px"}}>Schedule</h1>
                            <div class="stem-world" style={{ height: "auto" }}>
                                {/* <div style={{display: "grid",  gridGap: "20px"}}> */}
                                <div style={{ width: "90%" }}>
                                    {/* <h1>Saturday, August 15</h1> */}
                                    <ul class="timeline timeline-centered">
                                        <TimelineMarker
                                            title="Saturday, August 15"
                                        />
                                        <TimelineEntry
                                            time="8:00-8:30 AM PST"
                                            speaker="Diana Poplacenel"
                                            description="Opening Ceremony"
                                            
                                        />
                                        <TimelineEntry
                                            time="8:30-9:00 AM PST"
                                            speaker="Akshaya Annapragada"
                                            professor="JHU MD/PhD Student"
                                            description="Putting the M in STEM: Math AND Medicine"
                                            

                                        />
                                        <TimelineEntry
                                            time="9:00-9:30 AM PST"
                                            speaker="Dr. Helen Vuong"
                                            professor="UCLA Researcher"
                                            description="Microbiome, Brain and Behaviors"
                                            

                                        />
                                        <TimelineEntry
                                            time="9:30-10:00 AM PST"
                                            speaker="Dr. Olga Zhaxybayeva"
                                            professor="Dartmouth Researcher"
                                            description="Genomic clues to origin, evolution and diversity of life"
                                            

                                        />
                                        <TimelineEntry
                                            time="10:00-10:30 AM PST"
                                            speaker="Dr. Isaac Cervantes Sandoval"
                                            professor="Georgetown Researcher"
                                            description="Where did I leave my keys: Why do we forget?"
                                            link = "https://us02web.zoom.us/j/86389838038"                                            

                                        />
                                        <TimelineEntry
                                            time="10:30-11:00 AM PST"
                                            speaker="Dr. Xia Yang"
                                            professor="UCLA Researcher"
                                            

                                        />
                                        <TimelineEntry
                                            time="11:00-11:30 AM PST"
                                            speaker="Networking Session"
                                            description="Converse and Connect with STEM Enthusiasts from Around the World"
                                            

                                        />
                                        <TimelineEntry
                                            time="11:30-12:00 PM PST"
                                            speaker="High School Level Biology Competition"
                                            

                                        />
                                        
                                        <TimelineEntry
                                            time="12:00-12:30 PM PST"
                                            speaker="Dr. Jane Frommer"
                                            professor="Collabra Science Advisor" 
                                            description="The Molecular Underpinings of Nanotechnology"
                                            
                                        />
                                        <TimelineEntry
                                            time="12:30-1:00 PM PST"
                                            speaker="Dr. Teri Odom"
                                            professor="Northwestern Researcher"
                                            description="Follow the Nano-Brick Road."
                                            

                                       />
                                        <TimelineEntry
                                            time="1:00-1:30 PM PST"
                                            speaker="Dr. Stephen Boyer"
                                            professor = "Google/Collabra Scientific Advisor"
                                            description="Curating the Chemical Universe"
                                            

                                        />
                                        
                                        <TimelineEntry
                                            time="1:30-2:00 PM PST"
                                            speaker="Dr. Vicki Colvin"
                                            professor = "Professor of Chemistry at Brown University"
                                            description="Using Nanotechnology to Improve Our World: From Cleaning Water to Curing Disease"
                                            

                                        />
                                        <TimelineEntry
                                            time = "2:00-2:30 PM PST"
                                            speaker = "Jed Doherty, Jennifer Swanson, and Dr. Jane Frommer"
                                            description = "A Special Solve it! for Kids LIVE Podcast Episode!! Join us as the co-hosts of the Solve it! for Kids Podcast interview Dr. Jane Frommer to discuss her life as a researcher and scientist."
                                            
    
                                        /> 
                                        <TimelineEntry
                                            time="2:30-3:00 PM PST"
                                            speaker="Networking Session"
                                            description="Converse and Connect with STEM Enthusiasts from Around the World"
                                            
                                        />
                                        <TimelineEntry
                                            time="3:00-3:30 PM PST"
                                            speaker="High School Level Chemistry Competition"
                                            

                                        />
                                        <TimelineEntry
                                            time="3:30-4:00 PM PST"
                                            speaker="Dr. Corina Constantinescu"
                                            professor = "University of Liverpool Mathematics Professor"
                                            description = "A journey through actuarial mathematics"
                                            

                                        />
                                        <TimelineEntry
                                            time="4:00-4:30 PM PST"
                                            speaker="Dr. Nitu Kitchloo"
                                            professor="Johns Hopkins Professor"
                                            description="The close relationship between Algebra and Geometry"
                                            

                                        />
                                        <TimelineEntry
                                            time="4:30-5:00 PM PST"
                                            speaker="Corrine Yap"
                                            description="Crossing Disciplines: Probabilistic Combinatorics and Mathematical Theater"
                                            

                                        />
                                        <TimelineEntry
                                            time="5:00-5:30 PM PST"
                                            speaker="Dr. Tom Hull"
                                            description="Origami and Math: Paper, Polymers, and Robots"
                                            

                                        />
                                        <TimelineEntry
                                            time="5:30-6:00 PM PST"
                                            description="BINARY, TERNARY, BASE-TEN, BASE ONE-AND-A-HALF: Do we understand place-value?"
                                            speaker="Dr. James Tanton"
                                            

                                        />
                                        <TimelineEntry
                                            time="6:00-6:30 PM PST"
                                            speaker="High School Level Math Competition"
                                            
                                        
                                        />
                                        <TimelineEntry
                                            time="6:30 PM PST"
                                            speaker="William Lin"
                                            description="IOI 2019 Silver Medalist"
                                            
s
                                        />
                                        

                                        <TimelineMarker
                                            title="Sunday, August 16"
                                        />

                                        <TimelineEntry
                                            time="8:00-8:30 AM PST"
                                            speaker="Dr. Richard Henry"
                                            professor="John Hopkins University Researcher"
                                            description="Physics is Simple!"
                                            
                                        />
                                        <TimelineEntry
                                            time="8:30-9:00 AM PST"
                                            speaker="Dr. Marcelo Gleiser"
                                            professor="Dartmouth University Researcher"
                                            description="Mysteries of the Universe: What We know and What we Don’t Know."
                                            
                                        />
                                        <TimelineEntry
                                            time="9:00-9:30 AM PST"
                                            speaker="Dr. Jens Koch"
                                            professor="Northwestern University Researcher"
                                            description="What's a quantum computer and why do we care?"
                                            
                                        />
                                        <TimelineEntry
                                            time="9:30-10:00 AM PST"
                                            speaker="Dr. Daniel Holz"
                                            professor="UChicago Researcher"
                                            description="Listening to the Universe"
                                            
                                        />
                                        <TimelineEntry
                                            time="10:00-10:30 AM PST"
                                            speaker="Dr. Christine Aidala"
                                            professor="UMichigan Researcher"
                                            description="Peering into the Proton"
                                            
                                        />
                                        
                                        <TimelineEntry
                                            time="10:30-11:00 AM PST"
                                            speaker="High School Level Physics Competition"
                                            
                                        />
                                        <TimelineEntry
                                            time="11:00-11:30 AM PST"
                                            speaker="Biochemistry Demonstration: Shape, function, and milk protein"
                                            professor = "Dr. Sonia Cuellar"
                                            description="In the frame of a home experiment we will discuss the relationship between form, function and protein structure."
                                            
                                        />
                                        <TimelineEntry
                                            time="11:30-12:00 PM PST"
                                            speaker="Dr. Anshul Kundaje"
                                            professor="Stanford University Researcher"
                                            description="Deep learning the regulatory code of the human genome"
                                            
                                        />
                                        <TimelineEntry
                                            time="12:00-12:30 PM PST"
                                            speaker="Dr. Jamie Spangler"
                                            professor="John Hopkins University Researcher"
                                            description="Engineering proteins to reprogram the immune response"
                                            
                                        />
                                        <TimelineEntry
                                            time="12:30-1:00 PM PST"
                                            speaker="Dr. Ken Birman"
                                            professor="Cornell University Researcher"
                                            description="Cloud Computing and the Intelligent Internet of Things"
                                            
                                        />
                                        <TimelineEntry
                                            time="1:00-1:30 PM PST"
                                            professor="Duke University Researcher"
                                            speaker="Dr. Krishnendu Chakrabarty"
                                            description="Computational Intelligence in the Design and Optimization of Digital Microfluidic Biochips"
                                            
                                        />  
                                        <TimelineEntry
                                            time="1:30-2:00 PM PST"
                                            speaker="Vasile Patrascu"
                                            professor = "Principal Engineer at Jitterbit"
                                            
                                        />
                                        <TimelineEntry
                                            time="2:00-3:00 PM PST"
                                            speaker="Dr. Jason Graham"
                                            professor = "Schmahl Science Mentor and Planet Bee Researcher"
                                            description="Computer Science's Role in Bee Research"
                                            link="https://us02web.zoom.us/j/83242398658"
                                        />
                                        <TimelineEntry
                                            time="3:00-3:30 PM PST"
                                            speaker="Dr. My T. Le"
                                            professor="Visiting Lecturer at Stanford University"
                                            description="Finding Your North Star: My Journey from a refugee camp to the heart of Silicon Valley"
                                            link="https://us02web.zoom.us/j/83242398658"
                                        />
                                        <TimelineEntry
                                            time="3:30-4:00 PM PST"
                                            speaker="Allison Jia"
                                            description="Winner of the $50,000 Intel Foundation Young Scientist Award"
                                            link="https://us02web.zoom.us/j/83242398658"

                                        />
                                        <TimelineEntry
                                            time="4:00-4:30 PM PST"
                                            speaker="CS and Engineering Panel"
                                            description="Brown University Students"
                                            link="https://us02web.zoom.us/j/83242398658"

                                        />
                                        <TimelineEntry
                                            time="4:30-5:00 PM PST"
                                            speaker="Nursing Panel"
                                            description="UCLA and Case Western Students"
                                            link="https://us02web.zoom.us/j/83242398658"

                                        />
                                        <TimelineEntry
                                            time="5:00-5:30 PM PST"
                                            speaker="HBV/Healthcare Panel"
                                            description="UCLA, UCB, and UCI Students"
                                            link="https://us02web.zoom.us/j/83242398658"

                                        />
                                        <TimelineEntry 
                                            time = "5:30 - 6:00 PM PST"
                                            speaker = "Networking Session"
                                            description = "Converse and Connect with STEM Enthusiasts from around the world"
                                            link="https://us02web.zoom.us/j/83242398658"
                                        /> 
                                        <TimelineEntry
                                            time="5:30-6:00 PM PST"
                                            speaker="Diana Poplacenel"
                                            description="Awards and Closing Ceremony"
                                            link="https://us02web.zoom.us/j/83242398658"

                                        />

                                    </ul>
                                    <Timeline />


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


