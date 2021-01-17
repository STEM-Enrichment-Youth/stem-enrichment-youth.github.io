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
                    des="Casey Lopez is a junior at Olympian High School. She loves biology and math, and works to further accessible STEM education for others. She helps run Olympian’s Helyx Initiative non-profit chapter, where she coordinates tutoring, review sessions, and career panels. She is a long-term member of Better Education for Women in Science and Engineering (BE WiSE). She has received recognition for her Rheumatoid Arthritis research with the Scripps Research Institute 2020 SciMET Competition and seeks to further this research in the future. Hoping to enter the medical field one day, Casey is a public health intern on a Sexual Health Advisory Board Advocated By Youth (SHABABY) and volunteers at her local SHARP hospital as a convalescent center aide. Outside of STEM, Casey is a two year co-captain of Olympian Colorguard and Varsity Winterguard, treasurer of Olympian Dance Company, a Link Crew leader, Peer Mediator, School Site Council chairperson, Chula Vista Animal Shelter volunteer, and a part of the Olympian Band Council Student Life Team.                    "
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