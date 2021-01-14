import React from "react";
import "./NewTeam.css";
import Card from "./TeamCard";
import diana from "./InstructorImages/diana.jpg";
import katherine from "./InstructorImages/katherine.jpg";
import sophie from "./InstructorImages/sophie.jpeg";
import arun from "./InstructorImages/arun.jpg";
import amy from "./InstructorImages/amynam.jpg";
import defaultInstructor from "../icons/head-brains.png";


export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Podcast</h1>
            <div class="con">

                <Card
                    imgURL={diana}
                    name="Diana Poplacenel"
                    position="Podcast Lead"
                    des="Diana Poplacenel is the co-founder of STEM Enrichment Youth, and a founding member and officer of Leigh High School’s Biology & Chemistry Olympiad, Science Bowl, and Science National Honors Society clubs. She is passionate about the intersection between biology and computer science, and has taken HarvardX and Johns Hopkins’ Neuroscience and Bioinformatics courses. She is a semifinalist in the USA Biology Olympiad and a former student at the Biomedical Engineering Innovation Program at Johns Hopkins. She currently leads the Computer Science Connect RWC Class at STEMEY. "
                />
                <Card
                    name="Arun Yadavalli"
                    des="Arun is a rising junior at Leigh. He is an officer of LEOs at Leigh, an organizing committee member of the badminton team, varsity badminton player, a member of the Leigh robotics club, California Scholarship Federation, Leigh Science Olympiad for two years and a member of Dartmouth science olympiad for three years. He has taken AP Computer Science A as well as some others and has experience coding in JAVA. Arun has a keen interest in robotics and has won awards in multiple FTC robotics competitions. As of now he is making software for a company,  scheduling meetings with various professional badminton players  around the globe for online meetings with the Leigh Badminton team, and also studying for the deadly SAT. In his spare time Arun practices violin, talks to his friends, bakes, cooks, bikes, and codes. He is looking forward to teaching some JAVA :)"
                    imgURL={arun}
                />
                <Card
                    imgURL={defaultInstructor}
                    name="Amogh Tantradi"
                    des=""
                />

                <Card
                    name="Sophie Takmopoulos"
                    imgURL={sophie}
                    des="Sophie Takmopoulos is a rising senior at Sanford H. Calhoun High School in Merrick, NY. In school, she is a co-founder of C.O.P.E. (Collectively Overcoming Problems Effectively) a mental health initiative organization and club, a part of Science Olympiads, a member of Dialect (Philosophy Club), and a member of Calhoun’s Literary Magazine: Pegasus and Science Honors Society. She was also the Vice President of Sophomore Class and has been a varisty tennis player since sophomore year. Outside of school she is a member of the TASK Force Youth Advisory Council (Sub-Committee), is a director at the organization Project Positivity, and blogs for the STEAM On Team. She was also accepted into the Stevens Institute of Technology Pre-Medical Biology Summer Program and the Boston Leadership Institute Biomedical Engineering Summer Program."
                />
                <Card
                    name="Katherine Liu"
                    imgURL={katherine}
                    des="Katherine Liu is a rising senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. She has participated in math competitions since middle school, and she is an AIME Qualifier, scoring a 9 on the AIME this year. Her other activities include competitive dance and drawing, which she has won several awards and achievements in."
                />
                <Card
                    name="Amy Nam"
                    imgURL={amy}
                    des="Amy is a rising senior at Leigh High School with an interest in chemistry. She is a member of the California Scholarship Federation and National Honors Society. She also plays clarinet in the Leigh Wind Ensemble and San Jose Youth Symphony and has performed in the California All-State Honor Band and various charity orchestras. She has tutoring experience from NHS tutoring and volunteering as a teacher assistant at the Holy Korean Martyrs Catholic Church Korean School."
                />


            </div>
        </div>
    </div>
    )
}
// imgURL name des