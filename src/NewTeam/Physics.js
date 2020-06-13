import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import christian from "./InstructorImages/christian.png"; 
import fiona from "./InstructorImages/fiona.png"; 
import emily from "./InstructorImages/emily.jpg"; 
import katherine from "./InstructorImages/katherine.jpg"; 
import justin from "./InstructorImages/justin.jpg"; 
import aryan from "./InstructorImages/aryan.JPG"; 
import yulia from "./InstructorImages/yulia.JPG"; 
import daniel from "./InstructorImages/daniel.png"; 


export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Meet Our Team</h1>
        <div class="con">
            
                <Card
                    imgURL={fiona}
                    name="Fiona Sun"
                    des="Fiona Sun is a rising senior at Leigh High School and percussionist at San Francisco Symphony Youth Orchestra. She is president of the Leigh Chamber Orchestra Club and officer of the California Scholarship Federation Leigh Charter. Fiona is an officer of the Biology Olympiad Club, and is involved in other STEM clubs including Physics and Chemistry. She is a dedicated percussionist, performing in venues globally, with over a decade of experience in violin and piano. Fiona is a Patient Services volunteer at Good Samaritan hospital, a National Honors Society member, and President of UChannel Chamber Music Foundation. Her hobbies include art and reading."
                />
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des