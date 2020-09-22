import React from "react";

function About() {
    const [scale, setScale] = React.useState(false);
    return (
        <div class="whole-home">
            <h1 class="help" style={{ color: "white" }}>About Us</h1>

            <section class="who">
                <div class="why-us">

                    <div class="motivate item ">
                        <ion-icon name="people-circle"></ion-icon>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>What is STEMEY?</h2>
                        <p>STEM Enrichment Youth, or STEMEY, is a high school student-led nonprofit organization. Initially offering free online classes designed for middle schoolers, we evolved into an interactive STEM program hosting multi-speaker events, lecture series, and competitions.</p>
                    </div>

                    <div class="motivate item steps-item">
                        <ion-icon name="walk"></ion-icon>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Mission Statement</h2>
                        <p>STEM Enrichment Youth aims to inspire middle and high schoolers to pursue STEM by offering guidance to inexperienced students seeking greater involvement in the field. We strive to provide free and engaging activities, such as interactive sessions, educational resources, virtual competitions, global conventions and webinars. STEM Enrichment Youth welcomes full-fledged STEM enthusiasts, those who are just beginning to cultivate their interest, and anyone in between.
                        </p>
                    </div>
                    <div class="motivate item steps-item">
                        <ion-icon name="water"></ion-icon>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Why STEM?</h2>
                        <p>STEM permeates every aspect of our lives; it transforms and improves society by tackling climate change and the damaged environment, two of the greatest challenges of this age. STEM will only continue to evolve and impact our society, inspiring us to establish STEMEY. We believe that everyone deserves the chance to understand and get involved in the industries that will have profound effects on the rest of their lives. </p>
                    </div>


                </div>
            </section>
            <h1>Our Programs</h1>
            <section class="who">
                <div class="why-us">


                    <div class="motivate item steps-item">
                        <ion-icon name="globe"></ion-icon>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>STEM World</h2>
                        <p>Held on August 15 and 16, STEM World was a free, multi-speaker convention that captured the highlights and intersections of biology, chemistry, technology, mathematics, and physics. The convention’s goal was to encourage people of all ages, but especially middle and high schoolers, to explore diverse mathematical and scientific disciplines. STEM World aimed to educate people on various topics through demonstrations and insightful panels.</p>
                    </div>
                    <div class="motivate item steps-item">
                        <ion-icon name="person-circle"></ion-icon>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>STEM World Speakers</h2>
                        <p>STEM World will have professional and college student speakers,  live demonstrations, and live competitions. We are proud to be hosting a STEM Professionals Panel of researchers and professors from institutions such as Stanford, Prince, Cornell, and CalTech and a STEM Collegiate Panel of passionate young scientists, mathematicians, and engineers.
</p>
                    </div>
                    <div class="motivate item steps-item">
                        <ion-icon name="hand-left"></ion-icon>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>STEM World Live Events</h2>
                        <p>STEM World will feature live demonstrations in computer science and biochemistry; participants will be able to observe actual professionals at work! Our live biology, chemistry, mathematics, and physics competitions are open to middle and high school students and will be hosted on Kahoot. They will be streamed over YouTube and Zoom and offer prizes to the top 10 competitors of each.
</p>
                    </div>
                    <div class="motivate item steps-item">
                        <ion-icon name="color-palette"></ion-icon>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Free STEM Classes</h2>
                        <p>STEMEY offers classes in biology, physics, calculus, competition math, geometry and algebra, chemistry, and introductory Java. These classes are modelled after honors and AP curricula. Each class has a Google Classroom where lectures, assignments, and activities are posted; students can use these resources to pick and choose when and what they learn. STEMEY’s instructors also offer weekly office hours. Some of these resources will take the form of mini-lectures that teach the real life applications of various STEM disciplines by detailing their interdisciplinary aspects, key innovations, and most fascinating concepts. See class descriptions here.
</p>
                    </div>
                    <div class="motivate item">
                        <ion-icon name="chatbox-ellipses"></ion-icon>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>FCSN-STEMEY Classes</h2>
                        <p>STEMEY hosts classes in partnership with FCSN, Friends for Children with Special Needs, for Science and Mathematics. These classes are exclusive to FCSN Special Needs Students, and occur on a weekly basis. Each class consists of interactive, hands on activities using household materials. </p>
                        <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>STEMEY Connect RWC Classes</h2>
                        <p>STEMEY now hosts bi-weekly Computer Science Classes in collaboration with Connect Community Charter School. Currently, spots are reserved for Connect RWC Students exclusively.</p>
    
                    </div>
                    
                </div>
            </section>




        </div>


    )
}


export default About;


