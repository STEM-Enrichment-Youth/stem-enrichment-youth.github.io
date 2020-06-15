import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import sudhir from "./InstructorImages/sudhir.jpeg"; 
import liza from "./InstructorImages/liza.jpg"; 
import aryan from "./InstructorImages/aryan.JPG"; 
import sasmit from "./InstructorImages/sasmit.jpg"; 


export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Meet Our Team</h1>
        <div class="con">
                
                <Card
                imgURL={aryan}
                name="Aryan Mathur"
                des="
                Aryan Mathur is a rising senior at Leigh High School. He is the founder of Debate Club and the Vice President of AI and USACO club. He is a coding enthusiast who has experience in Java and Javascript, and is currently a USACO silver. He has had teaching experience volunteering for the First Tee of Silicon Valley to teach young kids golf. He has also been the captain of the Leigh High School Varsity Golf team for the last two years and has earned multiple awards in league competitions as well as outside competitions. He will be leading the coding course that will be offered at STEMEY, and is looking forward to working on this amazing volunteering opportunity. 
"
                position="Coding Director"
                />
                
                <Card
                imgURL={liza}
                name="Liza George"
                position="
Competitive Coding Instructor"
                des="
                Liza is a rising Senior in Leigh, and is passionate about all things Computer Science. She’s been self-studying various programming concepts since middle school (currently focussing on web design), and is in USACO Silver. Her interests in both computer science and mechanical engineering were expanded last year in the AP Computer Science and Physics 1 courses. Outside of her academics, Liza’s involved in Leigh's clubs; she's the President of the Robotics and Girls Who Code clubs, and holds senior officer positions in the Science Olympiad, LEOs, NHS, and NAHS branches at Leigh. Liza is also a flautist, and played in the Leigh Marching Band and Wind Ensemble. She's excited to get to know everyone over the next few months in STEMEY!
"
                />
                <Card
                imgURL={sasmit}
                name="Sasmit Agarwal"
                position="
Director of Competitive Programming
"
                des="

                Sasmit is a senior interested in competitive programming, machine learning, and entrepreneurship, he has participated in USACO and will be basing the competitive programming class on progressing in USACO. He is currently in USACO Gold, and has also participated in the Google Code Jam as well as Codeforces. He also happens to be the president of the USACO club at Leigh. In addition to programming, he has also done math competitions in the past, qualifying for AIME and scoring an 8 just this year. 
"
                />
                <Card
                imgURL={sudhir}
                name="Sudhir Vasudevan"
                position="
Competitive Coding Instructor"
                des="
                Sudhir is a senior at Leigh High School. He is interested in the field of AI, robotics, and business. He is currently in USACO Silver and participated in numerous coding competitions including various hackathons, and Code Jam. He is the president of the Competitive Math Club at Leigh. He qualified AIME this past year and got a 8.
He has been involved in many clubs throughout high school. He is excited to teach and plan courses for y’all!
"
                />
                
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des