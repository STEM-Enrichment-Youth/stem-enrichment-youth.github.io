import React from "react";
import "./home.css";
import "./timeline.css";
import stemey from "./GoodStemeyLogo.png";
import Timeline, { TimelineEntry, TimelineMarker } from './Timeline';
import Papa from 'papaparse';
import speakers from './speakers.csv';

function SND() {
    return (
        <div class="whole-home" style={{ marginTop: "70px" }}>
            <div style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>
                <div class="head-txt" style={{ width: "90%", marginLeft: "5%" }}>
                    <div >
                        <div>

                            <h1 style={{ textAlign: "center" }} class="biggest-header-4">STEM World</h1>
                            <h2 style={{ textAlign: "center", fontSize: "23px", marginBottom: "30px" }}> An International Virtual STEM Convention</h2>

                            <p style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>
                                STEM World will consist of three components: speaker panels, demonstrations, and competitions. We will have 50 speakers in total, 30 of which are STEM professionals and 20 of which are high achieving STEM college students. Our speakers will be describing their experiences and research in STEM. Our college student speakers will also detail the programs and activities that they participated in throughout their academic careers.
                            </p>
                            
                            <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", justifyItems: "center" }}>
                                <a class="btn btn-full" style={{ marginBottom: "20px" }} href="https://tinyurl.com/stemworldslack">Join the STEM World Slack Workspace</a>
                                <a class="btn btn-full" style={{ marginBottom: "20px" }} href="https://tinyurl.com/rsvpstemworld">RSVP Here to Receive Updates</a>
                                <a class="btn btn-full" style={{ marginBottom: "20px" }} href="/stemworldspeakers">See Our Speakers</a>
                                <a class="btn btn-full" style={{ marginBottom: "50px" }} href="/sponsorship">Sponsors</a>
                            </div>


                            <h2> Speakers </h2>
                            <p style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}> Our professional speakers are experts in their fields, and many come from the top ranking US universities. We have speakers focusing on biology, chemistry, mathematics, computer science, physics, and engineering. Each speaker will provide a 30 minute presentation where they present for the first 20-25 minutes and answer Q&A from the audience for the last 5-10 minutes. Zoom Webinar links will be provided the days of the convention.</p>

                            <h2 style={{marginTop: "50px"}}>Competitions</h2>
                            <p style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>For biology, mathematics, chemistry, and physics, we will host a live virtual competition for middle and high schoolers, and the top 8-10 competitors will receive prizes pertaining to the subject they competed in. Our prizes will be released on the STEM World Slack Workspace. </p>

                            <h2 style={{marginTop: "50px"}}>Demonstrations</h2>
                            <p style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>Information about our live science demonstrations will be released within the next two weeks. We will be hosting a demonstration for biology, chemistry, and computer science. The demonstration will take the form of showcasing and explaining a project or activity related to that subject. 
</p>

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
                                            professor="UCLA Professor"
                                            description="Microbiome, Brain and Behaviors"
                                        />
                                        <TimelineEntry
                                            time="9:30-10:00 AM PST"
                                            speaker="Dr. Olga Zhaxybayeva"
                                            professor="Dartmouth Professor"
                                            description="Genomic clues to origin, evolution and diversity of life"
                                        />
                                        <TimelineEntry
                                            time="10:00-10:30 AM PST"
                                            speaker="Dr. Isaac Cervantes Sandoval"
                                            professor="Georgetown Professor"
                                            description="Where did I leave my keys: Why do we forget?"
                                        />
                                        <TimelineEntry
                                            time="10:30-11:00 AM PST"
                                            speaker="Dr. Xia Yang"
                                            professor="UCLA Professor"
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
                                            professor="IBM Chemist"
                                            description="The Molecular Underpinings of Nanotechnology"
                                        />
                                        <TimelineEntry
                                            time="12:30-1:00 PM PST"
                                            speaker="Dr. Teri Odom"
                                            professor="Northwestern Professor"
                                            description="Follow the Nano-Brick Road."
                                        />
                                        <TimelineEntry
                                            time="1:00-1:30 PM PST"
                                            speaker="Dr. Stephen Boyer"
                                            description="Cheminformatics"
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
                                            speaker="Dr. Corina Constantinescu"
                                            professor = "University of Liverpool Mathematics Professor"
                                        />
                                        <TimelineEntry
                                            time="4:00-4:30 PM PST"
                                            speaker="Dr. Nitu Kitchloo"
                                            professor="John Hopkins Professor"
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
                                            speaker="Dr. Vicki Colvin"
                                            description="Chemistry Speaker"
                                        />
                                        <TimelineEntry
                                            time="TBD"
                                            speaker="Dr. Michael Marletta"
                                            description="Chemistry Speaker"
                                        />


                                        <TimelineMarker
                                            title="Sunday, August 16"
                                        />

                                        <TimelineEntry
                                            time="8:00-8:30 AM PST"
                                            speaker="Dr. Richard Henry"
                                            professor="JHU Professor"
                                            description="Physics is Simple!"
                                        />
                                        <TimelineEntry
                                            time="8:30-9:00 AM PST"
                                            speaker="Dr. Marcelo Gleiser"
                                            professor="Dartmouth Professor"
                                            description="Mysteries of the Universe: What We know and What we Don’t Know."
                                        />
                                        <TimelineEntry
                                            time="9:00-9:30 AM PST"
                                            speaker="Dr. Jens Koch"
                                            professor="Northwestern Professor"
                                            description="What's a quantum computer and why do we care?"
                                        />
                                        <TimelineEntry
                                            time="9:30-10:00 AM PST"
                                            speaker="Dr. Daniel Holz"
                                            professor="UChicago Professor"
                                            description="Listening to the Universe"
                                        />
                                        <TimelineEntry
                                            time="10:00-10:30 AM PST"
                                            speaker="Dr. Christine Aidala"
                                            professor="UMichigan Professor"
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
                                            professor="Stanford Professor"
                                            description="Deep learning the regulatory code of the human genome"
                                        />
                                        <TimelineEntry
                                            time="12:00-12:30 PM PST"
                                            speaker="Dr. Jamie Spangler"
                                            professor="JHU Professor"
                                            description="Engineering proteins to reprogram the immune response"
                                        />
                                        <TimelineEntry
                                            time="12:30-1:00 PM PST"
                                            speaker="Dr. Ken Birman"
                                            professor="Cornell Professor"
                                            description="Cloud Computing and the Intelligent Internet of Things"
                                        />
                                        <TimelineEntry
                                            time="1:00-1:30 PM PST"
                                            professor="Duke Professor"
                                            speaker="Dr. Krishnendu Chakrabarty"
                                            description="Computational Intelligence in the Design and Optimization of Digital Microfluidic Biochips"
                                        />
                                        <TimelineEntry
                                            time="1:30-2:00 PM PST"
                                            speaker="Vasile Patrascu"
                                            professor = "Principal Engineer at Jitterbit"
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
                                            professor="Stanford Professor"
                                            description="Finding Your North Star: My Journey from a refugee camp to the heart of Silicon Valley"
                                        />
                                        <TimelineEntry
                                            time="3:30-4:00 PM PST"
                                            speaker="Allison Jia"
                                            description="Winner of the $50,000 Intel Foundation Young Scientist Award"
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


