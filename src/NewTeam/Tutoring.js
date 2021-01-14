import React from "react";
import "./NewTeam.css";
import Card from "./TeamCard";
import matilda from "./InstructorImages/matilda.jpg";
import casey from "./InstructorImages/caseylopez.jpg";
import elyssa from "./InstructorImages/elyssa.jpg"


export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Tutoring/Activities</h1>
            <div class="con">

                <Card
                    imgURL={matilda}
                    name="Matilda Eriksson"
                    position="Tutoring Co-Director"
                    des="Matilda Eriksson is a senior at Leigh High School. She is passionate about various STEM related subjects, currently focusing on mathematics, biology and physics. She has completed AP Physics 1 and is currently taking AP biology, Computer science, and AP calculus. She is also a part of California Scholarship Federation, Science National Honors Society and Link Crew. She loves working with kids and works as an assistant teacher for the Swedish School of Silicon Valley where she teaches kids Swedish."
                />

                <Card
                    imgURL={casey}
                    name="Casey Lopez"
                    position="Tutoring Co-Director"
                    des=""
                />

                <Card
                    imgURL={elyssa}
                    name="Elyssa Wolter"
                    position="Activities Director"
                    des="Elyssa Wolter is a senior at Leigh High School. She is a member of the Science National Honor Society, California Scholarship Federation, National Honor Society, and Link Crew. She enjoys teaching and working with kids and has worked as a babysitter and soccer referee since middle school and the past two summers she was a camp counselor at Mulberry School. She is the Activities Director of STEMEY, is apart of the FCSN live classes, and is on the strategy team."
                />

            </div>
        </div>
    </div>
    )
}
// imgURL name des