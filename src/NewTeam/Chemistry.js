import React from "react";
import "./NewTeam.css";
import Navbar from "../Navbar.js";
import Card from "./TeamCard";
import christian from "./InstructorImages/christian.png";
import sarahchang from "./InstructorImages/sarahchang.jpg";
import amynam from "./InstructorImages/amynam.jpg";

export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Chemistry</h1>
            <div class="con">

                <Card
                    name="Christian Kim"
                    imgURL={christian}
                    des="
Christian was the Leigh High School Biology and Chemistry Olympiad Club Vice President this year and will be Chemistry Olympiad President the upcoming school year. He has been a member of Leigh’s Science Olympiad for 3 years and is a founding member of Leigh’s Science Bowl team. He has experience teaching as an Eagle Scout instructor and tutoring in Leigh’s National Honors Society and outside of school. 
"
                    position="Chemistry Class Instructor"
                />
                
                <Card
                    name="Sarah Chang"
                    imgURL={sarahchang}
                    position="Chemistry Class Instructor"
                    des="Sarah Chang is a senior at Leigh High School. She is a tutor for National Honor Society and a Link Crew Leader. She also participates in clubs, including Vitas Memory Bears, Help for Her, and Tri-M Music Honor Society. She also plays violin for the California Youth Symphony Senior Orchestra. She has taken the Chemistry Honors and AP Chemistry courses at Leigh, and is looking to pass on her knowledge to new students."
                />

                <Card
                    name="Amy Nam"
                    imgURL={amynam}
                    position="Chemistry Instructor"
                    des="Amy is a senior at Leigh High School with an interest in chemistry. She is a member of the California Scholarship Federation and National Honors Society. She also plays clarinet in the Leigh Wind Ensemble and San Jose Youth Symphony and has performed in the California All-State Honor Band and various charity orchestras. She has tutoring experience from NHS tutoring and volunteering as a teacher assistant at the Holy Korean Martyrs Catholic Church Korean School."
                />

            </div>
        </div>
    </div>
    )
}
// imgURL name des