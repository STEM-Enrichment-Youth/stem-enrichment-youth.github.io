import React from "react";
import "./NewTeam.css";
import Card from "./TeamCard";
import azam from "./images/azam.jpg";
import srishti from "./images/srishti.jpeg";
import amiruthaa from "./images/amiruthaa.jpeg";

export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Executive Team</h1>
            <div class="con">
                <Card
                    imgURL={azam}
                    name="Azam Ahmed"
                    position="Chief Executive Officer"
                    des="Azam Ahmed is a high school student who loves computer science and STEM. He is the founder and CEO of Neuracode, a nonprofit that focuses on inspiring students to learn more about machine learning. Additionally, he is on the board of Quantum Computing Club and Computer Science Club at his high school. He has taken on internships as a software developer and machine learning research at The College of New Jersey. In his free time, he loves to develop mobile apps, design websites, and work on his own coding projects."
                />
                <Card
                    imgURL={srishti}
                    name="Srishti Venkatesan"
                    position="Chief Operating Officer"
                    des="Srishti Venkatesan is a freshman at Leigh High School. She is passionate about all things STEM, but especially loves the fields of mathematics and biology. As someone who appreciates community engagement, Srishti actively volunteers in her neighborhood by tutoring and helping out in any way she can. Aside from STEMEY, she is part of her high school’s leadership class, serves as a student representative for the Bay Area Youth Society for Neuroscience, and is a member of several STEM clubs at Leigh. In her free time, she loves to dance, play the trumpet, and travel. In STEMEY, she is part of the math team, specifically an algebra instructor, and she is super exited for this upcoming year!"
                />
                <Card
                    imgURL={amiruthaa}
                    name="Amiruthaa Amudh"
                    position="Chief Operating Officer"
                    des="Amiruthaa Amudh is a student at Leigh High School who loves to delve deeper into STEM-related fields."
                />
            </div>
        </div>
    </div>
    )
}
// imgURL name des