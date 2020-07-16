import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import fiona from "./InstructorImages/fiona.png"; 
import liza from "./InstructorImages/liza.jpg"; 
import defaultInstructor from "../icons/head-brains.png";
import elyssa from "./InstructorImages/elyssa.jpg"; 

export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Meet Our Team</h1>
        <div class="con">
            
                <Card
                    imgURL={elyssa}
                    name="Elyssa Wolter"
                    position="Physics Instructor"
                    des = "Elyssa Wolter is a rising senior at Leigh High School. She is a member of the Science National Honor Society, California Scholarship Federation, National Honor Society, and Link Crew. She is on the school’s track and field team. She also plays on a competitive soccer team and is a part of the music program at Leigh. She has worked as a babysitter and soccer referee since middle school and the past two summers she was a camp counselor at Mulberry School. She looks forward to finding ways for STEM to be interactive and fun as well as teaching classes."
                />
                <Card
                    imgURL={liza}
                    name="Liza George"
                    des="
                    
Liza is a rising Senior in Leigh, and is passionate about all things Computer Science. She’s been self-studying various programming concepts since middle school (currently focussing on web design), and is in USACO Silver. Her interests in both computer science and mechanical engineering were expanded last year in the AP Computer Science and Physics 1 courses. Outside of her academics, Liza’s involved in Leigh's clubs; she's the President of the Robotics and Girls Who Code clubs, and holds senior officer positions in the Science Olympiad, LEOs, NHS, and NAHS branches at Leigh. Liza is also a flautist, and played in the Leigh Marching Band and Wind Ensemble. She's excited to get to know everyone over the next few months in STEMEY!
"
                />
                <Card
                    imgURL={defaultInstructor}
                    name="Karan Gurazada"
                    position="Physics Class Director"
                />
                
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des