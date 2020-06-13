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
                    name="Christian Kim"
                    imgURL={christian}
                    des="
Christian was the Leigh High School Biology and Chemistry Olympiad Club Vice President this year and will be Chemistry Olympiad President the upcoming school year. He has been a member of Leigh’s Science Olympiad for 3 years and is a founding member of Leigh’s Science Bowl team. He has experience teaching as an Eagle Scout instructor and tutoring in Leigh’s National Honors Society and outside of school. 
"   
                    position="Chemistry Class Director"
                />
                <Card
                    name="Catherine Luu"
                    des="
Catherine Luu is a rising junior at Leigh High School. She is a member of the National Honors Society and is a future officer of Seoul to San Jose. Since her middle school days, she has been a peer tutor for her fellow classmates. She is also a member of the Leigh High School’s swimming team. Outside of the school campus, she volunteers at King’s Martial Arts Academy as a second degree assistant instructor and is aiming for her third degree. She also swims competitively for South Valley Stingrays and Santa Teresa Sea Otters where she has worked in leadership positions. She will be working on the math and chemistry courses at STEMEY.
"       
                    position="Chemistry & Math Instructor"
                />
                <Card
                name="Claire Jin"
                    des="
Claire Jin is a rising senior at Leigh High School. She is president of the Science National Honor Society and officer of Leigh CSF, and she is also a member of SOS and National Art Honors Society. She is part of leadership and senior class vice president. She has tutored young students from working at Kumon Math and Reading and peer students at Leigh from National Honors Society Club. She has been volunteering at Good Samaritan Hospital working in patient services. She volunteers working with young kids doing art activities and translating English to Korean. She will be part of the Chemistry course.
"
                position="Chemistry & Math Instructor"

                />
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des