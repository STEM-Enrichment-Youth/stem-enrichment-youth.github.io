import React from "react";
import "./NewTeam.css";
import Card from "./TeamCard";
import defaultInstructor from "../icons/head-brains.png";
import matilda from "./InstructorImages/matilda.jpg";
import casey from "./InstructorImages/caseylopez.jpg";


export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Tutoring</h1>
            <div class="con">

                <Card
                    imgURL={matilda}
                    name="Matilda Eriksson"
                    position="Tutoring Co-Director"
                    des="Matilda Eriksson is a senior at Leigh High School. She is passionate about various STEM related subjects, currently focusing on mathematics, biology and physics. She has completed AP Physics 1 and is currently taking AP biology, Computer science, and AP calculus. She is also a part of California Scholarship Federation, Science National Honors Society and Link Crew. She loves working with kids and works as an assistant teacher for the Swedish School of Silicon Valley where she teaches kids Swedish. Matilda is on the Strategy team as well as the events team for STEMEY."
                />

                <Card
                    imgURL={casey}
                    name="Casey Lopez"
                    position="Tutoring Co-Director"
                    des=""
                />

            </div>
        </div>
    </div>
    )
}
// imgURL name des