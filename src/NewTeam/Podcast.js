import React from "react";
import "./NewTeam.css";
import Navbar from "../Navbar.js";
import Card from "./TeamCard";
import defaultInstructor from "../icons/head-brains.png";
import diana from "./InstructorImages/diana.jpg";
import aiswarya from "./InstructorImages/aiswarya.jpeg";
import katherine from "./InstructorImages/katherine.jpg";
import sophie from "./InstructorImages/sophie.jpeg";
import arun from "./InstructorImages/arun.jpg";
import aryan from "./InstructorImages/aryan2.jpg";


export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar />
        <div class="new-team">
            <h1>Podcast</h1>
            <div class="con">

                <Card
                    imgURL={aiswarya}
                    name="Aiswarya Saravanan"
                    position="Podcast Creation Lead"
                    des="Aiswarya Saravanan is a rising junior at Plymouth High School from Michigan, USA. She loves all things STEM and activism, and she is super passionate about neuroscience and biomedicial engineering in general. She is part of Simply Neuroscience and STEM Without Boundaries, where she is the Director of Sponsorships. She also recently started her own non-profit organization called Basically Biomedicine to educate people in the biomedical fields. In STEMEY, she is part of the anatomy team, molecular biology team, and the podcast team, and she is super excited to make a difference!"
                />

                <Card
                    imgURL={diana}
                    name="Diana Poplacenel"
                    // position = ""
                    des="Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a founding member of Science Bowl and Science Olympiad. She is the co-founder of STEM Enrichment Youth and will be leading the neuroscience class. She has experience working with middle school students as an official percussion instructor for Union Middle School. She has completed Harvard’s three Fundamentals of Neuroscience courses as well as four of John Hopkins Bioinformatics courses through Coursera, and is currently in the Biomedical Engineering Innovation program at John Hopkins. She is also a semifinalist in the USA Biology Olympiad."
                />


                <Card
                    imgURL={katherine}
                    name="Katherine Liu"
                    // position=""
                    des="Katherine Liu is a senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. She has participated in math competitions since middle school, and she is an AIME Qualifier. Her other activities include competitive dance and drawing, which she has won several awards and achievements in. She is a Co Founder and the Chief Operating Officer of STEMEY, as well as the Lead Instructor for the Competition Math Class and an instructor for the FCSN classes."
                />

                <Card
                    imgURL={arun}
                    name="Aryan Mathur"
                    // position=""
                    des="Aryan Mathur is currently a senior at Leigh High School. He is the Founder and Chief Executive Officer of Caravan LLC and has has a wide experience in leading organizations and creating strategic plans for improvements for businesses both internally and externelly. He is also the founder of Debate Club and the Vice President of AI and USACO club. He is a coding enthusiast who has experience in Java, Javascript, Go-lang and Typescript and is currently a USACO silver. He has had teaching experience volunteering for the First Tee of Silicon Valley to teach young kids golf. He has also been the captain of the Leigh High School Varsity Golf team for the last two years and has earned multiple awards in league competitions as well as outside competitions. Linkedin: www.linkedin.com/in/aryan-mathur"
                />

                <Card
                    imgURL={sophie}
                    name="Sophie T."
                    // position=""
                    des="Sophie Takmopoulos is a rising senior at Sanford H. Calhoun High School in Merrick, NY. In school, she is a co-founder of C.O.P.E. (Collectively Overcoming Problems Effectively) a mental health initiative organization and club, a part of Science Olympiads, a member of Dialect (Philosophy Club), and a member of Calhoun’s Literary Magazine: Pegasus and Science Honors Society. She was also the Vice President of Sophomore Class and has been a varisty tennis player since sophomore year. Outside of school she is a member of the TASK Force Youth Advisory Council (Sub-Committee), is a director at the organization Project Positivity, and blogs for the STEAM On Team. She was also accepted into the Stevens Institute of Technology Pre-Medical Biology Summer Program and the Boston Leadership Institute Biomedical Engineering Summer Program."
                />

                <Card
                    imgURL={arun}
                    name="Arun Y."
                    // position=""
                    des=""
                />


            </div>
        </div>
    </div>
    )
}
// imgURL name des