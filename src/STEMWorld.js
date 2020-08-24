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
        <div class="whole-home" style={{ marginTop: "70px" }}>
            <div style={{ background: "url(" + { stemey } + ")", backgroundImage: "cover" }}>
                <div class="head-txt" style={{ width: "90%", marginLeft: "5%" }}>
                    <div >
                        <div>

                            <h1 style={{ textAlign: "center" }} class="biggest-header-4">STEM World</h1>
                            <h2 style={{ textAlign: "center", fontSize: "23px", marginBottom: "30px" }}> Free Virtual Stem Convention</h2>
                            <p style={{textAlign: "center"}}><a class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">Watch STEM World on Youtube</a></p>

                            <div class="container">
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
                                            <p style={{textAlign: "left"}}><a class="btn btn-full" href="https://tinyurl.com/stemworldslack">Join the STEM World Slack</a></p>
                                            <p style={{textAlign: "left"}}><a class="btn btn-full" href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w">Watch our Youtube Livestream</a></p>
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                            </div>

                            {/* <p style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>
                                STEM World will consist of three components: speaker panels, demonstrations, and competitions. We will have 50 speakers in total, 30 of which are STEM professionals and 20 of which are high achieving STEM college students. Our speakers will be describing their experiences and research in STEM. Our college student speakers will also detail the programs and activities that they participated in throughout their academic careers.
                            </p>
                  
                            <h2 style={{marginTop: "50px"}}>Competitions</h2>
                            <p style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>For biology, mathematics, chemistry, and physics, we will host a live virtual competition for high schoolers, and the top 8-10 competitors will receive prizes pertaining to the subject they competed in. Our prizes will be released on the STEM World Slack Workspace. </p>

                            <h2 style={{marginTop: "50px"}}>Demonstrations</h2>
                            <p style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>Dr. Sonia Cuellar and Dr. Jason Graham will be hosting a demonstration for biochemistry and computer science. The demonstration will take the form of showcasing and explaining a project or activity related to that subject. 
                            </p> 

                            <h2 style={{marginTop: "50px"}}>HOW CAN I JOIN?</h2>
                            <p style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>We will be live streaming most of these presentations through our Youtube Channel as well as through Zoom. You can access the link to each presentation by clicking on the presentation you wish to attend! If you want to connect with our attendees and receive more immediate updates about
                            the convention, please join our Slack Workspace! 
                            </p> */}


                            {/* <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", justifyItems: "center" }}>
                                <a class="btn btn-full" style={{ marginBottom: "20px" }} href="https://tinyurl.com/stemworldslack">Join the STEM World Slack Workspace</a>
                                <a class="btn btn-full" style={{ marginBottom: "20px" }} href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w/featured?view_as=subscriber">Watch the Youtube Livestream</a>
                                <a class="btn btn-full" style={{ marginBottom: "20px" }} href="/stemworldspeakers">See Our Speakers</a>
                                <a class="btn btn-full" style={{ marginBottom: "20px" }} href="https://tinyurl.com/rsvpstemworld">RSVP Here</a>
                                <a class="btn btn-full" style={{ marginBottom: "50px" }} href="/sponsorship">Sponsors</a>
                            </div> */}

                            {/* <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CDjdhVKjdUH/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" class="insta-post"><div style={{padding:"16px"}}> <a href="https://www.instagram.com/p/CDjdhVKjdUH/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CDjdhVKjdUH/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by STEM Enrichment Youth (STEMEY) (@stemenrichmentyouth)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-08-06T16:11:02+00:00">Aug 6, 2020 at 9:11am PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script> */}

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
                                            speaker="Computer Science's Role in Bee Research"
                                            professor = "Schmahl Science Mentor and Planet Bee Researcher"
                                            description="Dr. Jason Graham"
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


