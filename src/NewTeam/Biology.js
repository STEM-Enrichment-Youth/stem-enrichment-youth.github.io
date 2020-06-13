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


export default function Biology() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Biology</h1>
        <div class="con">
                <Card
                    name="Aniketh Prasad"
                    des="Coming Soon "
                />
                <Card
                    imgURL="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/diana_orig.jpg"
                    name="Diana Poplacenel"
                    des="Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a founding member of Science Bowl and Science Olympiad, both of which are science based competitive clubs. She is a founder of the program and will need the neuroscience class. She has experience working with middle school students as an official employee for the Percussion Club at Union Middle School. She has completed Harvard’s three Fundamentals of Neuroscience courses as well as four of John Hopkins Bioinformatics courses through Coursera, all with A’s. For more information about Diana’s experience, you can visit her LinkedIn.  "
                    position = "President of Operations"

                />
                <Card
                    imgURL={fiona}
                    name="Fiona Sun"
                    des="Fiona Sun is a rising senior at Leigh High School and percussionist at San Francisco Symphony Youth Orchestra. She is president of the Leigh Chamber Orchestra Club and officer of the California Scholarship Federation Leigh Charter. Fiona is an officer of the Biology Olympiad Club, and is involved in other STEM clubs including Physics and Chemistry. She is a dedicated percussionist, performing in venues globally, with over a decade of experience in violin and piano. Fiona is a Patient Services volunteer at Good Samaritan hospital, a National Honors Society member, and President of UChannel Chamber Music Foundation. Her hobbies include art and reading."
                    position="Biology & Physics Instructor"

                />
                
                <Card
                    name="Yulia Anashkina"
                    imgURL={yulia}
                    des="
Yulia Anashkina is a rising sophomore with a passion for STEM. She earned straight A’s throughout middle school and freshman year. Her interests in STEM led her to complete Harvard’s Fundamentals of Neuroscience, and one of BYU’s math courses. At school she also participates in clubs such as Design Thinking and Bring Change to Mind. Outside of academics Yulia is a figure skater who competes individually as well as in a team. Her team, San Francisco Ice Theater, recently traveled to France and earned a ranking as fifth in the world. She is also a member of the Peninsula Skating Club Junior Board which helps the skating community through volunteering, fundraising, as well as other events. 
"
                    position="Biology Instructor"

                />
                
                
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des