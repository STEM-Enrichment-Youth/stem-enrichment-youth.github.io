import React from "react";
import "./NewTeam.css";
import Navbar from "../Navbar.js";
import Card from "./TeamCard";
import casey from "./InstructorImages/casey.jpg";
import emily from "./InstructorImages/emily.jpg";
import justin from "./InstructorImages/justin.jpg";
import katherine from "./InstructorImages/katherine.jpg";
import brianado from "./InstructorImages/brianado.jpg";
import elyssa from "./InstructorImages/elyssa.jpg";
import diana from "./InstructorImages/diana.jpg";

export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar />
        <div class="new-team">
            <h1>FCSN</h1>
            <div class="con">

                <Card
                    name="Casey Lin"
                    imgURL={casey}
                    des="Casey Lin is a junior at Leigh High School. She is a member of multiple groups including the National Honors Society, the California Scholarship Federation, Link Crew, and Keystone. She’s the secretary of the Leigh High School Biomedical Engineering Society. Casey and her team competed in, and won, the Berkeley Biomedical Engineering High School Competition. Casey is a field hockey coach and referee and hopes to continue playing at Leigh later in the year. She is now taking AP Physics 1, AP Calculus, and AP English Language and Composition. Over the summer, Casey taught both math and chemistry classes with STEMEY, and made chemistry activities. Moving forward, she is excited to be the Science Lead for the FCSN class, and to teach the FCSN math class and live geometry class."
                    position="FCSN Science Lead"
                />

                <Card
                    name="Emily Agur"
                    imgURL={emily}
                    position="FCSN Math Lead"
                    des="Emily is a senior at Leigh High School. She is a co-founder and officer in Leigh's Science National Honor Society Club. She has tutoring experience through National Honor Society Club at leigh. She also volunteers at local events through the California Scholarship Federation at Leigh. At school she is also a part of sideline cheerleading,as well as competitive cheerleading where they took home 1st place at CCS championships and 3rd place at USA nationals. She is a devoted pianist and has been playing since she was 5 years old. She is also fluent in Chinese and English and has been studying Spanish for 4 years. She has been apart of STEMEY since the beginning and started out as a Algebra instructor over the summer, and for the fall semester she has trasferred over as the FCSN Math Lead."
                />

                <Card
                    name="Justin Liu"
                    imgURL={justin}
                    position="FCSN Class Instructor"
                    des="Justin Liu is a senior at Leigh High School. He is an officer of the Science National Honors Society and co-president of the Physics Olympiad. He is a member of National Honors Society and California Scholarship Federation, Link Crew, and he is also a peer tutor at Leigh. He got a 36 on the ACT. Outside of school, he volunteers at Friends of Children with Special Needs and works at Kumon. He is fluent in Mandarin and English. He plays the bassoon, clarinet, and piano. Also, Justin does fencing competitively and is the alternate for the 2020 USA National Team while also part of the mentor program on his club team. He is looking forward to teaching Math at STEMEY."
                />      

                <Card
                    name="Katherine Liu"
                    imgURL={katherine}
                    position="FCSN Class Instructor"
                    des="Katherine Liu is a senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. She has participated in math competitions since middle school, and she is an AIME Qualifier. Her other activities include competitive dance and drawing, which she has won several awards and achievements in. She is a Co Founder and the Chief Operating Officer of STEMEY, as well as the Lead Instructor for the Competition Math Class and an instructor for the FCSN classes."
                /> 

                <Card
                    name="Briana Do"
                    imgURL={brianado}
                    position="FCSN Class Instructor"
                    des="Briana Do is a senior at Leigh High School. She is a involved in various leadership and STEM groups including the Science National Honor Society, Leos, Link Crew, and is vice-president of BSA's Venturing Crew 719. She is fluent in english and vietnamese and has experience outside of school tutoring young kids in math and reading.Over the summer, she helped create the acitivites curriculumn for the biology class, created promotional materials for STEM World, and started a small buisness for her artwork. She is currently a part of the events team, helping teach the FCSN live classes, and is the design team co-lead."
                />

                <Card
                    name="Elyssa Wolter"
                    imgURL={elyssa}
                    position="FCSN Class Instructor"
                    des="Elyssa Wolter is a senior at Leigh High School. She is a member of the Science National Honor Society, California Scholarship Federation, National Honor Society, and Link Crew. She enjoys teaching and working with kids and has worked as a babysitter and soccer referee since middle school and the past two summers she was a camp counselor at Mulberry School. She is the Activities Director of STEMEY, is apart of the FCSN live classes, and is on the strategy team."
                />
                <Card
                    imgURL = {diana}
                    name = "Diana Poplacenel"
                    position = "Chief Executive Officer"
                    des="     Diana Poplacenel is the co-founder of STEM Enrichment Youth, and a founding member and officer of Leigh High School’s Biology & Chemistry Olympiad, Science Bowl, and Science National Honors Society clubs. She is passionate about the intersection between biology and computer science, and has taken HarvardX and Johns Hopkins’ Neuroscience and Bioinformatics courses. She is a semifinalist in the USA Biology Olympiad and a former student at the Biomedical Engineering Innovation Program at Johns Hopkins. She currently leads the Computer Science Connect RWC Class at STEMEY. "
                /> 

            </div>
        </div>
    </div>
    )
}
// imgURL name des